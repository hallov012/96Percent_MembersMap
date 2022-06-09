<template>
  <div class="d-flex justify-content-center member-line">
    <p class="sub-local-text" style="font-size: 17px;">{{ member.local }}</p>
    <p class="sub-local-text">{{ member.subLocal }}</p>
    <p class="name-text">{{ member.name }}</p>
     <a :href="instaUrl" class="insta-text" target="_blank">{{ member.insta }}</a>
  </div>
</template>

<script>
export default {
  name: "SelectLocal",
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
.member-line p {
  margin-right: 10px;
}

</style>