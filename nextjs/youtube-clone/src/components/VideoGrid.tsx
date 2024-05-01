import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"Friends: The one with the pranks",
    thumbnail:"./friends.png",
    timestamp:"20 hours ago",
    authorImg:"./logo.png",
    views:"20M views"
},
{
    title:"Friends: The one with the jokes",
    thumbnail:"./friends.png",
    timestamp:"14 hours ago",
    authorImg:"./logo.png",
    views:"20M views"
},
{
    title:"Friends: The one with the sarcasm",
    thumbnail:"./friends.png",
    timestamp:"10 hours ago",
    authorImg:"./logo.png",
    views:"20M views"
},
{
    title:"Friends: The one with the pranks",
    thumbnail:"./friends.png",
    timestamp:"20 hours ago",
    authorImg:"./logo.png",
    views:"20M views"
},
{
    title:"Friends: The one with the jokes",
    thumbnail:"./friends.png",
    timestamp:"14 hours ago",
    authorImg:"./logo.png",
    views:"20M views"
},
{
    title:"Friends: The one with the sarcasm",
    thumbnail:"./friends.png",
    timestamp:"10 hours ago",
    authorImg:"./logo.png",
    views:"20M views"
}]

export function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                thumbnail={video.thumbnail}
                timestamp={video.timestamp} 
                authorImg={video.authorImg}
                views={video.views}></VideoCard>
            </div>
        )}
    </div>
}