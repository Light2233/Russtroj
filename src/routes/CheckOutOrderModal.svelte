<script>
    export let showModal = false;
    let dialog; 
    $: if (dialog && showModal) dialog.showModal();
    import { fade } from "svelte/transition";
</script>


<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
bind:this={dialog}
on:close={() => (showModal = false)}
on:click|self={() => dialog.close()}
>


<div class="dialog_content">
    <p class="header1">ВЫЕЗД ИНЖЕНЕРА А ОБЪЕКТ ЗА СЧЕТ КОМПАНИИ</p>
    <form action="">
        <div class="">
            <p class="header3">номер телефона</p>
            <input type="text" placeholder="+7 (900) 000-00-00">
        </div>
        <button type="submit" class="main_black_btn">Вызвать инженера</button>
    </form>
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
    .dialog_content{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        row-gap: 57px;
        flex-direction: column;
        background: white;
        max-width: 356px;
    }
    .dialog_content .header1{
        text-align: center;
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
    form div{
        display: flex;
        row-gap: 8px;
        flex-direction: column;
    }
    form  input{
        border: 1px solid var(--Neutral_600);
        color: var(--Neutral_900);
        padding: 16px;
        border-radius: 0;
    }
    form input:focus{
        border: 1px solid var(--Neutral_900);
        border-radius: 0;
        outline: none;
    }
    .dialog_content .main_black_btn{
        width: 100%;
        max-width: 100%;
    }
</style>