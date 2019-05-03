import * as mongoose from 'mongoose';

class DataBase {
    private DataBaseUrl = 'mongodb://link-db/db_portal';

    createConnection(){
        mongoose.connect(this.DataBaseUrl);
    }
}

export default DataBase;