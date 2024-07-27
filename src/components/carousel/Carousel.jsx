import ImgSlider from '../slider/ImgSlider'
import './Carousel.css'
function Carousel() {
    return (
        <div className="w-90% bg-slate-200 carousel-height grid md:grid-cols-4 p-3 gap-x-1 ">
            <div className="bg-rose-950 col-span-1">left</div>
            <div className="bg-sky-900 col-span-2">
                {/*<ImgSlider />*/}
            </div>
            <div className="bg-teal-950 col-span-1">video</div>
        </div>
    )
}

export default Carousel