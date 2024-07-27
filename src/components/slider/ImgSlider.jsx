
function ImgSlider() {
    const slides = [
        "src/assets/Rolex-Watch-Blue.png",
        "https://i.ibb.co/yg7BSdM/4.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/ncrXc2V/1.png",
    ]
    return (
        <div className="w-full h-full">
            <div className="overflow-hidden h-full">
                <div className="flex">{slides.map((img, index) => (
                    <img className="h-full w-full" key={index} src={img} />
                ))}</div>
            </div>
        </div>
    )
}

export default ImgSlider