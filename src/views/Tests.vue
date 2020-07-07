<template>
    <div>
        <h1>Testfälle</h1>
        <p>Hier finden sie alle Testfälle um sicherzustellen, dass die Seite auf dem Desktop sowie in der Moblie Ansicht
            funktioniert.</p>
        <Card style="display: inline-block; margin-top: 1%">
            <template slot="title">
                Test 1: Menu Bar
            </template>
            <template slot="content">
                <b>Datum</b>
                <p>07.07.2020</p>

                <b>Beischreibung</b>
                <p>Alle Links auf der Menu Bar sollten funktionieren
                    und den Benutzer auf die richtige Seite Weiterleiten</p>
                <b>Resultat</b>
                <p>Wie erwarted</p>
                <b>Status</b>
                <p>Okay</p>
            </template>
        </Card>
        <br>
        <Card style="display: inline-block; margin-top: 1%">
            <template slot="title">
                Test 2: Animationen
            </template>
            <template slot="content">
                <b>Datum</b>
                <p>07.07.2020</p>

                <b>Beischreibung</b>
                <p>Alle Animationen auf der Animations Page funktionieren einwandfrei</p>
                <b>Resultat</b>
                <p>Wie erwarted</p>
                <b>Status</b>
                <p>Okay</p>
            </template>
        </Card>
        <br>
        <Card style="display: inline-block; margin-top: 1%">
            <template slot="title">
                Test 3: Medien Video
            </template>
            <template slot="content">
                <b>Datum</b>
                <p>07.07.2020</p>
                <b>Beischreibung</b>
                <p>Das Video auf der HtmlVideo Page lädt und spielt einwandfrei ab, wenn man den Play Button klickt</p>
                <b>Resultat</b>
                <p>Wie erwarted</p>
                <b>Status</b>
                <p>Okay</p>
            </template>
        </Card>
        <br>
        <Card style="display: inline-block; margin-top: 1%">
            <template slot="title">
                Test 4: Medien Slideshow
            </template>
            <template slot="content">
                <b>Datum</b>
                <p>07.07.2020</p>
                <b>Beischreibung</b>
                <p>Die Slideshow wechselt Bilder automatisch</p>
                <b>Resultat</b>
                <p>Wie erwarted</p>
                <b>Status</b>
                <p>Okay</p>
            </template>
        </Card>
        <br>
        <Card style="display: inline-block; margin-top: 1%">
            <template slot="title">
                Test 5: Medien Audio
            </template>
            <template slot="content">
                <b>Datum</b>
                <p>07.07.2020</p>
                <b>Beischreibung</b>
                <p>Das Lied auf der HtmlMeida Page spielt einwandfrei ab wenn man den Play Button klickt</p>
                <b>Resultat</b>
                <p>Wie erwarted</p>
                <b>Status</b>
                <p>Okay</p>
            </template>
        </Card>

    </div>
</template>

<script>
    export default {
        name: "Tests"
    }
</script>

<style scoped>

</style>