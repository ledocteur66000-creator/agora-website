# AGORA Website

Portail officiel AGORA / Shadow Nova — Next.js, TypeScript et Appwrite.

## Démarrage local

Prérequis : Node.js 20.9 ou supérieur.

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Déploiement Vercel

1. Importer ce dépôt GitHub dans Vercel.
2. Framework Preset : Next.js.
3. Build Command : `next build`.
4. Ajouter les variables de `.env.example` quand le projet Appwrite sera configuré.
5. Déployer.

## Appwrite

Le site est préparé pour intégrer Appwrite. La page `/login` est volontairement une maquette : aucune authentification n'est activée tant que le projet Appwrite, son endpoint et son Project ID ne sont pas configurés.

Ne jamais placer une API key Appwrite avec privilèges serveur dans le navigateur. Utiliser les permissions Appwrite et des fonctions serveur pour les opérations privilégiées.

## Pages prévues

- `/` : portail public
- `/login` : future connexion AGORA ID
- À venir : inscription, profil membre, actualités, serveurs, administration.
