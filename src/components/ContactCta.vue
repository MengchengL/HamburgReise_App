<template>
  <view class="cta card">
    <view>
      <view class="cta-title">{{ title }}</view>
      <view class="cta-copy">{{ copy }}</view>
    </view>
    <view class="primary-button cta-button" @tap="goContact">{{ buttonText }}</view>
  </view>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '想参加或了解费用？'
  },
  copy: {
    type: String,
    default: '加微信后备注活动、人数和可参加日期，主理人会根据条件确认报价。'
  },
  buttonText: {
    type: String,
    default: '加微信咨询'
  }
});

function goContact() {
  uni.navigateTo({ url: '/pages/contact/index' });
}
</script>

<style scoped>
.cta {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.cta-title {
  color: #243c37;
  font-size: 32rpx;
  font-weight: 800;
  margin-bottom: 8rpx;
}

.cta-copy {
  color: #667168;
  font-size: 26rpx;
  line-height: 1.65;
}

.cta-button {
  width: 100%;
}
</style>
