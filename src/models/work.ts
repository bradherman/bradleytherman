interface Position {
	title: string;
	details: string[];
}

export interface Job {
	start: string;
	end: string | null;
	company: string;
	description?: string;
	stack?: string[];
	website: string;
	positions: Position[];
}

export const work: Job[] = [
	{
		start: "August 2021",
		end: null,
		company: "Release",
		website: "https://tryrelease.com",
		description:
			"Release is a fintech startup that helps users manage their real estate portfolio banking.  We are building a new banking, cash management, and financing platform for the multifamily real estate space.",
		stack: [
			"Ruby on Rails",
			"React",
			"Typescript",
			"Tailwind",
			"React Native",
			"Expo",
			"Cloudflare",
			"Postgres",
			"AWS",
			"Heroku",
			"Twilio",
			"Stripe",
			"Plaid",
		],
		positions: [
			{
				title: "Co-Founder + CTO",
				details: [
					"Co-founded a fintech startup in the multifamily real estate space",
					"Architected backend services, APIs, data models, and data pipelines",
					"Developed React based web app for users to manage their real estate portfolio banking",
					"Managed banking compliance and regulatory requirements",
					"Raised over $1m in seed funding",
					"Planned and executed business, branding, and growth strategies",
					"Led a team of 1 engineer and 1 designer",
				],
			},
		],
	},
	{
		start: "November 2020",
		end: "April 2025",
		company: "Jeevz",
		website: "https://jeevz.com",
		description:
			"Jeevz is an on-demand chauffeur service, allowing users to book rides with professional drivers around the United States.",
		stack: [
			"Ruby on Rails",
			"Sinatra",
			"Padrino",
			"React",
			"React Native",
			"Expo",
			"Typescript",
			"Tailwind",
			"Node.js",
			"Postgres",
			"AWS",
			"Twilio",
			"Stripe",
			"Twilio Flex",
			"Dixa",
			"Cloudflare",
			"Here.com",
			"Heroku",
			"Google Cloud",
			"Redshift",
		],
		positions: [
			{
				title: "Co-Founder + CTO",
				details: [
					"Rebuilt acquired on-demand chauffeur service from the ground up - rebrad, rearchitect, new apps, and relaunch.  Served nearly 60,000 rides nationwide",
					"Architected backend services, APIs, data models, and data pipelines to serve operations, marketing, and customer service",
					"Developed React Native based mobile apps for users to book and manage rides - 4.9 on iOS app store",
					"Oversaw acquisition of Dryver and integration of their technology and operations into Jeevz",
					"Built out fully featured customer service platform on Twilio Flex",
					"Oversaw product and business strategy, including a small engineering team",
				],
			},
		],
	},
	{
		start: "December 2018",
		end: "November 2020",
		company: "Coinbase",
		website: "https://coinbase.com",
		description:
			"Coinbase is the leading crypto company in the world with numerous apps and lines of business within the crypto and blockchain space.",
		stack: [
			"Ruby on Rails",
			"Go",
			"Tailwind",
			"Snowflake",
			"React",
			"Node.js",
			"MongoDB",
			"DynamoDB",
			"AWS",
			"Datadog",
			"Bugsnag",
		],
		positions: [
			{
				title: "Senior Software Engineer",
				details: [
					"Worked on the Identity team overseeing things like onboarding, KYC, AML, fraud detection, and compliance",
					"Built the frontend and backend system for managing fraud alerts and escalations",
					"Architected new platform for internal identity document verification",
					"Planned, developed, and deployed entire international sanctions screening platform, serving every since signup to all Coinbase products (10s of millions)",
					"Member of interview committee, continually improving interview processes for all eng and eng mgmt candidates",
					"Participated in blockchain speaking engagements at colleges around the country",
				],
			},
		],
	},

	{
		start: "January 2015",
		end: "November 2018",
		company: "Hired",
		website: "https://hired.com",
		description:
			"Hired was the #1 nationwide engineering recruiting platform marketplace, connecting 1000s of engineers with their dream job.",
		stack: [
			"Ruby on Rails",
			"React",
			"Postgres",
			"AWS",
			"Redis",
			"Heroku",
			"ElasticSearch",
		],
		positions: [
			{
				title: "Senior Software Engineer",
				details: [
					"Worked on the Hired.com platform, building out nearly every aspect of the core product and features",
					"Represented Hired at conferences, speaking at Railsconf, and many other events",
					"Spearheaded several DEI iniatives to test out new features aimed at reducing bias in hiring",
					"Instrumented new system to auto generate new web pages for all cities, industries, and jobs to drive SEO traffic",
					"Launched and managed company engineering blog",
					"Member of the hiring and interview committee - responsible for planning, executing, and improving interview processes for all eng and eng mgmt candidates",
					"Member of the culture committee - responsible for planning and executing company events, including hackathons, offsites, and team building execercies and perks",
				],
			},
		],
	},
	{
		start: "May 2013",
		end: "April 2015",
		company: "Soothe",
		website: "https://soothe.com",
		description:
			"Soothe is a massage on demand service, allowing users to book a massage in their home or office.  Raised nearly $80m in funding and operates in cities around the world.",
		stack: [
			"Ruby on Rails",
			"React",
			"Postgres",
			"AWS",
			"Redis",
			"Heroku",
			"Twilio",
			"Stripe",
			"Objective-C",
			"Java",
		],
		positions: [
			{
				title: "Co-Founder + CTO",
				details: [
					"Architected and built entire backend infrastructue and APIs for massage on demand service",
					"Developed and implemented business strategy and product roadmap for company, scaling to $150k in monthly revenue within 6 months",
					"Created pitch decks and business plans to raise $12m in funding",
					"Oversaw team of outsourced engineers building our mobile apps",
				],
			},
		],
	},
	{
		start: "August 2012",
		end: "December 2014",
		company: "Bleacher Report",
		website: "https://bleacherreport.com",
		description:
			"Bleacher Report is a sports news and analysis website, serving tens of millions of users around the world via numerous platforms and mobile apps.",
		stack: ["Ruby on Rails", "Postgres", "AWS", "Redis", "Elixir"],
		positions: [
			{
				title: "Consumer Backend/Mobile Engineering Lead",
				details: [
					"Developed key software powering BR website and mobile apps, supporting upwards of 80 million monthly users and over 1.5 billion monthly pageviews",
					"Built and maintained several key features and services powering Team Stream app, used by over 10 million users",
					"Designed and engineered schedule, roster, and statistic management data platform used across entire BR stack, notably for top-rated Team Stream apps across all mobile platforms and Xbox",
					"Architected system for advanced high volume tagging across the entire BR platform",
					"Designed and implemented real-time statistics and news feeds for Yahoo Sports fantasy leagues",
					"Led con/mob backend engineering team to build and maintain services powering BR site and apps",
				],
			},
		],
	},
	{
		start: "July 2011",
		end: "August 2012",
		company: "Styleowner",
		website: "https://styleowner.com",
		description:
			"Styleowner was a fashion and lifestyle e-commerce site, allowing users to buy and sell clothing and accessories.",
		stack: [
			"Ruby on Rails",
			"Postgres",
			"AWS",
			"Redis",
			"Heroku",
			"Backbone.js",
		],
		positions: [
			{
				title: "Application Developer",
				details: [
					"Worked on the Styleowner.com platform, building out nearly every aspect of the core product and features",
					"Built frontend and backend systems for managing user accounts, orders, and payments",
					"Architected infrastructure for ingesting catalogues via API and scraping with dozens of retail partners like Nordstrom and Macy's",
				],
			},
		],
	},

	{
		start: "November 2010",
		end: "July 2011",
		company: "iGoDigital",
		website: "https://igodigital.com",
		positions: [
			{
				title: "Manager of Technical Integration",
				details: [
					"Developed custom implementation of Radiant CMS for Proctor & Gamble",
					"Designed first mobile framework for Solution Selling Tool [SST] mobile integration",
					"Functioned as junior project manager with multiple clients including P&G, Walmart, and Philips",
					"Managed implementation of several SSTs across a diverse array of clients",
				],
			},
		],
	},

	{
		start: "November 2009",
		end: "November 2010",
		company: "Matchbook Creative",
		website: "https://matchbookindy.com",
		positions: [
			{
				title: "Web Developer",
				details: [
					"Developed fully-functional, accessible, and standards compliant websites across a range of industries",
					"Built and implemented a range of content management systems for different clients",
					"Designed and built customized web applications for clients including event management for non-profits",
					"Provided SEO, IT, consulting, and a range of other services to a number of clients",
					"Acted in new-business generation, copywriting, design, consulting roles",
					"Assisted with photography, video, and client management and relations",
					"Represented the company at various conferences and networking events around the state",
				],
			},
		],
	},

	{
		start: "August 2005",
		end: "May 2008",
		company: "Rose-Hulman Homework Hotline",
		website: "https://rose-hulman.edu",
		positions: [
			{
				title: "Homework Hotline Tutor",
				details: [
					"Tutored kids nationwide in math and science over the phone",
					"Worked with students from elementary school through college level",
				],
			},
		],
	},

	{
		start: "August 2007",
		end: "May 2008",
		company: "University Tees",
		website: "https://universitytees.com",
		positions: [
			{
				title: "Campus Sales Representative",
				details: [
					"Main sales representative on campus for Rose-Hulman and Indiana State University",
					"Sold custom apparel to students and organizations on campus",
				],
			},
		],
	},

	{
		start: "May 2005",
		end: "July 2005",
		company: "Sagebit",
		website: "https://sagebit.com",
		positions: [
			{
				title: "Intern",
				details: [
					"Developed and maintained customer documentation for range of video products",
				],
			},
		],
	},
];
