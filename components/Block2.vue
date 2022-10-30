<template>
<section id="containerBlock2">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-7">
                <h1>About me</h1>
                <p class="aboutText">
                    My name is Guilherme Tinen Ortolani. I’m a passionate web developer making awesome projects and making part of history from several companies since 2020.
                </p>
                <p class="aboutText2">
                    My focus is build awesome projects and give an unforgettable experience to then and their customers.
                </p>
                <p class="aboutText3">
                    Nowadays, I’m reaching other countries with my codes and skills through software development at Vizo.
                </p>
            </div>
            <div class="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center">
                <img src="~/assets/img/about.svg" alt="" class="img-fluid about">
            </div>
        </div>
    </div>
</section>
</template>

<script> 
export default {
    name: "Block2",

}
</script>

<style lang="scss" scoped>
 #containerBlock2 {
    padding: 80px 0;
    background: linear-gradient(100.21deg, #343434 0%, #122A41 100%);

    @include d(lg) {
        padding: 60px 0;
    }

    @include d(sm) {
        padding: 40px 0;
    }

    @include d(xs) {
        padding: 20px 0;
    }

    .about {
        @include d(sm) {
            max-width: 350px;
            margin-top: 30px;
        }

        @include d(xs) {
            max-width: 100%;
        }
    }

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        line-height: 1.25;
        color: #1A88ED;

        @include d(lg) {
            font-size: 3rem;
        }

        @include d(md) {
            font-size: 2.5rem;
        }

        @include d(xs) {
            font-size: 2rem;
            margin-top: 10px;
            text-align: center;
        }

    }

    .aboutText, .aboutText2, .aboutText3 {

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.25;
        color: #FFFFFF;
        margin-top: 30px;

        @include d(md) {
            font-size: 1.35rem;
            margin-top: 15px;
        }

        @include d(sm) {
            font-size: 1.15rem;
        }
        
    }
 }
</style>