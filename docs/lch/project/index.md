---
title: 我们的项目
layoutClass: m-nav-layout
outline: [2, 3, 4]
description: 我们的项目列表，在这里你可以方便的找到我们的各个项目
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 项目列表

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />