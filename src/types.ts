export interface VideoProps {
    id: number;
    url: string;
    title: string;
    description?: string;
}

export interface LinksProps {
    id?: number;
    title: string;
    url: string;
    description: string;
    site: string;
    image: string
}
