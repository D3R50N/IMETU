import { Link } from "react-router-dom";

export type Story = {
    _id: string,
    title: string,
    story: string,
    createdAt: string,
    updatedAt: string
}

export function Stories({ stories, limitToShow }: { stories: (Story | null)[], limitToShow?: number }) {
    return (
        <div className="px-[10%] flex flex-col justify-center items-center gap-6">
            <h1 className="font-bold text-5xl uppercase text-center mb-10 tracking-wider duration-150 hover:tracking-tight [word-spacing:1.3em underline underline-offset-8">Latest storytimes</h1>
            <StoriesGrid stories={stories} limitToShow={limitToShow} />
            <Link className="btn  btn-secondary border-1 uppercase font-bold" to="/stories">View all stories </Link>
        </div>
    )
}
export function StoriesGrid({ stories, limitToShow }: { stories: (Story | null)[], limitToShow?: number }) {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 ">
            {(limitToShow ? stories.filter((_, i) => i < limitToShow) : stories).map((story) => (
                <StoryCard key={story?._id || Math.random()} story={story} />
            ))
            }
        </div>
    )
}

export function StoryCard({ story }: { story: Story | null }) {
    if (!story) {
        return <div className="card bordered gap-4">
            <div className="card-body">
                <h2 className="skeleton h-3 w-[40%] rounded-[.3em]"></h2>
                <p className="skeleton h-28 w-full rounded-[.3em]"></p>
                <p className="skeleton h-3 w-36 rounded-[.3em] flex-none"></p>
            </div>
        </div>
    }
    return (
        <div className="card bordered hover:scale-105 duration-75 hover:bg-base-200 cursor-pointer" id={story._id}>
            <div className="card-body">
                <h2 className="font-bold">{(!story.title || story.title.trim() == "") ? "Untitled story" : story.title}</h2>
                <p className="overflow-hidden  line-clamp-5 ">{story.story}</p>
                <p className="text-gray-600 italic flex-none">Published at {story.createdAt.split("T")[0].split("-").reverse().join("/")}</p>
            </div>

        </div>
    )
}

export default Stories
    ;