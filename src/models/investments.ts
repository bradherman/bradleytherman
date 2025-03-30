export interface Investment {
	company: string;
	website: string;
	description: string;
}

export const investments: Investment[] = [
	{
		company: "Seven Stills",
		website: "https://sevenstills.com",
		description: "Distillery and brewery based in San Francisco, CA.",
	},
	{
		company: "Scrn",
		website: "https://scrn.co",
		description: "Stealth",
	},
	{
		company: "Wire.network",
		website: "https://wire.network",
		description: "Blockchain's Universal Transaction Layer and more",
	},
];
