
<script lang="ts">
    import link_bg from "$lib/assets/slides/slide2.webp"
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image'
    import { slide,fly } from "svelte/transition";
    import { onMount,afterUpdate,beforeUpdate } from "svelte";

    export let page;

    let options = [
        {
            name:"Строительство домов",
            path:"/pages/main"
        },
        {
            name:"Строительство бань",
            path:"/pages/baths"
        },
        {
            name:"Строительство бассейнов",
            path:"/pages/pools"
        },
        {
            name:"Строительство зон отдыха",
            path:"/pages/recreationAreas"
        },
        {
            name:"Строительство зон барбекю",
            path:"/pages/gazebo"
        },
        
    ]

    let i;
    let temp;
    let slided = false
    export let dropMenu = false;

    beforeUpdate(()=>{
        for(i=0;i<options.length;i++){
            if(options[i].path === `/pages/${page}`){
                
                temp = options[i];
                options[i]=options[0];
                options[0]=temp;
                break;
            }
        }
    })
    
        
    

    
</script>


{#if dropMenu}

    <div class="drop_menu" transition:slide>
        <p class="main_sm_14 gray">Услуги</p>
        
        <div class="link_grid">
            {#each options as option,index}
                    <a class="drop_menu_link header3" href={option.path} class:first={index===0} on:click={(event)=>{dropMenu=false;event.stopPropagation()}}>
                        {option.name}
                        <img src="{ link_bg }" alt="" data-src="{ link_bg }" decoding="async"  fetchpriority="high" >
                    </a>
            {/each}
        </div>
    </div>
{/if}

<style lang="less">
    .hidden{
        display: none;
    }
    .gray{
        color:var(--Neutral_400);
    }
    .drop_menu{
        width: 100%;
        padding: 20px 46px;
        position: absolute;
        background: var(--Neutral_100);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        @media (max-width:800px) {
            padding: 20px 20px;
        }
    }
    .link_grid{
        display: flex;
        column-gap: 20px;
        justify-content: space-between;
        @media (max-width:1080px) {
            column-gap: 10px;
        }
        @media (max-width:900px) {
            flex-wrap: wrap;
            column-gap: 0px;
        }
    }
    .drop_menu_link{
        color: var(--Neutral_100);
        position: relative;
        height: 235px;
        padding: 12px;
        flex-grow: 0;
        width: 20%;
        @media (max-width:900px) {
            width: 50%;
        }
    }
    .drop_menu_link img{
        position: absolute;
        top: 0;
        z-index: -1;
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: brightness(60%);
        right: 0;
    }
    .first{
        width: 100%;
        flex-shrink: 0;
        max-width: 33%;
        @media (max-width:1080px) {
           max-width: 25%;
        }
        @media (max-width:900px) {
            width: 100%;
            max-width: 100%;
        }
    }
    
</style>