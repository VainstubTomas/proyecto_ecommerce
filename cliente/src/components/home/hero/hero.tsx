import HeroImage from '/heroBanner.jpg'

export default function HeroHome () {
    return <img
    src={HeroImage}
    alt="hero image"
    className='max-h-screen'/>
}