import { fontTheme } from "@/lib/types";

export const Pill = ({ title, fontTheme} : { title : string, fontTheme : fontTheme}) => {
    let bgColor;
    switch (fontTheme) {
        case "roadar":
            bgColor = "bg-roadar";
            break;
        case "context":
            bgColor = "bg-context";
            break; 
        case "pulse":
            bgColor = "bg-pulse";
            break;
        case "image-compression":
            bgColor = "bg-image-compression";
            break;
        default:
            bgColor = "bg-roadar";
            break;
    }
    return (
        <div className={`flex items-center justify-center py-1 px-2 w-fit h-fit rounded-xl text-sm font-semibold ${bgColor}`}>
            <h1 className={`text-white font-bold`}>{ title }</h1>
        </div>
    )
};