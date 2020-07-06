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
                        label: 'Impressum',
                        command: () => {
                            this.$router.push('Impressum')
                        }
                    },
                    {
                        label: 'CSS3 Animationen',
                        command: () => {
                            this.$router.push('CssAnimations')


                        }
                    }, {
                        label: 'HTML5 und Media',
                        command: () => {
                            this.$router.push('HtmlMedia')


                        }
                    },
                    {
                        label: 'Zeitplan',
                        command: () => {
                            this.$router.push('/zeitplan')


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