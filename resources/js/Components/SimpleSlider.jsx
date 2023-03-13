import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function SimpleSlider() {
    const infos = [
        {
            title: "DEVELOPPENT DIGITAL",
            description:
                "Le tronc commun en développement digital est une étape importante pour acquérirles bases necessaires de l'étude, la conception,la construction,le développement,la mise au point,la maintenance et à l'amélioration des logiciels,des applications et des sites web.",
            link: "https://www.myway.ac.ma/ofppt/fr/FILI%C3%88RES/Digital-et-Intelligence-Artificielle/D%C3%A9veloppement-Digital/p/DIA_DEV_TS",
        },
        {
            title: "INFRASTUCTURE DIGITAL",
            description:
                "Le tronc commun en infrastructure digitale est une étape cruciale qui vise à former des stagiares pour concevoir, administrer, optimiser, et sécuriser des architectures et infrastructures IT.",
            link: "https://www.myway.ac.ma/ofppt/fr/FILI%C3%88RES/Digital-et-Intelligence-Artificielle/D%C3%A9veloppement-Digital/p/DIA_DEV_TS",
        },
        {
            title: "INFOGRAPHIE",
            description:
                "Le Technicien Spécialisé en Infographie est un professionnel chargé de réaliser des produits de prépresse destinés à l’impression et à l’édition. Comme le graphiste, l’infographiste imagine la meilleure solution pour transposer visuellement le message que veut délivrer son client.",
            link: "https://www.myway.ac.ma/ofppt/fr/FILI%C3%88RES/Digital-et-Intelligence-Artificielle/D%C3%A9veloppement-Digital/p/DIA_DEV_TS",
        },
        {
            title: "Téléconseiller Centres d'Appels",
            description:
                "Le téléconseiller assure, au sein d’une équipe employée dans un centre d’appels, l’interface entre l’entreprise et ses clients. Il prend en charge, essentiellement par téléphone, des missions d'information, de conseil, de vente ou d'assistance. Si le téléphone reste son outil principal, les activités de support par internet se développent rapidement.",
            link: "https://www.myway.ac.ma/ofppt/fr/FILI%C3%88RES/Digital-et-Intelligence-Artificielle/D%C3%A9veloppement-Digital/p/DIA_DEV_TS",
        },
        {
            title: "REALISATEUR D'APPLICATION JEE",
            description:
                "Le concepteur réalisateur Java JEE intervient sur des projets complexes qui requièrent une expertise technique de l'architecture JEE(Java Entreprise Edition). En aval,il participe aux travaux de recette et de préparation du déploeiment de l'application qui précèdent sa mise en exploitaion.",
            link: "https://www.myway.ac.ma/ofppt/fr/FILI%C3%88RES/Digital-et-Intelligence-Artificielle/Concepteur-R%C3%A9alisateur-d%27Application-JEE/p/DIA_CRAJEE_FQ",
        },
        {
            title: "Bureauticien Certifié en Microsoft office Spécialiste",
            description:
                " L'informaticien Bureauticien Certifié en Microsoft Office Specialist, qui exerce son activité dans des  PME/PMI, administrations publiques, doté de certifications reconnues à l'échelle internationale,  a comme principales tâches, la réalisation des travaux de bureautique, et l'automatisation des  tâches de gestion à l'aide des outils informatiques.",
            link: "https://www.myway.ac.ma/ofppt/fr/FILI%C3%88RES/Digital-et-Intelligence-Artificielle/Bureauticien-Certifi%C3%A9-en-Microsoft-office-Sp%C3%A9cialiste/p/DIA_BCMOS_FQ",
        },
    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        style:{width:'85%'},
    };
    return (
        <div className="w-full px-9 py-14 flex justify-center"> 
        <Slider {...settings}>
            {infos?.map((item, index) => (
                <Card key={index} infos={item} />
            ))}
        </Slider></div>
    );
}
