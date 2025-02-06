---
title: 吾輩之項目
layoutClass: m-nav-layout
outline: [2, 3, 4]
description: 吾輩之項目名錄，其列吾輩之項目於此，便君查找
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 項目名錄

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />
