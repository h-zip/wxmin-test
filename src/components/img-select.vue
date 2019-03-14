<template>
  <div class="container">
    <van-row custom-class="row">
      <van-col span="6" custom-class="col-t">
        <div class="title">{{ title }}</div>
      </van-col>
      <van-col span="18">
        <div class="box">
          <div v-for="(src, index) in srcs" :key="index" style="position: relative">
            <img class="item" :src="src" @click="preview(index)" />
            <van-icon name="clear" size="40rpx" color="#00a392" custom-class="delete" @click="deleteImg(index)"/>
          </div>
          <div class="weui-uploader__input-box" @click="chooseImg"></div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'title',
      'srcs'
    ],
    methods: {
      chooseImg () {
        let self = this
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success (res) {
            // tempFilePath可以作为img标签的src属性显示图片
            self.$emit('choose-success', res.tempFilePaths)
          }
        })
      },
      deleteImg (index) {
        this.$emit('on-delete', index)
      },
      preview (index) {
        let self = this
        console.log(self.srcs)
        wx.previewImage({
          current: self.srcs[index], // 当前显示图片的http链接
          urls: self.srcs // 需要预览的图片http链接列表
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  @weuiUploaderBorderColor:#D9D9D9;
  @weuiUploaderActiveBorderColor:#999999;
  @weuiUploaderFileSpacing: 30rpx;
  @weuiUploaderBorderWidth: 2rpx;
  .container{
    width: 100%;
    height: 100%;
    .title{
      font-size: 28rpx;
      padding-left: 30rpx;
      width: 180rpx;
    }
    /deep/ .row{
      background: @color-white-0;
      border-bottom: 1px solid @color-gray-0;
    }
    /deep/ .col-t{
      padding-top: 34rpx;
    }
    /deep/ .delete{
      position: absolute;
      top: -20rpx;
      right: 10rpx;
    }
    .box {
      width: 100%;
      display: flex;
      display: -ms-inline-flexbox;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      background-color: white;
      padding-top: 30rpx;
      padding-left: 30rpx;
      box-sizing: border-box;
    }
    .item {
      float:left;
      position: relative;
      margin-right: @weuiUploaderFileSpacing;
      margin-bottom: @weuiUploaderFileSpacing;
      width: calc(~"(75vw - 120rpx) / 3");
      height: calc(~"(75vw - 120rpx) / 3");
    }
    .weui-uploader__input-box{
      float:left;
      position: relative;
      margin-right: @weuiUploaderFileSpacing;
      margin-bottom: @weuiUploaderFileSpacing;
      width: calc(~"(75vw - 120rpx) / 3");
      height: calc(~"(75vw - 120rpx) / 3");
      border: @weuiUploaderBorderWidth solid @weuiUploaderBorderColor;
      &:before, &:after{
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: @weuiUploaderBorderColor;
      }
      &:before{
        width: @weuiUploaderBorderWidth + 1;
        height: calc(~"(75vw - 120rpx) / 6");
      }
      &:after{
        width: calc(~"(75vw - 120rpx) / 6");
        height: @weuiUploaderBorderWidth + 1;
      }
      &:active{
        border-color: @weuiUploaderActiveBorderColor;
        &:before, &:after{
          background-color: @weuiUploaderActiveBorderColor;
        }
      }
    }
  }

</style>

