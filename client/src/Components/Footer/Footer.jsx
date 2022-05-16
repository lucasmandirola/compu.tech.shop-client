import React from 'react'
import styles from './Footer.module.css'
import {Link} from 'react-router-dom'
import Help from './Help/Help'
import FAQ from './FAQ'
import FAQ2 from './FAQ2'
import WorkWithUs from './WorkWithUs'
import About from './About'

function Footer() {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  
  
  
  return (
    <div className={styles.footerSuperContainer}>
    <div className={styles.footerContainer}>
      
        <div className={styles.footer}>
          <div className={styles.copyrightFooter}>
            <p> Copyright © 2022 CompuTechStore S.R.L.</p>
            <p>Av. Siempre Viva 123, Piso 5, CP 1234, Argentina</p>
          </div>
          <div>
            {/* <li onClick={() => <FAQ2/>}>
                <button>FAQ2</button>
            </li> */}
          </div>
          <div className={styles.extrasFooter}>
           <div><Help className={styles.help} /></div>
           <Link to='/FAQ'>
            <p>FAQ's</p>
            </Link>
            <Link to='/WorkWithUs'> 
            <p>Work with us</p>
            </Link>
            <Link to='/About'>
            <p>About</p>
            </Link>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/nolan/64/instagram-new.png" alt="socialLogo"/>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/nolan/64/facebook-new.png" alt="socialLogo"/> 
            </a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer