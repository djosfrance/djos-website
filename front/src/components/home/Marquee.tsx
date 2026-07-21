export default function Marquee() {
  return (
    <section className="bande">

      <div className="bande-track">

        <span>Vision française • Héritage camerounais & guadeloupéen</span>
        <span>La nouvelle génération d'athlètes</span>
        <span>Force • Vitesse • Puissance</span>

        {/* duplication pour boucle */}

        <span>Vision française • Héritage camerounais & guadeloupéen</span>        
        <span>La nouvelle génération d'athlètes</span>
        <span>Force • Vitesse • Puissance</span>

      </div>

    </section>
  );
}