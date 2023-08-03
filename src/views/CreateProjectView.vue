<script setup>
import { ref, onUpdated } from 'vue'; 
const numberOfLeaders = ref("");
const projectTitleField = ref("");
const VName = ref("");
const NName = ref("");
const email = ref("");
const secondLeaderVName = ref("");
const secondLeaderNName = ref("");
const secondLeaderEmail = ref("");
const thirdLeaderVName = ref("");
const thirdLeaderNName = ref("");
const thirdLeaderEmail = ref("");
const fourthLeaderVName = ref("");
const fourthLeaderNName = ref("");
const fourthLeaderEmail = ref("");
const fuenfte = ref("");
const sechste = ref("");
const siebte = ref("");
const achte = ref("");
const neunte = ref("");
const zehnte = ref("");
const kurstufeEins = ref("");
const numberMinParticipants = ref("");
const numberMaxParticipants = ref("");
const description = ref("");
const projectCosts = ref("");

onUpdated(() => {
    
})




</script>


<template>
    <main>
     <div id="start"> 
                    <h1>Projektanmeldung</h1>
                        <h2 id="aop">Anzahl der Projektleiter</h2>
                        <input id="number-of-leaders" type="number" min="1" max="4" onkeydown="return false" v-model="numberOfLeaders" >
                    </div>
                
        <form @submit.prevent="$event => onSubmit()"> 
            <div id="mainDiv">
                  
                    
               
                
                <h2 id="project-title"> Projekttitel</h2>
                <input type="text" id="project-title-field" placeholder="Max. 20 Buchstaben" minlength="3" maxlength="20" v-model="projectTitleField">
                
                <div>
                <h2>Name Haupansprechpartner</h2>
                <input type="text" id="v-name" placeholder="Vorname" v-model="VName">
                <input type="text" id="n-name" placeholder="Nachname" v-model="NName">
                <h2>E-Mail Haupansprechpartner</h2>
                <input type="email" id="email" v-model="email">
                </div>
                
                <div>
                <h2>Name 2. Projektleiter</h2>
                <input type="text" id="2d-leader-v-name" placeholder="Vorname" v-model="secondLeaderVName">
                <input type="text" id="2d-leader-n-name" placeholder="Nachname" v-model="secondLeaderNName">
                <h2>E-Mail 2. Projektleiter</h2>
                <input type="email" id="2d-leader-email" v-model="secondLeaderEmail">
                </div>

                <div>
                <h2>Name 3. Projektleiter</h2>
                <input type="text" id="3d-leader-v-name" placeholder="Vorname" v-model="thirdLeaderVName">
                <input type="text" id="3d-leader-n-name" placeholder="Nachname" v-model="thirdLeaderNName">
                <h2>E-Mail 3. Projektleiter</h2>
                <input type="email" id="3d-leader-email" v-model="thirdLeaderEmail">
                </div>

                <div>
                <h2>Name 4. Projektleiter</h2>
                <input type="text" id="4d-leader-v-name" placeholder="Vorname" v-model="fourthLeaderVName">
                <input type="text" id="4d-leader-n-name" placeholder="Nachname" v-model="fourthLeaderNName">
                <h2>E-Mail 4. Projektleiter</h2>
                <input type="email" id="4d-leader-email" v-model="fourthLeaderEmail">
                </div>
                
                <h2>Zielgruppe Klassenstufe</h2>
                    <div>
                        <input type="checkbox" id="checkbox-5kl" v-model="fuenfte"> <label for="checkbox-5kl">5</label>
                        <input type="checkbox" id="checkbox-6kl" v-model="sechste"> <label for="checkbox-6kl">6</label>
                        <input type="checkbox" id="checkbox-7kl" v-model="siebte"> <label for="checkbox-7kl">7</label>
                        <input type="checkbox" id="checkbox-8kl" v-model="achte"> <label for="checkbox-8kl">9</label>
                        <input type="checkbox" id="checkbox-9kl" v-model="neunte"> <label for="checkbox-9kl">9</label>
                        <input type="checkbox" id="checkbox-10kl" v-model="zehnte"> <label for="checkbox-10kl">10</label>
                        <input type="checkbox" id="checkbox-K1" v-model="kurstufeEins"><label for="checkbox-K1">K1</label>
                    </div>
                <h2>Minimale Teilnhemeranzahl</h2>
                <input type="number" id="number-min-participants" min="4" max="20" onkeydown="return false" v-model="numberMinParticipants">
                <h2>Maximale Teilnhemeranzahl</h2>
                <input type="number" id="number-max-participants" min="4" max="50" onkeydown="return false" v-model="numberMaxParticipants">
                <h2>Rahmenzeiten des Projekts</h2>
                <input type="text" id="time-project" v-model="a">
                <h2>Beschreibung des Projekts</h2>
                <textarea type="" id="description" maxlength="500" placeholder="Max. 500 Buchstaben" v-model="description"> </textarea>
                <h2>Voraussichtliche Kosten für die Teilnehmer in Euro</h2>
                <input type="number" id="project-costs" min="0" max="100" v-model="projectCosts">
                <h2>Raumbedarf</h2>
                <input type="text" id="project-room" v-model="a">
                <input type="submit" id="project-submit-btn">
            </div>
        </form>
    </main>
</template>


<style scoped>


main{
    background-color: #191919;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    flex-wrap:nowrap;
    align-content: center;
    justify-content: flex-start;
   overflow: scroll;
}
form{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
}

#start{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    height: 100%;
    width: 100%;
}
#number-of-leaders{
    border: none;
    user-select: none;
}
#project-title{
    margin-top: 25%;
}

#aop{
    margin-top: 5%;
}




input[type=submit]{
    background-color: #191919;
    color: #fff;
}
textarea{
    height: 150px;
    width: 350px;
    resize: none;
}


</style>