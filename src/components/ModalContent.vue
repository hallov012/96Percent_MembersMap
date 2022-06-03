<template>
  <div>
    <h2>{{ local }}</h2>
    <p>{{ localCnt }}명이 거주 중!</p>
    <div id="member-box">
      <MemberItem v-for="(member, idx) in localMembers" :key="idx" :member=member />
    </div>
  </div>
</template>

<script>
import MemberItem from '@/components/MemberItem.vue'

export default {
  name: "ModalContent",
  components: {
    MemberItem
  },
  data: function () {
    return {
      localMembers: [],
      localCnt: 0
    }
  },
  props: {
    local: String,
    members: Array,
  },
  created () {
    for (const member of this.members) {
      if (member) {
        if (member.local === this.local) {
          this.localMembers.push(member)
          this.localCnt += 1
        }
      }
    }
  }
}
</script>

<style>
#member-box {
  height: 350px;
  overflow: auto;
}
</style>