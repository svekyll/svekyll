
let config;
let contributors;

try {
    config = JSON.parse(import.meta.env.VITE_JEKYLL_CONFIG);
} catch (err) {
    console.log('Unable to load configuration, you may not have a Jekyll-style _config.yml, which is recommeded (see https://svekyll.com/config');
}

try {
    contributors = JSON.parse(import.meta.env.VITE_CONTRIBUTORS);
} catch (err) {
    console.log('Unable to load contributors environment variable (see https://svekyll.com/contributors)');
}

export { config, contributors };