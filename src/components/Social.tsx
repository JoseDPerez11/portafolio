import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Social=() => {
    const socialLinks=[{link:"https://github.com/JoseDPerez11", icon: IconBrandGithub}, 
        {link: "https://www.linkedin.com/in/josepeca47609b212", icon: IconBrandLinkedin},
        {link: "https://www.instagram.com/jdaniel_perez11", icon: IconBrandInstagram},
        {link: "https://www.youtube.com/@ProgramaElMundoJP", icon: IconBrandYoutube},   
    ];

    const socialIcons = socialLinks.map((socialLink, index) => {
        return <a href={`${socialLink.link}`} target="_blank" className="font-mono text-lg ease-in-out hover:text-primaryColor hover:-translate-x-2 transition transform
        duration-300 ease-in-out">
            <div data-aos="fade-up-left" data-aos-duration="800" ><socialLink.icon stroke={1.5} className="-rotate-90" size={30} /></div>
        </a>
    })
    return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-40 -left-40 rotate-90" >
        {socialIcons}
        <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor" />
    </div>

}
export default Social;