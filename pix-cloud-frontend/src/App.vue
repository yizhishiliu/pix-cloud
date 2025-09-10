<template>
  <div id="app">
    <!-- 引入基础布局组件 -->
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { healthUsingGet } from '@/api/mainController.ts'
import { useCounterStore } from '@/stores/useLoginUserStore.ts'

const loginUserStore = useCounterStore()
loginUserStore.fetchLoginUser()


healthUsingGet().then(res => {
  console.log(res)
})
</script>

<style scoped>

</style>
