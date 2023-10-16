import { UniqueIdentifier } from "@dnd-kit/core";

export type Request = {
    title: string;
    content: RequestItem[];
};

export type RequestItem = RequestItemTextArea | RequestItemSlider;

export type RequestItemTextArea = {
    type: "textarea";
    id: UniqueIdentifier;
    description?: string;
};

export type RequestItemSlider = {
    type: "slider";
    id: UniqueIdentifier;
    description?: string;
};
