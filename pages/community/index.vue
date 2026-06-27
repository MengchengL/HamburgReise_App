<template>
  <view class="page">
    <view class="eyebrow">Coming Soon</view>
    <view class="title">{{ communityPreview.title }}</view>
    <view class="subtitle">{{ communityPreview.intro }}</view>

    <view class="section card">
      <view class="section-title">未来可能开放</view>
      <text v-for="item in communityPreview.directions" :key="item" class="tag">{{ item }}</text>
    </view>

    <ContactCta
      title="想成为第一批内测用户？"
      copy="加微信后备注你想发起或参加的活动类型。第一版先人工拉群和收集需求。"
      :button-text="communityPreview.cta"
    />
  </view>
</template>

<script setup>
import ContactCta from '../../src/components/ContactCta.vue';
import { communityPreview } from '../../src/data/community.js';
</script>
