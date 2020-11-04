<template>
    <div>
        <h1>{{About}}</h1>
        <input v-model="name" />
        <button @click="onClick">Click me</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "About me im awesome"
            };
        },
    methods: {
        onClick() {
            alert(this.name);
        }
    }
};

<style>
</style>