<template>
    <div class="question d-flex justify-center">
        <QuestionCard
            v-if="questionSelected"
            :question="questionSelected"
            :choices="choicesForQuestion"
            :has-previous-question="hasPreviousQuestion"
            :has-next-question="hasNextQuestion"
            @previous-question="onPreviousQuestion"
            @next-question="onNextQuestion"
        ></QuestionCard>
    </div>
</template>

<script setup lang="ts">
import {questionModel} from 'fishing-academy-database/src/model/models/question'
import {choiceModel} from 'fishing-academy-database/src/model/models/choice'
import _ from "lodash";

const userStore = useUserStore()

const questions = await questionModel.getAllByState(userStore.userSettings?.stateSelectedId || 1)
const questionIds = _.map(questions, 'id')
const choices = await choiceModel.getAllByQuestions(questionIds)

let questionIndex = ref<number>(0)

const questionSelected = computed(() => {
    return questions[questionIndex.value]
})

const choicesForQuestion = computed(() => {
    return choices.filter(choice => choice.questionId === questionSelected.value?.id)
})

const hasPreviousQuestion = computed(() => {
    return questionIndex.value > 0
})

const hasNextQuestion = computed(() => {
    return questionIndex.value < questions.length - 1
})

function onPreviousQuestion() {
    if (hasPreviousQuestion) {
        questionIndex.value -= 1
    }
}

function onNextQuestion() {
    if (hasNextQuestion) {
        questionIndex.value += 1
    }
}
</script>

<style>
.question {
    margin-top: auto;
    margin-bottom: auto;
}
</style>