import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import welcome_page_main_bg from "$lib/assets/welcome_page_main_bg.png"
import welcome_page_pools_bg from "$lib/assets/welcome_page_pools_bg.png"
import welcome_page_baths_bg from "$lib/assets/welcome_page_baths_bg.png"
import welcome_page_recreationAreas_bg from "$lib/assets/welcome_page_recreationAreas_bg.png"


import quest_img_1 from "$lib/assets/quest_img_1.png"
import quest_img_2 from "$lib/assets/quest_img_2.png"
import quest_img_3 from "$lib/assets/quest_img_3.png"

 
interface PageContent {
    title: string,
    images: Partial<Array<string>>,
    page: Partial<string>,
    questions : Partial<Array<Object>>,
}

let pageContents: {[key: string]: PageContent} = {
    "main": {
        title: "ДОМ",
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
        ]
    },
    "baths":{
        title: "БАНЮ",
        images:[
            welcome_page_baths_bg
        ]
    },
    "pools":{
        title:"БАССЕЙН",
        images:[
            welcome_page_pools_bg
        ]
    },
    "recreationAreas":{
        title:"ЗОНУ ОТДЫХА",
        images:[
            welcome_page_recreationAreas_bg
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