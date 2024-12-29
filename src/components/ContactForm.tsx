import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

import { Resend } from 'resend';
import { EmailTemplate } from "./EmailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);

function ContactForm() {
  const sendEmailAction = async (formData: unknown): Promise<void> => {
    "use server";
    const isValidFormData = (data: unknown): data is FormData => {
      return data instanceof FormData;
    };
    
    if (!isValidFormData(formData)) {
      throw new Error("Invalid form data");
    }
    const name= formData.get("name") as string;
    const email= formData.get("email") as string;
    const message= formData.get("message") as string;
    
    if(!name || !email || !message) {
      throw new Error("Fields cannot be empty");
    }

    // const resend = new Resend('re_JFJ1dTSU_6B2aniM7a3TkMwH5u7hRBkbA');
    const emailContent = await EmailTemplate({name, email, message});
    try {
      const { data, error } =  await resend.emails.send({
        from: 'roshaan@roshfire.com',
        to: ['roshaan20043@gmail.com', 'roshaan1off@gmail.com'],
        subject: 'Message From Portfolio Site',
        react: emailContent
      });

      if (error) {
        console.error(error);
        return;
      }
      console.log(data);
      return;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send email");
    }
  };

  return (
    <form action={sendEmailAction} className="flex justify-center">
      <Card className="flex flex-col min-w-[400px] max-w-[600px] w-[80%] p-8 gap-2">
        <Label className="pt-4" htmlFor="name">Name:</Label>
        <Input required type="text" id="name" name="name" placeholder="Name"/>
        <Label className="pt-4" htmlFor="email">Email:</Label>
        <Input required type="email" id="email" name="email" placeholder="Email"/>
        <Label className="pt-4" htmlFor="message">Message:</Label>
        <Textarea required className="h-32" id="message" name="message" placeholder="Message..."/>
        <Button type="submit" className="text-xl my-4 mt-8 py-6 bg-gradient-to-r 
          from-primary to-secondary hover:from-accent hover:to-secondary 
          text-foreground-light dark:text-foreground-light"
        >
          Submit 
          <FaArrowRight />
        </Button>
      </Card>
    </form>
  );
}

export default ContactForm;
