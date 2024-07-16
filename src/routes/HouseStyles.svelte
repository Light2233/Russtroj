<script lang="ts">
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';

    export let page = ''

    import HouseStyleModal from "./HouseStyleModal.svelte"

    export let stylesmodal
    let styleSelected = '';
    let showModal = false;

    function openmodal(){
        if(page=="main"){
            showModal = true;
        }
    }
    let showBtn = false;
</script>

<HouseStyleModal bind:showModal style_name={styleSelected} stylesmodal={stylesmodal}/>

<div class="styles_grid">
    {#each stylesmodal as style, index}
        <button class="style { style.style }" on:click={()=>{if(page=='main'){styleSelected=style.name;showModal = true;}}} class:first={index<2 && page!=='gazebo'}>
            <img src="{ style.url }" alt="" data-src="{ style.url }" decoding="async"  fetchpriority="high">
            <p class="header2">{ style.name }</p>
            {#if page=='main'}
                <button class="main_white_btn main_sm_14">Подробнее</button>
            {/if}
        </button>
    {/each}
</div>

<style lang="less">
    .style{
        position: relative;
        cursor: pointer;
    }
    .style img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: brightness(80%);
        object-position: 50% 50%;
        pointer-events: none
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
        position: absolute;
        color: white;
        padding: 20px 0px 0px 20px;
        top: 0;
        text-align: start;
        @media (max-width:400px) {
            font-size: 14px !important;
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
    }
    .style:hover .main_white_btn{
        opacity: 1;
    }

</style>