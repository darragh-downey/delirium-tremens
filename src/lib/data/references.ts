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
		id: 'cyberjutsu',
		authors: ['Ben McCarty'],
		year: 2021,
		title: 'Cyberjutsu: Cybersecurity for the Modern Ninja',
		source: 'No Starch Press',
		url: 'https://nostarch.com/cyberjutsu'
	},
	{
		id: 'advanced-pen-testing',
		authors: ['Wil Allsopp'],
		year: 2017,
		title: 'Advanced Penetration Testing: Hacking the World\'s Most Secure Networks',
		source: 'Wiley',
		url: 'https://www.wiley.com/en-us/Advanced+Penetration+Testing%3A+Hacking+the+World%27s+Most+Secure+Networks-p-9781119367680'
	},
	{
		id: 'hacking-art-of-exploitation',
		authors: ['Jon Erickson'],
		year: 2008,
		title: 'Hacking: The Art of Exploitation (2nd Edition)',
		source: 'No Starch Press',
		url: 'https://nostarch.com/hacking2.htm'
	},
	{
		id: 'secure-coding-c-cpp',
		authors: ['Robert C. Seacord'],
		year: 2013,
		title: 'Secure Coding in C and C++ (2nd Edition)',
		source: 'Addison-Wesley',
		url: 'https://www.pearson.com/en-us/subject-catalog/p/secure-coding-in-c-and-c/P200000006038'
	},
	{
		id: 'cybersecurity-risk-metrics',
		authors: ['Douglas W. Hubbard', 'Richard Seiersen'],
		year: 2016,
		title: 'How to Measure Anything in Cybersecurity Risk',
		source: 'Wiley',
		url: 'https://www.wiley.com/en-us/How+to+Measure+Anything+in+Cybersecurity+Risk-p-9781119085294'
	},
	{
		id: 'threat-modeling',
		authors: ['Adam Shostack'],
		year: 2014,
		title: 'Threat Modeling: Designing for Security',
		source: 'Wiley',
		url: 'https://www.wiley.com/en-us/Threat+Modeling%3A+Designing+for+Security-p-9781118809990'
	},
	{
		id: 'evading-edr',
		authors: ['Matt Hand'],
		year: 2023,
		title: 'Evading EDR: The Definitive Guide to Defeating Endpoint Detection Systems',
		source: 'No Starch Press',
		url: 'https://nostarch.com/evading-edr'
	},
	{
		id: 'philosophy-software-design',
		authors: ['John Ousterhout'],
		year: 2018,
		title: 'A Philosophy of Software Design',
		source: 'Yaknyam Press',
		url: 'https://web.stanford.edu/~ouster/cgi-bin/book.php'
	},
	{
		id: 'designing-secure-software',
		authors: ['Loren Kohnfelder'],
		year: 2021,
		title: 'Designing Secure Software: A Guide for Developers',
		source: 'Wiley',
		url: 'https://www.wiley.com/en-us/Designing+Secure+Software%3A+A+Guide+for+Developers-p-9781119725381'
	},
	{
		id: 'how-to-hack-like-a-ghost',
		authors: ['Sparc Flow'],
		year: 2021,
		title: 'How to Hack Like a Ghost: Breaching the Cloud',
		source: 'No Starch Press',
		url: 'https://nostarch.com/how-to-hack-like-a-ghost'
	},
	{
		id: 'art-of-cyberwarfare',
		authors: ['Jon DiMaggio'],
		year: 2022,
		title: 'The Art of Cyberwarfare: An Investigator’s Guide to Espionage, Ransomware, and Organized Cybercrime',
		source: 'No Starch Press',
		url: 'https://nostarch.com/art-cyberwarfare'
	},
	{
		id: 'scada-security',
		authors: ['Andrew Ginter'],
		year: 2016,
		title: 'SCADA Security: What’s Broken and How to Fix It',
		source: 'Waterfall Security Solutions',
		url: 'https://scada-security.ca/'
	},
	{
		id: 'secure-operations-technology',
		authors: ['Andrew Ginter'],
		year: 2019,
		title: 'Secure Operations Technology',
		source: 'Waterfall Security Solutions',
		url: 'https://waterfall-security.com/secure-operations-technology-book/'
	}
];
