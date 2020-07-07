<template>
    <div style="text-align: center">
        <h1>SVG Animationen</h1>
        <div class="ball"></div>
        <SvgHover/>
        <TabView class="tabViewStyling">
            <TabPanel header="Infos">
                SVG Animationen zu erstellen finde ich ziemlich kompliziert.
                Man mus zuerst das SVG erstellen und danach jeden Schritt Animieren,
                was sehr viel Zeit braucht und mir gar nicht Spass macht.
            </TabPanel>
            <TabPanel header="HTML">
                <pre class="language-markup">
  <code>
      &lt;div class="svg-wrapper" style="background-color: #5CDB95&gt;
        &lt;svg height="60" width="320" xmlns="http://www.w3.org/2000/svg"&gt;
             &lt;rect class="shape" height="60" width="320" /&gt;
        &lt;/svg&gt;
        &lt;div class="text"&gt;HOVER&lt;/div&gt;
      &lt;/div&gt;
  </code>
</pre>
            </TabPanel>
            <TabPanel header="CSS">
                <pre class="language-css">
  <code>
      html, body {
        background: #333;
        height: 100%;
        overflow: hidden;
        text-align: center;
    }

    .svg-wrapper {
        height: 60px;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 320px;
    }

    .shape {
        fill: transparent;
        stroke-dasharray: 140 540;
        stroke-dashoffset: -474;
        stroke-width: 8px;
        stroke: #3d8bff;
    }

    .text {
        color: #fff;
        font-family: 'Agency FB';
        font-size: 22px;
        letter-spacing: 8px;
        line-height: 32px;
        position: relative;
        top: -48px;
    }

    @keyframes draw {
        0% {
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
        }
        100% {
            stroke-dasharray: 760;
            stroke-dashoffset: 0;
            stroke-width: 4px;
        }
    }

    .svg-wrapper:hover .shape {
        -webkit-animation: 0.5s draw linear forwards;
        animation: 0.5s draw linear forwards;
    }
  </code>
</pre>
            </TabPanel>
        </TabView>

<SvgPure/>
        <TabView class="tabViewStyling">
            <TabPanel header="Infos">
                SVG Animationen zu erstellen finde ich ziemlich kompliziert.
                Man mus zuerst das SVG erstellen und danach jeden Schritt Animieren,
                was sehr viel Zeit braucht und mir gar nicht Spass macht.
            </TabPanel>
            <TabPanel header="HTML">
                <pre class="language-markup">
  <code>
 &lt;svg version="1.1" width="320" height="320" viewBox="0 0 320 320" fill="none" stroke="#000" stroke-linecap="round"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
             &lt;defs&gt;
                 &lt;path id="r1"&gt;
                     &lt;animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"/&gt;
                     &lt;animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin"/&gt;
                 &lt;/path&gt;
                 &lt;path id="r2"&gt;
                     &lt;animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/&gt;
                     &lt;animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/&gt;
                 &lt;/path&gt;
                 &lt;path id="r3"&gt;
                     &lt;animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/&gt;
                     &lt;animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/&gt;
                 &lt;/path&gt;
                 &lt;path id="r4"&gt;
                     &lt;animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/&gt;
                     &lt;animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/&gt;
                 &lt;/path&gt;
                 &lt;path id="r5"&gt;
                     &lt;animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/&gt;
                     &lt;animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/&gt;
                 &lt;/path&gt;
                 &lt;path id="r6"&gt;
                     &lt;animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/&gt;
                     &lt;animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/&gt;
                 &lt;/path&gt;
             &lt;/defs&gt;
             &lt;use xlink:href="#r1"/&gt;
             &lt;use xlink:href="#r1" transform="rotate(60 160 160)"/&gt;
             &lt;use xlink:href="#r1" transform="rotate(120 160 160)"/&gt;
             &lt;use xlink:href="#r1" transform="rotate(180 160 160)"/&gt;
             &lt;use xlink:href="#r1" transform="rotate(240 160 160)"/&gt;
             &lt;use xlink:href="#r1" transform="rotate(300 160 160)"/&gt;
             &lt;use xlink:href="#r2" transform="rotate(30 160 160)"/&gt;
             &lt;use xlink:href="#r2" transform="rotate(90 160 160)"/&gt;
             &lt;use xlink:href="#r2" transform="rotate(150 160 160)"/&gt;
             &lt;use xlink:href="#r2" transform="rotate(210 160 160)"/&gt;
             &lt;use xlink:href="#r2" transform="rotate(270 160 160)"/&gt;
             &lt;use xlink:href="#r2" transform="rotate(330 160 160)"/&gt;
             &lt;use xlink:href="#r3"/&gt;
             &lt;use xlink:href="#r3" transform="rotate(60 160 160)"/&gt;
             &lt;use xlink:href="#r3" transform="rotate(120 160 160)"/&gt;
             &lt;use xlink:href="#r3" transform="rotate(180 160 160)"/&gt;
             &lt;use xlink:href="#r3" transform="rotate(240 160 160)"/&gt;
             &lt;use xlink:href="#r3" transform="rotate(300 160 160)"/&gt;
             &lt;use xlink:href="#r4" transform="rotate(30 160 160)"/&gt;
             &lt;use xlink:href="#r4" transform="rotate(90 160 160)"/&gt;
             &lt;use xlink:href="#r4" transform="rotate(150 160 160)"/&gt;
             &lt;use xlink:href="#r4" transform="rotate(210 160 160)"/&gt;
             &lt;use xlink:href="#r4" transform="rotate(270 160 160)"/&gt;
             &lt;use xlink:href="#r4" transform="rotate(330 160 160)"/&gt;
             &lt;use xlink:href="#r5"/&gt;
             &lt;use xlink:href="#r5" transform="rotate(60 160 160)"/&gt;
             &lt;use xlink:href="#r5" transform="rotate(120 160 160)"/&gt;
             &lt;use xlink:href="#r5" transform="rotate(180 160 160)"/&gt;
             &lt;use xlink:href="#r5" transform="rotate(240 160 160)"/&gt;
             &lt;use xlink:href="#r5" transform="rotate(300 160 160)"/&gt;
             &lt;use xlink:href="#r6" transform="rotate(30 160 160)"/&gt;
             &lt;use xlink:href="#r6" transform="rotate(90 160 160)"/&gt;
             &lt;use xlink:href="#r6" transform="rotate(150 160 160)"/&gt;
             &lt;use xlink:href="#r6" transform="rotate(210 160 160)"/&gt;
             &lt;use xlink:href="#r6" transform="rotate(270 160 160)"/&gt;
             &lt;use xlink:href="#r6" transform="rotate(330 160 160)"/&gt;
         &lt;/svg&gt;
  </code>
</pre>
            </TabPanel>
        </TabView>
    </div>


</template>

<script>
    import SvgHover from "./SvgHover";
    import SvgPure from "./SvgPure";

    export default {
        name: "SvgAnimations",
        components: {
            SvgHover,
            SvgPure

        },
        methods: {}
    }


</script>

<style scoped>
    .tabViewStyling {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 1%
    }

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