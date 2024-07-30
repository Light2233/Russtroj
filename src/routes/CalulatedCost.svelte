<script lang="ts">

    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
    import { t, locale, locales } from "$lib/client/i18n";
    
    import { fly } from "svelte/transition";

    let slideCnt = 1

    export let slides;
    export let page

    let answers = [
    
    ]
    let slideslenght = slides.length
    import { imask } from '@imask/svelte';

    const options = {
        mask: '{+7} (000) 000-00-00',
        lazy: true
    };

    let value = '';
    let form

    function submit(){
        slides.forEach(el => {
            let arr;
            if(el.id == 2){
                let ans = `${$t("calculated").questions[el.id-1]["from"]} ${el.value[0].toString()} ${$t("calculated").questions[el.id-1]["to"]} ${el.value[1].toString()}`
                arr = [el.name, ans]
            }
            else arr = [el.name, el.value]
            answers.push(arr);
        });   
    }
    $: console.log(slideCnt)

</script>

<form class="calc_content" bind:this={form}>
    {#each slides as slide, id(slide.id)}
        {#if slideCnt == slide.id}
            {#if slideCnt == slideslenght}
                <div class="quest" transition:fly>
                    <div class="quest_info">
                        <p class="header2"><span>{slide.id}. </span>{$t("calculated")[page]["questions"][slide.id-1]["name"]}</p>
                        <p class="main_sm_18">{$t("calculated")[page]["questions"][slide.id-1]["desc"]}</p>
                        <div class="contact">
                            <p class="header3">{$t("calculated")[page]["questions"][slide.id-1].tel}</p>
                            <input type="tel" name="" id="" required class="main_sm_14" placeholder="+7 (900) 000-00-00" bind:value={slide.value}
                            use:imask={options}>
                        </div>
                    </div>
                    <div class="slide_swap">
                        <button class="main_black_btn" on:click={()=>{slideCnt > 1 ? slideCnt-- : 1}}>{$t("calculated")["buttons"]["back"]}</button>
                        <button class="main_black_btn" type="submit" on:click|preventDefault={submit} >{$t("calculated")["buttons"]["submit"]}</button>
                    </div>
                </div>
                
            {:else}
                <div class="quest" transition:fly>
                    <div class="quest_info">
                        <p class="header2"><span>{slide.id}. </span>{$t("calculated")[page]["questions"][slide.id-1]["name"]}</p>
                        <div class="">
                            {#each slide.questions as quest, index}
                                <div class="" class:var={slideCnt!=0} >
                                    <div class="">
                                        <div class="var_quests" class:var_quests_mr16={slideCnt==1}>
                                            <input type="radio" name="{slide.id}" id={quest.id} value="{quest.answ}" bind:group={slide.value} required>
                                            <label for="{quest.id}" class="header3" >{$t("calculated")[page]["questions"][slide.id-1]["questions"][index]["answ"]}</label>
                                        </div>  
                                        
                                    </div>
                                    
                                </div>
                            {/each}
                            {#if (slide.id == 2 && (page=="main" || page== "baths") ) || (slide.id == 7 && page=="pools")}
                                <div class="house_area">
                                    <div class="">
                                        <p class="main_sm_14">{$t("calculated")[page]["questions"][slide.id-1]["from"]}</p>
                                        <input type="number" required class="main_sm_14 area"  min="0" bind:value={slide.value[0]}>
                                    </div>
                                    
                                    <div class="">
                                        <p class="main_sm_14">{$t("calculated")[page]["questions"][slide.id-1]["to"]}</p>
                                        <input type="number" required class="main_sm_14 area" min="0" bind:value={slide.value[1]}>
                                    </div>
                                    
                                </div>
                                <p class="main_sm_11 gray">
                                    {$t("calculated")[page]["questions"][slide.id-1]["desc"]}
                                </p>
                            {/if}
                        </div>
                    </div>
                    <div class="slide_swap">
                        {#if slideCnt >1}
                            <button class="main_black_btn" on:click={()=>{slideCnt > 1 ? slideCnt-- : 1}}>{$t("calculated")["buttons"]["back"]}</button>
                        {/if}
                        <button class="main_black_btn" on:click={()=>{slideCnt++}} disabled={!slide.value}>{$t("calculated")["buttons"]["next"]}</button>
                    </div>
                    
                </div>
            {/if}
        {/if}
    {/each}
    <div class="slide_cnt">
        {#each {length: slideslenght} as _, i}
            <div class="slide_cnt_d" class:slide_cnt_a={slideCnt >= i+1}></div>
        {/each}
        
    </div>
</form>

<style lang="less">
    .gray{
        color: var(--Neutral_400);
        text-align: start;
        margin-top: 12px;
    }
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
        @media (max-width:800px) {
            flex-direction:column;
        }
    }
    .slide_swap{
        height: 100%;
        display: flex;
        align-items: end;
        column-gap: 4px;
        @media (max-width:800px) {
            justify-content: end;
        }
    }
    .var{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        margin-top: 32px;
        @media (max-width:800px) {
            margin-top: 20px;
        }
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
        @media (max-width:420px) {
            margin: 0;
        }
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
    .var_quests .header3{
        @media (max-width:800px) {
            font-size: 20px;
            line-height: 20px;
        }
    }
    .contact{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }
    .area{
        border: 1px solid var(--Neutral_600);
        color: var(--Neutral_900);
        padding: 16px;
        border-radius: 0;
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
    .quest_info{
        width: 100%;
        max-width: 400px;
    }
    .quest_info .main_sm_18{
        margin-left: 23px;
        margin-top: 4px;
        @media (max-width:480px) {
            font-size: 14px;
        }
        @media (max-width:320px) {
            display: none;
        }
    }

    .slide_cnt{
        position: absolute;
        right: 0;
        margin-right: 20px;
        margin-top: 20px;
        @media (max-width:800px) {
            flex-direction:column;
        }
    }
    .slide_cnt_d{
        width: 4px;
        height: 24px;
        margin-bottom: 4px;
        background: var(--Neutral_300);
        transition: all .2s ease-out;
        @media (max-width:500px) {
            display: none;
        }
    }
    .slide_cnt_a{
        background: var(--Neutral_900);
        transition: all .2s ease-out;
    }
    .house_area{
        display: flex;
        column-gap: 20px;
        margin-top: 32px;
        
        @media (max-width:800px) {
            flex-direction: column;
            row-gap: 20px;
        }
        @media (max-width:420px) {
            margin-top: 20px;
        }
    }
    .house_area div{
        display: flex;
        align-items: center;
        column-gap: 12px;
        max-width: 150px;
        @media (max-width:420px) {
            max-width: 100%;
        }
    }
    .house_area input{
        max-width: 60%;
        @media (max-width:800px) {
            max-width: 100%;
        }
        @media (max-width:420px) {
            max-width: 100%;
            width: 100%;
        }
    }
    
</style>