import React, { Component } from 'react';
import './realisations.css';
import devCategoryLogo from '../../assets/img/rea-dev.png'
import netCategoryLogo from '../../assets/img/rea-network.png'
import webCategoryLogo from '../../assets/img/rea-web.png'
import soleoTmbl from '../../assets/img/thumbnail-soleo.jpg'
import hotelTmbl from '../../assets/img/thumbnail-hotel.jpg'
import passerelleTmbl from '../../assets/img/thumbnail-passerelle.jpg'

class Realisations extends Component {
	render() {
		return (
			<div>
				<div id="corps">
					<div id="categories">
						<img alt="Web Category" src={webCategoryLogo} />
						<img alt="Dev Category" src={devCategoryLogo} />
						<img alt="Network Category" src={netCategoryLogo} />
					</div>
					<div id="presentation">
						<p>- Lors de mon stage de 3 mois dans le carde de mon DUT Services et Réseau de Communication. J'ai créé un site Web pour l'entreprise SOLEO qui est une entreprise de meusure en forage et cavitée. Ce site présente toute la documentation des outils
							utilisé par l'entreprise ainsi qu'une interface de gestion des clients de l'entreprise (avec stokage de document respectif à chaque client). Ainsi qu'une gestion de contenu par les membres de l'entreprise.</p>
						<p className='keywords'>HTML - CSS - JavaScript(JQuery) - PHP - MySQL.</p>
					</div>
				</div>
				<div id="pictures">
					<p><img alt="Thumbnail soleo" src={soleoTmbl} /></p>
					<p><img alt="Thumbnail hotel" src={hotelTmbl} /></p>
					<p><img alt="Thumbnail passerelle" src={passerelleTmbl} /></p>
				</div>
			</div>
		);
	}
}

export default Realisations;

