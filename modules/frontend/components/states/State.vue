<template>
    {{ state }}
</template>

<script setup lang="ts">
import type {State} from 'fishing-academy-types'


const {state} = defineProps<{ state: State }>()
</script>