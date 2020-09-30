<template>
  <div>
    <sign-navbar type="signUp"></sign-navbar>
    <div class="main-content">
      <div class="step-bar">
        <b-steps v-model="activeStep" :has-navigation="false" size="is-small">
          <b-step-item
            step="1"
            label="验证手机号"
            :clickable="isStepsClickable"
          >
          </b-step-item>

          <b-step-item
            step="2"
            label="填写账号信息"
            :clickable="isStepsClickable"
            :type="{ 'is-success': isProfileSuccess }"
          >
          </b-step-item>

          <b-step-item step="3" label="注册成功" :clickable="isStepsClickable">
          </b-step-item>
        </b-steps>
      </div>
      <div class="step1-box">
        <b-field class="input-phone">
          <b-input v-model="phone"></b-input>
        </b-field>
        <b-button class="input-verify" @click="showVerify"
          >点击按钮进行验证</b-button
        >
        <div v-if="isShow === true" class="verify-box">
          <div class="verify-bar">
            <div class="verify-bar-title">完成拼图验证</div>
            <div class="verify-bar-refresh">
              <!--todo background-url-->
              <b-icon class="icon-refresh" icon="refresh"></b-icon>
              <span class="refresh-title">换一个</span>
            </div>
            <div class="verify-bar-close">
              <b-icon icon="close"></b-icon>
            </div>
          </div>
          <div class="verify-content"></div>
        </div>
      </div>
      <b-button class="step-forward" @click="clickMe">下一步</b-button>
    </div>
  </div>
</template>

<script>
import SignNavbar from '../components/SignNavbar'
export default {
  name: 'Signup',
  layout: 'portal',
  components: { SignNavbar },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    showVerify() {
      this.isShow = !this.isShow
      console.log(typeof this.isShow)
    },
    clickMe() {},
  },
}
</script>

<style scoped>
.main-content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.step-bar {
  margin-top: 100px;
  width: 500px;
  background-color: #999999;
}
.step1-box {
  margin-top: 10px;
  width: 500px;
  background-color: #999999;
}
.input-phone {
  margin-top: 20px;
  margin-left: 50px;
  width: 400px;
}
.input-verify {
  margin-top: 20px;
  margin-left: 50px;
  width: 400px;
}
.verify-box {
  position: relative;
  width: 404px;
  height: 200px;
  background-color: #ffffff;
  float: left;
  z-index: 100;
  margin-top: -245px;
  margin-left: 48px;
  box-shadow: 0 0 2px 2px #eee;
}
.verify-bar {
  height: 40px;
}
.verify-bar-title {
  float: left;
  margin-left: 15px;
  margin-top: 10px;
}
.verify-bar-refresh {
  float: left;
  margin-left: 190px;
  line-height: 24px;
}
.icon-refresh {
  display: inline-block;
}
.refresh-title {
  display: inline-block;
  margin-top: -5px;
}
.verify-bar-close {
  float: right;
  margin-top: 2px;
  margin-right: 2px;
}
.step-forward {
  margin-top: 20px;
  width: 400px;
}
</style>
