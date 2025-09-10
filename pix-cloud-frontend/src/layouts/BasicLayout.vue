<template>
  <div id="basicLayout">
    <!--  100vh 可视高度100%  -->
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>

      <!--  内容区域    -->
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <!--   页脚   -->
      <a-layout-footer class="footer">
        <a href="http://www.shiliu.icu" target="_blank">像素港湾 by 十六</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">

import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped>
#basicLayout .header {
  padding-inline: 20px;
  background: white;
  color: unset;
  margin-bottom: 16px;
}

#basicLayout .content {
  padding: 20px;
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 45px;
}

#basicLayout .footer {
  background-color: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
