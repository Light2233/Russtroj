import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

interface PageContent {
    title: string,
    images: Partial<Array<string>>,
    page: Partial<string>
}

let pageContents: {[key: string]: PageContent} = {
    "main": {
        title: "ДОМ",
        images: [
            "/src/lib/assets/welcome_page_main_bg.png"
        ]
    },
    "baths":{
        title: "БАНЮ",
        images:[
            "/src/lib/assets/welcome_page_baths_bg.png"
        ]
    },
    "pools":{
        title:"БАССЕЙН",
        images:[
            "/src/lib/assets/welcome_page_pools_bg.png"
        ]
    },
    "recreationAreas":{
        title:"ЗОНУ ОТДЫХА",
        images:[
            "/src/lib/assets/welcome_page_recreationAreas_bg.png"
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