<template>
    <div style="text-align: center">
        <Card style="display: inline-block; margin-top: 1%">
            <template slot="title">
                Style Guide
            </template>
            <template slot="content">


                <img src="../assets/styleguide1.jpg" alt="Style Guide"/>
                <img src="../assets/styleguide2.jpg" alt="Style Guide"/>
                <br/>
                <a href="../assets/StyleGuide.pdf" download>
                    Download
                </a>
            </template>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "StyleGuide"
    }
</script>

<style scoped>
    img {
        max-width: 100%;
        height: auto;
    }
</style>