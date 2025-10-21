# API Node.js avec TypeScript

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

**📊 Statut :** ✅ CRUD Complet |🚀 Déployé

API REST simple pour gérer des utilisateurs, développée avec Node.js, Express et TypeScript.

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/IIZUNNO/api-node-ts-.git
cd api-node-ts

# Installer les dépendances
npm install

#Créer le fichier .env à la racine du projet
echo "PORT=4000" > .env

## 🚀 Lancement

```bash
# Mode développement / lance le serveur avec rechargement automatique

npm run dev

# Mode Production

```bash
#Compiler le code TypeScript
npm run build

#Lancer la version compilée
npm start

## Description des Routes

```bash

Route Racine 
Méthode : GET
URL : http://localhost:4000/
Description : Route de test pour vérifier le bon fonctionnement de l'API

Réponse : "✅ API Node.js avec TypeScript fonctionne !"

## Récuperer tous les utilisateurs

Méthode : GET
URL : http://localhost:4000/users
Description : Retourne la liste complète des utilisateurs

Réponse : {
            "users": [
                {
                  "name":"Alice",
                  "email": "alice@example.com"
                }
            ]
          }

## Ajouter un nouvel utilisateur

Méthode : POST
URL: http://localhost:4000/users
Headers : Content-Type: application/json
Body : 
        {
        "name": "Alice",
        "email":"alice@example.com
        }

Réponse :

    {
      "message": "Utilisateur Alice ajouté avec succès!",
      "email": "alice@example.com
       }

