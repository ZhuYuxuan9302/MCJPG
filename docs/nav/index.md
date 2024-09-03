---
layoutClass: m-nav-layout
outline: [2, 3, 4]
description: MC导航网,由MCJPG组织提供,我们致力于为大家提供更好用的Minecraft导航
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# MC导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />