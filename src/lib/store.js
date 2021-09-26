import { writable } from 'svelte/store';
import { config } from '$lib/config';

let title;
let description;

try {
	({ title, description } = config);
} catch (err) {
	console.log(
		'No _config.yml found in environment, you may want to create a Jekyll style _config.yml file (see https://svekyll.com/config)'
	);
}

export const seo = writable({
	title,
	description
});
