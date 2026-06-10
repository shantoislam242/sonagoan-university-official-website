import { ReactNode } from 'react';

// Max-width container used by SUNavbar. Matches the source project's
// 1600px max-width with consistent horizontal padding.
export default function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1600px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px] ${className}`}>
      {children}
    </div>
  );
}
