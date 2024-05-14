<template>
    <v-card>
        <v-card-text>
            {{ question.description }}

            <Choice v-for="choice in question.choices" :choice="choice"></Choice>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type {Question} from 'fishing-academy-types'
import Choice from "~/components/question/Choice.vue";

const {question} = defineProps<{ question: Question }>()
</script>