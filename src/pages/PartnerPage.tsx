import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { usePartnerStore } from '../stores/usePartnerStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '../components/motion/FadeIn';
import { Button } from '../components/ui/Button';
import { Building2, CheckCircle2, Handshake, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const partnerSchema = z.object({
  organizationName: z.string().min(2, 'Organization Name is required'),
  contactPerson: z.string().min(2, 'Contact Person Name is required'),
  designation: z.string().min(2, 'Designation is required'),
  email: z.string().email('Valid work email is required'),
  phone: z.string().min(10, 'Valid contact number is required'),
  organizationType: z.enum(['corporate_csr', 'educational_institution', 'ngo', 'healthcare', 'philanthropist', 'other']),
  website: z.string().optional(),
  cityState: z.string().min(2, 'Location (City, State) is required'),
  proposedContribution: z.string().min(5, 'Please summarize proposed contribution area'),
  comments: z.string().optional(),
});

type PartnerSchemaType = z.infer<typeof partnerSchema>;

export const PartnerPage: React.FC = () => {
  const { formData, submitPartnerForm, isSubmitted, isSubmitting, resetForm } = usePartnerStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PartnerSchemaType>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      organizationName: formData.organizationName || '',
      contactPerson: formData.contactPerson || '',
      designation: formData.designation || '',
      email: formData.email || '',
      phone: formData.phone || '',
      organizationType: formData.organizationType || 'corporate_csr',
      website: formData.website || '',
      cityState: formData.cityState || 'Kerala',
      proposedContribution: formData.proposedContribution || '',
      comments: formData.comments || '',
    },
  });

  const onSubmit = async (data: PartnerSchemaType) => {
    const success = await submitPartnerForm(data);
    if (success) {
      confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <>
      <SEOHead
        title="CSR & Institutional Partner Portal - Yuvaparipalan Foundation"
        description="Partner with Yuvaparipalan Foundation for Corporate CSR, University programs, AI literacy, and social impact."
      />

      <div className="pt-24 sm:pt-32 pb-20 sm:pb-24 bg-[#f8faf8] relative overflow-hidden">
        {/* Background Ambient Radial Lighting */}
        <div 
          className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(21, 128, 61, 0.35) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            
            <FadeIn direction="up">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Institutional Synergies</span>
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
                  Partner With Yuvaparipalan
                </h1>
                <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                  Collaborate with India's youth movement through Corporate CSR grants, university chapters, healthcare drives, and technology incubation.
                </p>
              </div>
            </FadeIn>

            {isSubmitted ? (
              <FadeIn direction="up">
                <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-900/15 text-center space-y-6 shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-emerald-800" />
                  </div>

                  <h2 className="font-heading font-extrabold text-3xl text-slate-950">Partnership Application Received!</h2>
                  <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed font-medium">
                    Thank you for taking a step towards nation-building. Our Corporate Relations team will connect with your organization within 24-48 business hours.
                  </p>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-mono inline-block font-bold">
                    Reference Code: YVP-CSR-{Math.floor(100000 + Math.random() * 900000)}
                  </div>

                  <div>
                    <Button variant="outline" size="sm" onClick={resetForm}>
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ) : (
              <div className="p-6 sm:p-10 rounded-3xl bg-white border border-emerald-900/15 shadow-xl space-y-8 text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Building2 className="w-6 h-6 text-emerald-800" />
                  <h3 className="font-heading font-bold text-xl text-slate-950">Institutional Partnership Form</h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Organization Name</label>
                      <input
                        {...register('organizationName')}
                        type="text"
                        placeholder="e.g. Acme Corp / Kerala University"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#15803d] focus:bg-white text-sm font-medium"
                      />
                      {errors.organizationName && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.organizationName.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Organization Type</label>
                      <select
                        {...register('organizationType')}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-sm font-medium"
                      >
                        <option value="corporate_csr">Corporate CSR Partner</option>
                        <option value="educational_institution">Educational Institution / School</option>
                        <option value="ngo">NGO / Civil Society Group</option>
                        <option value="healthcare">Healthcare Provider / Clinic</option>
                        <option value="philanthropist">Philanthropist / HNI Foundation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Contact Person Name</label>
                      <input
                        {...register('contactPerson')}
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-sm font-medium"
                      />
                      {errors.contactPerson && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.contactPerson.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Designation</label>
                      <input
                        {...register('designation')}
                        type="text"
                        placeholder="Head of CSR / Principal"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-sm font-medium"
                      />
                      {errors.designation && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.designation.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Official Work Email</label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="csr@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-sm font-medium"
                      />
                      {errors.email && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.email.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-sm font-medium"
                      />
                      {errors.phone && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Location (City, State)</label>
                      <input
                        {...register('cityState')}
                        type="text"
                        placeholder="Kannur, Kerala"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-sm font-medium"
                      />
                      {errors.cityState && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.cityState.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Website (Optional)</label>
                      <input
                        {...register('website')}
                        type="url"
                        placeholder="https://www.organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Proposed Collaboration Area</label>
                    <textarea
                      {...register('proposedContribution')}
                      rows={3}
                      placeholder="e.g. Sponsoring 500 Merit Scholarships, AI Lab installation in schools, CSR funding..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#15803d] focus:bg-white text-sm font-medium"
                    />
                    {errors.proposedContribution && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.proposedContribution.message}</span>}
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full font-bold shadow-md"
                    isLoading={isSubmitting}
                    leftIcon={<Handshake className="w-5 h-5" />}
                  >
                    Submit Institutional Partnership Application
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
