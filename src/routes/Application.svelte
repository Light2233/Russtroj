<script>
    import application_bg from "$lib/assets/application_bg.png"
    import application_unload from "$lib/assets/application_unload.svg"
</script>
<div class="application">
    <div class="application_img">
        <div class="application_img_left image-part">
            <img src="{ application_bg }" alt="">
        </div>
        <div class="application_img_right image-part" >
            <img src="{ application_bg }" alt="">
        </div>
    </div>
    <form action="">
        <p class="header1">РАСЧИТАЕМ СТОИМОСТЬ ПО ВАШЕМУ ПРОЕКТУ ЗА 2 МИНУТЫ</p>
        <div class="">
            <p class="header3">НОМЕР ТЕЛЕФОНА</p>
            <input type="tel" name="" id="" required class="main_sm_14" placeholder="+7 (900) 000-00-00">
        </div>
        <div class="">
            <div class="project">
                <div class="">
                    <img src="{ application_unload }" alt="">
                    <p class="main_sm_14">Загрузите проект</p>
                </div>
                
                <input type="file" name="" id="project">
            </div>
            <p class="main_sm_14 gray">Если у вас уже есть смета на строительство в 95% случаев мы предлагаем меньшую стоимость и без потери качества</p>
        </div>
        <div class="">
            <button class="main_black_btn">Оставить заявку</button>
            <p class="main_sm_14 gray">Мы свяжемся с вами в ближайшее время</p>
        </div>
    </form>
</div>

<style>
    .application{
        padding: 40px;
        background: var(--Neutral_150);
        border: 1px solid var(--Neutral_300);
        display: flex;
        column-gap: 40px;
    }
    form{
        max-width: 50%;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        row-gap: 40px;
    }
    form  input{
        border: 1px solid var(--Neutral_600);
        color: var(--Neutral_900);
        padding: 16px;
        border-radius: 0;
    }
    form input:focus{
        border: 1px solid var(--Neutral_900);
        border-radius: 0;
        outline: none;
    }
    .gray{
        color: var(--Neutral_400);
        text-align: center;
    }
    .application_img{
        display: flex;
        column-gap: 20px;
        width: 100%;
        max-width: 47%;
    }
    .image-part{
        height: 556px;
        max-height: 476px;
        width: 50%;
        overflow: hidden;
        position: relative;
        object-fit: cover;
        
    }
    .image-part img{
        width: 584px;
        height: 656px;
    }
    .application_img_right{
        margin-top: 80px;
    }
    .application_img_left img{
        position: absolute;
        left: -20%;
    }
    .application_img_right img{
        position: absolute;
        left: -130%;
        top: -16%;

    }
    form input{
        width: 100%;
    }
    .main_black_btn{
        max-width: 100%;
        width: 100%;
        margin-bottom: 12px;
    }
    input[type="tel"]{
        margin-top: 8px;
    }
    input[type="file"]{
        margin-bottom: 12px;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .project{
        position: relative;
        height: 48px;
        width: 100%;
        margin-bottom: 8px;
        color: var(--Neutral_900);
        border-radius: 0;
        border: 1px var(--Neutral_900) dashed;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .project div{
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
    .project img{
        width: 24px;
        height: 24px;
    }
</style>