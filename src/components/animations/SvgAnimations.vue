<template>
    <div style="text-align: center">
        <h1>SVG Animationen</h1>
        <div class="ball"></div>
        <svg width="500" height="350" style="display: inline-block">
            <circle id="orange-circle" r="30" cx="50" cy="50" fill="orange" style="display: inline-block"/>

            <animate
                    xlink:href="#orange-circle"
                    attributeName="cy"
                    from="50"
                    to="250"
                    dur="3s"
                    begin="0s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    values="50; 250; 120; 250; 170; 250; 210; 250"
                    keyTimes="0; 0.15; 0.3; 0.45; 0.6; 0.75; 0.9; 1"
                    keySplines="0.42 0 1 1;
                       0 0 0.59 1;
                       0.42 0 1 1;
                       0 0 0.59 1;
                       0.42 0 1 1;
                       0 0 0.59 1;
                       0.42 0 1 1"
                    fill="freeze"
                    id="circ-anim"/>



        </svg>
        <SvgPlanet style="display: inline-block"/>
        <p>SVG Animationen zu erstellen finde ich ziemlich kompliziert.
            Man mus zuerst das SVG erstellen und danach jeden Schritt Animieren,
            was sehr viel Zeit braucht und mir gar nicht Spass macht.</p>
    </div>

</template>

<script>
    import SvgPlanet from "@/components/animations/SvgPlanet";
    export default {
        name: "SvgAnimations",
        components: {
            SvgPlanet
        },
        methods: {


            }
        }


</script>

<style scoped>
    svg {
        border: 3px solid #eee;
        display: block;
        margin: 1em auto;
    }

    p {
        text-align: center;
        font-size: large;
        margin-left: 25%;
        margin-right: 25%;
    }

</style>