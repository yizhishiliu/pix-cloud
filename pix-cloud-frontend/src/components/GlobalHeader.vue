<template>
  <div id="globalHeader">
    <!--  :wrap="false" 禁止换行  -->
    <a-row :wrap="false">
      <!--   Grid栅格布局 flex="200px 固定200宽   -->
      <a-col flex="200px">
        <!--  router-link 点击包裹内容跳转  -->
        <router-link to="/">
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="logo">
            <div class="title">像素港湾</div>
          </div>
        </router-link>
      </a-col>
      <!--  flex="auto" 自动伸缩   -->
      <a-col flex="auto">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="doMenuClick" />
      </a-col>
      <!--   flex="120px" 固定120宽   -->
      <a-col flex="120px">
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">
            {{ loginUserStore.loginUser.username }}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/useLoginUserStore.ts'

const loginUserStore = useCounterStore()

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页'
  },
  {
    key: '/about',
    label: '关于',
    title: '关于'
  },
  {
    key: '/others',
    label: h('a', { href: 'http://www.shiliu.icu', target: '_blank' }, '十六的 Blog')
  }
])

const router = useRouter()

// 当前高亮菜单项
const current = ref<string[]>([])
// 监听路由变化，更新高亮菜单项
router.afterEach((to, from, next) => {
  current.value = [to.path]
})
// 路由跳转事件
const doMenuClick = ({ key }) => {
  router.push({ path: key })
}
</script>

<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 42px;
}
</style>
