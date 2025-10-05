import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export default function FAQPage() {

  return (
    <>
      <title>Frequently Asked Questions - CXSpace</title>
      <meta name="description" content="Get answers to common questions about CXSpace community, membership, events, and career opportunities for customer success professionals." />
      
      <div className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-neutral-600">
              Get answers to the most common questions about CXSpace and our community.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
