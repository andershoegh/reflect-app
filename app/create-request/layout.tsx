import { ReactNode } from "react";

export default function CreateRequestLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <section className="my-6 flex w-full max-w-2xl justify-center bg-background">
            {children}
        </section>
    );
}
