import React, {useState} from 'react'
import "../styles/Footer.css"

export default function Footer() {
    const [inputValue, setInputValue] = useState('')

    function onSubmitHandler(e){
        e.preventDefault()
        setInputValue("")
    }

    function onChange(e){setInputValue(e.target.value)}

	return (
		<footer id="footer" className='footer'>
            <div className="glass glass--newsletter"></div>
			<div className='footer-elt'>
                <h1>Pour les passionnés de plantes</h1>
				<p>
                    Abonnez-vous à notre News Letter pour être informé des nouveautés
                    et recevoir nos offres et promotions en exclusivité.<br/>
                    Recevez chaque semaine des conseils et astuces adaptés aux saisons 
                    pour vous occuper de vos plantes tout au long de l'année.
                </p>
			</div>
            <form
                className='footer-elt'
                onSubmit={onSubmitHandler}>
                <input className="newsletter-email-input" type="email" placeholder="Entrez votre adresse email" onChange={onChange} value={inputValue}/>
                <input className="input--submit" type="submit" value="S'abonner"/>
            </form>
		</footer>
	)
}
