import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiOutlineCloudServer} from 'react-icons/ai'
import {DiJava} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {SiPython} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {SiSolidity} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {ImHtmlFive} from 'react-icons/im'
import {FaHardHat} from 'react-icons/fa'
import {SiNodedotjs} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'


const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className = 'experience__details'>
                <FaReact className='experience_details-icon'/>
                <div>
                  <h4>React.js</h4>
                  <small className='text-light'>Proficient</small>
                </div>
              </article>
              <article className = 'experience__details'>
                <SiCss3 className='experience_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Proficient</small>
                </div>
              </article>
              <article className = 'experience__details'>
                <ImHtmlFive className='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Familliar</small>
                </div>
              </article>
            </div>
            <h3>Libraries & Tools</h3>
            <div className="experience__content">
              <article className = 'experience__details'>
                <FaHardHat className='experience_details-icon'/>
                <div>
                  <h4>Web3.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className = 'experience__details'>
                <SiNodedotjs className='experience_details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className = 'experience__details'>
                <AiOutlineConsoleSql className='experience_details-icon'/>
                <div>
                  <h4>JDBC & PL/SQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>

           {/* END OF FRONTEND  */}

          <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
              <article className = 'experience__details'>
                <DiJava className='experience_details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Proficient</small>
                </div>
              </article>
              <article className = 'experience__details'>
                <SiPython className='experience_details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Proficient</small>
                </div>
              </article>
              <article className = 'experience__details'>
                <SiCplusplus className='experience_details-icon'/>
                <div>
                  <h4>C / C++</h4>
                  <small className='text-light'>Proficient</small>
                </div>
              </article>
              <article className = 'experience__details'>
                <SiSolidity className='experience_details-icon'/>
                <div>
                  <h4>Solidity</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className = 'experience__details'>
                <SiPostgresql className='experience_details-icon'/>
                <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-light'>Proficient</small>
                </div>
              </article>
              <article className = 'experience__details'>
                <IoLogoJavascript className='experience_details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Familiar</small>
                </div>
              </article>
            </div>
          </div>
      </div>

    </section>
  )
}

export default experience