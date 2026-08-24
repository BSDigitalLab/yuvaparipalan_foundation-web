import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface CountryCode {
  code: string;
  flag: string;
  country: string;
}

export const COUNTRY_CODES: CountryCode[] = [
  { code: '+91', flag: '🇮🇳', country: 'India' },
  { code: '+971', flag: '🇦🇪', country: 'UAE' },
  { code: '+1', flag: '🇺🇸', country: 'USA' },
  { code: '+44', flag: '🇬🇧', country: 'UK' },
  { code: '+65', flag: '🇸🇬', country: 'Singapore' },
  { code: '+966', flag: '🇸🇦', country: 'Saudi Arabia' },
  { code: '+968', flag: '🇴🇲', country: 'Oman' },
  { code: '+974', flag: '🇶🇦', country: 'Qatar' },
  { code: '+965', flag: '🇰🇼', country: 'Kuwait' },
  { code: '+973', flag: '🇧🇭', country: 'Bahrain' },
];

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
  placeholder?: string;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  error,
  placeholder = '98765 43210',
  ...rest
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format incoming or typed value
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typed = e.target.value;
    onChange(typed);
  };

  return (
    <div className="relative w-full text-left" ref={dropdownRef}>
      <div
        className={`flex items-center rounded-xl bg-slate-50 border overflow-hidden transition-all ${
          error
            ? 'border-rose-500 bg-rose-50/20 ring-1 ring-rose-500'
            : 'border-slate-200 focus-within:border-[#15803d] focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500/20'
        }`}
      >
        {/* Flag & Country Code Selector */}
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1.5 px-3 py-3 bg-slate-100/90 border-r border-slate-200/80 hover:bg-slate-200/80 transition-colors text-slate-900 font-mono font-bold text-xs shrink-0 select-none cursor-pointer"
          title="Select Country Code"
        >
          <span className="text-base leading-none">{selectedCountry.flag}</span>
          <span className="text-slate-900">{selectedCountry.code}</span>
          <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180 text-emerald-700' : ''}`} />
        </button>

        {/* Number Input Field */}
        <input
          {...rest}
          type="tel"
          value={value}
          onChange={handleNumberChange}
          placeholder={placeholder}
          className="w-full px-3.5 py-3 text-slate-950 placeholder-slate-400 focus:outline-none text-sm font-medium bg-transparent"
        />
      </div>

      {/* Country Code Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-60 max-h-56 overflow-y-auto bg-white border border-emerald-900/15 rounded-2xl shadow-2xl py-1 z-50 text-xs custom-scrollbar">
          <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100">
            Select Country Code
          </div>
          {COUNTRY_CODES.map((c) => {
            const isSelected = c.code === selectedCountry.code;
            return (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  setSelectedCountry(c);
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2.5 flex items-center justify-between transition-colors ${
                  isSelected ? 'bg-emerald-50 text-emerald-950 font-bold' : 'hover:bg-slate-50 text-slate-700 font-medium'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="text-base leading-none">{c.flag}</span>
                  <span className="font-mono font-bold text-slate-900">{c.code}</span>
                  <span className="text-slate-500 text-[11px] truncate">{c.country}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-emerald-700 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PhoneInput;
