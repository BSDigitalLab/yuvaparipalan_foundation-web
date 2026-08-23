import { create } from 'zustand';
import { PartnerFormData } from '../types';
import { sendSubmissionEmail } from '../services/emailService';

interface PartnerStore {
  formData: Partial<PartnerFormData>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  updateFormData: (data: Partial<PartnerFormData>) => void;
  submitPartnerForm: (data: PartnerFormData) => Promise<boolean>;
  resetForm: () => void;
}

const initialData: Partial<PartnerFormData> = {
  organizationName: '',
  contactPerson: '',
  designation: '',
  email: '',
  phone: '',
  organizationType: 'corporate_csr',
  website: '',
  cityState: '',
  interestPrograms: [],
  proposedContribution: '',
  comments: '',
};

export const usePartnerStore = create<PartnerStore>((set) => ({
  formData: initialData,
  isSubmitting: false,
  isSubmitted: false,

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  submitPartnerForm: async (fullData) => {
    set({ isSubmitting: true });
    await sendSubmissionEmail({ formType: 'partner', formData: fullData });
    set({
      formData: fullData,
      isSubmitting: false,
      isSubmitted: true,
    });
    return true;
  },

  resetForm: () =>
    set({
      formData: initialData,
      isSubmitting: false,
      isSubmitted: false,
    }),
}));
