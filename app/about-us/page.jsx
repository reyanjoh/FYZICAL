import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeaderCTA from '@/components/HeaderCTA'

import styles from './about.page.module.css'



function page() {
  return (
    <div>
        <Header /> 
        <HeaderCTA />
        <main className={styles.main}>
          <section>
              <h2 className={styles.aboutHeader}>
                ABOUT FYZICAL
              </h2>
            <div className="width">
              <div className={styles.about3}>
                <div>
                  <h3>
                    FYZICAL IS DIFFERENT
                  </h3>
                  <p>
                    We are much more than your typical physical therapy clinic. At FYZICAL Therapy & Balance Centers, we focus on improving your quality of life by using a holistic, whole-body approach to connect your diagnosis with a customized plan of care.
                  </p>
                </div>
                <div>
                  <h3>
                    EVIDENCE BASED PHYSICAL THERAPY
                  </h3>
                  <p>
                    FYZICAL Therapy & Balance Centers of Chicagoland is an outpatient physical therapy organization. Our broad range of expertise encompasses a personalized and specialized approach for the members of our community. Come visit us at one of our 18, and counting, locations.
                  </p>
                </div>
                <div>
                  <h3>
                    EXPERT Clinicians
                  </h3>
                  <p>
                    Our clinicians are experts in the treatment of vestibular, balance, and orthopedic injuries, including worker`s compensation care, work conditioning, and FCE`s, striving to drive a positive patient experience. Each of our clinics are locally owned and managed to deliver consistent clinical outcomes.
                  </p>
                </div>

              </div>
            </div>
          </section>

          <section className={`${styles.missionVission}`}>
            <div className={styles.bluebg}>
              <div className={`${styles.grid2} center-all width `}>
                <div className={styles.left}>

                  <h3>
                    Our Mission
                  </h3>
                  <p>
                    Every day, we empower individuals to take control of their recovery and wellness through direct access to physical therapy, balance protocols, and healthy lifestyle products and services.
                  </p>

                  <h3>
                    Our Vision
                  </h3>
                  <p>
                    To be the most trusted and accessible therapy provider of choice to the physicians, people, and communities we serve.
                  </p>

                </div>
                <div className={styles.right}>
                  <img src="https://fyzicalchicago.com/wp-content/uploads/2023/05/fyzical-chicago-garfield-ridge-team-1200x800.jpg" alt="" />
                </div>


              </div>
            </div>
          </section>

          <section className={styles.howWeDiffer}>
            <div className="width">
              <div className={styles.grid2}>
                <div>
                  <h4>
                  HOW WE DIFFER
                  </h4>
                  <ul className={styles.ul}>
                    <li>
                      Leaders in orthopedics, vestibular rehabilitation, balance, and fall prevention utilizing cutting-edge technology to assess and treat our patients
                    </li>
                    <li>
                      Develop a therapy program and plan of care that is personalized and specifically designed to suit your individual unique needs and abilities
                    </li>
                    <li>
                      Provide a highly professional and friendly environment that is conducive to the optimum healing of body, mind, and spirit
                    </li>
                    <li>
                      Utilize a hands-on approach that is proven to help relieve pain and enhance mobility
                    </li>
                    <li>
                      We conduct systemized training programs for all our team members to ensure a consistent experience is met across all facilities
                    </li>
                  </ul>
                </div>
                <div>

                </div>
              </div>
            </div>
          </section>

          <section className={styles.ourImpaceSection}>
              <h2 className={styles.impactHeader}>
                OUR IMPACT
              </h2>

            <div className={`${styles.ourImpace}`}>
              <div className="width">
                <div>
                  <img src="https://fyzicalchicago.com/wp-content/uploads/2020/09/fyzman-fyzical-pbc.png" alt="" />
                  <p>#1 Physical Therapy Franchise (four years in a row) - Entrepreneur Magazine</p>
                </div>
                <div>
                  <img src="https://fyzicalchicago.com/wp-content/uploads/2020/09/fyzman-fyzical-pbc.png" alt="" />
                  <p>
                  Ranked among the Top 5 Physical Therapy Centers in all of IL (four years in a row)
                  </p>
                </div>
                <div>
                  <img src="https://fyzicalchicago.com/wp-content/uploads/2020/09/fyzman-fyzical-pbc.png" alt="" />
                  <p>
                  Fastest Growing Franchise in Healthcare. Growth rate of 220%
                  </p>
                </div>
                <div>
                  <img src="https://fyzicalchicago.com/wp-content/uploads/2020/09/fyzman-fyzical-pbc.png" alt="" />
                  <p>
                  Helped over 90,937 patients by the end of 2023
                  </p>
                </div>
                <div>
                  <img src="https://fyzicalchicago.com/wp-content/uploads/2020/09/fyzman-fyzical-pbc.png" alt="" />
                  <p>
                  Therapists that are fluent in 10 languages including English, Spanish, Polish, Tagalog, Korean, Romanian, Ukrainian, Russian, German, and Greek
                  </p>
                </div>
                <div>
                  <img src="https://fyzicalchicago.com/wp-content/uploads/2020/09/fyzman-fyzical-pbc.png" alt="" />
                  <p>
                  850 5 Star Reviews from happy and healthy patients 
                  </p>
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