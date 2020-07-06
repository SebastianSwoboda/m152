<template>
    <div style="overflow:hidden; text-align: center">
        <h1>CSS3 Animationen</h1>
        <img src="../../assets/SkeletonKnife.png" alt="CS:GO Skeleton Knife Slaughter" id="knifeImage"
             v-bind:class="{startRotateAnimation: animationActive }" style="display: inline-block">
        <br>
        <Button :label="buttonText" @click="startAnimation" id="animationStartButton"/>
        <p>CSS3 Animationen sind für einfache Animationen sehr einfach,
            aber sobald man irgendeine komplexere Animation will,
            muss man viel Zeit investieren.</p>
        <SvgAnimations/>
        <CanvasGraphic/>
        <ScrollActivated/>
        <Logo/>
        <VueRoller/>


    </div>
</template>

<script>
    import SvgAnimations from "@/components/animations/SvgAnimations";
    import CanvasGraphic from "@/components/animations/CanvasGraphic";
    import VueRoller from "@/components/animations/VueRoller";
    import ScrollActivated from "@/components/animations/ScrollActivated";
    import Logo from "@/components/animations/Logo";
    export default {
        name: "Css3Animations",
        components: {
            VueRoller, SvgAnimations,
        CanvasGraphic,
        ScrollActivated, Logo},
        data() {
            return {
                animationActive: true,
                buttonText: "Stop"
            }
        },
        methods: {
            startAnimation: function () {
                if (!this.animationActive) {
                    this.animationActive = true;
                    this.buttonText = "Stop"

                } else {
                    this.animationActive = false
                    this.buttonText = "Start"

                }


            }
        },
    }

</script>

<style scoped>
    p {
        text-align: center;
        font-size: large;
        margin-left: 25%;
        margin-right: 25%;
    }
    h1 {
        animation-duration: 1s;
        animation-name: slideIn;
    }

    .startRotateAnimation {
        -webkit-animation: rotate-scale-down-diag-2 0.7s linear both;
        animation: rotate-scale-down-diag-2 0.7s linear both;
        animation-iteration-count: infinite;

    }

    @keyframes slideIn {
        from {
            margin-left: 100%;
            width: 300%;
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    }

    @-webkit-keyframes rotate-scale-down-diag-2 {
        0% {
            -webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
            transform: scale(1) rotate3d(-1, 1, 0, 0deg);
        }
        50% {
            -webkit-transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
            transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
        }
        100% {
            -webkit-transform: scale(1) rotate3d(-1, 1, 0, 360deg);
            transform: scale(1) rotate3d(-1, 1, 0, 360deg);
        }
    }

    @keyframes rotate-scale-down-diag-2 {
        0% {
            -webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
            transform: scale(1) rotate3d(-1, 1, 0, 0deg);
        }
        50% {
            -webkit-transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
            transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
        }
        100% {
            -webkit-transform: scale(1) rotate3d(-1, 1, 0, 360deg);
            transform: scale(1) rotate3d(-1, 1, 0, 360deg);
        }
    }
</style>