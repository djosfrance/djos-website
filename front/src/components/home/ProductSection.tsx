"use client";

import { useState } from "react";
import FadeIn from "@/components/common/FadeIn";

export default function ProductSection() {

  const [size, setSize] = useState("50");

  const prices: Record<string, number> = {
    "30": 30,
    "50": 50,
    "100": 100
  };

  return (
    <FadeIn>
      <section id="produit" className="section">
        <div className="produit-grid">

          <div className="produit-img produit-tilt">
            <div className="produit-smoke" />
            <div className="produit-shine" />
            <img
              src="/images/parfum-dragon-rouge.png"
              alt="Parfum Dragon Rouge DJOS"
            />
          </div>

          <div className="produit-content">

            <p className="section-kicker">La Vision</p>

            <h2 className="produit-title">
              La puissance du dragon.
              <br />
              Contenue dans un seul flacon. Inimitable. Pure.
            </h2>

            <p className="produit-sub">
              Le ciel voit tout. Contrôle tout. Il n'oublie rien.
            </p>

            {/* PRIX */}
            <div className="produit-price">
              {prices[size]} €
            </div>

            {/* TAILLES */}
            <div className="tailles">

              <button
                className={`taille-btn ${size === "30" ? "active" : ""}`}
                onClick={() => setSize("30")}
              >
                30 ML
              </button>

              <button
                className={`taille-btn ${size === "50" ? "active" : ""}`}
                onClick={() => setSize("50")}
              >
                50 ML
              </button>

              <button
                className={`taille-btn ${size === "100" ? "active" : ""}`}
                onClick={() => setSize("100")}
              >
                100 ML
              </button>

            </div>

            <div className="produit-actions">
              <a href="mailto:contact@djos.fr" className="btn-primary">
                Commander — {prices[size]} €
              </a>
            </div>
            <p className="produit-note">Livraison offerte dès 50 € d'achats • Paiement sécurisé • Retours 30 jours</p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}