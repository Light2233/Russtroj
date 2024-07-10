<script lang="ts">
    export let style_name;
    export let showModal;
    export let styles
	let dialog; 
    
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';s
    import { onMount, afterUpdate } from "svelte"
    import {fade} from "svelte/transition"

    import close from '$lib/assets/close.svg'


	$: if (dialog && showModal) dialog.showModal();
    

    
    let styleSelected
    afterUpdate(()=>{
        styleSelected = styles.find((element)=> element.name == style_name)
    })    
    
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
bind:this={dialog}
on:close={() => (showModal = false)}
on:click|self={() => dialog.close()}
>

    <div class="dialog_content">
        <div class="style_info">
            <div class="title">
                <button on:click={()=>{showModal=false;dialog.close()}} class="close_btn"><img src="{ close }" alt=""></button>
                <p class="header1">{styleSelected?.name}</p>
            </div>
            <p class="main_sm_18">{styleSelected?.desc ? styleSelected?.desc : ''}</p>
            {#if styleSelected?.ul}
                <div class="ul">
                    {#if styleSelected.ulTitle}
                        <p class="main_sm_18">{styleSelected.ulTitle}</p>
                    {/if}
                    {#each styleSelected.ul as li}
                        <div class="li">
                            <div class="curcle"></div>
                            <p class="main_sm_18">{li.li}</p>
                        </div>
                        
                    {/each}
                </div>
            {/if}
        </div>
        {#key styleSelected}
        <div class="style_img" in:fade>
            <img src="{ styleSelected?.url }" alt="" data-src="{ styleSelected?.url }" use:lazyImage={{ threshold: 0.5 }}>
        </div>
        {/key}
    </div>
</dialog>


<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0 !important;
        width: 100%;
        height: 100%;
        margin: 0 !important;
        max-width: 100%;
        max-height: 100%;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        display: none;

	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
        display: flex;
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
    .dialog_content {
        max-width: 86.5%;
        height: 100%;
        max-height: 490px;
        height: 100%;
        width: 100%;
        
        background: white;
        display: flex;
        justify-content: space-between;
        column-gap: 40px;
        padding: 20px;

    }
    *{
        word-wrap: break-word;
        -webkit-hyphens: manual;
        -ms-hyphens: manual;
        hyphens: manual;
    }
    .style_info{
        width: 100%;
        max-width: 53%;
    }
    .style_img{
        max-width: 450px;
        max-height: 450px;
    }
    .style_img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .title{
        display: flex;
        align-items: center;
        column-gap: 20px;
        margin-bottom: 20px;
    }
    .ul{
        list-style: none;
        width: 100%;
        margin-left: 8px;
    }
    .li{
        display: flex;
    }
    p{
        width: 97%;
    }
    .curcle{
        width: 5px !important;
        height: 5px !important;
        background: black;
        border-radius: 10px;
        margin-top: .55rem;
        margin-right: 8px;
    }
    .close_btn{
        cursor: pointer;
    }
</style>