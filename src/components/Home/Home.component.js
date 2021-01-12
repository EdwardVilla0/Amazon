import React from 'react';
import Product from '../Product/Product.component';
import "./Home.styles.css";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                alt="amazon background"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

            <Product
                id="123456789"
                title="testing"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWQ0NzdiNzQt/MWQ0NzdiNzQt-NDFlZjdlZDIt-w379._SY304_CB412115001_.jpg" />
        </div>
    )
}

export default Home;
