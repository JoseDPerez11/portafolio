import { useState } from "react";

import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import FloatingInput from "./FloatingInput";
const Contact=() => {
    const form={
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const [formData, setFormData]= useState(form);
    const handleChange = (id: string, value: string) => {
        setFormData({...formData, [id]: value});
    }
    return <div className="px-16 mx-20 my-10 font-mono" id="Contact" >
        <h1 className="text-4xl mb-10 font-bold text-center text-white" >
            <span className="text-primaryColor" >05.&nbsp;</span>
            Contact
        </h1>
        <div data-aos="flip-left" data-aos-duration="800" >
            <div className="text-3xl text-white font-semibold" >lets connect</div>
            <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} />
            <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} />
            <FloatingInput id="phone" name="Phone number" value={formData.phone} handleChange={handleChange} />
            <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} />
            <Button fullWidth rightSection={<IconArrowRight size={20} />} className="!text-bgColor !font-bold text-2xl" variant="filled" size="lg" radius="lg" color="#64FFDA">
                send
            </Button>
        </div>
    </div>
}
export default Contact;