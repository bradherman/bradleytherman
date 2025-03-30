export interface Info {
	name: string;
	age: number;
	location: string;
}

function _calculateAge(today: Date) {
	// birthday is a date
	const birthday = new Date("1986-05-06");
	const ageDifMs = today.getTime() - birthday.getTime();
	const ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function personalInfo(today: Date): Info {
	return {
		name: "Bradley Thomas Herman",
		age: _calculateAge(today),
		location: "South Lake Tahoe, CA",
	};
}
