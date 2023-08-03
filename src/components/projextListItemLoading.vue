<script setup>

</script>

<template>
    <div class="projectListItemLoad">
        
    </div>
</template>

<style scoped>
    .projectListItemLoad{
        height: 300px;
        width: 90%;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        background-color: #151515;
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

    @keyframes placeHolderShimmer {
        0% {
            background-position: -800px 0
        }
        100% {
            background-position: 800px 0
        }
    }

    

    @media (min-width: 1000px) {
        .projectListItemLoad{
            width: 80%;
            margin-right: 25px;
        }
    }

    @media (max-width: 650px) {
        .projectListItemLoad{
            flex-direction: column;
        }
    }
</style>