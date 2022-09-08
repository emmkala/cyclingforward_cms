import { Link } from 'react-router-dom'
import { useState } from 'react'

import backgroundImg from '../images/FooterBackground.png'

function Footer() {
    const [email, setEmail] = useState("");

    const submitEmail = (e) => {
        e.preventDefault();
        const userEmail = { "id": "", "contactInfo": email };
        testSendEmail(userEmail);
    }

    const testSendEmail = async (userEmail) => {
        await fetch('/api/Contact', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userEmail)
        }).then(() => {
            console.log('contact info added (maybe)');
        })
    }

    return (
        <div className="footer">
            <div className="footer-info row">
                <div className="footer-info-left col-6">
                    <h6 className="contact-us"> Contact Us. </h6>
                    <p className="contact-us-info">
                        Put your email down and we'll reach out to you
                        about availabilities, donations or
                        any questions you might have.
                    </p>
                    <form className="contact-form" onSubmit={submitEmail}>
                        <input className="email-input" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <button className="btn btn-sub" type="submit"> CONTACT </button>
                    </form>
                    <div className="copyright">
                        <p className="copyright-content"><small><i class="fa-regular fa-copyright"></i></small></p>
                        <p className="copyright-content"><small>cyclingforward.ca 2022</small></p>
                        <p className="copyright-content"><small><a className="linkedin-link" href="https://www.linkedin.com/in/emma-landry-61072b148/">Emma Landry</a></small></p>
                    </div>
                </div>
                <div className="footer-info-right col-6">
                    <Link className="small-links" to="/donate"><small>Donate</small></Link>
                    <Link className="small-links" to="/request"><small>Request</small></Link>
                    <Link className="small-links" to="/shop"><small>Shop</small></Link>
                    <Link className="small-links" to="/learnmore"><small>Learn More</small></Link>
                    <a className="small-links" href="https://gofund.me/efa2a0dc"><small>Go Fund Me</small></a>
                </div>
            </div>
        </div>
    )
}

export default Footer