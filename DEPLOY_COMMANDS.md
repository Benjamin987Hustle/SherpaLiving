# Guide de Déploiement

Voici les commandes à exécuter pour sauvegarder vos changements sur GitHub et déployer la mise à jour sur le site en ligne.

## 1. Mettre les changements sur GitHub

Ouvrez votre terminal et lancez les commandes suivantes :

```bash
# Ajouter tous les fichiers modifiés
git add .

# Enregistrer les modifications (remplacez le message par ce que vous avez fait)
git commit -m "Description des changements"

# Envoyer vers GitHub
git push
```

## 2. Déployer sur Internet (Production)

Ces commandes sont **indispensables** pour que les changements soient visibles sur le site en ligne.

```bash
# Construire l'application pour la production
npm run build

# Publier le dossier 'dist' sur la branche gh-pages
npx gh-pages -d dist
```
