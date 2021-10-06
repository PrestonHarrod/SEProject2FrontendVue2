/*
import {createRouter, createWebHistory} from 'vue-router'
import CourseList from './views/Home.vue'
import CourseView from './views/courseView.vue'
import CourseAdd from './views/AddCourse.vue'
import CourseEdit from './views/EditCourse.vue'

  const routes = [
    {
      path: '/',
      name: 'list',
      component: CourseList
    },
    {
      path: '/api/courses/:id',
      name: 'view',
      component: CourseView,
      props: true
    },
    {
        path: '/api/courses/courseadd',
        name: 'add',
        component: CourseAdd,
        props: true
      },
      {
        path: "/courses/course-edit/:id",
        name: "edit",
        component: CourseEdit,
        props: true
      },
  ];
  const router = createRouter({
      history: createWebHistory(),
      routes,
  });
export default router; 
*/

import Vue from 'vue'
import Router from 'vue-router'
import CourseList from './views/Home.vue'
import CourseView from './views/courseView.vue'
import CourseAdd from './views/AddCourse.vue'
import CourseEdit from './views/EditCourse.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base:
  process.env.NODE_ENV === "development" ? "/" : "/courses/",
  routes : [
    {
      path: '/',
      name: 'list',
      component: CourseList
    },
    {
      path: '/api/courses/:id',
      name: 'view',
      component: CourseView,
      props: true
    },
    {
        path: '/api/courses/courseadd',
        name: 'add',
        component: CourseAdd,
        props: true
      },
      {
        path: "/courses/course-edit/:id",
        name: "edit",
        component: CourseEdit,
        props: true
      },
    /*
    {
      path: '*',
      component: NotFondComponent
    }
    */
  ]
})

