import { NextFunction, Request, Response } from "express";
import HelloworldService from "../services/helloworld.service";

export default class HelloWorldController {
    private readonly helloworldService: HelloworldService;
    constructor() {
        this.helloworldService = new HelloworldService();
    }

    public helloworld = (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = this.helloworldService.helloWorld();
            res.send(result)
        }catch(err) {
            next(err);
        }
    }
}