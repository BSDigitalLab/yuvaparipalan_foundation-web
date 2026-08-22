import { CMSNewsArticle, Program, ImpactMetric, Leader, GalleryItem } from '../../types';

export interface ICMSService {
  getNewsArticles(category?: string): Promise<CMSNewsArticle[]>;
  getArticleBySlug(slug: string): Promise<CMSNewsArticle | null>;
  getPrograms(category?: string): Promise<Program[]>;
  getProgramById(id: string): Promise<Program | null>;
  getImpactMetrics(): Promise<ImpactMetric[]>;
  getLeaders(category?: string): Promise<Leader[]>;
  getGalleryItems(category?: string): Promise<GalleryItem[]>;
}
