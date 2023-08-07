import { defineStore } from "pinia";
import jwt_decode from "jwt-decode";
import { useRouter } from "vue-router";

// const router = useRouter();


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
        },
        get_jwt() {
            console.log('first')
            if (this.jwt !== '' && (jwt_decode(this.jwt).exp - 60) * 1000 > Date.now()) {
                return this.jwt;
            } else {
                console.log('second')
                const request = {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
                };

                fetch('https://pjt.up.railway.app/user/refresh_token', request)
                    .then(response => {
                        if (response.status === 200){
                            console.log('third')
                            return response.json();
                        }else if (response.status === 401){
                            router.push({ path: '/login' });
                        }else if (response.status === 500){
                            router.push({ path: '/login' });
                        }
                    })
                    .then(data => {
                        if(data){
                            console.log('fourth')
                            this.jwt = data.token;
                            const jwtData = jwt_decode(data.token);
                            this.user.id = jwtData._id;
                            this.user.username = jwtData.username;  
                            return data.token                          
                        }else{
                            router.push({ path: '/login' });
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        router.push({ path: '/login' });
                    })
                
            }
        }
    }
});