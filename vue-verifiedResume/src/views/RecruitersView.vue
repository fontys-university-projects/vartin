<template>
    <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
      <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
        <div class="mt-4 ml-4">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div class="ml-4">
              <h3 class="text-base font-semibold leading-6 text-gray-900">Tom Cook</h3>
              <p class="text-sm text-gray-500">
                <a href="#">@tom_cook</a>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-shrink-0 mt-4 ml-4">
          <a class="relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <PhoneIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Phone</span>
          </a>
          <button type="button" class="relative inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <EnvelopeIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'

  const recruiters = [
  {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        cvs: [
            {
                id: 1,
                name: 'Leonard Krasner',
                title: 'Senior Designer',
                imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            },
        ]
  }
  ]
  </script>