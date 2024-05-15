<template>
    <div class="question d-flex justify-center">
        <QuestionCard
            :question="questionSelected"
            :has-previous-question="hasPreviousQuestion"
            :has-next-question="hasNextQuestion"
            @previous-question="onPreviousQuestion"
            @next-question="onNextQuestion"
        ></QuestionCard>
    </div>
</template>

<script setup lang="ts">
import {questionsMockData} from "~/mock/questions";

const questions = questionsMockData
let questionIndex = ref<number>(0)

const questionSelected = computed(() => {
    return questions[questionIndex.value]
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