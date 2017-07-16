<template>
  <div class="one">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'one',
    };
  },
};
</script>
<style lang="scss">
  .one{
    width: 200px;
    height: 900px;
  }
</style>
