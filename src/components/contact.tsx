export const Contact = () => {
    return (
        <>
            <section id="contact" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="wow fadeInDown animated">Contact Us</h2>
                        <p className="wow fadeInDown animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 conForm">       
                            <div id="message"></div>
                            <input name="name" id="name" type="text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Your name..." />
                            <input name="email" id="email" type="email" className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 noMarr" placeholder="Email Address..." />
                            <textarea name="comments" id="comments" cols={1} rows={1} className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Message..."></textarea>
                            <input type="submit" id="submit" name="send" className="submitBnt" value="Send" />
                            <div id="simple-msg"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}