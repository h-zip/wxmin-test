<template>
  <div class="container">
    <van-row custom-class="row">
      <van-col span="6" custom-class="col-t">
        <div class="title">{{ title }}</div>
      </van-col>
      <van-col span="18" ref="t">
        <van-field
          v-if="!popShow"
          :value="value"
          type="textarea"
          :placeholder="placeholder"
          :border="false"
          input-class="input"
          @blur="onChange">
        </van-field>
        <div v-else style="height: 220rpx;font-size: 28rpx;padding-top: 32rpx;padding-left: 39rpx;box-sizing: border-box;">{{value}}</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'title',
      'value',
      'placeholder',
      'popShow'
    ],
    watch: {
    },
    data: function () {
      return {
      }
    },
    methods: {
      onChange: function (v) {
        this.$emit('on-change', v)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    .title{
      font-size: 28rpx;
      padding-left: 30rpx;
      width: 180rpx;
      /*line-height: 40rpx;*/
    }
    /deep/ .input{
      height: 180rpx;
      /*line-height: 40rpx !important;*/
    }
    /deep/ .row{
      background: @color-white-0;
      border-bottom: 1px solid @color-gray-0;
    }
    /deep/ .col-t{
      padding-top: 34rpx;
    }
  }

</style>
