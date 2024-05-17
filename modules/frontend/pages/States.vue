<template>
    <StateSelector :states="states" @selected="onStateSelected"></StateSelector>
</template>

<script setup lang="ts">
import StateSelector from "~/components/states/StateSelector.vue";
import {stateModel} from 'fishing-academy-database'
import type {State} from 'fishing-academy-types'

const states = await stateModel.getAll();

function onStateSelected(state: State) {
    // TODO update user settings
    console.log(state)
}
</script>