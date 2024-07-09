<script>
    import { Navigation, Pagination, Scrollbar, A11y, FreeMode,Mousewheel } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css';
    import 'swiper/css/pagination';

    import slidebg1 from "$lib/assets/slides/slide1.png"
    import slidebg2 from "$lib/assets/slides/slide2.png"
    import slidebg3 from "$lib/assets/slides/slide3.png"
    import swiper_arrow from "$lib/assets/swiper_arrow.svg"

    import HouseStyleModal from './HouseStyleModal.svelte';

    let countSlide = 1 ;

    

    let slides = [
        {
            id:1,
            name:"ДЕРЕВЯННЫЕ ДОМА",
            url:slidebg1,
            ulTitle:"ОСНОВНЫЕ ПРЕИМУЩЕСТВА ДЕРЕВЯННОГО ДОМА",
            ul:[
                {
                    li:"Экологичность: Используем только натуральные и безопасные материалы."
                },
                {
                    li:"Уют и тепло: Дерево сохраняет тепло, создавая комфортный микроклимат в доме."
                },
                {
                    li:"Индивидуальный дизайн: Проектируем дома по вашим пожеланиям и потребностям."
                },
                {
                    li:"Прочность и долговечность: Современные технологии обеспечивают высокую прочность и долговечность конструкции."
                },
                {
                    li:"Быстрое строительство: Наши дома возводятся в кратчайшие сроки без ущерба для качества"
                }
            ]
        },
        {
            id:2,
            name:"ПАНЕЛЬНО-КАРКАСНЫЕ ДОМА",
            url:slidebg2,
            ulTitle:"ОСНОВНЫЕ ПРЕИМУЩЕСТВА ПАНЕЛЬНО-КАРКАСНОГО ДОМА",
            ul:[
                {
                    li:"Энергоэффективность: Отличная теплоизоляция позволяет значительно снизить расходы на отопление и охлаждение."
                },
                {
                    li:"Быстрое строительство: Сборка дома занимает минимальное время без ущерба для качества."
                },
                {
                    li:"Гибкость дизайна: Легко адаптируются к любым архитектурным решениям и требованиям."
                },
                {
                    li:"Экономичность: Снижение затрат на материалы и труд по сравнению с традиционными методами строительства."
                },
                {
                    li:"Долговечность: Высокое качество используемых материалов и технологии обеспечивают длительный срок службы дома."
                }
            ]
        },
        {
            id:3,
            name:"ГАЗО И ПЕНО-БЕТОННЫЕ ДОМА",
            url:slidebg3,
            ulTitle:"ОСНОВНЫЕ ПРЕИМУЩЕСТВА ГАЗО И ПЕНО-БЕТОННОГО ДОМА",
            ul:[
                {
                    li:"Прочность и долговечность: Высокая устойчивость к внешним воздействиям и длительный срок службы."
                },
                {
                    li:"Теплоизоляция: Отличные теплоизоляционные свойства помогают поддерживать комфортную температуру внутри дома, снижая затраты на отопление."
                },
                {
                    li:"Пожаробезопасность: Газо- и панельнобетон не горят, что обеспечивает высокую степень безопасности."
                },
                {
                    li:"Звукоизоляция: Эффективно снижают уровень шума, создавая тихую и комфортную обстановку в доме."
                },
                {
                    li:"Экономичность и скорость строительства: Легкость материала и модульная конструкция позволяют значительно ускорить процесс строительства и снизить затраты."
                }
            ]
            
        },
        {
            id:3,
            name:"ГАЗО И ПЕНО-БЕТОННЫЕ ДОМА",
            url:slidebg3,
            ulTitle:"ОСНОВНЫЕ ПРЕИМУЩЕСТВА ГАЗО И ПЕНО-БЕТОННОГО ДОМА",
            ul:[
                {
                    li:"Прочность и долговечность: Высокая устойчивость к внешним воздействиям и длительный срок службы."
                },
                {
                    li:"Теплоизоляция: Отличные теплоизоляционные свойства помогают поддерживать комфортную температуру внутри дома, снижая затраты на отопление."
                },
                {
                    li:"Пожаробезопасность: Газо- и панельнобетон не горят, что обеспечивает высокую степень безопасности."
                },
                {
                    li:"Звукоизоляция: Эффективно снижают уровень шума, создавая тихую и комфортную обстановку в доме."
                },
                {
                    li:"Экономичность и скорость строительства: Легкость материала и модульная конструкция позволяют значительно ускорить процесс строительства и снизить затраты."
                }
            ]
            
        },
    ]
    let slidesLenght = slides.length
    let showModal = false
    let houseName = ''
    let pagLength = Math.round(slidesLenght/3);
</script>


<div class="slider">

    <button class="prev swiper_btn" class:disable={countSlide<=1} on:click={()=>{ countSlide > 1 ? countSlide-- : countSlide }}><img src="{ swiper_arrow }" alt=""></button>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar,Mousewheel]}
    spaceBetween={ -20 }
    slidesPerView={ 3 }
    navigation = {
        {nextEl: '.next',
        prevEl: ".prev",}
    }
    scrollbar={{ draggable: false }}
    pagination={{ 
        clickable: false,
    }}
    simulateTouch={false}
    
    >
       
        {#each slides as slide (slide.id)}
            <SwiperSlide>
                <button class="slider_content" on:click={()=>{showModal=true,houseName = slide.name}}>
                    <p class="header2">{ slide.name }</p>
                    <img class="slide_bg" src="{ slide.url }" alt="">
                    <button class="main_white_btn main_sm_14">Подробнее</button>
                </button>
            </SwiperSlide>
        {/each}
       
        
        
    </Swiper>
    <button class="next swiper_btn" on:click={()=>{ countSlide < slidesLenght ? countSlide++ : countSlide }} class:disable={countSlide > (slidesLenght-3)}><img src="{ swiper_arrow }" alt=""></button>
</div>

<style>
    .slider_content{
        width: 356px;
        height: 600px;
        cursor: pointer;
        
    }
    .slider{
        width: 100%;
        position: relative;
        margin-top: 40px;
    }
    .slide_bg{
        object-fit: cover;
        object-position: 50%;
        height: 100%;
        width: 100%;
        filter: brightness(60%);
        transform: translateZ(0);
    }
    .swiper_btn{
        height: 44px;
        width: 44px;
        position: absolute;
        top: 50%;
        z-index: 99;
        background-color: var(--Neutral_100);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .2s ease-out;
        
    }
    .swiper_btn img{
        height: 20px;
        width: 20px;
    }
    .prev{
        margin-left: 12px;
    }
    .prev img{
        rotate: -180deg;
    }
    .next{
        right: 0;
        margin-right: 58px;
    }
    .disable{
        opacity: 0;
        z-index: -1;
        transition: all .2s ease-out;
    }
    .pag_line{
        display: flex;
        align-items: center;
        column-gap: 8px;
        position: absolute;
        top: -40px;
        right: 50px;
    }
    .pag{
        width: 12px;
        height: 12px;
        background-color: var(--Neutral_400);
       
    }
    .pag_active{
        background-color: var(--Neutral_900);
    }
    .slider_content button{
        position: absolute;
        bottom: 0;
        margin: 20px;
        opacity: 0;
        left: 0;
    }
    .slider_content:hover button{
        opacity: 1;

    }
    .slider_content p{
        position: absolute;
        z-index: 2;
        color: var(--Neutral_100);
        padding: 20px;
    }
    :global(.swiper){
        overflow: visible;
    }
    :global(.swiper-pagination){
        position: absolute;
        top:-40px;
        text-align: end;
        z-index: -1;
    }
    :global(.swiper-pagination-bullet){
        width: 12px;
        height: 12px;
        border-radius: 0px;
        background: var(--Neutral_400);
    }
    :global(.swiper-pagination-bullet-active){
        background: var(--Neutral_900);
    }
</style>
