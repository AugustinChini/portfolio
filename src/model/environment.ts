export interface Environment {
    production: boolean;
    initConfig: InitConfig;
}

export interface Link {
    label: string;
    path: string;
    params: any[];
}

export interface NavBar {
    logo: string;
    links: Link[];
}

export interface Section {
    picture: string;
    alt: string;
    description: string;
}

export interface Home {
    title: string;
    welcome: string;
    highlight: string;
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
    icon: string;
    pictures: Picture[];
}

export interface Section2 {
    id: string;
    icon: string;
    displayName: string;
    projects: Project[];
}

export interface Realisations {
    title: string;
    sections: Section2[];
}

export interface InitConfig {
    navBar: NavBar;
    home: Home;
    realisations: Realisations;
}