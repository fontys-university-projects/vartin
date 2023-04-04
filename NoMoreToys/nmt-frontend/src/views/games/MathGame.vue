<template>
    <div class="min-h-screen">
        <main class="mt-24 pb-8">
            <div class="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                    <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                        <section aria-labelledby="section-1-title">
                            <div class="overflow-hidden rounded-lg bg-slate-800/50 shadow">
                                <div class="p-6">
                                    <div
                                         class="grid grid-cols-6 gap-4 font-mono text-white text-sm text-center font-bold leading-6">
                                        <div
                                             class="p-4 rounded-lg col-span-full sm:col-start-2 sm:col-span-4 row-span-2 shadow-none">
                                            <p class="text-4xl font-bold tracking-tight sm:text-5xl mb-7">{{ num1 }} + ▢ = {{ result }}</p>
                                        </div>

                                        <div
                                             class="p-4 rounded-lg border border-indigo-900 shadow-sm shadow-indigo-900 col-start-1 col-end-3">
                                            <button class="text-3xl font-bold tracking-tight sm:text-4xl" @click="checkAnswer(options[0])">{{ options[0] }}</button>
                                        </div>
                                        <div
                                             class="p-4 rounded-lg border border-indigo-900 shadow-sm shadow-indigo-900 col-end-7 col-span-2">
                                            <button class="text-3xl font-bold tracking-tight sm:text-4xl" @click="checkAnswer(options[1])">{{ options[1] }}</button>
                                        </div>
                                        <div
                                             class="p-4 rounded-lg border border-indigo-900 shadow-sm shadow-indigo-900 col-start-3 col-end-5">
                                            <button class="text-3xl font-bold tracking-tight sm:text-4xl" @click="checkAnswer(options[2])">{{ options[2] }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="grid grid-cols-1 gap-4">
                        <section aria-labelledby="section-2-title">
                            <div class="overflow-hidden rounded-lg bg-slate-800/50 shadow">
                                <div class="p-6 text-center">
                                    <h1 class="text-center text-4xl text-white pb-6">Game Stats</h1>
                                    <div class="pb-4">
                                        <p class="text-2xl text-white">Score</p>
                                        <p class="text-xl text-white">{{ score }}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
  data() {
    return {
      num1: 0,
      result: 0,
      options: [],
      answer: null,
      score: 0,
      questionCount: 0,
      gameOver: false,
    };
  },
  methods: {
    generateQuestion() {
      this.num1 = Math.floor(Math.random() * 10) + 1;
      this.result = Math.floor(Math.random() * 10) + 1;
      this.options = [
        this.result - this.num1,
        this.result - this.num1 + Math.floor(Math.random() * 3) + 1,
        this.result - this.num1 - Math.floor(Math.random() * 3) - 1,
      ].sort(() => Math.random() - 0.5);
    },
    checkAnswer(option) {
      if (option === this.result - this.num1) {
        this.score++;
      } else {
        this.score--;
      }
      this.questionCount++;
      if (this.questionCount === 10) {
        this.gameOver = true;
      } else {
        this.generateQuestion();
      }
    },
  },
  mounted() {
    this.generateQuestion();
  },
};
</script>