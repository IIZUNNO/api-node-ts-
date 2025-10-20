import { Router } from 'express';
import { 
  getUsers, 
  addUser, 
  getUserById, 
  updateUser, 
  deleteUser 
} from '../controllers/user.controller';

const router = Router();

// GET /users - Récupère tous les utilisateurs
router.get('/', getUsers);

// GET /users/:id - Récupère un utilisateur par ID
router.get('/:id', getUserById);

// POST /users - Ajoute un nouvel utilisateur
router.post('/', addUser);

// PUT /users/:id - Met à jour un utilisateur
router.put('/:id', updateUser);

// DELETE /users/:id - Supprime un utilisateur
router.delete('/:id', deleteUser);

export default router;