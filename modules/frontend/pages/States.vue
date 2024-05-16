<template>
    <StateSelector :states="states"></StateSelector>
</template>

<script setup lang="ts">
import StateSelector from "~/components/states/StateSelector.vue";
import {stateModel} from 'fishing-academy-database'
import type {State} from 'fishing-academy-types'

const states = ref<State[]>([]);

onMounted(async () => {
    states.value = await stateModel.getAll();
});

</script>