import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '../components/motion/FadeIn';
import { Button } from '../components/ui/Button';
import { PhoneInput } from '../components/ui/PhoneInput';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendSubmissionEmail } from '../services/emailService';

const contactSchema = z.object({
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
    .regex(/^(?:\+91[\s-]?)?[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number (starting with 6-9)'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message cannot exceed 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  const phoneValue = watch('phone') || '';

  const onSubmit = async (data: ContactFormData) => {
    await sendSubmissionEmail({ formType: 'contact', formData: data });
    setIsSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    reset();
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Yuvaparipalan Foundation"
        description="Get in touch with Yuvaparipalan Foundation headquarters in Kannur (Kerala) & Coimbatore (Tamil Nadu)."
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
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Reach Out To Us</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                Connect With Our Movement
              </h1>
              <p className="text-slate-700 text-base sm:text-lg font-semibold leading-relaxed">
                Have questions about scholarships, AI literacy missions, or partnerships? Our team is here to assist.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Contact Info Cards Column */}
            <FadeIn direction="right" className="lg:col-span-5 flex flex-col h-full">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-900/15 shadow-xl space-y-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-950 mb-6">Movement Headquarters</h3>
                  
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                        <MapPin className="w-5 h-5 text-emerald-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-950 text-sm">Kannur Office (Kerala)</h4>
                        <p className="text-slate-600 font-medium leading-relaxed mt-0.5">
                          Door no 5/430 D, Madappurachal, Manathana PO, Kannur Dist, Kerala - 670674
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                        <MapPin className="w-5 h-5 text-amber-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-950 text-sm">Coimbatore Office (Tamil Nadu)</h4>
                        <p className="text-slate-600 font-medium leading-relaxed mt-0.5">
                          #3, Sri Mahalakshmi Garden, Saravanampatti, Coimbatore, Tamil Nadu - 641035
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                        <Phone className="w-5 h-5 text-emerald-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-950 text-sm">Hotline</h4>
                        <p className="text-slate-700 font-mono font-bold">+91 95628 58868</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                        <Mail className="w-5 h-5 text-emerald-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-950 text-sm">Email Inquiries</h4>
                        <a href="mailto:hello@yuvaparipalan.org" className="text-[#15803d] hover:underline font-mono font-bold">
                          hello@yuvaparipalan.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-2xl bg-slate-100 text-slate-700 border border-slate-300 shrink-0">
                        <Clock className="w-5 h-5 text-slate-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-950 text-sm">Working Hours</h4>
                        <p className="text-slate-600 font-medium">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form Column */}
            <FadeIn direction="left" className="lg:col-span-7 flex flex-col h-full">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-900/15 shadow-xl flex flex-col justify-between h-full">
                <h3 className="font-heading font-bold text-xl text-slate-950 mb-6">Send Us a Direct Message</h3>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading font-bold text-xl text-slate-950">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-600 font-medium">
                      Thank you for contacting Yuvaparipalan Foundation. Our representative will get back to you shortly.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
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

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Subject <span className="text-rose-600">*</span>
                      </label>
                      <input
                        {...register('subject')}
                        type="text"
                        placeholder="Subject"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-950 placeholder-slate-400 focus:outline-none text-sm font-medium transition-colors ${
                          errors.subject ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' : 'border-slate-200 focus:border-[#15803d] focus:bg-white'
                        }`}
                      />
                      {errors.subject && (
                        <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.subject.message}</span>
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Message <span className="text-rose-600">*</span>
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Write your message"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-950 placeholder-slate-400 focus:outline-none text-sm font-medium transition-colors ${
                          errors.message ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' : 'border-slate-200 focus:border-[#15803d] focus:bg-white'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message.message}</span>
                        </span>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full bg-[#15803d] hover:bg-emerald-800 text-white font-bold"
                      isLoading={isSubmitting}
                      leftIcon={<Send className="w-4 h-4" />}
                    >
                      Submit Message
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
