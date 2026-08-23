import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '../components/motion/FadeIn';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information & Office Cards */}
            <FadeIn direction="left">
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-white border border-emerald-900/15 space-y-6 shadow-xl text-left">
                  <h3 className="font-heading font-extrabold text-2xl text-slate-950">Movement Headquarters</h3>

                  <div className="space-y-6 text-sm text-slate-700">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                        <MapPin className="w-6 h-6 text-emerald-800" />
                      </div>
                      <div>
                        <strong className="text-slate-950 text-base block font-bold">Kannur Office (Kerala)</strong>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                          Door no 5/430 D, Madappurachal, Manathana PO, Kannur Dist, Kerala - 670674
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                      <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                        <MapPin className="w-6 h-6 text-emerald-800" />
                      </div>
                      <div>
                        <strong className="text-slate-950 text-base block font-bold">Coimbatore Office (Tamil Nadu)</strong>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                          #3, Sri Mahalakshmi Garden, Saravanampatti, Coimbatore, Tamil Nadu - 641035
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                      <a href="tel:+919562858868" className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-colors flex items-center gap-3">
                        <Phone className="w-5 h-5 text-emerald-800" />
                        <div>
                          <span className="text-[11px] text-slate-500 block font-mono">Hotline</span>
                          <strong className="text-xs text-slate-950 font-bold">+91 95628 58868</strong>
                        </div>
                      </a>

                      <a href="mailto:hello@yuvaparipalan.org" className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-colors flex items-center gap-3">
                        <Mail className="w-5 h-5 text-emerald-800" />
                        <div>
                          <span className="text-[11px] text-slate-500 block font-mono">Email Inquiries</span>
                          <strong className="text-xs text-slate-950 font-bold">hello@yuvaparipalan.org</strong>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-emerald-900/15 flex items-center gap-4 text-xs text-slate-700 shadow-md text-left">
                  <Clock className="w-5 h-5 text-emerald-800 shrink-0" />
                  <div>
                    <strong className="text-slate-950 block font-bold">Working Hours</strong>
                    Monday – Saturday: 9:00 AM – 6:00 PM IST
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Interactive Contact Form */}
            <FadeIn direction="right">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-900/15 shadow-xl space-y-6 text-left">
                <h3 className="font-heading font-extrabold text-2xl text-slate-950">Send Us a Message</h3>

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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Full Name</label>
                      <input
                        {...register('fullName')}
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#15803d] focus:bg-white text-sm font-medium"
                      />
                      {errors.fullName && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.fullName.message}</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">Email Address</label>
                        <input
                          {...register('email')}
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#15803d] focus:bg-white text-sm font-medium"
                        />
                        {errors.email && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.email.message}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number</label>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#15803d] focus:bg-white text-sm font-medium"
                        />
                        {errors.phone && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Subject</label>
                      <input
                        {...register('subject')}
                        type="text"
                        placeholder="Inquiry about Merit Scholarships / AI Mission"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#15803d] focus:bg-white text-sm font-medium"
                      />
                      {errors.subject && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.subject.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Message</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Write your query here..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#15803d] focus:bg-white text-sm font-medium"
                      />
                      {errors.message && <span className="text-xs text-rose-600 mt-1 block font-semibold">{errors.message.message}</span>}
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
