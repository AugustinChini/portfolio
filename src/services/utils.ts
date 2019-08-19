export class Utils {
    /**
      * JS Debounce function
      * @see https://davidwalsh.name/javascript-debounce-function
      * @todo it's a reusable function should we put it in utils js file?
      */
    public static debounce(func: () => void, wait = 50) {
        let h: number;
        return () => {
            clearTimeout(h);
            h = window.setTimeout(() => func(), wait);
        };
    }

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

