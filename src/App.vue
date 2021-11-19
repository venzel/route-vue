<template>
    <ul id="app">
        <router-link to="/" tag="li" exact-active-class="active"><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
        <router-view />
    </ul>
</template>

<style scoped>
.active {
    background-color: blueviolet;
}
</style>
