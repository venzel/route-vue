<template>
    <div class="user-edit">
        <h3>Editar</h3>
        <p>id: {{ id }}</p>
        <p>page: {{ $route.query.page }}</p>
        <p>total: {{ $route.query.total }}</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    name: 'UserEdit',
};
</script>
