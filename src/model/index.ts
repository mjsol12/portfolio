export type NavDataType = {
    Label: string;
    Section: string;
}

type ImageType = {
    Url: string,
    Name: string
}

export type ProjectDataType = {
    Id?: string;
    Url?: string;
    Description: string;
    Title: string;
    ImageUrl: string;
    Images?: ImageType[];
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
