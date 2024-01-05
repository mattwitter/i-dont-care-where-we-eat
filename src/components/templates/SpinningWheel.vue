<template>
  <div>
    <div class="wheel-container">
      <div class="wheel" :style="{ transform: `rotate(${rotation}deg)` }">
        <div class="segment" v-for="(segment, index) in segments" :key="index" :style="{ transform: `rotate(${360 / segments.length * index}deg)`, width: `calc(100% / ${segments.length})` }">
          {{ segment }}
        </div>
      </div>
    </div>
    <button @click="spinWheel" :disabled="isSpinning">Spin</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      segments: ["Prize 1", "Prize 2", "Prize 3", "Prize 4", "Prize 5"],
      isSpinning: false,
      rotation: 0,
    };
  },
  methods: {
    spinWheel() {
      if (!this.isSpinning) {
        this.isSpinning = true;
        const spinSpeed = 20; // degrees per frame
        const spinDuration = 3000; // in milliseconds

        const startTime = Date.now();

        const spinAnimation = () => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;

          if (elapsedTime < spinDuration) {
            this.rotation = (this.rotation + spinSpeed) % 360;

            requestAnimationFrame(spinAnimation);
          } else {
            this.isSpinning = false;
          }
        };

        requestAnimationFrame(spinAnimation);
      }
    },
  },
};
</script>

<style scoped>
.wheel-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.wheel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 5px solid #333;
  border-radius: 50%;
  overflow: hidden;
}

.segment {
  position: absolute;
  height: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  transform-origin: 100% 100%;
  transform: rotate(0deg); /* Reset the rotation */
}

button {
  margin-top: 20px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}
</style>
