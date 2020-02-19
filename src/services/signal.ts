import { Message } from "../model/message";

export abstract class Signal {
    protected abstract listeners: Array<Function>;

    /**
     * subscribe to the signal stream
     * @param fct function to call when a message is sent
     * @param success success callback
     * @param error error callback
     */
    public abstract subscribe(fct: Function, success?: Function, error?: Function): void;

    /**
     * unsubscribe to the signal stream
     * @param fct function to call when a message is sent
     */
    public abstract unsubscribe(fct: Function): void;

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