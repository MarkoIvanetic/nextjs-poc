const DUMMY_POSTS = [
	{
		slug: 'getting-started-with-nextjs',
		title: 'Getting Started with NextJS',
		image: 'images/code_1.jpg',
		excerpt:
			'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
		date: '2022-02-10',
	},
	{
		slug: 'getting-started-with-nextjs2',
		title: 'Getting Started with NextJS',
		image: 'images/code_2.jpg',
		excerpt:
			'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
		date: '2022-02-10',
	},
	{
		slug: 'getting-started-with-nextjs3',
		title: 'Getting Started with NextJS',
		image: 'images/code_3.jpg',
		isFeatured: true,
		excerpt:
			'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
		date: '2022-02-10',
	},
	{
		slug: 'getting-started-with-nextjs4',
		title: 'Getting Started with NextJS',
		image: 'images/code_4.jpg',
		excerpt:
			'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
		date: '2022-02-10',
	},
]

const getEvents = () => {
	return DUMMY_POSTS
}

const getFeaturedEvents = () => {
	return DUMMY_POSTS.filter((event) => event.isFeatured)
}

const getEventBySlug = (slug) => {
	return DUMMY_POSTS.find((event) => event.slug === slug)
}

export { getEvents, getFeaturedEvents, getEventBySlug }
