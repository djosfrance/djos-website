import FadeIn from "@/components/common/FadeIn";

export default function StorySection() {
  return (
    <FadeIn>
      <section id="histoire" className="section">
        <div className="histoire-grid">
          <div>
            <p className="section-kicker">L&apos;histoire</p>
            <h2>Née de l'éclair. Forgée dans l'ombre. Destinée à marquer.</h2>
            <p>
              DJOS vient d&apos;une vision claire : créer un univers qui parle à
              ceux qui avancent, bâtissent, chutent parfois, puis reviennent plus forts.
            </p>
          </div>

          <div className="histoire-img"><img src="/images/red-lightning.jpeg" alt="Éclair rouge" />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}