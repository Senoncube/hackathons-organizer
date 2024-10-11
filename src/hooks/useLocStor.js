import {useState, useEffect} from "react";

export function useLocStor(name, initialVal) {
    function getLocalStorageValue() {
        const str = localStorage.getItem(name);
        if (str)
            return JSON.parse(str);
        return initialVal;
    }

    const [valuee, setValuee] = useState(getLocalStorageValue);

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(valuee));
    }, [name, valuee]);

    return [valuee, setValuee];
}