'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const questions = [
  ['What is the difference between co-hosting and full management?', 'Co-hosting is a flexible partnership: you stay involved in selected parts of the operation while we own the day-to-day work you choose to delegate. Full management places the complete guest and property operation with CoHaven.'],
  ['Which booking platforms do you support?', 'We can coordinate listings across Airbnb, Vrbo, Booking.com, and direct-booking channels, with calendars, rates, and guest communication managed as one connected operation.'],
  ['How quickly can we get started?', 'Most properties move from audit to go-live in two to four weeks. The timeline depends on listing readiness, access, vendor setup, and the level of service selected.'],
  ['Will I still have visibility into my property?', 'Always. You retain ownership of your listings and receive clear performance updates covering revenue, occupancy, reviews, and the actions we recommend next.'],
  ['How is pricing calculated?', 'Every property and market is different, so we quote after a free property audit. Scope, portfolio size, existing systems, and the level of operational support all shape the final fee.'],
];

export function FAQList() {
  return (
    <Accordion className="border-t border-forest/15" defaultValue={['item-0']} multiple>
      {questions.map(([question, answer], index) => (
        <AccordionItem className="border-forest/15" key={question} value={`item-${index}`}>
          <AccordionTrigger className="py-6 font-serif text-xl leading-snug text-forest hover:no-underline sm:text-2xl">{question}</AccordionTrigger>
          <AccordionContent className="max-w-3xl pb-7 pr-8 text-base leading-7 text-forest/60">{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
