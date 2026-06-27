<template>
  <view class="page">
    <view class="hero">
      <view class="eyebrow">汉堡华人周边活动</view>
      <view class="title">Hamburg周边局</view>
      <view class="subtitle">由主理人组织的赶海、观星和书店活动入口。先把好玩、靠谱、能成行的周边体验做扎实。</view>
    </view>

    <view class="section">
      <view class="section-title">三大项目</view>
      <view class="activity-list">
        <view
          v-for="activity in activities"
          :key="activity.id"
          class="card activity-card"
          :class="`tone-${activity.coverTone}`"
          @tap="openActivity(activity)"
        >
          <view class="activity-kicker">{{ activity.shortTitle }}</view>
          <view class="activity-title">{{ activity.title }}</view>
          <view class="activity-intro">{{ activity.intro }}</view>
          <view class="tag-row">
            <text v-for="tag in activity.tags" :key="tag" class="tag">{{ tag }}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="section quick-actions">
      <view class="ghost-button" @tap="go('/pages/calendar/index')">查看活动日历</view>
      <view class="ghost-button" @tap="go('/pages/community/index')">未来组局内测</view>
    </view>

    <ContactCta />
  </view>
</template>

<script setup>
import ContactCta from '../../src/components/ContactCta.vue';
import { activities } from '../../src/data/activities.js';

function go(url) {
  uni.navigateTo({ url });
}

function openActivity(activity) {
  if (activity.targetPath) {
    go(activity.targetPath);
    return;
  }
  go(`/pages/activity/detail?id=${activity.id}`);
}
</script>

<style scoped>
.hero {
  padding: 28rpx 0 10rpx;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 22rpx;
}

.activity-card {
  min-height: 300rpx;
}

.tone-sea {
  background: linear-gradient(135deg, #e9f3ef, #fffaf1);
}

.tone-sky {
  background: linear-gradient(135deg, #eef1f8, #fffaf1);
}

.tone-book {
  background: linear-gradient(135deg, #f5ead8, #fffaf1);
}

.activity-kicker {
  color: #60766b;
  font-size: 24rpx;
  font-weight: 800;
}

.activity-title {
  color: #20372f;
  font-size: 38rpx;
  font-weight: 900;
  margin: 12rpx 0;
}

.activity-intro {
  color: #5f675f;
  font-size: 27rpx;
  line-height: 1.65;
}

.tag-row {
  margin-top: 24rpx;
}

.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16rpx;
}
</style>
