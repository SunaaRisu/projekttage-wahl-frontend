<script setup>
    import { computed, onUpdated, ref } from 'vue';
    import ProjectItem from "../components/projectListItem.vue";
    import ProjectItemLoading from "../components/projextListItemLoading.vue";

    const request = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}
    }; 

    const fetchSuccess = ref(false)
    const projects = ref([]);
    

    const filterCostFree = ref(false);
    const filterCostRange = ref(100);
    const filterCategorySport = ref(true);
    const filterCategoryCreativ = ref(true);
    const filterCategoryka = ref(true);


    
    fetch("http://localhost:3000/project/get", request)
    .then(response => {
        if (response.status === 200) {
            return response.json();
        }
        
    })
    .then(data => {
        // console.log(data.objects);
        projects.value = data.objects;
        
        // console.log(projects.value);
        fetchSuccess.value = true;
    })
    .catch(err => {
        console.log(err);
    });

    onUpdated(() => {
        if (filterCostFree.value) {
            filterCostRange.value = 0;
        }
    })
    
</script>


<template>
    <main>
        <div id="filterContainer">
            <form>
                <span>Filter</span>
                <div class="separator"></div>
                <div>
                    <input v-model="filterCostFree" type="checkbox" id="filterCostFree">
                    <label for="filterCostFree">kostenlose</label>
                    <input v-if="!filterCostFree" v-model="filterCostRange" type="range" id="filterCostRange">
                </div>
                <div class="separator"></div>
                <div>
                    <input v-model="filterCategorySport" type="checkbox" id="sport">
                    <label for="sport">sportlich</label>
                    <br>
                    <input v-model="filterCategoryCreativ" type="checkbox" id="creativ">
                    <label for="creativ">kreativ</label>
                    <br>
                    <input v-model="filterCategoryka" type="checkbox" id="???">
                    <label for="???">???</label>
                </div>               
            </form>
        </div>
        <div id="listContainer">
            <ProjectItemLoading
                v-if="!fetchSuccess"
                v-for="index in 10"
                :key="index"
            ></ProjectItemLoading>
            <ProjectItem
                v-if="fetchSuccess"
                v-for="item in projects"
                :key="item.id"
                :_id="item._id"
                :name="item.projectDetails.name"
                :costs="item.projectDetails.cost"
                :category="item.projectDetails.category"
                :description="item.projectDetails.description"
                :contact="item.projectDetails.projectManagment"
                :filterCost="filterCostRange"
                :filterCategory="filterCategory"
            ></ProjectItem>             
        </div>
    </main>
    
    
</template>


<style scoped>
    main{
        display: flex;
        width: 100vw;
    }

    .separator{
        height: 2px;
        width: 90%;
        background-color: aliceblue;
    }

    #filterContainer{
        display: none;
        width: 250px;
        height: fit-content;
        padding: 40px;
        margin-left: 40px;
        margin-top: 10px;
        border-radius: 20px;
        background-color: #151515;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    #listContainer{
        width: 100%;        
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1000px){
        #listContainer{
            width: calc(100vw - 250px);
        }

        #filterContainer{
            display: block;
        }
    }
</style>