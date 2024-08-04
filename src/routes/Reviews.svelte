<script>
    import { Navigation, Pagination, Scrollbar, A11y, FreeMode,Mousewheel } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css';

    import { onMount } from 'svelte'
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    import { t, locale, locales } from "$lib/client/i18n";

    import slidebg1 from "$lib/assets/slides/slide1.webp"
    import star from "$lib/assets/star.svg"

    import swiper_arrow from "$lib/assets/swiper_arrow.svg"

    let count = 1 ;


    let innerWidth



    let swiper
    let slideper
    let spaceBetween

    let isInView = false;

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
<div id="reviews" class="slider reviews"
use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
on:change={({ detail }) => {
    isInView = detail.inView;
}}
>


    <button class="prev1 swiper_btn" ><img src="{ swiper_arrow }" alt=""></button>
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
       
        {#each $t("reviews")["slides"] as slide , index}
            <SwiperSlide>
                {#key isInView}
                    <div class="slider_content"  class:hidden={!isInView} in:fly={{duration:800,delay:600-50*index,y:50}}>
                        <div class="">
                            <p class="header3">{slide["name"]}</p>
                            <p class="main_sm_18">{slide["desc"]}</p>
                        </div>
                        <div class="user">
                            <div class="avatar">
                                <p class="main_sm_14">{slide["username"]}</p>
                            </div>  
                            <div class="stars">
                                {#each {length: 5} as _ , i}
                                    <img src="{star}" class:gray_star={ slide["stars"]<=i }>
                                {/each}
                            </div>
                        </div>
                    </div>
                {/key}
            </SwiperSlide>
        {/each}
       
        
        
    </Swiper>
    <button class="next1 swiper_btn"><img src="{ swiper_arrow }" alt=""></button>
</div>
{/if}

<style lang="less">
    .hidden{
        opacity: 0;
    }
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
        opacity: 0;
        z-index: -1;
    }
</style>
