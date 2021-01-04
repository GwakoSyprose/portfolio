
function Contact() {
    function showText(e) {
        e.preventDefault()
        alert('Thank you for contacting me! :)')
    }
    return (
        <div className="container h-100 align-items-center mastheade4" id="contact">

            <div className="row align-center">
                <div className="col-12 align-center text-center p-3">
                    <h1 className="font-weight-light p-3">Get in Touch</h1>
                    <div className="row align-center">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <form action="">
                                <input type="text" id="fname" name="fullname" placeholder="Fullname.." required />
                                <input type="email" id="email" name="email" placeholder="Email.." required />
                                <textarea id="message" name="message" required placeholder="Write something.." style={{ height: 160 + 'px' }}></textarea>

                                <input type="submit" style={{ backgroundColor: "#EACEC5", }} onClick={showText} value="Send" />
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
