const NewsLetter = () => {
    return ( <>

        <div className="container mx-auto mt-5 p-5" id="newsletter">
            <h2 className="display-4">Newsletter</h2>
            <p>I send-biweekly emails about print sales, upcoming exhibitions, and online courses I teach. Sign up today!</p>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="subscribe-email" id="subscribe-email" aria-describedby="emailHelpId" placeholder="" />
                <small id="emailHelpId" className="form-text text-muted">We won't spam you everyday</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </> );
}
 
export default NewsLetter;