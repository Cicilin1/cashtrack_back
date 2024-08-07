export class AppError extends Error {
    public statusCode: number;

    constructor(message: string) {
        super(message);
    }
}