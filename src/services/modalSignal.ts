import { Signal } from "./signal";
import { Message } from "../model/message";

export class ModalSignal extends Signal {
    protected listeners: Array<Function> = [];

    /**
     * send a message to the subscribers
     * @param msg 
     */
    public send(msg: Message):void {
        this.listeners.forEach( (f)=>{
            f(msg);
        });
    };
    
    /**
     * subscribe to the signal stream
     * @param fct function to call when a message is sent
     * @param success success callback
     * @param error error callback
     */
    public subscribe(fct: Function, success?: Function, error?: Function):void {
        this.listeners.push(fct);
    }

    /**
     * unsubscribe to the signal stream
     * @param fct function to call when a message is sent
     */
    public unsubscribe(fct: Function):void {
        this.listeners.splice(this.listeners.indexOf(fct), 1 );
    }
}