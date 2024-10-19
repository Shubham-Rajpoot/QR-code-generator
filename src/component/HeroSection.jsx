import image from '../assets/landing-page.jpg' ; 

export const HeroSection = ({setDisplay}) => {
  return (
    <>
      <main className="hero-section main" onClick={()=> setDisplay("none")}>
        <div className="container">
          <div className="banner-column">
            <div className="banner-inner">
              <h1 className="heading-xl">
                
               Create custom QR codes in seconds
                – fast, easy, and free!
              </h1>
              <p className="paragraph">
                We stores all your most important files in one secure location.
                Access them whenever needed, share and collaborate with your
                connections.
              </p>
              <button className="btn btn-darken btn-inline">
                Generate qrcode<i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div className="banner-img">
              <img
                className="banner-image"
                src={image}
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};