import ProductCard from "./productCard/productCard"
import PayMetCard from "./payMetCard/payMetCard"

export default function FeaturedProductAndPayMethod () {
    return(
        <section className="grid grid-cols-2 place-items-center mt-10 mb-10 min-h-[500px] bg-black">
            <ProductCard/>
            <PayMetCard/>
        </section>
    )
}