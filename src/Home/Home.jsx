import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      
      {/* BACKGROUND VIDEO SECTION */}
      {/* Note: Ensure fintrade.mov is inside your 'public' folder */}
 <video autoPlay muted loop playsInline className="bg-video">
  <source src="/video.mp4" type="video/mp4" />
</video>

      {/* HERO SECTION */}
      <div className="firminfo">
        <h1>Welcome to KevTrading</h1>
        <p>Invest wisely. 100x your investment with KevTrading</p>
      </div>

      {/* ABOUT FIRM */}
      <div className="firmabout">
        <div className="innerpart">
          <h4 className="firm">INFO ABOUT FIRM</h4>
        </div>

        <div className="boxesbox">
          <div className="pic1box">
            <img
              src="/istockphoto-1465618017-612x612.jpg"
              className="img-1"
              alt="trading"
            />
            <p>
              KEV Hedge Fund Trading focuses on disciplined, data-driven
              trading strategies across global markets including forex,
              indices, commodities, and cryptocurrencies.
            </p>
          </div>

          <div className="picbox2">
            <img
              src="/pngtree-trading-data-analysis-with-laptop-picture-image_16499045.jpg"
              className="img-1"
              alt="analysis"
            />
            <p>
              Investment is the process of allocating money into assets
              with the goal of generating long-term growth and income.
              It involves planning, risk assessment and disciplined decisions.
            </p>
          </div>

          <div className="picbox3">
            <img
              src="/trading-chart-depicting-fluctuations-cryptocurrency-market-trading-chart-depicting-fluctuations-cryptocurrency-310643452.webp"
              className="img-1"
              alt="chart"
            />
            <p>
              Charts are visual tools used to represent data and analyze
              trends over time. They help traders understand price movements
              and identify trading patterns.
            </p>
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="whtwedo">
        <section className="wholetxt">
          <p className="innetext">WHAT WE DO</p>
          <p className="innetext2">Delivering for Our Clients</p>
        </section>

        <section className="forbackrgounpics">
          <div className="box-1background">
            <img src="/trading-desk.webp" className="dexk-1" alt="trading desk" />
            <div className="fortxt1">
              <h4>Global Banking & Markets</h4>
              <p>
                Finance is the art of managing money wisely to grow wealth
                and reduce risk. It helps individuals and businesses plan
                for the future through smart investing and budgeting.
              </p>
            </div>
          </div>

          <div className="box-2background">
            {/* Fixed the direct URL for cleaner code */}
            <img
              src="/360_F_426607986_cSvQ1iGMFTSWu3Jmc38c2riYSZxq91Gb.jpg"
              className="dexk-1"
              alt="energy trading"
            />
            <div className="fortxt1">
              <h4>Asset & Wealth Management</h4>
              <p>
                Assets are valuable resources owned by individuals or
                businesses that help generate income or long-term value.
                Examples include cash, property and investments.
              </p>
            </div>
          </div>

          <div className="box-3background">
            <img
              src="/d4d12967-0001-0004-0000-000000815959_w1200_r1.33_fpx37.5_fpy50.jpg"
              className="dexk-1"
              alt="platform"
            />
            <div className="fortxt1">
              <h4>Platform Solutions</h4>
              <p>
                Customer service is about understanding client needs and
                providing timely support. Great service builds trust,
                loyalty and long-term relationships.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CAREERS */}
      <div className="careerpage">
        <div className="undertxt">
          <h4 className="carr">CAREERS</h4>
          <p className="intxt">Where the Best Gets Better</p>
        </div>
        <div className="anothertxt">
          <p>
            Our apprenticeship culture accelerates careers through exposure
            to experienced leaders and real challenges in global finance.
          </p>
        </div>
      </div>

      {/* IMAGES */}
      <div className="forpics">
        <section className="widthpic">
          <img
            src="/paroles_experts_salle_marches_1700037714.png"
            className="bigpic"
            alt="trading floor"
          />
        </section>

        <section className="tall2pics">
          <img
            src="/stock-traiding-trader-sitting-at-office-wearing-headset-doing-online-trading-training-monitoring-candlestick-price-chart-concentrated-2CD1CEB.jpg"
            className="twinpics"
            alt="trader"
          />
          <img
            src="/RVS_Handelsraum.jpg"
            className="twinpics"
            alt="trading room"
          />
        </section>
      </div>

      {/* CONTACT PANEL */}
      <div className="contpanel">
        <p>
          KevTrading helps investors access hedge fund style strategies.
          Hedge funds use a wide range of investment approaches across
          markets. Professional fund managers oversee investments using
          research-driven insights and strong risk management.
        </p>
        <h4 className="con">Contact Us</h4>
      </div>

    </div>
  );
};

export default Home;