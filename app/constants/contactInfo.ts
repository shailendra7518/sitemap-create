export const contactInfo = [
  {
    icon: "/images/icons/form-submit.svg",
    title: "Submit a Form",
    link: "/project-survey",
    alternate: "Form Icon",
  },
  {
    icon: "/images/icons/sent-mail.svg",
    title: "info@techstaunch.com",
    link: "mailto:info@techstaunch.com",
    alternate: "Mail Icon",
  },
  {
    icon: "/images/icons/call-us.svg",
    title: "+91 8780 173 037",
    link: "tel:+918780173037",
    alternate: "Call Icon",
  },
  {
    icon: "/images/icons/live-chat.svg",
    title: "Live Chat with Us",
    link: "open-chat",
    alternate: "Chat Icon",
    anchoprops: {
      onClick: (e: any) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
          $crisp?.do("chat:open");
        }
      },
    },
  },
  {
    icon: "/images/icons/job-opening.svg",
    title: "Current Job Openings",
    link: "/career",
    alternate: "People Icon",
  },
];
