import {
	contacts,
	education,
	hobbies,
	investments,
	personalInfo,
	projects,
	socials,
	websites,
} from "./all";

export interface Meta {
	self: string;
	version: string;
	source: string;
}

export interface ResumeData {
	personalInfo: typeof personalInfo;
	socials: typeof socials;
	contacts: typeof contacts;
	websites: typeof websites;
	education: typeof education;
	investments: typeof investments;
	projects: typeof projects;
	hobbies: typeof hobbies;
}

export const base: {
	meta: Meta,
	data: ResumeData
} = {
	meta: {
		self: "http://www.bradleytherman.com",
		version: "0.0.1",
		source: "https://github.com/bradherman/bradleytherman",
	},
	data: {
		personalInfo,
		socials,
		contacts,
		websites,
		education,
		investments,
		projects,
		hobbies,
	},
};
