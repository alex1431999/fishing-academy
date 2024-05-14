<template>
    <v-btn>{{ choice.description }}</v-btn>
</template>

<script setup lang="ts">
import type {Choice} from "fishing-academy-types"

const {choice} = defineProps<{ choice: Choice }>()
</script>