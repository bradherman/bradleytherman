interface Position {
	title: string;
	details: string[];
}

export interface Job {
	start: string;
	end: string | null;
	company: string;
	website: string;
	positions: Position[]
}

export const work: Job[]= [{
	start: 'August 2021',
	end: null,
	company: 'Release',
	website: 'https://tryrelease.com',
	positions: [{
		title: 'Co-Founder + CTO',
		details: [
			'Co-founded a fintech startup in the multifamily real estate space',
			'Architected backend services, APIs, data models, and data pipelines',
			'Developed React based web app for users to manage their real estate portfolio banking',
			'Managed banking compliance and regulatory requirements',
			'Raised over $1m in seed funding',
			'Planned and executed business, branding, and growth strategies',
			'Led a team of 1 engineer and 1 designer'
		]
	}],
}, {
	start: 'November 2020',
	end: 'April 2025',
	company: 'Jeevz',
	website: 'https://jeevz.com',
	positions: [
		{
			title: "Co-Founder + CTO",
			details: [],
		},
	],
}
// Coinbase - Senior Software Engineer
// Relish - Advisor
// Hired - Senior Software Engineer
// Blast App - Advisor
// Soothe - CTO + Co-Founder
// Bleacher Report - Senior Backend Engineer
// Styleowner - Application Developer
// FTW - CTO
// iGoDigital - Manager of Technical Integration
// Matchbook Creative - Web Developer
// University Tees - Campus Sales Representative
// Sagebit LLC - Intern
]
