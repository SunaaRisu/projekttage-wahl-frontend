import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/LoginView.vue';
import CreateProjectView from '../views/CreateProjectView.vue';
import ProjectList from '../views/ProjectList.vue';
import ProjectDetailsView from '../views/ProjectDetailsView.vue';
import FinalProjectView from '../views/FinalProjectView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {path: '/login', name: 'login', component: LoginView},
      {path: '/create', name: 'create', component: CreateProjectView},
      {path: '/projects', name: 'projects', component: ProjectList},
      {path: '/projects/:_id', name: 'project-details', component: ProjectDetailsView},
      {path: '/projects-final', name: 'projects-final', component: FinalProjectView}
    ]
  })
  
  export default router;