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
                :is-answer="choice.id === question.answer"
                @selected="select(choice)"
            ></Choice>

            <v-card-actions>
                <div class="actions d-flex justify-space-between">
                    <v-btn icon :disabled="!hasPreviousQuestion" @click="$emit('previous-question')">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>

                    <v-btn :disabled="!choiceSelected" @click="refresh" icon>
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>

                    <v-btn icon :disabled="!hasNextQuestion" @click="$emit('next-question')">
                        <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type {Question, Choice as ChoiceType} from 'fishing-academy-types'
import Choice from "~/components/question/Choice.vue";

const props = defineProps<{
    question: Question,
    hasPreviousQuestion: boolean,
    hasNextQuestion: boolean
}>()

const {question, hasPreviousQuestion, hasNextQuestion} = toRefs(props)


const choiceSelected = ref<ChoiceType | undefined>()

watch(question, () => {
    choiceSelected.value = undefined
})

function select(choice: ChoiceType) {
    choiceSelected.value = choice
}

function refresh() {
    choiceSelected.value = undefined
}
</script>

<style scoped>
.actions {
    width: 100%;
}
</style>