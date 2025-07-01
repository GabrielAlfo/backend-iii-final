import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const database = async () => {
  try {
    if (!MONGO_URL) {
      throw new Error("Falta la variable de entorno MONGO_URL");
    }
    await mongoose.connect(MONGO_URL);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectarse a MongoDB', error);
    process.exit(1);
  }
};

export { database, mongoose };
export default database;