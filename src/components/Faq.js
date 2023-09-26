const Faq = () => {
    return (<>
    <div className="container col-sm-6 mt-4">
    <h1 className="display-4">FAQ</h1>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    When will you accept commissions?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    It's hard to say. I'm currently working with other studios and collaborations with other artists. The best way to find out when I'm taking commissions is through my newsletter, where you can receive the latest news and the commission sign-up form. 
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    How can we know which galleries will display your art? 
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    The first place to know will always be my newsletter. I am also available on other platforms such as Twitter and Instagram. 
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="true" aria-controls="collapseThree">
                    How long does it take to process an order?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Our team is small, so it will take around 2-3 weeks for us to process and ship. We will also provide you a tracking number when you place an order.  
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                    aria-expanded="true" aria-controls="collapseFour">
                    Do you ship internationally?
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Unfortunately, no, but I do have plans to expand globally.  
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"
                    aria-expanded="true" aria-controls="collapseFour">
                    Can we return items?
                </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    You can only return items within 5 days after your purchase. Otherwise, all sales are final and we will not be processing a refund. 
                </div>
            </div>
        </div>

    </div>
</div>
    </>  );
}
 
export default Faq;