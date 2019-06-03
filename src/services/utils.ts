export class Utils {
    /**
      * JS Debounce function
      * @see https://davidwalsh.name/javascript-debounce-function
      * @todo it's a reusable function should we put it in utils js file?
      */
    public static debounce(func: Function, wait: number, immediate: boolean) {
        var timeout: any;
        return function(this:any) {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

}

