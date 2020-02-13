import { Message } from "../model/message";

export abstract class Signal {
    protected abstract listeners: Array<Function>;

    /**
     * subscribe to the signal stream
     * @param success success callback
     * @param error error callback
     */
    public abstract subscribe(success: Function, error: Function): void;

    /**
     * send a message to the subscribers
     * @param msg 
     */
    public abstract send(msg: Message): void

    /**
     * sendToAll send a message a global message to all the subscribers
     */
    public sendToAll(msg: Message) {
        this.send(msg);
    }
}