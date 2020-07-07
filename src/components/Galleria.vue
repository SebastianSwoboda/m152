<template>
    <div style="text-align: center">
    <carousel :per-page="3" :autoplay="true" :loop="true" :perPageCustom="[[0, 1], [1080, 3]]" style="width: 50%;display: inline-block;">
        <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide> <slide>
            <img src="../assets/skeletonSmall.png" alt="Flumserberg" class="imageStyle"/>
        </slide>
    </carousel>
    </div>
</template>

<script>
    export default {
        name: "Galleria",
        data() {
            return {
                images: [
                    {
                        itemImageSrc: "SkeletonKnife.png",
                        thumbnailImageSrc: "SkeletonKnife.png",
                        alt: "Description for Image 1",
                        title: "Title 1"
                    },

                ]
            }
        },

    }
</script>

<style scoped>
    .imageStyle {

    }
</style>