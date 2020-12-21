<template>
  <div>
    <sign-navbar type="signUp"></sign-navbar>
    <div class="main-content">
      <div class="step-bar">
        <b-steps v-model="registerStep" size="is-small">
          <b-step-item step="1" label="验证手机号">
            <div class="step1-box">
              <b-field
                class="input-phone"
                :type="{ 'is-danger': telephoneError }"
                :message="[
                  // eslint-disable-next-line
                  { '请输入正确的手机号': verifyError },
                  {
                    // eslint-disable-next-line
                    '该手机号已被注册': registeredError,
                  },
                ]"
              >
                <b-input
                  v-model="phone"
                  placeholder="请输入手机号"
                  @blur="finishInputPhone"
                ></b-input>
              </b-field>
              <div v-if="!isVerify">
                <b-button class="input-verify" @click="showVerify"
                  >点击按钮进行验证</b-button
                >
              </div>
              <b-field
                v-else
                class="input-code"
                :type="{ 'is-danger': verifyCodeError }"
                :message="[
                  // eslint-disable-next-line
                  { '请输入验证码': noneCodeError },
                  {
                    // eslint-disable-next-line
                    '验证码错误': incorrectCodeError,
                  },
                ]"
              >
                <p class="control">
                  <span class="button is-static">手机验证码</span>
                </p>
                <b-input v-model="verifyCode" style="width: 100%"></b-input>
                <p class="control">
                  <b-button @click="getVerifyCode">获取验证码</b-button>
                </p>
              </b-field>
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
                <div class="verify-content">
                  <b-button @click="finishVerify">点击完成验证</b-button>
                </div>
              </div>
            </div>
          </b-step-item>

          <b-step-item step="2" label="填写账号信息">
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
          </b-step-item>

          <b-step-item step="3" label="注册成功">
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
              @click="goNextStep(next)"
            >
              立即注册
            </b-button>
          </template>
        </b-steps>
      </div>
    </div>
    <div>
      <div>{{ msg }}</div>
    </div>
  </div>
</template>

<script>
import SignNavbar from '../components/SignNavbar'
export default {
  name: 'Signup',
  auth: false,
  layout: 'portal',
  components: { SignNavbar },
  data() {
    return {
      isShow: false,
      registerStep: 0,
      phone: '',
      nextStep: false,
      msg: '',
      isVerify: false,
      verifyError: false,
      registeredError: false,
      verifyCode: '',
      noneCodeError: false,
      incorrectCodeError: false,
    }
  },
  computed: {
    telephoneError() {
      return this.verifyError || this.registeredError
    },
    verifyCodeError() {
      return this.noneCodeError || this.incorrectCodeError
    },
  },
  mounted() {
    window.addEventListener('load', () => {
      if (this.$route.path !== '/') {
        this.$router.replace('/')
      }
    })
  },
  methods: {
    async showVerify() {
      if (this.phone !== '' && !this.verifyError) {
        const res = await this.$axios.get('/member/isPhoneRegistered', {
          params: {
            phone: this.phone,
          },
        })
        if (res.data.code === 200) {
          this.isShow = !this.isShow
        } else {
          this.registeredError = true
        }
      } else {
        this.telephoneError = true
        this.verifyError = true
      }
    },
    closeVerify() {
      this.isShow = !this.isShow
    },
    goNextStep(next) {
      if (
        this.phone !== '' &&
        !this.telephoneError &&
        this.verifyCode !== '' &&
        !this.verifyCodeError
      ) {
        next.action()
      } else if (this.phone === '') {
        this.verifyError = true
      } else if (
        this.phone !== '' &&
        !this.telephoneError &&
        this.verifyCode === ''
      ) {
        if (this.isVerify === false) {
          this.isShow = !this.isShow
        } else {
          this.noneCodeError = true
        }
      } else if (this.verifyCode === '') {
        this.noneCodeError = true
      }
    },
    finishVerify() {
      this.isVerify = true
      this.isShow = false
    },
    finishInputPhone() {
      if (this.phone === '') {
        this.verifyError = false
        this.telephoneError = false
      } else if (!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)) {
        this.verifyError = true
        this.telephoneError = true
      } else if (/^1[3|4|5|7|8]\d{9}$/.test(this.phone)) {
        this.verifyError = false
        this.telephoneError = false
      }
    },
    async getVerifyCode() {
      this.noneCodeError = false
      this.incorrectCodeError = false
      const res = await this.$axios.get('/message/code', {
        params: {
          phone: this.phone,
        },
      })
      this.verifyCode = res.data.data.code
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
.input-code {
  margin-top: 40px;
  margin-left: 50px;
  width: 400px;
}
.field-body {
  margin-left: -150px;
}
.phone-validation-text {
  margin-top: -8px;
  float: left;
  color: #f14668;
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
