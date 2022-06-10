<template>
  <div id="map-box">
    <img src="@/assets/map.png" alt="">
    <div id="button-box">
      <div class="top-line">
        <button @click="selectLocal" class="btn btn-link" value="인천">인천({{ localCnt.인천 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="서울">서울({{ localCnt.서울 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="경기">경기({{ localCnt.경기 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="강원">강원({{ localCnt.강원 }})</button>
      </div>
      <div class="mid-line">
        <button @click="selectLocal" class="btn btn-link" value="충남">충남({{ localCnt.충남 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="세종">세종({{ localCnt.세종 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="대전">대전({{ localCnt.대전 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="충북">충북({{ localCnt.충북 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="경북">경북({{ localCnt.경북 }})</button>
      </div>
      <div class="bottom-line">
        <button @click="selectLocal" class="btn btn-link" value="전북">전북({{ localCnt.전북 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="경남">경남({{ localCnt.경남 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="대구">대구({{ localCnt.대구 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="울산">울산({{ localCnt.울산 }})</button>
      </div>
      <div class="last-line">
        <button @click="selectLocal" class="btn btn-link" value="광주">광주({{ localCnt.광주 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="전남">전남({{ localCnt.전남 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="부산">부산({{ localCnt.부산 }})</button>
        <button @click="selectLocal" class="btn btn-link" value="제주">제주({{ localCnt.제주 }})</button>
      </div>
    </div>
    <div>
      <TheModal v-if="modal" @close="closeModal">
        <ModalContent :local="openPage" :members="members" />
      </TheModal>
    </div>
    {{ localCnt }}
  </div>
</template>

<script>
import TheModal from '@/components/TheModal.vue'
import ModalContent from '@/components/ModalContent.vue'
import members from "@/assets/member_lst.json"

export default {
  name: "TheMapView",
  components: {
    TheModal,
    ModalContent
  },
  data: function () {
    return {
      localInput: '',
      subLocalInput: '',
      nameInput: '',
      modal: false,
      openPage: '',
      members: members,
      localCnt: {
        서울: 0,
        인천: 0,
        경기: 0,
        강원: 0,
        충남: 0,
        세종: 0,
        대전: 0,
        충북: 0,
        경북: 0,
        전북: 0,
        경남: 0,
        대구: 0,
        울산: 0,
        광주: 0,
        전남: 0,
        부산: 0,
        제주: 0,
      }
    }
  },
  created() {
    for (const member of this.members) {
      const memberLocal = member.local
      console.log(memberLocal)
      this.localCnt[memberLocal] += 1
    }
  },
  methods: {
    memberSubmit: function () {
      const member = {
        local: this.localInput,
        subLocal: this.subLocalInput,
        name: this.nameInput,
      }
      if (member.subLocal && member.name) {
        this.$store.dispatch('createMember', member)
        this.subLocalInput = ''
        this.nameInput = ''
      }
    },
    selectLocal: function (event) {
      this.openPage = event.target.value
      this.modal = true
    },
    closeModal: function () {
      this.modal = false
    }
  },
}
</script>

<style>
@font-face {
    font-family: 'Cafe24Ohsquare';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Cafe24Ohsquare.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#map-box {
  display: flex;
  flex-direction: column;
  align-content: center;
}

#map-box img{
  position: relative;
  width: 540px;
  height: auto;
  margin: auto;
}

#button-box {
  position: relative;
  bottom: 445px;
  font-family: 'Cafe24Ssurround';
}

#button-box button{
  color: rgb(255, 255, 255);
  text-decoration: none;
  border-radius: 20px;
  text-shadow: rgb(0, 0, 0) 2px 2px;
  transition: .3s;
}

#button-box button:hover,
#button-box button:focus {
  transform: scale(1.3);
  color: black;
  text-shadow: rgb(255, 255, 255) 2px 2px;
}

.top-line :nth-child(1) {
  position: relative;
  top: 25px;
  right: 50px;
}

.top-line :nth-child(2) {
  position: relative;
  top: 25px;
  right: 60px;
}

.top-line :nth-child(3) {
  position: relative;
  top: 25px;
  right: 75px;
}

.top-line :nth-child(4) {
  position: relative;
  top: 25px;
  right: 45px;
}

.mid-line :nth-child(1) {
  position: relative;
  top: 100px;
}

.mid-line :nth-child(2) {
  position: relative;
  top: 90px;
  right: 10px;
}

.mid-line :nth-child(3) {
  position: relative;
  top: 120px;
  right: 50px;
}

.mid-line :nth-child(4) {
  position: relative;
  top: 70px;
  right: 75px;
}

.mid-line :nth-child(5) {
  position: relative;
  top: 120px;
  right: 50px;
}

.bottom-line :nth-child(1) {
  position: relative;
  top: 145px;
  right: 5px;
}

.bottom-line :nth-child(2) {
  position: relative;
  top: 190px;
  left: 30px;
}

.bottom-line :nth-child(3) {
  position: relative;
  top: 150px;
  left: 13px;
}

.bottom-line :nth-child(4) {
  position: relative;
  top: 185px;
  left: 20px;
}

.last-line :nth-child(1) {
  position: relative;
  top: 170px;
  right: 40px;
}

.last-line :nth-child(2) {
  position: relative;
  top: 180px;
  right: 50px;
}

.last-line :nth-child(3) {
  position: relative;
  top: 180px;
  left: 60px;
}

.last-line :nth-child(4) {
  position: relative;
  top: 195px;
  left: 100px;
}

@media (max-width: 500px) {
  #button-box {
    left: 20px;
  }

  #map-box img {
    width: 100%;
  }
}
</style>