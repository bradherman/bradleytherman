import {
	contacts,
	education,
	hobbies,
	investments,
	personalInfo,
	projects,
	socials,
	websites,
	work,
} from "./all";
import type { Info } from "./personalInfo";

export interface Meta {
	version: string;
	source: string;
}

export interface JsonApiLinks {
	self: string;
	[key: string]: string;
}

export interface JsonApiResource {
	type: string;
	id: string;
	attributes?: Record<string, unknown>;
	relationships?: Record<string, { data: { type: string; id: string } | Array<{ type: string; id: string }> }>;
	links?: JsonApiLinks;
}

export interface JsonApiResponse {
	data: JsonApiResource | JsonApiResource[];
	included?: JsonApiResource[];
	meta?: Meta;
	links?: JsonApiLinks;
}

// Helper function to create a unique ID for each resource
function createId(type: string, uniqueValue: string): string {
	return `${type}-${uniqueValue.replace(/\s+/g, '-').toLowerCase()}`;
}

// Convert personal info to JSON:API format
function personalInfoToJsonApi(info: Info): JsonApiResource {
	return {
		type: 'personal-info',
		id: 'personal-info-1',
		attributes: {
			name: info.name,
			age: info.age,
			location: info.location,
		},
		links: {
			self: '/personal-info',
		},
	};
}

// Convert work experience to JSON:API format
function workToJsonApi(): JsonApiResource[] {
	return work.map((item, index) => ({
		type: 'work-experience',
		id: createId('work', item.company + index),
		attributes: {
			company: item.company,
			positions: item.positions,
			start: item.start,
			end: item.end,
			description: item.description,
			stack: item.stack,
			website: item.website,
		},
		links: {
			self: `/work/${createId('work', item.company + index)}`,
		},
	}));
}

// Convert socials to JSON:API format
function socialsToJsonApi(): JsonApiResource[] {
	return socials.map((item, index) => ({
		type: 'social',
		id: createId('social', item.type),
		attributes: {
			type: item.type,
			href: item.href,
		},
		links: {
			self: `/socials/${createId('social', item.type)}`,
		},
	}));
}

// Convert contacts to JSON:API format
function contactsToJsonApi(): JsonApiResource[] {
	return contacts.map((item, index) => ({
		type: 'contact',
		id: createId('contact', item.type + index),
		attributes: {
			type: item.type,
			data: item.data,
		},
		links: {
			self: `/contacts/${createId('contact', item.type + index)}`,
		},
	}));
}

// Convert websites to JSON:API format
function websitesToJsonApi(): JsonApiResource[] {
	return websites.map((item, index) => ({
		type: 'website',
		id: createId('website', item.url),
		attributes: {
			url: item.url,
			description: item.description,
		},
		links: {
			self: `/websites/${createId('website', item.url)}`,
		},
	}));
}

// Convert education to JSON:API format
function educationToJsonApi(): JsonApiResource[] {
	return education.map((item, index) => ({
		type: 'education',
		id: createId('education', item.school),
		attributes: {
			school: item.school,
			degree: item.degree,
			areaOfStudy: item.areaOfStudy,
			graduated: item.graduated,
		},
		links: {
			self: `/education/${createId('education', item.school)}`,
		},
	}));
}

// Convert investments to JSON:API format
function investmentsToJsonApi(): JsonApiResource[] {
	return investments.map((item, index) => ({
		type: 'investment',
		id: createId('investment', item.company),
		attributes: {
			company: item.company,
			description: item.description,
			website: item.website,
		},
		links: {
			self: `/investments/${createId('investment', item.company)}`,
		},
	}));
}

// Convert projects to JSON:API format
function projectsToJsonApi(): JsonApiResource[] {
	return projects.map((item, index) => ({
		type: 'project',
		id: createId('project', item.name),
		attributes: {
			name: item.name,
			description: item.description,
			website: item.website,
			github: item.github,
			stack: item.stack,
		},
		links: {
			self: `/projects/${createId('project', item.name)}`,
		},
	}));
}

// Convert hobbies to JSON:API format
function hobbiesToJsonApi(): JsonApiResource[] {
	return hobbies.map((item, index) => ({
		type: 'hobby',
		id: createId('hobby', item.name),
		attributes: {
			name: item.name,
			description: item.description,
		},
		links: {
			self: `/hobbies/${createId('hobby', item.name)}`,
		},
	}));
}

// Get all resources for the included array
function getAllResources(today: Date): JsonApiResource[] {
	return [
		personalInfoToJsonApi(personalInfo(today)),
		...workToJsonApi(),
		...socialsToJsonApi(),
		...contactsToJsonApi(),
		...websitesToJsonApi(),
		...educationToJsonApi(),
		...investmentsToJsonApi(),
		...projectsToJsonApi(),
		...hobbiesToJsonApi(),
	];
}

// Get a specific resource by type and id
export function getResourceById(type: string, id: string, today: Date): JsonApiResource | undefined {
	return getAllResources(today).find(resource => resource.type === type && resource.id === id);
}

// Get all resources of a specific type
export function getResourcesByType(type: string, today: Date): JsonApiResource[] {
	return getAllResources(today).filter(resource => resource.type === type);
}

// Base function to return the complete JSON:API response
export function base(today: Date): JsonApiResponse {
	const resources = getAllResources(today);

	// Create a summary resource that links to all other resources
	const summaryResource: JsonApiResource = {
		type: 'resume',
		id: 'bradley-herman-resume',
		attributes: {
			name: "Bradley Thomas Herman's Resume",
		},
		relationships: {
			personalInfo: {
				data: { type: 'personal-info', id: 'personal-info-1' }
			},
			work: {
				data: workToJsonApi().map(item => ({ type: item.type, id: item.id }))
			},
			socials: {
				data: socialsToJsonApi().map(item => ({ type: item.type, id: item.id }))
			},
			contacts: {
				data: contactsToJsonApi().map(item => ({ type: item.type, id: item.id }))
			},
			websites: {
				data: websitesToJsonApi().map(item => ({ type: item.type, id: item.id }))
			},
			education: {
				data: educationToJsonApi().map(item => ({ type: item.type, id: item.id }))
			},
			investments: {
				data: investmentsToJsonApi().map(item => ({ type: item.type, id: item.id }))
			},
			projects: {
				data: projectsToJsonApi().map(item => ({ type: item.type, id: item.id }))
			},
			hobbies: {
				data: hobbiesToJsonApi().map(item => ({ type: item.type, id: item.id }))
			},
		},
		links: {
			self: '/',
		},
	};

	return {
		data: summaryResource,
		included: resources,
		meta: {
			version: "1.0.0",
			source: "https://github.com/bradherman/bradleytherman",
		},
		links: {
			self: "http://www.bradleytherman.com",
		},
	};
}
