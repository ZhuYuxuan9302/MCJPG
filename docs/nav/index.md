---
title: MC导航
layoutClass: m-nav-layout
outline: [2, 3, 4]
description: MC导航网,由MCJPG组织提供,我们致力于为大家提供更好用的Minecraft导航
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# Minecraft导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

## 帮助我们添加链接

::: tip 如何修改导航？
[docs/nav/data.ts](https://github.com/MineJPGcraft/MCJPG/blob/main/docs/nav/data.ts) 是导航的数据库，遵循 JSON 格式编辑即可。  
如果您是站长，麻烦添加 [MCJPG组织](https://mcjpg.org/ "MCJPG组织官网") 到您的站点相应位置，[MCJPG组织](https://mcjpg.org/ "MCJPG组织官网") 感激不尽

TIP: [什么是 JSON？](https://www.runoob.com/json/json-tutorial.html)
:::

::: tip 图标放在哪里？如何引用？

图标位于 [docs/public/icons/nav/](https://github.com/MineJPGcraft/MCJPG/tree/main/docs/public/icons/nav/) 下已经进行分类，按照分类添加即可。

``` json{1}
    # 这是一个例子，亦可参照其格式进行编辑
    {
        icon: '/icons/nav/百科/中文 Minecraft Wiki.ico',
        title: '中文 Minecraft Wiki',
        desc: 'Minecraft最著名的、最权威的非官方百科网站',
        link: 'https://zh.minecraft.wiki/',
    },
```
:::

## 特别鸣谢

感谢 [maomao1996](https://github.com/maomao1996/) 对于导航样式模块的开发  
感谢 [磁铁开发部（MDD）](https://github.com/MSCMDD "磁铁开发部（MDD）") 对导航样式的二次开发以及内容错误的修正与导航的补充
