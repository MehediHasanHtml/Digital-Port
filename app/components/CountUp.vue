<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Props {
  end: number
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2000
})

const number = ref(0)
const element = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

function animateCount() {
  const start = 0
  const end = props.end
  const duration = props.duration
  const startTime = performance.now()

  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    if (elapsed < duration) {
      number.value = Math.floor(start + (end - start) * (elapsed / duration))
      requestAnimationFrame(update)
    } else {
      number.value = end
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  if (!element.value) return

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry && entry.isIntersecting) {
        animateCount()
        observer?.disconnect()
      }
    },
    { threshold: 0.5 }
  )

  observer.observe(element.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <span ref="element">{{ number }}</span>
</template>
