import Feedback from "./feedback";

export default function FeedbackLent() {
  return (
    <ul className="flex gap-[18px] items-start">
      <Feedback image="/feedback1.jpg" aspect="439/264.21" />
      <Feedback image="/feedback2.jpg" aspect="434/129" />
      <Feedback image="/feedback3.jpg" aspect="437/95" />
      <Feedback image="/feedback4.jpg" aspect="430/159" />
      <Feedback image="/feedback5.jpg" aspect="438/115" />
      <Feedback image="/feedback6.jpg" aspect="434/178" />
      <Feedback image="/feedback7.jpg" aspect="436/147" />
    </ul>
  );
}
