<template>
  <div>
    <select v-model="selectedLocal" @change="changeLocal" name="local" id="local-id">
      <option value="ALL">ALL</option>
      <option value="인천">인천</option>
      <option value="서울">서울</option>
      <option value="경기">경기</option>
      <option value="강원">강원</option>
      <option value="충남">충남</option>
      <option value="세종">세종</option>
      <option value="대전">대전</option>
      <option value="충북">충북</option>
      <option value="경북">경북</option>
      <option value="전북">전북</option>
      <option value="경남">경남</option>
      <option value="대구">대구</option>
      <option value="울산">울산</option>
      <option value="광주">광주</option>
      <option value="전남">전남</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
    <div id="member-box">
      <p>{{ selectedMembers.length }}명이 입력 완료!</p>
      <SelectLocal v-for="(member, idx) in selectedMembers" :key="idx" :member="member" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import SelectLocal from "@/components/SelectLocal.vue"

export default {
  name: "TheMembersView",
  components: {
    SelectLocal
  },
  computed: {
    ...mapGetters(["members"])
  },
  data: function () {
    return {
      selectedLocal: "ALL",
      selectedMembers: [],
    }
  },
  created () {
    this.selectedMembers = this.members
  },
  methods: {
    changeLocal: function () {
      if (this.selectedLocal === "ALL") {
        this.selectedMembers = this.members
      } else {
        this.selectedMembers = []
        for (const member of this.members) {
          if (member) {
            if (member.local === this.selectedLocal) {
              this.selectedMembers.push(member)
            }
          }
        }
      }
    }
  }
}
</script>

<style>
#member-box {
  padding: 15px;
}
</style>