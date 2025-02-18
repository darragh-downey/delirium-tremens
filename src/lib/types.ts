export interface Section {
  title: string;
  id: string;
}

export interface Chapter {
  title: string;
  slug: string;
  chapter: number;
  sections?: Section[];
  references?: string[];
}

export interface PageMetadata {
  title: string;
  chapter: number;
  sections: Section[];
  references: string[];
}

export interface Reference {
  id: string;
  authors: string[];
  year: number;
  title: string;
  source: string;
  url?: string;
  doi?: string;
} 