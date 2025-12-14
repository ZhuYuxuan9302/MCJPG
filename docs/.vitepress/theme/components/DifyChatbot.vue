<template>
  <div class="dify-chatbot-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isLoaded = ref(false)

// 加载 Dify 聊天机器人
function loadDifyChatbot() {
  if (isLoaded.value) return
  
  console.log('页面加载完成，立即加载 Dify 聊天机器人...')
  
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
  script.async = true
  document.body.appendChild(script)

  // 添加样式
  const style = document.createElement('style')
  style.textContent = `
    /* 聊天按钮样式 - 左下角 */
    #dify-chatbot-bubble-button {
      background-color: #1C64F2 !important;
      position: fixed !important;
      bottom: 20px !important;
      left: 20px !important;
      right: auto !important;
      z-index: 9999 !important;
      width: 60px !important;
      height: 60px !important;
      border-radius: 50% !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
    }
    
    /* 聊天窗口样式 - 左下角 */
    #dify-chatbot-bubble-window {
      width: 24rem !important;
      height: 40rem !important;
      max-height: calc(100vh - 120px) !important;
      position: fixed !important;
      bottom: 90px !important;
      left: 20px !important;
      right: auto !important;
      z-index: 9999 !important;
      border-radius: 12px !important;
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2) !important;
    }

    /* 移动端适配 */
    @media (max-width: 768px) {
      #dify-chatbot-bubble-button {
        bottom: 15px !important;
        left: 15px !important;
        width: 50px !important;
        height: 50px !important;
      }
      
      #dify-chatbot-bubble-window {
        width: calc(100vw - 20px) !important;
        height: calc(100vh - 100px) !important;
        bottom: 75px !important;
        left: 10px !important;
        right: 10px !important;
      }
    }
  `
  document.head.appendChild(style)
  
  isLoaded.value = true
}

onMounted(() => {
  // 页面加载完成后立即加载
  if (document.readyState === 'complete') {
    // 页面已经加载完成，立即加载
    loadDifyChatbot()
  } else {
    // 等待页面加载完成后立即加载
    window.addEventListener('load', loadDifyChatbot, { once: true })
  }
})

onUnmounted(() => {
  // 清理脚本
  const script = document.getElementById('8phrRoAeEh9HDhOc')
  if (script) script.remove()
  
  // 清理样式
  const styles = document.querySelectorAll('style')
  styles.forEach(style => {
    if (style.textContent.includes('#dify-chatbot-bubble-button')) {
      style.remove()
    }
  })
  
  // 清理配置
  delete window.difyChatbotConfig
  
  isLoaded.value = false
})
</script>

<style scoped>
.dify-chatbot-container {
  /* 占位容器 */
}
</style>