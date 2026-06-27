<template>
  <view class="page">
    <view class="eyebrow">Calendar</view>
    <view class="title">活动日历</view>
    <view class="subtitle">第一版日历由本地配置维护，具体是否成行仍以微信确认的天气、潮汐和人数为准。</view>

    <view class="section event-list">
      <view v-for="event in events" :key="event.id" class="card event-card" @tap="openEvent(event)">
        <view class="event-date">{{ event.date }}</view>
        <view class="event-title">{{ event.title }}</view>
        <view class="event-meta">{{ event.place }}</view>
        <view class="event-note">{{ event.status }} · {{ event.note }}</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { calendarEvents } from '../../src/data/calendar.js';

const events = calendarEvents;

function openEvent(event) {
  uni.navigateTo({ url: `/pages/activity/detail?id=${event.activityId}` });
}
</script>

<style scoped>
.event-list {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.event-date {
  color: #60766b;
  font-size: 24rpx;
  font-weight: 800;
}

.event-title {
  color: #20372f;
  font-size: 34rpx;
  font-weight: 900;
  margin: 10rpx 0;
}

.event-meta,
.event-note {
  color: #657069;
  font-size: 26rpx;
  line-height: 1.6;
}
</style>
