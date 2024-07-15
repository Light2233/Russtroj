import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// Welcome page images
import welcome_page_main_bg from "$lib/assets/welcome_page_main_bg.png"
import welcome_page_pools_bg from "$lib/assets/welcome_page_pools_bg.png"
import welcome_page_baths_bg from "$lib/assets/welcome_page_baths_bg.png"
import welcome_page_recreationAreas_bg from "$lib/assets/welcome_page_recreationAreas_bg.png"
import welcome_page_mangal_bg from "$lib/assets/welcome_page_mangal_bg.png"

// Calculated images
import quest_img_1 from "$lib/assets/quest_img_1.png"
import quest_img_2 from "$lib/assets/quest_img_2.png"
import quest_img_3 from "$lib/assets/quest_img_3.png"

// Main slide images
import slidebg1 from "$lib/assets/slides/slide1.webp"
import slidebg2 from "$lib/assets/slides/slide2.webp"
import slidebg3 from "$lib/assets/slides/slide3.webp"


// Slide bath 
import brus_bath_slide from "$lib/assets/brus_bath_slide.png"
import block_bath_slide from "$lib/assets/block_bath_slide.png"
import karkas_bath_slide from "$lib/assets/karkas_bath_slide.png"

// House styles images
import eng_style from "$lib/assets/housestyles/eng_style.webp"
import hightech_style from "$lib/assets/housestyles/hightech_style.webp"
import itl_style from "$lib/assets/housestyles/itl_style.webp"
import min_style from "$lib/assets/housestyles/min_style.webp"
import modern_style from "$lib/assets/housestyles/modern_style.webp"
import ru_style from "$lib/assets/housestyles/ru_style.webp"
import shale_style from "$lib/assets/housestyles/shale_style.webp"
import viking_style from "$lib/assets/housestyles/viking_style.webp"


import eng_style_modal from "$lib/assets/housestyles_modal/eng_style.png"
import hightech_style_modal from "$lib/assets/housestyles_modal/hightech_style.png"
import it_style_modal from "$lib/assets/housestyles_modal/it_style.png"
import min_style_modal from "$lib/assets/housestyles_modal/min_style.png"
import modern_style_modal from "$lib/assets/housestyles_modal/modern_style.png"
import rus_style_modal from "$lib/assets/housestyles_modal/rus_style.png"
import shale_style_modal from "$lib/assets/housestyles_modal/shale_style.png"
import viking_style_modal from "$lib/assets/housestyles_modal/viking_style.png"
import { stylesmodal } from '../../HouseStyles.svelte';
import { page } from '$app/stores';

 
interface PageContent {
    title: Partial<Array<string>>,
    images: Partial<Array<string>>,
    page: Partial<string>,
    questions : Partial<Array<Object>>,
    stylesmodal: Partial<Array<Object>>,
    slides:Partial<Array<Object>>,
}

let pageContents: {[key: string]: PageContent} = {
    "main": {
        title: ["ДОМ","ВАШЕГО ДОМА"],
        page:'main',
        images: [
            welcome_page_main_bg
        ],
        questions:[
            {
                id:1,
                name:"ВЫБЕРИТЕ МАТЕРИАЛ СТРОИТЕЛЬСТВА",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"БРЕВНО И БРУС",
                        url:quest_img_1,
                    },
                    {
                        id:2,
                        answ:"ГАЗОБЕТОН",
                        url:quest_img_2,
                    },
                    {
                        id:3,
                        answ:"ТЕПЛАЯ КЕРАМИКА",
                        url:quest_img_3,
                    }
                ]
            },
            {
                id:2,
                name:"УКАЖИТЕ ПЛОЩАДЬ БУДУЩЕГО ДОМА",
                value:12,
                questions:[],
            },
            {
                id:3,
                name:"НАЛИЧИЕ УЧАСТКА ПОД СТРОИТЕЛЬСТВО",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"ECТЬ",
                    },
                    {
                        id:2,
                        answ:"НЕТ",
                    },
                    {
                        id:3,
                        answ:"НА СТАДИИ ОФОРМЛЕНИЯ",
                    }
                ]
            },
            {
                id:4,
                name:"КОГДА ПЛАНИРУЕТСЯ НАЧАЛО СТРОИТЕЛЬСТВА?",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"В БЛИЖАЙШИЕ 2-3 МЕСЯЦА",
                    },
                    {
                        id:2,
                        answ:"В ТЕЧЕНИЕ ГОДА",
                    },
                    {
                        id:3,
                        answ:"В ТЕЧЕНИЕ НЕСКОЛЬКИХ ЛЕТ",
                    }
                ]
            },
            {
                id:5,
                name:"БЮДЖЕТ НА СТРОИТЕЛЬСТВО",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"15–35 ТЫС. €",
                    },
                    {
                        id:2,
                        answ:"35–65 ТЫС. €",
                    },
                    {
                        id:3,
                        answ:"65–150 ТЫС. €",
                    },
                    {
                        id:4,
                        answ:"БОЛЕЕ 150 ТЫС. €",
                    }
                ]
            },
            {
                id:6,
                name:"КАКИМ СПОСОБОМ УДОБНЕЕ ПОЛУЧИТЬ РЕЗУЛЬТАТ?",
                desc:"Наши специалисты уже приступили к расчёту",
                value:null,
            },
        ],
        stylesmodal:[
            {
                name:"АНГЛИЙСКИЙ СТИЛЬ",
                desc:"Английский стиль в архитектуре характеризуется сочетанием элегантности и уюта, что делает его популярным среди частных застройщиков. Этот стиль имеет глубокие исторические корни и делится на три основных периода: Тюдоровский, Георгианский и Викторианский. Английский стиль в архитектуре сочетает в себе элементы истории и современности, делая его универсальным выбором для тех, кто ценит традиции и комфорт.",
                urlModal: eng_style_modal,
                url: eng_style,
                style: "eng_style",
                
            },
            {
                name:"МОДЕРН",
                desc:"Стиль модерн в архитектуре характеризуется отказом от классических принципов симметрии и ордера, а также от античного декора фасадов. Вместо этого, здания в стиле модерн обладают необычными формами и визуальной легкостью, часто с асимметричными композиционно-объемными решениями. Фасады могут иметь округлые, иногда фантастически выгнутые контуры проемов, а очертания зданий могут быть расплывчатыми, образуя спиралевидные планы или превращаясь в структурную бесформенность.",
                urlModal: modern_style_modal,
                url:modern_style,
                style: "modern_style",
            },
            {
                name:"МИНИМАЛИЗМ",
                desc:"Минимализм в архитектуре стремится к предельной простоте и функциональности, отказываясь от излишнего декора и деталей. Этот стиль характеризуется чистыми линиями, простыми геометрическими формами, монохромной цветовой гаммой и большим количеством естественного света.Здания в стиле минимализма обычно имеют плоские крыши, большие окна и стеклянные фасады, которые позволяют максимально использовать естественное освещение. Интерьеры отличаются простотой и лаконичностью, с использованием натуральных материалов, таких как дерево, камень, металл и стекло.",
                urlModal: min_style_modal,
                url:min_style,
                style: "min_style",
            },
            {
                name:"РУССКИЙ СТИЛЬ",
                desc:"Русский стиль в архитектуре представляет собой направление, которое развивалось в середине 19 века и достигло своего пика в конце 19 начале 20 веков. Он возник как реакция на европеизацию архитектуры, начатую Петром I, и стремился возродить национальные традиции в строительстве.Руский стиль характеризуется использованием элементов древнерусского зодчества, таких как шатровые крыши, луковичные купола, резные украшения и орнаменты. Здания в этом стиле часто имеют асимметричную композицию, что придает им особую выразительность.",
                urlModal: rus_style_modal,
                url:ru_style,
                style: "ru_style",
            },
            {
                name:"ХАЙ-ТЕК",
                desc:"Хай-тек в архитектуре – это стиль, зародившийся в 1970-х годах и нашедший широкое применение в 1980-х. Он характеризуется использованием высоких технологий в проектировании, строительстве и инженерии зданий, а также применением прямых линий и форм, стекла, пластика, металла и бетона.",
                urlModal: hightech_style_modal,
                url: hightech_style,
                style: "hightech_style",

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
                name:"ШАЛЕ",
                desc:"Стиль шале в архитектуре возник в Швейцарии и альпийских регионах Центральной Европы, вдохновленный сельскими домами шале. Он сочетает традиционные строительные конструкции с характерными крышами и украшенными резьбой и балконами фасадами. Стиль шале характеризуется следующими чертами:",
                urlModal: shale_style_modal,
                url:shale_style,
                style: "shale_style",
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
                name:"ИТАЛЬЯНСКИЙ СТИЛЬ",
                desc:"Итальянский стиль в архитектуре характеризуется рядом особенностей, которые делают его узнаваемым и привлекательным. Вот основные черты этого стиля:",
                urlModal: it_style_modal,
                url: itl_style,
                style: "itl_style",
                ul:[
                    {
                        li:"Использование классических форм и пропорций. Итальянский стиль опирается на принципы классической архитектуры, такие как симметрия, пропорции и гармония. Здания в этом стиле часто имеют четкие геометрические формы и симметричный план."
                    },
                    {
                        li:"Декоративные элементы. Итальянский стиль богат декоративными элементами, такими как колонны, пилястры, арки, карнизы, фризы и барельефы. Эти элементы придают зданиям изящество и элегантность."
                    },
                ]
                
            },   
            {
                name:"СКАНДИНАВСКИЙ СТИЛЬ",
                desc:"Скандинавский стиль в архитектуре характеризуется рядом особенностей, которые делают его узнаваемым и популярным. Основные черты этого стиля:",
                urlModal: viking_style_modal,
                url:viking_style,
                style: "viking_style",
                ul:[
                    {
                        li:"Простые формы и прямые линии. Здания в скандинавском стиле отличаются простотой форм и прямыми линиями. Это придаёт им современный и лаконичный вид."
                    },
                    {
                        li:"Большое остекление.Скандинавский стиль предполагает использование большого количества окон, что обеспечивает хорошее естественное освещение  помещений."
                    },
                    {
                        li:"Натуральные материалы. В скандинавском стиле предпочтение отдаётся натуральным материалам, таким как дерево, камень и металл. Они используются для создания экологичных и долговечных зданий."
                    }
                ]
            },
        ],
        slides: [
            {
                name: "ДЕРЕВЯННЫЕ ДОМА",
                urlModal:slidebg1,
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
                name:"ПАНЕЛЬНО-КАРКАСНЫЕ ДОМА",
                urlModal:slidebg2,
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
                name:"ГАЗО И ПЕНО-БЕТОННЫЕ ДОМА",
                urlModal:slidebg3,
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

                name:"ГАЗО И ПЕНО-БЕТОННЫЕ ДОМА",
                urlModal:slidebg3,
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
    },
    
    "baths": {
        title: ["БАНЮ","ВАШЕЙ БАНИ"],
        page:'baths',
        images:[
            welcome_page_baths_bg
        ],
        questions:[],
        stylesmodal:[],
        slides:[
            {
                name:"БАНЯ ИЗ БРУСА",
                urlModal: brus_bath_slide
            },
            {
                name:"БАНЯ ИЗ БЛОКОВ",
                urlModal: block_bath_slide
            },
            {
                name: "КАРКАСНАЯ БАНЯ",
                urlModal: karkas_bath_slide
            }
        ]

    },
    "pools":{
        title:["БАССЕЙН","ВАШЕГО БАССЕЙНА"],
        page:'pools',
        images:[
            welcome_page_pools_bg
        ]
    },
    "recreationAreas":{
        title:["ЗОНУ ОТДЫХА",''],
        page:'recreationAreas',
        images:[
            welcome_page_recreationAreas_bg
        ],
        stylesmodal:[
            {
                name:'ОТКРЫТАЯ ТЕРАССА',
                url:''
            },
            {
                name:'ПАТИО',
                url:''
            },
            {
                name:'БЕСЕДКА',
                url:''
            },
            {
                name:'ЗОНА БАРБЕКЮ',
                url:''
            },
            {
                name:'ЗОНА ОТДЫХА С НАВЕСОМ',
                url:''
            }
            
        ]
    },
    "gazebo":{
        title:["БЕСЕДКУ ИЛИ ЗОНУ БАРБЕКЮ",""],
        page:'gazebo',
        images:[
            welcome_page_mangal_bg
        ],
        stylesmodal:[
            {
                name:"ЛЕТНЯЯ ОТКРЫТАЯ БЕСЕДКА",
                url: ''
            },
            {
                name:"ПОЛУОТКРЫТАЯ БЕСЕДКА",
                url: ''
            },
            {
                name:"ЗАКРЫТАЯ БЕСЕДКА",
                url: ''
            },
            {
                name:"ОТКРЫТАЯ ЗОНА БАРБЕКЮ",
                url: ''
            },
            {
                name:"ПОЛУОТКРЫТАЯ ЗОНА БАРБЕКЮ",
                url: ''
            },
            {
                name:"ЗАКРЫТАЯ ЗОНА БАРБЕКЮ",
                url: ''
            },
        ]
    }
}


export const load: PageLoad = ({ params }) => {
	const slug = params.page;

    let content = pageContents?.[slug];
    if (!content) {
        throw error(404, {
			message: 'Not found',
		});
    }
    content = {...content, page: slug}
    return {
        content,
	};
};