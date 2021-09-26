const layout = {
  _: './src/layouts/blog.svelte',
  'resume': './src/layouts/resume.svelte'
}

const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": [],
  layout,
};

export default config;