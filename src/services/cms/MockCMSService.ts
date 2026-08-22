import { ICMSService } from './ICMSService';
import { CMSNewsArticle, Program, ImpactMetric, Leader, GalleryItem } from '../../types';
import { CMS_NEWS_ARTICLES, FLAGSHIP_PROGRAMS, IMPACT_METRICS, TEAM_MEMBERS, FOUNDER_PATRONS, GALLERY_ITEMS } from '../../data/mockData';

export class MockCMSService implements ICMSService {
  async getNewsArticles(category?: string): Promise<CMSNewsArticle[]> {
    await new Promise((resolve) => setTimeout(resolve, 150)); // simulate slight async network latency
    if (category && category !== 'all') {
      return CMS_NEWS_ARTICLES.filter((a) => a.category.toLowerCase() === category.toLowerCase());
    }
    return CMS_NEWS_ARTICLES;
  }

  async getArticleBySlug(slug: string): Promise<CMSNewsArticle | null> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return CMS_NEWS_ARTICLES.find((a) => a.slug === slug) || null;
  }

  async getPrograms(category?: string): Promise<Program[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (category && category !== 'all') {
      return FLAGSHIP_PROGRAMS.filter((p) => p.category === category);
    }
    return FLAGSHIP_PROGRAMS;
  }

  async getProgramById(id: string): Promise<Program | null> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return FLAGSHIP_PROGRAMS.find((p) => p.id === id) || null;
  }

  async getImpactMetrics(): Promise<ImpactMetric[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return IMPACT_METRICS;
  }

  async getLeaders(category?: string): Promise<Leader[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const allLeaders = [...TEAM_MEMBERS, ...FOUNDER_PATRONS];
    if (category && category !== 'all') {
      return allLeaders.filter((l) => l.category === category);
    }
    return allLeaders;
  }

  async getGalleryItems(category?: string): Promise<GalleryItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (category && category !== 'all') {
      return GALLERY_ITEMS.filter((g) => g.category === category);
    }
    return GALLERY_ITEMS;
  }
}
