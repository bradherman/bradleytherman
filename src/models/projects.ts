export interface Project {
	name: string;
	description: string;
	website: string;
	github?: string;
	stack: string[];
}

export const projects: Project[] = [
	{
		name: "Ruckus",
		description:
			"Mobile app for tracking your rucks and connecting with other ruckers.",
		website: "https://ruckusapp.fit",
		stack: ["React Native", "Typescript", "Supabase", "Tailwind"],
	},
];
