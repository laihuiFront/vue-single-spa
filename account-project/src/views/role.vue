<template>
  <div class="home">
    这是员工角色页面{{window.store.getters.name}}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: 'home',
  computed: {
    // ...mapGetters(['name']),
  },
  data() {
    return {
      window
    }
  },
  created() {
    setTimeout(() => {
      // this.store.commit('setName', '444lll')
      // console.log(this.store.getters)
      // console.log(window.store.getters, this.$store.getters, this.$store.getters === window.store.getters)
      // this.window,store.commit('setName', '444lll')
      // console.log(window.store.getters, this.$store.getters === window.store.getters)
      // console.log(this.$store)
    }, 3000);
  }
}
</script>
