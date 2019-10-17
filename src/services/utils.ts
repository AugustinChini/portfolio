export class Utils {
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

export class ApplicationIdProvider {
    private static instance: ApplicationIdProvider;
    private currentId: number

    private constructor() {
        this.currentId = 1;
    }
    static getInstance() {
        if (!ApplicationIdProvider.instance) {
            ApplicationIdProvider.instance = new ApplicationIdProvider();
            // ... any one time initialization goes here ...
        }
        return ApplicationIdProvider.instance;
    }

    public getId(): number {
        // return the current id and then incremement it
        return this.currentId++;
    }
}
