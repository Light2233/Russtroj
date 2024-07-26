<script lang="ts">
    export let data;
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';

    import CalulatedCost from "../../CalulatedCost.svelte"
    import SwiperComponent from '../../SwiperComponent.svelte';
    import HouseStyles from '../../HouseStyles.svelte';
    import Application from '../../Application.svelte'
    import Reviews from '../../Reviews.svelte';
    import DirectorModal from '../../DirectorModal.svelte';


    import why_bg from "$lib/assets/why_bg.webp"
    import telegram_bg from "$lib/assets/tg_image.png"
    import director from "$lib/assets/director.jpg"
    import { Lazy } from "swiper";

    import { inview } from 'svelte-inview';
    import { fly } from 'svelte/transition';


    let showModal;
    let isInView1 = false;
    let isInView2 = false;
    let isInView3 = false;
    let isInView4 = false;

</script>

<DirectorModal bind:showModal url={director}/>

<svelte:head>
    <title>РУССТРОЙ - СТРОИТЕЛЬСТВО {data.content.title?.[1]}</title>
</svelte:head>

<div class="main_content">
    <section class="welcome_page pd_section"
    use:inview={{ unobserveOnEnter: true, rootMargin: '20%' }}
    on:change={({ detail }) => {
        isInView1 = detail.inView;
    }} 
    >
        {#key isInView1}
            <div class="image_block" >
                <img src="{ data.content.images[0] }" alt="" class:max_width={data.content.page!='main'} decoding="async" fetchpriority="high" class:hidden={!isInView1} in:fly={{y:400,duration:1000}}>
            </div>
        {/key}
        <div class="info_block" >
            <div class="company_info">
                <p class="main_sm_14">Компания «РУССТРОЙ» с 2009 года строит дома премиум и бизнес класса. Мы строим дома «под ключ» по различным материалам и технологиям.</p>
            </div>
            {#key isInView1}
                <div class="tagline" class:hidden={!isInView1} in:fly={{y:70,duration:1000}}>
                    <p class="tagline_title">ПОСТРОИМ {data.content.title} В СЕРБИИ ПО ГОТОВОМУ ИЛИ ИНДИВИДУАЛЬНОМУ ПРОЕКТУ</p>
                    {#if data.content.page =='main' }
                        <a href="#cost_calculation_block" class="main_black_btn">Рассчитать стоимость</a>
                    {/if}

                </div>
            {/key}
            <div class="line border1"></div>
            <div class="line border2"></div>
            
            <div class="line border3"></div>
        </div>
        
    </section>
    <section class="achievements pd_section">
        <div class="completed_projects">
            <p class="achievements_cnt">270+</p>
            <p class="main_sm_18">Выполненных объектов в России и Сербии</p>
        </div>
        <div class="achievements_border"></div>
        <div class="construction_experience">
            <p class="achievements_cnt">15 ЛЕТ</p>
            <p class="main_sm_18">Опыта в строительстве недвижимости</p>
        </div>
    </section>
    {#if data.content.page == 'main' }
    <section id="cost_calculation_block" class="cost_calculation_block pd_section">
        <h2 class="header2">Рассчитайте стоимость строительства {data.content.title[1]} самостоятельно, ответив на 6 вопросов</h2>
        <CalulatedCost slides={data.content?.questions}/>
    </section>
    {/if}
    {#if data.content.page == 'main' || data.content.page == "baths"}
    <section class="swiper_section"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-30%' }}
    on:change={({ detail }) => {
        isInView2 = detail.inView;
    }}
    >   
        {#key isInView2}
            <h2 class="header2" class:hidden={!isInView2} in:fly={{y:50,duration:1000}}>ПОСМОТРИТЕ КАТАЛОГ И ВЫБЕРИТЕ {data.content.title[0]} ВАШЕЙ МЕЧТЫ</h2>
        {/key}
        <SwiperComponent slides={data.content.slides} page={data.content.page}/>
    </section>
    {/if}
    {#if data.content.page == 'main' || data.content.page == "recreationAreas" || data.content.page == "gazebo"}
        <section class="house_styles">
            <HouseStyles stylesmodal={data.content.stylesmodal} page={data.content.page}/>
        </section>
    {/if}
    {#if data.content.page == 'pools'}
    <section class="pd_section">
        <div class="why_content">
            <div class="why_info">
                <p class="header2">ПОЧЕМУ ВЫБИРАЮТ НАС</p>
                <ul>
                    <li class="main_sm_18">Строим бассейны по лучшей цене</li>
                    <li class="main_sm_18">Наша компания работает только по договору</li>
                    <li class="main_sm_18">Мы предлагаем гибкую систему скидок для наших клиентов</li>
                    <li class="main_sm_18">Предоставляем гарантию 10 лет на все наши работы</li>
                </ul>
            </div>
            <div class="why_img">
                <img src="{ why_bg }" alt="" fetchpriority="high" decoding="async" use:lazyImage>
            </div>
        </div>
    </section>
    {/if}
    <section class="general_director pd_section" id="general_director"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
        isInView3 = detail.inView;
    }}
    >
        <div class="general_director_img_div">
            {#key isInView3}
            <div class="general_director_img" class:hidden={!isInView3} in:fly={{x:-80,duration:1000}}>
                <img src="{ director }" alt="" decoding="async" use:lazyImage fetchpriority="low">
            </div>
            {/key}
        </div>
        <div class="general_director_info">
            <p class="header3 general_director_status">Генеральный директор</p>
            <div class="">
                <p class="header2  general_director_name">ВЛАДИСЛАВ РЯБУХА</p>
                <p class="main_sm_18">Строительством я занимаюсь уже более 15 лет. За это время мне удалось сформировать сплоченный коллектив в России и Сербии, работающий по отобранным мною технологиям строительства. Я слежу за тем, чтобы каждый сотрудник совершенствовал свои навыки, за счет этого мы можем гарантировать долговечность и качество выполненных нами проектов. </p>
            </div>
            <button class="header3" on:click={()=>{showModal=true}}>Показать больше…</button>
        </div>
    </section>
    <section class="pd_section">
        <Application/>
    </section>
    <section class="reviews_section">
        <p class="header2">ОТЗЫВЫ О НАШЕЙ РАБОТЕ</p>
        <Reviews/>
    </section>
    <section class="pd_section"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
        isInView4 = detail.inView;
    }} 
    >
        <div class="telegram_content">
            {#key isInView4}
                <div class="info" class:hidden={!isInView4} in:fly={{y:100,duration:800}}>
                    <p class="header1">ПОДПИСЫВАЙТЕСЬ НА НАШ ТЕЛЕГРАМ КАНАЛ</p>
                    <p class="main_sm_18" style="color: #B2B2B2;">Чтобы наблюдать за нашими работами в режиме реального времени</p>
                    <a href="https://t.me/russtroj" class="main_black_btn" target="_blank">Перейти</a>
                </div>
                <div class="telegram_img" class:hidden={!isInView4} in:fly={{y:200,duration:1000}}>
                    <img src="{ telegram_bg }" alt="" decoding="async" use:lazyImage  fetchpriority="low">
                </div>
            {/key}
        </div>
    </section>
</div>

<style lang="less">
    /* welcome_page */

    .hidden{
        opacity: 0;
    }
    .pd_section{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 46px;
        @media (max-width:900px) {
            padding: 0 20px;
            
        }
        
    }
    .swiper_section{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 0 0 46px;
        @media (max-width:1080px) {
            padding: 0 46px;
        }
        @media (max-width:900px){
            padding: 0 20px;
        }
    }
    .reviews_section{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 0 0 46px;
        @media (max-width:1080px) {
            padding: 0 46px;
        }
        @media (max-width:900px){
            padding: 0 20px;
        }
    }
    .house_styles{
        width: 100%;
        margin: 0 auto;
    }
    .swiper_section p{
        width: 40%;
        @media (max-width:800px) {
            width: 100%;
        }
    }
    .welcome_page{
        height: 672px;
        position: relative;
        margin-top: 20px;
        max-width: unset;
        overflow: hidden;
        @media (max-width:1080px) {
            height: 500px;
        }
        @media (max-width:660px) {
            display: flex;
            flex-direction: column;
            height: fit-content;
            padding-right: 0px;
            row-gap: 12px;
            padding-left: 0px;
           
        }
    }
    .welcome_page img{
        position: absolute;
        width: fit-content;
        height: 100%;
        right: 0;
        z-index: -1;
        max-width: 700px;
        object-fit: cover;

        @media (max-width:660px) {
            position:relative;
            width: 100%;
            max-width: 100% !important;
            max-height: 320px;
        }
    }
    .image_block{
        @media (max-width:660px) {
            padding-left: 20px;
        }
    }
    .max_width{
        max-width: 450px !important;
        @media (max-width:1080px) {
            width: 35% !important;
        }
        @media (max-width:660px) {
            width: 100% !important;
        }
    }
    .info_block{
        width: 100%;
        max-width: 57.5%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        padding-bottom: 125px;
        @media (max-width:660px) {
            max-width: 100%;
            padding-top: 12px;
            border-top: 1px solid var(--Neutral_400);
            column-gap: 20px;
            row-gap: 40px;
            margin-right: 20px;
            padding-bottom: 20px;
            margin-left: 20px;
            width: unset;
        }
    }
    .company_info{
        width: 100%;
        max-width: 356px;
        position: absolute;
        top: 0;
        @media (max-width:660px) {
            position: unset;
            order: 4;
        }
    }
    .tagline{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        height: 106px;
        margin-bottom: 40px;
        @media (max-width:660px) {
            height: unset;
            margin-bottom: 0;
        }
    }
    .tagline a{
        @media (max-width:700px) {
            display: none;
        }
    }
    .line{
        content: "";
        background: var(--Neutral_300);
        width: 100%;
        height: 100%;
        height: 1px;
        position: absolute;
        @media (max-width:660px) {
            display: none;
        }
    }
    .border1{
        rotate: 90deg;
        top: 50%;
        bottom: 0;
        left: 50%;
        z-index: -2;
    }
    .border2{
        bottom: 33.4%;
        right: 2%;
        z-index: -2;
    }
    .border3{
        rotate: 151deg;
        bottom: 15%;
        right: 2%;
        z-index: -2;
        width: 400px;
        margin-right: -20px;
    }
    .tagline_title{
        font-family: "BebasNeue" !important;
        font-size: 48px;
        font-weight: 700;
        line-height: 52.8px;
        @media (max-width:900px) {
            font-size: 42px;
            line-height: 46px;
        }
        @media (max-width:800px) {
            font-size: 32px !important;
            line-height: 35px !important;
        }
    }

    /* achievements */

    .achievements{
        display: flex;
        align-items: center;
        padding: 200px 0px;
        @media (max-width:800px) {
            flex-direction: column;
            padding: 100px 20px;
            row-gap: 32px;
        }
    }
    .achievements_border{
        width: 1px;
        height: 149px;
        background-color: var(--Neutral_300);
        display: flex;
        @media (max-width:800px) {
            width: 100%;
            height: 1px;
            margin: 32px 0px 0px 0px;
        }
    }
    .completed_projects,.construction_experience{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        max-height: 149px;
        height: 100%;
        @media (max-width:580px) {
            width: 100%;
        }

    }
    .achievements_cnt{
        font-size: 144px;
        font-weight: 700;
        line-height: 158.4px;
        text-align: center;
        font-family: "BebasNeue" !important;
        @media (max-width:1080px) {
            font-size: 122px;
            line-height: 132px;
            text-align: center;
            
        }
        @media (max-width:290px) {
            font-size: 100px;
        }
        
    }
    :global(.achievements .main_sm_18){
        @media (max-width:1080px) {
            text-align: center !important;
        }
    }
    .cost_calculation_block{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @media (max-width:700px) {
            display: none;
        }
    }
    .cost_calculation_block .header2{
        text-align: center;
        max-width: 50%;
        margin-bottom: 32px;
    }

    /* general_director */  

    .general_director{
        display: flex;
        padding-top: 200px;
        padding-bottom: 200px;
        @media (max-width:900px) {
            padding-top: 100px;
            padding-bottom: 100px;
        }
        @media (max-width:800px) {
            flex-direction: column;
            row-gap: 30px;
        }

    }
    .general_director_name{
        font-weight: 600 !important;
        font-size: 42px;
        margin-bottom: 8px;
        @media (max-width:340px) {
            line-height: 40px;
        }
    }
    .general_director_img_div{
        padding-right: 57px;
        border-right: 1px solid var(--Neutral_300);
        @media (max-width:1080px) {
            padding-right: 30px;
            display: flex;
            align-items: center;
        }
        @media (max-width:800px) {
            border: none;
            justify-content: center;
            padding-right: 0;
        }
    }
    .general_director_img{
        width: 450px;
        height: 450px;
        border: 1px solid var(--Neutral_900);
        background: var(--Neutral_200);
        @media (max-width:1080px) {
            width: 350px;
            height: 350px;
        }
        @media (max-width:600px) {
            width: 280px;
            height: 280px;
        }
        
    }
    .general_director_img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .general_director_info{
        max-width: 601px;
        padding: 69px 0 40px 57px;
        @media (max-width:1080px) {
            padding: 0px 0 40px 30px;
        }
        @media (max-width:800px) {
            padding: 0;
        }
        
       
    }
    .general_director_status{
        padding-bottom: 20px;
        border-bottom: 1px solid var(--Neutral_300);
        margin-bottom: 20px;
    }
    .general_director_info div{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }
    .general_director_info button{
        margin-top: 20px;
        color: var(--Neutral_400);
        cursor: pointer;
        display: flex;

    }
    .general_director_info button:hover{
        color: var(--Neutral_500);
    }
    .general_director_info button:active{
        color: var(--Neutral_600);
    }

    /* telegram_content */

    .telegram_content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 20px;
        margin-top: 200px;
        margin-bottom: 200px;
        @media (max-width:800px) {
            flex-direction: column;
            row-gap: 40px;
            margin-top: 100px;
            margin-bottom: 100px;
        }
    }
    .telegram_img{
        @media (max-width:600px) {
            width: 280px;
            height: 280px;
        }
        @media (max-width:300px) {
            width: 100%;
        }
    }
    .telegram_content .info{
        max-width: 465px;
        
    }
    .telegram_content .main_black_btn{
        margin-top: 24px;
        display: flex;
        font-family: 'Inter';
    }

    .swiper_section{
        overflow: hidden;
    }

    /* Pools block */ 

    .why_content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 40px;
        @media (max-width:800px) {
            flex-direction: column-reverse;
            row-gap: 40px;
        }
    }
    .why_img{
        width: 638px;
        max-height: 398px;
        height: 100%;
        @media (max-width:800px) {
            width: 100%;
            max-height: 400px;
        }
    }
    .why_img img{
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        height: 100%;
        @media (max-width:800px) {
            width: 100%;
            max-height: 400px;
        }
        @media (max-width:400px) {
           height: 300px;
        }
    }
    .why_info{
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        @media (max-width:800px) {
            width: 100%;
        }
    }
    .why_info ul{
        width: 80%;
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        list-style: outside;
        margin-left: 25px;
        @media (max-width:800px) {
            width: 90%;
            margin-left: 20px;
        }
    }
    .why_info ul li{
        @media (max-width:400px) {
            font-size: 14px !important;
        }
       
    }
    .why_info .header2{
        font-weight: 600;
    }
    
</style>