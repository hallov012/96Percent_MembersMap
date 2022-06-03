<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="content">
          <slot />
        </div>
        <div class="bottom">
          <button class="btn btn-link" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TheModal",
}
</script>

<style>
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-window {
  position: absolute;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  width: 300px;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.modal-window button {
  position: relative;
  text-decoration: none;
  color: black;
  transition: .3s;
}

.modal-window button:hover {
  transform: scale(1.2);
  color: black;
}

</style>