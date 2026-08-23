import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { FadeIn } from '../motion/FadeIn';
import { HeartHandshake, Building2, Sparkles, ArrowRight } from 'lucide-react';

export const JoinCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="p-8 sm:p-16 rounded-3xl bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-950 text-white border border-emerald-700/40 shadow-2xl text-center max-w-5xl mx-auto space-y-8 relative overflow-hidden">
            
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Shape India's Future?
            </h2>

            <p className="text-emerald-100 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed italic font-medium">
              "Every child deserves an opportunity. Every youth deserves a purpose. Every woman deserves economic independence. Every family deserves hope."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/volunteer" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-emerald-950 hover:bg-emerald-50 border-0 font-bold shadow-xl"
                  leftIcon={<HeartHandshake className="w-5 h-5 text-emerald-800" />}
                  rightIcon={<ArrowRight className="w-5 h-5 text-emerald-800" />}
                >
                  Join as Volunteer Changemaker
                </Button>
              </Link>

              <Link to="/partner" className="w-full sm:w-auto">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto"
                  leftIcon={<Building2 className="w-5 h-5" />}
                >
                  Partner CSR / Institution
                </Button>
              </Link>
            </div>



          </div>
        </FadeIn>
      </div>
    </section>
  );
};
