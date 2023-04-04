<template>
  <div class="relative min-h-screen overflow-hidden bg-gray-900 isolate">
    <img :src="CosmonautAstronautSpace" alt="" class="absolute inset-0 object-cover w-full h-full -z-10 brightness-[.25]" />
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        <defs>
          <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="">
      <NavBar/>
      <div class="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative px-3 py-1 text-sm leading-6 text-gray-400 rounded-full ring-1 ring-white/10 hover:ring-white/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Are you ready?</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">Welcome Astronaut to our universe, where you will explore the world playing games and learn in the process!</p>
          <div class="flex items-center justify-center mt-10 gap-x-6">
            <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get started</a>
            <a href="#features" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
        <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        <defs>
          <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
  <div class="py-24 bg-gray-900 sm:py-32" id="features">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-2xl mx-auto lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Features</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Hello, little Astronaut, get ready to explore a fun adventure in the unknown galaxy, learning and unlocking fun stuff</p>
      </div>
      <div class="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-white">
              <div class="flex items-center justify-center w-10 h-10 mb-6 bg-indigo-500 rounded-lg">
                <component :is="feature.icon" class="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-300">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn more <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <div class="relative bg-gray-900 isolate">
    <div class="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
      <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
        <div class="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 w-full overflow-hidden -z-10 ring-1 ring-white/5 lg:w-1/2">
            <svg class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
            </svg>
            <svg class="absolute top-[calc(100%-13rem)] -left-56 w-[72.1875rem] transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]" viewBox="0 0 1155 678" aria-hidden="true">
              <path fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)" fill-opacity=".2" d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z" />
              <defs>
                <linearGradient id="0a9a5302-e517-46c6-85f0-d826aa6a313e" x1="1155.49" x2="-78.208" y1="677.823" y2="203.355" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4F46E5" />
                  <stop offset="1" stop-color="#80CAFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Do you have any questions, or any problems with our platform? Feel free to contact us!</p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only"><Address></Address></span>
                <BuildingOffice2Icon class="w-6 text-gray-400 h-7" aria-hidden="true" />
              </dt>
              <dd>Achtseweg Zuid 153<br />5651 GW Eindhoven</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="w-6 text-gray-400 h-7" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-white" href="tel:+31 85 050 1111">+31 85 050 1111</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="w-6 text-gray-400 h-7" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-white" href="mailto:hello@example.com">hello@example.com</a></dd>
            </div>
          </dl>
        </div>
      </div>
      <form action="#" method="POST" class="px-6 pt-20 pb-24 sm:pb-32 lg:py-48 lg:px-8">
        <div class="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-white">First name</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Last name</label>
              <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">Phone number</label>
              <div class="mt-2.5">
                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-white">Message</label>
              <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
          <div class="flex justify-end mt-8">
            <button type="submit" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Send message</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import CosmonautAstronautSpace from '@/assets/cosmonaut_astronaut_space.jpg'
import { PuzzlePieceIcon, PaintBrushIcon , GlobeEuropeAfricaIcon, BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Games',
    description:
      "We have educational games focused on developing the kid's skills, like their photographic memory, their logical thinking and many more!",
    href: '#',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Custom Characters',
    description:
      'A fully customized avatar, from hair to face expressions and many more!',
    href: '#',
    icon: PaintBrushIcon,
  },
  {
    name: 'Different environment',
    description:
      'Overtime you progress you will see different plants with beautiful sceneries!',
    href: '#',
    icon: GlobeEuropeAfricaIcon,
  },
]

</script>