<!-- components/ServerList.vue -->
<template>
  <div class="server-list">
    <!-- 搜索和筛选部分 -->
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

    <!-- 服务器卡片列表 -->
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
              <span class="tag type-tag">{{ server.type }}</span>
              <span class="tag version-tag">{{ server.version }}</span>
            </div>
            <p class="server-description">{{ server.description }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { VPImage } from 'vitepress/theme'
import { servers, serverTypes, serverVersions } from '../data/serverlist'

const searchQuery = ref('')
const selectedType = ref('')
const selectedVersion = ref('')
const shuffledServers = ref([...servers])

// 处理图标数据的函数
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

// 随机排序函数
const shuffleServers = () => {
  const array = [...servers]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  shuffledServers.value = array
}

// 初始化时随机排序
onMounted(() => {
  shuffleServers()
})

// 过滤后的服务器列表
const filteredServers = computed(() => {
  return shuffledServers.value.filter(server => {
    const matchesSearch = server.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      server.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesType = !selectedType.value || server.type === selectedType.value
    const matchesVersion = !selectedVersion.value || server.version === selectedVersion.value
    return matchesSearch && matchesType && matchesVersion
  })
})
</script>

<style scoped>
.server-list {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
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
  flex-wrap: nowrap;
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
  flex: 1;
  min-width: 120px;
}

.server-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}

.server-card {
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
}

.server-name {
  margin: 0 0 8px 0;
  font-size: 1.2em;
  font-weight: 600;
}

.server-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.tag {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
}

.type-tag {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
}

.version-tag {
  background-color: var(--vp-c-green-soft);
  color: var(--vp-c-green);
}

.server-description {
  margin: 0;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  overflow-wrap: break-word;
}

/* 响应式布局 */
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
  .server-grid {
    grid-template-columns: minmax(280px, 1fr);
    padding: 0 16px;
  }
  
  .server-list {
    padding: 10px;
  }
  
  .server-card {
    margin: 0 auto;
    max-width: 100%;
  }
}
</style>