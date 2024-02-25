import { Repository } from "typeorm";

export default class BaseDao<ModelT> {
    constructor(private readonly repository: Repository<ModelT>) {}

    public getAll = async (): Promise<ModelT[]> => {
        return await this.repository.find({});
    }

    public getById = async (id: number) => {
        return await this.repository.findOneBy({id});
    }
}