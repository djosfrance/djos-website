import FadeIn from "@/components/common/FadeIn";

export default function NewsletterSection() {
  return (
    <FadeIn>
      <section id="newsletter" className="section newsletter">
        <div className="newsletter-inner">
          <p className="section-kicker">Newsletter</p>
          <h2>Entre dans le cercle.</h2>
          <p>
            Reçois les prochaines sorties, les annonces et les temps forts de DJOS.
          </p>

          <form className="nl-form">
            <input type="email" placeholder="Ton adresse email" />
            <button type="submit">S&apos;inscrire</button>
          </form>

          <div className="nl-perks">
            <span className="nl-perk">Accès prioritaire</span>
            <span className="nl-perk">Nouvelles exclusives</span>
            <span className="nl-perk">Aucune surcharge</span>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}