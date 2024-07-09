<script lang="ts">
    export let style_name;
    export let showModal;
	let dialog; 
    
    import { onMount, afterUpdate } from "svelte"
    import {fade} from "svelte/transition"

    import eng_style from "$lib/assets/housestyles_modal/eng_style.png"
    import hightech_style from "$lib/assets/housestyles_modal/hightech_style.png"
    import it_style from "$lib/assets/housestyles_modal/it_style.png"
    import min_style from "$lib/assets/housestyles_modal/min_style.png"
    import modern_style from "$lib/assets/housestyles_modal/modern_style.png"
    import rus_style from "$lib/assets/housestyles_modal/rus_style.png"
    import shale_style from "$lib/assets/housestyles_modal/shale_style.png"
    import viking_style from "$lib/assets/housestyles_modal/viking_style.png"
    import close from '$lib/assets/close.svg'


	$: if (dialog && showModal) dialog.showModal();
    

    let styles = [
        {
            name:"АНГЛИЙСКИЙ СТИЛЬ",
            desc:"Английский стиль в архитектуре характеризуется сочетанием элегантности и уюта, что делает его популярным среди частных застройщиков. Этот стиль имеет глубокие исторические корни и делится на три основных периода: Тюдоровский, Георгианский и Викторианский. Английский стиль в архитектуре сочетает в себе элементы истории и современности, делая его универсальным выбором для тех, кто ценит традиции и комфорт.",
            url: eng_style,
            
        },
        {
            name:"ХАЙ-ТЕК",
            desc:"Хай-тек в архитектуре – это стиль, зародившийся в 1970-х годах и нашедший широкое применение в 1980-х. Он характеризуется использованием высоких технологий в проектировании, строительстве и инженерии зданий, а также применением прямых линий и форм, стекла, пластика, металла и бетона.",
            url: hightech_style,
            ulTitle:"Основные черты хай-тека включают:",
            ul:[
                {
                    li:'использование высоких технологий в проектировании и строительстве;',
                },
                {
                    li:'прямые линии и формы;',
                },
                {
                    li:'широкое применение стекла, пластика, металла и бетона;',
                },
                {
                    li:'функциональные элементы (лифты, лестницы, системы вентиляции), вынесенные наружу здания;',
                },
                {
                    li:'децентрированное освещение, создающее эффект просторного, хорошо освещённого помещения',
                },
            ]
        },
        {
            name:"ИТАЛЬЯНСКИЙ СТИЛЬ",
            desc:"Английский стиль в архитектуре характеризуется сочетанием элегантности и уюта, что делает его популярным среди частных застройщиков. Этот стиль имеет глубокие исторические корни и делится на три основных периода: Тюдоровский, Георгианский и Викторианский. Английский стиль в архитектуре сочетает в себе элементы истории и современности, делая его универсальным выбором для тех, кто ценит традиции и комфорт.",
            url: it_style
        },
        {
            name:"МИНИМАЛИЗМ",
            desc:"Минимализм в архитектуре стремится к предельной простоте и функциональности, отказываясь от излишнего декора и деталей. Этот стиль характеризуется чистыми линиями, простыми геометрическими формами, монохромной цветовой гаммой и большим количеством естественного света.Здания в стиле минимализма обычно имеют плоские крыши, большие окна и стеклянные фасады, которые позволяют максимально использовать естественное освещение. Интерьеры отличаются простотой и лаконичностью, с использованием натуральных материалов, таких как дерево, камень, металл и стекло.",
            url: min_style
        },
        {
            name:"МОДЕРН",
            desc:"Стиль модерн в архитектуре характеризуется отказом от классических принципов симметрии и ордера, а также от античного декора фасадов. Вместо этого, здания в стиле модерн обладают необычными формами и визуальной легкостью, часто с асимметричными композиционно-объемными решениями. Фасады могут иметь округлые, иногда фантастически выгнутые контуры проемов, а очертания зданий могут быть расплывчатыми, образуя спиралевидные планы или превращаясь в структурную бесформенность.",
            url: modern_style
        },
        {
            name:"РУССКИЙ СТИЛЬ",
            desc:"Русский стиль в архитектуре представляет собой направление, которое развивалось в середине 19 века и достигло своего пика в конце 19 начале 20 веков. Он возник как реакция на европеизацию архитектуры, начатую Петром I, и стремился возродить национальные традиции в строительстве.Руский стиль характеризуется использованием элементов древнерусского зодчества, таких как шатровые крыши, луковичные купола, резные украшения и орнаменты. Здания в этом стиле часто имеют асимметричную композицию, что придает им особую выразительность.",
            url: rus_style
        },
        {
            name:"ШАЛЕ",
            desc:"Стиль шале в архитектуре возник в Швейцарии и альпийских регионах Центральной Европы, вдохновленный сельскими домами шале. Он сочетает традиционные строительные конструкции с характерными крышами и украшенными резьбой и балконами фасадами. Стиль шале характеризуется следующими чертами:",
            url: shale_style,
            ul:[
                {
                    li:"Щипец с широкими карнизами: Это отличительная черта стиля шале, которая придает зданию уникальный вид."
                },
                {
                    li:"Балки и крупные кронштейны: Они используются для поддержки крыши и создают впечатление надежности и устойчивости."
                },
                {
                    li:"Декоративная резьба и лепнина: Фасад здания украшается резьбой и лепниной, что придает ему изысканность и элегантность."
                }
            ]
        },
        {
            name:"СКАНДИНАВСКИЙ СТИЛЬ",
            desc:"Английский стиль в архитектуре характеризуется сочетанием элегантности и уюта, что делает его популярным среди частных застройщиков. Этот стиль имеет глубокие исторические корни и делится на три основных периода: Тюдоровский, Георгианский и Викторианский. Английский стиль в архитектуре сочетает в себе элементы истории и современности, делая его универсальным выбором для тех, кто ценит традиции и комфорт.",
            url: viking_style
        },
    ]
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
                <button on:click={()=>{showModal=false;dialog.close()}}><img src="{ close }" alt=""></button>
                <p class="header1">{styleSelected?.name}</p>
            </div>
            <p class="main_sm_18">{styleSelected?.desc}</p>
        </div>
        {#key styleSelected}
        <div class="style_img" in:fade>
            <img src="{ styleSelected?.url }" alt="">
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
    .dialog_content {
        max-width: 1108px;
        max-height: 490px;
        width: 100%;
        height: 100%;
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
</style>