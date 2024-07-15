<script >
    import { Navigation, Pagination, Scrollbar, A11y, FreeMode,Mousewheel } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
    import { onMount } from 'svelte';
    import 'swiper/css';
    import 'swiper/css/pagination';

    
    import swiper_arrow from "$lib/assets/swiper_arrow.svg"

    import HouseStyleModal from './HouseStyleModal.svelte';
    let innerWidth
    let countSlide = 1 ;
    let slideper
    let spaceBetween
    let swiper 
    onMount(()=>[
        swiper = true
    ])
    $:{
        if(innerWidth > 1180){
            slideper = 3;
            spaceBetween = -20
        }
        else if(innerWidth <= 1080 && innerWidth>800){
            slideper = 3;
            spaceBetween=20;
        }
        else if(innerWidth <= 800){
            slideper = 2;
            spaceBetween = 20
        }
    }
    
    export let page;
    export let slides;
    let slidesLenght = slides.length
    let showModal = false
    let houseName = ''
    let pagLength = Math.round(slidesLenght/3);

    let name = ""

   
</script>

<svelte:window bind:innerWidth={innerWidth}/>
<HouseStyleModal bind:showModal style_name={houseName} stylesmodal={slides}/>

{#if swiper}
<div class="slider">

    <button class="prev swiper_btn" class:disable={countSlide<=1} on:click={()=>{ countSlide > 1 ? countSlide-- : countSlide }}><img src="{ swiper_arrow }" alt=""></button>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar,Mousewheel]}
    spaceBetween={ spaceBetween }
    slidesPerView={  slideper }
    navigation = {
        {nextEl: '.next',
        prevEl: ".prev",}
    }
    scrollbar={{ draggable: false }}
    pagination={{ 
        clickable: false,
    }}
    simulateTouch={false}
    
    >
       
        {#each slides as slide, index}
            <SwiperSlide>
                <button class="slider_content" on:click={()=>{if(page=='main'){ houseName = slide.name ; showModal=true;}}}>
                    <p class="header2">{ slide.name }</p>
                    <img class="slide_bg" src="{ slide.urlModal }" alt="" data-src="{ slide.urlModal }" use:lazyImage={{ threshold: 0.5 }}>
                    {#if page == 'main'}
                        <button class="main_white_btn main_sm_14">Подробнее</button>
                    {/if}
                </button>
            </SwiperSlide>
        {/each}
       
        
        
    </Swiper>
    <button class="next swiper_btn" on:click={()=>{ countSlide < slidesLenght ? countSlide++ : countSlide }} class:disable={countSlide > (slidesLenght-3)}><img src="{ swiper_arrow }" alt=""></button>
</div>
{/if}

<style lang="less">
    .slider_content{
        width: 356px;
        height: 600px;
        cursor: pointer;
        @media (max-width:1080px) {
            max-width: 280px;
            max-height: 500px;
            width: 100%;
        }
        @media (max-width:800px) {
            max-width: 100%;
        }
        @media (max-width:600px) {
          max-height: 400px;
        }
        
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
        filter: brightness(60%);
        transform: translateZ(0);
        pointer-events: none;
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
        @media (max-width:600px) {
            width: 30px;
            height: 30px;
        }
        
    }
    .swiper_btn img{
        height: 20px;
        width: 20px;
        pointer-events: none;
        @media (max-width:600px) {
           width: 12px;
           height: 12px;
        }
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
        @media (max-width:1080px) {
            margin-right: 12px;
        }
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
    .slider_content button{
        position: absolute;
        bottom: 0;
        margin: 20px;
        opacity: 0;
        left: 0;
    }
    .slider_content:hover button{
        opacity: 1;

    }
    .slider_content p{
        position: absolute;
        z-index: 2;
        color: var(--Neutral_100);
        padding: 20px;
        text-align: start;
    }
    :global(.swiper){
        overflow: visible;
        @media (max-width:800px) {
            overflow: hidden;
        }
    }
    :global(.swiper-pagination){
        position: absolute;
        top:-40px;
        text-align: end;
        z-index: -1;
    }
    :global(.swiper-pagination-bullet){
        width: 12px;
        height: 12px;
        border-radius: 0px;
        background: var(--Neutral_400);
    }
    :global(.swiper-pagination-bullet-active){
        background: var(--Neutral_900);
    }
    :global(.swiper-button-disabled){
        background: var(--Neutral_300) !important;
        pointer-events: none !important;
        transition: all .2s ease-out !important;
    }
</style>
