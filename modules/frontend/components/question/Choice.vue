<template>
    <div>
        <v-btn>{{ choice.description }}</v-btn>
    </div>
</template>

<script setup lang="ts">
import type {Choice} from "fishing-academy-types"

const {choice} = defineProps<{ choice: Choice }>()
</script>