export function VideoCard(props: any) {
    return <div className="p-3 cursor-pointer">
        <img className="rounded-xl" src={props.thumbnail} alt="" />
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img className="rounded-full w-20 h-20" src={props.authorImg} alt="" />
            </div>
            <div className="col-span-11">
                <div>{props.title}</div>
                <div className="text-gray-400 text-base">{props.author}</div>
                <div className="text-gray-00 text-base">{props.views} • {props.timestamp}</div>
            </div>
        </div>
    </div>
}