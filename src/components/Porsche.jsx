import img from "../assets/photo/porsche.png"
const Porsche = ({ desc }) => {
    return (
        <div>
            <div className="porsche">
                <div className="container porsche__container">
                    <div className="porsche__left">
                        <h1 className="porsche__title">PORSCHE 911 GT3 R5</h1>
                        {desc.map((paragraph, index) => (
                            <p key={index} className="porsche__desc">
                                {paragraph}
                            </p>
                        ))}


                    </div>
                    <div className="porsche__right">
                        <img src={img} alt="" className="porsche_img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Porsche