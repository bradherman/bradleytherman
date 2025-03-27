export interface Education {
	school: string;
	areaOfStudy: string;
	degree: string | null;
	graduated: string | null;
}

export const education: Education[]= [{
	school: 'Rose-Hulman Institute of Technology',
	areaOfStudy: 'Computer Engineering',
	degree: null,
	graduated: null,
}]
