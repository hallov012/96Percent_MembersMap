<template>
  <div id="map-box">
    <h1>96Percent</h1>
    <div id="input-box">
      <select name="local" id="local-id">
        <option value="서울">서울</option>
        <option value="서울">인천</option>
        <option value="서울">경기</option>
        <option value="서울">강원</option>
        <option value="서울">충남</option>
        <option value="서울">세종</option>
        <option value="서울">대전</option>
        <option value="서울">충북</option>
        <option value="서울">경북</option>
        <option value="서울">전북</option>
        <option value="서울">경남</option>
        <option value="서울">대구</option>
        <option value="서울">울산</option>
        <option value="서울">광주</option>
        <option value="서울">전남</option>
        <option value="서울">부산</option>
        <option value="서울">제주</option>
      </select>
      <input type="text" class="local-input" placeholder="지역">
      <input type="text" class="name-input" placeholder="이름">
      <button class="btn">Submit</button>
    </div>
    <img src="@/assets/map.png" alt="">
    <div id="button-box">
      <div class="top-line">
        <button class="btn btn-link">인천</button>
        <button class="btn btn-link">서울</button>
        <button class="btn btn-link">경기</button>
        <button class="btn btn-link">강원</button>
      </div>
      <div class="mid-line">
        <button class="btn btn-link">충남</button>
        <button class="btn btn-link">세종</button>
        <button class="btn btn-link">대전</button>
        <button class="btn btn-link">충북</button>
        <button class="btn btn-link">경북</button>
      </div>
      <div class="bottom-line">
        <button class="btn btn-link">전북</button>
        <button class="btn btn-link">경남</button>
        <button class="btn btn-link">대구</button>
        <button class="btn btn-link">울산</button>
      </div>
      <div class="last-line">
        <button class="btn btn-link">광주</button>
        <button class="btn btn-link">전남</button>
        <button class="btn btn-link">부산</button>
        <button class="btn btn-link">제주</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMain",
}
</script>

<style>
#map-box {
  display: flex;
  flex-direction: column;
  align-content: center;
}

#input-box .select {
  width: 20px;
}

#input-box input {
  height: 23px;
}

#input-box .local-input {
  width: 50px;
  margin-left: 10px;
}

#input-box .name-input {
  width: 100px;
  margin-left: 10px;
}

#input-box button {
  height: 35px;
  text-align: center;
}

#map-box img{
  position: relative;
  width: 550px;
  height: auto;
  margin: auto;
}

#button-box {
  position: relative;
  bottom: 450px;
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
</style>