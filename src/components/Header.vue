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
                        icon: 'pi pi-spin pi-spinner',
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
                        icon: 'pi pi-fw pi-calendar-times',
                        command: () => {
                            this.$router.push('Zeitplan')


                        }
                    }, {
                        label: 'Dokumentation',
                        items: [
                            {
                                label: 'Mockup',
                                command: () => {
                                    this.$router.push('Mockup')
                                }
                            },
                            {
                                label: 'Styleguide',
                                command: () => {
                                    this.$router.push('StyleGuide')
                                }
                            },
                            {
                                label: 'Tests',
                                command: () => {
                                    this.$router.push('Tests')
                                }
                            },{
                                label: 'Reflexion',
                                command: () => {
                                    this.$router.push('Reflexion')
                                }
                            },
                        ]
                    },
                    {
                        label: 'Impressum',
                        icon: 'pi pi-fw pi-info-circle',
                        command: () => {
                            this.$router.push('Impressum')
                        }
                    },


                ]
            }
        },
    }
</script>

<style scoped>
    .p-menubar-start {
    }
</style>