---
title: 赞助
layout: page
---

<div class="sponsor-container">
  <h2 class="sponsor-title">💚 赞助支持</h2>
  <p class="sponsor-desc">
    如果我的内容对你有帮助，欢迎通过以下方式赞助我，你的支持是我持续创作的动力！
  </p>

  <div class="sponsor-note">
    <p>
      您的赞助将用于服务器维护、内容创作和功能开发，帮助我持续提供优质内容。
    </p>
  </div>

  <div class="sponsor-grid">
    <!-- 支付宝 -->
    <div class="sponsor-card">
      <h3 class="sponsor-card-title">
        <span class="icon">💳</span> 支付宝
      </h3>
      <p class="sponsor-card-desc">使用 支付宝 扫码赞助</p>
      <div class="sponsor-qr">
        <!-- 把你的支付宝二维码图片放在 public/images/ 下 -->
        <img src="/images/qr/alipay.jpg" alt="支付宝赞助二维码" />
      </div>
    </div>

    <!-- 微信 -->
    <div class="sponsor-card">
      <h3 class="sponsor-card-title">
        <span class="icon">💬</span> 微信
      </h3>
      <p class="sponsor-card-desc">使用 微信 扫码赞助</p>
      <div class="sponsor-qr">
        <!-- 把你的微信二维码图片放在 public/images/ 下 -->
        <img src="/images/qr/wechat.png" alt="微信赞助二维码" />
      </div>
    </div>
    
    <!-- ko-fi 可选 -->
    <div class="sponsor-card">
      <h3 class="sponsor-card-title">
        <span class="icon">☕</span> ko-fi
      </h3>
      <p class="sponsor-card-desc">Buy a Coffee for me</p>
      <div class="sponsor-button">
        <a href="https://ko-fi.com/你的账号" target="_blank" rel="noopener noreferrer">
          前往赞助 ↗
        </a>
      </div>
    </div>
    
    <!-- 爱发电 可选 -->
    <div class="sponsor-card">
      <h3 class="sponsor-card-title">
        <span class="icon">⚡</span> 爱发电
      </h3>
      <p class="sponsor-card-desc">通过 爱发电 进行赞助</p>
      <div class="sponsor-button">
        <a href="https://afdian.net/a/你的账号" target="_blank" rel="noopener noreferrer">
          前往赞助 ↗
        </a>
      </div>
    </div>
  </div>

  <h3 class="sponsor-list-title">👤 赞助列表</h3>
  <div class="sponsor-list">
    <div class="sponsor-list-item">
      <div class="sponsor-list-avatar">夏</div>
      <div class="sponsor-list-info">
        <p class="sponsor-list-name">夏叶 ¥50</p>
        <p class="sponsor-list-date">10/1/2025</p>
      </div>
    </div>
    <div class="sponsor-list-item">
      <div class="sponsor-list-avatar">匿</div>
      <div class="sponsor-list-info">
        <p class="sponsor-list-name">匿名用户 ¥20</p>
        <p class="sponsor-list-date">10/1/2025</p>
      </div>
    </div>
  </div>
</div>

<style>
.sponsor-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.sponsor-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.sponsor-desc {
  color: var(--sl-color-text-secondary);
  margin-bottom: 1rem;
}

.sponsor-note {
  background-color: var(--sl-color-bg-tertiary);
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.sponsor-card {
  background-color: var(--sl-color-bg-secondary);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.sponsor-card-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.sponsor-card-desc {
  font-size: 0.85rem;
  color: var(--sl-color-text-secondary);
  margin-bottom: 1rem;
}

.sponsor-qr img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 8px;
}

.sponsor-button a {
  display: inline-block;
  background-color: #22c55e;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
}

.sponsor-list-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.sponsor-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.sponsor-list-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: var(--sl-color-bg-secondary);
  padding: 0.8rem 1rem;
  border-radius: 8px;
}

.sponsor-list-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--sl-color-bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

.sponsor-list-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.sponsor-list-name {
  font-size: 0.95rem;
  margin: 0;
}

.sponsor-list-date {
  font-size: 0.8rem;
  color: var(--sl-color-text-secondary);
  margin: 0;
}
</style>