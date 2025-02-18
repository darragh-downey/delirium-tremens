import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

const config = defineConfig({
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: [rehypeSlug],
	layout: {
		_: './src/routes/book/_markdown.svelte'
	}
});

export default config;
