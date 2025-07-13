---
layout: page
title: 吾輩之隊也
description: MCJPG組織團隊名錄
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
    name: '隨風潛入夜',
    title: '網路營造',
    desc: 'MCJPG官網護持｜AI計畫主事｜MC生電服之主',
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
    title: '技術支援',
    desc: '解基石之技難，風梨團隊創始人，狀况監察與役機計畫主事',
  },
  {
    avatar: '/teammate/gufan.jpg',
    name: '孤帆',
    title: '技術支援',
    desc: 'Python營造',
  },
  {
    avatar: '/teammate/pingguomc.png',
    name: 'pingguomc',
    title: '後端職司',
    desc: '朕清歌天譴了闡胭脂飲務器之患，幸飲務器之關｜及亂者遂至',
  },
]

const community = [
  {
    avatar: '/teammate/Xiaosan.jpg',
    name: 'Xiaosan',
    title: '社群司理',
    desc: '曙光生電伺服器之主，惟此一人，開學之後閒暇甚多者也。',
  },
  {
    avatar: '/teammate/WERTYUS11.jpg',
    name: 'WERTYUS11',
    title: '審核',
    desc: 'HappyDog伺服器之主，善Replay與Bcut之術。',
  },
  {
    avatar: '/teammate/yubaozhi.jpg',
    name: '魚包紙',
    title: '宣傳',
    desc: '司文牘',
  },
  {
    avatar: '/teammate/叫我董老实-元气TaskMgr.jpg',
    name: '叫我董老實-元氣TaskMgr',
    title: '社群司理',
    desc: 'RBS生電伺服器（暫非成員伺服器也）之主，國慶之際，暫担任社群管理之職。負社區管理之责，亦博而不專也。',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92C65.6 463.2 43.8 454.2 26.7 436.8C9.7 419.4 .8 396.5 0 368.2V169.8C.8 143.8 9.7 122.2 26.7 104.1C43.8 87.8 65.6 78.8 92 78H121.4L96.1 52.2C90.3 46.5 87.4 39.2 87.4 30.4C87.4 21.6 90.3 14.3 96.1 8.6C101.8 2.9 109.1 0 117.9 0C126.7 0 134 2.9 139.8 8.6L213.1 78H301.1L375.6 8.6C381.7 2.9 389.2 0 398 0C406.8 0 414.1 2.9 419.9 8.6C425.6 14.3 428.5 21.6 428.5 30.4C428.5 39.2 425.6 46.5 419.9 52.2L394.6 78L423.9 78C450.3 78.8 471.9 87.8 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.1C86.5 140.9 78.6 144.2 72.5 150.3C66.3 156.4 63.1 164.2 62.7 173.8V368.2C62.7 377.4 66 385.2 72.5 391.7C79 398.2 86.9 401.5 96.1 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"/></svg>'
        },
         link: 'https://space.bilibili.com/1655020702' }
    ]
  },
  {
  avatar: '/teammate/北尘.png',
  name: '北塵',
  title: '審核',
  desc: 'FurCraft司服，Amethyst署理司服'
  },
  {
    avatar: '/teammate/二氧化钛.jpg',
    name: '二氧化鈦',
    title: '社群司理',
    desc: 'MCIC服之主',
  },
  {
    avatar: '/teammate/明镜台.jpg',
    name: '明鏡臺',
    title: '宣傳兼設計',
    desc: '鏡羽工坊創始人',
  },
  {
    avatar: '/teammate/Redapple_one.png',
    name: 'Redapple_one',
    title: '宣傳',
    desc: 'TAC-Server伺服器之主，略通剪輯之法，能用達芬奇、PR、ReplayMod、FlashBack諸器。',
  }

]

</script>

<VPTeamPage>

  <VPTeamPageTitle>
    <template #title>吾輩之隊陣</template>
    <template #lead>請容吾介紹MCJPG之幕後英豪，此乃一專注於MC伺服器技術研討與宣傳之團體，矢志以更迅疾、更安穩之軟體，及更周全之宣傳策略，優化伺服器之生態環境。</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>開發部</template>
    <template #lead>MCJPG之開發者，助力編撰程式碼，審閱成員伺服請求，並維繫項目之生機。彼等以獻出新社群服務，並助益舊有服務之完善，使MCJPG得以運轉無虞。</template>
    <template #members>
      <VPTeamMembers size="small" :members="code" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>社群部</template>
    <template #lead>MCJPG之社群部門，專司審核新入成員之伺服請求，維護交流社群之秩序，行組織之宣傳，以保障MCJPG擁有康健向上之生命力。</template>
    <template #members>
      <VPTeamMembers size="small" :members="community" />
    </template>
  </VPTeamPageSection>

</VPTeamPage>

<center>襄助吾等、增益伺服之諸君：</center>

<center><a href="https://github.com/MineJPGCraft/MCJPG/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MineJPGCraft/MCJPG" alt="Contributors"/>
</a></center>

<center>上列諸賢，敬謝之至！</center>