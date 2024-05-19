import { Request, Response } from 'express';
import { EmployesService } from './employe.service';

const appService = new EmployesService();

export class EmployesController {

  async createEmployes(req: Request, res: Response) {
    const { body } = req;
    try {
   const data = await appService.createEmployes(body);
      return res.status(200).json(data)
    } catch {}
  }

async  updateEmploye(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    try {
   const data =  await appService.updateEmploye(id, body);
      return res.status(200).json(data)
    } catch {}
  }

 async getEmployes(req: Request, res: Response) {
    const { page, userId } = req.params;
    try {
      const data = await appService.getEmployes(page, userId);
      return res.status(200).json(data);
    } catch (err) {
      throw err;
    }
  }

 async getEmploye(req: Request, res: Response) {
    const { id } = req.params;
    const data = await appService.getEmploye(id);
    return res.json(data);
  }

 async delete(_req: Request, res: Response) {
    try {
   const data =  await appService.deleteEmploye();
      return res.json(data).status(200);
    } catch (err) {}
  }

 async deleteOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
   const data = await appService.deleteOneEmploye(id);
      return res.json(data).status(200);
    } catch (err) {}
  }

 async getAll(_req: Request, res: Response) {
  const data = await appService.getAll()
    return res.json(data)
 }

}
