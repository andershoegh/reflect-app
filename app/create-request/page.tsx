"use client";

import SortableList from "@/lib/DnD/SortableList";
import { AddItem } from "./AddItem";
import { AddItemCommandBox } from "./AddItemCommandBox";
import { useState } from "react";
import { CreateRequestHeader } from "./CreateRequestHeader";
import { useCreateRequestStore } from "./useCreateRequestStore";

export default function CreateRequest() {
    const { addRequestItem } = useCreateRequestStore();

    const [showAddItemBox, setShowAddItemBox] = useState(false);

    return (
        <div className="flex w-full flex-col gap-10">
            <div>
                <CreateRequestHeader />
                <SortableList />
            </div>
            <AddItem handleOpenAddItemBox={() => setShowAddItemBox(true)} />
            <AddItemCommandBox
                open={showAddItemBox}
                setOpen={() => {
                    setShowAddItemBox((prev) => !prev);
                }}
                addRequestItem={addRequestItem}
            />
        </div>
    );
}
