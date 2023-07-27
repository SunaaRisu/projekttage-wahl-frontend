<script setup>
    import { ref } from 'vue'
    defineProps(['image', 'name', 'costs', 'category', 'description', 'contact']);

</script>

<template>
    <div class="projectListItem">
        <div class="image">
            <img src="" alt="asdf">
        </div>

        <div class="descriptionContainer">
            <div class="descriptionHead">
                <span class="name">{{ name }}</span>
                <div class="descriptionHeadRight">
                    <span class="costs">{{ costs }}</span>
                    <span class="category">{{ category }}</span>
                </div>                
            </div>    
            <div>
                <span class="description">{{ description }}</span>
            </div>        
            
            <span class="contact">{{contact}}</span>
        </div>
    </div>
</template>

<style scoped>
    .projectListItem{
        height: 250px;
        width: 90%;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        background-color: #151515;
        border-radius: 20px;
    }

    .image{
        height: 250px;
        width: 300px;
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
    }

    
</style>