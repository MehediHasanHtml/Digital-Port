import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      margin: 'auto',
      padding: '10px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px' // 👈 custom breakpoint for 1920px
      }
    },
    extend: {
      screens: {
        '3xl': '1920px', // 👈 allows you to use `3xl:`
      },
      maxWidth: {
        'screen-3xl': '1920px' // 👈 so you can use `max-w-screen-3xl`
      }
    }
  }
}