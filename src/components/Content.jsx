import './Content.css';
import React, { useState } from "react";
import imgMobile from '../assets/images/image-hero-mobile.png'
import img1 from '../assets/images/client-databiz.svg'
import img2 from '../assets/images/client-audiophile.svg'
import img3 from '../assets/images/client-meet.svg'
import img4 from '../assets/images/client-maker.svg'

export default props => {
    return (
        <div className="content">
            <section className='imgMobile'>
                <img src={imgMobile} alt="Imagem Mobile" />
            </section>
            <div className="text-content">
                <section className='text'>
                    <h1>
                        <span>Make</span>
                        <span>remote work</span>
                    </h1>
                    <p>
                        Get your team in sync, no matter your location. Streamline processes, create team
                        rituals, and watch productivity soar.
                    </p>
                </section>
                <button className='button'>Learn More</button>
                <section className='itens'>
                    <section>
                        <img src={img1} alt="" />
                    </section>
                    <section>
                        <img src={img2} alt="" />
                    </section>
                    <section>
                        <img src={img3} alt="" />
                    </section>
                    <section>
                        <img src={img4} alt="" />
                    </section>
                </section>
            </div>
            <section className='imgDesktop'>
                {/* Imagem Desktop */}
            </section>
        </div>
    )
}