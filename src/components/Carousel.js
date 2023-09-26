const Carousel = () => {
    return (<>
    <div className="container col-sm-6 mx-auto">
        <div id="carouselId" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img src="images/manga-resize.jpg" className="w-100 d-block" alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img src="images/chinese-pink-resize.jpg" className="w-100 d-block" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img src="images/face-resize.jpg" className="w-100 d-block" alt="Third slide"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </>  );
}
 
export default Carousel;