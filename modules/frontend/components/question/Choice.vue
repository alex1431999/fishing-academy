<template>
    <div>
        <v-btn block class="text-none">{{ choice.description }}</v-btn>
    </div>
</template>

<script setup lang="ts">
import type {Choice} from "fishing-academy-types"

const {choice} = defineProps<{ choice: Choice }>()
</script>