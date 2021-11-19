import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/user/User.vue';
import UserList from '../views/user/UserList.vue';
import UserShow from '../views/user/UserShow.vue';
import UserEdit from '../views/user/UserEdit.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        children: [
            {
                path: '',
                component: UserList,
            },
            {
                path: ':id',
                component: UserShow,
                props: true,
            },
            {
                path: ':id/edit',
                component: UserEdit,
                props: true,
                name: 'editUser',
            },
        ],
    },
    {
        path: '/users',
        redirect: '/user',
    },
    {
        path: '*',
        redirect: '/',
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
