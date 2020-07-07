<template>
    <div>
        <H1>Scroll aktivierte Animationen</H1>
        <img data-aos="fade" data-aos-offset="300" data-aos-duration="1000" src="../../assets/SkeletonKnife.png"
             alt="Skeleton Knife"/>
        <br>
        <img data-aos="flip-up" data-aos-duration="1000" src="../../assets/SkeletonKnife.png" alt="Skeleton Knife"/>
        <br>
        <img data-aos="slide-up" data-aos-duration="1000" src="../../assets/SkeletonKnife.png" alt="Skeleton Knife"/>
        <br>
        <img data-aos="zoom-in" data-aos-duration="1000" src="../../assets/SkeletonKnife.png" alt="Skeleton Knife"/>
        <TabView class="tabViewStyling">
            <TabPanel header="Infos">
                Ich verwende die Vue Aos Komponente. diese erzeugt mir scroll aktivierte Animationen.
            </TabPanel>
            <TabPanel header="HTML">
                <pre class="language-markup">
  <code>
           &lt;img data-aos="flip-up" data-aos-duration="1000" src="../../assets/SkeletonKnife.png" alt="Skeleton Knife"/&gt;

  </code>
</pre>
            </TabPanel>
        </TabView>
    </div>

</template>

<script>
    export default {
        name: "ScrollActivated"
    }
</script>

<style scoped>
    .tabViewStyling {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 1%;
        margin-bottom: 5%;
    }
</style>