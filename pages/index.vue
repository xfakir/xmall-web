<template>
  <section class="section">
    <div class="columns is-mobile">
      <card v-if="this.$auth.loggedIn" title="Free" icon="github">
        {{ this.$auth.user.username }}
      </card>
      <card v-else title="Free" icon="github"> 登录 </card>
      <card title="Free" icon="github">
        {{ str }}
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  auth: false,
  components: {
    Card,
  },
  async asyncData({ app }) {
    const res = await app.$axios.get('/test/product')
    return {
      str: res.data,
    }
  },
}
</script>
