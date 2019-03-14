<template>
  <div class="container">
    <van-row custom-class="row">
      <van-col span="6" custom-class="col col1">
        {{ title }}
      </van-col>
      <van-col span="18" custom-class="col">
        <picker
          mode="region"
          @change="onChange"
          :value="value">
          <div style="padding-left: 30rpx;color: #495060;">{{ regionText }}</div>
        </picker>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'title',
      'placeholder',
      'value'
    ],
    computed: {
      regionText: function () {
        let t = this.value.length ? this.value[0] + this.value[1] + this.value[2] : this.placeholder
        return t
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
    padding: 16rpx 40rpx;
    /deep/ .row {
      height: 100rpx;
      border: @color-gray-0 2rpx solid;
      border-radius: 10rpx;
      background-color: @color-white-0;
      font-size: @font-m;
      color: @color-gray-2;
    }
    /deep/ .col {
      height: 100%;
      line-height: 100rpx;
    }
    /deep/ .col1 {
      background-color: @color-gray-1;
      text-align: center;
    }
  }

</style>

