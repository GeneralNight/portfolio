<template>
<div id="containerContact">
    <div class="container">
        <div class="row">
            <div class="12 col-md-7">
                <h1>Contact me</h1>
                <p class="contactText">
                    Have a super idea, some question or would like to contact me and have no idea how? Simple: follow my e-mail, whatsapp and linkedin bellow.
                </p>
                <div class="d-flex align-items-center containerSocialMedias justify-content-center justify-content-sm-start">
                    <a target="_blank" href="https://github.com/GeneralNight"><i class="fab fa-github"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/guilherme-tinen-ortolani/"><i class="fab fa-linkedin"></i></a>
                    <a target="_blank" href="mailto:gfmi0911@hotmail.com"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div class="col-12 col-md-5 d-flex flex-column align-items-center">
                <img src="~/assets/img/laptop.svg" alt="" class="img-fluid contact">
            </div>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
#containerContact {

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

    .contact {
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
        }
    }

    .contactText {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.25;
        color: #FFFFFF;

        @include d(md) {
            font-size: 1.35rem;
        }

        @include d(sm) {
            font-size: 1.15rem;
        }

        @include d(xs) {
            text-align: center;
        }
    }

    .containerSocialMedias {
        column-gap: 30px;
        row-gap: 30px;
        flex-wrap: wrap;
        font-size: 32px;
        margin-bottom: 10px; 
        a {
            transition: .2s;
            color: #1A88ED;

            &:hover {
                color: #fff;
            }
        }

        @include d(xs) {
            font-size: 24px;
        }
    }
}
</style>