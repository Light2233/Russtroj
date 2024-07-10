
<script lang="ts">
    import arrow_down from "$lib/assets/arrow_down.svg"

    import { slide } from "svelte/transition";

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
        
    ]

    let dropMenu = false
</script>

<svelte:window on:click={()=>{dropMenu=false}}/>
<div class="drop_down_menu"
on:click={(event)=>{event.stopPropagation()}}
>
    <button class="nav_link main_sm_14" on:click={()=>{dropMenu=!dropMenu}}>Услуги <img src="{ arrow_down }" alt="" class:rotate={dropMenu}></button>
    {#if dropMenu}
        <div class="drop_menu" transition:slide>
            {#each options as option}
                <a class="drop_menu_link main_sm_14" href={option.path}>{option.name}</a>
            {/each}
            
        </div>
    {/if}
</div>

<style>
    .drop_down_menu{
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .drop_menu{
        position: absolute;
        display: flex;
        padding: 12px 20px 20px 20px ;
        background: var(--Neutral_100);
        border-radius: 0 0 24px 24px;
        top: 30px;
        left: 0;
        flex-direction: column;
        row-gap: 12px;
        z-index: 66;
    }
    .nav_link img{
        width: 16px;
        height: 16px;
    }
    .nav_link{
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 2px;
        cursor: pointer; 
    }
    .drop_menu_link{
        color: var(--Neutral_900);
    }
    .rotate{
        rotate: 180deg;
    }
</style>