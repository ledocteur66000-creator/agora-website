export default function LoginPage() {
  return (
    <main className="auth-page">
      <a className="brand" href="/"><span className="brand-mark">A</span><span>AGORA<span className="brand-dot">.</span><small>SHADOW NOVA</small></span></a>
      <div className="auth-panel">
        <div className="section-kicker">AGORA ID / AUTHENTIFICATION</div>
        <h1>Ravi de vous<br /><em>revoir.</em></h1>
        <p>L'espace de connexion AGORA ID sera activé lors du raccordement à Appwrite.</p>
        <label>Adresse e-mail<input type="email" placeholder="nom@exemple.fr" disabled /></label>
        <label>Mot de passe<input type="password" placeholder="••••••••••" disabled /></label>
        <button className="button primary" disabled>Connexion bientôt disponible</button>
        <a className="text-link" href="/">← Retour au portail</a>
        <div className="auth-note">AUTHENTIFICATION SÉCURISÉE · AGORA / SHADOW NOVA</div>
      </div>
    </main>
  );
}
