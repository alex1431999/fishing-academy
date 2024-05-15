<template>
    <div class="question d-flex justify-center">
        <QuestionCard :question="questionSelected" @previous-question="onPreviousQuestion"
                      @next-question="onNextQuestion"></QuestionCard>
    </div>
</template>

<script setup lang="ts">
import {questionsMockData} from "~/mock/questions";

const questions = questionsMockData
let questionIndex = ref<number>(0)

const questionSelected = computed(() => {
    return questions[questionIndex.value]
})

function onPreviousQuestion() {
    if (questionIndex.value > 0) {
        questionIndex.value -= 1
    }
}

function onNextQuestion() {
    if (questionIndex.value < questions.length - 1) {
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