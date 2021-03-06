import Velocity from "velocity-animate"


/**
 * All utils in relation to screen size
 */
export class Screen {
    /**
     * getScrollXY
     * @see http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
     */
    public static getScrollXY() {
        var scrOfX = 0, scrOfY = 0;
        if (typeof (window.pageYOffset) == 'number') {
            //Netscape compliant
            scrOfY = window.pageYOffset;
            scrOfX = window.pageXOffset;
        } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            //DOM compliant
            scrOfY = document.body.scrollTop;
            scrOfX = document.body.scrollLeft;
        } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            //IE6 standards compliant mode
            scrOfY = document.documentElement.scrollTop;
            scrOfX = document.documentElement.scrollLeft;
        }
        return [scrOfX, scrOfY];
    }

    /**
     * getDocHeight
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     */
    public static getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

}

/**
 * Waiter an object which get a condition and wait until this condition is true 
 * checking every Xsec if the state have changed then call a callback function 
 */
export class Waiter {

    private cond: () => boolean;
    private delay: number;
    private maxRetry: number;
    private checkCpt: number = 0;
    private interval: number = -1;
    /**
     * constructor
     * @param condition a function testing a condition and returning a boolean
     * @param delay time to wait in ms until the waiter will check the condition
     * @param maxRetry how many time the waiter will check
     */
    public constructor(condition: () => boolean, delay: number = 1000, maxRetry = 1000) {
        this.cond = condition;
        this.delay = delay;
        this.maxRetry = maxRetry;
    }

    /**
     * tellMeWhenItsReady launch the interval and call the callback when the condition is true
     * @param callback function to call when the condition is true
     */
    public tellMeWhenItsReady(callback: Function) {
        this.interval = window.setInterval(() => {
            let hasError = this.checkCpt === this.maxRetry;
            if (this.cond() || hasError) {
                window.clearInterval(this.interval);
                callback(hasError);
            } else {
                this.checkCpt += 1;
            }
        }, this.delay);
    }
}

/**
 * ApplicationIdProvider singleton provide unique incremental id for all the application scope
 */
export class ApplicationIdProvider {
    private static instance: ApplicationIdProvider;
    private currentId: number

    private constructor() {
        this.currentId = 1;
    }
    static getInstance() {
        if (!ApplicationIdProvider.instance) {
            ApplicationIdProvider.instance = new ApplicationIdProvider();
        }
        return ApplicationIdProvider.instance;
    }

    public getId(): number {
        // return the current id and then incremement it
        return this.currentId++;
    }
}

/**
 * AnimationManager wrap the Velocity lib API, to schedule all the animations within the app
 */
export class AnimationManager {
    private static instance: AnimationManager;
    runningAnimationsId: Array<string | number> = [];

    static getInstance() {
        if (!AnimationManager.instance) {
            AnimationManager.instance = new AnimationManager();
        }
        return AnimationManager.instance;
    }

    /**
     * Performe an animation
     * @param id string or number to identify an animation (if an animation is called X times with the same id it will be executed only once)
     * @param elements DOM element to anmiate
     * @param properties props
     * @param options options
     */
    public animate(id: string | number | "immediate", elements: HTMLElement | HTMLCollection | NodeListOf<HTMLElement>, properties: any, options: any) {

        if (id === "immediate") {
            // run the Velocity animation
            Velocity.animate(elements, properties, options);
        } else if (this.runningAnimationsId.indexOf(id) === -1) {
            // we're about to start an animation so let's add the anim id in the running animation array
            this.runningAnimationsId.push(id);

            // if there is already a complete function we have to save it and reexecute it after the updating the animation Array
            if (options.complete) {
                let completeFunction: Function = options.complete;
                options.complete = () => {
                    this.runningAnimationsId.splice(this.runningAnimationsId.indexOf(id), 1);
                    completeFunction(elements);
                }
            } else {
                options.complete = () => {
                    this.runningAnimationsId.splice(this.runningAnimationsId.indexOf(id), 1);
                }
            }

            // run the Velocity animation
            Velocity.animate(elements, properties, options);
        }

    }
}