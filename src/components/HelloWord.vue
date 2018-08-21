<!--  -->
<template>
<div>
  <div @click="clickAlert">vue文件</div>
  <div class="flex">
      <div>1</div>
      <div>2</div>
      <div>3</div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
      clickAlert(){
          alert('hello world')
      }
  }
}

</script>
<style scoped lang="less">
.flex{
    display: flex;
    
    div{
        flex:1;
    background-color:pink;
    }
}
.flex div {
    
}
</style>