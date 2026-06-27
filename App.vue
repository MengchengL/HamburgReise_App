<script>
export default {
  onLaunch() {
    console.log('Hamburg周边局 launched');
  }
};
</script>

<style>
page {
  min-height: 100%;
  background: #f8f4ec;
  color: #24302d;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif;
}

.page {
  min-height: 100vh;
  padding: 32rpx 28rpx 56rpx;
  box-sizing: border-box;
}

.eyebrow {
  color: #60766b;
  font-size: 24rpx;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 14rpx;
}

.title {
  color: #213531;
  font-size: 48rpx;
  font-weight: 800;
  line-height: 1.12;
  margin-bottom: 18rpx;
}

.subtitle {
  color: #5f675f;
  font-size: 28rpx;
  line-height: 1.7;
}

.section {
  margin-top: 36rpx;
}

.section-title {
  color: #243c37;
  font-size: 34rpx;
  font-weight: 800;
  margin-bottom: 18rpx;
}

.card {
  background: #fffaf1;
  border: 1rpx solid rgba(36, 60, 55, 0.12);
  border-radius: 8rpx;
  padding: 28rpx;
  box-sizing: border-box;
  box-shadow: 0 10rpx 28rpx rgba(36, 48, 45, 0.06);
}

.tag {
  display: inline-flex;
  align-items: center;
  min-height: 44rpx;
  padding: 0 18rpx;
  border-radius: 999rpx;
  background: #e7efe8;
  color: #315d4c;
  font-size: 22rpx;
  margin-right: 12rpx;
  margin-bottom: 12rpx;
}

.primary-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88rpx;
  border-radius: 8rpx;
  background: #243c37;
  color: #fffaf1;
  font-size: 28rpx;
  font-weight: 700;
}

.ghost-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 84rpx;
  border: 1rpx solid #243c37;
  border-radius: 8rpx;
  color: #243c37;
  font-size: 28rpx;
  font-weight: 700;
}
</style>
