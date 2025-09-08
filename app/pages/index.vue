<script setup lang="ts">
import {ref, reactive} from 'vue'
import CountUp from '~/components/CountUp.vue'
import Footer from '~/components/Footer.vue'


useSeoMeta({
  title: 'Home - Digital Port',
  ogTitle: 'Home - Digital Port',
  description: 'This is portfilio site, let me tell you all about it.',
  ogDescription: 'This is portfiliosite, let me tell you all about it.',
})


const logos = [
  '/img/logos_google.png',
  '/img/Trello-logo-blue 1.png',
  '/img/logos_monday.png',
  '/img/Notion.png',
  '/img/Slack.png',
  '/img/logos_google.png',
  '/img/Trello-logo-blue 1.png',
  '/img/logos_monday.png',
  '/img/Notion.png',
  '/img/Slack.png',
]




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

<section class="hero-banner py-6 bg-(--bggreen) min-h-[calc(100vh-64px)]">
    <UContainer class="max-w-[1440px]">
      <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-3">
        <div class="flex items-center mt-3 md:mt-6 lg:mt-8">
          <div class="heading">
            <h1 class="text-xl md:text-3xl xl:text-5xl font-black text-(--primary) mb-3">Increase Your Customers Loyalty and Satisfaction</h1>
            <p class="text-sm md:text-base text-(--textcolor) mb-5">We help businesses like yours earn more customers, standout from competitors,  make more money</p>
            <UButton label="Get Started" color="primary" size="lg" class="text-base font-bold px-6 py-3 rounded-lg w-full md:w-auto justify-center"/>
          </div>
        </div>
        <div class="flex items-center mt-3 md:mt-6 lg:mt-8">
          <div class="heading">
            <img src="/img/hero.png" alt="hero" class="w-auto">
          </div>
        </div>
      </div>
    </UContainer>
    
      <!-- logos -->
       <div class=" py-4 md:py-6 bg-[#F8FFF9]">
        <UCarousel
        v-slot="{ item }"
        loop
        auto-scroll
        :items="logos"
        :ui="{ item: 'basis-1/2 md:basis-1/3 lg:basis-1/5' }"
      >
        <img :src="item" class="rounded-lg m-auto h-auto ">
      </UCarousel>
      </div>
      <!-- logos -->
</section>



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

<!-- complate projects -->
<section class="complate-projects py-12 bg-(--bglight)">
    <UContainer class="max-w-[1440px]">
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:divide-x-2 divide-gray-200 gap-3 p-4 md:p-8 lg:p-10">
            <div class="projext mb-4 p-4 md:p-6 text-center">
                <UIcon name="i-lucide-folder-git-2" class="size-8 md:size-14 lg:size-20 mb-3" />
                <p  class="text-sm md:text-base font-semibold text-(--textcolor) mb-2">Completed Projects</p>
                <h2  class="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-(--secondary) mb-4"> <CountUp :end="200" :duration="2500" />+</h2>
            </div>
            <div class="projext mb-4 p-4 md:p-6 text-center">
                <UIcon name="i-lucide-users" class="size-8 md:size-14 lg:size-20 mb-3" />
                <p  class="text-sm md:text-base font-semibold text-(--textcolor) mb-2">Customer Satisfaction</p>
                <h2  class="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-(--secondary) mb-4"> <CountUp :end="100" :duration="2500" />%</h2>
            </div>
           
            <div class="projext mb-4 p-4 md:p-6 text-center">
                <UIcon name="i-lucide-badge-cent" class="size-8 md:size-14 lg:size-20 mb-3" />
                <p  class="text-sm md:text-base font-semibold text-(--textcolor) mb-2">Raised by Clients</p>
                <h2  class="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-(--secondary) mb-4">$<CountUp :end="20" :duration="2500" />m</h2>
            </div>
           
            <div class="projext mb-4 p-4 md:p-6 text-center">
                <UIcon name="i-lucide-calendar-clock" class="size-8 md:size-14 lg:size-20 mb-3" />
                <p  class="text-sm md:text-base font-semibold text-(--textcolor) mb-2">Years in Business</p>
                <h2  class="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-(--secondary) mb-4"><CountUp :end="10" :duration="2500" />yrs</h2>
            </div>
           
        </div>
    </UContainer>
</section>
<!-- complate projects -->


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