<template>
    <div>
    <Menubar :model="items"/>
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
                        command: this.someMethod
                    },
                    {
                        label: 'CSS3 Animationen',
                        command: ()=>{
                            this.$router.push('CssAnimations')


                        }
                    }
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