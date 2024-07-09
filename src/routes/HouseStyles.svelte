<script lang="ts">
    import eng_style from "$lib/assets/housestyles/eng_style.png"
    import hightech_style from "$lib/assets/housestyles/hightech_style.png"
    import itl_style from "$lib/assets/housestyles/itl_style.png"
    import min_style from "$lib/assets/housestyles/min_style.png"
    import modern_style from "$lib/assets/housestyles/modern_style.png"
    import ru_style from "$lib/assets/housestyles/ru_style.png"
    import shale_style from "$lib/assets/housestyles/shale_style.png"
    import viking_style from "$lib/assets/housestyles/viking_style.png"


    import eng_style_modal from "$lib/assets/housestyles_modal/eng_style.png"
    import hightech_style_modal from "$lib/assets/housestyles_modal/hightech_style.png"
    import it_style_modal from "$lib/assets/housestyles_modal/it_style.png"
    import min_style_modal from "$lib/assets/housestyles_modal/min_style.png"
    import modern_style_modal from "$lib/assets/housestyles_modal/modern_style.png"
    import rus_style_modal from "$lib/assets/housestyles_modal/rus_style.png"
    import shale_style_modal from "$lib/assets/housestyles_modal/shale_style.png"
    import viking_style_modal from "$lib/assets/housestyles_modal/viking_style.png"

    import HouseStyleModal from "./HouseStyleModal.svelte"

    let styles = [
        {
            name:"АНГЛИЙСКИЙ СТИЛЬ",
            style: "eng_style",
            desc:"",
            url: eng_style
        },
        {
            name:"МОДЕРН",
            style: "modern_style",
            desc:"",
            url: modern_style
        },
        {
            name:"МИНИМАЛИЗМ",
            style: "min_style",
            desc:"",
            url: min_style
        },
        {
            name:"РУССКИЙ СТИЛЬ",
            style: "ru_style",
            desc:"",
            url: ru_style
        },
        {
            name:"ХАЙ-ТЕК",
            style: "hightech_style",
            desc:"",
            url: hightech_style
        },
        {
            name:"ШАЛЕ",
            style: "shale_style",
            desc:"",
            url: shale_style
        },
        {
            name:"ИТАЛЬЯНСКИЙ СТИЛЬ",
            style: "itl_style",
            desc:"",
            url: itl_style
        },
        {
            name:"СКАНДИНАВСКИЙ СТИЛЬ",
            style: "viking_style",
            desc:"",
            url: viking_style
        },
    ]

    let stylesmodal = [
        {
            name:"АНГЛИЙСКИЙ СТИЛЬ",
            desc:"Английский стиль в архитектуре характеризуется сочетанием элегантности и уюта, что делает его популярным среди частных застройщиков. Этот стиль имеет глубокие исторические корни и делится на три основных периода: Тюдоровский, Георгианский и Викторианский. Английский стиль в архитектуре сочетает в себе элементы истории и современности, делая его универсальным выбором для тех, кто ценит традиции и комфорт.",
            url: eng_style_modal,
            
        },
        {
            name:"ХАЙ-ТЕК",
            desc:"Хай-тек в архитектуре – это стиль, зародившийся в 1970-х годах и нашедший широкое применение в 1980-х. Он характеризуется использованием высоких технологий в проектировании, строительстве и инженерии зданий, а также применением прямых линий и форм, стекла, пластика, металла и бетона.",
            url: hightech_style_modal,
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
            url: it_style_modal
        },
        {
            name:"МИНИМАЛИЗМ",
            desc:"Минимализм в архитектуре стремится к предельной простоте и функциональности, отказываясь от излишнего декора и деталей. Этот стиль характеризуется чистыми линиями, простыми геометрическими формами, монохромной цветовой гаммой и большим количеством естественного света.Здания в стиле минимализма обычно имеют плоские крыши, большие окна и стеклянные фасады, которые позволяют максимально использовать естественное освещение. Интерьеры отличаются простотой и лаконичностью, с использованием натуральных материалов, таких как дерево, камень, металл и стекло.",
            url: min_style_modal
        },
        {
            name:"МОДЕРН",
            desc:"Стиль модерн в архитектуре характеризуется отказом от классических принципов симметрии и ордера, а также от античного декора фасадов. Вместо этого, здания в стиле модерн обладают необычными формами и визуальной легкостью, часто с асимметричными композиционно-объемными решениями. Фасады могут иметь округлые, иногда фантастически выгнутые контуры проемов, а очертания зданий могут быть расплывчатыми, образуя спиралевидные планы или превращаясь в структурную бесформенность.",
            url: modern_style_modal
        },
        {
            name:"РУССКИЙ СТИЛЬ",
            desc:"Русский стиль в архитектуре представляет собой направление, которое развивалось в середине 19 века и достигло своего пика в конце 19 начале 20 веков. Он возник как реакция на европеизацию архитектуры, начатую Петром I, и стремился возродить национальные традиции в строительстве.Руский стиль характеризуется использованием элементов древнерусского зодчества, таких как шатровые крыши, луковичные купола, резные украшения и орнаменты. Здания в этом стиле часто имеют асимметричную композицию, что придает им особую выразительность.",
            url: rus_style_modal
        },
        {
            name:"ШАЛЕ",
            desc:"Стиль шале в архитектуре возник в Швейцарии и альпийских регионах Центральной Европы, вдохновленный сельскими домами шале. Он сочетает традиционные строительные конструкции с характерными крышами и украшенными резьбой и балконами фасадами. Стиль шале характеризуется следующими чертами:",
            url: shale_style_modal,
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
            url: viking_style_modal
        },
    ]
    let styleSelected = '';
    let showModal = false;
</script>

<!-- <HouseStyleModal bind:showModal style_name={styleSelected} styles={stylesmodal}/> -->

<div class="styles_grid">
    {#each styles as style, index}
        <button class="style { style.style }" on:click={()=>{showModal = true;styleSelected=style.name}}>
            <img src="{ style.url }" alt="">
            <p class="header2">{ style.name }</p>
            <button class="main_white_btn main_sm_14">Подробнее</button>
        </button>
    {/each}
</div>

<style>
    .style{
        position: relative;
        cursor: pointer;
    }
    .style img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: brightness(80%);
    }
    .styles_grid{
        display: flex;
        flex-wrap: wrap;
        column-gap: 2px;
        row-gap: 2px;
        margin-top: 80px;
    }
    .style{
        height: 400px;
        flex-grow: 0;
        width: 100%;
        max-width: 33.2%;
    }
    .eng_style{
        flex-grow: 1;
        max-width: 49.91%;
    }
    .modern_style{
        flex-grow: 1;
        max-width: 49.91%;
    }
    .style p {
        position: absolute;
        color: white;
        padding: 20px;
        top: 0;
    }
    .style .main_white_btn{
        position: absolute;
        bottom: 0;
        margin: 20px;
        opacity: 0;
        left: 0;
    }
    .style:hover .main_white_btn{
        opacity: 1;

    }

</style>