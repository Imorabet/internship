import React from "react";

const About = () => {
    return (
        <div id="a-propos" className=" flex justify-center items-center  gap-3  bg-[#003366] px-[100px] py-[125px] ">
            <div className="w-[50%]">
                <h1 className=" font-semibold leading-[45px] text-4xl  text-[#FFFEFE]  uppercase mb-10">
                    A propos de ismo
                </h1>
                <p className=" font-medium text-xl text-[#F4F4F5] w-full">
                    Cet institut, qui s'inscrit dans le cadre du programme de
                    développement intégré destiné à accompagner le
                    Contrat-programme TIC, mis en place par l'OFPPT, a pour
                    mission de répondre aux besoins en compétences des
                    opérateurs économiques de la région, d'offrir aux jeunes des
                    qualifications adaptées au marché du travail et de
                    participer à la valorisation de la région du Nord.
                    <br />
                    D'une superficie de plus de 2.000 m2 couverts, l'ISMO a une
                    capacité d'accueil de 400 places et permet la formation de
                    près de 700 stagiaires/an dans les niveaux techniciens
                    spécialisés. Cet établissement offre également des
                    formations qualifiantes et les cursus de formation dispensés
                    couvrent l'ensemble des filières liées aux métiers des
                    DIGITAL.
                    <br />
                    L'institut forme dans les filières de développement digital,
                    infrastructures digital, et l'infographie pour le niveau
                    techniciens spécialisés, alors qu'une formation qualifiante
                    bureauticien certifié en microsoft office specialist est en
                    Téléconseiller Centres d'Appels sont également prévue en vue
                    de participer à la requalification des jeunes de Tétouan et
                    sa région
                </p>
            </div>
            <div className=" rounded-[36px] w-1/2  border-4 border-solid border-white ">
                <img
                    src="https://www.ismo.ma/images/ismo.jpg"
                    className="rounded-[36px] w-full h-[590px]"
                />
            </div>
        </div>
    );
};

export default About;
