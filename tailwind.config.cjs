const config = {
	mode: "jit",
	purge: {
		content: [ "./src/**/*.{html,js,svelte,ts}" ],
		options: {
			safelist: [
			  /data-theme$/,
			]
		  },
		},
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
};

module.exports = config;
