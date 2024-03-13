import ContactForm from "@/components/contactform";
export const metadata = {
    title: 'Contact',
    description: "Let's connect and start a conversation. Whether you have a question, a proposal, or just want to say hello, I'd love to hear from you.",
  };
export default function Contact(){

    return(

        <>
        <div >
            <div className="text-center">
            <h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636]
             to-[#FFFFFF] bg-[200%_auto] text-6xl text-center text-transparent
              font-extrabold bg-clip-text">Contact Me</h1>
              </div>
        <ContactForm />
        </div>
        </>
    )
}
