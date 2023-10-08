<template>
  <div class="bg-white">
    <div class="flex h-screen bg-gray-900">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-900 p-6">
        <div class="flex items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <nav class="mt-6">
          <ul>
            <li v-for="item in navigation" :key="item.name">
              <a
                :href="item.href"
                :class="[
                  'group flex items-center justify-between py-2 px-2 text-sm font-semibold rounded-lg',
                  item.current
                    ? 'text-white bg-gray-800'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800 transition',
                ]"
              >
                <div class="flex items-center">
                  <component
                    :is="item.icon"
                    class="h-6 w-6 mr-2"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </div>
                <span
                  v-if="item.count"
                  class="bg-gray-900 text-white px-2 py-1 text-xs font-medium rounded-full"
                  >{{ item.count }}</span
                >
              </a>
            </li>
          </ul>
        </nav>
        <div
          class="fixed bottom-0 left-0 flex items-center p-4 bg-gray-900 text-white"
        >
          <!-- <div
        class="fixed bottom-0 left-0 flex items-center p-4 bg-gray-900 text-white"
      >
        <img
          class="h-8 w-8 rounded-full bg-gray-800 mr-2"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div> -->

          <div
            class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 m-2"
          >
            <svg
              class="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <span class="text-white font-semibold">Onur Inc</span>
            <span class="block text-gray-400 text-xs">Your profile</span>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="flex-1 p-6 bg-white">
        <div class="pt-20 px-10">
          <div
            class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
          >
            <div
              v-for="(action, actionIdx) in actions"
              :key="action.title"
              :class="[
                actionIdx === 0
                  ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                  : '',
                actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                actionIdx === actions.length - 1
                  ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                  : '',
                'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
              ]"
            >
              <div>
                <span
                  :class="[
                    action.iconBackground,
                    action.iconForeground,
                    'inline-flex rounded-lg p-3 ring-4 ring-white',
                  ]"
                >
                  <component
                    :is="action.icon"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div class="mt-8">
                <h3 class="text-base font-semibold leading-6 text-gray-900">
                  <a :href="action.href" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true" />
                    {{ action.title }}
                  </a>
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  Doloribus dolores nostrum quia qui natus officia quod et
                  dolorem. Sit repellendus qui ut at blanditiis et quo et
                  molestiae.
                </p>
              </div>
              <span
                class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, count: "5", current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  {
    name: "Projects",
    href: "#",
    icon: FolderIcon,
    count: "12",
    current: false,
  },
  {
    name: "Calendar",
    href: "#",
    icon: CalendarIcon,
    count: "20+",
    current: false,
  },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

// for main menu

import {
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/vue/24/outline";

const actions = [
  {
    title: "Economic Calendar",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Forum",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Journalling",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Settings",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
];
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
