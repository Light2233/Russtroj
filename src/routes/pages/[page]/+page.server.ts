import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Actions } from './$types';
import { redirect } from "@sveltejs/kit";



import { sendAppTg } from "$lib/server/bot"

// Welcome page images
import welcome_page_main_bg from "$lib/assets/welcome_page_main_bg.webp"
import welcome_page_pools_bg from "$lib/assets/welcome_page_pools_bg.webp"
import welcome_page_baths_bg from "$lib/assets/welcome_page_baths_bg.webp"
import welcome_page_recreationAreas_bg from "$lib/assets/welcome_page_recreationAreas_bg.webp"
import welcome_page_mangal_bg from "$lib/assets/welcome_page_mangal_bg.webp"

// Main slide images
import slidebg1 from "$lib/assets/slides/slide1.webp"
import slidebg2 from "$lib/assets/slides/slide2.webp"
import slidebg3 from "$lib/assets/slides/slide3.webp"
import slidebg4 from "$lib/assets/slides/slide4.webp"


// Slide bath 
import brus_bath_slide from "$lib/assets/brus_bath_slide.webp"
import block_bath_slide from "$lib/assets/block_bath_slide.webp"
import karkas_bath_slide from "$lib/assets/karkas_bath_slide.webp"

// House styles images
import eng_style from "$lib/assets/housestyles/eng_style.webp"
import hightech_style from "$lib/assets/housestyles/hightech_style.webp"
import itl_style from "$lib/assets/housestyles/itl_style.webp"
import min_style from "$lib/assets/housestyles/min_style.webp"
import modern_style from "$lib/assets/housestyles/modern_style.webp"
import ru_style from "$lib/assets/housestyles/ru_style.webp"
import shale_style from "$lib/assets/housestyles/shale_style.webp"
import viking_style from "$lib/assets/housestyles/viking_style.webp"

import { t, locale, locales } from "$lib/client/i18n";
import { get } from 'svelte/store';

import application_bg from "$lib/assets/application_bg.webp"

import eng_style_modal from "$lib/assets/housestyles_modal/eng_style.webp"
import hightech_style_modal from "$lib/assets/housestyles_modal/hightech_style.webp"
import it_style_modal from "$lib/assets/housestyles_modal/it_style.webp"
import min_style_modal from "$lib/assets/housestyles_modal/min_style.webp"
import modern_style_modal from "$lib/assets/housestyles_modal/modern_style.webp"
import rus_style_modal from "$lib/assets/housestyles_modal/rus_style.webp"
import shale_style_modal from "$lib/assets/housestyles_modal/shale_style.webp"
import viking_style_modal from "$lib/assets/housestyles_modal/viking_style.webp"
// import { stylesmodal } from '../../HouseStyles.svelte';
import { page } from '$app/stores';


// chill zone images 

import outdoor from "$lib/assets/areasstyles/outdoor.webp"
import patio from "$lib/assets/areasstyles/patio.webp"
import alcove from "$lib/assets/areasstyles/alcove.png"
import bbq_zone from "$lib/assets/areasstyles/bbq_zone.webp"

// bbq zone images

import open from "$lib/assets/gazebpstyles/open.png"
import semi_open from "$lib/assets/gazebpstyles/semi_open.webp"
import closed from "$lib/assets/gazebpstyles/closed.webp"
import open_bbq from "$lib/assets/gazebpstyles/open_bbq.webp"
import semi_open_bbq from "$lib/assets/gazebpstyles/semi_open_bbq.webp"
import closed_bbq from "$lib/assets/gazebpstyles/closed_bbq.webp"
 
interface PageContent {
    title: Partial<Array<string>>,
    images: Partial<Array<string>>,
    page: Partial<string>,
    questions : Partial<Array<Object>>,
    stylesmodal: Partial<Array<Object>>,
    slides:Partial<Array<Object>>,
}

locale.set(`${locale}`);

let pageContents: {[key: string]: PageContent} = {
    "main": {
        title: ["Дом","Вашего дома"],
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
                    },
                    {
                        id:2,
                        answ:"ГАЗОБЕТОН",
                    },
                    {
                        id:3,
                        answ:"ТЕПЛАЯ КЕРАМИКА",
                    }
                ]
            },
            {
                id:2,
                name:"УКАЖИТЕ ПЛОЩАДЬ БУДУЩЕГО ДОМА",
                
                value:[],
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
                name:"en",
                desc:"Английский стиль в архитектуре характеризуется сочетанием элегантности и уюта, что делает его популярным среди частных застройщиков. Этот стиль имеет глубокие исторические корни и делится на три основных периода: Тюдоровский, Георгианский и Викторианский. Английский стиль в архитектуре сочетает в себе элементы истории и современности, делая его универсальным выбором для тех, кто ценит традиции и комфорт.",
                urlModal: eng_style_modal,
                url: eng_style,
                style: "eng_style",
                
            },
            {
                name:"modern",
                desc:"Стиль модерн в архитектуре характеризуется отказом от классических принципов симметрии и ордера, а также от античного декора фасадов. Вместо этого, здания в стиле модерн обладают необычными формами и визуальной легкостью, часто с асимметричными композиционно-объемными решениями. Фасады могут иметь округлые, иногда фантастически выгнутые контуры проемов, а очертания зданий могут быть расплывчатыми, образуя спиралевидные планы или превращаясь в структурную бесформенность.",
                urlModal: modern_style_modal,
                url:modern_style,
                style: "modern_style",
            },
            {
                name:"min",
                desc:"Минимализм в архитектуре стремится к предельной простоте и функциональности, отказываясь от излишнего декора и деталей. Этот стиль характеризуется чистыми линиями, простыми геометрическими формами, монохромной цветовой гаммой и большим количеством естественного света.Здания в стиле минимализма обычно имеют плоские крыши, большие окна и стеклянные фасады, которые позволяют максимально использовать естественное освещение. Интерьеры отличаются простотой и лаконичностью, с использованием натуральных материалов, таких как дерево, камень, металл и стекло.",
                urlModal: min_style_modal,
                url:min_style,
                style: "min_style",
            },
            {
                name:"ru",
                desc:"Русский стиль в архитектуре представляет собой направление, которое развивалось в середине 19 века и достигло своего пика в конце 19 начале 20 веков. Он возник как реакция на европеизацию архитектуры, начатую Петром I, и стремился возродить национальные традиции в строительстве.Руский стиль характеризуется использованием элементов древнерусского зодчества, таких как шатровые крыши, луковичные купола, резные украшения и орнаменты. Здания в этом стиле часто имеют асимметричную композицию, что придает им особую выразительность.",
                urlModal: rus_style_modal,
                url:ru_style,
                style: "ru_style",
            },
            {
                name:"hightech",
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
                name:"shale",
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
                name:"it",
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
                name:"viking",
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
                name: "wood",
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
                name:"panel",
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
                name:"gaz",
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

                name: "termo",
                urlModal:slidebg4,
                ulTitle:"ОСНОВНЫЕ ПРЕИМУЩЕСТВА ТЕРМОДОМА",
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

                name: "brick",
                urlModal:application_bg,
                ulTitle:"ОСНОВНЫЕ ПРЕИМУЩЕСТВА КИРПИЧНОГО ДОМА",
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
        questions:[
            {
                id:1,
                name:"ВЫБЕРИТЕ МАТЕРИАЛ СТРОИТЕЛЬСТВА",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"БРЕВНО И БРУС",
                    },
                    {
                        id:2,
                        answ:"ГАЗОБЕТОН",
                    },
                    {
                        id:3,
                        answ:"ТЕПЛАЯ КЕРАМИКА",
                    }
                ]
            },
            {
                id:2,
                name:"УКАЖИТЕ ПЛОЩАДЬ БУДУЩЕЙ БАНИ",
                value:[],
                questions:[],
            },
            {
                id:3,
                name:"НАЛИЧИЕ УЧАСТКА ПОД СТРОИТЕЛЬСТВО БАНИ",
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
        stylesmodal:[],
        slides:[
            {
                name:"BATH FROM WOOD",
                urlModal: brus_bath_slide
            },
            {
                name:"BATH FROM BLOCKS",
                urlModal: block_bath_slide
            },
            {
                name: "FRAME BATH",
                urlModal: karkas_bath_slide
            }
        ]

    },
    "pools":{
        title:["БАССЕЙН","ВАШЕГО БАССЕЙНА"],
        page:'pools',
        slides:[],
        stylesmodal:[],
        questions:[
            {
                id:1,
                name:"ВЫБЕРИТЕ ТИП БАССЕЙНА",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"БЕТОННЫЙ",
                    },
                    {
                        id:2,
                        answ:"КОМПОЗИТНЫЙ",
                    },
                    {
                        id:3,
                        answ:"НУЖНА КОНСУЛЬТАЦИЯ",
                    }
                ]
            },
            {
                id:2,
                name:"РАСПОЛОЖЕНИЕ БАССЕЙНА",
                value: null,
                questions:[
                    {
                        id:1,
                        answ:"НА УЛИЦЕ",
                    },
                    {
                        id:2,
                        answ:"В ПОМЕЩЕНИИ",
                    },
                ],
            },
            {
                id:3,
                name:"ВИД БАССЕЙНА",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"СКИММЕРНЫЙ",
                    },
                    {
                        id:2,
                        answ:"ПЕРЕЛИВНОЙ",
                    },
                    {
                        id:3,
                        answ:"НУЖНА КОНСУЛЬТАЦИЯ",
                    }
                ]
            },
            {
                id:4,
                name:"АТТРАКЦИОНЫ",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"ГИДРОМАССАЖ",
                    },
                    {
                        id:2,
                        answ:"АЭРОМАССАЖ",
                    },
                    {
                        id:3,
                        answ:"ПРОТИВОТОК",
                    },
                    {
                        id:4,
                        answ:"ВОДОПАД",
                    },
                    {
                        id:5,
                        answ:"БЕЗ АТТРАКЦИОНОВ",
                    }
                ]
            },
            {
                id:5,
                name:"ПОДОГРЕВ БАССЕЙНА",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"ДА",
                    },
                    {
                        id:2,
                        answ:"НЕТ",
                    },
                    {
                        id:3,
                        answ:"НЕ ЗНАЮ",
                    },
                ]
            },
            {
                id:6,
                name:"КОГДА ПЛАНИРУЕТСЯ НАЧАЛО СТРОИТЕЛЬСТВА?",
                value:null,
                questions:[
                    {
                        id:1,
                        answ:"КАК МОЖНО СКОРЕЕ",
                    },
                    {
                        id:2,
                        answ:"В ТЕЧЕНИЕ ЭТОГО МЕСЯЦА",
                    },
                    {
                        id:3,
                        answ:"В ТЕЧЕНИЕ 3-6 МЕСЯЦЕВ",
                    },
                    {
                        id:4,
                        answ : "НЕ ЗНАЮ"
                    }
                ]
            },
            {
                id:7,
                name:"ПРИМЕРНАЯ ДЛИНА БАССЕЙНА В МЕТРАХ",
                value:[],
                questions:[],
            },
            {
                id:8,
                name:"КАКИМ СПОСОБОМ УДОБНЕЕ ПОЛУЧИТЬ РЕЗУЛЬТАТ?",
                desc:"Наши специалисты уже приступили к расчёту",
                value:null,
            },
        ],
        images:[
            welcome_page_pools_bg
        ]
    },
    "recreationAreas":{
        title:["ЗОНУ ОТДЫХА",'ЗОНЫ ОТДЫХА'],
        page:'recreationAreas',
        images:[
            welcome_page_recreationAreas_bg
        ],
        slides:[],
        stylesmodal:[
            {
                name:'terrace',
                url:outdoor
            },
            {
                name:'patio',
                url:patio
            },
            {
                name:'alcove',
                url:alcove
            },
            {
                name:'BBQ area',
                url:bbq_zone
            },
            {
                name:'recreation area',
                url:welcome_page_recreationAreas_bg
            }
            
        ]
    },
    "gazebo":{
        title:["БЕСЕДКУ ИЛИ ЗОНУ БАРБЕКЮ",""],
        page:'gazebo',
        images:[
            welcome_page_mangal_bg
        ],
        slides:[],
        stylesmodal:[
            {
                name:"summer outdoor",
                url: open
            },
            {
                name:"semi-open",
                url: semi_open
            },
            {
                name:"closed",
                url:  closed
            },
            {
                name:"outdoor",
                url: open_bbq
            },
            {
                name:"semi-outdoor",
                url: semi_open_bbq
            },
            {
                name:"indoor",
                url: closed_bbq
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

    
export const actions = {
	sendApp: async ({request}) => {
        let data = await request.formData();
        let roflData = Object.fromEntries(data);
        let requestForm : RequestForm = {};

        
        if (roflData?.answers) {
            requestForm.answers = JSON.parse(roflData.answers);
        } else if (roflData?.projectFile) {
            requestForm.projectFile = roflData.projectFile;
            requestForm.phone = roflData.phone;
        } else {
            requestForm.phone = roflData.phone;
        };
        
        await sendAppTg(requestForm);
        redirect(302, `/pages/main?success=true&fromBlock=${roflData.blockName}`);
}
} satisfies Actions