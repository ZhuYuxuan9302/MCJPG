<!-- components/ServerList.vue -->
<template>
    <div class="server-list">
      <!-- 搜索和筛选部分 -->
      <div class="filters">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索服务器..."
          class="search-input"
        />
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
            <img :src="server.icon" :alt="server.name" class="server-icon" />
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
  import { servers, serverTypes, serverVersions } from '../data/serverlist'
  
  const searchQuery = ref('')
  const selectedType = ref('')
  const selectedVersion = ref('')
  const shuffledServers = ref([...servers])
  
  // 随机排序函数
  const shuffleServers = () => {
    shuffledServers.value = [...servers].sort(() => Math.random() - 0.5)
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
  }
  
  .filters {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
  
  .search-input,
  .filter-select {
    padding: 8px 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
  }
  
  .server-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .server-card {
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    padding: 16px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }
  
  .server-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .card-content {
    display: flex;
    gap: 16px;
  }
  
  .server-icon {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
  }
  
  .server-info {
    flex: 1;
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
  }
  </style>