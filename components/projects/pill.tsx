import { fontTheme } from "@/lib/types";

export const Pill = ({ title, fontTheme} : { title : string, fontTheme : fontTheme}) => {
    return (
        <div className="flex items-center justify-center py-1 px-2 w-fit h-fit bg-gray-200 rounded-xl text-sm font-semibold">
            <h1 className={fontTheme}>{ title }</h1>
        </div>
    )
};