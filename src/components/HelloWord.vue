
<template>
<div>
   <div class="color">
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        count: 0
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
      increment () {
      this.count++
    }
  }
}

</script>
<style scoped>

</style>