<template>
    <div class="question d-flex justify-center">
        <QuestionCard :question="sampleQuestion"></QuestionCard>
    </div>
</template>

<script setup lang="ts">
import type {Question, Choice} from 'fishing-academy-types'

const sampleChoices: Choice[] = [{id: '1', description: 'ja'}, {id: '2', description: 'nein'}, {
    id: '2',
    description: 'nur an einem Sonntag'
}]
const sampleQuestion: Question = {
    id: 'test',
    choices: sampleChoices,
    answer: sampleChoices[0],
    description: 'Ist nali ein Dorsch?'
}
</script>

<style>
.question {
    margin-top: auto;
    margin-bottom: auto;
}
</style>