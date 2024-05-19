import { Router } from 'express';
import { EmployesController } from './employes/employe.controller';

export const route = Router();

route.get('/all', new EmployesController().getAll);
route.get('/employes', new EmployesController().getEmployes);
route.post('/create', new EmployesController().createEmployes);
route.put('/update/:id', new EmployesController().updateEmploye);
route.get('/employe/:id', new EmployesController().getEmploye);
route.delete('/delete/:id', new EmployesController().deleteOne);
