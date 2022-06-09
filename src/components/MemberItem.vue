<template>
  <div class="d-flex">
    <p class="name-text">{{ member.name }}</p>
    <p class="sub-local-text">{{ member.subLocal }}</p>
    <a :href="instaUrl" class="insta-text" target="_blank">{{ member.insta }}</a>
  </div>
</template>

<script>
export default {
  name: "MemberItem",
  props: {
    member: Object
  },
  computed: {
    instaUrl: function () {
      return `https://www.instagram.com/${this.member.insta}/`
    }
  }
}
</script>

<style>
.name-text,
.sub-local-text {
  margin-right: 10px;
  font-weight: bold;
}

.insta-text {
  text-decoration: none;
  color: black;
  font-size: 14px;
}
</style>