// import Footer from '@/components/Footer'
// import Header from '@/components/Header'
// import HeaderCTA from '@/components/HeaderCTA'
// import React from 'react'
// import styles from './staff.page.module.css'
// // import { usePathname } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'

// const getTeam = async () =>{
//   const res = await fetch('http://localhost:4000/team')
//   return res.json()

  
// }


// async function page() {

// const team = await getTeam()


//   // const team =  getTeam();

//   return (

  

//     <div>
//         <Header /> 
//         <HeaderCTA />
//         <main>
//           <section>
//             <h2 className={styles.impactHeader}>
//             FYZICAL THERAPY & BALANCE CENTERS TEAM
//             </h2>

//             <div className={`${styles.staffHeader} width`}>
//               <p>
//               Let us introduce you to Chicagoland`s premier physical therapy providers! Our team has redefined what you should truly expect for your care. Utilizing a personalized and specialized approach, FYZICAL partners with exceptionally skilled clinicians to help you get back to Loving Your Life.
//               </p>
//               <p>
//               We utilize advanced technologies and education to not only resolve your limitations but to ensure we correct the root cause of your problems. Our goal is to empower you to take back control of your life and remain healthy!
//               </p>

//             </div>
//           </section>

//           <section>
//             <div className='width'>
//               <div className='grid-3-col'>
//                 {team.map(team =>{

//                   // console.log(team.id);
                  
//                   return(
                    
//                     <Link href={`/staff/${team.id}`} className={styles.teamProfileCard} key={team}>
//                       <div className={styles.teamProfile}>
//                         <img src={team.profile} alt="" />
//                         {/* <Image height={16} width={9} src={team.profile} alt="" srcset="" /> */}
//                       </div>
//                       <div className={styles.teamInfo}>
//                       {team.name}
//                       </div>
//                     </Link>
                    
//                   )
//                 })}

//               </div>
//             </div>


//           </section>
//         </main>
//         <Footer />
//     </div>
//   )
// }

// export default page