<script setup>
    import { ref } from 'vue';
    import ProjectItem from "../components/projectListItem.vue";

    const request = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}
    }; 

    const fetchSuccess = ref(false)
    let projects = [];

    
    fetch("http://localhost:3000/project/get", request)
    .then(response => {
        if (response.status === 200) {
            return response.json();
        }
        
    })
    .then(data => {
        console.log(data.objects);
        projects = data.objects;
        console.log(projects);
        fetchSuccess.value = true;
    })
    .catch(err => {
        console.log(err);
    });
    

    
</script>


<template>
    <div id="listContainer">
        <ProjectItem
            v-if="fetchSuccess"
            v-for="item in projects"
            :key="item.id"
            :name="item.projectDetails.name"
            :costs="item.projectDetails.cost"
            :category="item.projectDetails.category"
            :description="item.projectDetails.description"
            :contact="item.projectDetails.projectManagment"
        ></ProjectItem>
        
        
        
    </div>
    
</template>


<style scoped>
    #listContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1000px){
        #listContainer{
            align-items: end;
        }
    }
</style>