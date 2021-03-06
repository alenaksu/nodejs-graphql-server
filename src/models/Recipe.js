import mongoose from 'mongoose';
import env from '../config';

mongoose.connect(env.MONGO_URL, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const RecipeSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  title: String,
  body: String,
});

const RecipeModel = mongoose.model('recipes', RecipeSchema);

export default RecipeModel;
