---
title: MC Nav
layoutClass: m-nav-layout
outline: [2, 3, 4]
description: MC navigation network, provided by the MCJPG Organization, we are committed to providing better use of Minecraft navigation!
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# Minecraft Nav

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

## Help us add links

::: tip How to modify the navigation?
[docs/en/nav/data.ts](https://github.com/MineJPGcraft/MCJPG/blob/main/docs/en/nav/data.ts) is the database for navigation, just follow the JSON format for editing.  
If you are a webmaster, please add [MCJPG Organization](https://mcjpg.org/ "MCJPG组织官网") to the appropriate location on your site，[MCJPG Organization](https://mcjpg.org/ "MCJPG Website") thanks a lot

TIP: [What is JSON ?](https://www.runoob.com/json/json-tutorial.html)
:::

::: tip Where are the icons placed? How is it referenced?

Icons are located in [docs/public/icons/nav/](https://github.com/MineJPGcraft/MCJPG/tree/main/docs/public/icons/nav/) They are already categorized, just add them by category.

``` json{1}
    # Here's an example, which can also be edited in the same format
    {
        icon: '/icons/nav/百科/中文 Minecraft Wiki.ico',
        title: '中文 Minecraft Wiki',
        desc: 'Minecraft最著名的、最权威的非官方百科网站',
        link: 'https://zh.minecraft.wiki/',
    },
```
:::

## Special thanks

Thanks to [maomao1996](https://github.com/maomao1996/) for the development of the navigation style module  
Thanks to [磁铁开发部（MDD）](https://github.com/MSCMDD "磁铁开发部（MDD）") for secondary development of navigation styles and content bug fixes and navigation additions
