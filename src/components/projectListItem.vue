<script setup>
    import { onUpdated, ref } from 'vue';
    import { useRouter } from 'vue-router';
    const props = defineProps(['_id', 'filterCost', 'image', 'name', 'costs', 'category', 'description', 'contact']);
    const router = useRouter();

    const render = ref(true);

    onUpdated(() => {
        if(props.costs > props.filterCost) {
            render.value = false;
        }else {
            render.value = true;
        }
    });

    function seeDetails() {
        router.push('/project/' + props._id);        
    }

    function fav() {
        
    }
</script>

<template >
    <div class="projectListItem" v-if="render">
        <div class="image" @click="seeDetails">
            <img src="https://srcsrv.sunaarisu.de/projekttage/msgBrunnen.jpg" alt="Projekt Bild">
        </div>

        <div class="descriptionContainer">
            <div class="descriptionHead" @click="seeDetails">
                <span class="name">{{ name }}</span>
                <div class="descriptionHeadRight">
                    <span class="costs">{{ costs }} €</span>
                    <span class="category">{{ category }}</span>
                </div>                
            </div>    
            <div @click="seeDetails">
                <span class="description">{{ description }}</span>
            </div>        
            
            <span class="contact">{{contact}}</span>
            
            <div class="interactionContainer">
                <button @click="seeDetails()">Mehr Details</button>
                <button @click="fav()">Merken</button>
                <button>Wählen</button>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

    .projectListItem{
        height: 300px;
        width: 90%;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        background-color: #151515;
        border-radius: 20px;
    }

    .image{
        height: 300px;
        width: 300px;
        border-radius: 20px;

        animation-duration: 4s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;        
        background: linear-gradient(to right, #151515 8%, #222222 18%, #151515 33%);
        background-size: 800px 104px;
        position: relative;
    }

    .image img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 20px 0 0 20px;
        font-size: 0;
    }

    .descriptionContainer{
        height: 250px;
        width: calc(100% - 300px);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 20px;
    }

    .descriptionHead{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
    }

    .category{
        margin-left: 20px;
    }

    .description{
        height: 100px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }

    @media (min-width: 1000px) {
        .projectListItem{
            width: 80%;
            margin-right: 25px;
        }
    }

    @media (max-width: 650px) {
        .projectListItem{
            flex-direction: column;
        }
        .image{
            height: 35%;
            width: 100%;
        }
        .descriptionContainer{
            height: 65%;
            width: 100%;
        }

        .description{
            height: 50px;
            -webkit-line-clamp: 2;
        }

        .name{
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        .image img{
            border-radius: 20px 20px 0 0;
        }
    }

    @keyframes placeHolderShimmer {
        0% {
            background-position: -800px 0
        }
        100% {
            background-position: 800px 0
        }
    }

    
</style>