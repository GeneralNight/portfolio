<template>
<header id="containerHeader" :class="{'showBG': showBG}">
    <div class="container">
        <div class="row">
            <div class="col d-flex flex-column align-items-end">
                <b-button class="d-md-none btn btn-primary" v-b-toggle.sidebar-1>
                    <i class="fas fa-bars"></i>
                </b-button>
                <nav>
                    <ul class="d-none d-md-flex align-items-center justify-content-end p-0 m-0">
                        <li><a href="#containerBlock1">Home</a></li>
                        <li><a href="#containerBlock2">About</a></li>
                        <li><a href="#containerProjects">Projects</a></li>
                        <li><a href="#containerContact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <b-sidebar id="sidebar-1" shadow bg-variant="dark" text-variant="light" backdrop>
            <nav>
                <ul class="d-flex flex-column p-0 m-0">
                    <li><a href="#containerBlock1">Home</a></li>
                    <li><a href="#containerBlock2">About</a></li>
                    <li><a href="#containerProjects">Projects</a></li>
                    <li><a href="#containerContact">Contact</a></li>
                </ul>
            </nav>
        </b-sidebar>
    </div>
</header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            showBG: false,
            offsetShowBg: 175
        }
    },
    mounted() {
        window.addEventListener('scroll',() => {
            let Offheight = window.scrollY
            if(Offheight>this.offsetShowBg) {
                this.showBG = true
            }else {
                this.showBG = false
            }
        })
    }
}
</script>

<style lang="scss" scoped>

#containerHeader {
    padding: 30px 0px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 20;

    @include d(sm) {
        padding: 15px 0;
    }

    ul {
        list-style: none;
        column-gap: 30px;

        a {
            color: #fff;
            transition: .2s;
            font-weight: 700;
            font-family: 'Roboto';
            text-decoration: none;
            font-size: 1.25rem;
            &:hover {
                color: #1A88ED;
            }

            @include d(sm) {
                display: flex;
                padding-left: 30px;
                border-bottom: 1px solid #fff;
                padding: 20px 0 15px 30px;
                width: 100%;

                &:hover {
                    background: #1A88ED;
                    color: #fff;
                }
            }
        }

        li {
            @include d(sm) {
                &:first-of-type {
                    a {
                        border-top: 1px solid #fff;
                    }
                }
            }
        }
    }

    &.showBG {
        background: #1e3949;
        box-shadow: 0 0 10px rgba(0,0,0,1);
    }
}
</style>