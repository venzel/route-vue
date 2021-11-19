<template>
    <div class="user-list">
        <h3>Listar</h3>
        <ul>
            <router-link tag="li" to="/user/1"><a>User 1</a></router-link>
            <router-link tag="li" to="/user/2"><a>User 2</a></router-link>
            <router-link tag="li" to="/user/3"><a>User 3</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'UserList',
};
</script>
