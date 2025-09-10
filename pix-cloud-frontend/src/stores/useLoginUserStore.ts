import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 存储登录用户信息的状态
 */
export const useCounterStore = defineStore('loginUser', () => {
  const loginUser = ref<any>({
    username: '未登录'
  })

  /**
   * 获取登录用户信息
   */
  async function fetchLoginUser() {
    //   todo 从后端获取登录用户信息
    // 测试用户登录，3秒后自动登录
    setTimeout(() => {
      loginUser.value = {
        username: 'admin',
        id: 1
      }
    }, 3000)
  }

  /**
   * 设置登录用户信息
   * @param newLoginUser
   */
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  //  返回
  return { loginUser, fetchLoginUser, setLoginUser }
})
