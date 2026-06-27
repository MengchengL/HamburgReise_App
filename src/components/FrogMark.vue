<template>
  <view class="frog-mark" aria-label="Bobo frog mark">
    <view class="frog-head">
      <view class="eye eye-left"></view>
      <view class="eye eye-right"></view>
      <view class="mouth"></view>
    </view>
    <view class="frog-book">bobo</view>
  </view>
</template>

<style scoped>
.frog-mark {
  display: inline-flex;
  align-items: center;
  gap: 18rpx;
}

.frog-head {
  position: relative;
  width: 128rpx;
  height: 104rpx;
  border: 4rpx solid #20372f;
  border-radius: 50% 50% 44% 44%;
  background: #a9c774;
}

.eye {
  position: absolute;
  top: -18rpx;
  width: 38rpx;
  height: 38rpx;
  border: 4rpx solid #20372f;
  border-radius: 50%;
  background: #fffaf1;
}

.eye::after {
  content: "";
  position: absolute;
  top: 11rpx;
  left: 12rpx;
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  background: #20372f;
}

.eye-left {
  left: 22rpx;
}

.eye-right {
  right: 22rpx;
}

.mouth {
  position: absolute;
  left: 31rpx;
  bottom: 22rpx;
  width: 58rpx;
  height: 24rpx;
  border-bottom: 4rpx solid #20372f;
  border-radius: 0 0 50% 50%;
}

.frog-book {
  color: #20372f;
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: 40rpx;
  font-weight: 800;
  line-height: 1;
}
</style>
