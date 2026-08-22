import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '../components/motion/FadeIn';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, Clock } from 'lucide-react';
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

      <div className="pt-32 pb-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Reach Out
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Connect With Our Movement
              </h1>
              <p className="text-slate-300 text-base sm:text-lg">
                Have questions about scholarships, AI literacy missions, or partnerships? Our team is here to assist.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information & Office Cards */}
            <FadeIn direction="left">
              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-xl">
                  <h3 className="font-heading font-extrabold text-2xl text-white">Movement Headquarters</h3>

                  <div className="space-y-6 text-sm text-slate-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <strong className="text-white text-base block">Kannur Office (Kerala)</strong>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Door no 5/430 D, Madappurachal, Manathana PO, Kannur Dist, Kerala - 670674
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <strong className="text-white text-base block">Coimbatore Office (Tamil Nadu)</strong>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          #3, Sri Mahalakshmi Garden, Saravanampatti, Coimbatore, Tamil Nadu - 641035
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                      <a href="tel:+919562858868" className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-center gap-3">
                        <Phone className="w-5 h-5 text-emerald-400" />
                        <div>
                          <span className="text-[11px] text-slate-400 block">Hotline</span>
                          <strong className="text-xs text-white">+91 95628 58868</strong>
                        </div>
                      </a>

                      <a href="mailto:hello@yuvaparipalan.org" className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-center gap-3">
                        <Mail className="w-5 h-5 text-emerald-400" />
                        <div>
                          <span className="text-[11px] text-slate-400 block">Email Inquiries</span>
                          <strong className="text-xs text-white">hello@yuvaparipalan.org</strong>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 text-xs text-slate-300">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Working Hours</strong>
                    Monday – Saturday: 9:00 AM – 6:00 PM IST
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Interactive Contact Form */}
            <FadeIn direction="right">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
                <h3 className="font-heading font-extrabold text-2xl text-white">Send Us a Message</h3>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading font-bold text-xl text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-300">
                      Thank you for contacting Yuvaparipalan Foundation. Our representative will get back to you shortly.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                      <input
                        {...register('fullName')}
                        type="text"
                        placeholder="John Doe"
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
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                        />
                        {errors.email && <span className="text-xs text-rose-400 mt-1">{errors.email.message}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                        />
                        {errors.phone && <span className="text-xs text-rose-400 mt-1">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                      <input
                        {...register('subject')}
                        type="text"
                        placeholder="Inquiry about Merit Scholarships / AI Mission"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                      />
                      {errors.subject && <span className="text-xs text-rose-400 mt-1">{errors.subject.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Write your query here..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                      />
                      {errors.message && <span className="text-xs text-rose-400 mt-1">{errors.message.message}</span>}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
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
