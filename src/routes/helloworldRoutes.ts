import { Router, RouterOptions } from "express";
import HelloWorldController from "../controllers/helloWorld.controller";
import { BaseRouter } from "../base/BaseRoutes";

export class HelloWorldRoutes implements BaseRouter{
    public readonly router: Router;
    private readonly basePath = "/ping"
    private readonly helloworldController: HelloWorldController;
    constructor() {
        this.router = Router();
        this.helloworldController = new HelloWorldController();
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(`${this.basePath}`, this.helloworldController.helloworld);
    }
}