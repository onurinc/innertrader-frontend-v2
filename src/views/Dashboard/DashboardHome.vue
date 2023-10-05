<template>
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
        <!-- OLD PIC -->
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
      <!-- Your main content goes here -->
    </main>
  </div>
</template>

<script setup>
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
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
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
