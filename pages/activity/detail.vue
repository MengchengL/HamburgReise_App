<template>
  <view class="page">
    <view class="eyebrow">Activity</view>
    <view class="title">{{ activity.title }}</view>
    <view class="subtitle">{{ activity.intro }}</view>

    <view class="section">
      <text v-for="tag in activity.tags" :key="tag" class="tag">{{ tag }}</text>
    </view>

    <view class="section card">
      <view class="section-title">活动亮点</view>
      <view v-for="item in activity.highlights" :key="item" class="list-item">{{ item }}</view>
    </view>

    <view v-if="activity.guidePath" class="section">
      <view class="ghost-button" @tap="go(activity.guidePath)">查看完整赶海攻略</view>
    </view>

    <view class="section card warning-card">
      <view class="section-title">{{ activity.safetyTitle }}</view>
      <view v-for="item in activity.safetyNotes" :key="item" class="list-item">{{ item }}</view>
    </view>

    <view class="section card">
      <view class="section-title">{{ activity.feeTitle }}</view>
      <view class="body-copy">{{ activity.feeNotes }}</view>
    </view>

    <ContactCta :button-text="activity.ctaText" />
  </view>
</template>

<script setup>
import { ref } from 'vue';
import ContactCta from '../../src/components/ContactCta.vue';
import { getActivityById } from '../../src/data/activities.js';

const activity = ref(getActivityById('oyster-coast'));

onLoad((query) => {
  activity.value = getActivityById(query?.id);
});

function go(url) {
  uni.navigateTo({ url });
}
</script>

<style scoped>
.list-item {
  color: #5f675f;
  font-size: 27rpx;
  line-height: 1.7;
  margin-top: 14rpx;
  padding-left: 22rpx;
  border-left: 4rpx solid #c8d7ce;
}

.body-copy {
  color: #5f675f;
  font-size: 27rpx;
  line-height: 1.7;
}

.warning-card {
  background: #fff3df;
  border-color: rgba(127, 82, 38, 0.18);
}
</style>
