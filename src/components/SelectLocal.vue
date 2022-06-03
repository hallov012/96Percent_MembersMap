<template>
  <div class="d-flex justify-content-center member-line">
    <p>{{ member.local }}</p>
    <p>{{ member.subLocal }}</p>
    <p>{{ member.name }}</p>
  </div>
</template>

<script>
export default {
  name: "SelectLocal",
  props: {
    member: Object
  },

}
</script>

<style>
.member-line p {
  margin-right: 10px;
}
</style>