
function Contact() {
    return (
        <div className="container h-100 align-items-center mastheade4" id="contact">

            <div className="row align-center">
                <div className="col-12 align-center text-center p-3">
                    <h1 className="font-weight-light p-3">Get in Touch</h1>
                    <div className="row align-center">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <form action="">
                                <input type="text" id="fname" name="fullname" placeholder="Fullname.." />
                                <input type="text" id="email" name="email" placeholder="Email.." />
                                <textarea id="message" name="message" placeholder="Write something.." style={{ height: 160 + 'px' }}></textarea>

                                <input type="submit" style={{ backgroundColor: "#EACEC5", }} value="Send" />
                            </form>
                        </div>
                        <div className="col-2"></div>
                    </div>

                </div>
            </div>

        </div>


    );
}

export default Contact;
