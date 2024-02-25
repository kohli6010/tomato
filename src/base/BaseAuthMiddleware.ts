export default abstract class BaseAuthMiddleware {
    public async generateToken() {

    }

    public async verfiyToken() {
    }

    abstract authenticate();
}