import { Router } from "express";
import { BaseRouter } from "../base/BaseRoutes";
import validationMiddleware from "../middlewares/validationMiddleware";
import { SendOtpRequestDto } from "../dtos/otp/sendOtpRequestDto";

export default class AuthenticationRoutes implements BaseRouter{
    public readonly router: Router;
    public readonly path: string = "/otp";

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/send`, validationMiddleware(SendOtpRequestDto, 'body'))
    }
} 