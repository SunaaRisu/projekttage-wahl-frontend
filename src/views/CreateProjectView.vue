<script setup>
//function die, die weiteren Anmeldeformulare für die weiteren Projekt leiter versteckt und sie zeig dalls bei number-of-leaders die dem ensprechende Zahl gezeigt wird

</script>


<template>
    <main>
    <h1>Projektanmeldung</h1>
                <label>    
                    <input id="number-of-leaders" type="number" min="1" max="4" onkeydown="return false">
                </label>
                <h2 id="project-title"> Projekttitel</h2>
        <form action=""> 
            <div>
                <h2>Anzahl der Projektleiter</h2>
                
                <input type="text" id="project-title-field" placeholder="Max. 20 Buchstaben" minlength="3" maxlength="20">
                <h2>Name Haupansprechpartner</h2>
                <input type="text" id="v-name" placeholder="Vorname">
                <input type="text" id="n-name" placeholder="Nachname">
                <h2>E-Mail Haupansprechpartner</h2>
                <input type="email">
                <h2>Name 2. Projektleiter</h2>
                <input type="text" id="2d-leader-v-name" placeholder="Vorname">
                <input type="text" id="2d-leader-n-name" placeholder="Nachname">
                <h2>E-Mail 2. Projektleiter</h2>
                <input type="email" id="2d-leader-email">
                <h2>Name 3. Projektleiter</h2>
                <input type="text" id="3d-leader-v-name" placeholder="Vorname">
                <input type="text" id="3d-leader-n-name" placeholder="Nachname">
                <h2>E-Mail 3. Projektleiter</h2>
                <input type="email" id="3d-leader-email">
                <h2>Name 4. Projektleiter</h2>
                <input type="text" id="4d-leader-v-name" placeholder="Vorname">
                <input type="text" id="4d-leader-n-name" placeholder="Nachname">
                <h2>E-Mail 4. Projektleiter</h2>
                <input type="email" id="4d-leader-email">
                <h2>Zielgruppe Klassenstufe</h2>
                    <div>
                        <input type="checkbox" id="checkbox-5kl"> 
                        <input type="checkbox" id="checkbox-6kl">
                        <input type="checkbox" id="checkbox-7kl">
                        <input type="checkbox" id="checkbox-8kl">
                        <input type="checkbox" id="checkbox-9kl">
                        <input type="checkbox" id="checkbox-10kl">
                        <input type="checkbox" id="checkbox-11kl">
                    </div>
                <h2>Minimale Teilnhemeranzahl</h2>
                <input type="number" id="number-min-participants" min="4" max="20" onkeydown="return false">
                <h2>Maximale Teilnhemeranzahl</h2>
                <input type="number" id="number-max-participants" min="4" max="50" onkeydown="return false">
                <h2>Rahmenzeiten des Projekts</h2>
                <input type="text" id="time-project">
                <h2>Beschreibung des Projekts</h2>
                <input type="textfield" id="description" maxlength="500" placeholder="Max. 500 Buchstaben">
                <h2>Voraussichtliche Kosten für die Teilnehmer in Euro</h2>
                <input type="number" id="project-costs" min="0">
                <h2>Raumbedarf</h2>
                <input type="text" id="project-room">
                <input type="button" id="project-submit-btn" value="Bestätigen">
            </div>
        </form>
    </main>
</template>


<style scoped>
template{
    overflow: visible;
}

main{
    background-color: #191919;
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
   overflow: visible;
}
form{
    display: flex
}
#number-of-leaders{
    border: none;
    
}
#project-title{
    margin-top: 50%;
}
input[type=submit]{
    background-color: #191919;
    color: #fff;
}


</style>