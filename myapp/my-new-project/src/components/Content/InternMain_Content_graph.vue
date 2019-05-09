<template>

  <div class="row">
  <vueChartJS></vueChartJS>
  </div>
</template>

<script>
import vueChartJS from '@/components/Charts/VueChartJS'
export default {
  components: {
    vueChartJS
  }
}
</script>

<style lang="css" scoped>
div{
  padding: 10px;
  height: 150px;
  margin: 10px 0;
}
.line{
  border: 2px solid #bbb
}
</style>
