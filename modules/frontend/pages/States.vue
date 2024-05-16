<template>
    <StateSelector :states="states"></StateSelector>
</template>

<script setup lang="ts">
import StateSelector from "~/components/states/StateSelector.vue";
import {stateModel} from 'fishing-academy-database'

const states = await stateModel.getAll();
</script>