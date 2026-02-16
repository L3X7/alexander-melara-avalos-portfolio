import { DetailTopic } from "./detail-topic";
import { ImageProject } from "./image-project";
import { KeyFeature } from "./key-feature";

export interface Project {
    id: number;
    title: string;
    localeKey: string;
    description: string;
    url: string;
    role: string;
    timeline: string;
    tags: string[];
    detailTopics: DetailTopic[];
    keyFeaturesNumberOrder: string;
    keyFeatures: KeyFeature[];
    imagesNumberOrder: string;
    images: ImageProject[];
}