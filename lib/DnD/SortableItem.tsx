import { RequestItem } from "@/app/create-request/types";
import { RequestSlider } from "@/components/RequestCreation/RequestSlider";
import { RequestTextArea } from "@/components/RequestCreation/RequestTextArea";
import { Slider } from "@/components/ui/slider";
import { useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

type Props = {
    item: RequestItem;
};

const initialStyles = {
    x: 0,
    y: 0,
    scale: 1,
};

export const SortableItem = ({ item }: Props) => {
    const { id, type } = item;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id, strategy: verticalListSortingStrategy });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={{ ...style, zIndex: isDragging ? 1 : 0 }}
            key={id}
            className="group/handle relative flex px-4"
        >
            <div
                {...attributes}
                {...listeners}
                className="invisible absolute -left-1 top-1/2 h-fit -translate-y-1/2 opacity-0 transition-all duration-200 hover:visible hover:opacity-100 group-hover/handle:visible group-hover/handle:opacity-100"
            >
                <GripVertical size={15} className="text-slate-400" />
            </div>

            <div className="flex w-full flex-col justify-start gap-10">
                {type === "textarea" && <RequestTextArea requestItem={item} />}
                {type === "slider" && <RequestSlider />}
            </div>
        </div>
    );
};
