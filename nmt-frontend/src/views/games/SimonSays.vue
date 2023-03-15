<template>
  <div>
    <div class="color-buttons">
      <button v-for="color in colors" :key="color" :style="{ backgroundColor: color }" @click="checkColor(color)"></button>
    </div>
    <div class="color-display" :style="{ backgroundColor: currentColor }"></div>
    <div class="game-info">
      <p>Round: {{ round }}</p>
      <p>Score: {{ score }}</p>
    </div>
    <div class="game-over" v-if="!isPlaying">
      <p>Game over! Your score is {{ score }}.</p>
      <button @click="startGame">Restart</button>
    </div>
    <button class="star-button" v-if="isPlaying" @click="score++">Star</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["red", "green", "blue", "yellow"],
      sequence: [],
      round: 1,
      score: 0,
      isPlaying: false,
      currentColor: "",
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.sequence = [];
      this.round = 1;
      this.score = 0;
      this.playSequence();
    },
    playSequence() {
  if (this.round > 10) {
    this.isPlaying = false;
    return;
  }

  this.sequence = [];
  for (let i = 0; i < this.round; i++) {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.sequence.push(randomColor);
  }

  this.currentColor = "";
  this.showSequence();
},
    showSequence() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  delay(500)
    .then(() => {
      this.currentColor = "";
      return delay(500);
    })
    .then(() => {
      let i = 0;
      const interval = setInterval(() => {
        this.currentColor = this.sequence[i];
        i++;
        if (i >= this.sequence.length) {
          clearInterval(interval);
          return delay(500);
        }
      }, 1000);
    })
    .then(() => {
      this.currentColor = "";
    });
},
checkColor(color) {
  if (color === this.sequence[0]) {
    this.sequence.shift();
    if (this.sequence.length === 0) {
      this.round++;
      this.score++;
      this.playSequence();
    }
  } else {
    this.isPlaying = false;
  }
},
  },
};
</script>

<style>
.color-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.color-buttons button {
  width: 100px;
  height: 100px;
  margin: 0 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.color-display {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.game-info {
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
}

.game-over {
  text-align: center;
  margin-top: 20px;
}

.game-over button {
  margin-left: 10px;
}

.star-button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: yellow;
  color: black;
  font-size: 24px;
  cursor: pointer;
}
</style>    