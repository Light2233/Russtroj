<script lang="ts">
    export let showModal;
    import close from "$lib/assets/close.svg"
	let dialog2; 
    $: if (dialog2 && showModal) dialog2.showModal();
    import { fade } from "svelte/transition";
    import { t, locale, locales } from "$lib/client/i18n";
    export let url 
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
bind:this={dialog2}
on:close={() => (showModal = false)}
on:click|self={() => dialog2.close()}
>

    <div class="dialog_content">
        <div class="close" on:click={()=>{dialog2.close()}}><img src="{close}" alt=""></div>
        <div class="style_info">
            <div class="title">
                <p class="header3">{$t("generaldirector")["rank"]}</p>
            </div>
            <div class="line"></div>
            <div class="director_info">
                <p class="header1">{$t("generaldirector")["name"]}</p>
                <p class="main_sm_14">{$t("generaldirector")["shortdesc"]} <br><br>{$t("generaldirector")["desc"]}</p>
            </div>
        </div>
        <div class="line vertical"></div>
        <div class="style_img" in:fade>
            <img src="{url}" alt="">
        </div>
    </div>
</dialog>

<style lang="less">
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
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: flex;
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
        max-width: 1108px;
        max-height: 490px;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        column-gap: 40px;
        padding: 20px;
        overflow-y: auto;
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
            justify-content: unset;

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
        border: none;
    }
    .style_info{
        width: 100%;
        max-width: 53%;
        @media (max-width:900px) {
            max-width: 100%;
            
        }
    }
    .style_img{
        width: 450px;
        height: 450px;
        background: #F2F2F2;
        border: 1px var(--Neutral_900) solid;
        width: 100%;
        @media (max-width:900px) {
            width: 300px;
            height: 300px !important;
            max-height: 300px;
        }
    }
    .style_img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
    .line{
        content: "";
        width: 100%;
        height: 1px;
        background: #E0E0E0;
        z-index: 99;
        margin: 20px 0;
        @media (max-width:900px) {
            display: none;
        }
    }
    .director_info{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }
    .vertical{
        height: 100%;
        width: 1px;
        position: relative;
        top: -20px;
    }
    .close{
        display: none;
        @media (max-width:900px) {
            width: 100%;
            display: flex;
            justify-content: end; 
        }
        
    }
    .close img{
        height: 34px;
        width: 34px;
    }
</style>