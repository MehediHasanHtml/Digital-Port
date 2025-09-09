<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';


useSeoMeta({
  title: 'About | Digital Port with Nuxt - Tailwind',
  ogTitle: 'About | Digital Port with Nuxt - Tailwind',
  description: 'Mehedi Hasan - Frontend developer - Fully responsive across all devices, Tailwind CSS for modern UI and performance, Smooth animations, dark mode & reusable components',
  ogDescription: 'Mehedi Hasan - Frontend developer - Fully responsive across all devices, Tailwind CSS for modern UI and performance, Smooth animations, dark mode & reusable components',
})


const Subscribe = ref('')


</script>

<template>
<Header/>

<!-- What we do -->
<section class="py-12 bg-(--bgwhite)">
    <UContainer class="max-w-[1440px]">
        <div class="title max-w-xl mb-15">
            <p class="text-sm md:text-lg text-(--secondary) font-semibold mb-3">What we do</p>
            <h2 class="text-lg md:text-3xl lg:text-4xl text-(--primary) font-bold mb-3">We provide the Perfect Solution to your business growth</h2>
        </div>
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-15">
            <div class="icons">
                <div class="bg-green-100 h-16 w-16 rounded-2xl flex items-center justify-center mb-4">
                    <UIcon name="i-lucide-chart-no-axes-combined" class="size-6 dark:text-(--bgwhite)" />
                </div>
                <h3 class="text-sm md:text-base lg:text-2xl font-bold text-(--primary) mb-3">Grow Your Business</h3>
                <p class="text-sm md:text-base font-semibold text-(--textcolor) mb-4">We help identify the best ways to improve your business</p>
                <UButton trailing-icon="i-lucide-arrow-right" variant="ghost" color="neutral" size="md">Learn More</UButton>
            </div>
            
            <div class="icons">
                <div class="bg-green-100 h-16 w-16 rounded-2xl flex items-center justify-center mb-4">
                    <UIcon name="i-lucide-heart-plus" class="size-6 dark:text-(--bgwhite)" />
                </div>
                <h3 class="text-sm md:text-base lg:text-2xl font-bold text-(--primary) mb-3">Improve brand loyalty</h3>
                <p class="text-sm md:text-base font-semibold text-(--textcolor) mb-4">We help identify the best ways to improve your business</p>
                <UButton trailing-icon="i-lucide-arrow-right" variant="ghost" color="neutral" size="md">Learn More</UButton>
            </div>
            <div class="icons">
                <div class="bg-green-100 h-16 w-16 rounded-2xl flex items-center justify-center mb-4">
                    <UIcon name="i-lucide-briefcase-business" class="size-6 dark:text-(--bgwhite)" />
                </div>
                <h3 class="text-sm md:text-base lg:text-2xl font-bold text-(--primary) mb-3">Improve Business Model</h3>
                <p class="text-sm md:text-base font-semibold text-(--textcolor) mb-4">We help identify the best ways to improve your business</p>
                <UButton trailing-icon="i-lucide-arrow-right" variant="ghost" color="neutral" size="md">Learn More</UButton>
            </div>
        </div>
    </UContainer>
</section>
<!-- What we do -->


<!-- Subscribe -->
<section class="Subscribe py-12">
    <UContainer class="max-w-[1440px]">
        <div class="title max-w-xl mb-15 m-auto text-center">
            <p class="text-sm md:text-lg text-(--secondary) font-semibold mb-3">SUBSCRIBE</p>
            <h2 class="text-lg md:text-3xl lg:text-4xl text-(--primary) font-bold mb-3">Subscribe to get the latest news about us</h2>
            <p class="text-sm md:text-base text-(--textcolor) mb-10">Please drop your email below to get daily update about what we do</p>
              <UFieldGroup class="w-full">
                <UInput
                v-model="Subscribe"
                placeholder="Enter Your Email Adress"
                class="text-base text-(--primary) w-full"
                size="xl"

                >
                </UInput>

                 <UButton label="Subscribe"  size="xl" />
            </UFieldGroup>

        </div>
    </UContainer>
</section>
<!-- Subscribe -->

<Footer/>
</template>