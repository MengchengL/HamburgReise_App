<template>
  <view class="page bobo-page">
    <view class="bobo-hero">
      <FrogMark />
      <view class="bobo-eyebrow">bobo books Hamburg</view>
      <view class="bobo-title">Bobo书店</view>
      <view class="bobo-subtitle">{{ bobo.subtitle }}</view>
    </view>

    <view class="section card bobo-card">
      <view class="section-title">青蛙与书店空间</view>
      <view class="bobo-copy">{{ bobo.intro }}</view>
      <view class="bobo-source">bobobooks.de</view>
      <view class="bobo-link">{{ bobo.website }}</view>
    </view>

    <view class="section bobo-modules">
      <view v-for="module in bobo.modules" :key="module.title" class="card bobo-card">
        <view class="bobo-module-title">{{ module.title }}</view>
        <view class="bobo-copy">{{ module.body }}</view>
      </view>
    </view>

    <view class="section card bobo-card">
      <view class="section-title">地址与参与方式</view>
      <view class="bobo-copy">{{ bobo.address }}</view>
      <view class="ghost-button contact-link" @tap="goContact">加微信了解书店活动</view>
    </view>
  </view>
</template>

<script setup>
import FrogMark from '../../src/components/FrogMark.vue';
import { bobo } from '../../src/data/bobo.js';

function goContact() {
  uni.navigateTo({ url: '/pages/contact/index' });
}
</script>

<style scoped>
.bobo-page {
  background: #f6ead8;
}

.bobo-hero {
  padding: 32rpx 0 18rpx;
}

.bobo-eyebrow {
  margin-top: 28rpx;
  color: #516042;
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: 24rpx;
  font-weight: 800;
}

.bobo-title {
  color: #20372f;
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: 58rpx;
  font-weight: 900;
  line-height: 1.1;
  margin: 12rpx 0;
}

.bobo-subtitle {
  color: #5f5949;
  font-size: 28rpx;
  line-height: 1.7;
}

.bobo-card {
  background: #fff8e8;
  border-color: rgba(32, 55, 47, 0.16);
  box-shadow: none;
}

.bobo-copy {
  color: #5f5949;
  font-size: 27rpx;
  line-height: 1.75;
}

.bobo-link {
  color: #20372f;
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: 26rpx;
  margin-top: 18rpx;
}

.bobo-modules {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.bobo-module-title {
  color: #20372f;
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: 32rpx;
  font-weight: 900;
  margin-bottom: 12rpx;
}

.contact-link {
  margin-top: 24rpx;
}
</style>
