import { RequestItemTextArea } from "@/app/create-request/types";
import { Textarea } from "../ui/textarea";
import { TypographyP } from "../Typography.tsx/TypographyP";

type Props = {
    requestItem: RequestItemTextArea;
};

export const RequestTextArea = ({ requestItem }: Props) => {
    const { description } = requestItem;
    return (
        <div className="flex flex-col gap-1">
            <TypographyP>{description}</TypographyP>
            <Textarea />
        </div>
    );
};
