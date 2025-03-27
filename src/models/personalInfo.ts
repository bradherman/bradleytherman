export interface Info {
	name: string;
	age: number;
	location: string;
}

export const personalInfo: Info = {
	name: "Bradley Thomas Herman",
	age: new Date().getFullYear() - new Date("1986-05-06").getFullYear(),
	location: "South Lake Tahoe, CA",
};
