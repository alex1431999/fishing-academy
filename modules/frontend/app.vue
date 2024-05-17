<template>
    <NuxtLayout>
        <v-app>
            <AppHeader></AppHeader>
            <div class="mt-16 pa-5">
                <NuxtPage/>
            </div>
        </v-app>
    </NuxtLayout>
</template>
<script setup lang="ts">
import AppHeader from "~/components/header/AppHeader.vue";
</script>

<style>
@font-face {
    font-family: 'alkatra';
    src: url('/fonts/Alkatra.ttf') format('truetype');
}

body {
    font-family: 'alkatra', 'sans-serif';
}
</style>