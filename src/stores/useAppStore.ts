import { create } from 'zustand';
import { GalleryItem } from '../types';

interface ToastNotice {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}

interface AppStore {
  isMobileMenuOpen: boolean;
  activeLightboxItem: GalleryItem | null;
  toasts: ToastNotice[];
  highContrastMode: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openLightbox: (item: GalleryItem) => void;
  closeLightbox: () => void;
  addToast: (toast: Omit<ToastNotice, 'id'>) => void;
  removeToast: (id: string) => void;
  toggleHighContrast: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  isMobileMenuOpen: false,
  activeLightboxItem: null,
  toasts: [],
  highContrastMode: false,

  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  openLightbox: (item) => set({ activeLightboxItem: item }),
  closeLightbox: () => set({ activeLightboxItem: null }),

  addToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({ toasts: [...state.toasts, { ...toast, id }] }));
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, 4000);
  },

  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
  toggleHighContrast: () => set((state) => ({ highContrastMode: !state.highContrastMode })),
}));
