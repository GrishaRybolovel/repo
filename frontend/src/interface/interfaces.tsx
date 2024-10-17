export default interface CompletionModel {
    completion_id: string;
    owner_id: number;
    keywords: string;
    status: boolean;
    filename: string;
    createdate: string;
    query: string;
    trends: string;
    not_trends: string;
    ideas: string;
    content_strategy: string;
    average_views: string;
}