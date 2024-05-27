<script lang="ts">
    import '../app.css'

    import logo from '$lib/assets/logo.svg'
</script>


<header>
    <div class="header_content">
        <div class="logo">
            <img src="{ logo }" alt="">
        </div>
        <div class="nav_menu">
            <a href="" class="nav_link main_sm_14">Услуги</a>
            <a href="" class="nav_link main_sm_14">О компании</a>
            <a href="" class="nav_link main_sm_14">Отзывы</a>
        </div>
        <div class="main_header_info">
            <div class="">
                <p class="main_sm_14">+7 (900) 000-00-00</p>
            </div>
            <button class="main_black_btn main_sm_14">Заказать выезд</button>
            <button class="switch_lang main_sm_14">EN</button>
        </div>
    </div>
</header>
<slot/>




<style>
    .header_content{
        max-width: 1200px;
        height: 48px;  
        display: flex;
        align-items: center;
        column-gap: 40px;
        padding: 0 46px;
        margin: 0 auto;
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
</style>