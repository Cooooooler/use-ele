import type { ClassValue } from 'clsx';

import { clsx } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export { cn };
