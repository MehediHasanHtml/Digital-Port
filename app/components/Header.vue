<script setup lang="ts">
import {ref, computed} from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const mode = useColorMode()
const islight = computed(() => mode.value === 'light')

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Services',
    to: '/services'
  },
  {
    label: 'About Us',
    to: '/about'
  },
  {
    label: 'Contact Us',
    to: '/contact'
  },
])
</script>

<template>

<div class="header fixed top-0 left-0 z-99 w-full  bg-(--bggreen)">

    <UContainer class="max-w-[1440px]">
        <UHeader class="p-0  bg-(--bggreen)" :ui="{container: 'justify-between px-0 lg:px-0 sm:px-0 max-w-full'}">
            <template #title>
                  <img v-if="islight" src="/img//logo-dark.png" alt="Digital Port Logo Dark" class="h-9" />
                  <img v-else  src="/img//logo-light.png"  alt="Digital Port Logo Light" class="h-9" />
            </template>

            <UNavigationMenu :items="items" class="text-(--primary) text-base font-bold" :ui="{link: 'font-semibold text-base text-(--primary)'}" />

            <template #right>
                <UColorModeButton />
            </template>

            <template #body>
                <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
            </template>

        </UHeader>
    </UContainer>

</div>




</template>
