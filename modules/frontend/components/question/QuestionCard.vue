<template>
    <v-card width="400">
        <v-card-text>
            <h3 class="mb-4">
                {{ question.description }}
            </h3>

            <Choice
                class="mb-4"
                v-for="choice in question.choices"
                :choice="choice"
                :choice-selected="choiceSelected"
                :is-answer="choice.id === question.answer.id"
                @selected="select(choice)"
            ></Choice>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type {Question, Choice as ChoiceType} from 'fishing-academy-types'
import Choice from "~/components/question/Choice.vue";

const {question} = defineProps<{ question: Question }>()


const choiceSelected = ref<ChoiceType | undefined>()

function select(choice: ChoiceType) {
    choiceSelected.value = choice
}
</script>