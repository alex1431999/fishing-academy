import type {UserSettings} from 'fishing-academy-types'

export const useUserStore = defineStore('user', {
    state() {
        return {
            userSettings: null as (UserSettings | null)
        }
    },
})