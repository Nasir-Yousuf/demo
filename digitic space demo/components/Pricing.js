const Pricing = () => {
  return (
    <div className=" pricing_table_box">
      {' '}
      <div id="generic_price_table">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/*PRICE HEADING START*/}
                <div className="clearfix price-heading">
                  <h1 className="pt-5">Our Pricing</h1>
                </div>
                {/*//PRICE HEADING END*/}
              </div>
            </div>
          </div>
          <div className="container">
            {/*BLOCK ROW START*/}
            <div className="row">
              <div className="col-md-4">
                {/*PRICE CONTENT START*/}
                <div className="clearfix generic_content">
                  {/*HEAD PRICE DETAIL START*/}
                  <div className="clearfix generic_head_price">
                    {/*HEAD CONTENT START*/}
                    <div className="clearfix generic_head_content">
                      {/*HEAD START*/}
                      <div className="head_bg" />
                      <div className="head">
                        <span>Basic</span>
                      </div>
                      {/*//HEAD END*/}
                    </div>
                    {/*//HEAD CONTENT END*/}
                    {/*PRICE START*/}
                    <div className="clearfix generic_price_tag">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">99</span>
                        <span className="cent">.99</span>
                        <span className="month">/MON</span>
                      </span>
                    </div>
                    {/*//PRICE END*/}
                  </div>
                  {/*//HEAD PRICE DETAIL END*/}
                  {/*FEATURE LIST START*/}
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        <span>2GB</span> Bandwidth
                      </li>
                      <li>
                        <span>150GB</span> Storage
                      </li>
                      <li>
                        <span>12</span> Accounts
                      </li>
                      <li>
                        <span>7</span> Host Domain
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>
                  {/*//FEATURE LIST END*/}
                  {/*BUTTON START*/}
                  <div className="clearfix generic_price_btn">
                    <a className href>
                      Sign up
                    </a>
                  </div>
                  {/*//BUTTON END*/}
                </div>
                {/*//PRICE CONTENT END*/}
              </div>
              <div className="col-md-4">
                {/*PRICE CONTENT START*/}
                <div className="clearfix generic_content active">
                  {/*HEAD PRICE DETAIL START*/}
                  <div className="clearfix generic_head_price">
                    {/*HEAD CONTENT START*/}
                    <div className="clearfix generic_head_content">
                      {/*HEAD START*/}
                      <div className="head_bg" />
                      <div className="head">
                        <span>Standard</span>
                      </div>
                      {/*//HEAD END*/}
                    </div>
                    {/*//HEAD CONTENT END*/}
                    {/*PRICE START*/}
                    <div className="clearfix generic_price_tag">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">199</span>
                        <span className="cent">.99</span>
                        <span className="month">/MON</span>
                      </span>
                    </div>
                    {/*//PRICE END*/}
                  </div>
                  {/*//HEAD PRICE DETAIL END*/}
                  {/*FEATURE LIST START*/}
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        <span>5GB</span> Bandwidth
                      </li>
                      <li>
                        <span>500GB</span> Storage
                      </li>
                      <li>
                        <span>20</span> Accounts
                      </li>
                      <li>
                        <span>15</span> Host Domain
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>
                  {/*//FEATURE LIST END*/}
                  {/*BUTTON START*/}
                  <div className="clearfix generic_price_btn">
                    <a className href>
                      Sign up
                    </a>
                  </div>
                  {/*//BUTTON END*/}
                </div>
                {/*//PRICE CONTENT END*/}
              </div>
              <div className="col-md-4">
                {/*PRICE CONTENT START*/}
                <div className="clearfix generic_content">
                  {/*HEAD PRICE DETAIL START*/}
                  <div className="clearfix generic_head_price">
                    {/*HEAD CONTENT START*/}
                    <div className="clearfix generic_head_content">
                      {/*HEAD START*/}
                      <div className="head_bg" />
                      <div className="head">
                        <span>Unlimited</span>
                      </div>
                      {/*//HEAD END*/}
                    </div>
                    {/*//HEAD CONTENT END*/}
                    {/*PRICE START*/}
                    <div className="clearfix generic_price_tag">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">299</span>
                        <span className="cent">.99</span>
                        <span className="month">/MON</span>
                      </span>
                    </div>
                    {/*//PRICE END*/}
                  </div>
                  {/*//HEAD PRICE DETAIL END*/}
                  {/*FEATURE LIST START*/}
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        <span>Unlimited</span> Bandwidth
                      </li>
                      <li>
                        <span>Unlimited</span> Storage
                      </li>
                      <li>
                        <span>Unlimited</span> Accounts
                      </li>
                      <li>
                        <span>Unlimited</span> Host Domain
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>
                  {/*//FEATURE LIST END*/}
                  {/*BUTTON START*/}
                  <div className="clearfix generic_price_btn">
                    <a className href>
                      Sign up
                    </a>
                  </div>
                  {/*//BUTTON END*/}
                </div>
                {/*//PRICE CONTENT END*/}
              </div>
            </div>
            {/*//BLOCK ROW END*/}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
