import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown, Check } from 'lucide-react';

export const KERALA_DISTRICTS = [
  { name: 'Thiruvananthapuram', state: 'Kerala' },
  { name: 'Kollam', state: 'Kerala' },
  { name: 'Pathanamthitta', state: 'Kerala' },
  { name: 'Alappuzha', state: 'Kerala' },
  { name: 'Kottayam', state: 'Kerala' },
  { name: 'Idukki', state: 'Kerala' },
  { name: 'Ernakulam', state: 'Kerala' },
  { name: 'Thrissur', state: 'Kerala' },
  { name: 'Palakkad', state: 'Kerala' },
  { name: 'Malappuram', state: 'Kerala' },
  { name: 'Kozhikode', state: 'Kerala' },
  { name: 'Wayanad', state: 'Kerala' },
  { name: 'Kannur', state: 'Kerala' },
  { name: 'Kasaragod', state: 'Kerala' },
];

export const OTHER_MAJOR_DISTRICTS = [
  { name: 'Coimbatore', state: 'Tamil Nadu' },
  { name: 'Chennai', state: 'Tamil Nadu' },
  { name: 'Madurai', state: 'Tamil Nadu' },
  { name: 'Salem', state: 'Tamil Nadu' },
  { name: 'Bengaluru Urban', state: 'Karnataka' },
  { name: 'Dakshina Kannada', state: 'Karnataka' },
  { name: 'Mysuru', state: 'Karnataka' },
  { name: 'New Delhi', state: 'Delhi' },
  { name: 'Mumbai', state: 'Maharashtra' },
];

export const ALL_DISTRICTS = [...KERALA_DISTRICTS, ...OTHER_MAJOR_DISTRICTS];

interface DistrictAutocompleteProps {
  value: string;
  onChange: (val: string) => void;
  error?: string;
  placeholder?: string;
}

export const DistrictAutocomplete: React.FC<DistrictAutocompleteProps> = ({
  value,
  onChange,
  error,
  placeholder = 'Select or type district...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredDistricts = ALL_DISTRICTS.filter((d) =>
    d.name.toLowerCase().includes(inputValue.toLowerCase().trim())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    onChange(val);
    setIsOpen(true);
    setHighlightedIndex(0);
  };

  const handleSelect = (districtName: string) => {
    setInputValue(districtName);
    onChange(districtName);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % (filteredDistricts.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + filteredDistricts.length) % (filteredDistricts.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredDistricts[highlightedIndex]) {
        handleSelect(filteredDistricts[highlightedIndex].name);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full text-left">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full px-4 py-3 pr-10 rounded-xl bg-slate-50 border text-slate-950 placeholder-slate-400 focus:outline-none text-sm font-medium transition-colors ${
            error ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' : 'border-slate-200 focus:border-[#15803d] focus:bg-white'
          }`}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-slate-400">
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-emerald-700' : ''}`} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-xl py-1 text-xs text-slate-900 custom-scrollbar">
          {filteredDistricts.length > 0 ? (
            filteredDistricts.map((item, index) => {
              const isSelected = item.name.toLowerCase() === inputValue.toLowerCase().trim();
              const isHighlighted = index === highlightedIndex;
              const isKerala = item.state === 'Kerala';

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleSelect(item.name)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  className={`w-full text-left px-3.5 py-2.5 flex items-center justify-between transition-colors ${
                    isHighlighted ? 'bg-emerald-50 text-emerald-950 font-bold' : 'hover:bg-slate-50 text-slate-700 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className={`w-3.5 h-3.5 shrink-0 ${isKerala ? 'text-emerald-700' : 'text-slate-400'}`} />
                    <span className="truncate">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span className="text-[10px] text-slate-400 font-mono">
                      {item.state}
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-emerald-700 shrink-0" />}
                  </div>
                </button>
              );
            })
          ) : (
            <div className="p-3 text-center text-slate-500 text-xs font-medium">
              No matching district found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DistrictAutocomplete;
