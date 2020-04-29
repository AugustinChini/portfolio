import { HomeLink } from "./homeLink";

export interface Environment {
    production: boolean;
    initConfig: InitConfig;
}

export interface Link {
    label: string;
    path: string;
    params?: any[];
    type?: "link" | "none"
}

export interface NavBar {
    logo: string;
    links: Link[];
    hasHomeLink: boolean;
}

export interface Section {
    picture: string;
    alt: string;
    anchor?: string;
    description: string;
}

export interface Home {
    title: string;
    links?: Array<HomeLink>;
    welcome?: string;
    highlight?: string;
    picture?: string;
    sections: Section[];
}

export interface Picture {
    title: string;
    description: string;
    source: string;
}

export interface Project {
    title: string;
    description: string;
    keywords: string;
    thumbnail: string;
    pictures: Picture[];
}

export interface RealisationSection {
    id: string;
    icon: string;
    alt: string;
    displayName: string;
    projects: Project[];
}

export interface Realisations {
    title: string;
    sections: RealisationSection[];
}

export interface CvSection {
    title: string
	htmlContent: string
}

export interface Cv {
    title: string;
    subtitle: string;
    downloadLink: string;
    description: string;
    sections: Array<CvSection>
}

export interface InitConfig {
    navBar: NavBar;
    home: Home;
    realisations: Realisations;
    cv: Cv;
}
