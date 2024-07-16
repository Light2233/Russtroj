<script lang="ts">
    let ans = [];

    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';

    
    import { fly } from "svelte/transition";

    let slideCnt = 1

    export let slides;
    
    let allSlides = 6

</script>

<form class="calc_content">
    {#each slides as slide}
        {#if slideCnt == slide.id}
            {#if slideCnt==6}
                <div class="quest" transition:fly>
                    <div class="quest_info">
                        <p class="header2"><span>{slide.id}. </span>{slide.name}</p>
                        <p class="main_sm_18">{slide.desc}</p>
                        <div class="contact">
                            <p class="header3">Номер телефона</p>
                            <input type="tel" name="" id="" required class="main_sm_14" placeholder="+7 (900) 000-00-00">
                        </div>
                    </div>
                    <div class="slide_swap">
                        <button class="main_black_btn" on:click={()=>{slideCnt > 1 ? slideCnt-- : 1}}>Назад</button>
                        <button class="main_black_btn" type="submit">Отправить</button>
                    </div>
                </div>
                
            {:else}
                <div class="quest">
                    <div class="quest_info">
                        <p class="header2"><span>{slide.id}. </span>{slide.name}</p>
                        <div class="" class:var_info={slideCnt==1}>
                            {#each slide.questions as quest}
                                <div class="" class:var={slideCnt!=1} class:var1={slideCnt==1}>
                                    <div class="">
                                        {#if quest.url}
                                            <img src="{ quest.url }" alt="" data-src="{ quest.url }" use:lazyImage={{ threshold: 0.5 }} decoding="async">
                                        {/if}
                                        <div class="var_quests" class:var_quests_mr16={slideCnt==1}>
                                            <input type="radio" name="{slide.id}" id={quest.id} value="{quest.answ}" bind:group={slide.value} required>
                                            <label for="{quest.id}" class="header3" >{quest.answ}</label>
                                        </div>  
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="slide_swap">
                        {#if slideCnt >1}
                            <button class="main_black_btn" on:click={()=>{slideCnt > 1 ? slideCnt-- : 1}}>Назад</button>
                        {/if}
                        <button class="main_black_btn" on:click={()=>{slideCnt++}} disabled={!slide.value}>Далее</button>
                    </div>
                    
                </div>
            {/if}
        {/if}
    {/each}
    <div class="slide_cnt">
        {#each {length: 6} as _, i}
            <div class="slide_cnt_d" class:slide_cnt_a={slideCnt >= i+1}></div>
        {/each}
        
    </div>
</form>

<style lang="less">
    .calc_content{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 160px;
        position: relative;
    }
    .quest{
        width: 100%;
        background-color: var(--Neutral_200);
        height: 400px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        position: relative;
        transition: .2s ease-out;
    }
    .slide_swap{
        height: 100%;
        display: flex;
        align-items: end;
        column-gap: 4px;
    }
    .var{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        margin-top: 32px;
    }
    .var1{
        display: flex;
        align-items: center;
        row-gap: 8px;
        margin-top: 32px;
    }
    .var_quests{
        display: flex;
        column-gap: 8px;
        align-items: center;
        cursor: pointer;
    }
    .var_quests_mr16{
        margin-top: 16px;
    }
    .var_info{
        display: flex;
        column-gap: 8px;
    }
    .var_quests label{
        cursor: pointer;
    }

    .var_quests input{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 20px;
        width: 100%;
        max-width: 20px;
        transition: all .2s ease-out;
        background: none;
        
    }
    .var_quests input:before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50px;
        border: 1px solid #B2B2B2;
        background: none;
        transition: all .2s ease-out;
    }
    .var_quests input:checked::before{
        background-color: black;
        border: 1px solid black;
    }
    .var_quests input:checked:after {
        content: "";
        display: flex;
        width: 8px;
        height: 8px;
        position: absolute;
        background-color: white;
        border-radius: 50px;
        transition: all .2s ease-out;
    }
    .contact{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }
    .contact input{
        border: 1px solid var(--Neutral_600);
        color: var(--Neutral_900);
        padding: 16px;
        border-radius: 0;
    }
    .contact input:focus{
        border: 1px solid var(--Neutral_900);
        border-radius: 0;
        outline: none;
    }
    .quest_info .main_sm_18{
        margin-left: 23px;
        margin-top: 4px;
    }

    .slide_cnt{
        position: absolute;
        right: 0;
        margin-right: 20px;
        margin-top: 20px;
    }
    .slide_cnt_d{
        width: 4px;
        height: 24px;
        margin-bottom: 4px;
        background: var(--Neutral_300);
        transition: all .2s ease-out;
    }
    .slide_cnt_a{
        background: var(--Neutral_900);
        transition: all .2s ease-out;
    }
    
</style>