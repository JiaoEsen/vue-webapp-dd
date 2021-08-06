import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Infos from '../views/Infos.vue';
import Ding from '../views/Ding.vue';
import MailList from '../views/MailList.vue';
import My from '../views/My.vue';

import Collection from '../views/home-page/Collection';
import Nearby from '../views/home-page/Nearby';
import ProductDevelopment from '../views/home-page/ProductDevelopment';
import ProductOperation from '../views/home-page/ProductOperation';
import SelectedPractice from '../views/home-page/SelectedPractice';
import JobDetail from '../views/home-page/JobDetail.vue';

import CheckWorkAttendance from '../views/home-all/CheckWorkAttendance.vue';
import EducationalAdmin from '../views/home-all/EducationalAdmin.vue';
import HomeSchoolNotice from '../views/home-all/HomeSchoolNotice.vue';
import Journal from '../views/home-all/Journal.vue';
import Practice from '../views/home-all/Practice.vue';
import Videoconferencing from '../views/home-all/Videoconferencing.vue';
import Leave from '../views/home-all/Leave.vue';

import LeaveDetail from '../views/LeaveDetail.vue';

import Login from '../views/login/Login.vue';
import Zc from '../views/login/Zc.vue';
import Zcdd from '../views/zcdd.vue';
import VerificationCode from '../views/VerificationCode.vue';
import SetPwd from '../views/SetPwd.vue';

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    children: [
      {
        path: 'zc',
        component: Zc
      },
      {
        path: 'zcdd',
        component: Zcdd
      },
      {
        path: 'verificationCode',
        component: VerificationCode
      },
      {
        path: 'setPwd',
        component: SetPwd
      }
    ]
  },
  

  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/home/productOperation'
      },
      {
        path: 'collection',
        component: Collection,
        children: [{
          path: 'leave',
          component: Leave,
          children: [
            {
              path: 'laveDetail',
              component: LeaveDetail,
            },
          ]
        },{
          path: 'checkWorkAttendance',
          component: CheckWorkAttendance
        },{
          path: 'educationalAdmin',
          component: EducationalAdmin
        },{
          path: 'homeSchoolNotice',
          component: HomeSchoolNotice
        },{
          path: 'journal',
          component: Journal
        },{
          path: 'practice',
          component: Practice
        },{
          path: 'videoconferencing',
          component: Videoconferencing
        }]
      },
      {
        path: 'nearby',
        component: Nearby
      },
      {
        path: 'productDevelopment',
        component: ProductDevelopment
      },
      {
        path: 'productOperation',
        component: ProductOperation,
        children: [
          {
            path: 'jobDetail',
            component: JobDetail
          }
        ]
      },
      {
        path: 'selectedPractice',
        component: SelectedPractice
      },
    ]
  },
  {
    path: '/infos',
    component: Infos
  },
  {
    path: '/ding',
    component: Ding
  },
  {
    path: '/mailList',
    component: MailList
  },
  {
    path: '/my',
    component: My
  },
]

const router = new VueRouter({
  routes
})

export default router
