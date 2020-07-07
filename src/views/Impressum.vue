<template>
    <div style="text-align: center">
        <h1>Impressum</h1>

        <Card style="width: 50%; display: inline-block">
            <template slot="title">
                Kontakt
            </template>
            <template slot="content">
                Sebastian Swoboda
                <br>
                Meienfeldstrasse 16
                <br>
                8640 Rapperswil
                <br>
                Schweiz
                <br>
                E-Mail: sebastian@swoboda.ch
            </template>
        </Card>
        <br>
        <Card style="width: 50%; display: inline-block; margin-top: 1%">
            <template slot="title">
                Quellen
            </template>
            <template slot="content">
                Allgemeine Infos: <a href="https://www.w3schools.com/">w3schools</a>
                <br>
                Component Library: <a href="https://www.primefaces.org/primevue/">PrimeVue</a>
            </template>
        </Card>
        <br>
        <Card style="width: 50%; display: inline-block; margin-top: 1%">
            <template slot="title">
                Haftungsausschluss
            </template>
            <template slot="content">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
                Zuverlässigkeit und Vollständigkeit der Informationen.
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem
                Zugriff oder der Nutzung bzw.
                Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische
                Störungen entstanden sind, werden ausgeschlossen.
                Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor,
                Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen,
                zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </template>
        </Card>
        <br>
        <Card style="width: 50%; display: inline-block; margin-top: 1%">
            <template slot="title">
                Haftungsausschluss für Links

            </template>
            <template slot="content">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs.
                Es wird jegliche Verantwortung für solche Webseiten abgelehnt.
                Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.
            </template>
        </Card>
        <br>
        <Card style="width: 50%; display: inline-block; margin-top: 1%">
            <template slot="title">
                Urheberrechte
            </template>
            <template slot="content">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser
                Website,
                gehören ausschliesslich dem oben genannten Besitzer oder den speziell genannten Rechteinhabern.
                Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im
                Voraus einzuholen.
            </template>
        </Card>
        <br>
        <Card style="width: 50%; display: inline-block; margin-top: 1%">
            <template slot="title">
                Urheberrecht vs Copyright
            </template>
            <template slot="content">
                Das Uhrheberrecht gehört der Person der das Werk geschaffen hat. Das Uhrhebercht an seinem Werk kan nur
                der haben,
                der das Werk geschaffen hat
                und er kann es nicht an Dritte übertragen. Ein Copyright kan wie ein Gegenstand auf Dritte übertragn
                werden.
            </template>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "Impressum"
    }
</script>

<style scoped>
    .cardStyle {
        width: 50%;
    }
</style>