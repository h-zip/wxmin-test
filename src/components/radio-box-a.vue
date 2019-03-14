<template>
  <div class="container">
    <van-row custom-class="row">
      <van-col span="6" custom-class="col col1">
        {{ title }}
      </van-col>
      <van-radio-group :value="value" @change="onChange"custom-class="col">
        <van-col span="5" offset="1" custom-class="col">
          <van-radio name="0" :checked-color="checkColor" custom-class="col" label-class="radio-label">{{ radios[0] }}</van-radio>
        </van-col>
        <van-col span="1" offset="0" custom-class="col">
          <van-icon size="40rpx" :color="iconColors[0]" custom-class="iconfont icon-tip" @click="onIconClick(0)"/>
        </van-col>
        <van-col span="5" offset="1" custom-class="col">
          <van-radio name="1" :checked-color="checkColor" custom-class="col" label-class="radio-label">{{ radios[1] }}</van-radio>
        </van-col>
        <van-col span="1" offset="0" custom-class="col">
          <van-icon size="40rpx" :color="iconColors[1]" custom-class="iconfont icon-tip" @click="onIconClick(1)" />
        </van-col>
      </van-radio-group>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'title',
      'radios',
      'iconColors',
      'checkColor',
      'value'
    ],
    methods: {
      onChange: function (v) {
        this.$emit('on-change', v)
      },
      onIconClick: function (i) {
        this.$emit('on-icon', i)
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
    /deep/ .radio-label {
      font-size: @font-m;
    }
  }

</style>

