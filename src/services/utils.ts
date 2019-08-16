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
  

}

