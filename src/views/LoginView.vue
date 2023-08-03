
<script setup>
import {ref } from 'vue';

const visibility = ref("password")
const eye = ref("/src/views/eye.svg")
const altText = ref("Passwort anzeigen")
function on_click(){
    if (visibility.value === "password"){
        visibility.value = "text"
        eye.value = "/src/views/eyeClosed.svg"
        altText.value = "Passwort verstecken"
    }else if(visibility.value === "text"){
        visibility.value = "password"
        eye.value = "/src/views/eye.svg"
        altText.value = "Passwort anzeigen"
    }
}


</script>


<template>
    
    
    <main>
        <h1>Anmelden</h1>
        <form action="">
           
            <div class="password-wrap">
                <input class="textarea gap size" id="Benutzername" type="text" placeholder="Benutzername">
                <input :type="visibility" class="textarea gap size" id="Passwort" placeholder="Passwort">
                <button @click="on_click" type="button" id="show-password">
                    <img id="eyeImg" :src="eye" :alt="altText">
                
                </button>               
            </div>
            <input class="gap size border white" type="submit" value="Login">
        </form>
    </main>
    
</template>


<style scoped>
   main{ 
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    background-color: #191919;
    user-select: none;
   }
   input[type=submit]{
    background-color: #191919;
    color: #fff;
   }
   form{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    flex-direction: column;
   }
   .gap {
    margin: 5px;
   }
   h1{
    font-size: 40px;
   }
   .size{
    font-size: 20px;
   }
  
   .password-wrap{
    position: relative;
   }
   #show-password {
    position: absolute;
    top: 74%;
    right: 0px;
    transform: translateY(-50%);
    cursor: pointer;
    transition: 0.3s ease-out;
    width: 1.5rem;
    display: flex;
    align-items: center;
    height: 1.5rem;
    
   }
   #show-password:active{
    border: none;
   }
   #show-password img {
    width: 500%;
    height: auto;
   }
   button{
    background-color: transparent;
    border: none;
    position: absolute; right: 5px; top: 5px;

   }
   .border{
    border-radius: 10px;
    border: none;
   }
   .textarea{
    background-color: transparent;
    border: 0;     
    border-bottom: 2px var(--white) solid;     
    display: block;     
    width: 100%;     
    padding: 15px 0;     
    font-size: 18px;     
    color: var(--white);
    border-bottom: 1px solid #fff;
   }
  input:focus{
    outline: 0;
  }
  
  #Passwort{
    padding-right: 30px;
   }
  #eyeImg{
    width: 1rem;
    height: 1rem;
  }
</style>