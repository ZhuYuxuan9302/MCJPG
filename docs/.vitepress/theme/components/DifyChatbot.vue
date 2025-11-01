<template>
  <div class="dify-chatbot-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  // 配置 Dify
  window.difyChatbotConfig = {
    token: '8phrRoAeEh9HDhOc',
    baseUrl: 'https://dify.mcjpg.org',
    inputs: {},
    systemVariables: {},
    userVariables: {}
  }

  // 加载脚本
  const script = document.createElement('script')
  script.src = 'https://dify.mcjpg.org/embed.min.js'
  script.id = '8phrRoAeEh9HDhOc'
  script.defer = true
  document.body.appendChild(script)

  // 添加样式
  const style = document.createElement('style')
  style.textContent = `
    #dify-chatbot-bubble-button {
      background-color: #1C64F2 !important;
    }
    #dify-chatbot-bubble-window {
      width: 24rem !important;
      height: 40rem !important;
    }
  `
  document.head.appendChild(style)
})

onUnmounted(() => {
  // 清理脚本
  const script = document.getElementById('8phrRoAeEh9HDhOc')
  if (script) script.remove()
  
  // 清理配置
  delete window.difyChatbotConfig
})
</script>
