import HeroHome from "./hero/hero";
import FeaturedProductAndPayMethod from "./featured/featuredProductAndPayMethod";

function Home () {
    return(
        <section>
            <HeroHome/>
            <FeaturedProductAndPayMethod/>
        </section>
    )
}

export default Home;