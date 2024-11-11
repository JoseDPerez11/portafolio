import { useEffect, useState } from "react";
import { Info } from "../User";

import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";

const About=() => {
    const [dots, setDots] = useState<any>(null);
    const [trunk, setTrunk] = useState<any>(null);
    useEffect(() => {
    
        return () => {
            if (dots) dots.destroy();
            if  (trunk) trunk.destroy();
        }
    }, [])
    return (
        <div className="flex overflow-hidden justify-around items-center font-mono px-16 h-[80vh]" id="bg" >
            <div className="ml-20 w-3/5 flex flex-col" > 
                <div className="text-primaryColor text-3xl" >Hi, Iam</div>
                <div className="text-white text-[4.25rem] font-extrabold" >{Info.name}</div>
                <div className="text-white text-4xl flex font-semibold" >I'm a&nbsp;<span className="text-primaryColor" > <Typewriter
                    options={{
                        strings: Info.stack,
                        autoStart: true,
                        loop: true,
                    }}
                /> </span></div>
                <div className="text-textColor text-xl w-[90%] text-justify my-8 font-semibold" >{Info.bio}</div>
                <Button component="a" href="https://github.com/JoseDPerez11" target="_blank" className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA">Check Resume</Button>
            </div>
            <div className="h-[50vh] overflow-hidden rounded-full mr-14 w-[25vw]" id="photo" >
                <img src="/profile.jpg" alt="profile" />
            </div>
        </div>
    )
}
export default About;