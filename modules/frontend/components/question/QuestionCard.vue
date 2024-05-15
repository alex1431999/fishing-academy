<template>
    <v-card rounded width="600">
        <v-card-text>
            <div class="mb-4 d-flex justify-center">
                <h2>
                    {{ question.description }}
                </h2>
            </div>
            <Choice
                class="mb-4"
                v-for="choice in choices"
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

const props = defineProps<{
    question: Question,
    choices: ChoiceType[],
    hasPreviousQuestion: boolean,
    hasNextQuestion: boolean
}>()

const {question, choices, hasPreviousQuestion, hasNextQuestion} = toRefs(props)

const nextButton = ref<InstanceType<typeof VBtn> | null>(null)

const choiceSelected = ref<ChoiceType | undefined>()

const answeredCorrectly = computed(() => {
    return choiceSelected?.value?.id === question.value.answer
})

const nextColor = computed(() => {
    return answeredCorrectly.value ? 'success' : ''
})

watch(answeredCorrectly, () => {
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
.actions {
    width: 100%;
}
</style>