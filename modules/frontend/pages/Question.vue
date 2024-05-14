<template>
    <QuestionCard :question="sampleQuestion"></QuestionCard>
</template>

<script setup lang="ts">
import type {Question, Choice} from 'fishing-academy-types'

const sampleChoices: Choice[] = [{id: '1', description: 'a'}, {id: '2', description: 'b'}]
const sampleQuestion: Question = {
    id: 'test',
    choices: sampleChoices,
    answer: sampleChoices[0],
    description: 'test question'
}
</script>