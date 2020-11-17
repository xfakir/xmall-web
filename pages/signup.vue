<template>
  <div>
    <sign-navbar type="signUp"></sign-navbar>
    <div class="main-content">
      <div class="step-bar">
        <b-steps v-model="registerStep" size="is-small">
          <b-step-item step="1" label="验证手机号">
            <template>
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
                    <div class="verify-bar-close" @click="closeVerify">
                      <b-icon icon="close"></b-icon>
                    </div>
                  </div>
                  <div class="verify-content"></div>
                </div>
              </div>
            </template>
          </b-step-item>

          <b-step-item step="2" label="填写账号信息">
            <template>
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
                  <b-input
                    class="step2-input"
                    value="123"
                    type="password"
                  ></b-input>
                </b-field>
                <b-field class="step2-filed" type="is-warning">
                  <p class="control">
                    <span class="button is-static">中国 0086</span>
                  </p>
                  <b-input
                    class="step2-input"
                    value="123"
                    type="password"
                  ></b-input>
                </b-field>
              </div>
            </template>
          </b-step-item>

          <b-step-item step="3" label="注册成功">
            <template>
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
            </template>
          </b-step-item>
          <template slot="navigation" slot-scope="{ next }">
            <b-button
              v-if="registerStep === 0"
              class="step-forward"
              outlined
              type="is-success"
              :disabled="nextStep"
              @click="goNextStep(next)"
            >
              下一步
            </b-button>
            <b-button
              v-if="registerStep === 1"
              class="step-forward"
              outlined
              type="is-success"
              :disabled="nextStep"
              @click.prevent="next.action"
            >
              立即注册
            </b-button>
          </template>
        </b-steps>
      </div>
    </div>
    <div>
      <client-only placeholder="Loading...">
        <slide-verify
          :l="42"
          :r="10"
          :w="310"
          :h="155"
          slider-text="向右滑动"
          @success="onSuccess"
          @fail="onFail"
          @refresh="onRefresh"
        ></slide-verify>
      </client-only>
      <div>{{ msg }}</div>
    </div>
  </div>
</template>

<script>
import SlideVerify from 'vue-monoplasty-slide-verify'
import SignNavbar from '../components/SignNavbar'
export default {
  name: 'Signup',
  auth: false,
  layout: 'portal',
  components: { SignNavbar, SlideVerify },
  data() {
    return {
      isShow: false,
      registerStep: 0,
      phone: '',
      nextStep: false,
      msg: '',
    }
  },
  methods: {
    showVerify() {
      this.isShow = !this.isShow
    },
    closeVerify() {
      this.isShow = !this.isShow
    },
    goNextStep(next) {
      next.action()
    },
    onSuccess() {
      this.msg = 'login success'
    },
    onFail() {
      this.msg = ''
    },
    onRefresh() {
      this.msg = ''
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
  padding-top: 10px;
}
.step1-box {
  margin-top: 10px;
  margin-left: -16px;
  width: 500px;
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
.verify-bar-refresh:hover {
  cursor: pointer;
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
.verify-bar-close:hover {
  cursor: pointer;
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
  margin-left: -16px;
  width: 500px;
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
  margin-left: -16px;
  width: 500px;
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
  margin-left: 50px;
  width: 400px;
}
</style>
