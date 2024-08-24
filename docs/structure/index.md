---
layout: page
title: 我们的团队
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
    avatar: '/teammate/SuiFeng.jpg',
    name: '随风潜入夜',
    title: '技术支持',
    desc: '为MCJPG的官网编写，服务器插件维护做出了巨大贡献 | MC生电服腐竹',
    links: [
      { icon: 'github', link: 'https://github.com/ZhuYuxuan9302' },
      { icon: '/icons/bilibili.svg', link: 'https://space.bilibili.com/495322167' }
    ]
  },
  {
    avatar: '/teammate/Ленинград.jpg',
    name: 'Ленинград',
    title: '网站作者',
    desc: '为MCJPG网站提供了源码级的技术支持',
  },
{
    avatar: '/teammate/fireguo.png',
    name: 'FireGuo',
    title: '技术支持',
    desc: '基础的技术问题解决（雾），风梨团队创始人（），状态监测与机器人负责人',
  },
{
    avatar: '/teammate/WERTYUS11.jpg',
    name: 'WERTYUS11',
    title: '审核/宣传员',
    desc: 'HappyDog服务器腐竹，啥都会但啥都不精通（）（）会Replay和Bcut',
  },
  {
    avatar: '/teammate/北🐟.jpg',
    name: '北🐟',
    title: '论坛主',
    desc: '社区论坛负责人，TuTuPixel服务器腐竹',
},
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>组织架构</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="Server" />

</VPTeamPage>
