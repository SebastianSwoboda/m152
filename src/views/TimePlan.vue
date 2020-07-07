<template>
    <div>
    <FullCalendar :events="events" :options="options"/>
    </div>
</template>

<script>
    import dayGridPlugin from '@fullcalendar/daygrid';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import interactionPlugin from '@fullcalendar/interaction';
    import listPlugin from '@fullcalendar/list';
    export default {
        name: "Calendar",
        Component:{
        },
        data(){
            return {
                options: {
                    plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
                    initialView: 'timeGridWeek',

                },
                events: [
                    {
                        "id": 1,
                        "title": "Modul Intro",
                        "start": "2020-05-15T13:00:00",
                        "end": "2020-05-15T14:30:00",

                    },       {
                        "id": 2,
                        "title": "Erste Ideen",
                        "start": "2020-05-15T14:30:00",
                        "end": "2020-05-15T16:30:00",

                    },
                    {
                        "id": 3,
                        "title": "Styleguide",
                        "start": "2020-05-29T14:30:00",
                        "end": "2020-05-29T15:30:00",

                    },{
                        "id": 4,
                        "title": "Wireframes",
                        "start": "2020-05-29T15:30:00",
                        "end": "2020-05-29T15:30:00",

                    },{
                        "id": 5,
                        "title": "Vue Projekt erstellen",
                        "start": "2020-06-05T14:30:00",
                        "end": "2020-06-05T16:30:00",

                    },
                    {
                        "id": 6,
                        "title": "Css Animationen",
                        "start": "2020-06-12T14:30:00",
                        "end": "2020-06-05T15:30:00",

                    },
                    {
                        "id": 7,
                        "title": "Vektor Animationen",
                        "start": "2020-06-12T15:30:00",
                        "end": "2020-06-12T16:30:00",

                    }, {
                        "id": 8,
                        "title": "Canvas Animationen",
                        "start": "2020-06-19T13:30:00",
                        "end": "2020-06-19T15:30:00",

                    }, {
                        "id": 9,
                        "title": "Scroll Activated",
                        "start": "2020-06-19T15:30:00",
                        "end": "2020-06-19T16:30:00",

                    },{
                        "id": 10,
                        "title": "HTML Video und Bilder",
                        "start": "2020-06-26T13:30:00",
                        "end": "2020-06-26T15:30:00",

                    },{
                        "id": 11,
                        "title": "HTML Audio",
                        "start": "2020-06-26T15:30:00",
                        "end": "2020-06-26T16:30:00",

                    },{
                        "id": 12,
                        "title": "Zeitplan, Wireframes und Styleguide hinzufügen",
                        "start": "2020-07-03T13:30:00",
                        "end": "2020-07-03T15:00:00",

                    },{
                        "id": 13,
                        "title": "Site testen",
                        "start": "2020-07-03T15:00:00",
                        "end": "2020-07-03T16:30:00",

                    },
                    {
                        "id": 14,
                        "title": "Abgabe",
                        "start": "2020-07-07"

                    },
                ]
            };
        }
    }
</script>

<style scoped>

</style>