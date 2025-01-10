import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-2xl md:text-5xl font-bold text-black">
              Have questions ?
            </div>
            <div className="  font-semibold text-2xl md:text-4xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is Barakah Studios?</AccordionTrigger>
      <AccordionContent>
      Barakah Studios is a digital marketing agency. We help businesses grow online.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger> What services do you offer?</AccordionTrigger>
      <AccordionContent>
      <div>
        <p className="text-lg"><strong className="text-lg">Lead Generation:</strong> Finding customers for your business.</p>
        <p className="text-lg"><strong className="text-lg">Website Design & Development:</strong> Creating modern, responsive websites.</p>
        <p className="text-lg"><strong className="text-lg">App Development:</strong> Building mobile apps for your needs.</p>
        <p className="text-lg"><strong className="text-lg">Graphic Design:</strong> Designing logos, banners, and other visuals.</p>
      </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
      Why Barakah Studios?
      </AccordionTrigger>
      <AccordionContent>
      We focus on quality and affordability. Our team works closely with you to meet your goals.
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
      Who can benefit from us?
        </AccordionTrigger>
      <AccordionContent>
      We help startups, small businesses, and enterprises improve their online presence.
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-5">
      <AccordionTrigger>
    Support ?
        </AccordionTrigger>
      <AccordionContent>
        We offer Monday-Friday support for all our clients.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;