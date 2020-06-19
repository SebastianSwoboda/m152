<template>
    <div style="overflow:hidden" >
    <h1>Animation</h1>
    </div>
</template>

<script>
    export default {
        name: "Css3Animations"
    }
</script>

<style scoped>
    h1 {
        animation-duration: 3s;
        animation-name: slidein;
    }

    @keyframes slidein {
        from {
            margin-left: 100%;
            width: 300%;
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    }
</style>