<script>
    import { Navigation, Pagination, Scrollbar, A11y, FreeMode,Mousewheel } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css';

    import slidebg1 from "$lib/assets/slide1.png"
    import slidebg2 from "$lib/assets/slide2.png"
    import slidebg3 from "$lib/assets/slide3.png"
    import swiper_arrow from "$lib/assets/swiper_arrow.svg"

    let countSlide = 1 ;

    

    let slides = [
        {
            id:1,
            name:"ДЕРЕВЯННЫЕ ДОМА",
            url:slidebg1 
        },
        {
            id:2,
            name:"ПАНЕЛЬНО-КАРКАСНЫЕ ДОМА",
            url:slidebg2
        },
        {
            id:3,
            name:"ГАЗО И ПЕНОБЕТОННЫЕ ДОМА",
            url:slidebg3
        },
        {
            id:4,
            name:"ДЕРЕВЯННЫЕ ДОМА",
            url:slidebg1 
        },
        {
            id:5,
            name:"ПАНЕЛЬНО-КАРКАСНЫЕ ДОМА",
            url:slidebg2
        },
        {
            id:6,
            name:"ГАЗО И ПЕНОБЕТОННЫЕ ДОМА",
            url:slidebg3

        },
        {
            id:7,
            name:"ГАЗО И ПЕНОБЕТОННЫЕ ДОМА",
            url:slidebg3

        },
        {
            id:8,
            name:"ГАЗО И ПЕНОБЕТОННЫЕ ДОМА",
            url:slidebg3

        },
        {
            id:9,
            name:"ГАЗО И ПЕНОБЕТОННЫЕ ДОМА",
            url:slidebg3

        },
        {
            id:10,
            name:"ГАЗО И ПЕНОБЕТОННЫЕ ДОМА",
            url:slidebg3

        },
        {
            id:11,
            name:"ГАЗО И ПЕНОБЕТОННЫЕ ДОМА",
            url:slidebg3

        },
    ]
    let slidesLenght = slides.length

    let pagLength = Math.round(slidesLenght/3);
    $: console.log(countSlide)
</script>
<div class="slider">

    <div class="pag_line">
        {#each {length: pagLength} as _ , i}
            <div class="pag" >
            </div>
        {/each}
    </div>


    <button class="prev swiper_btn" class:disable={countSlide<=1} on:click={()=>{ countSlide > 1 ? countSlide-- : countSlide }}><img src="{ swiper_arrow }" alt=""></button>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar,Mousewheel]}
    spaceBetween={ 10 }
    slidesPerView={ 3.1 }
    navigation = {
        {nextEl: '.next',
        prevEl: ".prev",}
    }
    scrollbar={{ draggable: false }}
    pagination={{ clickable: true }}
    simulateTouch={false}
    
    >
       
        {#each slides as slide (slide.id)}
            <SwiperSlide>
                <div class="slider_content">
                    <img class="slide_bg" src="{ slide.url }" alt="">
                </div>
            </SwiperSlide>
        {/each}
       
        
        
    </Swiper>
    <button class="next swiper_btn" on:click={()=>{ countSlide < slidesLenght ? countSlide++ : countSlide }} class:disable={countSlide > (slidesLenght-3)}><img src="{ swiper_arrow }" alt=""></button>
</div>

<style>
    .slider_content{
        width: 356px;
        height: 600px;
    }
    .slider{
        width: 100%;
        position: relative;
        margin-top: 40px;
    }
    .slide_bg{
        object-fit: cover;
        object-position: 50%;
        height: 100%;
        width: 100%;
        filter: brightness(60%)
    }
    .swiper_btn{
        height: 44px;
        width: 44px;
        position: absolute;
        top: 50%;
        z-index: 99;
        background-color: var(--Neutral_100);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .2s ease-out;
        
    }
    .swiper_btn img{
        height: 20px;
        width: 20px;
    }
    .prev{
        margin-left: 12px;
    }
    .prev img{
        rotate: -180deg;
    }
    .next{
        right: 0;
        margin-right: 58px;
    }
    .disable{
        opacity: 0;
        z-index: -1;
        transition: all .2s ease-out;
    }
    .pag_line{
        display: flex;
        align-items: center;
        column-gap: 8px;
        position: absolute;
        top: -40px;
        right: 50px;
    }
    .pag{
        width: 12px;
        height: 12px;
        background-color: var(--Neutral_400);
       
    }
    .pag_active{
        background-color: var(--Neutral_900);
    }
</style>
