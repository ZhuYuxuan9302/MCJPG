---
title: 礦藝索引
layoutClass: m-nav-layout
outline: [2, 3, 4]
description: 礦藝索引網站,乃MCJPG組織提供之,吾輩力求為人人提供完善之礦藝索引
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 礦藝索引

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

## 助吾輩添加鏈接

::: tip 如何改之索引
[docs/nav/data.ts](https://github.com/MineJPGcraft/MCJPG/blob/main/docs/nav/data.ts) 乃索引之數據庫，以 JSON 格式寫入即可。 
如果您是網站之主，煩請添 [MCJPG组织](https://mcjpg.org/ "MCJPG组织官网") 至君站點之相應位置，[MCJPG组织](https://mcjpg.org/ "MCJPG组织官网") 感激不盡！

TIP: [JSON 為何物？](https://www.runoob.com/json/json-tutorial.html)
:::

::: tip 圖標置於何處？如何引用？

圖標於 [docs/public/icons/nav/](https://github.com/MineJPGcraft/MCJPG/tree/main/docs/public/icons/nav/) 下已進行分類，按照分類添加即可。

``` json{1}
    # 此乃示例，亦可照此格式進行編輯
    {
        icon: '/icons/nav/百科/中文 Minecraft Wiki.ico',
        title: '中文 Minecraft Wiki',
        desc: '礦藝最著名、最權威之非官方百科網站',
        link: 'https://zh.minecraft.wiki/',
    },
```
:::

## 特別鳴謝

感謝 [maomao1996](https://github.com/maomao1996/) 對索引樣式模塊之開發 
感謝 [磁鐵開發部（MDD）](https://github.com/MSCMDD "磁铁开发部（MDD）") 對索引樣式之二次開發及內容修復、索引補充
