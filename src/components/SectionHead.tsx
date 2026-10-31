import type { ReactNode } from 'react';

export default function SectionHead({
  index,
  label,
  title,
  aside,
}: {
  index: string;
  label: string;
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="section-head reveal">
      <div className="section-head__label">
        <span className="mono">{index}</span>
        <span>{label}</span>
      </div>
      <div className="section-head__row">
        <h2 className="section-head__title">{title}</h2>
        {aside}
      </div>
    </div>
  );
}
