class Model {
    /**
     *  Relational table name
     */
    static table: string; 

    /**
     *  Primary key identifier
     */
    protected _id?: number | undefined;

    public get id(): number{
        return this._id!;
    }

    public set id(id: number) {
        this._id = id;
    }
}

export default Model;
