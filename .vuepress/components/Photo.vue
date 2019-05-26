<template>

    <figure>
        <img :src="require('../../images/' + src)" :alt="alt">
        <figcaption>{{ alt }}</figcaption>
    </figure>

</template>

<script>

export default {
    props: ['alt', 'src'],
}
</script>

<style>
figure {
    margin-left: 0; margin-right: 0
}

figcaption {
    font-style: italic;
    text-align: center;
    font-size: smaller;
}
</style>
