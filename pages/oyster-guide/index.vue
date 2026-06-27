<template>
  <view class="page">
    <view class="eyebrow">Oyster Guide</view>
    <view class="title">{{ oysterGuide.title }}</view>
    <view class="subtitle">{{ oysterGuide.intro }}</view>

    <view class="section guide-grid">
      <view v-for="section in oysterGuide.sections" :key="section.title" class="card">
        <view class="section-title">{{ section.title }}</view>
        <view v-for="item in section.items" :key="item" class="guide-item">{{ item }}</view>
      </view>
    </view>

    <view class="section">
      <view class="section-title">FAQ</view>
      <view v-for="item in oysterGuide.faq" :key="item.question" class="card faq-card">
        <view class="faq-question">{{ item.question }}</view>
        <view class="faq-answer">{{ item.answer }}</view>
      </view>
    </view>

    <ContactCta button-text="加微信咨询赶海" />
  </view>
</template>

<script setup>
import ContactCta from '../../src/components/ContactCta.vue';
import { oysterGuide } from '../../src/data/oysterGuide.js';
</script>

<style scoped>
.guide-grid {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.guide-item {
  color: #5f675f;
  font-size: 27rpx;
  line-height: 1.7;
  margin-top: 14rpx;
}

.faq-card {
  margin-bottom: 18rpx;
}

.faq-question {
  color: #20372f;
  font-size: 29rpx;
  font-weight: 800;
}

.faq-answer {
  color: #5f675f;
  font-size: 27rpx;
  line-height: 1.7;
  margin-top: 10rpx;
}
</style>
