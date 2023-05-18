<template>
    <div class="relative pb-5 border-b border-gray-200">
        <div class="md:flex md:items-center md:justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900">Employees</h3>
            <div class="mt-3 sm:ml-4 sm:mt-0">
                <label for="mobile-search-candidate"
                       class="sr-only">Search</label>
                <label for="desktop-search-candidate"
                       class="sr-only">Search</label>
                <div class="flex rounded-md shadow-sm">
                    <div class="relative flex-grow focus-within:z-10">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <MagnifyingGlassIcon class="w-5 h-5 text-gray-400"
                                                 aria-hidden="true" />
                        </div>
                        <input type="text"
                               name="mobile-search-candidate"
                               id="mobile-search-candidate"
                               class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden"
                               placeholder="Search employees" />
                        <input type="text"
                               name="desktop-search-candidate"
                               id="desktop-search-candidate"
                               class="hidden w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block"
                               placeholder="Search employees" />
                    </div>
                    <button type="button"
                            class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <BarsArrowUpIcon class="-ml-0.5 h-5 w-5 text-gray-400"
                                         aria-hidden="true" />
                        Sort
                        <ChevronDownIcon class="w-5 h-5 -mr-1 text-gray-400"
                                         aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <div class="block">
                <nav class="flex -mb-px space-x-8">
                    <a v-for="tab in tabs"
                       :key="tab.name"
                       :href="tab.href"
                       :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium']"
                       :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
                </nav>
            </div>
        </div>
    </div>

    <ul role="list"
        class="grid grid-cols-1 gap-6 pt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="person in people"
            :key="person.email"
            class="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
            <img :src="person.coverUrl" class="w-full rounded-t-lg" />
            <div class="flex flex-col flex-1 p-4">
                <img class="flex-shrink-0 w-32 h-32 mx-auto -mt-20 rounded-full shadow-md shadow-slate-700"
                     :src="person.imageUrl"
                     alt="" />
                <h3 class="mt-3 text-sm font-medium text-gray-900">{{ person.name }}</h3>
                <dl class="flex flex-col justify-between flex-grow mt-1">
                    <dt class="sr-only">Title</dt>
                    <dd class="text-sm text-gray-500">{{ person.title }}</dd>
                    <dt v-if="person.role" class="sr-only">Role</dt>
                    <dd v-if="person.role" class="mt-3">
                        <span
                              class="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-full bg-green-50 ring-1 ring-inset ring-green-600/20">{{
                                  person.role }}</span>
                    </dd>
                </dl>
            </div>
            <div>
                <div class="flex -mt-px divide-x divide-gray-200">
                    <div class="flex flex-1 w-0">
                        <a :href="`mailto:${person.email}`"
                           class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-semibold text-gray-900 border border-transparent rounded-bl-lg gap-x-3">
                            <EnvelopeIcon class="w-5 h-5 text-gray-400"
                                          aria-hidden="true" />
                            Email
                        </a>
                    </div>
                    <div class="flex flex-1 w-0 -ml-px">
                        <a :href="`tel:${person.telephone}`"
                           class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-semibold text-gray-900 border border-transparent rounded-br-lg gap-x-3">
                            <PhoneIcon class="w-5 h-5 text-gray-400"
                                       aria-hidden="true" />
                            Call
                    </a>
                </div>
            </div>
        </div>
    </li>
</ul></template>
  
<script setup>
import { BarsArrowUpIcon, ChevronDownIcon, MagnifyingGlassIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'

const people = [
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        coverUrl: 'https://images.unsplash.com/photo-1682407185504-5d3b24e07b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    
    // More people...
]
const tabs = [
    { name: 'Current', href: '#', current: true },
    { name: 'Old', href: '#', current: false },
]
</script>