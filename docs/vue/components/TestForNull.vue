<template>
    <div>test-for-null</div>
    <div v-for="i in list" :key="i">loop</div>
</template>

<script>
export default {
    name: 'test-for-null',
    data() {
        return {
            list: 2,
            // list: null,
            // list: undefined,
            // list: [1, 2, 3],
        };
    },
};
</script>

<style>
/* style */
</style>
