import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md",
        "border border-white/10",
        "bg-white/[0.06]",
        "backdrop-blur-sm",
        "shadow-sm",
        "before:absolute before:inset-0",
        "before:-translate-x-full",
        "before:animate-[shimmer_1.5s_ease-in-out_infinite]",
        "before:bg-gradient-to-r",
        "before:from-transparent",
        "before:via-white/[0.12]",
        "before:to-transparent",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };