<template>
    <div style="text-align: center">
        <h1>HTML Canvas Grafik</h1>
        <canvas style="display: inline-block" id="canvas" width="300" height="300">Your browser does not support the
            HTML canvas tag.
        </canvas>
        <TabView class="tabViewStyling">
            <TabPanel header="Infos">
                Mit HTML Canvas Grafiken kann man sehr viel machen, ich habe dieses Beispiel im Internet gefunden und
                mir den
                JavaScript Code angeschaut.
                Für mich ist es einfacher eine schöne animierte Canvas Grafik zu erstellen, als eine Vektorgrafik,
                da ich schon verwandt mit Javascirpt bin und JS schon mit vielen hilfreichen Methoden kommt
            </TabPanel>
            <TabPanel header="HTML">
                <pre class="language-markup">
  <code>
      &lt;canvas style="display: inline-block" id="canvas" width="300" height="300">Your browser does not support the
            HTML canvas tag.
        &lt;/canvas&gt;
  </code>
</pre>
            </TabPanel>
            <TabPanel header="JS">
                <pre class="language-javascript">
  <code>
    var sun = new Image();
            var moon = new Image();
            var earth = new Image();

            function init() {
                sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
                moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
                earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
                window.requestAnimationFrame(draw);
            }

            function draw() {
                var ctx = document.getElementById('canvas').getContext('2d');

                ctx.globalCompositeOperation = 'destination-over';
                ctx.clearRect(0, 0, 300, 300); // clear canvas

                ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
                ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
                ctx.save();
                ctx.translate(150, 150);

                // Earth
                var time = new Date();
                ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
                ctx.translate(105, 0);
                ctx.fillRect(0, -12, 50, 24); // Shadow
                ctx.drawImage(earth, -12, -12);

                // Moon
                ctx.save();
                ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
                ctx.translate(0, 28.5);
                ctx.drawImage(moon, -3.5, -3.5);
                ctx.restore();

                ctx.restore();

                ctx.beginPath();
                ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
                ctx.stroke();

                ctx.drawImage(sun, 0, 0, 300, 300);

                window.requestAnimationFrame(draw);
            }

            init();
  </code>
</pre>
            </TabPanel>
        </TabView>
    </div>

</template>

<script>
    export default {
        name: "CanvasGraphic",
        mounted() {
            var sun = new Image();
            var moon = new Image();
            var earth = new Image();

            function init() {
                sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
                moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
                earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
                window.requestAnimationFrame(draw);
            }

            function draw() {
                var ctx = document.getElementById('canvas').getContext('2d');

                ctx.globalCompositeOperation = 'destination-over';
                ctx.clearRect(0, 0, 300, 300); // clear canvas

                ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
                ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
                ctx.save();
                ctx.translate(150, 150);

                // Earth
                var time = new Date();
                ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
                ctx.translate(105, 0);
                ctx.fillRect(0, -12, 50, 24); // Shadow
                ctx.drawImage(earth, -12, -12);

                // Moon
                ctx.save();
                ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
                ctx.translate(0, 28.5);
                ctx.drawImage(moon, -3.5, -3.5);
                ctx.restore();

                ctx.restore();

                ctx.beginPath();
                ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
                ctx.stroke();

                ctx.drawImage(sun, 0, 0, 300, 300);

                window.requestAnimationFrame(draw);
            }

            init();

        }
    }

</script>

<style scoped>
    .tabViewStyling {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 1%
    }

    p {
        text-align: center;
        font-size: large;
        margin-left: 25%;
        margin-right: 25%;
    }

    body {
        background: linear-gradient(#000, #151515);
    }

    canvas {
        display: block;
    }


</style>