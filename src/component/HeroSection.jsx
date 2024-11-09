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
                – fast, easy and free!
              </h1>
              <p className="paragraph">
              Create eye-catching, custom QR codes in seconds! Instantly share links, contact info, and more with a simple scan, designed to match your brand or personal style.
              </p>
              <button className="btn btn-darken btn-inline" >
                <a href="#qr-page" className='generate-qr-ancor'> Generate qrcode<i className="bx bx-right-arrow-alt"></i></a>
               
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