import { Router } from "express";

export interface BaseRouter {
    path?: string;
    router: Router;
}