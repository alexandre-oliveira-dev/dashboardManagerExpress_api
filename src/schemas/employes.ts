
import { model, Schema } from 'mongoose'

const Employes = new Schema({
  name: String,
  admissionDate: Date,
  office: String,
  departament: String,
  userId: String,
})
export default  model('Employes', Employes)