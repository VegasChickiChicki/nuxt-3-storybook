<template>
  <button type="button">
    {{ nuxtApp }}
  </button>
</template>

<script setup lang="ts">
import type { TProps } from './v-button.types'

const props = defineProps<TProps>()

const nuxtApp = useNuxtApp()
</script>

<style lang="scss">

</style>
