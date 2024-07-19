<script lang="ts">
	export let showModal;
	let dialog;
	$: if (dialog && showModal) dialog.showModal();
    let dropMenu = false;

	import arrow_down from "$lib/assets/arrow_down.svg"
	import close from "$lib/assets/close_gray.svg"
    import DropdownMenu from "./DropdownMenu.svelte";

    import { page } from '$app/stores';
</script>

<svelte:window on:click={()=>{dialog.close()}}/>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="dialog_content" on:click|stopPropagation>
        <div class="line"></div>
		<div class="dialog_title">	
            <p class="">Меню</p>
            <button class="close" on:click={()=>{ dialog.close();dropMenu=false}}><img src="{close}"></button>
        </div>
        <div class="links">
            <div class="" on:click={(event)=>{event.stopPropagation()}}>
                <button class="nav_link main_sm_14" on:click={(event)=>{dropMenu=!dropMenu;}}>Услуги <img src="{ arrow_down }" alt="" class:rotate={dropMenu}></button>
            </div>
        </div>
	</div>
    <DropdownMenu dropMenu={dropMenu} page={$page.params.page}/>
</dialog>

<style>
	dialog {
		border-radius: 0.2em;
		border: none;
		padding: 0;
		max-width: 100%;
		width: 100%;
		height: 100vh;
		max-height: 100%;
	}
	.dialog_content{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 16px 16px 16px;
		position: relative;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
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
	.nav_link{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        cursor: pointer;
    }
	.line{
		content: "";
		width: 40px;
		height: 4px;
		border-radius: 4px;
		background: #DEDEDE;
		margin-bottom: 20px;
	}
	.dialog_title{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.dialog_title p{
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		text-align: left;
		font-family: "Montserrat" !important;
	}
	.links{
		width: 100%;
	}
	.nav_link{
		font-family: 'Inter';
		font-size: 18px;
		font-weight: 500;
		line-height: 24.3px;
		text-align: left;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}
	.nav_link img{
		width: 24px;
		rotate: -90deg;
	}
	:global(.drop_menu){
		top: 70px;
	}
</style>


