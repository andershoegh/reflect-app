import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export function TypographyP({ children, className }: Props) {
    return (
        <p
            className={cn(
                "leading-7 text-slate-800 [&:not(:first-child)]:mt-6",
                className,
            )}
        >
            {children}
        </p>
    );
}
