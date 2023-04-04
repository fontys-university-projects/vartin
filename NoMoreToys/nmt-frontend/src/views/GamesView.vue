<template>
  <div class="py-24 text-gray-900 sm:py-32">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Games</h2>
      </div>
      <div
           class="grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts"
                 :key="post.id"
                 class="relative flex flex-col justify-end px-8 pb-8 overflow-hidden bg-gray-900 isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80">
          <img :src="post.imageUrl"
               alt=""
               class="absolute inset-0 object-cover w-full h-full -z-10" />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />


          <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <router-link :to="post.href">
              <span class="absolute inset-0" />
              {{ post.title }}
            </router-link >
          </h3>
          <div class="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
            <p> {{ post.description }}</p>
          </div>
        </article>
        <article
                 class="relative flex flex-col justify-end px-8 pb-8 overflow-hidden bg-gray-900 isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80">
          <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
               alt=""
               class="absolute inset-0 object-cover w-full h-full -z-10" />
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PlusCircleIcon class="w-20 h-20 inline-flex items-center p-2 text-white border border-transparent rounded-lg shadow-sm bg-sea-800/80 hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-700 focus:ring-offset-2"
                            aria-hidden="true" />
          </div>
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <button @click="open = true">
              <span class="absolute inset-0" />
              Add New Game
            </button>
          </h3>
          <div class="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
            <p> Did you get a new product key? You can click here to register it</p>
          </div>
        </article>
      </div>
    </div>
  </div>
  <TransitionRoot as="template"
                  :show="open">
    <Dialog as="div"
            class="relative z-10"
            @close="open = false">
      <TransitionChild as="template"
                       enter="ease-out duration-300"
                       enter-from="opacity-0"
                       enter-to="opacity-100"
                       leave="ease-in duration-200"
                       leave-from="opacity-100"
                       leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template"
                           enter="ease-out duration-300"
                           enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enter-to="opacity-100 translate-y-0 sm:scale-100"
                           leave="ease-in duration-200"
                           leave-from="opacity-100 translate-y-0 sm:scale-100"
                           leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
                         class="relative transform overflow-hidden rounded-lg bg-slate-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <FolderPlusIcon class="h-6 w-6 text-green-600"
                                  aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3"
                               class="text-base font-semibold leading-6 text-white">Payment successful</DialogTitle>
                  <div class="mt-2">
                    <RegisterGame></RegisterGame>
                    <p class="text-sm text-gray-500">Please, keep in mind, QR scanning does not work on PC at the moment,
                      if you want to add it quickly use your phone or tablet! Else you can enter it manually.</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button type="button"
                        class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                        @click="open = false">Enter Manually</button>
                <button type="button"
                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                        @click="open = false"
                        ref="cancelButtonRef">Cancel</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup>
import { PlusCircleIcon, FolderPlusIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import RegisterGame from '@/components/RegisterGame.vue'
import MathKingdom from '@/assets/math_kingdom.png'

const open = ref(false)

const posts = [
  {
    id: 1,
    title: 'Math Kingdom',
    href: '/g/math',
    description:
      'Get ready to explore the galaxy, by solving easy and complex math question? ',
    imageUrl: MathKingdom,
  },
  {
    id: 1,
    title: 'Simon Says',
    href: '/g/simon-says',
    description:
      'Are you ready to challenge your photographical memory? Show off by playing the Simon Says',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  },
  {
    id: 1,
    title: 'Star Saber',
    href: '#',
    description:
      'Do you ever wanted to feel like a jedi? Now you can play with your friends with the awesome saber (Sound on is recommended)',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  },
  // More posts...
]
</script>
