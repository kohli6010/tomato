import { Service } from "typedi";
import BaseDao from "../base/BaseDao";
import { Customer } from "../entity/Customer";
import { Repository } from "typeorm";

@Service()
export default class CustomerDao extends BaseDao<Customer>{
    constructor(private readonly customerRepository: Repository<Customer>) {
        super(customerRepository);
    }
}