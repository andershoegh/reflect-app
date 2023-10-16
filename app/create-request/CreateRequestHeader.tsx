import { TypographyH3 } from "@/components/Typography.tsx/H3";
import { TypographySmall } from "@/components/Typography.tsx/TypographySmall";
import { Separator } from "@/components/ui/separator";

export const CreateRequestHeader = () => {
    return (
        <div className="mx-4 flex flex-col gap-2">
            <div>
                <TypographyH3>Create your feedback request</TypographyH3>
                <TypographySmall>
                    Manage the components in your feedback request by adding
                    them here.
                </TypographySmall>
            </div>
            <Separator className="my-2" />
        </div>
    );
};
