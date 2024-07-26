<script lang="ts">
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
    import application_bg from "$lib/assets/application_bg.webp"
    import close_application from "$lib/assets/close_application.svg"

    import { imask } from '@imask/svelte';
    import { inview } from 'svelte-inview';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    const options = {
        mask: '{+7} (000) 000-00-00',
        lazy: true
    };
    let isInView = false;
    let value = '';
    let files
    let input

</script>
<div class="application"
use:inview={{ unobserveOnEnter: true, rootMargin: '-25%' }}
    on:change={({ detail }) => {
        isInView = detail.inView;
    }}
>
    <div class="application_img">
        {#key isInView}
            <div class="application_img_left image-part" class:hidden={!isInView} in:fly={{y:-200,duration:1200,easing: quintOut }} >
                <img src="{ application_bg }" alt="" data-src="{ application_bg }" use:lazyImage={{ threshold: 0.5 }} decoding="async" >
            </div>
            <div class="application_img_right image-part" in:fly={{y:200,duration:1200,easing: quintOut }}>
                <img src="{ application_bg }" alt="" data-src="{ application_bg }" use:lazyImage={{ threshold: 0.5 }} decoding="async" class:hidden={!isInView} >
            </div>
        {/key}
    </div>
    {#key isInView}
        <form action="" class:hidden={!isInView} in:fly={{y:70,duration:1000}}>
            <p class="header1">РАСЧИТАЕМ СТОИМОСТЬ ПО ВАШЕМУ ПРОЕКТУ ЗА 2 МИНУТЫ</p>
            <div class="">
                <p class="header3">НОМЕР ТЕЛЕФОНА</p>
                <input type="tel" required class="main_sm_14" placeholder="+7 (900) 000-00-00" bind:value={value}
                use:imask={options}>
            </div>
            <div class="">
                <div class="project" class:unloaded={files}>
                    <div class="">
                        
                        <input type="file" name="" id="project" bind:files bind:this={input} class:desabled={files}>
                        <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" fill='white' class:white={files}>
                            <path d="M15.76 22.25H9.23998C4.32998 22.25 2.22998 20.15 2.22998 15.24V15.11C2.22998 10.67 3.97998 8.53 7.89998 8.16C8.29998 8.13 8.67998 8.43 8.71998 8.84C8.75998 9.25 8.45998 9.62 8.03998 9.66C4.89998 9.95 3.72998 11.43 3.72998 15.12V15.25C3.72998 19.32 5.16998 20.76 9.23998 20.76H15.76C19.83 20.76 21.27 19.32 21.27 15.25V15.12C21.27 11.41 20.08 9.93 16.88 9.66C16.47 9.62 16.16 9.26 16.2 8.85C16.24 8.44 16.59 8.13 17.01 8.17C20.99 8.51 22.77 10.66 22.77 15.13V15.26C22.77 20.15 20.67 22.25 15.76 22.25Z" fill="#161616"/>
                            <path d="M12.5 15.63C12.09 15.63 11.75 15.29 11.75 14.88V2C11.75 1.59 12.09 1.25 12.5 1.25C12.91 1.25 13.25 1.59 13.25 2V14.88C13.25 15.3 12.91 15.63 12.5 15.63Z" fill="#161616"/>
                            <path d="M12.5001 16.75C12.3101 16.75 12.1201 16.68 11.9701 16.53L8.62009 13.18C8.33009 12.89 8.33009 12.41 8.62009 12.12C8.91009 11.83 9.39009 11.83 9.68009 12.12L12.5001 14.94L15.3201 12.12C15.6101 11.83 16.0901 11.83 16.3801 12.12C16.6701 12.41 16.6701 12.89 16.3801 13.18L13.0301 16.53C12.8801 16.68 12.6901 16.75 12.5001 16.75Z" fill="#161616"/>
                        </svg>
                        {#if !files}
                            
                            <p class="main_sm_14" class:white={files} > "Загрузите проект"</p>
                        {/if}
                        {#if files}
                            <p class="main_sm_14" class:white={files}>{files[0].name}</p>
                            <img src="{ close_application }" alt="" on:click={() => {input.value = '' ; files = null}} class='app_close'>
                        {/if}   
                    </div>
                    
                    
                </div>
                <p class="main_sm_14 gray">Если у вас уже есть смета на строительство в 95% случаев мы предлагаем меньшую стоимость и без потери качества</p>
            </div>
            <div class="">
                <button class="main_black_btn">Оставить заявку</button>
                <p class="main_sm_14 gray">Мы свяжемся с вами в ближайшее время</p>
            </div>
        </form>
    {/key}
</div>

<style lang="less">
    .desabled{
        z-index: -1;
        opacity: 0;
        pointer-events: none;
    }
    .app_close{
        z-index: 9999;
        cursor: pointer;
    }
    .hidden{
        opacity: 0;
    }
    .application{
        padding: 40px;
        background: var(--Neutral_150);
        border: 1px solid var(--Neutral_300);
        display: flex;
        column-gap: 40px;
        margin-bottom: 200px;
        overflow: hidden;
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
    .unloaded{
        background: black;
        cursor: default;
    }
    .white path{
        fill: white;
        color: white;
    }
    .white{
        color: white;
    }
</style>