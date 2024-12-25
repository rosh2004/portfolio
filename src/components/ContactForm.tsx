import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

async function ContactForm() {
  const sendEmailAction = async (formData: FormData) => {
    "use server";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB_3_FORM_ACCESS_KEY_2,
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  };

  return (
    <form action={sendEmailAction} className="flex justify-center">
      <Card className="flex flex-col min-w-[400px] max-w-[600px] w-[80%] p-8 gap-2">
        <Label className="pt-4" htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" placeholder="Name"/>
        <Label className="pt-4" htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" placeholder="Email"/>
        <Label className="pt-4" htmlFor="message">Message:</Label>
        <Textarea className="h-32" id="message" name="message" placeholder="Message..."/>
        <Button type="submit" className="text-xl my-4 mt-8 py-6 bg-gradient-to-r 
          from-primary to-secondary hover:from-accent hover:to-secondary 
          text-foreground-light dark:text-foreground-light"
        >
          Submit <FaArrowRight />
        </Button>
      </Card>
    </form>
  );
}

export default ContactForm;
