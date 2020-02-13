import { Signal } from "./signal";
import { Message } from "../model/message";

export class ModalSignal extends Signal {
    protected listeners: Array<Function> = [];

    public send(msg: Message):void {

    };
    
    public subscribe(success: Function, error: Function):void {

    }
}