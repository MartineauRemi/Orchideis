import React, {useState} from "react"
import './App.css';
import Menu from "./components/Menu"
import Cart from "./components/Cart"
import Footer from './components/Footer'
import Hero from "./components/Hero"
import ShoppingList from './components/ShoppingList'
import Map from "./components/Map"
import MenuProvider from "./contexts/MenuProvider"
import {FiTruck} from "react-icons/fi"
import {IoStorefrontOutline, IoLocationOutline} from "react-icons/io5"
import {HiOutlineCursorClick} from "react-icons/hi"
import {RiArrowUpSLine} from "react-icons/ri"
import {AiOutlineMail, AiOutlinePhone, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF, FaPinterestP} from "react-icons/fa"

import OpeningHoursTable from "./components/OpeningHoursTable";

function App() {
  const [cart, setCart] = useState([])
  const addItem = (item) => {
    var added = false
    cart.map((elt, index) => {
      if(elt.name === item){
        cart[index] = {name: item, quantity: cart[index].quantity + 1}
        added=true
      }
    })
    setCart(
      added ? 
        [...cart]
        : [...cart, {name: item, quantity: 1}])
  }

  const emptyCart = () => {setCart([])}
  return (
    <MenuProvider>
      <div className="App">
        <a className="btn btn--return-to-top" href="#"><RiArrowUpSLine className="icon--return-to-top"/></a>
        <Menu />
        <Hero />
        <section className="about-us">
          <div className="about-item">
            <FiTruck className="icon--about-item"/>
            <div className="about-item__description">
              <h3>Livraison</h3>
              <p>
                Choisissez vos plantes sur notre plateforme
                et recevez les directement chez vous.
              </p>
            </div>
          </div>
          <div className="about-item">
            <IoStorefrontOutline className="icon--about-item" />
            <div className="about-item__description">
              <h3>En boutique</h3>
              <p>
                Venez nous rendre visite.
                Notre équipe est là pour vous accueillir et vous conseiller au mieux.
              </p>
            </div>
          </div>
          <div className="about-item">
            <HiOutlineCursorClick className="icon--about-item"/>
            <div className="about-item__description">
              <h3>Click And Collect</h3>
              <p>
                Réservez vos plantes favorites de chez vous,
                et venez les chercher selon vos disponibilités.
              </p>
            </div>
          </div>
        </section>

        <div className="promotion-banner">
          <div className="glass glass--promotion"></div>
          <div className="promotion-banner__content">
            <h1>C'est le printemps !</h1>
            <p>Jusqu'à 40% de réduction sur les cactus et les plantes grasses</p>
            <a href="shopping-list" className="btn btn--link">J'en profite</a>
          </div>
        </div>
        <ShoppingList addItem={addItem}/>
        <Footer />
        <section className="shop-infos-container">
          <div className="section__heading">
            <h1 className="section-title">Notre boutique</h1>
          </div>
          <div className="shop-infos">
            <OpeningHoursTable />
            <div className="contact">
              <h2>Contactez-nous</h2>
              <ul>
                <li><AiOutlinePhone className="icon--contact-infos"/> 01 02 03 04 05</li>
                <li><AiOutlineMail className="icon--contact-infos"/> orchideis@gmail.com</li>
                <li><IoLocationOutline className="icon--contact-infos"/> 1500 rue des Orchidées, 75013 Paris</li>
                <li>
                  <ul className="social-networks">
                    <li><FaFacebookF className="icon--contact-infos" /></li>
                    <li><AiOutlineTwitter className="icon--contact-infos" /></li>
                    <li><AiOutlineInstagram className="icon--contact-infos" /></li>
                    <li><FaPinterestP className="icon--contact-infos"/></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </MenuProvider>
  );
}

export default App;
