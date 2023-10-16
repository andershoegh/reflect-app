"use client";

import {
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useId } from "react";
import { SortableItem } from "./SortableItem";
import { RequestItem } from "@/app/create-request/types";
import { useCreateRequestStore } from "@/app/create-request/useCreateRequestStore";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const SortableList = () => {
    const { updateRequestContent, content: requestContent } =
        useCreateRequestStore();

    const id = useId();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) return;
        if (active.id !== over.id) {
            const oldIndex = requestContent
                .map((item) => item.id)
                .indexOf(active.id);
            const newIndex = requestContent
                .map((item) => item.id)
                .indexOf(over.id);

            const updatedArray = arrayMove<RequestItem>(
                requestContent,
                oldIndex,
                newIndex,
            );

            updateRequestContent(updatedArray);
        }
    };

    if (requestContent.length === 0)
        return (
            <div className="mx-4 mt-2">
                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>
                        Add content to your feedback request
                    </AlertTitle>
                    <AlertDescription className="mt-1">
                        Your feedback request has no items in it yet. Add them
                        by clicking below or by using the ⌘K command.
                    </AlertDescription>
                </Alert>
            </div>
        );
    return (
        <div className="">
            <DndContext
                id={id}
                collisionDetection={closestCenter}
                sensors={sensors}
                onDragEnd={handleDragEnd}
            >
                <div className="flex flex-col gap-4">
                    <SortableContext items={requestContent}>
                        {requestContent.map((item) => (
                            <SortableItem key={item.id} item={item} />
                        ))}
                    </SortableContext>
                </div>
            </DndContext>
        </div>
    );
};

export default SortableList;
