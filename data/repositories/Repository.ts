interface Repository<T> {
    migrate() : Promise<any>;
    getPage(page : number) : Promise<T[]>;
    getOne(id : number) : Promise<T>;
    upsert(model : T) : Promise<T>;
    delete(id : number) : Promise<number>;
}

export default Repository;
