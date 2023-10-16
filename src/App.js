import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import usa from "./images/united-states.png";
import frame from "./images/frame.png";
import romania from "./images/romania.png";
import apple from "./images/appleStore.png";
import fotostali from "./images/fotostali.jpeg";
import google from "./images/GooglePlaystore.png";
import person from "./images/presentations/PERSON.jpg";
import botez from "./images/presentations/BOTEZ.jpg";
import daca from "./images/presentations/DACA_NU_MERGE_ASTA_CA_II_CAM_MICA_BAG-O_PE_AIA.jpg";
import fashion from "./images/presentations/FASHION.jpg";
import food from "./images/presentations/FOOD.jpg";
import portret from "./images/presentations/PORTRET.jpg";
import produs from "./images/presentations/PRODUS.jpg";
import studio from "./images/presentations/STUDIO.jpg";
import wedding from "./images/presentations/WEDDING.jpg";
import newoborn from "./images/presentations/NEWOBORN.jpg";

import backvideo from "./images/backvideo.mp4";

import Modal from "@material-ui/core/Modal";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LeftArrow from "@mui/icons-material/KeyboardArrowLeft";
import RightArrow from "@mui/icons-material/KeyboardArrowRight";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const [open, setOpen] = useState(false);
  let [currVal, setCurrVal] = useState(1);
  let [selectedLang, setSelectedLang] = useState("English");
  const [scrollY, setScrollY] = useState(0);

  const [inputText, setInputText] =
    useState(`We are launching an essential project for all those looking for a photographer.
  A platform where you will find the ideal photographer according to the category and your needs.
  For example, if you are a company specialized in car sales, here you will find several photographers specialized in cars.
  If you want a simple portrait session, you will find photographers at favorable prices who specialize in portrait photography.
  Weddings, Baptisms, Product photography and many other categories await you in this application.
  Available on Appstore and Googleplay.`);
  const [translation, setTranslation] = useState("");

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [email, setEmail] = useState("example@gmail.com");
  let source = [
    // add new item in category
    // import a image from images folder
    // add at particular index of array source
    {},
    {
      id: 1,
      src: newoborn,
      category: "New born",
    },
    {
      id: 2,
      src: botez,
      category: "Botez",
    },
    {
      id: 3,
      src: fashion,
      category: "Fashion",
    },
    {
      id: 4,
      src: food,
      category: "Food",
    },
    {
      id: 5,
      src: portret,
      category: "Portret",
    },
    {
      id: 6,
      src: produs,
      category: "Produs",
    },
    {
      id: 7,
      src: wedding,
      category: "Wedding",
    },
    {
      id: 8,
      src: studio,
      category: "Studio",
    },
    {
      id: 9,
      src: person,
      category: "Person",
    },
  ];

  useEffect(() => {
    const translateText = async () => {
      const sourceLang = "en"; // Source language (English)
      const targetLang = "ro"; // Target language (Romanian)

      try {
        // Split the input text into chunks of 500 characters
        const chunks = inputText.match(/.{1,500}/g);

        if (!chunks) {
          throw new Error("Input text is empty or too short.");
        }

        const translations = [];

        for (const chunk of chunks) {
          const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
              chunk
            )}&langpair=${sourceLang}|${targetLang}`,
            {
              method: "GET",
            }
          );

          if (!response.ok) {
            throw new Error("Translation failed");
          }

          const data = await response.json();
          translations.push(data.responseData.translatedText);
        }

        // Join the translated chunks back together
        setTranslation(translations.join(""));
      } catch (error) {
        console.error(error);
        setTranslation("Translation failed");
      }
    };

    translateText();
  });

  let handleClick = (e) => {
    toast("Coming soon");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const toggleLanguage = (e) => {
    if (e.target.value == "English") {
      i18n.changeLanguage("en");
      setCurrentLanguage("en");
    } else {
      i18n.changeLanguage("ro");
      setCurrentLanguage("ro");
    }
  };

  let handleLeftButton = () => {
    setCurrVal(currVal - 1);
  };

  let handleRightButton = () => {
    setCurrVal(currVal + 1);
  };

   useEffect(() => {
     const interval = setInterval(() => {
       setCurrVal((prevVal) => (prevVal + 1) % source.length);
     }, 3000); 

     return () => {
       clearInterval(interval);
     };
   }, [source]);


    const [isSection3Open, setIsSection3Open] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100 && !isSection3Open) {
          setIsSection3Open(true);
        } else if (window.scrollY <= 100 && isSection3Open) {
          setIsSection3Open(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isSection3Open]);

  return (
    <div className="page">
      <header className="head">
        <img className="floating" src={apple} onClick={handleClick} alt="" />
        {/* <div className='hspace'></div> */}
        <img
          className="fotostali-img"
          src={fotostali}
          onClick={handleClick}
          alt=""
        />

        <img className="floating" src={google} onClick={handleClick} alt="" />

        <div className="eng-rom-div">
          <select
            name="languages"
            className="headSelect"
            onChange={(e) => toggleLanguage(e)}
          >
            <option value={"English"}>EN</option>
            <option value={"Romanian"}>RO</option>
          </select>
        </div>
      </header>
      <div className="main">
        <section className="section1">
          <div className="video-container">
            <video src={backvideo} autoPlay muted loop></video>
          </div>

          <div className="mid-main-container">
            <div className="input container">
              <div className="title">{t("welcome")}</div>
              <div className="inputArea">{t("aim")}</div>
            </div>
          </div>
        </section>
      </div>
      <section className="section3">
        <div className="categories">
          <div className="containerBox">
            <div className="imageBox">
              <img src={source[currVal]["src"]} className="innerImage" alt="" />
            </div>

            <div className="bottomContainer">
              {currVal === 1 ? null : (
                <div className="left leftside" onClick={handleLeftButton}>
                  <div className="arrowAnim">
                    <div className="arrowSliding">
                      <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay1">
                      <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay2">
                      <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay3">
                      <div className="arrow"></div>
                    </div>
                  </div>
                </div>
              )}
              <div className="rspace"></div>
              <div className="currNumber number">
                {source[currVal]["category"]}
              </div>
              <div className="rspace"></div>
              {currVal === 9 ? null : (
                <div className="left" onClick={handleRightButton}>
                  <div id="arrowAnim">
                    <div className="arrowSlidingR">
                      <div className="arrowr"></div>
                    </div>
                    <div className="arrowSlidingR delay1">
                      <div className="arrowr"></div>
                    </div>
                    <div className="arrowSlidingR delay2">
                      <div className="arrowr"></div>
                    </div>
                    <div className="arrowSlidingR delay3">
                      <div className="arrowr"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="emailSpace">
            <span className="text">be up to date</span>
            <input className="inputEmail" value={email} placeholder={email} />
            <div className="btnlink">
              <button className="subscribe" type="button" onClick={handleOpen}>
                {t("subscribe")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="spaceBtwFooterAndMain"></div>

      <footer className="footer">
        <TelegramIcon className="telegram icons"></TelegramIcon>
        <div className="fspace"></div>
        <LinkedInIcon className="linkedin icons"></LinkedInIcon>
        <div className="fspace"></div>
        <FacebookIcon className="facebook icons"></FacebookIcon>
        <div className="fspace"></div>
        <InstagramIcon className="instagram icons"></InstagramIcon>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default App;
