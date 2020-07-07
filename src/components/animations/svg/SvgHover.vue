<template>
    <div class="svg-wrapper" style="background-color: #5CDB95; margin-top: 40px">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
        </svg>
        <div class="text">HOVER</div>
    </div>
</template>

<script>
    export default {
        name: "SvgHover"
    }
</script>

<style scoped>

    html, body {
        background: #333;
        height: 100%;
        overflow: hidden;
        text-align: center;
    }

    .svg-wrapper {
        height: 60px;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 320px;
    }

    .shape {
        fill: transparent;
        stroke-dasharray: 140 540;
        stroke-dashoffset: -474;
        stroke-width: 8px;
        stroke: #3d8bff;
    }

    .text {
        color: #fff;
        font-family: 'Agency FB';
        font-size: 22px;
        letter-spacing: 8px;
        line-height: 32px;
        position: relative;
        top: -48px;
    }

    @keyframes draw {
        0% {
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
        }
        100% {
            stroke-dasharray: 760;
            stroke-dashoffset: 0;
            stroke-width: 4px;
        }
    }

    .svg-wrapper:hover .shape {
        -webkit-animation: 0.5s draw linear forwards;
        animation: 0.5s draw linear forwards;
    }

</style>