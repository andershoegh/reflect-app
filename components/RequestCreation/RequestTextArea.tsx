import { RequestItemTextArea } from "@/app/create-request/types";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import useStore from "@/lib/zustand/useStore";
import { useCreateRequestStore } from "@/app/create-request/useCreateRequestStore";

type Props = {
    requestItem: RequestItemTextArea;
};

export const RequestTextArea = ({ requestItem }: Props) => {
    const { description } = requestItem;
    const updateRequestItem = useCreateRequestStore(
        (state) => state.updateRequestItem,
    );
    return (
        <div className="flex flex-col gap-1">
            <Input
                type="text"
                value={description}
                onBlur={(e) =>
                    updateRequestItem({
                        ...requestItem,
                        description: e.target.value,
                    })
                }
                placeholder="Enter your question here..."
            />
            <Textarea placeholder="Respondents will enter text here..." />
        </div>
    );
};
