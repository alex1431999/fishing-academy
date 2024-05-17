<template>
    <v-card rounded width="600">
        <v-card-text>
            <div class="description d-flex justify-center">
                <h3 class="description__header">
                    {{ question.description }}
                </h3>
            </div>
            <Choice
                class="mb-4"
                v-for="choice in choices"
                :choice="choice"
                :choice-selected="choiceSelected"
                :is-correct-choice="choice.id === question.correctChoiceId"
                @selected="select(choice)"
            ></Choice>

            <v-card-actions>
                <div class="actions d-flex justify-space-between">
                    <v-btn icon :disabled="!hasPreviousQuestion" :color="colorPrimary"
                           @click="$emit('previous-question')">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>

                    <v-btn :disabled="!choiceSelected" :color="colorPrimary" @click="refresh" icon>
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>

                    <v-btn icon ref="nextButton" :disabled="!hasNextQuestion" :color="nextColor"
                           @click="$emit('next-question')">
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
import type {VBtn} from "vuetify/components";
import {colorPrimary} from "~/constants/colors";

const props = defineProps<{
    question: Question,
    choices: ChoiceType[],
    hasPreviousQuestion: boolean,
    hasNextQuestion: boolean
}>()

const {question, choices, hasPreviousQuestion, hasNextQuestion} = toRefs(props)

const nextButton = ref<InstanceType<typeof VBtn> | null>(null)

const choiceSelected = ref<ChoiceType | undefined>()

const correctChoiceSelected = computed(() => {
    return choiceSelected?.value?.id === question.value.correctChoiceId
})

const nextColor = computed(() => {
    return correctChoiceSelected.value ? 'success' : colorPrimary
})

watch(correctChoiceSelected, () => {
    if (nextButton.value) {
        nextButton.value.$el.focus()
    }
})

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
.description {
    height: 100px;
}

.description__header {
    margin-top: auto;
    margin-bottom: auto;
}

.actions {
    width: 100%;
}
</style>