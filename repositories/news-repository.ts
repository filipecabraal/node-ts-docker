import * as mongoose from 'mongoose';
import schema from "../models/news";

export default mongoose.model('news', schema);