<template>
    <div style="text-align: center">
        <Card style="display: inline-block; margin-top: 1%">
            <template slot="title">
                Mockup
            </template>
            <template slot="content">
                <p style="width: 50%; display: inline-block;">
                Ich habe begonnen Wireframes mit einem Online Tool zu erstellen, bis ich gemerkt habe das es viel
                zu viel Zeit braucht. vor allem habe ich dieses Tool noch nie gebraucht und ich musste viel Zeit in
                Tutorials investieren. Darum habe ich einfach ein Mockup gezeichnet, das die zwei wichtigsten Seiten
                dargestellt. Bei der Mobile Version, wird ein Burger aus den Menu Items erstellt.</p>
                <br>
                <img src="../assets/wireframe.jpg" alt="Mockup" />
            </template>
        </Card>
    </div>

</template>

<script>
    export default {
        name: "Wireframes"
    }
</script>

<style scoped>
    img {
        display: inline-block;
        max-width:100%;
        height:auto;
    }
</style>