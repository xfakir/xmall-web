<template>
  <div>
    <!-- 验证弹窗样式 -->
    <div class="forgetpasswordVerificaDialog">
      <!-- 可以用两个div进行嵌套更改细则 -->
      <div class="forgetpasswordVerificaDialogspan">
        <span>拖动下方滑块完成拼图</span>
        <i
          class="el-icon-refresh-right"
          style="
            font-size: 22px;
            color: #4393fd;
            margin-left: 130px;
            margin-top: -1px;
            cursor: pointer;
          "
          @click="RefreshDialog"
        ></i>
      </div>
      <div style="margin-top: 20px; position: relative">
        <div>
          <img style="width: 360px; height: 195px" :src="bigimgData" />
        </div>
        <div
          id="smallImg"
          style="position: absolute; left: 25px; z-index: 999"
          :style="{ top: imgHeight }"
        >
          <img :src="this.smallimgData" />
        </div>
      </div>
      <div
        style="
          width: 360px;
          height: 15px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          border-radius: 8px;
          margin-top: 25px;
        "
      >
        <div
          id="Sliding_verication"
          class="forgetpasswordVerificaDialogBtn"
          @mousedown="SlidingMouseDown"
          @mouseup="babn"
        >
          <b-button type="is-primary" rounded>| | | </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Img from '~/assets/maigumi.jpg'
export default {
  name: 'Callback',
  data() {
    return {
      msg: '',
      bigimgData: Img,
    }
  },
  methods: {
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

<style scoped></style>
