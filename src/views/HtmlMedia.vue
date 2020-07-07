<template>
    <div>
        <div>
            <h1>Bilder</h1>
          <Galleria/>
            <p>
                HTML unterschtützt vielel verschidnene Formate. Das darüberstehende Bild ist ein JPEG-Bild.
                JPEG ist das meistverwendete Bild Format.
                HTML unterstützt auch: APNG, GIF, ICO, PNG und SVG
            </p>
        </div>
        <br>
        <h1>Videos</h1>
        <video class="imageStyle" controls>
            <source src="../assets/dust2_ace_m4a4.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <p>Dieses Video wurde im MP4 Format gespeichert und wird von HTML unterstützt. HTML unterstützt aber auch,
            WebM und Ogg</p>
        <br>
        <h1>Audio</h1>
        <audio controls>
            <source src="../assets/faded.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <p>Für dieses non Copyright Lied wurde das MP3 File Format verwendet. HTML unterstützt auch OGG und WAV.
            Im Edge Browser funktionieren aber WAV und OGG nicht und Safari unterstützt das OGG File Format nicht.</p>
    </div>


</template>

<script>
    import Galleria from "../components/Galleria";
    export default {
        name: "HtmlMedia",
        components: {
            Galleria

        }

    }
</script>

<style scoped>
    .imageStyle {
        width: 50%;
        height: 50%;
    }

    p {
        margin-left: 25%;
        margin-right: 25%;
        font-size: larger;
    }

</style>