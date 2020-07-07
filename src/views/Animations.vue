<template>
    <div>
        <h1>Test</h1>
        <CssAnimations/>
        <SvgAnimations/>
        <CanvasGraphic/>
        <ScrollActivated/>
    </div>
</template>

<script>
    import SvgAnimations from "../components/animations/SvgAnimations";
    import CanvasGraphic from "../components/animations/CanvasGraphic";
    import ScrollActivated from "../components/animations/ScrollActivated";
    import CssAnimations from "../components/animations/CssAnimations";

    export default {
        name: "Animations",
        components: {
            SvgAnimations,
            ScrollActivated,
            CanvasGraphic,
            CssAnimations
        }
    }
</script>

<style scoped>

</style>