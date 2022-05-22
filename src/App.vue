<template>
  <div id="app">

    <router-view/>

    <!-- <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row> -->

    <div class="text">sadfasd</div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
// import Component from 'vue-class-component'
// import request from '@/utils/request'

export default Vue.extend({
  name: 'HomeIndex'
})

// request({
//   method: 'GET',
//   url: '/boss1/v2/api-docs?group=edu-boss-boot'
// }).then(err => {
//   console.log('err:', err)
// })

// @Component
// export default class App extends Vue {
//   a = 1
//   b = 2
//   c = '1234'

//   test () {
//     return console.log(this.c)
//   }
// }

</script>

<!-- 使用extend
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      a: 1,
      b: 2,
      c: '1234'
    }
  },
  methods: {
    test(){
      this.a;
    }
  },
})
</script>
-->

<style lang="scss" scoped>
// @是指向当前src
// ~指向nodemodule
// @import '~@/styles/variables.scss';
.text {
  color: $danger-color;
}
</style>
