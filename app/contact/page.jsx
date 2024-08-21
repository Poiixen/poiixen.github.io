"use client"; 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select,
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+786 212 5112",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tgarcia5920@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Gainesville, FL",
  } 
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 1, duration: 0.4, ease: "easeIn" },
    }}
    className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        { /* Form */ }
        <div className="xl:w-[64%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Get in touch!</h3>
            <p className="text-white/60">
              Fill out the form below and I will get back to you as soon as possible. box wraps to text 
            </p>
            { /* input */ }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="First name" />
              <Input type="lastname" placeholder="Last name" />
              <Input type="email" placeholder="Email address" />
              <Input type="phone" placeholder="Phone number" />
            </div>
            { /* select */ }
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Reason for contacting" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="est">General Inquiry</SelectItem>
                  <SelectItem value="cst">Feedback</SelectItem>
                  <SelectItem value="mst">Collaboration</SelectItem>
                  <SelectItem value="oth">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            { /* textarea */ }
            <Textarea 
              className="h-[150px]" 
              placeholder="Message" 
            />
            { /* button */ }
            <Button size="md" className="max-w-40">Send Message</Button>
          </form>
        </div>
        { /* Info */ }
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>    
    </motion.section>
  );  
};

export default Contact;
