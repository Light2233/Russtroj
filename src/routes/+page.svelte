<script>
    import welcome_page_bg from '$lib/assets/welcome_page_bg.png'

    import CalulatedCost from "./CalulatedCost.svelte"
    import SwiperComponent from './SwiperComponent.svelte';
    import HouseStyles from './HouseStyles.svelte';
    import Application from './Application.svelte'
    import Reviews from './Reviews.svelte';

    import telegram_bg from "$lib/assets/tg_image.png"
    import director from "$lib/assets/director.jpg"
</script>

<div class="main_content">
    <section class="welcome_page pd_section">
        <div class="image_block">
            <img src="{ welcome_page_bg }" alt="">
        </div>
        <div class="info_block">
            <div class="company_info">
                <p class="main_sm_14">Компания «РУССТРОЙ» с 2009 года строит дома премиум и бизнес класса. Мы строим дома «под ключ» по различным материалам и технологиям.</p>
            </div>
            <div class="tagline">
                <p class="tagline_title">ПОСТРОИМ ДОМ В СЕРБИИ ПО ГОТОВОМУ ИЛИ ИНДИВИДУАЛЬНОМУ ПРОЕКТУ</p>
                <button class="main_black_btn">Рассчитать стоимость</button>
            </div>
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
    <section class="cost_calculation_block pd_section">
        <p class="header2">Рассчитайте стоимость строительства вашего дома самостоятельно, ответив на 6 вопросов</p>
        <CalulatedCost/>
    </section>
    <section class="swiper_section">
        <p class="header2">ПОСМОТРИТЕ КАТАЛОГ И ВЫБЕРИТЕ ДОМ ВАШЕЙ МЕЧТЫ</p>
        <SwiperComponent/>
    </section>
    <section class="house_styles">
        <HouseStyles/>
    </section>
    <section class="general_director pd_section">
        <div class="general_director_img_div">
            <div class="general_director_img">
                <img src="{ director }" alt="">
            </div>
        </div>
        <div class="general_director_info">
            <p class="header3 general_director_status">Генеральный директор</p>
            <div class="">
                <p class="header2  general_director_name">ВЛАДИСЛАВ РЯБУХА</p>
                <p class="main_sm_18">Строительством я занимаюсь уже более 15 лет. За это время мне удалось сформировать сплоченный коллектив в России и Сербии, работающий по отобранным мною технологиям строительства. Я слежу за тем, чтобы каждый сотрудник совершенствовал свои навыки, за счет этого мы можем гарантировать долговечность и качество выполненных нами проектов. </p>
            </div>
            <button class="header3">Показать больше…</button>
        </div>
    </section>
    <section class="pd_section">
        <Application/>
    </section>
    <section class="reviews_section">
        <p class="header2">ОТЗЫВЫ О НАШЕЙ РАБОТЕ</p>
        <Reviews/>
    </section>
    <section class="pd_section">
        <div class="telegram_content">
            <div class="info">
                <p class="header1">ПОДПИСЫВАЙТЕСЬ НА НАШ ТЕЛЕГРАМ КАНАЛ</p>
                <p class="main_sm_18" style="color: #B2B2B2;">Чтобы наблюдать за нашими работами в режиме реального времени</p>
                <a href="https://t.me/russtroj" class="main_black_btn">Перейти</a>
            </div>
            <div class="telegram_img">
                <img src="{ telegram_bg }" alt="">
            </div>
        </div>
    </section>
</div>

<style lang="less">
    /* welcome_page */

    .pd_section{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 46px;
        
    }
    .swiper_section{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 0 0 46px;
    }
    .reviews_section{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 0 0 46px;
    }
    .house_styles{
        max-width: 1200px;
        margin: 0 auto;
    }
    .swiper_section p{
        width: 40%;
    }
    .welcome_page{
        height: 672px;
        position: relative;
        margin-top: 20px;
    }
    .welcome_page img{
        position: absolute;
        width: fit-content;
        height: 100%;
        right: 0;
        z-index: -1;
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
    }
    .company_info{
        width: 100%;
        max-width: 356px;
        position: absolute;
        top: 0;
    }
    .tagline{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        height: 106px;
    }
    .line{
        content: "";
        background: var(--Neutral_300);
        width: 680px;
        height: 1px;
        position: absolute;
    }
    .border1{
        rotate: 90deg;
        top: 50%;
        bottom: 0;
        left: 47%;
        max-width: 672px;
        z-index: -2;
    }
    .border2{
        bottom: 33.4%;
        right: 2%;
        z-index: -2;
    }
    .border3{
        bottom: 12%;
        rotate: 151deg;
        right: 5%;
        transform: translateX(-12%);
        max-width: 414px;
        z-index: -2;
    }
    .tagline_title{
        font-family: "BebasNeue" !important;
        font-size: 48px;
        font-weight: 700;
        line-height: 52.8px;
    }

    /* achievements */

    .achievements{
        display: flex;
        align-items: center;
        padding: 200px 0px;
    }
    .achievements_border{
        width: 1px;
        height: 149px;
        background-color: var(--Neutral_300);
        display: flex;
    }
    .completed_projects,.construction_experience{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        max-height: 149px;
        height: 100%;

    }
    .achievements_cnt{
        font-size: 144px;
        font-weight: 700;
        line-height: 158.4px;
        text-align: center;
        font-family: "BebasNeue" !important;

    }
    .cost_calculation_block{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
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

    }
    .general_director_img_div{
        padding-right: 57px;
        border-right: 1px solid var(--Neutral_300);
    }
    .general_director_img{
        width: 450px;
        height: 450px;
        border: 1px solid var(--Neutral_900);
        background: var(--Neutral_200);
    }
    .general_director_img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .general_director_info{
        max-width: 601px;
        padding: 69px 0 40px 57px;
       
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

    /* telegram_content */

    .telegram_content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 20px;
        margin-top: 200px;
        margin-bottom: 200px;
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
</style>