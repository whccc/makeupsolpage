import React,{useEffect,useState} from 'react';

export default function Resize(){
    const [ShowResolution, SetShowResolution] = useState(false);

    useEffect(() => {
        window.innerWidth<=1024 ? SetShowResolution(true):SetShowResolution(false); 
        const Resize = (e) => {
            window.innerWidth <= 1024 ? SetShowResolution(true):SetShowResolution(false); 
        }
        window.addEventListener("resize", Resize)
        return () => { window.removeEventListener("resize", Resize) }
    })

    return ShowResolution;
}