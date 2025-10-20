import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import userRoutes from './routes/user.routes';  // ✅ IMPORT AJOUTÉ

// Charge les variables d'environnement
dotenv.config();

// Création de l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour comprendre le JSON
app.use(express.json());

// Route de test
app.get('/', (req: Request, res: Response) => {
  res.send('✅ API Node.js avec TypeScript fonctionne !');
});

// ✅ LIGNE AJOUTÉE : Routes utilisateurs
app.use('/users', userRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});