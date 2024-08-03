import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({url}) => {
	let success = Boolean(url.searchParams.get('success'))
	let fromBlock = url.searchParams.get('fromBlock')

	return {
		success,
		fromBlock
	}
};