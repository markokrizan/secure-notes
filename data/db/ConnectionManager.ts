import { openDatabase } from 'expo-sqlite';

const DATABASE_NAME = 'notes_db';

class ConnectionManager {
    private static databaseInstance: any;

    private constructor() {

    }
  
    static getInstance(): any {
        if (!ConnectionManager.databaseInstance) {
            ConnectionManager.databaseInstance = this.getConnection();
        }
  
        return ConnectionManager.databaseInstance;
    }

    private static getConnection() : any {
        return openDatabase(DATABASE_NAME);
    };
}

export default ConnectionManager;
