import Header from '@/components/Header';
import React from 'react'
import styles from "./services.page.module.css";
import Footer from '@/components/Footer';
import HeaderCTA from '@/components/HeaderCTA';



function page() {
  return (
    <div>
      <Header />
      <HeaderCTA />

        <main>
            <section className={`${styles.hero} ${styles.padding}`}>
                <div className={`width ${styles.heroContent}`}>
                <h1 className={styles.h1}>FYZICAL THERAPY & BALANCE CENTERS HOUSTON</h1>
                    <div className={styles.heroLinksWithImgs}>
                    <div className={styles.heroLeft}>
                        <div className={styles.heroCTA}>
                        <span>TATE OF THE ART CLINICS</span>
                        <a href="">LOCATIONS</a>
                    </div>
                    </div>
                        <div className={styles.heroRight}>
                            <a href="#" className={styles.heroNav}>
                                <img src="https://fyzicalchicago.com/wp-content/uploads/2022/01/about-fyzical-chicago-2.jpg"/>

                            </a>
                            <a href="#" className={styles.heroNav}>
                                <img src="https://fyzicalchicago.com/wp-content/uploads/2022/01/fyzical-chicago-blog.jpg"/>

                            </a>
                            <a href="#" className={styles.heroNav}>
                                <img src="https://fyzicalchicago.com/wp-content/uploads/2022/01/fyzical-chicago-new-centers.jpg"/>

                            </a>
                            <a href="#" className={styles.heroNav}>
                                <img src="https://fyzicalchicago.com/wp-content/uploads/2022/09/fyzical-chicago-schaumburg-pt-1200x800.jpg"/>
                                dqwdq

                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default page