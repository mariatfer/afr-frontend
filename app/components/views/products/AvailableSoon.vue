<script setup lang="ts">
import type { AvailableSoon } from '@/interfaces/products'

defineProps<AvailableSoon>()
</script>

<template>
  <div class="available">
    <span class="available__text">{{ title }}</span>
    <p class="available__note">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.available {
  padding: 2.5rem;
  width: fit-content;
  max-width: 28.125rem;
  background: color-mix(in srgb, var(--c-secondary) 20%, transparent);
  border-radius: var(--s-border-radius);
  @include box-shadow($y: 0.25rem, $blur: 2rem);
  backdrop-filter: blur(0.3125rem);
  -webkit-backdrop-filter: blur(0.3125rem);
  border: 0.0625rem solid color-mix(in srgb, var(--c-secondary) 30%, transparent);
  text-align: center;

  @supports (backdrop-filter: blur(1px)) {
    background: color-mix(in srgb, var(--c-secondary) 25%, transparent);
    backdrop-filter: blur(0.625rem);
    -webkit-backdrop-filter: blur(0.625rem);
  }

  @include responsive() {
    padding: var(--s-padding-mobile);
    width: 100%;
    max-width: unset;
  }

  &__text {
    font-size: var(--s-font-h4);
    font-weight: 600;
    color: var(--c-dark-brown);
  }

  &__note {
    margin: 1rem 0 0 0;
    font-size: var(--s-font-cta);
    color: var(--c-dark-brown);
    opacity: 0.9;
  }
}
</style>
