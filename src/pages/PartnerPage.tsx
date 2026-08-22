import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { usePartnerStore } from '../stores/usePartnerStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '../components/motion/FadeIn';
import { Button } from '../components/ui/Button';
import { Building2, CheckCircle2, Handshake, Globe, Award, Sparkles } from 'lucide-react';
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

      <div className="pt-32 pb-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center space-y-4 mb-14">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Institutional Synergies
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Partner With Yuvaparipalan
              </h1>
              <p className="text-slate-300 text-sm sm:text-base">
                Collaborate with India's youth movement through Corporate CSR grants, university chapters, healthcare drives, and technology incubation.
              </p>
            </div>
          </FadeIn>

          {isSubmitted ? (
            <FadeIn direction="up">
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-emerald-500/30 text-center space-y-6 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h2 className="font-heading font-extrabold text-3xl text-white">Partnership Application Received!</h2>
                <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                  Thank you for taking a step towards nation-building. Our Corporate Relations team will connect with your organization within 24-48 business hours.
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-mono inline-block">
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
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-8">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Building2 className="w-6 h-6 text-emerald-400" />
                <h3 className="font-heading font-bold text-xl text-white">Institutional Partnership Form</h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Organization Name</label>
                    <input
                      {...register('organizationName')}
                      type="text"
                      placeholder="e.g. Acme Corp / Kerala University"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                    {errors.organizationName && <span className="text-xs text-rose-400 mt-1">{errors.organizationName.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Organization Type</label>
                    <select
                      {...register('organizationType')}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
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
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Person Name</label>
                    <input
                      {...register('contactPerson')}
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                    />
                    {errors.contactPerson && <span className="text-xs text-rose-400 mt-1">{errors.contactPerson.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Designation</label>
                    <input
                      {...register('designation')}
                      type="text"
                      placeholder="Head of CSR / Principal"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                    />
                    {errors.designation && <span className="text-xs text-rose-400 mt-1">{errors.designation.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Official Work Email</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="csr@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                    />
                    {errors.email && <span className="text-xs text-rose-400 mt-1">{errors.email.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                    />
                    {errors.phone && <span className="text-xs text-rose-400 mt-1">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Location (City, State)</label>
                    <input
                      {...register('cityState')}
                      type="text"
                      placeholder="Kannur, Kerala"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                    />
                    {errors.cityState && <span className="text-xs text-rose-400 mt-1">{errors.cityState.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Website (Optional)</label>
                    <input
                      {...register('website')}
                      type="url"
                      placeholder="https://www.organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Proposed Collaboration Area</label>
                  <textarea
                    {...register('proposedContribution')}
                    rows={3}
                    placeholder="e.g. Sponsoring 500 Merit Scholarships, AI Lab installation in schools, CSR funding..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                  {errors.proposedContribution && <span className="text-xs text-rose-400 mt-1">{errors.proposedContribution.message}</span>}
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
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
    </>
  );
};
