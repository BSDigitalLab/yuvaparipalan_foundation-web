import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { useVolunteerStore } from '../stores/useVolunteerStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '../components/motion/FadeIn';
import { Button } from '../components/ui/Button';
import { HeartHandshake, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import confetti from 'canvas-confetti';

const volunteerSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid 10-digit phone number is required'),
  state: z.string().min(2, 'State is required'),
  district: z.string().min(2, 'District is required'),
  occupation: z.string().min(2, 'Occupation is required'),
  skills: z.array(z.string()).min(1, 'Select at least one skill domain'),
  interestAreas: z.array(z.string()).min(1, 'Select at least one interest area'),
  weeklyHours: z.string().min(1, 'Select weekly commitment'),
  motivation: z.string().min(10, 'Please state your motivation (min 10 chars)'),
});

type VolunteerSchemaType = z.infer<typeof volunteerSchema>;

export const VolunteerPage: React.FC = () => {
  const { currentStep, formData, setStep, nextStep, prevStep, submitVolunteerForm, isSubmitted, isSubmitting, resetForm } = useVolunteerStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<VolunteerSchemaType>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      fullName: formData.fullName || '',
      email: formData.email || '',
      phone: formData.phone || '',
      state: formData.state || 'Kerala',
      district: formData.district || 'Kannur',
      occupation: formData.occupation || '',
      skills: formData.skills || ['Mentoring / Teaching'],
      interestAreas: formData.interestAreas || ['AI Literacy Mission'],
      weeklyHours: formData.weeklyHours || '2-4 hours',
      motivation: formData.motivation || '',
    },
  });

  const selectedSkills = watch('skills') || [];
  const selectedInterests = watch('interestAreas') || [];

  const toggleSkill = (skill: string) => {
    const current = [...selectedSkills];
    const index = current.indexOf(skill);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(skill);
    }
    setValue('skills', current, { shouldValidate: true });
  };

  const toggleInterest = (interest: string) => {
    const current = [...selectedInterests];
    const index = current.indexOf(interest);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(interest);
    }
    setValue('interestAreas', current, { shouldValidate: true });
  };

  const onSubmit = async (data: VolunteerSchemaType) => {
    const success = await submitVolunteerForm(data);
    if (success) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <>
      <SEOHead
        title="Volunteer Registration - Yuvaparipalan Foundation"
        description="Join India's National Volunteer Movement with Yuvaparipalan Foundation. Become a mentor, trainer, or changemaker."
      />

      <div className="pt-32 pb-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center space-y-4 mb-12">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                National Volunteer Movement
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Join 100,000 Changemakers
              </h1>
              <p className="text-slate-300 text-sm sm:text-base">
                Dedicate your skills, time, and passion to mentor youth, deliver AI literacy, and build a stronger India.
              </p>
            </div>
          </FadeIn>

          {isSubmitted ? (
            <FadeIn direction="up">
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-emerald-500/30 text-center space-y-6 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h2 className="font-heading font-extrabold text-3xl text-white">Welcome to the Movement!</h2>
                <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                  Your volunteer registration has been received. Our District Volunteer Coordinator will reach out to you via Email and WhatsApp shortly.
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-mono inline-block">
                  Registration ID: YVP-VOL-{Math.floor(100000 + Math.random() * 900000)}
                </div>

                <div>
                  <Button variant="outline" size="sm" onClick={resetForm}>
                    Register Another Volunteer
                  </Button>
                </div>
              </div>
            </FadeIn>
          ) : (
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-8">
              {/* Wizard Steps Indicator */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                {[
                  { step: 1, label: 'Personal Info' },
                  { step: 2, label: 'Skills & Domains' },
                  { step: 3, label: 'Commitment' },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all ${
                        currentStep === s.step
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                          : currentStep > s.step
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-950 text-slate-500 border border-slate-800'
                      }`}
                    >
                      {currentStep > s.step ? <CheckCircle2 className="w-5 h-5" /> : s.step}
                    </div>
                    <span className={`text-xs font-heading font-semibold hidden sm:inline ${currentStep === s.step ? 'text-white' : 'text-slate-500'}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-heading font-bold text-xl text-white">Step 1: Contact & Personal Details</h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                      <input
                        {...register('fullName')}
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                      />
                      {errors.fullName && <span className="text-xs text-rose-400 mt-1">{errors.fullName.message}</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                        <input
                          {...register('email')}
                          type="email"
                          placeholder="you@domain.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                        />
                        {errors.email && <span className="text-xs text-rose-400 mt-1">{errors.email.message}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (WhatsApp)</label>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="+91 95628 58868"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                        />
                        {errors.phone && <span className="text-xs text-rose-400 mt-1">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">State</label>
                        <input
                          {...register('state')}
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                        />
                        {errors.state && <span className="text-xs text-rose-400 mt-1">{errors.state.message}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">District</label>
                        <input
                          {...register('district')}
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                        />
                        {errors.district && <span className="text-xs text-rose-400 mt-1">{errors.district.message}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Occupation</label>
                        <input
                          {...register('occupation')}
                          type="text"
                          placeholder="Software Engineer / Student"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                        />
                        {errors.occupation && <span className="text-xs text-rose-400 mt-1">{errors.occupation.message}</span>}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Skills & Interest Domains */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-heading font-bold text-xl text-white">Step 2: Skills & Interest Areas</h3>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-300">Select Your Skills (Click to toggle)</label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Mentoring / Teaching', 'AI & Data Tools', 'Software Development',
                          'Digital Marketing', 'Graphic Design & Video', 'Event Coordination',
                          'Healthcare & Counseling', 'Public Speaking'
                        ].map((skill) => (
                          <button
                            key={skill}
                            type="button"
                            onClick={() => toggleSkill(skill)}
                            className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                              selectedSkills.includes(skill)
                                ? 'bg-emerald-500 text-white border-emerald-400 shadow-md shadow-emerald-500/20'
                                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                      {errors.skills && <span className="text-xs text-rose-400 block">{errors.skills.message}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-300">Select Preferred Missions</label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Scholarship Mission', 'Shepreneurs Initiative', 'AI Literacy Mission',
                          'Digital Skills Mission', 'Preventive Healthcare', 'Leadership Academy'
                        ].map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => toggleInterest(interest)}
                            className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                              selectedInterests.includes(interest)
                                ? 'bg-teal-600 text-white border-teal-400 shadow-md'
                                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                      {errors.interestAreas && <span className="text-xs text-rose-400 block">{errors.interestAreas.message}</span>}
                    </div>
                  </div>
                )}

                {/* Step 3: Commitment & Motivation */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-heading font-bold text-xl text-white">Step 3: Availability & Motivation</h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Weekly Time Commitment</label>
                      <select
                        {...register('weeklyHours')}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                      >
                        <option value="1-2 hours">1-2 hours per week</option>
                        <option value="2-4 hours">2-4 hours per week</option>
                        <option value="5-10 hours">5-10 hours per week</option>
                        <option value="Full-time">Full-time Fellowship</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Why do you want to join Yuvaparipalan?</label>
                      <textarea
                        {...register('motivation')}
                        rows={4}
                        placeholder="Share your motivation and vision for social impact..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                      />
                      {errors.motivation && <span className="text-xs text-rose-400 mt-1">{errors.motivation.message}</span>}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <Button type="button" variant="secondary" size="sm" onClick={prevStep} leftIcon={<ArrowLeft className="w-4 h-4" />}>
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <Button type="button" variant="primary" size="sm" onClick={nextStep} rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" variant="primary" size="md" isLoading={isSubmitting} leftIcon={<HeartHandshake className="w-4 h-4" />}>
                      Submit Volunteer Registration
                    </Button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
