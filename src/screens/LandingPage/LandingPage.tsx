import React from 'react'
import { Link } from 'react-router-dom';


import classes from './LandingPage.module.css'
import flow from '../../asset/img/flow.svg'
import listen from '../../asset/img/listen.png'
import searchPhone from '../../asset/img/SearchPhone.png'
import Offline from '../../asset/img/Offline.png'
import Hq from '../../asset/img/HQ.png'
import Noads from '../../asset/img/NoADS.png'
import UmlimitedSkips from '../../asset/img/UnlimSkips.png'
import mark from '../../asset/img/mark.svg';
import markwhite from '../../asset/img/markwhite.svg';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
    return (
     <div className={classes.Wrapper}>
      <div className={classes.Layout1}>
       <div className={classes.Layout1_Content}>
        <h3 className={classes.WelcomeText}>
         Open the world of music. <br /> It's all here.{" "}
        </h3>
        <div className={classes.ButtonWrapper}>
         <a className={classes.Anchor} href="#music-offer">
          <button className={classes.Button}>MUSICBOX FREE</button>
         </a>
         <a className={classes.Anchor} href="#music-offer">
          <button className={classes.ButtonPremium}>MUSICBOX PREMIUM</button>
         </a>
        </div>
        <p className={classes.Subscription}>
         1 month free trial{" "}
         <span style={{ color: "#2DCEEF", fontStyle: "bold" }}>$7.99</span>
         /month after
        </p>
       </div>
      </div>

      <div className={classes.Layout2}>
       <div className={classes.Layout2_Section2}>
        <image className={classes.Image}></image>
        <div className={classes.Sub}>
         <div className={classes.Section2_Flow}>
          <img className={classes.Flow_Svg} src={flow} alt="flow icon" />
          <h2 className={classes.Flow}>FLOW</h2>
         </div>
         <p className={classes.Section2_P}>
          Listen to a personalized mix of tracks based on your listening
          history, or create your own mix of genres, artists and playlists -
          letting you enjoy more of the music you love.
         </p>
        </div>
       </div>
      </div>
      <div className={classes.Section3_Wrapper}>
       {/* <img className={classes.Section3_Image} src={listen} alt='listen anytime, anywhere' /> */}
       <div className={classes.Section3_Text}>
        <h3 className={classes.Section3_Text1}>Listen anytime, anywhere</h3>
        <p className={classes.Section3_Text2}>
         All your favorite songs and episodes are always available, even without
         WIFI or LTE
        </p>
       </div>
      </div>
      <div className={classes.Section4_Wrapper}>
       <img
        className={classes.Section4_Image}
        src={searchPhone}
        alt="listen anytime, anywhere"
       />
       <div className={classes.Section4_Text}>
        <h3 className={classes.Section4_Text1}>Find the music you want</h3>
        <p className={classes.Section4_Text2}>
         Search for your favorite songs using the description, or turn on the{" "}
         <span style={{ color: "#2DCEEF", fontStyle: "bold" }}>
          MusicFinder
         </span>{" "}
         feature to find the song that is playing near you.
        </p>
       </div>
      </div>

      <div className={classes.Section5_Wrapper}>
       <div className={classes.Section5_Subwrapper}>
        <h2 className={classes.Section5_Mtext}>Why go Premium?</h2>
        <div className={classes.Section5_Category}>
         <div className={classes.Section5_Category1}>
          <img
           className={classes.Category1_Image}
           src={Offline}
           alt="offline mode"
          />
          <div className={classes.Category1_Text}>
           <h3 className={classes.Category1_Text1}>Offline mode.</h3>
           <p className={classes.Category1_Text2}>Save and listen anywhere.</p>
          </div>
         </div>

         <div className={classes.Section5_Category2}>
          <img
           className={classes.Category2_Image}
           src={Hq}
           alt="High Quality Audio"
          />
          <div className={classes.Category2_Text}>
           <h3 className={classes.Category2_Text1}>High Quality Audio.</h3>
           <p className={classes.Category2_Text2}>
            Enjoy the full range of sound.
           </p>
          </div>
         </div>
         <div className={classes.Section5_Category3}>
          <img className={classes.Category3_Image} src={Noads} alt="no ads" />
          <div className={classes.Category3_Text}>
           <h3 className={classes.Category3_Text1}>No ads.</h3>
           <p className={classes.Category3_Text2}>Enjoy nonstop music.</p>
          </div>
         </div>
         <div className={classes.Section5_Category4}>
          <img
           className={classes.Category4_Image}
           src={UmlimitedSkips}
           alt="ulimited skips"
          />
          <div className={classes.Category4_Text}>
           <h3 className={classes.Category4_Text1}>Umlimited Skips.</h3>
           <p className={classes.Category4_Text2}>Just tap skip.</p>
          </div>
         </div>
        </div>
        <div className={classes.Section_CentralWrapper}>
         <div className={classes.Section_Group1}>
          <div className={classes.Section5_SubSectionWrapper}>
           <div className={classes.Section5_SubSection}>
            <div className={classes.Section5_Content}>
             <h2 className={classes.Section5_BoxPremium}>MusicBox Premium</h2>
             <p className={classes.Section5_BoxPremiumPrice}>
              <span
               style={{
                color: "#2DCEEF",
                fontSize: "24px",
                fontStyle: "bold",
                letterSpacing: "0.24px",
               }}
              >
               $7.99
              </span>
              /month
             </p>
             <p className={classes.Section5_BoxPremiumFree}>
              Start with 1-month free trial*
             </p>
             <div className={classes.Section_ContentOptions}>
              <img
               className={classes.Section_ContentOptionsImage}
               src={mark}
               alt="mark"
              />
              <p className={classes.Section_ContentOptionsText}>Offline mood</p>
             </div>
             <div className={classes.Section_ContentOptions}>
              <img
               className={classes.Section_ContentOptionsImage}
               src={mark}
               alt="mark"
              />
              <p className={classes.Section_ContentOptionsText}>
               High quality audio
              </p>
             </div>
             <div className={classes.Section_ContentOptions}>
              <img
               className={classes.Section_ContentOptionsImage}
               src={mark}
               alt="mark"
              />
              <p className={classes.Section_ContentOptionsText}>No ads</p>
             </div>
             <div className={classes.Section_ContentOptions}>
              <img
               className={classes.Section_ContentOptionsImage}
               src={mark}
               alt="mark"
              />
              <p className={classes.Section_ContentOptionsText}>
               Unlimited skips
              </p>
             </div>
            </div>
           </div>
          </div>
          <button className={classes.SectionButtonPremium}>
           MUSICBOX PREMIUM
          </button>
         </div>
         <div className={classes.Section_Group2}>
          <div className={classes.Section5_SubSectionWrapperWhite}>
           <div className={classes.Section5_SubSectionWhite}>
            <div id="music-offer" className={classes.Section5_Content}>
             <h2 className={classes.Section5_BoxPremium}>MusicBox Free</h2>
             <p className={classes.Section5_BoxPremiumPrice}>
              <span
               style={{
                color: "#fff",
                fontSize: "24px",
                fontStyle: "bold",
                letterSpacing: "0.24px",
               }}
              >
               $0.00
              </span>
              /month
             </p>
             <p className={classes.Section5_BoxPremiumFree}>
              Start with 1-month free trial*
             </p>
             <div className={classes.Section_ContentOptions}>
              <img
               className={classes.Section_ContentOptionsImage}
               src={markwhite}
               alt="mark"
              />
              <p className={classes.Section_ContentOptionsText}>
               Online listening
              </p>
             </div>
             <div className={classes.Section_ContentOptions}>
              <img
               className={classes.Section_ContentOptionsImage}
               src={markwhite}
               alt="mark"
              />
              <p className={classes.Section_ContentOptionsText}>
               Regular radio
              </p>
             </div>
             <div className={classes.Section_ContentOptions}>
              <img
               className={classes.Section_ContentOptionsImage}
               src={markwhite}
               alt="mark"
              />
              <p className={classes.Section_ContentOptionsText}>
               With Advertisement
              </p>
             </div>
             <div className={classes.Section_ContentOptions}>
              <img
               className={classes.Section_ContentOptionsImage}
               src={markwhite}
               alt="mark"
              />
              <p className={classes.Section_ContentOptionsText}>
               30 skips per day
              </p>
             </div>
            </div>
           </div>
          </div>
          <button className={classes.SectionButtonWhite}>
           MUSICBOX PREMIUM
          </button>
         </div>
        </div>
       </div>
      </div>
      <Footer />
     </div>
    );
}

export default LandingPage
