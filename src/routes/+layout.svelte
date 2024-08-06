<script lang="ts">
    import '../app.css'

    import logo from '$lib/assets/logo.svg'
    import footer_bg from "$lib/assets/footer_bg.jpg"
    import tg from '$lib/assets/tg.svg'
    import ws from '$lib/assets/watsap.svg'
    import kewate_logo from '$lib/assets/kewate_logo.svg'
    import arrow_down from "$lib/assets/arrow_down.svg"
    import favicon from "$lib/assets/russtroj.ico"

    import DropdownMenu from './DropdownMenu.svelte'
    import CheckOutOrderModal from './CheckOutOrderModal.svelte'
    import HamburgerMenu from './BurgerMenu.svelte';
    import { t, locale, locales } from "$lib/client/i18n";
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
    import BurgerMenu from './BurgerMenu.svelte';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    import { enhance } from '$app/forms'
    import langStore from '$lib/client/localstore'
    import PostApplicationModal from './PostApplicationModal.svelte';

    import { page } from '$app/stores';

    export let data;

    let showModal;
    let innerWidth;
    let dropMenu = false;
    let importbl = false;
    let isInView = false;
    let headerAnim = false;
    let langSwitch = false;
    onMount(()=>{
        importbl = true;
        headerAnim = true;
    })

    import { imask } from '@imask/svelte';
    import { slide } from 'svelte/transition';

    const options = {
        mask: '{+0} (000) 000-00-00',
        lazy: true
    };

    let value = '';
    let lang;
    langStore.subscribe(value => {
        lang = value;
        locale.set(lang);
    });

    const switchLanguage = () => {
        const newLang = lang === 'ru' ? 'en' : 'ru';
        langStore.set(newLang);
    };
</script>
{#if data.success}
    <PostApplicationModal bind:data={data.fromBlock} bind:showModal={data.success}/>
{/if}

<CheckOutOrderModal bind:showModal />

<svelte:head>
    <link rel="icon" href="{favicon}">
    <meta name="keywords" content="Построить дом в Сербии, Построить дом в Белграде, Построить дом в Нови-Саде, Кровельные работы в Сербии, Кровельные работы в Белграде, Кровельные работы в Нови-Саде, Бетонные работы в Сербии, Бетонные работы в Белграде, Бетонные работы в Нови-Саде, Мойка черепицы в Сербии, Мойка черепицы в Белграде, Мойка черепицы в Нови-Саде, Строительство коттеджей в Сербии, Строительство коттеджей в Белграде, Строительство коттеджей в Нови-Саде, Деревянные дома в Сербии, Деревянные дома в Белграде, Деревянные дома в Нови-Саде, Панельно-каркасные дома в Сербии, Панельно-каркасные дома в Белграде, Панельно-каркасные дома в Нови-Саде, Кирпичные дома в Сербии, Кирпичные дома в Белграде, Кирпичные дома в Нови-Саде, Газобетонные дома в Сербии, Газобетонные дома в Белграде, Газобетонные дома в Нови-Саде, Облицовка фасадов в Сербии, Облицовка фасадов в Белграде, Облицовка фасадов в Нови-Саде, Демонтажные работы в Сербии, Демонтажные работы в Белграде, Демонтажные работы в Нови-Саде, Укладка террасной доски в Сербии, Укладка террасной доски в Белграде, Укладка террасной доски в Нови-Саде, Строительство каминов в Сербии, Строительство каминов в Белграде, Строительство каминов в Нови-Саде, Услуги штукатура в Сербии, Услуги штукатура в Белграде, Услуги штукатура в Нови-Саде, Услуги каменщика в Сербии, Услуги каменщика в Белграде, Услуги каменщика в Нови-Саде, Бетонные фундаменты в Сербии, Бетонные фундаменты в Белграде, Бетонные фундаменты в Нови-Саде, Строительство бассейнов в Сербии, Строительство бассейнов в Белграде, Строительство бассейнов в Нови-Саде, Ремонт черепицы в Сербии, Ремонт черепицы в Белграде, Ремонт черепицы в Нови-Саде, Укладка кирпича в Сербии, Укладка кирпича в Белграде, Укладка кирпича в Нови-Саде, Облицовка камнем в Сербии, Облицовка камнем в Белграде, Облицовка камнем в Нови-Саде, Армирование бетона в Сербии, Армирование бетона в Белграде, Армирование бетона в Нови-Саде, Монтаж кровли в Сербии, Монтаж кровли в Белграде, Монтаж кровли в Нови-Саде, Строительство бань в Сербии, Строительство бань в Белграде, Строительство бань в Нови-Саде, Монолитные работы в Сербии, Монолитные работы в Белграде, Монолитные работы в Нови-Саде, Фасадные работы в Сербии, Фасадные работы в Белграде, Фасадные работы в Нови-Саде, Строительство гаражей в Сербии, Строительство гаражей в Белграде, Строительство гаражей в Нови-Саде, Отделка фасадов в Сербии, Отделка фасадов в Белграде, Отделка фасадов в Нови-Саде, Строительство террас в Сербии, Строительство террас в Белграде, Строительство террас в Нови-Саде, Система умный дом в Сербии, Система умный дом в Белграде, Система умный дом в Нови-Саде, Строительство дач в Сербии, Строительство дач в Белграде, Строительство дач в Нови-Саде, Ремонт фасадов в Сербии, Ремонт фасадов в Белграде, Ремонт фасадов в Нови-Саде, Кладка теплоблоков в Сербии, Кладка теплоблоков в Белграде, Кладка теплоблоков в Нови-Саде, Установка заборов в Сербии, Установка заборов в Белграде, Установка заборов в Нови-Саде, Укладка плитки в Сербии, Укладка плитки в Белграде, Укладка плитки в Нови-Саде, Строительство домов из СИП панелей в Сербии, Строительство домов из СИП панелей в Белграде, Строительство домов из СИП панелей в Нови-Саде, Монтаж систем вентиляции в Сербии, Монтаж систем вентиляции в Белграде, Монтаж систем вентиляции в Нови-Саде, Строительство домов под ключ в Сербии, Строительство домов под ключ в Белграде, Строительство домов под ключ в Нови-Саде, Ремонт домов в Сербии, Ремонт домов в Белграде, Ремонт домов в Нови-Саде, Утепление фасадов в Сербии, Утепление фасадов в Белграде, Утепление фасадов в Нови-Саде, Монтаж водостоков в Сербии, Монтаж водостоков в Белграде, Монтаж водостоков в Нови-Саде, Строительство каркасных домов в Сербии, Строительство каркасных домов в Белграде, Строительство каркасных домов в Нови-Саде, Ремонт кровли в Сербии, Ремонт кровли в Белграде, Ремонт кровли в Нови-Саде, Монтаж кирпичной кладки в Сербии, Монтаж кирпичной кладки в Белграде, Монтаж кирпичной кладки в Нови-Саде, Строительство пристроек в Сербии, Строительство пристроек в Белграде, Строительство пристроек в Нови-Саде, Фундаментные работы в Сербии, Фундаментные работы в Белграде, Фундаментные работы в Нови-Саде, Установка теплых полов в Сербии, Установка теплых полов в Белграде, Установка теплых полов в Нови-Саде, Строительство хозблоков в Сербии, Строительство хозблоков в Белграде, Строительство хозблоков в Нови-Саде, Строительство кирпичных домов в Сербии, Строительство кирпичных домов в Белграде, Строительство кирпичных домов в Нови-Саде, Ремонт бассейнов в Сербии, Ремонт бассейнов в Белграде, Ремонт бассейнов в Нови-Саде, Устройство дренажа в Сербии, Устройство дренажа в Белграде, Устройство дренажа в Нови-Саде, Ремонт террас в Сербии, Ремонт террас в Белграде, Ремонт террас в Нови-Саде, Обшивка фасадов в Сербии, Обшивка фасадов в Белграде, Обшивка фасадов в Нови-Саде, Строительство мансард в Сербии, Строительство мансард в Белграде, Строительство мансард в Нови-Саде, Отделка каминов в Сербии, Отделка каминов в Белграде, Отделка каминов в Нови-Саде, Монтаж деревянных конструкций в Сербии, Монтаж деревянных конструкций в Белграде, Монтаж деревянных конструкций в Нови-Саде, Установка окон в Сербии, Установка окон в Белграде, Установка окон в Нови-Саде, Утепление чердаков в Сербии, Утепление чердаков в Белграде, Утепление чердаков в Нови-Саде, Монтаж отопительных систем в Сербии, Монтаж отопительных систем в Белграде, Монтаж отопительных систем в Нови-Саде, Установка печей в Сербии, Установка печей в Белграде, Установка печей в Нови-Саде, Обшивка домов сайдингом в Сербии, Обшивка домов сайдингом в Белграде, Обшивка домов сайдингом в Нови-Саде, Установка солнечных панелей в Сербии, Установка солнечных панелей в Белграде, Установка солнечных панелей в Нови-Саде, Обшивка стен гипсокартоном в Сербии, Обшивка стен гипсокартоном в Белграде, Обшивка стен гипсокартоном в Нови-Саде, Устройство полов в Сербии, Устройство полов в Белграде, Устройство полов в Нови-Саде, Монтаж дверей в Сербии, Монтаж дверей в Белграде, Монтаж дверей в Нови-Саде, Укладка ламината в Сербии, Укладка ламината в Белграде, Укладка ламината в Нови-Саде, Укладка паркетной доски в Сербии, Укладка паркетной доски в Белграде, Укладка паркетной доски в Нови-Саде, Монтаж металлических конструкций в Сербии, Монтаж металлических конструкций в Белграде, Мойка черепицы в Сербии, Мойка черепицы в Нови-Саде, Мойка черепицы в Белграде, " />
</svelte:head>

{#key headerAnim}
    <header >
        
        <div class="header_content" in:slide={{axis:'y',duration:800}} class:hidden={!headerAnim }>
            <a href="/pages/main" class="logo">
                <img src="{ logo }" alt="" data-src="{ logo }" use:lazyImage >
            </a>
            {#if innerWidth>800}
                <nav class="nav_menu">
                    <div class="" on:click={(event)=>{event.stopPropagation()}}>
                        <button class="nav_link main_sm_14" on:click={()=>{dropMenu=!dropMenu}}>{$t("nav.link")["services"]}<img src="{ arrow_down }" alt="" class:rotate={dropMenu}></button>
                    </div>
                    <a href="#general_director" class="nav_link main_sm_14">{$t("nav.link")["about"]}</a>
                    <a href="#reviews" class="nav_link main_sm_14">{$t("nav.link")["reviews"]}</a>
                </nav>
            
            {/if}

            <div class="main_header_info">
                <div class="">
                    <a href="tel:3810645598062" class="main_sm_14" target="_blank">+3810645598062</a>
                </div>
                <button class="main_black_btn main_sm_14" on:click={()=>{showModal = true}}>{$t("order")}</button>
                {#if innerWidth<=800 && importbl}
                    <HamburgerMenu/>
                {/if}
                <button on:click={switchLanguage} class="switch_lang main_sm_14" >{lang == "ru" ? "EN" : "RU"}</button>
            </div>
        </div>
        <DropdownMenu dropMenu={dropMenu} page={$page.params.page}/>
    
    </header>
{/key}
<slot/>
<footer style="
background:url({footer_bg});
background-repeat: no-repeat;
background-size: cover;
background-position:50% 50%"
use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
on:change={({ detail }) => {
    isInView = detail.inView;
}}        
>
    <div class="footer_application">
        {#key isInView}
            <form
                method="post"
                action="?/sendApp"
                enctype="multipart/form-data"
                use:enhance
                on:submit class:hidden={!isInView}
                in:fly={{y:200,duration:1000}}
            >
                <input type="hidden" name="blockName" value="Footer">
                <p class="header1 white">{$t("footer")["title"]}</p>
                <div class="input_place">
                    <input type="tel" name="phone" id="" required placeholder="+7 (900) 000-00-00" bind:value={value}
                    use:imask={options}>
                    <button type="submit" class="main_white_btn">{$t("footer")["call"]}</button>
                </div>
                <div class="contacts" class:hidden={!isInView} in:fly={{y:20,delay:200,duration:1000}}>
                    <div class="row_div">
                        <a href="mailto:russtroj.ns@gmail.com" class="link main_sm_14" target="_blank">
                            russtroj.ns@gmail.com
                        </a>
                        <a href="tel:3810645598062" class="link main_sm_14" target="_blank">
                            +3810645598062
                        </a>
                    </div>
                    <div class="curcle_div">
                        <a href="https://wa.me/79169327130"  class="link main_sm_14 curcle" target="_blank">
                            <img src="{ ws }" alt="">
                        </a>
                        <a href="https://t.me/russtroj" class="link main_sm_14 curcle" target="_blank">
                            <img src="{ tg }" alt="">
                        </a>
                    </div>
                </div>
            </form>
        {/key}
    </div>
    <div class="footer">
        <a href="#" class="main_sm_14" target="_blank">
            {#if lang=='ru'}
                {@html $t("footer")["privacy policy"]}
            {:else}
                { $t("footer")["privacy policy"]}
            {/if}
        </a>
        <p class="main_sm_14" >{ $t("footer")["studio"]}<span><img src="{ kewate_logo }" alt=""></span></p>
    </div>
</footer>

<svelte:window bind:innerWidth={innerWidth} on:click={()=>{dropMenu=false}}/>


<style lang="less">
    .hidden{
        opacity: 0;
    }
    header{
        position: relative;
        height: 48px;
    }
    .header_content{
        
        height: 48px;  
        display: flex;
        align-items: center;
        column-gap: 40px;
        padding: 0 46px;
        margin: 0 auto;
        @media (max-width:800px) {
            justify-content: space-between;
            padding: 0 0px 0px 20px;
        }
        @media (max-width:500px) {
            column-gap: 20px;
        }
    }
    .rotate{
        rotate: 180deg;
    }
    .nav_menu{
        display: flex;
        height: 100%;
        flex-grow: 1;
    }
    .nav_link{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        cursor: pointer;
    }
    .main_header_info{
        display: flex;
        column-gap: 12px;
        height: 100%;
        align-items: center;
        @media (max-width:380px) {
            column-gap: 4px;
        }
    }
    .main_header_info div:not(.barbar){
        @media (max-width:920px) {
            display: none;
        }
    }
    .main_header_info *{
        height: 100%;
        display: flex;
        align-items: center;
    }
    .main_header_info button{
        @media (max-width:380px) {
            padding: 0 10px;
        }
    }
    .switch_lang{
        background-color: var(--Neutral_200);
        cursor: pointer;
        color: var( --Neutral_900);
        padding: 16px;
        @media (max-width:800px) {
            display: none;
        }
    }
    .logo{
        @media (max-width:500px) {
            width: 100px;
        }
        @media (max-width:310px) {
            width: 90px;
        }
        @media (max-width:300px) {
            width: 80px;
        }
    }


    .footer_application{
        @media (max-width:600px) {
            padding: 0 20px;
        }
    }
    footer{
        height: 100%;
        width: 100%;
        margin: 0 auto;
        padding-top: 184px;
        background-repeat: no-repeat;
        background-size:auto;
        @media (max-width:600px) {
            padding-top: 77px;
        }
        @media (max-width:400px) {
            max-height: fit-content;
        }
    }
    footer a:first-child{
        @media (max-width:400px) {
            text-align: center;
            text-decoration: none; 
        }
        
    }
    
    .link img{
        width: 24px;
        height: 24px;
    }
    .main_header_info .main_black_btn{
        font-size: 12px ;
    }
    .contacts{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        column-gap: 8px;
        @media (max-width:500px) {
            flex-direction: column;
            row-gap: 12px;
        }

    }
    .row_div{
        display: flex;
        column-gap: 8px;
        width: 100%;
        @media (max-width:350px) {
            flex-direction: column;
            row-gap: 20px;
        }
    }
    .curcle_div{
        display: flex;
        column-gap: 8px;
    }
    .curcle{
        padding: 11px;
    }
    .link:not(.curcle){
        display: flex;
        justify-content: center;
        padding: 12px 0px;
    }
    
    .row_div a:last-child{
        @media (max-width:500px) {
            flex-grow: 2;
        }
    }
    .input_place {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        column-gap: 20px;
        @media (max-width:600px) {
            flex-direction: column;
            row-gap: 24px;
        }
    }
    .input_place button{
        width: 100%;
        @media (max-width:600px) {
            max-width: 100%;
        }
    }
    form  input{
        border: 1px solid var(--Neutral_300);
        color: var(--Neutral_400);
        padding: 16px;
        border-radius: 0;
        width: 100%;
    }
    form input:focus{
        border: 1px solid var(--Neutral_100);
        border-radius: 0;
        outline: none;
        color: white;
    }
    .white{
        color: var(--Neutral_100);
        text-align: center;
        max-width: 80%;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 544px;
        margin: 0 auto;
        row-gap: 28px;
        margin-bottom: 144px;
        @media (max-width:600px) {
            align-items: start;
        }
        @media (max-width:400px) {
            margin-bottom: 70px;
        }
    }
    form .header1{
        @media (max-width:600px) {
            font-size: 32px !important;
            line-height: 35px !important;
            text-align: start; 
        }
       
    }
    .footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        margin: 0 46px;
        border-top: 1px solid var(--Neutral_400);
        @media (max-width:600px) {
           margin: 0 20px;
        }
        @media (max-width:400px) {
            flex-direction: column;
            row-gap: 24px;
        }
    }
    .footer p{
        font-size: 14px;
        font-weight: 600;
        line-height: 16.1px;
        color: rgba(255, 255, 255, 0.32);
        display: flex;
        column-gap: 5px;
    }
    .footer img{
        max-width: 65px;
        height: 100%;
    }
    .footer a{
        color: var(--Neutral_100);
        text-decoration: underline;
    }
    :global(.footer .header1){
        @media (max-width:600px) {
            font-size: 32px !important;
            line-height: 35px !important;
        }
    }
    .row_div a:first-child{
        @media (max-width:500px) {
            flex-grow: 1;
            width: unset !important;
        }
    }
    .link{
        display: inline;
        border: 1px solid var(--Neutral_100);
        border-radius: 24px;
        color: white;
        width: 100%;
        @media (max-width:660px) {
            width: unset !important;
        }
    }
</style>