<template>
    <v-app-bar elevation="2">
        <template #prepend>
            <div class="logo ml-2" @click="$router.push('/')">
                <img alt="company logo" src="/logo/svg/logo-no-background.svg">
            </div>
        </template>
    </v-app-bar>
</template>

<style scoped>
.logo {
    cursor: pointer;
}
</style>