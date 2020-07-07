<template>
    <div>
        <Menubar :model="items" style="background-color:#5CDB95;">

            <template #start>
                <H1>M152</H1>

            </template>
        </Menubar>

    </div>
</template>

<script>

    export default {
        name: "Header",
        data() {
            return {
                items: [
                    {
                        label: 'Konzept',
                        command: () => {
                            this.$router.push('Konzept')
                        }
                    },
                    {
                        label: 'Animationen',
                        command: () => {
                            this.$router.push('Animations')


                        }},


                    {
                        label: 'Impressum',
                        command: () => {
                            this.$router.push('Impressum')
                        }
                    },
                    {
                        label: 'HTML5 und Media',
                        command: () => {
                            this.$router.push('HtmlMedia')


                        }
                    },
                    {
                        label: 'Zeitplan',
                        command: () => {
                            this.$router.push('Zeitplan')


                        }
                    },


                ]
            }
        },
        methods: {
            someMethod: function () {
                alert("Dreckige Hs")
            }
        }
    }
</script>

<style scoped>

</style>