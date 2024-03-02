import FaqsList from "@/app/(routes)/faqs/components/faqs-list";
import Footer from "@/app/components/footer";

export default function PageFaqs() {

  return <>
    <section className="main-bg pt-32">
      <div className="container">
        <FaqsList data={[
          {
            question: "What is a referral program?",
            answer: "A referral program is a method of promoting products or services to new customers through referrals, usually word of mouth. Such referrals often happen spontaneously but businesses can influence this through appropriate strategies."
          },
          {
            question: "How do I refer someone?",
            answer: "You can refer someone by sharing your referral link with them. When they sign up using your referral link, they will be added to your referral list."
          },
          {
            question: "How do I earn rewards?",
            answer: "You earn rewards when someone signs up using your referral link and makes a purchase. You will earn a percentage of the purchase amount."
          },
          {
            question: "How do I track my referrals?",
            answer: "You can track your referrals in the referral dashboard. You will be able to see the number of referrals, the amount earned and other details."
          },
          {
            question: "How do I withdraw my earnings?",
            answer: "You can withdraw your earnings from the referral dashboard. You can choose to withdraw to your bank account or to your wallet."
          },
        ]}/>
      </div>
      <Footer/>
    </section>
  </>
}
