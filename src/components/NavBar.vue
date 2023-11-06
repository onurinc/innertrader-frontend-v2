<template>
  <div class="isolate bg-white">
    <div
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    ></div>
    <div class="px-6 pt-6 lg:px-8">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/home" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <svg
              class="h-12 w-auto"
              viewBox="0 0 1056.105 1035.263"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="g8"
                transform="matrix(1.333333, 0, 0, -1.333333, -807.86084, 1996.048584)"
              >
                <g id="g10" transform="scale(0.1)">
                  <path
                    d="m 6310,7785.7 c 0,0 3629.51,435.5 7380,0 0,0 -3919.87,-556.6 -7380,0"
                    style="
                      fill: #d3d4d3;
                      fill-opacity: 1;
                      fill-rule: nonzero;
                      stroke: none;
                    "
                    id="path14"
                  />
                  <path
                    d="m 11090.6,12775.4 c 145.2,-435.6 -145.2,-471.9 -145.2,-471.9 145.2,217.8 -217.8,508.2 -217.8,508.2 -72.6,-399.3 -290.4,-508.2 -290.4,-508.2 -704.09,-260.8 -696.23,-727.7 -636,-969.9 26.79,-107.7 -1.65,-221.7 -73.89,-306 l -88.64,-103.4 c 363.03,-943.8 1488.23,-145.2 1488.23,-145.2 -290.4,-544.5 -1343.03,-508.2 -1343.03,-508.2 -1236.81,238.7 -1799.1,-93.4 -2051.37,-399.1 -367.43,456.1 -584.62,1035.1 -587.39,1661.2 -6.49,1465 1184.81,2667.4 2649.88,2673.7 952.91,4.1 1811.61,-488.2 2289.91,-1282.6 133.3,-221.4 406.5,-314.8 646.7,-219.5 v 0 c -229.8,579.2 -623.1,1073.4 -1137.4,1429.1 -526.7,364.4 -1144.8,556.9 -1787.48,556.9 -840.21,0 -1630.14,-327.1 -2224.26,-921.3 -594.12,-594.1 -921.32,-1384 -921.32,-2224.2 0,-749 267.68,-1474.6 753.73,-2043.1 335.84,-392.8 761.48,-694.7 1235.02,-882.4 548.82,-256.4 1065.61,-281.8 1497.01,-213.6 810.2,128.2 1516.5,631.4 1904.8,1354 904.3,1683.1 -961.1,3015.5 -961.1,3015.5"
                    style="
                      fill: #100f0d;
                      fill-opacity: 1;
                      fill-rule: nonzero;
                      stroke: none;
                    "
                    id="path16"
                  />
                </g>
              </g>
            </svg>
            <!-- <img
              class="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=500"
              alt=""
            /> -->
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-m font-semibold leading-6 text-gray-900"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <div class="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              class="block w-full rounded-md border border-transparent bg-cyan-500 px-5 py-2 text-base font-medium text-white shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:px-5"
            >
              <a href=/dashboard class="text-m font-semibold leading-6 text-gray-900"
              > Dashboard</a>
            </button>
          </div>
        </div>
      </nav>
      <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <DialogPanel
          focus="true"
          class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=500"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Dashboard", href: "/dashboard" },
];

const mobileMenuOpen = ref(false);
</script>
