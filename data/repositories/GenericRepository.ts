import { ResultSet } from 'expo-sqlite';

import ConnectionManager from '../db/ConnectionManager';
import Repository from './Repository';
import Model from '../models/Model';

class GenericRepository<T extends Model> implements Repository<T> {   
    protected _database : any;
    protected _table : string;
    private DEFAULT_PER_PAGE = 10;    

    constructor(table : any) {
        this._database = ConnectionManager.getInstance();
        this._table= table;
    }
    
    async migrate() {
        throw new Error("Method not implemented.");
    }

    async getPage(page : number) : Promise<T[]> {
        const resultSet = await this._executeQuery(`SELECT * FROM ${this._table} ${this._getPagination(page)};`);
        
        return resultSet.rows.item();
    }

    async getOne(id : number) : Promise<T> {
        const resultSet = await this._executeQuery(`SELECT * FROM ${this._table} WHERE id = ${id};`);
        
        return resultSet.rows.item();
    }

    async upsert(model : T) : Promise<any> {
        const existingModel : T = await this.getOne(model.id);
        let resultSet : ResultSet | null = null;

        if (!existingModel) {
            resultSet = await this._executeQuery(`
                INSERT INTO ${this._table} (${Object.keys(model).join(', ')}) values (
                    ${this._getInsertPreparedStatementPlaceholders(model)}
                )`, Object.values(model));

            return Object.assign({}, model, { id : resultSet!.insertId })
        }

        resultSet = await this._executeQuery(`
            UPDATE ${this._table} SET ${this._getUpdatePreparedStatementPlaceholders(model)} WHERE id = ${model.id};
        `, Object.values(model))

        return model;
    }

    async delete(id : number) : Promise<number> {
        const resultSet = await this._executeQuery(`DELETE FROM ${this._table} WHERE id = ${id};`);
        
        return resultSet.rowsAffected;
    }

    _executeQuery(query : string, params : any[] = []) : any {
        return new Promise((resolve, reject) => {
            this._database.transaction((transaction : any) => {
                transaction.executeSql(
                    query,
                    params,
                    (transaction : any, resultSet : ResultSet) => resolve(resultSet),
                    (transaction: any, error : any) => reject(error)
                );
            });
        });
    }

    _getPagination(page : number) : string {
        return ` LIMIT ${this.DEFAULT_PER_PAGE} OFFSET ${this._getOffset(page)}`
    }

    _getOffset(page : number)
    {
        if (page < 1) {
            throw Error('Page cannot be a negative value');
        }

        return (page - 1) * this.DEFAULT_PER_PAGE;
    }

    _getInsertPreparedStatementPlaceholders(model : T) : string {
        return Object.keys(model).map((key, index)=> {
            return index;
        }).join(', ');
    }

    _getUpdatePreparedStatementPlaceholders(model : T) : string {
        return Object.keys(model).map((key, index)=> {
            return `${key} = ?, `;
        }).join(', ');
    }
}

export default GenericRepository;
