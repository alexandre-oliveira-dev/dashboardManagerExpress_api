import { ObjectId } from 'mongodb';
import employes from '../schemas/employes';

export type CreateEmployeDto ={
   name: string;
   adimissionDate: string;
   office: string;
   departament: string;
   userId: string;
}



export class EmployesService {
  async createEmployes(body) {
    const doc = await employes.create(body)
    return doc.save();
  }

  async getEmployes(page: any) {
    const totalDocuments = await employes.countDocuments();
    const pageSize = 5;
    const totalPages = Math.ceil(totalDocuments / pageSize);
    const res = await employes
      .find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    return {
      data: res,
      pageInfo: {
        page,
        pageSize: pageSize,
        totalPages,
        totalDocuments,
      },
    };
  }
  async getEmploye(id: string) {
    const res = await employes.findById(id);
    return res;
  }
  async deleteEmploye() {
    const res = await employes.deleteMany();
    return res;
  }
  async deleteOneEmploye(id: string) {
    const res = await employes.deleteOne({ _id: new ObjectId(id) });
    return res;
  }
  async updateEmploye(id: string, body: CreateEmployeDto) {
    const res = await employes.updateOne({ _id: new ObjectId(id) }, body);
    return res;
  }

  async getAll() {
    const res = await employes.find()
    return res
  }
}
