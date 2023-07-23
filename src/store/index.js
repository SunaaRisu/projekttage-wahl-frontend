import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: {
                _id: '',
                username: '',
            },
            jwt: ''
        }
    },
    actions: {
        setJWT(x) {
            this.jwt = x
        },
        setUser(id, username) {
            this.user.id = id;
            this.user.username = username;
        }
    }
});