<script>
    import { Navigation, Pagination, Scrollbar, A11y, FreeMode,Mousewheel } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css';

    import { onMount } from 'svelte';

    import slidebg1 from "$lib/assets/slides/slide1.png"
    import star from "$lib/assets/star.svg"

    import swiper_arrow from "$lib/assets/swiper_arrow.svg"

    let count = 1 ;

    

    let slides = [
        {
            id:1,
            name:"БЫСТРО И КАЧЕСТВЕННО",
            desc:"Ребята выполнили объем работ быстро и качественно! Вопросы решаются с этой командой без проблем. Сделали все так, как планировалось сделать! Молодцы!",
            url:slidebg1,
            stars:5,
            username:"Юрий"
        },
        {
            id:2,
            name:"ВЕЖЛИВО, СОХРАНЯЮТ ПОРЯДОК",
            desc:"Компания очень хорошая, аккуратно работают, вежливы, сохраняют порядок, работящие, знают свое дело! Советую всем обращаться!",
            url:slidebg1,
            stars:5,
            username:"Ольга"
        },
        {
            id:3,
            name:"СДЕЛАЛИ НА ПЯТЁРКУ",
            desc:"О чем договорился, сделали на пятерку! Молодцы. Могут дать хороший совет, не пожалеете. Рекомендую!",
            url:slidebg1,
            stars:5,
            username:"Игорь"
        },
        {
            id:4,
            name:"ВЕЖЛИВО, СОХРАНЯЮТ ПОРЯДОК",
            desc:"Компания очень хорошая, аккуратно работают, вежливы, сохраняют порядок, работящие, знают свое дело! Советую всем обращаться!",
            url:slidebg1,
            stars:5,
            username:"Юрий"
        },
        {
            id:5,
            name:"БЫСТРО И КАЧЕСТВЕННО",
            desc:"О чем договорился, сделали на пятерку! Молодцы. Могут дать хороший совет, не пожалеете. Рекомендую!",
            url:slidebg1,
            stars:5,
            username:"Ольга"
        }
    ]
    let slidesLenght2 = slides.length
    let innerWidth



    let swiper
    let slideper
    let spaceBetween


    onMount(()=>{
        swiper = true
    })
    $:{
        if(innerWidth > 1180){
            slideper = 2;
            spaceBetween = -220
        }
        else if (innerWidth <= 1180 && innerWidth >800){
            slideper = 2;
            spaceBetween=20;
        }
        else if(innerWidth < 800){
            slideper = 1
            spaceBetween = 10
        }
    }
</script>

<svelte:window bind:innerWidth={innerWidth}/>
{#if swiper}
<div id="reviews" class="slider reviews">


    <button class="prev1 swiper_btn" class:disable={count<=1} on:click={()=>{ count > 1 ? count-- : count }}><img src="{ swiper_arrow }" alt=""></button>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar,Mousewheel]}
    spaceBetween={ spaceBetween }
    slidesPerView={ slideper }
    navigation = {
        {nextEl: '.next1',
        prevEl: ".prev1",}
    }
    scrollbar={{ draggable: false }}
    simulateTouch={false}
    
    >
       
        {#each slides as slide (slide.id)}
            <SwiperSlide>
                <div class="slider_content">
                    <div class="">
                        <p class="header3">{slide.name}</p>
                        <p class="main_sm_18">{slide.desc}</p>
                    </div>
                    <div class="user">
                        <div class="avatar">
                            <div class="">
                                <img src="" alt="">
                            </div>
                            <p class="main_sm_14">{slide.username}</p>
                        </div>  
                        <div class="stars">
                            {#each {length: 5} as _ , i}
                                <img src="{star}" class:gray_star={ slide.stars<=i }>
                            {/each}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        {/each}
       
        
        
    </Swiper>
    <button class="next1 swiper_btn" on:click={()=>{ count < slidesLenght2 ? count++ : count }} class:disable={count > (slidesLenght2-2)}><img src="{ swiper_arrow }" alt=""></button>
</div>
{/if}

<style lang="less">
    .slider_content{
        width: 450px;
        height: 402px;
        background: var(--Neutral_150);
        padding: 32px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid var(--Neutral_300);
        @media (max-width:1080px) {
            width: 100%;
        }
        @media (max-width:800px) {
            height: 300px;
            width: 100%;
        }
        @media (max-width:430px) {
            height: fit-content;
        }
        
    }
    .header3{
        margin-bottom: 12px;
    }
    .slider{
        width: 100%;
        position: relative;
        margin-top: 20px;
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
        border: 1px solid var(--Neutral_300);
        @media (max-width:800px) {
            display:none;
        }
        
    }
    .swiper_btn img{
        height: 20px;
        width: 20px;
    }
    .prev1{
        margin-left: 12px;
    }
    .prev1 img{
        rotate: -180deg;
    }
    .next1{
        right: 0;
        margin-right: 58px;
        @media (max-width:1080px) {
            margin-right: 12px;
        }
    }
    .user{
        display: flex;
        align-items: center;
        border-top: 1px solid var(--Neutral_300);
        width: 100%;
        padding-top: 12px;
        justify-content: space-between;
        @media (max-width:800px) {
            margin-top: 20px;
        }
    }
    .avatar{
        display: flex;
        align-items: center;
        column-gap: 12px;
  
    }
    .avatar div{
        width: 48px;
        height: 48px;
        border-radius: 50px;
        background: var(--Neutral_300);
    }
    .gray_star{
        fill: #a0a0a0;
        filter: invert(60%) sepia(0%) saturate(6748%) hue-rotate(19deg) brightness(106%) contrast(90%);
    }
    .stars{
        display: flex;
    }
    .reviews :global(.swiper-slide:not(.swiper-slide-active,.swiper-slide-next)){
        opacity: 0.3;
        z-index: -1;
        transition: all .2s ease-out;
    }
    .slider{
        overflow: hidden;
    }
    :global(.swiper-button-disabled){
        background: var(--Neutral_300) !important;
        pointer-events: none !important;
        transition: all .2s ease-out !important;
    }
</style>
