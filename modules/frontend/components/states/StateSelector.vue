<template>
    <div class="d-flex ga-10">
        <State v-for="state in states" :key="state.id" :state="state"></State>
    </div>
</template>

<script setup lang="ts">
import type {State as StateType} from 'fishing-academy-types'
import State from "~/components/states/State.vue";

const {states} = defineProps<{ states: StateType[] }>()
</script>