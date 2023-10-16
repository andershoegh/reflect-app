import { create } from "zustand";
import { Request, RequestItem } from "./types";

interface CreateRequestState {
    content: Request["content"];
    title: Request["title"];
    addRequestItem: (newItem: RequestItem) => void;
    updateRequestContent: (updatedContent: RequestItem[]) => void;
}

export const useCreateRequestStore = create<CreateRequestState>((set) => ({
    title: "Mock request",
    content: [
        {
            type: "textarea",
            id: "2",
            description: "Provide your experience with A",
        },
        {
            type: "slider",

            id: "4",
        },
        {
            type: "textarea",

            id: "pdwkpo",
        },
    ],
    updateRequestContent: (updatedContent) =>
        set(() => ({ content: updatedContent })),
    addRequestItem: (newItem) =>
        set(({ content }) => ({ content: [...content, newItem] })),
}));
