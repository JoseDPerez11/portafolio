import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Social=()=>{
    const socialLinks=[{link:"https://github.com/JoseDPerez11", icon:IconBrandGithub}, {link:"https://www.linkedin.com/in/chandrabhan-maurya", icon:IconBrandLinkedin}, 
        {link:"https://www.instagram.com/code.marshal_", icon:IconBrandInstagram}, {link:"https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon:IconBrandYoutube}
    ];
    const socialIcons=socialLinks.map((socialLink)=>{
        return <a href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
        <socialLink.icon className="-rotate-90" size={30} />
    </a>
    })
    return <div className="flex text-textColor items-center gap-10 fixed bottom-40 -left-44 rotate-90">
        {socialIcons}
        <hr className="border-[2px] w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
export default Social;