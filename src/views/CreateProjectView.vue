<script setup>
import { ref, onUpdated } from 'vue'; 
const numberOfLeaders = ref("");
const projectTitleField = ref("");
const vName = ref("");
const nName = ref("");
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
const fuenfte = ref();
const sechste = ref();
const siebte = ref();
const achte = ref();
const neunte = ref();
const zehnte = ref();
const kurstufeEins = ref();
const numberMinParticipants = ref("");
const numberMaxParticipants = ref("");
const description = ref("");
const projectCosts = ref("");
const upload_input = document.querySelector("#upload_input");
const projectTitelPicture = ref("")
const projectTitel = ref("")
const vNameSecond = ref("")
const vNameThird = ref("")
const vNameFourth = ref("")
const nNameSecond = ref("")
const nNameThird = ref("")
const nNameFourth = ref("")
const emailSecond = ref("")
const emailThird = ref("")
const emailForth = ref("")
const checkboxYesData = ref("")
var uploaded_image = "";

const projectTitleFieldInfo = ref("")
const NameInfo = ref("")
const emailInfo = ref("")
const numberMinParticipantsInfo = ref("")
const numberMaxParticipantsInfo = ref("")
const descriptionInfo = ref("")
const projectCostsInfo = ref("")
const projectTitelPictureInfo = ref("")
const projectTitleInfo = ref("")
const NameInfoSecond = ref("")
const NameInfoThird = ref("")
const NameInfoFourth = ref("")
const emailInfoSecond = ref("")
const emailInfoThird = ref("")
const emailInfoFourth = ref("")

onUpdated(() => {
    
})
function onSubmit() {
    
    projectTitleFieldInfo.value = ""
    NameInfo.value = ""
    emailInfo.value = ""
    numberMinParticipantsInfo.value = ""
    numberMaxParticipantsInfo.value = ""
    descriptionInfo.value = ""
    projectCostsInfo.value = "" 
    projectTitelPictureInfo.value = ""
    projectTitleInfo.value = ""
    NameInfoSecond.value = ""
    NameInfoThird.value = ""
    NameInfoFourth.value = ""
    emailInfoSecond.value = ""
    emailInfoThird.value = ""
    emailInfoFourth.value = ""

    if(projectTitleField.value === ""){
        projectTitleInfo.value = "Dises Feld ist erforderlich."
    }
    if(projectTitleField === ""){
        projectTitleFieldInfo.value = "Dieses Feld ist erforderlich."
    }
    if(vName.value === "" || nName.value === ""){
        NameInfo.value = "Dieses Feld ist erforderlich."
    } 
    if (email.value === ""){
        emailInfo.value = "Dieses Feld ist erforderlich."
    } 
    if (numberMinParticipants.value === ""){
        numberMinParticipantsInfo.value = "Dieses Feld ist erforderlich."
    } 
    if (numberMaxParticipants.value === ""){
        numberMaxParticipantsInfo.value = "Dieses Feld ist erforderlich."
    } 
    if (description.value === ""){
        descriptionInfo.value = "Dieses Feld ist erforderlich."
    } 
    if (projectCosts.value === ""){
        projectCostsInfo.value = "Dieses Feld ist erforderlich."
    }
    if(projectTitelPicture.value === ""){
       projectTitelPictureInfo.value = "Dises Feld ist erforderlich."
    }
    if(vNameSecond.value === "" || nNameSecond.value === ""){
        NameInfoSecond.value = "Dieses Feld ist erforderlich."
    } 
    if(vNameThird.value === "" || nNameThird.value === ""){
        NameInfoThird.value = "Dieses Feld ist erforderlich."
    } 
    if(vNameFourth.value === "" || nNameFourth.value === ""){
        NameInfoFourth.value = "Dieses Feld ist erforderlich."
    } 
    if (emailSecond.value === ""){
        emailInfoSecond.value = "Dieses Feld ist erforderlich."
    } 
    if (emailThird.value === ""){
        emailInfoThird.value = "Dieses Feld ist erforderlich."
    } 
    if (emailForth.value === ""){
        emailInfoFourth.value = "Dieses Feld ist erforderlich."
    } 
   
        
      
}




//promisess//fatch methode//


</script>


<template>
    <main>
     <div id="start"> 
                    <h1>Projektanmeldung</h1>
                        <h2 id="aop">Anzahl der Projektleiter</h2>
                        <input id="number-of-leaders" type="number" min="1" max="4" v-model="numberOfLeaders" >
                    </div>
                
        <form @submit.prevent="$event => onSubmit()"> 
            <div id="mainDiv">
                  
                    
               
                
                <h2 id="project-title"> Projekttitel</h2>
                <input type="text" id="project-title-field" placeholder="Max. 20 Buchstaben" v-model="projectTitleField">
                <br>
                <span class="inputInfo">{{ projectTitleInfo }}</span>
                <br>
                <span class="inputInfo">{{ projectTitleFieldInfo }}</span>
                <h2>Projekttitelbild</h2>
                <input type="file" id="upload_input_main" accept="image/png, image/jpg, video/mp4" multiple>
                <br>
                <span class="inputInfo">{{ projectTitelPictureInfo }}</span>
               
                <div class="marginDiv" id="div-main-leader">
                <h2>Name Haupansprechpartner</h2>
                <input type="text" id="v-name" placeholder="Vorname" v-model="vName" >
                <input type="text" id="n-name" placeholder="Nachname" v-model="nName" >
                <br>
                <span class="inputInfo" >{{ NameInfo }}</span>
                <h2>E-Mail Haupansprechpartner</h2>
                <input type="email" id="email" v-model="email">
                <br>
                <span class="inputInfo">{{ emailInfo }}</span>
                </div>
                
                <div class="marginDiv" id="div-second-leader" v-if="numberOfLeaders >= 2">
                <h2>Name 2. Projektleiter</h2>
                <input type="text" id="2d-leader-v-name" placeholder="Vorname" v-model="secondLeaderVName">
                <input type="text" id="2d-leader-n-name" placeholder="Nachname" v-model="secondLeaderNName">
                <br>
                <span class="inputInfo" >{{ NameInfoSecond }}</span>
                <h2>E-Mail 2. Projektleiter</h2>
                <input type="email" id="2d-leader-email" v-model="secondLeaderEmail">
                <br>
                <span class="inputInfo">{{ emailInfoSecond }}</span>
                </div>
                
                <div class="marginDiv" id="div-third-leader" v-if="numberOfLeaders >= 3">
                <h2>Name 3. Projektleiter</h2>
                <input type="text" id="3d-leader-v-name" placeholder="Vorname" v-model="thirdLeaderVName">
                <input type="text" id="3d-leader-n-name" placeholder="Nachname" v-model="thirdLeaderNName">
                <br>
                <span class="inputInfo" >{{ NameInfoThird }}</span>
                <h2>E-Mail 3. Projektleiter</h2>
                <input type="email" id="3d-leader-email" v-model="thirdLeaderEmail">
                <br>
                <span class="inputInfo">{{ emailInfoThird }}</span>
                </div>

                <div class="marginDiv" id="div-fourth-leader" v-if="numberOfLeaders >= 4">
                <h2>Name 4. Projektleiter</h2>
                <input type="text" id="4d-leader-v-name" placeholder="Vorname" v-model="fourthLeaderVName">
                <input type="text" id="4d-leader-n-name" placeholder="Nachname" v-model="fourthLeaderNName">
                <br>
                <span class="inputInfo" >{{ NameInfoFourth }}</span>
                <h2>E-Mail 4. Projektleiter</h2>
                <input type="email" id="4d-leader-email" v-model="fourthLeaderEmail">
                <br>
                <span class="inputInfo">{{ emailInfoFourth }}</span>
                </div>
                
                
                <h2 class="marginDiv">Zielgruppe Klassenstufe</h2>
                    <div>
                        <input type="checkbox" id="checkbox-5kl" v-model="fuenfte"> <label for="checkbox-5kl">5</label>
                        <input type="checkbox" id="checkbox-6kl" v-model="sechste"> <label for="checkbox-6kl">6</label>
                        <input type="checkbox" id="checkbox-7kl" v-model="siebte"> <label for="checkbox-7kl">7</label>
                        <input type="checkbox" id="checkbox-8kl" v-model="achte"> <label id="joe" for="checkbox-8kl">8</label>
                        <input type="checkbox" id="checkbox-9kl" v-model="neunte"> <label for="checkbox-9kl">9</label>
                        <input class="red" type="checkbox" id="checkbox-10kl" v-model="zehnte"> <label for="checkbox-10kl">10</label>
                        <input type="checkbox" id="checkbox-K1" v-model="kurstufeEins"><label for="checkbox-K1">K1</label>
                    </div>
                
                <h2>Minimale Teilnhemeranzahl</h2>
                <input type="number" id="number-min-participants" min="4" max="20" onkeydown="return false" v-model="numberMinParticipants">
                <br>
                <span class="inputInfo">{{ numberMinParticipantsInfo }}</span>
                <h2>Maximale Teilnhemeranzahl</h2>
                <input type="number" id="number-max-participants" min="5" max="50" onkeydown="return false" v-model="numberMaxParticipants">
                <br>
                <span class="inputInfo">{{ numberMaxParticipantsInfo }}</span>
                
                <h2>Weiterer Bedarf an Infrastruktur</h2>
                <input type="text" id="other-things">   

                <h2>Rahmenzeiten des Projekts</h2>
                <input type="text" id="time-project" v-model="a">
                
                <h2>Beschreibung des Projekts</h2>
                <textarea type="" id="description" maxlength="500" placeholder="Max. 500 Buchstaben" v-model="description"> </textarea>
                <br>
                <span class="inputInfo">{{ descriptionInfo }}</span>
                
                <br>
                <input type="file" id="upload_input" accept="image/png, image/jpg, video/mp4" multiple>

                <h2>Voraussichtliche Kosten für die Teilnehmer in Euro</h2>
                <input type="number" id="project-costs" min="0" max="100" v-model="projectCosts">
                <br>
                <span class="inputInfo">{{ projectCostsInfo }}</span>
                
                <h2>Raumbedarf</h2>
                <input class="" type="text" id="project-room" v-model="a">
                <div>
                    <h2>Datenschutzerklärung</h2>
                    <input type="checkbox" name="check" id="checkboxYesData" v-model="checkboxYesData"> <label for="checkboxYesData">Akzeptieren</label>
                </div>
                <br>
                <input class="border" type="submit" id="project-submit-btn" value="Absenden" :disabled="!checkboxYesData">
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
    gap: 10px;
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

input{
    outline: none;
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

.border{
    border: none;
    border-radius: 10pxs;
}

.marginDiv{
    margin-top: 5%;
}
.inputInfo{
 color: rgb(202, 30, 30);
}

#project-submit-btn{
    margin-left: 25%;
    margin-bottom: 10%;
}

#display_image{
    width: 375px;
    height: 211px;
    border: 1px solid #191919;
    background-size: cover;
}


</style>