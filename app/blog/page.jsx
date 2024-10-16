import styles from "./blog.page.module.css";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeaderCTA from "@/components/HeaderCTA";
import React from 'react'


function page() {
  return (
    <div>
        <Header /> 
        <HeaderCTA />
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={`${styles.heroContent} width`}>
                    <div className={styles.left}>
                      <a href="/blog/blogg" className={styles.heroCard}>
                        <div className={styles.heroCardCover}>
                          <img src="https://img.freepik.com/free-photo/patient-doing-physical-rehabilitation-helped-by-therapists_23-2149227880.jpg?w=740&t=st=1727817406~exp=1727818006~hmac=c375f7c9ea12ce0bdeacd3bedfd4e7a9e68b88d074110e4952e043ec0ecd973d" alt="" />

                        </div>
                        <div className={styles.heroCardContent}>
                          
                          <span>
                            Author • 20 Jan 2024
                          </span>

                          <h3>
                            Conversations with Fyzical Therapist
                          </h3>

                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium aut non adipisci nostrum, animi reiciendis sint minus. Laudantium, voluptates?
                          </p>
                        </div>
                      </a>

                    </div>
                    <div className={styles.right}>
                     
                    
                        <a href="#" className={styles.heroRightCard}>
                          <div className={styles.heroRightCardCover}>
                            <img src="https://img.freepik.com/free-photo/patient-doing-physical-rehabilitation-helped-by-therapists_23-2149227880.jpg?w=740&t=st=1727817406~exp=1727818006~hmac=c375f7c9ea12ce0bdeacd3bedfd4e7a9e68b88d074110e4952e043ec0ecd973d" alt="" />

                          </div>
                          <div className={styles.heroRightCardContent}>
                            
                            <span>
                              Author • 20 Jan 2024
                            </span>

                            <h3>
                              Conversations with Fyzical Therapist
                            </h3>

                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium aut non adipisci nostrum, animi reiciendis sint minus. Laudantium, voluptates?
                            </p>
                          </div>
                        </a>
                        <a href="#" className={styles.heroRightCard}>
                          <div className={styles.heroRightCardCover}>
                            <img src="https://img.freepik.com/free-vector/flat-design-autumn-leaves-collection_23-2148248691.jpg?t=st=1727823056~exp=1727826656~hmac=def463dd518193fc374cd6a3550b130dee165d35a2aaf2c03718cc91e6875157&w=740" alt="" />

                          </div>
                          <div className={styles.heroRightCardContent}>
                            
                            <span>
                              Author • 20 Jan 2024
                            </span>

                            <h3>
                              Conversations with Fyzical Therapist
                            </h3>

                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium aut non adipisci nostrum, animi reiciendis sint minus. Laudantium, voluptates?
                            </p>
                          </div>
                        </a>
                        <a href="#" className={styles.heroRightCard}>
                          <div className={styles.heroRightCardCover}>
                            <img src="https://img.freepik.com/free-photo/patient-doing-physical-rehabilitation-helped-by-therapists_23-2149227880.jpg?w=740&t=st=1727817406~exp=1727818006~hmac=c375f7c9ea12ce0bdeacd3bedfd4e7a9e68b88d074110e4952e043ec0ecd973d" alt="" />

                          </div>
                          <div className={styles.heroRightCardContent}>
                            
                            <span>
                              Author • 20 Jan 2024
                            </span>

                            <h3>
                              Conversations with Fyzical Therapist
                            </h3>

                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium aut non adipisci nostrum, animi reiciendis sint minus. Laudantium, voluptates?
                            </p>
                          </div>
                        </a>
                    </div>
                </div>
                <div className={`${styles.allBlogs} width`}>
                  {(() => {

                    const blogs = [];
                    for (let i = 0; i < 10; i++) {

                      blogs.push(

                        <a href="/blog/blogg" className={`${styles.allBlogsCard}`}>
                          <div className={styles.allBlogsCardCover}>
                            <img src="https://img.freepik.com/free-photo/patient-doing-physical-rehabilitation-helped-by-therapists_23-2149227880.jpg?w=740&t=st=1727817406~exp=1727818006~hmac=c375f7c9ea12ce0bdeacd3bedfd4e7a9e68b88d074110e4952e043ec0ecd973d" alt="" />

                          </div>
                          <div className={styles.allBlogsCardContent}>
                            
                            <span>
                              Author • 20 Jan 2024
                            </span>

                            <h3>
                              Conversations with Fyzical Therapist
                            </h3>

                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium aut non adipisci nostrum, animi reiciendis sint minus. Laudantium, voluptates?
                            </p>
                          </div>
                        </a>
                      )
                      
                    }
                    return blogs
                  })()}
                  
                        

              </div>
            </section>

            {/* <section className={styles.allBlogsSection}>
              
            </section> */}


        </main>
        <Footer />
    </div>
  )
}

export default page