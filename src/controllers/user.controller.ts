import { Request, Response } from 'express';

// Stockage temporaire en mémoire
const users: { name: string; email: string }[] = [];

// Récupérer tous les utilisateurs
export const getUsers = (req: Request, res: Response) => {
  console.log('✅ GET /users - Liste des utilisateurs');
  res.json({ users });
};

// Ajouter un nouvel utilisateur
export const addUser = (req: Request, res: Response) => {
  console.log('✅ POST /users - Ajout utilisateur');
  const { name, email } = req.body;

  // Validation basique
  if (!name || !email) {
    return res.status(400).json({ message: "Nom et email requis" });
  }

  // Ajouter l'utilisateur
  users.push({ name, email });
  console.log(`✅ Utilisateur ajouté : ${name} (${email})`);

  res.json({ 
    message: `Utilisateur ${name} ajouté avec succès !`, 
    email 
  });
};

// Récupérer un utilisateur par ID
export const getUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  console.log(`✅ GET /users/${userId} - Recherche utilisateur`);
  
  const user = users[userId];
  
  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }
  
  res.json({ user });
};

// Mettre à jour un utilisateur
export const updateUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  
  console.log(`✅ PUT /users/${userId} - Mise à jour utilisateur`);
  
  if (!users[userId]) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }
  
  if (!name || !email) {
    return res.status(400).json({ message: "Nom et email requis" });
  }
  
  users[userId] = { name, email };
  console.log(`✅ Utilisateur ${userId} mis à jour : ${name} (${email})`);
  
  res.json({ 
    message: `Utilisateur ${name} mis à jour avec succès !`,
    user: users[userId]
  });
};

// Supprimer un utilisateur
export const deleteUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  
  console.log(`✅ DELETE /users/${userId} - Suppression utilisateur`);
  
  if (!users[userId]) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }
  
  const deletedUser = users.splice(userId, 1)[0];
  console.log(`✅ Utilisateur supprimé : ${deletedUser.name}`);
  
  res.json({ 
    message: `Utilisateur ${deletedUser.name} supprimé avec succès !`
  });
};