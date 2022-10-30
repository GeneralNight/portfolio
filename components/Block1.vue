<template>
<div id="containerBlock1">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-5 d-flex flex-column align-items-center d-lg-none">
                <img src="~/assets/img/perfil.png" alt="Profile" class="profile img-fluid">
            </div>
            <div class="col-12 col-lg-7">
                <p class="hello">
                    Hello, my name is
                </p>
                <p class="myName">
                    Guilherme Tinen Ortolani
                </p>
                <p class="role">
                    Frontend developer | Tech lover
                </p>
                <p class="effectPhrase">
                    Each one has the power to change world, here is my way... developing and allowing companies achieve your goals through technology.
                </p>

            </div>
            <div class="col-12 col-lg-5 flex-column align-items-end d-none d-lg-flex">
                <img src="~/assets/img/perfil.png" alt="Profile" class="profile img-fluid">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Block1"
}
</script>

<style lang="scss" scoped>
#containerBlock1 {
    padding: 150px 0;
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.8) 0%, rgba(22, 22, 22, 0.8) 100%),url('~/assets/img/bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    box-shadow: 0 0 10px rgba(0,0,0,1) inset;

    @include d(md) {        
        padding: 100px 0;
    }

    @include d(xs) {        
        padding: 100px 0 40px 0px;
    }
    .profile {
        @include d(md) {
            max-width: 300px;
            margin-bottom: 50px;
        }

        @include d(xs) {
            max-width: 250px;
            margin-bottom: 30px;
        }
    }

    .hello {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 36px;
        line-height: 1.25;
        margin-bottom: 0;

        color: #FFFFFF;

        @include d(lg) {
            font-size: 2rem;
        }

        @include d(md) {
            font-size: 1.5rem;
        }

        @include d(xs) {
            font-size: 1rem;
            text-align: center;
        }

    }

    .myName {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        line-height: 1.25;
        margin-bottom: 0;
        margin-top: 15px;
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

    .role {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 1.25;
        margin-bottom: 0;
        color: #FFFFFF;
        margin-top: 10px;

        @include d(md) {
            font-size: 1.35rem;
        }

        @include d(xs) {
            font-size: 1.15rem;
            text-align: center;
        }
    }

    .effectPhrase {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 1.25;
        margin-bottom: 0;

        color: #FFFFFF;
        margin-top: 80px;

        @include d(lg) {
            font-size: 1.5rem;
            margin-top: 60px;
        }
        @include d(md) {
            font-size: 1.35rem;
            margin-top: 40px;   
        }

        @include d(xs) {
            font-size: 1.15rem;
            margin-top: 30px;
            text-align: center;
        }
    }
}

</style>