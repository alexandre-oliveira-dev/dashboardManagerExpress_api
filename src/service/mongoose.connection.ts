import mongoose from 'mongoose';

export function mongodb() {
  const url = process.env.MONGO_DB_URL as string
  console.log("🚀 ~ mongodb ~ url:", url)
  mongoose.connect('mongodb+srv://alexandredevfrontend:GXu2Pq7nCIe8QL90@dashboardmanagerdb.pokh6lk.mongodb.net/?retryWrites=true&w=majority&appName=dashboardManagerDB'
);
  mongoose.set('strictQuery', false);
}
