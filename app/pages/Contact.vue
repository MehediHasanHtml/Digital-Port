<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

useSeoMeta({
  title: 'Contact | Digital Port with Nuxt - Tailwind',
  ogTitle: 'Contact | Digital Port with Nuxt - Tailwind',
  description: 'Mehedi Hasan - Frontend developer - Fully responsive across all devices, Tailwind CSS for modern UI and performance, Smooth animations, dark mode & reusable components',
  ogDescription: 'Mehedi Hasan - Frontend developer - Fully responsive across all devices, Tailwind CSS for modern UI and performance, Smooth animations, dark mode & reusable components',
})



const Subscribe = ref('')


</script>

<template>
<Header/>


<!-- Subscribe -->
<section class="Subscribe py-12">
    <UContainer class="max-w-[1440px]">
        <div class="title max-w-xl mb-10 m-auto text-center">
            <p class="text-sm md:text-lg text-(--secondary) font-semibold mb-3">Contact Us</p>
            <h2 class="text-lg md:text-3xl lg:text-4xl text-(--primary) font-bold mb-3">Get is touch</h2>
            <p class="text-sm md:text-base text-(--textcolor) mb-10">Please drop your email below to get daily update about what we do</p>
            <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-3">
                <UFormField label="First Name" class="w-full mb-3">
                    <UInput placeholder="First Name" size="xl"  class="text-base text-(--primary) w-full" />
                </UFormField>
                <UFormField label="Last Name" class="w-full mb-3">
                    <UInput placeholder="Last Name" size="xl"  class="text-base text-(--primary) w-full" />
                </UFormField>
            </div>
             <UFormField label="Email" class="w-full mb-3">
                <UInput placeholder="Enter your email" size="xl"  class="text-base text-(--primary) w-full" />
            </UFormField>
             <UFormField label="Phone" class="w-full mb-3">
                <UInput placeholder="Phone number" size="xl"  class="text-base text-(--primary) w-full" />
            </UFormField>
             <UFormField label="Message" class="w-full mb-3">
                 <UTextarea placeholder="Type here..." size="xl"  class="text-base text-(--primary) w-full" />
            </UFormField>

            <UButton size="xl" color="primary" variant="solid" class="w-full justify-center">Send</UButton>
        </div>

    </UContainer>
</section>
<!-- Subscribe -->



<Footer/>
</template>