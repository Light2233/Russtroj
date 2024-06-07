<script lang="ts">
    import eng_style from "$lib/assets/housestyles/eng_style.png"
    import hightech_style from "$lib/assets/housestyles/hightech_style.png"
    import itl_style from "$lib/assets/housestyles/itl_style.png"
    import min_style from "$lib/assets/housestyles/min_style.png"
    import modern_style from "$lib/assets/housestyles/modern_style.png"
    import ru_style from "$lib/assets/housestyles/ru_style.png"
    import shale_style from "$lib/assets/housestyles/shale_style.png"
    import viking_style from "$lib/assets/housestyles/viking_style.png"

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
</script>


<div class="styles_grid">
    {#each styles as style, index}
        <button class="style { style.style }">
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