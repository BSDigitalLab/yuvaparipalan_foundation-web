export interface LegalSection {
  id: string;
  number?: string;
  title: string;
  paragraphs?: string[];
  subsections?: {
    subtitle?: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  bullets?: string[];
  callout?: string;
}

export interface LegalDocument {
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  orgDetails: {
    name: string;
    type: string;
    cin: string;
    darpanId: string;
    address: string;
    email: string;
  };
  sections: LegalSection[];
}

export const PRIVACY_POLICY_DATA: LegalDocument = {
  title: "Privacy Policy",
  subtitle: "Yuvaparipalan Foundation – Privacy Commitment & Data Protection Standard",
  effectiveDate: "Jul 07, 2026",
  lastUpdated: "Jul 07, 2026",
  orgDetails: {
    name: "Yuvaparipalan Foundation",
    type: "A Section 8 Not-for-Profit Company incorporated under the Companies Act, 2013",
    cin: "U85500TZ2026NPL039757",
    darpanId: "TN/2026/1152475",
    address: "#3, Sri Mahalakshmi Garden, Saravanampatti, Coimbatore, Tamil Nadu – 641035, India",
    email: "hello@yuvaparipalan.com",
  },
  sections: [
    {
      id: "our-commitment-to-privacy",
      number: "1",
      title: "OUR COMMITMENT TO PRIVACY",
      paragraphs: [
        "Yuvaparipalan Foundation (\"Foundation\", \"we\", \"us\", or \"our\") is committed to protecting the privacy, confidentiality, and security of individuals who visit our website, apply for our programmes, register as volunteers, participate in our scholarship initiatives, make donations, or interact with our digital services.",
        "This Privacy Policy explains how we collect, use, store, disclose, and safeguard personal information when you access or use our website (www.yuvaparipalan.com) and associated digital platforms. By using our website or submitting information to us, you consent to the practices described in this policy."
      ],
      callout: "Important: Yuvaparipalan Foundation operates strictly as a Section 8 Not-for-Profit organisation. We do not sell, rent, or trade your personal information to commercial third parties."
    },
    {
      id: "information-we-may-collect",
      number: "2",
      title: "INFORMATION WE MAY COLLECT",
      paragraphs: [
        "We collect personal information that you voluntarily provide to us, as well as certain technical data automatically collected when you visit our digital platforms."
      ],
      subsections: [
        {
          subtitle: "A. Information Provided Voluntarily",
          bullets: [
            "Personal Contact Data: Name, email address, phone number, residential address, date of birth, and gender.",
            "Academic & Professional Data: School/college details, educational qualification, stream of study, marks/grades, resume, and career aspirations.",
            "Scholarship & Financial Assessment Data: Parent/guardian income details, socioeconomic category, supporting certificates, and bank account information (solely for direct scholarship disbursements).",
            "Volunteer & Mentor Profile Data: Professional background, skills, area of interest, location preference, and availability.",
            "Donor Information: Name, PAN (for tax deduction certificates under 80G), address, payment reference details, and contribution amount.",
            "Communications & Feedback: Queries, survey responses, application feedback, and correspondence submitted to our team."
          ]
        },
        {
          subtitle: "B. Information Collected Automatically",
          bullets: [
            "Technical Device Data: IP address, browser type, operating system, device model, and referring URLs.",
            "Usage Data: Pages visited, time spent per page, clickstream pattern, and feature interactions.",
            "Cookies & Analytics: Standard session identifiers and analytics cookies to evaluate website performance."
          ]
        }
      ]
    },
    {
      id: "information-relating-to-children",
      number: "3",
      title: "INFORMATION RELATING TO CHILDREN",
      paragraphs: [
        "Many of our educational, skill development, and scholarship initiatives serve high school and college students, some of whom may be under 18 years of age.",
        "We take extra precautions when processing information relating to minors. Where required by applicable law or institutional guidelines, student registrations, scholarship applications, and programme enrollments for minors under 18 years must be submitted with the knowledge, consent, or authorization of a parent, legal guardian, or school headmaster."
      ]
    },
    {
      id: "how-we-use-information",
      number: "4",
      title: "HOW WE USE INFORMATION",
      paragraphs: [
        "We use the collected information solely to advance our charitable, educational, skill development, and youth empowerment missions. Specifically, we use information for:"
      ],
      bullets: [
        "Processing and evaluating Merit Scholarship applications and direct student support awards.",
        "Enrolling students in AI Literacy, Shepreneurs, Digital Skills, and Leadership Academy programmes.",
        "Matching mentors with mentees and coordinating volunteer engagement across districts.",
        "Issuing 80G tax deduction receipts, donation acknowledgments, and financial audit documentation.",
        "Communicating programme announcements, workshop schedules, and foundation updates.",
        "Improving website functionality, user experience, and technical stability.",
        "Complying with statutory requirements under the Companies Act 2013, Income Tax Act 1961, and NITI Aayog DARPAN guidelines."
      ]
    },
    {
      id: "sharing-of-information",
      number: "5",
      title: "SHARING OF INFORMATION",
      paragraphs: [
        "We maintain strict confidentiality over all user data. Information is shared only under the following limited circumstances:"
      ],
      bullets: [
        "Institutional Educational Partners: Partner schools, colleges, and recognized training partners solely for conducting authorized workshops or verified scholarship verification.",
        "Service Providers: Trusted cloud hosting, email service providers, and secure payment gateways operating under strict non-disclosure obligations.",
        "Statutory Authorities & Compliance: Government bodies, tax authorities, auditors, or legal entities when required by mandatory law, court orders, or statutory reporting obligations.",
        "Public Impact Recognition: With explicit prior consent, showcasing inspiring scholar stories, Shepreneur case studies, or volunteer achievements on our official media channels."
      ]
    },
    {
      id: "data-security",
      number: "6",
      title: "DATA SECURITY",
      paragraphs: [
        "We implement robust technical, operational, and organizational security measures to protect your personal information against unauthorized access, loss, alteration, or disclosure.",
        "Security measures include encrypted data transmission (HTTPS/SSL), restricted access controls, firewalls, secure server infrastructure, and periodic administrative audits. Access to personal applicant data is restricted strictly to authorized foundation personnel on a need-to-know basis."
      ]
    },
    {
      id: "data-retention",
      number: "7",
      title: "DATA RETENTION",
      paragraphs: [
        "We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including satisfying legal, accounting, audit, or reporting requirements.",
        "Scholarship and financial transaction records are retained in compliance with statutory Indian accounting and Section 8 company audit regulations. Non-essential promotional or query data is deleted or anonymized upon completion of operational requirements."
      ]
    },
    {
      id: "cookies-and-website-technologies",
      number: "8",
      title: "COOKIES AND WEBSITE TECHNOLOGIES",
      paragraphs: [
        "Our website uses essential and performance cookies to enhance browsing experience, remember session preferences, and gather anonymized website traffic analytics.",
        "You can control or disable cookies through your web browser settings. However, disabling essential cookies may affect certain interactive features of the website."
      ]
    },
    {
      id: "third-party-websites",
      number: "9",
      title: "THIRD-PARTY WEBSITES",
      paragraphs: [
        "Our website may contain links to external third-party websites, partner institutions, or media portals. Yuvaparipalan Foundation is not responsible for the privacy practices, content, or security of external websites.",
        "We encourage users to read the privacy policies of any third-party website they visit."
      ]
    },
    {
      id: "your-rights",
      number: "10",
      title: "YOUR RIGHTS",
      paragraphs: [
        "Subject to statutory regulations, you have the following rights regarding your personal data:"
      ],
      bullets: [
        "Access & Verification: Request a copy of the personal information we hold about you.",
        "Correction & Rectification: Request correction of inaccurate or incomplete personal details.",
        "Consent Withdrawal: Withdraw consent for optional communications or volunteer listings at any time.",
        "Deletion Request: Request deletion of non-statutory personal data, subject to mandatory record retention laws."
      ]
    },
    {
      id: "policy-updates",
      number: "11",
      title: "POLICY UPDATES",
      paragraphs: [
        "Yuvaparipalan Foundation reserves the right to update or modify this Privacy Policy periodically to reflect changes in our operations, legal obligations, or technical standards.",
        "When updates occur, the \"Last Updated\" date at the top of this page will be revised. Continued use of our website after changes are posted constitutes acceptance of the revised Privacy Policy."
      ]
    },
    {
      id: "contact-us",
      number: "12",
      title: "CONTACT US",
      paragraphs: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or our data protection practices, please contact our administrative office at:"
      ]
    },
    {
      id: "our-privacy-commitment",
      number: "13",
      title: "OUR PRIVACY COMMITMENT",
      paragraphs: [
        "At Yuvaparipalan Foundation, we believe that transparency and trust are the foundation of true social impact. We remain steadfast in safeguarding your personal data as we work together to empower India’s youth."
      ]
    }
  ]
};
