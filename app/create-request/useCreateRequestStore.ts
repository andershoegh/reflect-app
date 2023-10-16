import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Request, RequestItem } from "./types";

interface CreateRequestState {
    content: Request["content"];
    title: Request["title"];
    addRequestItem: (newItem: RequestItem) => void;
    updateRequestContent: (updatedContent: RequestItem[]) => void;
    updateRequestItem: (updatedItem: RequestItem) => void;
}

export const useCreateRequestStore = create<CreateRequestState>()(
    devtools((set) => ({
        title: "Mock request",
        content: [],
        updateRequestContent: (updatedContent) =>
            set(() => ({ content: updatedContent })),
        addRequestItem: (newItem) =>
            set(({ content }) => ({ content: [...content, newItem] })),
        updateRequestItem: (updatedItem) => {
            set(({ content }) => ({
                content: content.map((item) =>
                    item.id === updatedItem.id
                        ? { ...item, ...updatedItem }
                        : item,
                ),
            }));
        },
    })),
);
