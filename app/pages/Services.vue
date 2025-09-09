<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

useSeoMeta({
  title: 'Services | Digital Port with Nuxt - Tailwind',
  ogTitle: 'Services | Digital Port with Nuxt - Tailwind',
  description: 'Mehedi Hasan - Frontend developer - Fully responsive across all devices, Tailwind CSS for modern UI and performance, Smooth animations, dark mode & reusable components',
  ogDescription: 'Mehedi Hasan - Frontend developer - Fully responsive across all devices, Tailwind CSS for modern UI and performance, Smooth animations, dark mode & reusable components',
})



const testimonials = ref([
  {
    img: '/img/project1.png',
    title: 'Digital Marketing Agency Website',
    description: 'This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand',

  },
  {
    img: '/img/project2.png',
    title: 'Digital Marketing Agency Website',
    description: 'This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand',

  },
  {
    img: '/img/project3.png',
    title: 'Digital Marketing Agency Website',
    description: 'This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand',

  },
  
  {
    img: '/img/project4.png',
    title: 'Digital Marketing Agency Website',
    description: 'This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand',

  },
  
])


const testi = ref([
    {
        dec: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
        name: 'Michael Lee',
        role: 'Entrepreneur',
        avatar: 'https://i.pravatar.cc/100?img=3'
    },
    {
        dec: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
        name: 'Michael Lee',
        role: 'Entrepreneur',
        avatar: 'https://i.pravatar.cc/100?img=3'
    },
    {
        dec: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
        name: 'Michael Lee',
        role: 'Entrepreneur',
        avatar: 'https://i.pravatar.cc/100?img=3'
    },
    {
        dec: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
        name: 'Michael Lee',
        role: 'Entrepreneur',
        avatar: 'https://i.pravatar.cc/100?img=3'
    },
    {
        dec: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
        name: 'Michael Lee',
        role: 'Entrepreneur',
        avatar: 'https://i.pravatar.cc/100?img=3'
    },
    {
        dec: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
        name: 'Michael Lee',
        role: 'Entrepreneur',
        avatar: 'https://i.pravatar.cc/100?img=3'
    },
    {
        dec: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
        name: 'Michael Lee',
        role: 'Entrepreneur',
        avatar: 'https://i.pravatar.cc/100?img=3'
    },
])

const Subscribe = ref('')


</script>

<template>
<Header/>

<!-- Our Portfolio -->
<section class="ourportfolio py-12">
    <UContainer class="max-w-[1440px]">
        <div class="title max-w-xl mb-15">
            <p class="text-sm md:text-lg text-(--secondary) font-semibold mb-3">Our Portfolio</p>
            <h2 class="text-lg md:text-3xl lg:text-4xl text-(--primary) font-bold mb-3">We provide the Perfect Solution to your business growth</h2>
        </div>

        <UPageColumns class="column-1 md:columns-2 lg:columns-2">
            <UPageCard
                v-for="(testimonial, index) in testimonials"
                :key="index"
                variant="ghost"
                :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
                >
                <img :src="testimonial.img" :alt="testimonial.title" class="object-cover w-auto mb-4">
                <h2 class="text-md md:text-lg lg:text-2xl font-bold">{{ testimonial.title }}</h2>
                <p class="text-sm md:text-base font-reguler text-(--textcolor) mb-2">{{ testimonial.description }}</p>

            </UPageCard>
        </UPageColumns>

    </UContainer>
</section>
<!-- Our Portfolio -->
  
<!-- TESTIMONIALS -->
<section class="tesimonials py-12">
    <UContainer class="max-w-[1440px]">
        <div class="title max-w-xl mb-15">
            <p class="text-sm md:text-lg text-(--secondary) font-semibold mb-3">TESTIMONIALS</p>
            <h2 class="text-lg md:text-3xl lg:text-4xl text-(--primary) font-bold mb-3">See what our customer say about us</h2>
        </div>

          <UCarousel v-slot="{ item }" loop auto-scroll dots :items="testi" class="w-full mx-auto" :ui="{ item: 'basis-1/1 md:basis-1/2 lg:basis-1/3' }" >
            <div class="m-4 shadow-lg p-6 rounded-lg dark:bg-(--bglight)">
            <p class="text-sm md:text-base text-(--primary) font-reguler mb-3">{{ item.dec }}</p>
                <UUser
                    :name="item.name"
                    :description="item.role"
                    :avatar="{
                        src: 'https://i.pravatar.cc/150?u=john-doe',
                        icon: 'i-lucide-image'
                    }"
                />
            </div>
        </UCarousel>

    </UContainer>
</section>
<!-- TESTIMONIALS -->


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