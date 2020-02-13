export interface Message {
    code: number;
    error: { message: string, stackTrace?: string };
    content: any;
}