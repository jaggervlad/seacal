import { FC } from 'react';
import cn from 'classnames';

const GradientButton: FC<{ gradient: string; handleClick?: () => void }> = ({
  gradient,
  handleClick,
  children,
}) => (
  <button
    onClick={handleClick}
    className={cn(
      'text-slate-100 font-bold text-lg px-3 py-2 shadow-lg shadow-slate-900/50 dark:shadow-slate-50/20',
      'rounded bg-gradient-to-r',
      'transform hover:scale-[1.05] transition-all',
      gradient
    )}
  >
    {children}
  </button>
);

export default GradientButton;
