<template>
    <div class="user-show">
        <h3>Exibir</h3>
        <p>Id: {{ id }}</p>
        <!-- :to="`/user/${id}/edit`" -->
        <router-link
            tag="button"
            :to="{ name: 'editUser', params: { id }, query: { page: 1, total: 3 } }"
            >Editar</router-link
        >
    </div>
</template>

<script>
export default {
    props: ['id'],
    name: 'UserShow',
};
</script>
