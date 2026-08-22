import { create } from 'zustand';
import { VolunteerFormData } from '../types';

interface VolunteerStore {
  currentStep: number;
  formData: Partial<VolunteerFormData>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<VolunteerFormData>) => void;
  submitVolunteerForm: (data: VolunteerFormData) => Promise<boolean>;
  resetForm: () => void;
}

const initialData: Partial<VolunteerFormData> = {
  fullName: '',
  email: '',
  phone: '',
  state: 'Kerala',
  district: 'Kannur',
  occupation: '',
  skills: [],
  interestAreas: [],
  weeklyHours: '2-4 hours',
  motivation: '',
};

export const useVolunteerStore = create<VolunteerStore>((set, get) => ({
  currentStep: 1,
  formData: initialData,
  isSubmitting: false,
  isSubmitted: false,

  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 3) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  submitVolunteerForm: async (fullData) => {
    set({ isSubmitting: true });
    // Simulate async API POST to server / CMS backend
    await new Promise((resolve) => setTimeout(resolve, 1200));
    set({
      formData: fullData,
      isSubmitting: false,
      isSubmitted: true,
    });
    return true;
  },

  resetForm: () =>
    set({
      currentStep: 1,
      formData: initialData,
      isSubmitting: false,
      isSubmitted: false,
    }),
}));
