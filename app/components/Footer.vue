<script setup lang="ts">

const mode = useColorMode()
const islight = computed(() => mode.value === 'light')


</script>

<template>
<footer class="footer py-12 bg-(--bggreen) dark:bg-(--bglight)">
    <UContainer class="max-w-[1440px]">
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4">
            <div class="foo mb-4">
                <img v-if="islight" src="/img//logo-dark.png" alt="Digital Port Logo Dark" class="h-9 mb-6" />
                  <img v-else  src="/img//logo-light.png"  alt="Digital Port Logo Light" class="h-9 mb-6" />

                <p class="text-sm md:base font-semibold text(--textcolor) mb-3 max-w-sm">Some footer text about the  Agency. Just a little description to help people understand you better</p>
            </div>
            <div class="foo mb-4">
                <h4 class="text-sm md:text-lg font-bold text(--textcolor) mb-3">Quick Links</h4>
                <ul>
                    <li><a href="#" class="text-sm md:base font-semibold text(--textcolor) mb-1 inline-block">Services</a></li>
                    <li><a href="#" class="text-sm md:base font-semibold text(--textcolor) mb-1 inline-block">Portfolio</a></li>
                    <li><a href="#" class="text-sm md:base font-semibold text(--textcolor) mb-1 inline-block">About Us </a></li>
                    <li><a href="#" class="text-sm md:base font-semibold text(--textcolor) mb-1 inline-block">Contact Us</a></li>
                </ul>
            </div>
            <div class="foo mb-4">
                <h4 class="text-sm md:text-lg font-bold text(--textcolor) mb-3">Address</h4>
                <p class="text-sm md:base font-semibold text(--textcolor) mb-3 max-w-sm">Design Agency Head Office. <br> Airport Road</p>
                
                <div class="links">
                    <UButton icon="i-simple-icons-facebook" color="neutral" variant="ghost" target="_blank" aria-label="facebook" />
                    <UButton icon="i-simple-icons-x" color="neutral" variant="ghost" target="_blank" aria-label="GitHub" />
                    <UButton icon="i-simple-icons-instagram" color="neutral" variant="ghost" target="_blank" aria-label="GitHub" />
                    <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" target="_blank" aria-label="GitHub" />
                </div>
            </div>
        </div>
        <div class="copy border-t pt-4">
            <p class="text-sm md:base font-semibold text(--textcolor)">© 2025 All Right Reserved. Design By Mehedi Hasan</p>
        </div>
    </UContainer>
</footer>

</template>