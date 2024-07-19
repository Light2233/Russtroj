<script>
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
    import application_bg from "$lib/assets/application_bg.webp"
    import application_unload from "$lib/assets/application_unload.svg"

    import { imask } from '@imask/svelte';

    const options = {
        mask: '{+7} (000) 000-00-00',
        lazy: true
    };

    let value = '';
</script>
<div class="application">
    <div class="application_img">
        <div class="application_img_left image-part">
            <img src="{ application_bg }" alt="" data-src="{ application_bg }" use:lazyImage={{ threshold: 0.5 }} decoding="async">
        </div>
        <div class="application_img_right image-part" >
            <img src="{ application_bg }" alt="" data-src="{ application_bg }" use:lazyImage={{ threshold: 0.5 }} decoding="async">
        </div>
    </div>
    <form action="">
        <p class="header1">РАСЧИТАЕМ СТОИМОСТЬ ПО ВАШЕМУ ПРОЕКТУ ЗА 2 МИНУТЫ</p>
        <div class="">
            <p class="header3">НОМЕР ТЕЛЕФОНА</p>
            <input type="tel" required class="main_sm_14" placeholder="+7 (900) 000-00-00" bind:value={value}
            use:imask={options}>
        </div>
        <div class="">
            <div class="project">
                <div class="">
                    <img src="{ application_unload }" alt="" data-src="{ application_unload }" decoding="async" fetchpriority="high">
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

<style lang="less">
    .application{
        padding: 40px;
        background: var(--Neutral_150);
        border: 1px solid var(--Neutral_300);
        display: flex;
        column-gap: 40px;
        margin-bottom: 200px;
        @media (max-width:800px) {
            flex-direction: column;
            row-gap: 40px;
            justify-content: center;
            align-items: center;
        }
        @media (max-width:400px) {
            border: none;
            background: none;
            padding: 0;
            margin-bottom: 100px;
        }
    }
    form{
        max-width: 50%;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        row-gap: 40px;
        @media (max-width:800px) {
            max-width: 100%;
        }
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
        @media (max-width:800px) {
            max-width: 100%;
        }
    }
    .image-part{
        height: 556px;
        max-height: 476px;
        width: 50%;
        overflow: hidden;
        position: relative;
        object-fit: cover;
        @media (max-width:800px) {
            height: 322px;
        }
        
    }
    .image-part img{
        width: 584px;
        height: 656px;
        @media (max-width:500px) {
            width: 400px;
            height: 500px;
        }
    }
    .application_img_right{
        margin-top: 80px;
    }
    .application_img_left img{
        position: absolute;
        left: -20%;
        @media (max-width:800px) {
            left: 0;

        }
    }
    .application_img_right img{
        position: absolute;
        left: -130%;
        top: -16%;
        @media (max-width:800px) {
            left: -110%;
            top: -25%;
        }
        

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
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    input[type="file"]::file-selector-button{
        display: none;
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