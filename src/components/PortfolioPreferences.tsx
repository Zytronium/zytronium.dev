'use client';

import { useState } from 'react';
import { BriefcaseBusiness, ChevronDown, Code2, Network, Users } from 'lucide-react';

export type Audience = 'employer' | 'visitor';
export type Focus = 'networking' | 'software' | 'both';
export const portfolioPreferencesStorageKey = 'zytronium-portfolio-preferences';

export interface PortfolioPreferencesState {
  audience: Audience;
  focus: Focus;
}

interface PortfolioPreferencesProps {
  audience: Audience;
  focus: Focus;
  onAudienceChange: (audience: Audience) => void;
  onFocusChange: (focus: Focus) => void;
}

const audienceOptions = [
  { value: 'employer' as const, label: 'I’m an employer', icon: BriefcaseBusiness },
  { value: 'visitor' as const, label: 'I’m exploring', icon: Users },
];

const focusOptions = [
  { value: 'networking' as const, label: 'IT networking', icon: Network },
  { value: 'software' as const, label: 'Software development', icon: Code2 },
  { value: 'both' as const, label: 'Show me both', icon: null },
];

export default function PortfolioPreferences({
  audience,
  focus,
  onAudienceChange,
  onFocusChange,
}: PortfolioPreferencesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="preference-container">
      <button
        type="button"
        className="preference-toggle reference-panel"
        aria-expanded={isExpanded}
        aria-controls="preference-panel"
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        <span>
          <span className="eyebrow">PERSONALIZE YOUR VIEW</span>
          <span className="preference-toggle-label">Choose what you’d like to see</span>
        </span>
        <ChevronDown size={20} aria-hidden="true" className={isExpanded ? 'rotate-180' : ''} />
      </button>

      {isExpanded && (
        <section id="preference-panel" className="preference-panel reference-panel" aria-labelledby="preference-title">
          <div>
            <p className="eyebrow">PERSONALIZE YOUR VIEW</p>
            <h2 id="preference-title">What brings you here?</h2>
            <p className="preference-copy">Choose what you’d like to see. You can change this anytime.</p>
          </div>
          <div className="preference-groups">
            <fieldset>
              <legend>Audience</legend>
              <div className="preference-options">
                {audienceOptions.map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={audience === value}
                    className={`preference-option ${audience === value ? 'selected' : ''}`}
                    onClick={() => onAudienceChange(value)}
                  >
                    <Icon size={17} /> {label}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Showcase focus</legend>
              <div className="preference-options">
                {focusOptions.map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={focus === value}
                    className={`preference-option ${focus === value ? 'selected' : ''}`}
                    onClick={() => onFocusChange(value)}
                  >
                    {Icon && <Icon size={17} />} {label}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </section>
      )}
    </div>
  );
}
