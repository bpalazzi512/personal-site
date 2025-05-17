import { Pill } from "./pill";
import { fontTheme } from "@/lib/types";


export const PillGroup = ({pillTitles, fontTheme} : {pillTitles : string[], fontTheme : fontTheme}) => {
    return (
        <div className="flex flex-row space-x-2 space-y-2 flex-wrap">
            {pillTitles.map((title, index) => (
                <Pill title={title} key={index} fontTheme={fontTheme} />
            ))}
        </div>
    );
};