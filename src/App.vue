<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './store/index';
import { useRouter } from 'vue-router';
import jwt_decode from "jwt-decode";
import { ref } from 'vue';

const user = useUserStore();
const router = useRouter();

const hasJWT = ref(false);

const request = {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
                };

fetch('https://pjt.up.railway.app/user/refresh_token', request)
                    .then(response => {
                        if (response.status === 200){
                            return response.json();
                        }else if (response.status === 401){
                            hasJWT.value = true;
                            router.push({ path: '/login' });
                        }else if (response.status === 500){
                            hasJWT.value = true;
                            router.push({ path: '/login' });
                        }
                    })
                    .then(data => {
                        if(data){
                            user.setJWT(data.token);
                            const jwtData = jwt_decode(data.token);
                            user.setUser(jwtData._id, jwtData.username);
                            hasJWT.value = true;                         
                        }else{
                            hasJWT.value = true;
                            router.push({ path: '/login' });
                        }
                    })
                    .catch(err => {
                        hasJWT.value = true;
                        router.push({ path: '/login' });
                    })
</script>

<template >
  <RouterView v-if="hasJWT"/>
</template>

<style scoped>

</style>
