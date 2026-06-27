<template>
  <view class="page">
    <view class="eyebrow">Contact</view>
    <view class="title">加微信咨询</view>
    <view class="subtitle">报名、报价、付款和内测申请第一版都通过微信人工确认。</view>

    <view class="section card">
      <view class="section-title">微信号</view>
      <view class="wechat-id">{{ contact.wechatId }}</view>
      <view class="body-copy">{{ contact.note }}</view>
    </view>

    <view class="section card qr-card">
      <view class="qr-box">二维码占位</view>
      <view class="body-copy">后续把真实微信二维码图片放到 {{ contact.qrPlaceholder }} 并替换此占位。</view>
    </view>

    <view class="section card">
      <view class="section-title">报价与付款</view>
      <view class="body-copy">{{ contact.quoteCopy }}</view>
      <view class="body-copy second">{{ contact.paymentCopy }}</view>
    </view>
  </view>
</template>

<script setup>
import { contact } from '../../src/data/contact.js';
</script>

<style scoped>
.wechat-id {
  color: #20372f;
  font-size: 42rpx;
  font-weight: 900;
  margin-bottom: 18rpx;
}

.body-copy {
  color: #5f675f;
  font-size: 27rpx;
  line-height: 1.7;
}

.second {
  margin-top: 12rpx;
}

.qr-card {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.qr-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360rpx;
  height: 360rpx;
  border: 2rpx dashed #8ca091;
  border-radius: 8rpx;
  color: #60766b;
  font-size: 28rpx;
}
</style>
