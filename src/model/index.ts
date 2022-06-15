export type NavDataType = {
    Label: string;
    Section: string;
}

export type ProjectDataType = {
    Url?: string;
    Description: string;
    Title: string;
    ImageUrl: string;
    Tags: string[];
    FeaturedTags?: string[];
    WebUrl?: string;
    RepositoryUrl?: string;
}

export type ExperienceType = {
    Company: string;
    Url?: string;
    Position: string;
    Year: string;
    Jobs: string[];
    Stacks: string[];
}
