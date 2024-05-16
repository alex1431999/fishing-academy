<template>
    <div class="d-flex ga-10">
        <State v-for="state in statesSorted" :key="state.id" :state="state"></State>
    </div>
</template>

<script setup lang="ts">
import type {State as StateType} from 'fishing-academy-types'
import State from "~/components/states/State.vue";
import _ from 'lodash'

const {states} = defineProps<{ states: StateType[] }>()

const statesSorted = _.sortBy(states, 'name')
</script>