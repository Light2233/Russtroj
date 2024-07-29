<script lang="ts">
    export let style_name;
    export let showModal;
    export let stylesmodal
	let dialog; 
    import { t, locale, locales } from "$lib/client/i18n";
    
    import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
    import { onMount, afterUpdate, beforeUpdate } from "svelte"
    import {fade} from "svelte/transition"

    import close from '$lib/assets/close.svg'


	$: if (dialog && showModal) dialog.showModal();
    

    
    let styleSelected
    beforeUpdate(()=>{
        styleSelected = stylesmodal.find((element)=> element.name == style_name)
    })

    let scrollable = true;
    $: {
        if(showModal) scrollable = false
        else scrollable = true
    }

    const wheel = (node, options) => {
		let { scrollable } = options;
		
		const handler = e => {
			if (!scrollable) e.preventDefault();
		};
		
		node.addEventListener('wheel', handler, { passive: false });
		
		return {
			update(options) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, { passive: false });
			}
		};
    };
</script>
<svelte:window use:wheel={{scrollable}} />
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
                {#if styleSelected?.name}
                    <p class="header1">{$t("houseslide")[style_name]["name"]}</p>
                {/if}
            </div>
            {#if styleSelected?.desc}
                <p class="main_sm_18">{$t("houseslide")[style_name]["desc"]}</p>
            {/if}
            
            {#if styleSelected?.ul}
                <div class="ul">
                    {#if styleSelected.ulTitle}
                        <p class="main_sm_18">{$t("houseslide")[style_name]["ulTitle"]}</p>
                    {/if}
                    {#each $t("houseslide")[style_name]?.ul as li}
                        <div class="li">
                            <div class="curcle"></div>
                            <p class="main_sm_18">{li["li"]}</p>
                        </div>
                        
                    {/each}
                </div>
            {/if}
        </div>
        {#key styleSelected}
        <div class="style_img" in:fade>
            <img src="{ styleSelected?.urlModal }" alt="" data-src="{ styleSelected?.urlModal }" use:lazyImage={{ threshold: 0.5 }} decoding="async">
        </div>
        {/key}
    </div>
</dialog>


<style lang="less">
	dialog {
		border-radius: 0.2em;
		border: none;
		padding: 0 !important;
        width: 100vw;
        height: 100vh;
        margin: 0 !important;
        max-width: 100%;
        max-height: 100vh;
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
        overflow-y: auto;
        background: white;
        display: flex;
        justify-content: space-between;
        column-gap: 40px;
        padding: 20px;
        
        @media (max-width:1280px) {
            align-items: center;
            max-width: 100vw;
            width: 100vw;
            max-height: 100vh;
            height: fit-content;
        }
        @media (max-width:900px) {
            flex-direction: column;
            row-gap: 40px;
            height: 100vh;

        }
        @media (max-width:500px) {
            padding: 16px;

        }
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
        @media (max-width:900px) {
            max-width: 100%;
            
        }
    }
    .style_img{
        max-width: 450px;
        max-height: 450px;
        @media (max-width:900px) {
            max-width: 100%;
            width: 100%;
            max-height: 300px;

        }
    }
    .style_img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media (max-width:900px) {
            max-width: 100%;
            max-height: 300px;

        }
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
        flex-shrink: 0;
    }
    .close_btn{
        cursor: pointer;
    }
    .style_info .main_sm_18{
        font-size: 12px;
        line-height: 20px;
    }
</style>