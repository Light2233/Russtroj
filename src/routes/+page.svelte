<script>
    import welcome_page_bg from '$lib/assets/welcome_page_bg.png'
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
    </section>
</div>

<style>
    /* welcome_page */

    .pd_section{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 46px;
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
        font-family: "Bebas Neue", sans-serif;
        font-size: 28px;
        font-weight: 700;
        line-height: 35.8px;
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
        row-gap: 24px;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        max-height: 149px;
        height: 100%;

    }
    .achievements_cnt{
        font-size: 120px;
        font-weight: 700;
        line-height: 101.4px;
        text-align: center;
        font-family: "Bebas Neue", sans-serif;
        font-style: normal;
        font-stretch: ultra-condensed;
    }
    
    .cost_calculation_block{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cost_calculation_block .header2{
        text-align: center;
        max-width: 70%;
        margin-bottom: 32px;
    }
</style>