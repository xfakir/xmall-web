<template>
  <div>
    <sign-navbar type="signIn"></sign-navbar>
    <div class="main-content">
      <div class="signin-box">
        <div class="signin-type">
          <div class="qr-code">扫码登陆</div>
          <div class="account">账户登录</div>
        </div>
        <div class="signin-main"></div>
        <div class="signin-toolbar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SignNavbar from '../components/SignNavbar'
export default {
  name: 'Signin',
  layout: 'portal',
  components: { SignNavbar },
}
</script>

<style scoped>
.main-content {
  height: 500px;
  width: 100%;
}
.signin-box {
  height: 400px;
  width: 350px;
  margin-left: 950px;
  margin-top: 10px;
  background-color: #999999;
}
.signin-type {
  height: 70px;
  border-bottom: 1px solid #f4f4f4;
}
.signin-type > div {
  float: left;
  width: 50%;
  text-align: center;
}
.qr-code {
  border-right: 1px solid #f4f4f4;
}
.account,
.qr-code {
  margin-top: 20px;
}
</style>
