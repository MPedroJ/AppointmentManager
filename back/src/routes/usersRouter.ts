import { Router } from 'express';
import { getAllUsers, getUser, registerUser, userLogin } from '../controllers/usersControllers';

const usersRouter = Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/register', registerUser);
usersRouter.post('/login', userLogin);

export default usersRouter;
