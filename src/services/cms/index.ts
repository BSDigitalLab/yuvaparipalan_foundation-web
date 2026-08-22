import { ICMSService } from './ICMSService';
import { MockCMSService } from './MockCMSService';

let cmsInstance: ICMSService | null = null;

export function getCMSService(): ICMSService {
  if (!cmsInstance) {
    const provider = import.meta.env.VITE_CMS_PROVIDER || 'mock';
    switch (provider) {
      case 'mock':
      default:
        cmsInstance = new MockCMSService();
        break;
    }
  }
  return cmsInstance;
}
