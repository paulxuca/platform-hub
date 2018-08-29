<template>
  <div>
    <div class="card-image" :style="{ backgroundColor }">
      <h2 class="is-marginless title is-centered">{{ title }}</h2>
    </div>

    <div class="level footer">
      <div class="level-left">
        <div class="level-item">
          <div :style="{ backgroundImage: `url(${profileImage})` }" class="profile-image"></div>
        </div>

        <div class="level-item details">
          <h5 class="profile-name">@paulxuca</h5>
          <p class="app-blurb">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'crypto-js/md5';

export default {
  name: 'AppSummary',
  props: ['title', 'description', 'user'],
  computed: {
    backgroundColor() {
      const randomNumFromTitle = md5(this.title).words[0];
      const numBetweenZeroAndOne = Math.abs(randomNumFromTitle) / 2147483647;
      const hue = numBetweenZeroAndOne * 360;

      return `hsla(${hue}, 45%, 65%, 1)`;
    },
    profileImage() {
      return '';
    },
  },
};
</script>

<style>
.card {
}

.card-image {
  border-radius: 4px;
  padding: 40px 0;
}

.title {
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.footer {
  margin-top: 16px;
}

.profile-image {
  background-size: cover;
  background-position: center;
  height: 40px;
  background-color: #f0f0f0;
  width: 40px;
  border-radius: 20px;
}

.profile-name {
  margin-bottom: 4px;
}

.app-blurb {
  line-height: initial;
  font-size: 12px;
}

.details {
  flex-direction: column;
  align-items: flex-start;
}
</style>
