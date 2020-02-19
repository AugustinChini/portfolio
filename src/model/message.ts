export interface Message {
    code: number;
    error?: { message: string, stackTrace?: string };
    type: string;
    content?: any;
}