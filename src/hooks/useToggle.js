import {useEffect, useState} from "react";

export function useToggle(initialVal, key = null) {


    if (key) {
        function getVal() {
            const str = localStorage.getItem(key);
            if (str)
                return JSON.parse(str);
            return initialVal;
        }

        initialVal = getVal();
    }

    const [val, setVal] = useState(initialVal);

    if (key)
        localStorage.setItem(key, JSON.stringify(val));


    function toggle() {
        setVal(!val);
    }

    return [val, toggle];
}