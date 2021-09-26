import preprocess from "svelte-preprocess";
import fs from 'fs';
import yaml from 'js-yaml';

try {
    const doc = yaml.load(fs.readFileSync('_config.yml', 'utf8'));
    process.env.VITE_JEKYLL_CONFIG = JSON.stringify(doc);
} catch (err) {
    console.log('Unable to process _config.yml, skipping (you may not have a _config.yml and that is fine)');
}
// console.log("ENV: ", JSON.stringify(process.env));

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

    preprocess: [preprocess({
        postcss: true
    })]
};

export default config;
