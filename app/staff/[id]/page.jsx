// import Footer from "@/components/Footer"
// import Header from "@/components/Header"
// import HeaderCTA from "@/components/HeaderCTA"

// import styles from "./staff.page.module.css"




// const getTeam = async (id) =>{
//     const res = await fetch(`http://localhost:4000/team/${id}`)
//     return res.json()
//   }
  
  

// async function page({params}) {
  
//   const team = await getTeam(params.id)


//   return (

    
//     <div>
//     <Header /> 
//     <HeaderCTA />
//     <main>
//     <div className={styles.staffHeader}>
//       <div className="width">
//         <h1>{team.name}</h1>
//       </div>
//     </div>

//     <section>
//     <div className={`${styles.teamInfo} width`}>
//       <div className={styles.teamInfoBasicInfoContainer}>
//         <div className={styles.teamProfileContainer}>
//           <img className={styles.teamProfile} src={team.profile} alt="" />
//         </div>
//         <div className={`${styles.teambasicInfo}`}>

//           <h2>{team.name}</h2>
//           <h2>{team.position}</h2>
//           <p>{team.branchLocation}</p>

//         </div>
//       </div>
//       <div className={styles.moreInfo}>

//         <p>
//         {team.bio}
//         </p>
        

//         {team.funFacts ? 
//         <>
//           <h5 className={styles.span}>Fun Facts</h5>        

//           <ol>
//             {(()=>{
//               const fact =[]
//               for (let index = 0; index < team.funFacts.length; index++) {
//                 fact.push(
//                   <li key={index}>{team.funFacts[index]}</li>
//                 )
//               }
//               return fact
//             })()}
//           </ol> 
//         </>: ''}

       

//         {team.education ? 
//         <>
//           <h5 className={styles.span}>Education</h5>        


//           <ol key='education'>  
//             {(()=>{
//               const education =[]
//               for (let index = 0; index < team.education.length; index++) {
//                 education.push(
//                   <li key={index}>{team.education[index]}</li>
//                 )
                
//               }
//               return education
//             })()}
//           </ol>
//         </> : ''}

        
        

//       </div>
//     </div>
//     </section>

//     </main>
//     <Footer />

        
//     </div>
//   )
// }

// export default page