const Products = () => {
    return (<>
    <div className="container mt-4">
    <div className="container pb-3">
        <h1 className="display-4">Products</h1>
        <div className="row gy-3 mt-2">
            <div className="col-sm-4">
                <figure>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src="images/manga-resize.jpg"/>
                    <figcaption>$25</figcaption>
                </figure>
                
            </div>
            <div className="col-sm-4">
                <figure>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src="images/architecture-resize.jpg"/>
                    <figcaption>$80</figcaption>
                </figure>
                
            </div>
            <div className="col-sm-4">
                <figure>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src="images/sketch-resize.jpg"/>
                    <figcaption>$20</figcaption>
                </figure>
            </div>
        </div>

        <div className="row gy-3 mt-2">
            <div className="col-sm-4">
                <figure>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src="images/chinese-pink-resize.jpg"/>
                    <figcaption>$40</figcaption>
                </figure>
            </div>
            <div className="col-sm-4">
                <figure>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src="images/mountain-pink-resize.jpg"/>
                    <figcaption>$50</figcaption>
                </figure>
                
            </div>
            <div className="col-sm-4">
                <figure>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src="images/landscape-pink-resize.jpg"/>
                    <figcaption>$60</figcaption>
                </figure>
                
            </div>
        </div>

        <div className="row gy-3 mt-2">
            <div className="col-sm-4">
                <figure>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src="images/face-resize.jpg"/>
                    <figcaption>$15</figcaption>
                </figure>
                
            </div>
            <div className="col-sm-4">
                <figure>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src="images/line-chair-resize.jpg"/>
                    <figcaption>$20</figcaption>
                </figure>
                
            </div>
            <div className="col-sm-4">
                <figure>
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src="images/book-line-resize.jpg"/>
                    <figcaption>$20</figcaption>
                </figure>
                
            </div>
        </div>
    </div>
</div>
    
    </>);
}
 
export default Products;