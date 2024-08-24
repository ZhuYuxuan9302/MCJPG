---
layout: page
title: 组织架构
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const Server = [
    {
    avatar: '/teammate/2/SuiFeng.jpg',
    name: '随风潜入夜',
    title: '技术支持',
    desc: '为MCJPG的官网编写，服务器插件维护做出了巨大贡献 | MC生电服腐竹',
  },
  {
    avatar: '/teammate/2/Ленинград.jpg',
    name: 'Ленинград',
    title: '网站作者',
    desc: '为MCJPG网站提供了源码级的技术支持',
  },
{
    avatar: 'https://api.flweb.cn/logos/my/fireguo.png',
    name: 'FireGuo',
    title: '技术支持',
    desc: '基础的技术问题解决（雾），风梨团队创始人（），状态监测与机器人负责人',
  },
{
    avatar: '/teammate/2/WERTYUS11.jpg',
    name: 'WERTYUS11',
    title: '审核/宣传员',
    desc: 'HappyDog服务器腐竹，啥都会但啥都不精通（）（）会Replay和Bcut',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>组织架构</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="Server" />

</VPTeamPage>
