import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { useVolunteerStore } from '../stores/useVolunteerStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '../components/motion/FadeIn';
import { Button } from '../components/ui/Button';
import { DistrictAutocomplete } from '../components/ui/DistrictAutocomplete';
import { PhoneInput } from '../components/ui/PhoneInput';
import { HeartHandshake, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const volunteerSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full Name must be at least 2 characters')
    .regex(/^[a-zA-Z\s\.\']{2,100}$/, 'Full Name should contain letters and spaces only'),
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address (e.g. name@domain.com)'),
  phone: z
    .string()
    .regex(/^(?:\+91[\s-]?)?[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number (starting with 6-9)'),
  state: z.string().min(2, 'State is required'),
  district: z.string().min(2, 'District is required'),
  occupation: z.string().min(2, 'Occupation is required'),
  skills: z.array(z.string()).min(1, 'Please select at least one skill domain'),
  interestAreas: z.array(z.string()).min(1, 'Please select at least one interest area / mission'),
  weeklyHours: z.string().min(1, 'Please select your weekly time commitment'),
  motivation: z
    .string()
    .min(10, 'Motivation statement must be at least 10 characters')
    .max(1000, 'Motivation statement cannot exceed 1000 characters'),
});

type VolunteerSchemaType = z.infer<typeof volunteerSchema>;

export const VolunteerPage: React.FC = () => {
  const { currentStep, formData, setStep, nextStep, prevStep, submitVolunteerForm, isSubmitted, isSubmitting, resetForm } = useVolunteerStore();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm<VolunteerSchemaType>({
    resolver: zodResolver(volunteerSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: formData.fullName || '',
      email: formData.email || '',
      phone: formData.phone || '',
      state: formData.state || 'Kerala',
      district: formData.district || '',
      occupation: formData.occupation || '',
      skills: formData.skills || ['Mentoring / Teaching'],
      interestAreas: formData.interestAreas || ['AI Literacy Mission'],
      weeklyHours: formData.weeklyHours || '2-4 hours',
      motivation: formData.motivation || '',
    },
  });

  const selectedSkills = watch('skills') || [];
  const selectedInterests = watch('interestAreas') || [];
  const districtValue = watch('district') || '';
  const phoneValue = watch('phone') || '';

  const toggleSkill = (skill: string) => {
    const current = [...selectedSkills];
    const index = current.indexOf(skill);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(skill);
    }
    setValue('skills', current, { shouldValidate: true, shouldDirty: true });
  };

  const toggleInterest = (interest: string) => {
    const current = [...selectedInterests];
    const index = current.indexOf(interest);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(interest);
    }
    setValue('interestAreas', current, { shouldValidate: true, shouldDirty: true });
  };

  const handleNextStep = async () => {
    if (currentStep === 1) {
      const isValid = await trigger(['fullName', 'email', 'phone', 'state', 'district', 'occupation']);
      if (isValid) {
        nextStep();
        window.scrollTo({ top: 250, behavior: 'smooth' });
      }
    } else if (currentStep === 2) {
      const isValid = await trigger(['skills', 'interestAreas']);
      if (isValid) {
        nextStep();
        window.scrollTo({ top: 250, behavior: 'smooth' });
      }
    }
  };

  const handleStepClick = async (targetStep: number) => {
    if (targetStep === currentStep) return;
    if (targetStep < currentStep) {
      setStep(targetStep);
      return;
    }
    if (targetStep === 2) {
      const isStep1Valid = await trigger(['fullName', 'email', 'phone', 'state', 'district', 'occupation']);
      if (isStep1Valid) setStep(2);
    } else if (targetStep === 3) {
      const isStep1Valid = await trigger(['fullName', 'email', 'phone', 'state', 'district', 'occupation']);
      if (!isStep1Valid) {
        setStep(1);
        return;
      }
      const isStep2Valid = await trigger(['skills', 'interestAreas']);
      if (isStep2Valid) setStep(3);
    }
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
                  <span>National Volunteer Movement</span>
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                  Join 100,000 Changemakers
                </h1>
                <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                  Dedicate your skills, time, and passion to mentor youth, deliver AI literacy, and build a stronger India.
                </p>
              </div>
            </FadeIn>

            {isSubmitted ? (
              <FadeIn direction="up">
                <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-900/15 text-center space-y-6 shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-emerald-800" />
                  </div>

                  <h2 className="font-heading font-extrabold text-3xl text-slate-950">Welcome to the Movement!</h2>
                  <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed font-medium">
                    Your volunteer registration has been received. Our District Volunteer Coordinator will reach out to you via Email and WhatsApp shortly.
                  </p>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-mono inline-block font-bold">
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
              <div className="p-6 sm:p-10 rounded-3xl bg-white border border-emerald-900/15 shadow-xl space-y-8 text-left">
                {/* Wizard Steps Indicator */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  {[
                    { step: 1, label: 'Personal Info' },
                    { step: 2, label: 'Skills & Domains' },
                    { step: 3, label: 'Commitment' },
                  ].map((s) => (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => handleStepClick(s.step)}
                      className="flex items-center gap-3 cursor-pointer group focus:outline-none"
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all ${
                          currentStep === s.step
                            ? 'bg-[#15803d] text-white shadow-lg shadow-emerald-700/30 ring-4 ring-emerald-100'
                            : currentStep > s.step
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-slate-100 text-slate-400 border border-slate-200 group-hover:border-slate-300'
                        }`}
                      >
                        {currentStep > s.step ? <CheckCircle2 className="w-5 h-5" /> : s.step}
                      </div>
                      <span className={`text-xs font-heading font-bold ${currentStep === s.step ? 'text-slate-950' : 'text-slate-500 group-hover:text-slate-800'}`}>
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1: Personal Details */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">
                          Full Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          {...register('fullName')}
                          type="text"
                          placeholder="Full Name"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-950 placeholder-slate-400 focus:outline-none text-sm font-medium transition-colors ${
                            errors.fullName ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' : 'border-slate-200 focus:border-[#15803d] focus:bg-white'
                          }`}
                        />
                        {errors.fullName && (
                          <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.fullName.message}</span>
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            Email Address <span className="text-rose-600">*</span>
                          </label>
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="Email Address"
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-950 placeholder-slate-400 focus:outline-none text-sm font-medium transition-colors ${
                              errors.email ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' : 'border-slate-200 focus:border-[#15803d] focus:bg-white'
                            }`}
                          />
                          {errors.email && (
                            <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.email.message}</span>
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            Phone Number <span className="text-rose-600">*</span>
                          </label>
                          <PhoneInput
                            value={phoneValue}
                            onChange={(val) => setValue('phone', val, { shouldValidate: true, shouldDirty: true })}
                            error={!!errors.phone}
                            placeholder="Mobile Number"
                          />
                          {errors.phone && (
                            <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.phone.message}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            State <span className="text-rose-600">*</span>
                          </label>
                          <input
                            {...register('state')}
                            type="text"
                            placeholder="State"
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-950 text-sm font-medium transition-colors ${
                              errors.state ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' : 'border-slate-200 focus:border-[#15803d] focus:bg-white'
                            }`}
                          />
                          {errors.state && (
                            <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.state.message}</span>
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            District <span className="text-rose-600">*</span>
                          </label>
                          <DistrictAutocomplete
                            value={districtValue}
                            onChange={(val) => setValue('district', val, { shouldValidate: true, shouldDirty: true })}
                            error={errors.district?.message}
                            placeholder="Select or type district"
                          />
                          {errors.district && (
                            <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.district.message}</span>
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            Occupation <span className="text-rose-600">*</span>
                          </label>
                          <input
                            {...register('occupation')}
                            type="text"
                            placeholder="Occupation"
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-950 text-sm font-medium transition-colors ${
                              errors.occupation ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' : 'border-slate-200 focus:border-[#15803d] focus:bg-white'
                            }`}
                          />
                          {errors.occupation && (
                            <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.occupation.message}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Skills & Interest Domains */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-800">
                          Select Your Skills <span className="text-rose-600">*</span>
                        </label>
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
                              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                                selectedSkills.includes(skill)
                                  ? 'bg-[#15803d] text-white border-emerald-700 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-500'
                              }`}
                            >
                              {skill}
                            </button>
                          ))}
                        </div>
                        {errors.skills && (
                          <span className="text-xs text-rose-600 flex items-center gap-1 font-semibold pt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.skills.message}</span>
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-800">
                          Select Preferred Missions <span className="text-rose-600">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Scholarship Mission', 'Shepreneurs Initiative', 'AI Literacy Mission',
                            'Digital Skills Mission', 'Preventive Healthcare', 'Leadership Academy'
                          ].map((interest) => (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleInterest(interest)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                                selectedInterests.includes(interest)
                                  ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-500'
                              }`}
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                        {errors.interestAreas && (
                          <span className="text-xs text-rose-600 flex items-center gap-1 font-semibold pt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.interestAreas.message}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Commitment & Motivation */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">
                          Weekly Time Commitment <span className="text-rose-600">*</span>
                        </label>
                        <select
                          {...register('weeklyHours')}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 text-sm font-medium focus:outline-none focus:border-[#15803d]"
                        >
                          <option value="1-2 hours">1-2 hours per week</option>
                          <option value="2-4 hours">2-4 hours per week</option>
                          <option value="5-10 hours">5-10 hours per week</option>
                          <option value="Full-time">Full-time Fellowship</option>
                        </select>
                        {errors.weeklyHours && (
                          <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.weeklyHours.message}</span>
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">
                          Motivation & Vision <span className="text-rose-600">*</span>
                        </label>
                        <textarea
                          {...register('motivation')}
                          rows={4}
                          placeholder="Share your motivation and vision"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-950 placeholder-slate-400 focus:outline-none text-sm font-medium transition-colors ${
                            errors.motivation ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' : 'border-slate-200 focus:border-[#15803d] focus:bg-white'
                          }`}
                        />
                        {errors.motivation && (
                          <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.motivation.message}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    {currentStep > 1 ? (
                      <Button type="button" variant="secondary" size="sm" onClick={prevStep} leftIcon={<ArrowLeft className="w-4 h-4" />}>
                        Back
                      </Button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 3 ? (
                      <Button type="button" variant="primary" size="sm" onClick={handleNextStep} className="bg-[#15803d] hover:bg-emerald-800 text-white font-bold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                        Next Step
                      </Button>
                    ) : (
                      <Button type="submit" variant="primary" size="md" isLoading={isSubmitting} className="bg-[#15803d] hover:bg-emerald-800 text-white font-bold" leftIcon={<HeartHandshake className="w-4 h-4" />}>
                        Submit Volunteer Registration
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerPage;
