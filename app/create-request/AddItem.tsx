import { Button } from "@/components/ui/button";
import { CommandShortcut } from "@/components/ui/command";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";

type Props = {
    handleOpenAddItemBox: () => void;
};

export const AddItem = ({ handleOpenAddItemBox }: Props) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        onClick={handleOpenAddItemBox}
                        className="mx-4 gap-1"
                    >
                        <Plus className="h-4 w-4" /> Add
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <CommandShortcut>⌘K</CommandShortcut>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
