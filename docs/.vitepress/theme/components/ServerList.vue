<!-- components/ServerList.vue -->
<template>
  <div class="server-list">
    <div class="filters">
      <div class="search-wrapper">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索服务器..."
          class="search-input"
        />
      </div>
      <div class="select-wrapper">
        <select v-model="selectedType" class="filter-select">
          <option value="">所有类型</option>
          <option v-for="type in serverTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
        <select v-model="selectedVersion" class="filter-select">
          <option value="">所有版本</option>
          <option v-for="version in serverVersions" :key="version" :value="version">
            {{ version }}
          </option>
        </select>
      </div>
    </div>
    <div class="server-grid">
      <a
        v-for="server in filteredServers"
        :key="server.id"
        :href="server.link"
        target="_blank"
        rel="noopener noreferrer"
        class="server-card"
      >
        <div class="card-content">
          <div class="server-icon-wrapper">
            <VPImage
              :image="processedIcon(server)"
              class="server-icon"
              loading="lazy"
            />
          </div>
          <div class="server-info">
            <h3 class="server-name">{{ server.name }}</h3>
            <div class="server-tags">
              <div class="tags-container">
                <span class="tag type-tag">{{ server.type }}</span>
                <span class="tag version-tag">{{ server.version }}</span>
                <template v-if="server.ip">
                  <span
                    class="tag status-tag"
                    :class="{ 'online': serverStatus[server.ip]?.online, 'offline': !serverStatus[server.ip]?.online }"
                  >
                    {{ serverStatus[server.ip]?.online ? '在线' : '离线' }}
                  </span>
                  <span
                    v-if="serverStatus[server.ip]?.online && serverStatus[server.ip]?.delay"
                    class="tag delay-tag"
                    :class="getDelayClass(serverStatus[server.ip]?.delay)"
                  >
                    {{ Math.round(serverStatus[server.ip]?.delay) }}ms
                  </span>
                  <span
                    v-if="serverStatus[server.ip]?.online"
                    class="tag players-tag"
                  >
                    {{ serverStatus[server.ip]?.players.online }}/{{ serverStatus[server.ip]?.players.max }}
                  </span>
                </template>
              </div>
            </div>
            <p class="server-description">{{ server.description }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { VPImage } from 'vitepress/theme'
import { servers, serverTypes, serverVersions } from '../data/serverlist'

const searchQuery = ref('')
const selectedType = ref('')
const selectedVersion = ref('')
const shuffledServers = ref([...servers])
const serverStatus = ref({})
const POLL_INTERVAL = 60000
let pollIntervalId = null

const processedIcon = (server) => {
  if (typeof server.icon === 'string') {
    return {
      src: server.icon,
      alt: server.name,
      width: 64,
      height: 64,
      style: 'object-fit: contain'
    }
  } else {
    return {
      src: server.icon.src,
      alt: server.icon.alt || server.name,
      width: server.icon.width || 64,
      height: server.icon.height || 64,
      style: 'object-fit: contain'
    }
  }
}

const getDelayClass = (delay) => {
  if (delay <= 100) return 'good'
  if (delay <= 300) return 'medium'
  return 'poor'
}

const checkServerStatus = async (ip) => {
  try {
    const encodedIp = encodeURIComponent(ip)
    const response = await fetch(`https://serverstatus.mcjpg.org/?ip=${encodedIp}`, {
      headers: { 'Accept': 'application/json' }
    })
    const data = await response.json()
    if (response.ok) {
      serverStatus.value[ip] = {
        online: data.online,
        players: {
          online: data.players?.online || 0,
          max: data.players?.max || 0
        },
        delay: data.delay,
        motd: data.motd?.plain || '',
        version: data.version || ''
      }
    } else {
      throw new Error('Server status check failed')
    }
  } catch {
    serverStatus.value[ip] = {
      online: false,
      players: { online: 0, max: 0 },
      delay: null,
      motd: '',
      version: ''
    }
  }
}

const shuffleServers = () => {
  const array = [...servers]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  shuffledServers.value = array
}

const filteredServers = computed(() => {
  return shuffledServers.value.filter(server => {
    const q = searchQuery.value.toLowerCase()
    const matchesSearch =
      server.name.toLowerCase().includes(q) ||
      server.description.toLowerCase().includes(q)
    const matchesType = !selectedType.value || server.type === selectedType.value
    const matchesVersion = !selectedVersion.value || server.version === selectedVersion.value
    return matchesSearch && matchesType && matchesVersion
  })
})

onMounted(() => {
  shuffleServers()
  servers.forEach(server => {
    if (server.ip) checkServerStatus(server.ip)
  })
  pollIntervalId = setInterval(() => {
    servers.forEach(server => {
      if (server.ip) checkServerStatus(server.ip)
    })
  }, POLL_INTERVAL)
})

onUnmounted(() => {
  if (pollIntervalId) clearInterval(pollIntervalId)
})
</script>

<style scoped>
.server-list, .server-list * {
  box-sizing: border-box;
}

.server-list {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: clip;
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.search-wrapper {
  flex: 1;
  min-width: 200px;
}

.select-wrapper {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  flex: 1 1 160px;
  min-width: 0;
}

.server-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}

.server-card {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  background: var(--vp-c-bg);
}

.server-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  gap: 16px;
}

.server-icon-wrapper {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
}

.server-icon {
  width: 100%;
  height: 100%;
}

.server-icon :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: contain !important;
}

.server-info {
  flex: 1;
  min-width: 0;
  width: 100%;
}

.server-name {
  margin: 0 0 8px 0;
  font-size: 1.2em;
  font-weight: 600;
}

.server-tags {
  margin-bottom: 8px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tags-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
  min-height: 22px;
  align-items: center;
}

.tag {
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8em;
  line-height: 1.2;
  white-space: nowrap;
  height: auto;
  align-self: center;
}

.server-tags::-webkit-scrollbar {
  display: none;
}

.server-tags {
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 6px;
}

.type-tag {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
}

.version-tag {
  background-color: var(--vp-c-green-soft);
  color: var(--vp-c-green);
}

.status-tag.online {
  background-color: var(--vp-c-green-soft);
  color: var(--vp-c-green);
}

.status-tag.offline {
  background-color: var(--vp-c-red-soft);
  color: var(--vp-c-red);
}

.delay-tag.good {
  background-color: var(--vp-c-green-soft);
  color: var(--vp-c-green);
}

.delay-tag.medium {
  background-color: var(--vp-c-yellow-soft);
  color: var(--vp-c-yellow);
}

.delay-tag.poor {
  background-color: var(--vp-c-red-soft);
  color: var(--vp-c-red);
}

.players-tag {
  background-color: var(--vp-c-gray-soft);
  color: var(--vp-c-gray);
}

.server-description {
  margin: 0;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  overflow-wrap: break-word;
}

@media (min-width: 640px) {
  .filters {
    flex-direction: row;
    align-items: center;
  }
  .search-wrapper {
    max-width: 450px;
  }
  .select-wrapper {
    flex: 1;
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .server-list {
    padding: 10px;
  }
  .server-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0;
  }
  .server-card {
    margin: 0;
    min-width: unset;
  }
  .tags-container {
    gap: 4px;
  }
  .tag {
    padding: 4px 6px;
    font-size: 0.8em;
  }
}

@media (max-width: 360px) {
  .filter-select {
    flex: 1 1 100%;
  }
}
</style>