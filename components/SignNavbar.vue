<template>
  <div class="sign-navbar">
    <div class="navbar-left">
      <a href="" class="logo">aa</a>
      <div class="logo-title">欢迎{{ barType }}</div>
      <div v-if="isShow" class="is-signup">
        已有账号？
        <nuxt-link to="/signin">请登录></nuxt-link>
      </div>
    </div>
    <div class="navbar-right"></div>
  </div>
</template>

<script>
export default {
  name: 'SignNavbar',
  props: {
    type: {
      required: true,
      type: String,
    },
  },
  computed: {
    isShow() {
      return this.type === 'signUp'
    },
    barType() {
      return this.type === 'signUp' ? '注册' : '登录'
    },
  },
}
</script>

<style scoped>
.sign-navbar {
  height: 100px;
  width: 100%;
  background-color: aliceblue;
}
.logo {
  display: inline-block;
  background-color: chartreuse;
  width: 150px;
  height: 60px;
  float: left;
  margin-top: 20px;
  margin-left: 200px;
}
.logo-title {
  float: left;
  margin-left: 15px;
  margin-top: 30px;
  font-size: 24px;
  line-height: 32px;
}
.is-signup {
  float: right;
  margin-top: 60px;
  margin-right: 200px;
  font-size: 16px;
  color: #999;
}
</style>
