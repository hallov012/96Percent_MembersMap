<template>
  <div class="d-flex">
    <p class="name-text">{{ member.name }}</p>
    <p class="sub-local-text">{{ member.subLocal }}</p>
  </div>
</template>

<script>
export default {
  name: "MemberItem",
  props: {
    member: Object
  }
}
</script>

<style>
.name-text {
  margin-right: 10px;
  font-weight: bold;
}
</style>