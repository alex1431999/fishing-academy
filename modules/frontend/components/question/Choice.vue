<template>
    <div>
        <v-btn :color="color" :disabled="disabled" @click="$emit('selected')" block class="text-none">
            {{ choice.description }}
        </v-btn>
    </div>
</template>

<script setup lang="ts">
import {computed, toRefs} from 'vue';
import type {Choice} from 'fishing-academy-types';

type Status = 'correct' | 'false' | 'pending' | 'done'

const props = defineProps<{
    choice: Choice,
    isAnswer: boolean,
    choiceSelected?: Choice
}>();

const {choice, isAnswer, choiceSelected} = toRefs(props);

const colorMap: Record<Status, string> = {
    correct: 'success',
    false: 'error',
    pending: '',
    done: ''
}

const color = ref<string>()
const disabled = ref<boolean>(false)

const status = computed<Status>(() => {
    if (choiceSelected.value === undefined) {
        return 'pending';
    }

    if (isAnswer.value) {
        return 'correct'
    }

    if (choiceSelected.value.id === choice.value.id) {
        if (!isAnswer.value) {
            return 'false'
        }
    }

    return 'done'
})

watch(status, (value) => {
    color.value = colorMap[value]
    disabled.value = value !== 'pending'
})

</script>
