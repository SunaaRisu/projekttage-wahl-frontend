<script setup>
import { ref } from 'vue';

const passwordVisibility = ref(false)

const username = ref('');
const password = ref('');

function on_click(){
    if (passwordVisibility.value === false){
        passwordVisibility.value = true;
    } else if (passwordVisibility.value === true){
        passwordVisibility.value = false;
    }
}

function onLogin() {

}
</script>


<template>  
    <main>
        <h1>Anmelden</h1>
        <form @submit.prevent="$event => onLogin()">           
            <input class="textarea" id="username" type="text" placeholder="Benutzername / ID" v-model="username" autocomplete="username">
            <input class="textarea" id="password" :type="passwordVisibility ? 'text' : 'password'" placeholder="Passwort" v-model="password" autocomplete="current-password">
            <button id="togglePwd" type="button" @click="on_click">
                <svg v-if="!passwordVisibility" id="eyeImg" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" :alt="passwordVisibility ? 'Passwort verstecken' : 'Passwort anzeigen'">
                    <g>
                        <path d="M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
                    </g>
                </svg>

                <svg v-if="passwordVisibility" id="eyeImg" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" :alt="passwordVisibility ? 'Passwort verstecken' : 'Passwort anzeigen'">
                    <g>
                        <path d="M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z"></path>
                    </g>
                </svg>
            </button>               
            <button id="submitBtn" type="submit"><strong>Login</strong></button>
        </form>
    </main>    
</template>


<style scoped>    
    main{ 
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
    }

    h1{
        font-size: 40px;
        margin-bottom: 50px;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input{
        margin-top: 5px;
        font-size: 20px;
        background-color: transparent;        
        display: block;     
        width: 100%;     
        padding: 15px 0;     
        font-size: 18px;     
        color: var(--white);
        border: none;
        border-bottom: 3px solid var(--rb-c-teal);
    }

    input:focus{
        outline: 0;
    }

    #submitBtn{
        position: relative;
        top: -40px;
        height: 50px;
        width: 100%;
        margin-top: 10px;
        border-radius: 20px;
        background-color: var(--color-background-mute);
    }

    #submitBtn strong{
        font-size: 20px;
        font-weight: bolder;
        color: var(--color-text);
    }
  
    #togglePwd {
        position: relative;
        top: -50px;
        left: 110px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: transparent;
        border: none;    
    }
  
    #password{
        padding-right: 30px;
    }

    #eyeImg{
        width: 50%;
        height: 50%;
    }

    path{
        fill: var(--color-text);
    }
</style>