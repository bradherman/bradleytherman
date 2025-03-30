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
	self: string;
	version: string;
	source: string;
}

export interface ResumeData {
	personalInfo: Info;
	work: typeof work;
	socials: typeof socials;
	contacts: typeof contacts;
	websites: typeof websites;
	education: typeof education;
	investments: typeof investments;
	projects: typeof projects;
	hobbies: typeof hobbies;
}

export function base(today: Date): {
	meta: Meta;
	data: ResumeData;
} {
	return {
		meta: {
			self: "http://www.bradleytherman.com",
			version: "0.0.1",
			source: "https://github.com/bradherman/bradleytherman",
		},
		data: {
			personalInfo: personalInfo(today),
			work,
			socials,
			contacts,
			websites,
			education,
			investments,
			projects,
			hobbies,
		},
	};
}
