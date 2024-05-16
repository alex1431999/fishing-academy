<template>
    <div>
        <v-text-field
            class="ml-auto"
            variant="outlined"
            width="400"
            prepend-inner-icon="mdi-magnify"
            placeholder="Suchen..."
            base-color="#FE7833"
            @input="filterKey = $event.target.value">
        </v-text-field>
    </div>
    <div class="d-flex ga-10">
        <State v-for="state in statesFiltered" :key="state.id" :state="state"></State>
    </div>
</template>

<script setup lang="ts">
import type {State as StateType} from 'fishing-academy-types'
import State from "~/components/states/State.vue";
import _ from 'lodash'

const {states} = defineProps<{ states: StateType[] }>()

const filterKey = ref<string>('')

const statesSorted = _.sortBy(states, 'name')

const statesFiltered = computed(() => {
    return statesSorted.filter(state => state.name.toLowerCase().includes(filterKey.value.toLocaleLowerCase()))
})
</script>