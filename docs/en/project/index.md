---
title: Our Project
layoutClass: m-nav-layout
outline: [2, 3, 4]
description: Our Project List, where you can easily find all of our projects.
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# Project List

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />