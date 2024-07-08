import Hero from "../components/Hero";
import HomeStats from "../components/HomeStats";
import Ratings from "../components/Ratings";
import Stories, { Story } from "../components/Stories";

function HomePage({ stories }: { stories: (Story | null)[] }) {
   

    return (
        <>

            <Hero />
            <Stories stories={stories} limitToShow={4} />
            <Ratings />
            <HomeStats stories={stories} />
        </>
    )
}


export default HomePage;