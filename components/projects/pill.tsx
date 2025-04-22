

export const Pill = ({ title, fontColor = "#082A74" } : { title : string, fontColor ?: string}) => {
    return (
        <div className="flex items-center justify-center py-1 px-2 w-fit h-fit bg-gray-200 rounded-xl text-gray-300 text-sm font-semibold">
            <h1 className={"text-[" + fontColor + "]"}>{ title }</h1>
        </div>
    )
}