<template>
  <div>
    <sign-navbar type="signIn"></sign-navbar>
    <div class="main-content">
      <div class="signin-box">
        <div class="signin-type">
          <div class="qr-code">扫码登陆</div>
          <div class="account">账户登录</div>
        </div>
        <div class="signin-main">
          <div class="account-box">
            <b-field class="field-box">
              <b-input
                placeholder="Default"
                icon="account"
                icon-right="close-circle"
                icon-right-clickable
                @icon-right-click="clearIconClick"
              >
              </b-input>
            </b-field>
            <b-field class="field-box">
              <b-input
                type="password"
                placeholder="Default"
                icon="lock-question"
                password-reveal
              >
              </b-input>
            </b-field>
            <div class="forget"><a href="#">忘记密码</a></div>
            <div class="signin-btn">
              <b-button type="is-danger is-light" style="width: 100%"
                >登录</b-button
              >
            </div>
          </div>
        </div>
        <div class="signin-toolbar">
          <ul class="toolbar-ul">
            <li class="toolbar-li li-left">
              <a href="#"><b-icon icon="qqchat" size="is-small"></b-icon>QQ</a>
            </li>
            <li class="toolbar-li">
              <a href="#"
                ><b-icon icon="wechat" size="is-small"></b-icon>微信</a
              >
            </li>
            <li class="toolbar-li li-right">
              <b-icon
                icon="arrow-right-drop-circle-outline"
                size="is-small"
              ></b-icon
              ><a href="#">立即注册</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <sign-footer></sign-footer>
  </div>
</template>

<script>
import SignNavbar from '../components/SignNavbar'
import SignFooter from '../components/SignFooter'
export default {
  name: 'Signin',
  layout: 'portal',
  components: { SignFooter, SignNavbar },
  methods: {
    clearIconClick() {
      this.email = ''
    },
  },
}
</script>

<style scoped>
.main-content {
  height: 500px;
  width: 100%;
  background-color: #ff6600;
  overflow: hidden;
}
.signin-box {
  height: 380px;
  width: 350px;
  margin-left: 950px;
  margin-top: 30px;
  background-color: #ffffff;
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
.signin-main {
  height: 250px;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #f4f4f4;
}
.account-box {
  width: 300px;
  height: 150px;
  margin-top: 30px;
  margin-left: 25px;
}
.forget {
  margin-top: 15px;
  text-align: right;
  font-size: 13px;
}
.signin-btn {
  margin-top: 25px;
}
.toolbar-ul {
  margin-top: 20px;
  margin-left: 5px;
}

.toolbar-li {
  float: left;
  width: 80px;
  font-size: 14px;
  text-align: center;
}
.li-left {
  border-right: 1px solid #f4f4f4;
}
.li-right {
  width: 80px;
  float: right;
  margin-right: 20px;
}
</style>
