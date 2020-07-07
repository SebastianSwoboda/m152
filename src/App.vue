<template>
    <div id="app">
        <Header/>
        <router-view>
        </router-view>
    </div>

</template>

<script>
    import Header from "@/components/Header";

    export default {
        name: 'App',
        components: {
            Header,

        }
    }
</script>

<style>
    .tabViewStyling {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 1%
    }
    p {
        font-family: Verdana;
    }

    h1 {
        font-family: "Agency FB";
    }

    #app {

        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }
</style>
