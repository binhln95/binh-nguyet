export const Home = () => {
    console.log('home page')
    return (
        <section className="banner" role="banner" id="home">
            <header id="header">
                <div className="header-content clearfix"> <a className="logo" href="index.html">Partner</a>
                <nav className="navigation" role="navigation">
                    <ul className="primary-nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#intro">Bride & Groom</a></li>
                    <li><a href="#services">Events</a></li>
                    <li><a href="#content-3-10">Family</a></li> 
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#teams">Friends</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <a href="#" className="nav-toggle">Menu<span></span></a> </div>
            </header>
            
            <div id="first-slider">
                <div id="carousel-example-generic" className="carousel slide carousel-fade">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active slide1">
                            <div className="row"><div className="container"> 
                                <div className="col-md-9 text-left">
                                    <h3 data-animation="animated bounceInDown">Elean & Jake</h3>
                                    <h4 data-animation="animated bounceInUp">Are getting married on 22 Aug 2017, NewYork </h4>             
                                </div>
                            </div></div>
                        </div> 
                        <div className="item slide2">
                            <div className="row"><div className="container">
                                <div className="col-md-7 text-left">
                                    <h3 data-animation="animated bounceInDown">Our Wedding Day</h3>
                                    <h4 data-animation="animated bounceInUp">Create beautiful slideshows </h4>
                                </div> 
                            </div></div>
                        </div>
                        <div className="item slide3">
                            <div className="row"><div className="container">
                                <div className="col-md-7 text-left">
                                    <h3 data-animation="animated bounceInDown">Join With Us</h3>
                                    <h4 data-animation="animated bounceInUp">Bootstrap Image Carousel Slider</h4>
                                </div>  
                            </div></div>
                        </div>     
                    </div>
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <i className="fa fa-angle-left"></i><span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <i className="fa fa-angle-right"></i><span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    );
}