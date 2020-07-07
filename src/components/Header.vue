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


                        }
                    },



                    {
                        label: 'HTML5 und Media',
                        icon: 'pi pi-fw pi-video',
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
                    {
                        label: 'Impressum',
                        command: () => {
                            this.$router.push('Impressum')
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
    .p-menubar-start {
    }
</style>