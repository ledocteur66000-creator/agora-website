const links = [
  ["Organisation", "#organisation"],
  ["Actualités", "#actualites"],
  ["Serveurs", "#serveurs"],
  ["Communauté", "#communaute"]
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="AGORA accueil">
          <span className="brand-mark">A</span>
          <span>AGORA<span className="brand-dot">.</span><small>SHADOW NOVA</small></span>
        </a>
        <nav>{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="login-link" href="/login">AGORA ID <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span className="pulse" /> PORTAIL OFFICIEL · SHADOW NOVA</div>
          <h1>Le point de<br /><em>convergence.</em></h1>
          <p className="hero-copy">
            Bienvenue sur AGORA, le relais numérique de Shadow Nova.
            Retrouvez nos univers de jeu, notre communauté et tous nos services au même endroit.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/login">Accéder à AGORA ID <span>→</span></a>
            <a className="button secondary" href="#organisation">Découvrir AGORA</a>
          </div>
          <div className="hero-meta"><span>SN / NETWORK</span><span>EST. 2026</span><span>FR · COMMUNITY</span></div>
        </div>
        <div className="orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" />
          <div className="orbit-core"><span>A</span><small>AGORA</small></div>
          <div className="orbit-node node-one" /><div className="orbit-node node-two" />
          <div className="orbit-label">SHADOW NOVA<br /><b>NETWORK ACTIVE</b></div>
        </div>
        <div className="vertical-note">CONNECTING WORLDS · BUILDING COMMUNITY</div>
      </section>

      <section className="ticker"><span>AGORA / SHADOW NOVA</span><i>✳</i><span>UN POINT RELAIS MULTI-UNIVERS</span><i>✳</i><span>UNE COMMUNAUTÉ · PLUSIEURS MONDES</span><i>✳</i></section>

      <section className="section intro" id="organisation">
        <div className="section-kicker">01 / L'ORGANISATION</div>
        <div className="intro-grid">
          <h2>Un réseau.<br /><em>Des possibilités.</em></h2>
          <div><p>AGORA est l'antenne orientée jeux vidéo de Shadow Nova. Elle rassemble les expériences Minecraft et roleplay, facilite les échanges entre communautés et centralise les accès aux différents univers.</p><a className="text-link" href="#communaute">Explorer notre organisation <span>↗</span></a></div>
        </div>
      </section>

      <section className="section cards-section" id="serveurs">
        <div className="section-heading"><div><div className="section-kicker">02 / NOS UNIVERS</div><h2>Explorez nos <em>espaces.</em></h2></div><span className="side-caption">DES MONDES À DÉCOUVRIR<br />AU SEIN DU RÉSEAU</span></div>
        <div className="cards">
          <article className="feature-card minecraft"><div className="card-index">01 / GAME</div><div className="card-symbol">▦</div><div><h3>Minecraft</h3><p>Construction, aventure et expériences communautaires.</p><span className="coming">INFORMATIONS À VENIR</span></div></article>
          <article className="feature-card roleplay"><div className="card-index">02 / ROLEPLAY</div><div className="card-symbol">⌖</div><div><h3>Roleplay</h3><p>Des univers immersifs, des histoires et des opérations à vivre.</p><span className="coming">INFORMATIONS À VENIR</span></div></article>
          <article className="feature-card community" id="communaute"><div className="card-index">03 / COMMUNITY</div><div className="card-symbol">◎</div><div><h3>Communauté</h3><p>Un espace commun pour échanger, participer et construire ensemble.</p><span className="coming">REJOIGNEZ LE RÉSEAU</span></div></article>
        </div>
      </section>

      <section className="news section" id="actualites">
        <div className="section-kicker">03 / TRANSMISSIONS</div>
        <div className="news-row"><h2>Les dernières<br /><em>actualités.</em></h2><div className="news-placeholder"><span className="news-tag">CENTRE D'INFORMATION</span><h3>Le réseau se prépare.</h3><p>Les annonces, événements et nouveautés seront publiés ici prochainement.</p><span className="news-line" /></div></div>
      </section>

      <section className="cta">
        <div className="section-kicker">04 / IDENTITÉ NUMÉRIQUE</div>
        <h2>Un accès.<br /><em>Tous vos univers.</em></h2>
        <p>AGORA ID réunira votre compte, votre profil et vos accès aux services du réseau.</p>
        <a className="button primary" href="/login">Découvrir AGORA ID <span>→</span></a>
      </section>

      <footer><a className="brand" href="#"><span className="brand-mark">A</span><span>AGORA<span className="brand-dot">.</span><small>SHADOW NOVA</small></span></a><span>© 2026 AGORA / SHADOW NOVA</span><span>UN RÉSEAU · PLUSIEURS UNIVERS</span></footer>
    </main>
  );
}
