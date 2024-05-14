<template>
    <v-card>
        {{ question }}
    </v-card>
</template>

<script setup lang="ts">
import type {Question} from 'fishing-academy-types'

const {question} = defineProps<{ question: Question }>()
</script>