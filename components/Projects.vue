<template>
<section id="containerProjects">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Projects</h1>
            </div>
            <div class="col-12 col-md-6 col-lg-4" v-for="(project,index) in projects.slice(0,3*actualPage)">
                <div class="projectCard d-flex flex-column">
                    <div class="bg" :style="`background-image: url('${require(`~/assets/img/projects/${project.bg}`)}');`"></div>
                    <div class="d-flex flex-column cardBody">
                        <p class="projectName">
                            {{project.name}}
                        </p>
                        <div class="d-flex align-items-center projectLinks">
                            <a target="_blank" :href="project.github"><i class="fab fa-github"></i></a>
                            <a target="_blank" :href="project.preview"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                        <p class="projectDesc">
                            {{project.description}}
                        </p>
                        <!-- <p class="more">See more</p> -->
                        <div class="projectTags d-flex align-items-center">
                            <span v-for="(tag,index2) in project.tags">
                                #{{tag}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex flex-column align-items-center" v-if="projects.slice(0,3*actualPage).length<projects.length">
                <button class="showMore" @click.prevent="showMore">
                    Show more
                </button>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            bgFolderPath: '~/assets/img/projects/',
            maxPerPage: 6,
            actualPage: 1,
            projects: [
                {
                    name: 'Money Converter',
                    bg: 'money-converter-cover.png',
                    description: 'The project was developed to increase my personal projects of my portfolio. The main ideia is consume an exchange API and delivery a application where you can convert any value between two currencies. For example USD to BRL ou EUR to USD.',
                    tags: ["Vuejs",'API Consume',"Sass"],
                    github: "https://github.com/GeneralNight/money-converter",
                    preview: "https://money-coverter.ecoder.com.br/"
                },                
            ]
        }
    },
    methods: {
        showMore() {
            this.actualPage++
        }
    }
}
</script>

<style lang="scss" scoped>
#containerProjects {

    padding: 30px 0 60px 0;
    box-shadow: 0 -3px 5px rgba(0,0,0,.5) inset;

    @include d(xs) {
        padding: 0px 0 30px 0;
    }

    & > .container > .row {
        row-gap: 20px;
    }

    h1 {
        font-size: 64px;
        line-height: 1.25;
        margin-bottom: 0;
        margin-top: 15px;
        color: #0a0a0a;
        font-weight: 700;
        font-family: 'Roboto';
        margin-bottom: 20px;

        @include d(lg) {
            font-size: 3rem;
        }

        @include d(md) {
            font-size: 2.75rem;
            margin-bottom: 15px;
        }

        @include d(sm) {
            margin-bottom: 0px;
        }

        @include d(xs) {
            font-size: 2rem;
            text-align: center;
            
        }
    }

    .projectCard {
        background: #f6f6f6;
        box-shadow: 0 0 5px rgba(0,0,0,.5);
        border-radius: 8px;
        .bg {
            height: 150px;
            width: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 8px 8px 0 0;
        }

        .cardBody {
            padding: 30px 15px;

            @include d(sm) {
                padding: 20px 15px;
            }
            .projectName {
                font-size: 1.5rem;
                font-weight: 700;
                font-family: 'Roboto';
                margin-bottom: 5px;

                @include d(sm) {
                    font-size: 1.25rem;
                }
            }

            .projectLinks {
                column-gap: 15px;
                row-gap: 15px;
                flex-wrap: wrap;
                font-size: 24px;
                color: #1A88ED;
                transition: .2s;
                margin-bottom: 10px;
                &:hover {
                    color: #0c3b66;
                }
            }

            .projectDesc {
                font-weight: 300;
                font-size: 1.15rem;
                line-height: 1.5;
                font-family: 'Roboto';
                // overflow: hidden;
                // text-overflow: ellipsis;
                // display: -webkit-box;
                // -webkit-line-clamp: 4; /* number of lines to show */
                //         line-clamp: 4; 
                // -webkit-box-orient: vertical;

                @include d(sm) {
                    font-size: 1rem;
                }
            }

            .more {
                color: #0c3b66;
                font-weight: 700;
                font-family: 'Roboto';
                font-size: 1rem;
                margin: 10px 0 30px 0;
                cursor: pointer;
                text-align: end;
                transition: .2s;
                &:hover {
                    filter: brightness(.9);
                }
            }

            .projectTags {
                row-gap: 15px;
                column-gap: 15px;
                flex-wrap: wrap;
                span {
                    background: #0c3b66;
                    color: #fff;
                    border-radius: 10px;
                    padding: 5px 15px;
                    font-weight: 700;
                    font-family: 'Roboto';
                    box-shadow: 0 0 5px rgba(0,0,0,.3);
                    white-space: nowrap;

                    @include d(sm) {
                        font-size: 14px;
                    }
                }
            }    
        }
    }
    .showMore {
        background: #1A88ED;
        border-radius: 16px;
        color: #fff;
        font-weight: 700;
        border: none;
        font-family: 'Roboto';
        padding: 5px 20px;
        font-size: 1.25rem;
        margin-top: 30px;
        transition: .2s;

        &:hover {
            filter: brightness(.9);
        }

        @include d(sm) {
            font-size: 1.15rem;
            margin-top: 20px;
        }

        @include d(xs) {
            font-size: 1rem;
            margin-top: 10px;
        }
    }
}
</style>