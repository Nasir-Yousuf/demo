import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Features = () => {
  return (
    <div className=" feature_box">
      <div className="container text-center">
        <h3 className="feature_header_text ">Let’s Check Our Services</h3>
        <p className="feature_text">
          We have experts for providing beneath services. We provide our
          services in some of the best industries with a track record of growing
          successful businesses.
        </p>
      </div>
      {/* Our Servicess */}
      <section id="home-icons" className="py-5">
        <div className="container">
          <div className="row">
            <div className=" mb-4 text-center px-15 col-lg-4">
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src="/social.jpg"
                    className="card-img-top all_card_img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="p-2 card-title">Social Media Management</h5>
                    <p className="p-4 card-text">
                      Everyone wants to reach high. Our experts will promote
                      your thought or product via paid marketing, as well as
                      organic marketing.
                    </p>
                    <a href="#" className=" btn btn-primary">
                      Media Section
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 text-center col-lg-4">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="/web.jpg"
                  className="card-img-top all_card_img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Web Management</h5>
                  <p className="p-2 card-text">
                    It is an important part of your online marketing presence.
                    In this package, we cover all kinds of services to run a
                    successful website including regular maintenance, site and
                    data backup, database optimization, plugin updates, and all
                    others.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Wev Section
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 text-center col-lg-4">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="/seo.jpg"
                  className="card-img-top all_card_img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">SEO Management</h5>
                  <p className="p-4 card-text">
                    Get more qualified traffic on the search terms that matter
                    most to your business. And maximize your online visibility.
                    Which will increase your customer base.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Seo Section
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ############################################################################################### */}
          <div className="mt-5 row">
            <div className="mb-4 text-center col-lg-4">
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src="/dropshipping.jpg"
                    className="card-img-top all_card_img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Shopify Dropshipping</h5>
                    <p className="card-text">
                      To start a successful drop shipping you have to make a
                      solid plan for adding value to your brand, focus on
                      marketing and SEO. Our method covers a long-term
                      perspective to set up an ideal business model. We also
                      apply all the secret tricks for selling.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Shopify
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 text-center col-lg-4">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="/grap.jpg"
                  className="card-img-top all_card_img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="p-1 card-title">Graphic Design</h5>
                  <p className="p-4 card-text">
                    Get professional graphic design service and communicate your
                    message using color, style, typography, illustration and
                    creative ideas.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Graphic Section
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 text-center col-lg-4">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="/business.jpg"
                  className="card-img-top all_card_img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Digital Business consultant</h5>
                  <p className="card-text">
                    Our digital marketing experts from all sectors will come
                    together and impart ideas that will make things easier for
                    you. So this will help your company overcome problems, grow
                    revenues, increase its customer base, etc with digital
                    standards all over the world.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Consultant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
