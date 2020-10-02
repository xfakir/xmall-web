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
          <p class="control">
            <span class="button is-static">中国 0086</span>
          </p>
          <b-input v-model="phone" style="width: 100%"></b-input>
        </b-field>
        <div>
          <div class="phone-validation">
            <b-icon icon="alert-circle-outline"></b-icon>
          </div>
          <div class="phone-validation-text">aaa</div>
        </div>

        <b-button class="input-verify" @click="showVerify"
          >点击按钮进行验证</b-button
        >
        <div>
          <div class="verify-validation">
            <b-icon icon="alert-circle-outline"></b-icon>
          </div>
          <div class="verify-validation-text">aaa</div>
        </div>
        <div v-if="isShow === true" class="verify-box">
          <div class="verify-bar">
            <div class="verify-bar-title">完成拼图验证</div>
            <div class="verify-bar-refresh">
              <!--todo background-url-->
              <b-icon class="icon-refresh" icon="refresh"></b-icon>
              <span class="refresh-title">换一个</span>
            </div>
            <div class="verify-bar-close">
              <b-icon icon="close" @click="closeVerify()"></b-icon>
            </div>
          </div>
          <div class="verify-content"></div>
        </div>
      </div>
      <div class="step2-box">
        <b-field class="step2-filed">
          <p class="control">
            <span class="button is-static">中国 0086</span>
          </p>
          <b-input class="step2-input" value="Kevin Garvey"></b-input>
        </b-field>
        <b-field class="step2-filed" type="is-warning">
          <p class="control">
            <span class="button is-static">中国 0086</span>
          </p>
          <b-input class="step2-input" value="123" type="password"></b-input>
        </b-field>
        <b-field class="step2-filed" type="is-warning">
          <p class="control">
            <span class="button is-static">中国 0086</span>
          </p>
          <b-input class="step2-input" value="123" type="password"></b-input>
        </b-field>
      </div>
      <div class="step3-box">
        <div class="success-icon">
          <b-icon
            icon="checkbox-marked-circle"
            size="is-large"
            type="is-success"
          ></b-icon>
        </div>
        <div class="success-text">
          <p>恭喜您 xfakir</p>
          <p>您已成功注册用户，祝您购物愉快~</p>
        </div>
        <div class="success-button">
          <b-button type="is-danger">去购物</b-button>
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
    },
    clickMe() {},
    closeVerify() {
      this.isShow = !this.isShow
    },
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
  padding-top: 10px;
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
.phone-validation-text {
  margin-top: -8px;
  float: left;
}
.phone-validation {
  width: 25px;
  margin-top: -5px;
  margin-left: 50px;
  float: left;
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
  margin-top: -278px;
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
.verify-validation {
  width: 25px;
  margin-top: 5px;
  margin-left: 50px;
  float: left;
}
.verify-validation-text {
  margin-top: 3px;
  float: left;
}

.step2-box {
  margin-top: 10px;
  width: 500px;
  background-color: #999999;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.step2-filed {
  margin-top: 20px;
  width: 400px;
}
.step2-input {
  width: 100%;
}
.step3-box {
  margin-top: 10px;
  width: 500px;
  background-color: #999999;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.success-icon {
  margin-top: 10px;
}
.success-text {
  margin-top: 20px;
}
.success-button {
  margin-top: 40px;
}
.step-forward {
  margin-top: 40px;
  width: 400px;
}
</style>
