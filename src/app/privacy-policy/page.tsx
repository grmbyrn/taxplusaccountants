"use client";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-8xl mx-auto px-4 py-20">
      <PageHero
        heading='Privacy Policy'
        para='Learn about our commitment to protecting your privacy and personal information.'
        img='https://taxassistassets.ams3.cdn.digitaloceanspaces.com/client/2020/PageMenuDefault.jpg'
      />
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
        >
        <div className="max-w-8xl mx-auto pb-8 pt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            TaxPlus Accountants Privacy Statement
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            TaxPlus Accountants has created this Privacy Statement to demonstrate our firm commitment to privacy.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            TaxPlus Accountants wants to ensure, to our best efforts, that any information you give us remains private and is used only for the purposes outlined in this policy.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            A user can access our website, <Link href="https://www.taxplusaccountants.ie" target="_blank" className="text-amber-600 hover:underline">www.taxplusaccountants.ie</Link>, and utilise many of our services without providing any information to us at all.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Personal Data
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Throughout this website you may have an opportunity to send us information relating to you such as through the “contact us” pages or any other area where you may send e-mails, request brochures or respond to any promotions. By choosing to participate in these, you will be providing us with some level of personal information relating to you. This information will only be used by TaxPlus Accountants for the purposes for which it was provided by you, for verification purposes and for statistical analysis.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            We are committed to protecting your personal data in accordance with the Data Protection Act 2018 (DPA 2018) and the General Data Protection Regulations (GDPR).
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            We process personal data for several purposes and the means of collection, lawful basis of processing, use, disclosure, and retention periods for each purpose may differ.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Our policy is to collect only the personal data necessary for agreed purposes and we ask clients to only share personal data where it is strictly needed for those purposes. We collect personal data from our clients or from third parties acting on the instructions of the relevant client.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            We process personal data to provide professional services such as accounting, tax advice, general or specific business advice as part of the range of services we offer. We also process personal data in the administration and management of our business.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Your business contact details are used to provide you with information about our services and other information which we think will be of interest to you, unless you tell us not to.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            We are subject to legal, regulatory and professional obligations.  We need to keep certain records to demonstrate that our services are provided in compliance with those obligations and those records may contain personal data.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Personal data processed is kept by us for as long as is considered necessary for the purpose for which it was collected (including as required by applicable law or regulation). In the absence of specific legal, regulatory or contractual requirements, our retention policy period for records and other documentary evidence created in the provision of services is 6 years.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            We take the security of your data we hold seriously. We have a policy including procedures and training in place covering data protection, confidentiality and security and regularly review the appropriateness of the measures we have in place to keep the data we hold secure.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            We will only share personal data with others when we are legally permitted to do so.  When we share data with others, we put contractual arrangements and security mechanisms in place to protect your data.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Under the DPA (2018) and GDPR, Individuals have certain rights over their personal data and data controllers are responsible for upholding these rights.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Access to data
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            You have a right to access your personal data held by us and you can exercise that right by contacting us below. Our aim is to respond to a request promptly and within the legally required limit of 30 days.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Update of personal data
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            If you wish to update personal data submitted to us, please contact us below. Once we are informed that any personal data held by us is no longer accurate we will make changes based on your updated information.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Withdrawal of consent
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Where we hold data based on consent, individuals have a right to withdraw consent at any time. To withdraw consent to our processing of your personal data please contact us below.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Site Tracking
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
           We use Google Analytics tracking software to monitor customer traffic patterns and site usage to help us develop the design and layout of the websites. This information is aggregated and the software does not allow the collection of individual site visitor information. It is used to assess user behaviour and characteristics in order to measure interest in and use of the various areas of the site. The type of information gathered typically includes:
          </p>
            <ul className="list-disc list-inside text-lg text-slate-800 mb-6 leading-relaxed">
            <li>The number of visitors to our website</li>
            <li>The number of pages viewed</li>
            <li>Which parts of the site are most popular</li>
            </ul>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Cookies
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            This site uses cookies to enable us to improve our service to you and to provide certain features that you may find useful.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Cookies are small text files that are transferred to your computer’s hard drive through your web browser to enable us to recognise your browser and help us to track visitors to our site; thus enabling us to understand better the products and services that will be most suitable to you.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            A cookie contains a unique id to allow us to identify your computer when you travel around our site
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            For more information about cookies and how to stop cookies being installed visit the following website: <Link href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">http://www.allaboutcookies.org</Link>
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Most Web browsers automatically accept cookies, but, if you wish, you can set your browser to prevent it from accepting cookies. The “help” portion of the toolbar on most browsers will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. The cookies we use do not detect any information stored on your computers.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Other Rights
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            This statement is intended to provide information about what personal data we collect about you and how it is used.  As well as rights of access and amendment referred to above, individuals may have other rights in relation to the personal data we hold, such as a right to erasure/deletion, to restrict or object to our processing of personal data and the right to data portability. For further information on these rights please contact us below.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Complaints
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            If you do want to complain about our use of your personal data, please contact us below with the details of your complaint. You also have the right to register a complaint with the Office of the Data Protection Commissioner Ireland. For further information on your rights and how to complain to the DPC, please refer to their website.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Contacting us about your data
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            If you have any questions about this privacy statement or how and why we process personal data, please contact us at:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Links To Third Party Websites
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            This privacy statement only covers websites that we own and control. It does not cover links to other websites and accordingly any information collected by those parties that own and control those websites or their use of cookies. Please be aware that individual organizations operate their own policies regarding the use and sale of personal information and the use of cookies. If you have a concern regarding the way your personal information will be used on other sites then you are advised to read the relevant privacy statement or in the absence of such a statement on the site, contact the company concerned. Any data stored by third party websites are stored completely separately by third party.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Security
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            We take great care to ensure the security of this site. The data you provide to us is protected using SSL (Secure Socket Layer) technology. SSL is the industry standard method of encrypting personal information and credit card details so that they can be securely transferred over the Internet.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Changes To Privacy Statement
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Our Privacy Statement may change from time to time and any changes to the statement will be posted on this page.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
