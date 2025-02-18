export interface Reference {
	id: string;
	authors: string[];
	year: number;
	title: string;
	source: string;
	url?: string;
	doi?: string;
}

export const references: Reference[] = [
	{
		id: 'nist-framework',
		authors: ['National Institute of Standards and Technology'],
		year: 2018,
		title: 'Framework for Improving Critical Infrastructure Cybersecurity',
		source: 'NIST',
		url: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf'
	},
	{
		id: 'other-citation-id',
		authors: ['Author Name'],
		year: 2024,
		title: 'Title of the Reference',
		source: 'Source Name'
	},
	// Add more references as needed
]; 