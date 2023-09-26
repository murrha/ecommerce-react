import { Link } from "react-router-dom";

const ContactUs = () => {
    return (<>
    <div className="container col-sm-6 mt-4">
    <h1 className="display-4">Contact Us</h1>
    <div className="mb-3">
      <label for="name" className="form-label">Name</label>
      <input type="text"
        className="form-control" name="name" id="name" aria-describedby="helpId" placeholder=""/>
    </div>

    <div className="mb-3">
      <label for="email" className="form-label">Email</label>
      <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder=""/>
    </div>

    <div className="mb-3">
      <label for="message" className="form-label">Message</label>
      <textarea className="form-control" name="message" id="message" rows="3"></textarea>
    </div>

    <Link to="/wip"><button type="button" className="btn btn-primary">Submit</button></Link> 
  </div>
    </>  );
}
 
export default ContactUs;