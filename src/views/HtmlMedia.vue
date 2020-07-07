<template>
    <div>
        <div>
            <h1>Bilder</h1>
            <Galleria/>
        </div>
        <TabView class="tabViewStyling">
            <TabPanel header="Infos">
                HTML unterstützt viele verschiedene Formate. Das darüberstehende Bild ist ein JPEG-Bild.
                JPEG ist das meistverwendete Bild Format.
                HTML unterstützt auch: APNG, GIF, ICO, PNG und SVG. Ich würde JPEG empfehlen weil es sehr viele Farben
                darstellen.
            </TabPanel>
            <TabPanel header="Implementation">
                <pre class="language-markup">
  <code>
      &lt;img src="smiley.gif" alt="HTML tutorial"&gt;
  </code>
</pre>
            </TabPanel>
        </TabView>
        <br>
        <h1>Videos</h1>
        <video class="imageStyle" controls>
            <source src="../assets/dust2_ace_m4a4.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <TabView class="tabViewStyling">
            <TabPanel header="Infos">
                Dieses Video wurde im MP4 Format gespeichert und wird von HTML unterstützt. HTML unterstützt aber auch,
                WebM und Ogg. IE und Safari unterstützen nur mp4. Ich würde mp4 empfehlen weil es von allen Browsern
                unterstützt wird.
            </TabPanel>
            <TabPanel header="MP4">
                <pre class="language-markup">
  <code>
      &lt;source src="../assets/dust2_ace_m4a4.mp4" type="video/mp4"&gt;
  </code>
</pre>
            </TabPanel>
            <TabPanel header="WEBM">
                <pre class="language-markup">
  <code>
      &lt;source src="../assets/dust2_ace_m4a4.mp4" type="video/webm"&gt;
  </code>
</pre>
            </TabPanel>
            <TabPanel header="OGG">
                <pre class="language-markup">
  <code>
      &lt;source src="../assets/dust2_ace_m4a4.mp4" type="video/ogg"&gt;
  </code>
</pre>
            </TabPanel>
        </TabView>
        <br>
        <h1>Audio</h1>
        <audio controls>
            <source src="../assets/faded.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <TabView class="tabViewStyling" style="margin-bottom: 5%;">
            <TabPanel header="Infos">
                Für dieses non Copyright Lied wurde das MP3 File Format verwendet. HTML unterstützt auch OGG und WAV.
                Im Edge Browser funktionieren aber WAV und OGG nicht und Safari unterstützt das OGG File Format
                nicht. Ich würde MP3 empfehlen weil es von allen Brownsern unterstützt wird.
            </TabPanel>
            <TabPanel header="MP3">
                <pre class="language-markup">
  <code>
      &lt;audio controls&gt;
             &lt;source src="../assets/faded.mp3" type="audio/mpeg"&gt;
            Your browser does not support the audio element.
         &lt;/audio>&gt;
  </code>
</pre>
            </TabPanel>
            <TabPanel header="OGG">
                <pre class="language-markup">
  <code>
      &lt;audio controls&gt;
             &lt;source src="../assets/faded.mp3" type="audio/ogg"&gt;
            Your browser does not support the audio element.
         &lt;/audio>&gt;
  </code>
</pre>
            </TabPanel>
            <TabPanel header="WAV">
                <pre class="language-markup">
  <code>
      &lt;audio controls&gt;
             &lt;source src="../assets/faded.mp3" type="audio/wav"&gt;
            Your browser does not support the audio element.
         &lt;/audio>&gt;
  </code>
</pre>
            </TabPanel>
        </TabView>
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