<template>
  <div>
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
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import SlideVerify from 'vue-monoplasty-slide-verify'
export default {
  name: 'Callback',
  components: { SlideVerify },
  data() {
    return {
      msg: '',
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
