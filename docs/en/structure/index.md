---
layout: page
title: Our Team
description: List of MCJPG Organization Team Members
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const code = [
    {
    avatar: '/teammate/SuiFeng.jpg',
    name: '随风潜入夜',
    title: 'Web Developer',
    desc: 'MCJPG official website maintenance | AI Project Lead | Admin of the MC生电服 server',
    links: [
      { icon: 'github', link: 'https://github.com/ZhuYuxuan9302' },
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92C65.6 463.2 43.8 454.2 26.7 436.8C9.7 419.4 .8 396.5 0 368.2V169.8C.8 143.8 9.7 122.2 26.7 104.1C43.8 87.8 65.6 78.8 92 78H121.4L96.1 52.2C90.3 46.5 87.4 39.2 87.4 30.4C87.4 21.6 90.3 14.3 96.1 8.6C101.8 2.9 109.1 0 117.9 0C126.7 0 134 2.9 139.8 8.6L213.1 78H301.1L375.6 8.6C381.7 2.9 389.2 0 398 0C406.8 0 414.1 2.9 419.9 8.6C425.6 14.3 428.5 21.6 428.5 30.4C428.5 39.2 425.6 46.5 419.9 52.2L394.6 78L423.9 78C450.3 78.8 471.9 87.8 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.1C86.5 140.9 78.6 144.2 72.5 150.3C66.3 156.4 63.1 164.2 62.7 173.8V368.2C62.7 377.4 66 385.2 72.5 391.7C79 398.2 86.9 401.5 96.1 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"/></svg>'
        },
         link: 'https://space.bilibili.com/495322167' }
    ]
  },
  {
    avatar: '/teammate/fireguo.png',
    name: 'FireGuo',
    title: 'Technical Support',
    desc: 'Solves basic technical issues (kinda), founder of the 风梨团队, and head of status monitoring and robotics.',
  },
  {
    avatar: '/teammate/gufan.jpg',
    name: '孤帆',
    title: 'Technical Support',
    desc: 'Python Development',
  },
  {
    avatar: '/teammate/pingguomc.png',
    name: 'pingguomc',
    title: 'Backend and Plugin Technologist',
    desc: 'Server owner of RedStarMC server | Does some miscellaneous work',
  },
]

const community = [
  {
    avatar: '/teammate/Xiaosan.jpg',
    name: 'Xiaosan',
    title: 'Publicist',
    desc: 'Admin of the 曙光生电服务器, the only one with a lot of free time after school starts.',
  },
  {
    avatar: '/teammate/WERTYUS11.jpg',
    name: 'WERTYUS11',
    title: 'Auditor',
    desc: 'Admin of the HappyDog server; a jack of all trades but master of none. Knows how to use Replay and Bcut.',
  },
  {
    avatar: '/teammate/yubaozhi.jpg',
    name: '鱼包纸',
    title: 'Publicist',
    desc: 'Responsible for paperwork and copywriting.',
  },
  {
    avatar: '/teammate/叫我董老实-元气TaskMgr.jpg',
    name: '叫我董老实-元气TaskMgr',
    title: 'Community Admin',
    desc: 'Owner of the RBS生电服务器 (not yet a member server), served as a trainee community admin during the National Day holiday. Responsible for community management. A jack of all trades but master of none.',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92C65.6 463.2 43.8 454.2 26.7 436.8C9.7 419.4 .8 396.5 0 368.2V169.8C.8 143.8 9.7 122.2 26.7 104.1C43.8 87.8 65.6 78.8 92 78H121.4L96.1 52.2C90.3 46.5 87.4 39.2 87.4 30.4C87.4 21.6 90.3 14.3 96.1 8.6C101.8 2.9 109.1 0 117.9 0C126.7 0 134 2.9 139.8 8.6L213.1 78H301.1L375.6 8.6C381.7 2.9 389.2 0 398 0C406.8 0 414.1 2.9 419.9 8.6C425.6 14.3 428.5 21.6 428.5 30.4C428.5 39.2 425.6 46.5 419.9 52.2L394.6 78L423.9 78C450.3 78.8 471.9 87.8 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.1C86.5 140.9 78.6 144.2 72.5 150.3C66.3 156.4 63.1 164.2 62.7 173.8V368.2C62.7 377.4 66 385.2 72.5 391.7C79 398.2 86.9 401.5 96.1 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"/></svg>'
        },
         link: 'https://space.bilibili.com/1655020702' }
    ]
  },
  {
    avatar: '/teammate/北尘.png',
    name: '北尘',
    title: 'Auditor',
    desc: 'Owner of FurCraft server and proxy owner of Amethyst server'
  },
  {
    avatar: '/teammate/二氧化钛.jpg',
    name: '二氧化钛',
    title: 'Community Admin',
    desc: 'Owner of the MCIC server',
  },
  {
    avatar: '/teammate/明镜台.jpg',
    name: '明镜台',
    title: 'Publicist',
    desc: 'Founder of 镜羽工作室',
  },
  {
    avatar: '/teammate/Redapple_one.png',
    name: 'Redapple_one',
    title: 'Publicist',
    desc: 'Admin of TAC-Server, knows a thing or two about video editing, uses DaVinci Resolve, PR, ReplayMod, and FlashBack.',
  }
]

</script>

<VPTeamPage>

  <VPTeamPageTitle>
    <template #title>Our team</template>
    <template #lead>Meet the members behind MCJPG, an MC server technical communication and advocacy organization dedicated to improving the server ecosystem through faster, safer software and better advocacy.</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Development Department</template>
    <template #lead>MCJPG developers help write code, review member service requests, and keep the project alive. They keep MCJPG running by contributing new community services and helping to improve old ones!</template>
    <template #members>
      <VPTeamMembers size="small" :members="code" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Community Department</template>
    <template #lead>MCJPG Community Department maintains the order of the community by reviewing new memberships and publicizes the organization to ensure that MCJPG remains a healthy and vibrant community.</template>
    <template #members>
      <VPTeamMembers size="small" :members="community" />
    </template>
  </VPTeamPageSection>

</VPTeamPage>

<center>Contributors who helped us add servers:</center>

<center><a href="https://github.com/MineJPGCraft/MCJPG/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MineJPGCraft/MCJPG" alt="Contributors"/>
</a></center>

<center>Tribute to the participants above!</center>