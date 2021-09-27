import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
import fs from 'fs';
import yaml from 'js-yaml';

try {
    const file = fs.readFileSync('_config.yml', 'utf8');
    const doc = yaml.load(file);
    // console.log('File is: ', file);
    process.env.VITE_JEKYLL_CONFIG = JSON.stringify(doc);

} catch (err) {
    console.log('Unable to process _config.yml, skipping (you may not have a _config.yml and that is fine)');
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],
    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: adapter()
	},

    preprocess: [preprocess({
        postcss: true
    }), mdsvex(mdsvexConfig)]
};

export default config;
