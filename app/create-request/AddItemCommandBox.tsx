"use client";
import {
    CommandDialog,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { SlidersHorizontal, Text } from "lucide-react";
import { useEffect } from "react";
import { RequestItem } from "./types";

type Props = {
    open: boolean;
    setOpen: () => void;
    addRequestItem: (newItem: RequestItem) => void;
};

export const AddItemCommandBox = ({ addRequestItem, open, setOpen }: Props) => {
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen();
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const handleSelect = (type: RequestItem["type"]) => {
        addRequestItem({
            type,
            id: crypto.randomUUID(),
        });
        setOpen();
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Add a component" />
            <CommandList>
                <CommandEmpty>No components found</CommandEmpty>
                <CommandItem onSelect={() => handleSelect("textarea")}>
                    <Text className="mr-2 h-4 w-4" />
                    <span>Text field</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("slider")}>
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    <span>Slider</span>
                </CommandItem>
            </CommandList>
        </CommandDialog>
    );
};
