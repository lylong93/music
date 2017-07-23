<template>
  <div class="playshow">
    <div class="closeBtn" @click="close"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      close() {
        this.$store.commit('changePlayShow');
      },
    },
    computed: {
    },
  };

</script>
<style lang="scss">
  .playshow{
    position: fixed;
    top:70px;
    bottom: 70px;
    width: 100%;
    // height: 190px;
    // height: 900px;
    background: yellow;
    .closeBtn{
      width: 20px;
      height: 20px;
      margin: 50px;
      background: blue;
    }
  }
</style>
