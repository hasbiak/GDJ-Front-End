import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import HomegPage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LoginRecruiter from '../views/LoginRecruiter.vue'
import RegisterRecruiter from '../views/RegisterRecruiter.vue'
import Profile from '../views/Profile.vue'
import Forgot from '../views/ForgotPassword.vue'
import EditProfile from '../views/EditProfile.vue'
import NewPassword from '../views/NewPassword.vue'
import Hire from '../views/HiringPage.vue'
import ProfileCompany from '../views/ProfileCompany.vue'
import EditCompany from '../views/EditProfileCompany.vue'
import ChatRoom from '../views/ChatRoom.vue'
import ConfirmEmail from '../views/ConfirmEmail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/home',
    name: 'HomegPage',
    component: HomegPage
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/confirm-email/:id',
    name: 'ConfirmEmail',
    component: ConfirmEmail
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/forgot/:id',
    name: 'NewPassword',
    component: NewPassword
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Login-recruiter',
    name: 'LoginRecruiter',
    component: LoginRecruiter
  },
  {
    path: '/register-recruiter',
    name: 'RegisterRecruiter',
    component: RegisterRecruiter
  },
  {
    path: '/profile-pekerja',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/edit-pekerja',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/profile-company',
    name: 'ProfileCompany',
    component: ProfileCompany
  },
  {
    path: '/edit-company',
    name: 'EditCompany',
    component: EditCompany
  },
  {
    path: '/hire/:id',
    name: 'Hire',
    component: Hire
  },
  {
    path: '/chat-room',
    name: 'ChatRoom',
    component: ChatRoom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
