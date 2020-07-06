<template>
    <div>
    <Roller text="1234" transition="5" :charList="['a', 'b', 'c']"></Roller>
    </div>
</template>

<script>
    import Roller from "vue-roller";

    export default {
        name: "VueRoller",
        components:{
            Roller

        }
    }
</script>

<style scoped>

</style>