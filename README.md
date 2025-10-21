# API Node.js avec TypeScript

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

**Statut :** ✅ CRUD Complet | 🚀 Déployé

API REST complète pour la gestion d'utilisateurs avec opérations CRUD, développée avec Node.js, Express et TypeScript.

## 📦 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/IIZUNNO/api-node-ts-.git
cd api-node-ts
Installer les dépendances

bash
npm install
Configurer l'environnement

bash
# Créer le fichier .env à la racine du projet
echo "PORT=4000" > .env
🚀 Lancement
Mode Développement
bash
# Lance le serveur avec rechargement automatique
npm run dev
Le serveur sera accessible à l'adresse : http://localhost:4000

Mode Production
bash
# Compiler le code TypeScript
npm run build

# Lancer la version compilée
npm start
📡 Description des Routes
Route Racine
Méthode : GET

URL : http://localhost:4000/

Description : Route de test pour vérifier le bon fonctionnement de l'API

Réponse :

json
"✅ API Node.js avec TypeScript fonctionne !"
Récupérer tous les utilisateurs
Méthode : GET

URL : http://localhost:4000/users

Description : Retourne la liste complète des utilisateurs

Réponse :

json
{
  "users": [
    {
      "name": "Alice",
      "email": "alice@example.com"
    }
  ]
}
Ajouter un nouvel utilisateur
Méthode : POST

URL : http://localhost:4000/users

Headers : Content-Type: application/json

Body :

json
{
  "name": "Alice",
  "email": "alice@example.com"
}
Réponse :

json
{
  "message": "Utilisateur Alice ajouté avec succès !",
  "email": "alice@example.com"
}
Récupérer un utilisateur spécifique
Méthode : GET

URL : http://localhost:4000/users/0

Description : Retourne un utilisateur par son identifiant

Réponse :

json
{
  "user": {
    "name": "Alice",
    "email": "alice@example.com"
  }
}
Modifier un utilisateur
Méthode : PUT

URL : http://localhost:4000/users/0

Headers : Content-Type: application/json

Body :

json
{
  "name": "Bob",
  "email": "bob@example.com"
}
Réponse :

json
{
  "message": "Utilisateur Bob mis à jour avec succès !",
  "user": {
    "name": "Bob",
    "email": "bob@example.com"
  }
}
Supprimer un utilisateur
Méthode : DELETE

URL : http://localhost:4000/users/0

Description : Supprime un utilisateur par son identifiant

Réponse :

json
{
  "message": "Utilisateur Alice supprimé avec succès !"
}
🛠️ Technologies Utilisées
Node.js - Environnement d'exécution JavaScript

Express.js - Framework web pour Node.js

TypeScript - Langage de programmation typé

dotenv - Gestion des variables d'environnement

Nodemon - Outil de rechargement automatique

Statut : ✅ CRUD Complet | 🚀 Déployé | 📚 Prêt pour évaluation