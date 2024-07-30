<script lang="ts">

    export let page = ''

    import HouseStyleModal from "./HouseStyleModal.svelte"
    import { t, locale, locales } from "$lib/client/i18n";
    export let stylesmodal
    let styleSelected = '';
    let showModal = false;

    function openmodal(name){
        if(page=="main"){
            showModal = true;
            styleSelected=name
        }
    }
    let showBtn = false;
</script>
<HouseStyleModal bind:showModal style_name={styleSelected} stylesmodal={stylesmodal}/>
<div class="styles_grid">
    {#each stylesmodal as style, index} 
        <button class="style" on:click={openmodal(style.name)} class:first={index<2 && page !== "gazebo"}>
            <img src="{ style.url }" alt="" data-src="{ style.url }" decoding="async"  fetchpriority="high">
            {#if style.name }
                <p class="header2">{$t("houseslide")[style.name]["name"]}</p>
            {/if}
            {#if page=='main'}
                <button class="main_white_btn main_sm_14">{$t("more")["btn"]}</button>
            {/if}
        </button>
    {/each}
</div>

<style lang="less">
    .gazebo{
        max-width: 33.1% !important;
    }
    .style{
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: start;
        justify-content: start;
    }
    .style img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: brightness(80%);
        object-position: 50% 50%;
        pointer-events: none;
        position: absolute;
        top: 0;
    }
    .styles_grid{
        display: flex;
        flex-wrap: wrap;
        flex-shrink: 0;
        column-gap: 2px;
        row-gap: 2px;
        margin-top: 80px;
        justify-content: space-between;
    }
    .style{
        height: 400px;
        flex-grow: 0;
        width: 100%;
        max-width: 33.1%;
        @media (max-width:680px) {
            height: 200px;
        }
        @media (max-width:568px) {
            width: 100%;
            max-width: 49.5%;
        }
    }
    .first{
        flex-grow: 1;
        width: 100%;
        max-width: 49.91%;
        @media (max-width:1093px) {
            max-width: 100%;
            flex-grow: 2;
        }
        @media (max-width:680px) {
            height: 400px;
        }
        
    }
    .style p {
        z-index: 3;
        color: white;
        padding: 20px 0px 0px 20px;
        top: 0;
        white-space: break-spaces;
        word-wrap: break-word;
        text-wrap: wrap;
        word-break: break-all;

        text-align: start;
        @media (max-width:400px) {
            font-size: 24px !important;
            padding: 12px 0 0 12px;
        }
        @media (max-width:290px) {
           font-size: 18px !important;
        }
    }
    .style .main_white_btn{
        position: absolute;
        bottom: 0;
        margin: 20px;
        opacity: 0;
        left: 0;
        @media (max-width:600px) {
            padding: 10px !important;
            font-size: 12px !important;
        }
        @media (max-width:320px) {
            margin: 12px;
        }
    }
    .style:hover .main_white_btn{
        opacity: 1;
    }

</style>