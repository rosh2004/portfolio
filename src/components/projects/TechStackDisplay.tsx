'use client';

import { IconType } from 'react-icons';

interface TechStackDisplayProps {
  icons: IconType[];
  tech: string[];
}

export function TechStackDisplay({ icons, tech }: TechStackDisplayProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-2.5">
      {tech.map((name, idx) => {
        const Icon = icons[idx];
        return (
          <div
            key={idx}
            className="
              group
              inline-flex items-center gap-2
              px-3 py-2
              sm:px-3.5 sm:py-2.5
              rounded-xl
              bg-gradient-to-br from-primary/[0.08] to-primary/[0.15]
              dark:from-primary/[0.12] dark:to-primary/[0.22]
              border border-primary/20 dark:border-primary/25
              shadow-sm shadow-primary/5
              transition-all duration-300 ease-out
              hover:shadow-lg hover:shadow-primary/15
              hover:-translate-y-0.5 hover:scale-[1.02]
              hover:border-primary/35
              hover:from-primary/[0.12] hover:to-primary/[0.20]
              dark:hover:from-primary/[0.18] dark:hover:to-primary/[0.28]
            "
          >
            {/* Icon with subtle glow backdrop */}
            {Icon && (
              <span
                className="
                  relative flex items-center justify-center
                  w-6 h-6 sm:w-7 sm:h-7
                  rounded-lg
                  bg-primary/10 dark:bg-primary/20
                  transition-all duration-300
                  group-hover:bg-primary/20 dark:group-hover:bg-primary/30
                "
              >
                <Icon
                  className="
                    w-4 h-4 sm:w-[18px] sm:h-[18px]
                    text-primary
                    transition-all duration-300
                    group-hover:scale-110
                  "
                />
              </span>
            )}

            {/* Tech name */}
            <span
              className="
                text-sm sm:text-[15px] font-medium
                text-foreground/80
                tracking-tight
                transition-colors duration-300
                group-hover:text-foreground
              "
            >
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
