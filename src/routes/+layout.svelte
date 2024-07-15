<script lang="ts">
    import '../app.css'

    import logo from '$lib/assets/logo.svg'
    import footer_bg from "$lib/assets/footer_bg.png"
    import tg from '$lib/assets/tg.svg'
    import ws from '$lib/assets/watsap.svg'
    import kewate_logo from '$lib/assets/kewate_logo.svg'

    import DropdownMenu from './DropdownMenu.svelte'
    import CheckOutOrderModal from './CheckOutOrderModal.svelte'
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
    let showModal;
    let innerWidth
</script>

<CheckOutOrderModal bind:showModal />



<header>
    <div class="header_content">
        <a href="/pages/main" class="logo">
            <img src="{ logo }" alt="" data-src="{ logo }" use:lazyImage>
        </a>
        {#if innerWidth>800}
        <div class="nav_menu">
            <DropdownMenu/>
            <a href="" class="nav_link main_sm_14">О компании</a>
            <a href="#reviews" class="nav_link main_sm_14">Отзывы</a>
        </div>
        {/if}
        <div class="main_header_info">
            <div class="">
                <p class="main_sm_14">+7 (900) 000-00-00</p>
            </div>
            <button class="main_black_btn main_sm_14" on:click={()=>{showModal = true}}>Заказать выезд</button>
            <button class="switch_lang main_sm_14">EN</button>
        </div>
    </div>
</header>
<slot/>
<footer style="background:url({footer_bg});background-repeat: no-repeat;
        background-size: cover;background-position:50% 50%">
    <div class="footer_application">
        <form class=""  on:submit>
            <p class="header1 white">Выезд инженера на объект за счёт компании</p>
            <div class="input_place">
                <input type="tel" name="" id="" required placeholder="+7 (900) 000-00-00">
                <button type="submit" class="main_white_btn">Вызвать инженера</button>
            </div>
            <div class="contacts">
                <div class="row_div">
                    <a href="#" class="link main_sm_14">
                        mail@mail.ru
                    </a>
                    <a href="#" class="link main_sm_14">
                        +7 (900) 000-00-00
                    </a>
                </div>
                <div class="curcle_div">
                    <a href="https://wa.me/79169327130"  class="link main_sm_14 curcle">
                        <img src="{ ws }" alt="">
                    </a>
                    <a href="#" class="link main_sm_14 curcle">
                        <img src="{ tg }" alt="">
                    </a>
                </div>
            </div>
        </form>
    </div>
    <div class="footer">
        <a href="" class="main_sm_14">Политика<br>конфиденциальности</a>
        <p class="main_sm_14">Сделано в<span><img src="{ kewate_logo }" alt=""></span></p>
    </div>
</footer>

<svelte:window bind:innerWidth={innerWidth}/>


<style lang="less">
    .header_content{
        
        height: 48px;  
        display: flex;
        align-items: center;
        column-gap: 40px;
        padding: 0 46px;
        margin: 0 auto;
        @media (max-width:800px) {
            justify-content: space-between;
            padding: 0 20px;
        }
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
    }
    .main_header_info{
        display: flex;
        column-gap: 12px;
        height: 100%;
        align-items: center;
    }
    .main_header_info div{
        @media (max-width:920px) {
            display: none;
        }
    }
    .main_header_info *{
        height: 100%;
        display: flex;
        align-items: center;
    }
    .switch_lang{
        background-color: var(--Neutral_200);
        color: var( --Neutral_900);
        padding: 16px;
    }


    .footer_application{
        @media (max-width:600px) {
            padding: 0 20px;
        }
    }
    footer{
        max-height: 658px;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        padding-top: 184px;
        background-repeat: no-repeat;
        background-size:auto;
        @media (max-width:600px) {
            padding-top: 77px;
        }
    }
    .link{
        display: inline;
        border: 1px solid var(--Neutral_100);
        border-radius: 24px;
        color: white;
    }
    .link img{
        width: 24px;
        height: 24px;
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
    }
    form .header1{
        font-size: 32px !important;
        line-height: 35px !important;
        text-align: start;
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
</style>