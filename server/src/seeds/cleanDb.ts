import models from '../models/index.js';
import db from '../config/connection.js';
// import { model, modelNames } from 'mongoose';

export default async (modelName: "Question", collectionName: string) => {
  try {
    let modelExists=models[modelName]
    if (!modelExists || !modelExists.db?.db) {
      throw new Error("model not found") 
      
    }
    let exists = await modelExists.db.db.listCollections({
      name: collectionName
    }).toArray()

    if (exists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
