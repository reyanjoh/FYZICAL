import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={`${styles.main}`}>
        
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

       <section className={styles.services}>
        <div className={`width ${styles.servicesCards}`}>

          <a href="#" className={`${styles.servicesCard} shadow-hover`}>
            <div className={styles.servicesCardHeader}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2021/08/fyzical-chicagoland-balance-vestibular.png"/>
              <h4>Balance therapy</h4>
            </div>
            <div className={styles.servicesCardBody}>
              <p>
                Does your balance or fear of falling strain your everyday life? At FYZICAL we will help you master the tools to live a well-balanced life.
              </p>
            </div>
          </a>
          <a href="#" className={`${styles.servicesCard} shadow-hover`}>
            <div className={styles.servicesCardHeader}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2021/08/fyzical-chicagoland-orthopedic.png"/>
              <h4>orthopedic therapy</h4>
            </div>
            <div className={styles.servicesCardBody}>
              <p>
                Do you hurt? Is your motion limited? Learn how our trained professionals can help you conquer your pain, restore your motion, increase your strength, and regain your active lifestyle.
              </p>
            </div>
          </a>
          <a href="#" className={`${styles.servicesCard} shadow-hover`}>
            <div className={styles.servicesCardHeader}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2021/09/fyzical-chicagoland-advanced-balance.png"/>
              <h4>advanced Technologies</h4>
            </div>
            <div className={styles.servicesCardBody}>
              <p>
                Unlike other physical therapy companies, FYZICAL offers cutting-edge technologies to assess, treat, and help you get better faster!
              </p>
            </div>
          </a>
          <a href="#" className={`${styles.servicesCard} shadow-hover`}>
            <div className={styles.servicesCardHeader}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2021/09/fyzical-chicagoland-workers-comp.png"/>
              <h4>workers compensation</h4>
            </div>
            <div className={styles.servicesCardBody}>
              <p>
                Were you or someone you know injured on the job? Our experts will guide your care and help you get back on the job.
              </p>
            </div>
          </a>
          <a href="#" className={`${styles.servicesCard} shadow-hover`}>
            <div className={styles.servicesCardHeader}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2021/08/fyzical-chicagoland-aquatics.png"/>
              <h4>aquatic therapy</h4>
            </div>
            <div className={styles.servicesCardBody}>
              <p>
                Jump in to see how aquatic therapy is an effective, safe, and trustworthy environment for strength and rehabilitation.
              </p>
            </div>
          </a>
          <a href="#" className={`${styles.servicesCard} shadow-hover`}>
            <div className={styles.servicesCardHeader}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2021/08/fyzical-chicagoland-aquatics.png"/>
              <h4>aquatic therapy</h4>
            </div>
            <div className={styles.servicesCardBody}>
              <p>
                Jump in to see how aquatic therapy is an effective, safe, and trustworthy environment for strength and rehabilitation.
              </p>
            </div>
          </a>
          <a href="#" className={`${styles.servicesCard} shadow-hover`}>
            <div className={styles.servicesCardHeader}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2021/08/fyzical-chicagoland-aquatics.png"/>
              <h4>aquatic therapy</h4>
            </div>
            <div className={styles.servicesCardBody}>
              <p>
                Jump in to see how aquatic therapy is an effective, safe, and trustworthy environment for strength and rehabilitation.
              </p>
            </div>
          </a>
          <a href="#" className={`${styles.servicesCard} shadow-hover`}>
            <div className={styles.servicesCardHeader}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2021/08/fyzical-chicagoland-aquatics.png"/>
              <h4>aquatic therapy</h4>
            </div>
            <div className={styles.servicesCardBody}>
              <p>
                Jump in to see how aquatic therapy is an effective, safe, and trustworthy environment for strength and rehabilitation.
              </p>
            </div>
          </a>
          
        </div>
        
       </section>
       <section className={styles.appointment}>
        <div>
            <div className={`${styles.appointmentContainer} shadow`}>
              <h3>
                LOVE YOUR LIFE
              </h3>

              <p>
                “Physical therapy creates healthy bodies for better living, it is the embodiment of both wellness and preventative care. The window for innovation in the next twenty years in healthcare is going to be truly transformative.”
              </p>
              <span>
              - Bill Capraro, Founder
              </span>
              <a className="button button-rounded" href="#">schedule appointment</a>
            </div>
        </div>
        <div>
          
        </div>

       </section>

       <section className={styles.reviews}>
        <div className={styles.reviewsContainer}>
          <div className={`${styles.reviewsCard} shadow-small shadow-hover`}>
            <div className={styles.imgContainer}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2020/09/fyzman-fyzical-pbc.png"/>
            </div>

            <p>
              I am amazed on how different this clinic is from all the other clinics I have been to (Athletico and ATI) they offer one    on one care for the full treatment session you are there; they have aquatic therapy! Can`t find that anywhere else in the area!! They also help me with my balance when they used this device that hooks up to the ceiling and will not let you fall if you stumble, I felt safe and secure using this equipment and always having the therapist on my side. Will recommend this facility to all my family and friends.
            </p>

            <p className={styles.reviewAuthor}>
            <span>Roger S</span> / Garfield Ridge
            </p>
          </div>

          <div className={`${styles.reviewsCard} shadow-small shadow-hover`}>
            <div className={styles.imgContainer}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2020/09/fyzman-fyzical-pbc.png"/>
            </div>

            <p>
              Justin Young is a terrific physical therapist. He is both professional and personable. After our introductory meeting Justin identified the causes of my leg and knee pain and created a treatment plan that we followed for two months. He explained the exercises that we did together and prescribed at home routines. After completion of my therapeutic treatment plan, I experienced little or no pain and I am able to engage in vigorous hiking and biking. Thank you, Justin!
            </p>

            <p className={styles.reviewAuthor}>
            <span>Tom F</span> /  Lincoln Park
            </p>
          </div>

          <div className={`${styles.reviewsCard} shadow-small shadow-hover`}>
            <div className={styles.imgContainer}>
              <img src="https://fyzicalchicago.com/wp-content/uploads/2020/09/fyzman-fyzical-pbc.png"/>
            </div>

            <p>
              As someone who has navigated the maze of rehabilitation centers, FYZICAL Therapy & Balance Centers stands out as a beacon of professionalism fused with a welcoming atmosphere. From the outset, it was clear that this wasn`t just a clinic; it was a place where expertise and friendliness converged seamlessly. If you`re seeking a professional yet personable environment for your rehabilitation journey, look no further. FYZICAL Therapy & Balance Centers has set the bar high, proving that exceptional care and a friendly demeanor can coexist seamlessly in the world of physical therapy.
            </p>

            <p className={styles.reviewAuthor}>
            <span>Allan B</span> / Garfield Ridge
            </p>
          </div>

        </div>
       
       </section>
      </main>

      <Footer />
      
    </div>
  );
}
