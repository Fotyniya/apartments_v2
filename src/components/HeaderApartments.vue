<template>
    <header class="header">
        <Container>
            <router-link to="/">
                <LogoApartments/>
            </router-link>
        </Container>
    </header>
</template>

<script>
import Container from './shared/Container.vue';
import LogoApartments from './LogoApartments.vue'

    export default {
        name: 'HeaderApartments',
        components: {
            Container,
            LogoApartments
        }
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 0;
    background: $secondary-color;
    z-index: 100;
}
</style>