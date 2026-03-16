import aiAutomationsImage from "../../images/ai-automations.png";
import aiCallAgentImage from "../../images/Ai-Call-Agent.jpg";
import webDesignStockImage from "../../images/web-design-stock.png";

const sharedImages = {
  homeTech: webDesignStockImage,
  homeAi: aiAutomationsImage,
  officeOne: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  officeTwo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  teamOne: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  servicesHero: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  serviceAi: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  serviceCallAgent: aiCallAgentImage,
  serviceMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  serviceWeb: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  serviceSystem: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  serviceModel: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  serviceIt: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  automationWorkflow: aiAutomationsImage,
  portfolioOne: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  portfolioTwo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  portfolioThree: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  portfolioFour: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  portfolioFive: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  portfolioSix: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  creativeOffice: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  processHero: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  processCta: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  contactHero: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1400&q=80",
  contactCta: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
};

export const SITE_CONTENT = { 
  en: {
    locale: "en",
    direction: "ltr",
    navItems: [
      { id: "home", label: "Home" },
      { id: "services", label: "Services" },
      { id: "portfolio", label: "Portfolio" },
      { id: "process", label: "Process" },
      { id: "contact", label: "Contact" },
    ],
    socialLinks: [
      { id: "instagram", label: "Instagram", href: "https://www.instagram.com/queue.solutions/" },
      { id: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61585024646035" },
    ],
    siteDetails: {
      name: "Queue Solutions",
      email: "queuesolutions25@gmail.com",
      tagline: "Websites, systems, and AI that help businesses grow",
      shortTagline: "Web, systems, and AI for modern brands",
      description:
        "Queue Solutions helps businesses present themselves more credibly online, run more smoothly behind the scenes, and reduce repetitive work with practical automation.",
    },
    ui: {
      startProject: "Start Project",
      contactUs: "Contact Us",
      viewPortfolio: "See Our Work",
      ourServices: "Our Services",
      discussService: "Talk About This Service",
      beginProject: "Start the Process",
      languageToggle: "العربية",
      languageToggleMobile: "Arabic (Egypt)",
      footerNavigate: "Navigate",
      footerConnect: "Connect",
      footerSummary: "Websites, systems, and AI for modern brands.",
      footerRights: "All rights reserved.",
      modal: {
        eyebrow: "Project Inquiry",
        title: "Tell us what you need help with",
        description:
          "Tell us what your business does, what is slowing you down, and what you want this project to improve.",
        name: "Your full name",
        businessName: "Business name",
        email: "Email (optional)",
        phone: "Phone number",
        whatsappQuestion: "Is this number on WhatsApp?",
        whatsappYes: "Yes, it has WhatsApp",
        whatsappYesHint: "We can reach you faster there if needed.",
        whatsappNo: "No, regular calls only",
        whatsappNoHint: "We will use normal calls and email instead.",
        whatsappRequired: "Choose whether this number has WhatsApp.",
        emailInvalid: "Enter a valid email address.",
        phoneInvalid: "Enter a valid phone number.",
        idea: "Project idea",
        cancel: "Cancel",
        submit: "Send Details",
        success: "Thank you. Your inquiry has been sent successfully.",
        successTitle: "Your form has been sent",
        successDescription: "Our team will review your details and reply within the next 24 hours.",
        successButton: "Close",
        emailSubject: "New Project Inquiry from",
        emailBodyTitle: "New Project Inquiry",
        emailName: "Name",
        emailEmail: "Email",
        emailPhone: "Phone",
        emailIdea: "Project Idea",
        notProvided: "Not provided",
      },
      contactCards: {
        emailTitle: "Business email",
        emailAction: "We usually reply after reviewing the form",
        formTitle: "Start with the form",
        formBody: "Share the main project details and we will contact you directly.",
        formAction: "Open project form",
      },
      contactWhy: "Why Businesses Contact Us",
      processSteps: "How the Work Moves",
      capabilities: "Capabilities",
      whyQueue: "Why Businesses Choose Queue",
      nextProject: "Your Next Project",
      readyToBegin: "Ready to Start?",
      getInTouch: "Let's Talk",
      resultLabel: "Result",
    },
    home: {
      heroBadge: "Modern websites, systems, and AI workflows for growing businesses",
      heroTitleTop: "Where Your Ideas Come True",
      heroMobileTitleTop: "Where Your Ideas Come True",
      heroMobileDescription: "We design clean digital experiences, internal systems, and AI automations that make your business look sharper and run faster.",
      heroTitleAccent: "Queue Solutions",
      heroDescription: "One Place For All Your Technical Needs",
      heroCards: [
        { title: "Websites", description: "Clear, polished websites that build trust and turn interest into real inquiries." },
        { title: "Systems", description: "Simple dashboards and tools that help teams stay aligned and work with less friction." },
        { title: "AI Automations", description: "We handle follow-up, reminders, and repeated admin so your team can focus on the business." },
      ],
      sections: [
        {
          eyebrow: "",
          title: "Website Design ",
          mobileTitle: "A website that builds trust fast",
          mobileDescription: "Clear structure and strong messaging help people trust the business faster.",
          description:
            "The Perfect landing page for your business should make it easy for visitors to understand what you offer, why it matters, and how to take the next step",
          image: sharedImages.homeTech,
          imageAlt: "Premium workspace with laptop and code",
          points: [
            { title: "Clean design", description: "Clean and modern design that makes the website visually appealing and easy to navigate." },
            { title: "Functionality", description: "Fast, responsive, and reliable performance that ensures a smooth user experience on all devices." },
          ],
        },
        {
          eyebrow: "Enforce Your Buisness With AI",
          title: "We build AI automations that handles the routine work, so you can focus on growing the business",
          mobileTitle: "AI automations handles the routine work",
          mobileDescription: "Automation handles follow-up, reminders, and routing so your team can focus on growth.",
          description:
            "why do the repetitive tasks when you can have them handled automatically? We build AI automations that keep the work moving in the background, so your team can focus on clients, delivery, and growth instead of busywork.",
          image: sharedImages.homeAi,
          imageAlt: "Futuristic AI workflow screen",
          tags: ["Automated replies", "API Integrations", "Chatbots & AI Assistants", "Workflow Automation"],
        },
      ],
      gallery: {
        eyebrow: "Custome Operation systems and dashboards",
        title: "Professional, effective systems that makes the work feel easier",
        mobileTitle: "Professional and easy to trust",
        mobileDescription: "The design should feel organized, current, and ready for serious work.",
        description:
          "We design custom digital systems and dashboards that help business owners manage their operations, track performance, and make smarter decisions. Our solutions are built specifically for your business to streamline workflows, organize data, and provide real-time insights in one powerful platform..",
        images: [
          { src: sharedImages.officeOne, alt: "Software team working across laptops in a product session" },
          { src: sharedImages.officeTwo, alt: "Business intelligence dashboard with charts and metrics" },
          { src: sharedImages.teamOne, alt: "Engineering team collaborating on software delivery" },
        ],
      },
    },
    services: {
      hero: {
        eyebrow: "",
        title: "We provide practical, polished solutions that elevate your business",
        mobileTitle: "Websites, systems, and automations",
        mobileDescription: "We help businesses look stronger and waste less time on repeated work.",
        description:
          "We help businesses look sharper, work faster, and stop losing time on the repeated tasks that should already be handled.",
        image: sharedImages.servicesHero,
        imageAlt: "Digital strategy team collaborating around a laptop",
      },
      automationHighlight: {
        eyebrow: "Let automation carry the routine",
        title: "We make the repeated work run on its own, so your head stays free for growth, service, and better ideas",
        mobileTitle: "Routine work runs itself",
        description:
          "Instead of your team replying manually, chasing people, copying details between tools, or updating the same task over and over, we build automation that keeps those steps moving in the background.",
        mobileDescription:
          "Replies, follow-up, reminders, and handoffs keep moving automatically while your team focuses on real work.",
        note:
          "You focus on clients, delivery, strategy, and growing the business. We make the repeated work stop stealing attention.",
        mobileNote: "Less busywork. More time for growth.",
        chips: ["Reply faster", "Follow up automatically", "Reduce admin work", "Keep work moving"],
        image: sharedImages.automationWorkflow,
        imageAlt: "Workflow dashboard showing automated reporting and team activity",
        points: [
          {
            title: "New leads hear back right away",
            description: "The moment someone fills a form, they can receive a reply and the right next step before interest drops.",
          },
          {
            title: "Follow-up happens without chasing",
            description: "Reminders, check-ins, and routine updates can be sent automatically instead of depending on memory.",
          },
          {
            title: "The right person gets the task",
            description: "Requests can be sorted and sent to sales, operations, or support with the right details already attached.",
          },
          {
            title: "Your team gets its time back",
            description: "Less copy-paste work and fewer repeated checks means more room for delivery, sales, and creative thinking.",
          },
        ],
      },
      callAgentHighlight: {
        eyebrow: "AI call agent",
        title: "Turn missed calls into new clients with an AI agent that answers, explains, and captures the lead",
        mobileTitle: "Never miss a valuable call",
        description:
          "When someone calls and your team is busy, the opportunity should not disappear. We build AI call agents that answer instantly, explain your service clearly, collect the caller's details, and pass the conversation to your team.",
        mobileDescription:
          "The AI agent answers fast, explains your service, and sends your team the important details.",
        note:
          "The goal is simple: fewer missed opportunities, faster response, and a smoother first impression for every caller.",
        mobileNote: "Missed calls become real opportunities.",
        chips: ["Answers instantly", "Explains the service", "Captures lead details", "Reduces missed opportunities"],
        image: sharedImages.serviceCallAgent,
        imageAlt: "AI call agent interface with voice support visuals",
        points: [
          {
            title: "Missed calls stop turning into lost leads",
            description: "The call gets answered even when your team is unavailable, so potential clients are not left waiting.",
          },
          {
            title: "The service is explained clearly",
            description: "The agent can answer common questions, explain the offer, and guide the caller to the right next step.",
          },
          {
            title: "Your team receives the important details",
            description: "Names, phone numbers, service interest, and call context can all be captured automatically.",
          },
          {
            title: "It feels faster and more professional",
            description: "A quick response on the first call builds trust and makes the business feel organized from the start.",
          },
        ],
      },
      services: [
        {
          title: "AI Automations",
          icon: "brain",
          description:
            "Perfect for the repeated work businesses do every day: lead replies, follow-up, reminders, handoffs, and admin updates.",
          image: sharedImages.serviceAi,
        },
        {
          title: "AI Call Agent",
          icon: "headset",
          description:
            "An AI voice agent that answers calls, handles common questions, captures lead details, and helps turn missed calls into new clients.",
          image: sharedImages.serviceCallAgent,
        },
        {
          title: "Mobile App Development",
          icon: "mobile",
          description:
            "Mobile apps built for customers or internal teams, with clean flows, solid performance, and a product feel that matches the brand.",
          image: sharedImages.serviceMobile,
        },
        {
          title: "Website Building",
          icon: "globe",
          description:
            "We build websites that feel credible, load cleanly, and help visitors understand the value quickly.",
          image: sharedImages.serviceWeb,
        },
        {
          title: "System Design",
          icon: "cogs",
          description:
            "We create internal tools and dashboards that give your team one clear place to track work, data, and decisions.",
          image: sharedImages.serviceSystem,
        },
        {
          title: "IT Services",
          icon: "code",
          description:
            "We support the technical setup behind the work so your tools stay stable, connected, and easier to manage.",
          image: sharedImages.serviceIt,
        },
      ],
      capabilitiesTitle: "One partner for the customer-facing side and the operational side",
      capabilitiesMobileTitle: "One partner across the business",
      capabilitiesMobileDescription: "The site, system, and automation should all work together.",
      capabilitiesDescription:
        "The website, the workflow, and the internal system should feel like parts of the same business, not separate projects.",
      reasonsTitle: "Why businesses choose Queue",
      reasonsMobileTitle: "Why businesses choose us",
      reasonsMobileDescription: "The work has to look strong and solve a real business problem.",
      reasonsDescription:
        "We keep the work practical. The design needs to look strong, but it also needs to solve something real.",
      reasons: [
        {
          title: "We start with the business problem",
          description: "Before we talk about features, we ask what is slowing the business down and what a better result should look like.",
        },
        {
          title: "We care about how it feels to use",
          description: "Strong design is not decoration. It makes the product easier to trust, easier to understand, and easier to use.",
        },
        {
          title: "We choose useful technology",
          description: "The stack should support the goal. We use modern tools where they create speed, clarity, and reliability.",
        },
        {
          title: "We stay involved through delivery",
          description: "Strategy, design, build, launch, and refinement happen in one connected process instead of being passed around.",
        },
      ],
    },
    portfolio: {
      hero: {
        eyebrow: "Featured Work",
        title: "A closer look at the kind of work we help businesses launch",
        mobileTitle: "A look at the work",
        mobileDescription: "Examples of work that balance presentation, operations, and real business value.",
        description:
          "These examples show the balance we care about most: strong presentation, smoother operations, and outcomes the business can feel.",
      },
      projects: [
        {
          title: "Premium Service Website",
          category: "Website Design",
          description:
            "A high-trust marketing site built to explain the offer clearly and turn serious visitors into inquiries.",
          image: sharedImages.portfolioOne,
          result: "Stronger first impression",
        },
        {
          title: "Operations Dashboard",
          category: "Internal System",
          description: "A central workspace for tasks, reporting, and performance so teams can see what matters without digging through tools.",
          image: sharedImages.portfolioTwo,
          result: "Better daily visibility",
        },
        {
          title: "AI Lead Qualification Flow",
          category: "AI Automation",
          description:
            "An automated intake flow that filters inquiries, flags strong leads, and routes follow-up faster.",
          image: sharedImages.portfolioThree,
          result: "Better leads, less manual sorting",
        },
        {
          title: "Multi-Location Booking Site",
          category: "Booking Platform",
          description:
            "A conversion-focused website that combines brand storytelling, scheduling, and smooth mobile booking.",
          image: sharedImages.portfolioFour,
          result: "More completed bookings",
        },
        {
          title: "Executive Reporting Suite",
          category: "Business Intelligence",
          description:
            "A reporting view built for owners and managers who need quick answers, not noisy dashboards.",
          image: sharedImages.portfolioFive,
          result: "Faster decisions",
        },
        {
          title: "Client Onboarding System",
          category: "Automation System",
          description:
            "A guided onboarding flow with forms, approvals, notifications, and clear next steps for both sides.",
          image: sharedImages.portfolioSix,
          result: "Cleaner handoff",
        },
      ],
      cta: {
        eyebrow: "Your Next Project",
        title: "If you want work that feels sharp and makes sense, this is the standard",
        mobileTitle: "This is the standard",
        mobileDescription: "The goal is simple: clear, credible work that feels well run.",
        description:
          "The goal is not to make things look expensive. The goal is to make the business feel clear, credible, and well run.",
        image: sharedImages.creativeOffice,
        imageAlt: "Digital strategy team discussing a project",
      },
    },
    process: {
      hero: {
        eyebrow: "How We Work",
        title: "A clear process that keeps momentum without losing quality",
        mobileTitle: "A process that stays clear",
        mobileDescription: "You always know what we are doing, what comes next, and why it matters.",
        description:
          "You always know what we are doing, what comes next, and what the work is meant to improve.",
        image: sharedImages.processHero,
        imageAlt: "Project planning session",
        cards: [
          { title: "Clarity", text: "Everyone knows the goal before the build starts." },
          { title: "Momentum", text: "The work keeps moving without unnecessary detours." },
          { title: "Care", text: "Design and implementation stay aligned from start to finish." },
        ],
      },
      stepsTitle: "From first conversation to launch, the work stays clear",
      stepsMobileTitle: "From first call to launch",
      steps: [
        {
          num: "01",
          title: "Discovery",
          description:
            "We learn how the business works today, where the friction is, and what a better outcome should look like.",
        },
        {
          num: "02",
          title: "Planning",
          description:
            "We shape the structure, decide what matters first, and set a practical path to a strong first release.",
        },
        {
          num: "03",
          title: "Development",
          description:
            "We design, build, connect, and refine the system so it feels polished in use and stable behind the scenes.",
        },
        {
          num: "04",
          title: "Launch and Support",
          description:
            "We launch carefully, fix what needs attention, and support the handoff so the result keeps working after go-live.",
        },
      ],
      cta: {
        eyebrow: "Ready to Start?",
        title: "A good process matters because it protects the result",
        mobileTitle: "The process protects the result",
        mobileDescription: "A calm, well-run process leads to a stronger result.",
        description:
          "If the site feels calm and polished, the work behind it should feel the same way too.",
        image: sharedImages.processCta,
        imageAlt: "Product team planning a technical rollout",
      },
    },
    contact: {
      hero: {
        eyebrow: "Let's Talk",
        title: "Tell us what you want to improve",
        mobileTitle: "Tell us what to improve",
        mobileDescription: "Share the essentials and we will come back with the right next step.",
        description:
          "If you need a better website, a clearer internal system, or smarter automation, send the essentials and we will come back with the right next step.",
        image: sharedImages.contactHero,
        imageAlt: "Team collaboration around a table",
      },
      whyTitle: "A useful first conversation, not a sales script",
      reasons: [
        "Clear advice based on where the business is today",
        "A realistic recommendation for the highest-impact next move",
        "A project direction that fits both the brand and the way the team works",
      ],
      cta: {
        eyebrow: "Project Brief",
        title: "Send the essentials and we will take it from there",
        mobileTitle: "Send the essentials",
        mobileDescription: "You do not need a perfect brief. Just send the important parts.",
        description:
          "You do not need a perfect brief. Just tell us what you do, what is frustrating right now, and what kind of result you want.",
        image: sharedImages.contactCta,
        imageAlt: "Software team collaborating in a technology office",
      },
    },
  },
  ar: {
    locale: "ar",
    direction: "rtl",
    navItems: [
      { id: "home", label: "الرئيسية" },
      { id: "services", label: "الخدمات" },
      { id: "portfolio", label: "الأعمال" },
      { id: "process", label: "الخطوات" },
      { id: "contact", label: "تواصل معنا" },
    ],
    socialLinks: [
      { id: "instagram", label: "إنستجرام", href: "https://www.instagram.com/queue.solutions/" },
      { id: "facebook", label: "فيسبوك", href: "https://www.facebook.com/profile.php?id=61585024646035" },
    ],
    siteDetails: {
      name: "Queue Solutions",
      email: "queuesolutions25@gmail.com",
      tagline: "مواقع إلكترونية وأنظمة وأتمتة بالذكاء الاصطناعي",
      shortTagline: "مواقع وأنظمة وذكاء اصطناعي لعلامات عصرية",
      description:
        "تقدم Queue Solutions مواقع إلكترونية احترافية وأنظمة داخلية وأتمتة بالذكاء الاصطناعي للشركات التي تريد حضورًا رقميًا أوضح وتشغيلًا أقوى.",
    },
    ui: {
      startProject: "ابدأ مشروعك",
      contactUs: "تواصل معنا",
      viewPortfolio: "شاهد الأعمال",
      ourServices: "خدماتنا",
      discussService: "ناقش هذه الخدمة",
      beginProject: "ابدأ مشروعك",
      languageToggle: "English",
      languageToggleMobile: "الإنجليزية",
      footerNavigate: "التنقل",
      footerConnect: "تواصل",
      footerSummary: "مواقع وأنظمة وذكاء اصطناعي لعلامات عصرية.",
      footerRights: "جميع الحقوق محفوظة.",
      modal: {
        eyebrow: "ابدأ مشروعك",
        title: "احك لنا ما الذي تريد بناءه",
        description: "شاركنا الفكرة والهدف التجاري وكل ما يساعدنا على فهم المشروع بشكل أفضل.",
        name: "اسمك الكامل",
        businessName: "اسم الشركة",
        email: "البريد الإلكتروني (اختياري)",
        phone: "رقم الهاتف",
        whatsappQuestion: "هل هذا الرقم عليه واتساب؟",
        whatsappYes: "نعم، عليه واتساب",
        whatsappYesHint: "يمكننا التواصل أسرع من خلاله عند الحاجة.",
        whatsappNo: "لا، مكالمات عادية فقط",
        whatsappNoHint: "سنعتمد على المكالمات العادية والبريد الإلكتروني.",
        whatsappRequired: "اختر هل هذا الرقم عليه واتساب أم لا.",
        emailInvalid: "أدخل بريدًا إلكترونيًا صحيحًا.",
        phoneInvalid: "أدخل رقم هاتف صحيحًا.",
        idea: "فكرة المشروع",
        cancel: "إلغاء",
        submit: "إرسال الطلب",
        success: "شكرًا لك. تم إرسال طلبك بنجاح.",
        successTitle: "تم إرسال النموذج بنجاح",
        successDescription: "سيقوم فريقنا بمراجعة التفاصيل والرد عليك خلال الـ 24 ساعة القادمة.",
        successButton: "إغلاق",
        emailSubject: "طلب مشروع جديد من",
        emailBodyTitle: "طلب مشروع جديد",
        emailName: "الاسم",
        emailEmail: "البريد الإلكتروني",
        emailPhone: "الهاتف",
        emailIdea: "فكرة المشروع",
        notProvided: "غير متوفر",
      },
      contactCards: {
        emailTitle: "البريد الرسمي",
        emailAction: "سنرد عليك بعد إرسال النموذج",
        formTitle: "ابدأ من النموذج",
        formBody: "أرسل أهم تفاصيل المشروع وسنتواصل معك مباشرة.",
        formAction: "افتح نموذج المشروع",
      },
      contactWhy: "لماذا تتواصل معنا",
      processSteps: "خطوات العمل",
      capabilities: "القدرات",
      whyQueue: "لماذا Queue Solutions",
      nextProject: "المشروع القادم",
      readyToBegin: "جاهز للبدء",
      getInTouch: "تواصل معنا",
    },
    home: {
      heroBadge: "مواقع وأنظمة وتدفقات ذكاء اصطناعي حديثة للشركات التي تريد النمو",
      heroTitleTop: "حيث تتحول أفكارك إلى واقع",
      heroMobileTitleTop: "حيث تتحول أفكارك إلى واقع",
      heroTitleAccent: "Queue Solutions",
      heroDescription:
        "نصمم تجارب رقمية أنيقة وأنظمة داخلية وأتمتة بالذكاء الاصطناعي تجعل نشاطك أكثر قوة وسرعة.",
      heroCards: [
        { title: "المواقع", description: "صفحات سريعة واحترافية تبدو قوية على الكمبيوتر والهاتف." },
        { title: "الأنظمة", description: "لوحات تحكم وأدوات أعمال تقلل العمل اليدوي وتزيد الوضوح." },
        { title: "الأتمتة الذكية", description: "نتولى المتابعة والتذكيرات والأعمال المتكررة حتى يركز فريقك على النشاط نفسه." },
      ],
      sections: [
        {
          eyebrow: "تقنية ويب قوية",
          title: "أسلوب بصري أنظف بدون فقدان الإحساس العصري",
          description:
            "تعتمد الصفحة الرئيسية الآن على طابع استوديو مشرق بسطوح بيضاء وعمق ناعم وتباين واضح مع الحفاظ على هوية العلامة.",
          image: sharedImages.homeTech,
          imageAlt: "مساحة عمل احترافية مع لابتوب وكود",
          points: [
            { title: "تصميم متجاوب", description: "أقسام مرتبة تظل نظيفة ومنظمة على الشاشات الصغيرة." },
            { title: "ألوان الهوية", description: "يبقى البنفسجي لونًا مميزًا بدلًا من أن يسيطر على كامل الواجهة." },
          ],
        },
        {
          eyebrow: "مجهود متكرر أقل",
          title: "نبني أتمتة ذكية تتولى الأعمال الروتينية حتى يركز فريقك على تنمية النشاط",
          description:
            "الرد على العملاء، والتذكيرات، ورسائل المتابعة، وفرز الطلبات، وتحديثات الفريق، وتحويل المهام يمكن أن تتم تلقائيًا بدلًا من أن تستهلك وقت الفريق كل يوم.",
          image: sharedImages.homeAi,
          imageAlt: "واجهة عمل مستقبلية للذكاء الاصطناعي",
          tags: ["ردود فورية", "متابعة تلقائية", "تحويل ذكي للمهام", "إدارة أقل يدويًا"],
        },
      ],
      gallery: {
        eyebrow: "الاتجاه البصري",
        title: "أكثر إشراقًا واحترافية وأسهل في كسب الثقة من النظرة الأولى",
        description: "الصور الداعمة الآن داخل بطاقات فاتحة حتى تبدو الصفحة عصرية بدون الخلفية السوداء الثقيلة.",
        images: [
          { src: sharedImages.officeOne, alt: "فريق استراتيجية رقمية يراجع خطة المشروع" },
          { src: sharedImages.officeTwo, alt: "لوحة تحليلات أعمال لدعم القرار" },
          { src: sharedImages.teamOne, alt: "فريق أعمال يناقش استراتيجية رقمية" },
        ],
      },
    },
    services: {
      hero: {
        eyebrow: "خدماتنا",
        title: "مواقع وأنظمة وأتمتة تخفف الضغط عن فريقك",
        description:
          "نساعد الشركات أن تظهر بشكل أقوى، وتعمل بسرعة أكبر، وتتوقف عن إهدار الوقت في الأعمال المتكررة التي يجب أن تتم تلقائيًا.",
        image: sharedImages.servicesHero,
        imageAlt: "فريق استراتيجية رقمية يتعاون حول لابتوب",
      },
      automationHighlight: {
        eyebrow: "دع الأتمتة تحمل الروتين",
        title: "نجعل الأعمال المتكررة تعمل وحدها حتى يبقى ذهنك متفرغًا للنمو والخدمة والأفكار الأفضل",
        description:
          "بدلًا من أن يرد الفريق يدويًا ويطارد العملاء وينقل البيانات بين الأدوات ويكرر نفس الخطوات كل يوم، نبني أتمتة تحرك هذه المهام في الخلفية.",
        note:
          "أنت تركز على العملاء والتنفيذ والاستراتيجية وتنمية النشاط، ونحن نجعل الأعمال المتكررة تتوقف عن استنزاف الانتباه.",
        chips: ["رد أسرع", "متابعة تلقائية", "تقليل الأعمال الإدارية", "استمرار سير العمل"],
        image: sharedImages.automationWorkflow,
        imageAlt: "لوحة تدفق عمل تعرض تقارير وأتمتة وأنشطة الفريق",
        points: [
          {
            title: "العميل الجديد يحصل على رد فورًا",
            description: "بمجرد أن يملأ العميل النموذج يمكن أن تصله رسالة واضحة وخطوة تالية قبل أن يفقد اهتمامه.",
          },
          {
            title: "المتابعة تتم بدون مطاردة",
            description: "يمكن إرسال التذكيرات ورسائل المتابعة وتحديثات الحالة تلقائيًا بدلًا من الاعتماد على التذكر.",
          },
          {
            title: "المهمة تصل للشخص المناسب",
            description: "يمكن فرز الطلبات وتحويلها للمبيعات أو التشغيل أو الدعم مع كل المعلومات المهمة مرفقة.",
          },
          {
            title: "الفريق يستعيد وقته",
            description: "أعمال نسخ المعلومات والمراجعات المتكررة تقل، ويزيد الوقت المخصص للبيع والتنفيذ والتفكير الإبداعي.",
          },
        ],
      },
      callAgentHighlight: {
        eyebrow: "وكيل مكالمات ذكي",
        title: "حوّل المكالمات الفائتة إلى عملاء جدد عبر وكيل ذكي يرد ويشرح الخدمة ويجمع بيانات العميل",
        description:
          "عندما يتصل العميل ويكون الفريق مشغولًا لا يجب أن تضيع الفرصة. نحن نبني وكلاء مكالمات بالذكاء الاصطناعي يردون فورًا، ويشرحون الخدمة بوضوح، ويجمعون البيانات المهمة، ثم يمررونها لفريقك.",
        note:
          "الهدف واضح: فرص ضائعة أقل، واستجابة أسرع، وانطباع أول أكثر احترافية مع كل مكالمة.",
        chips: ["يرد فورًا", "يشرح الخدمة", "يجمع بيانات العميل", "يقلل الفرص الضائعة"],
        image: sharedImages.serviceCallAgent,
        imageAlt: "واجهة وكيل مكالمات ذكي مع عناصر دعم صوتي",
        points: [
          {
            title: "المكالمات الفائتة لا تتحول إلى فرص ضائعة",
            description: "يتم الرد على المكالمة حتى عندما يكون الفريق غير متاح، فلا يترك العميل بدون استجابة.",
          },
          {
            title: "الخدمة تُشرح بشكل واضح",
            description: "يمكن للوكيل أن يجيب على الأسئلة الشائعة ويشرح الخدمة ويوجه المتصل إلى الخطوة التالية المناسبة.",
          },
          {
            title: "فريقك يستلم التفاصيل المهمة",
            description: "يتم جمع الاسم ورقم الهاتف واهتمام العميل وسياق المكالمة بشكل تلقائي.",
          },
          {
            title: "الانطباع يصبح أسرع وأكثر احترافية",
            description: "الرد السريع من أول مكالمة يجعل النشاط يبدو منظمًا وجاهزًا للتعامل الجاد.",
          },
        ],
      },
      services: [
        {
          title: "أتمتة الذكاء الاصطناعي",
          icon: "brain",
          description: "مثالية للأعمال التي تتكرر كل يوم: الرد على العملاء، والمتابعة، والتذكيرات، والتحويلات الداخلية، وتحديثات الإدارة.",
          image: sharedImages.serviceAi,
        },
        {
          title: "وكيل مكالمات ذكي",
          icon: "headset",
          description: "وكيل صوتي ذكي يرد على المكالمات، يشرح الخدمة، يجمع بيانات العميل، ويساعد على تحويل المكالمات الفائتة إلى عملاء جدد.",
          image: sharedImages.serviceCallAgent,
        },
        {
          title: "تطوير تطبيقات الموبايل",
          icon: "mobile",
          description: "تطبيقات موبايل للعملاء أو الفرق الداخلية بتجربة نظيفة وأداء قوي وإحساس منتج احترافي يليق بالعلامة.",
          image: sharedImages.serviceMobile,
        },
        {
          title: "بناء المواقع",
          icon: "globe",
          description: "مواقع تركز على التحويل مع اتجاه بصري قوي وأداء نظيف وتنفيذ أولويته الهاتف.",
          image: sharedImages.serviceWeb,
        },
        {
          title: "بناء الأنظمة",
          icon: "cogs",
          description: "منصات تشغيل مخصصة تجمع البيانات وتقلل العمل اليدوي وتدعم نمو الشركة.",
          image: sharedImages.serviceSystem,
        },
        {
          title: "نمذجة الذكاء الاصطناعي",
          icon: "database",
          description: "حلول تعلم آلي موجهة للتنبؤ والتصنيف ودعم اتخاذ القرار.",
          image: sharedImages.serviceModel,
        },
        {
          title: "خدمات تقنية المعلومات",
          icon: "code",
          description: "دعم موثوق للبنية التحتية والتدفقات والأنظمة التقنية اليومية.",
          image: sharedImages.serviceIt,
        },
      ],
      capabilitiesTitle: "مزيج خدمات مناسب للعلامات الحديثة والعمليات التشغيلية",
      capabilitiesDescription:
        "كل خدمة مصممة لتعمل مع الخدمات الأخرى حتى يبدو الموقع والنظام والأتمتة كمنظومة واحدة.",
      reasonsTitle: "لغة تصميم مشرقة ومعايير تنفيذ جادة",
      reasonsDescription: "الواجهة تبدو حديثة واحترافية لكن التركيز ما زال على السرعة والوضوح والقيمة العملية.",
      reasons: [
        { title: "تفكير قائم على الأعمال", description: "كل تنفيذ مرتبط بنتيجة حقيقية وليس مجرد شكل جميل." },
        { title: "تنفيذ احترافي", description: "واجهات نظيفة وتفاعل قوي وتنفيذ قابل للتطوير من اليوم الأول." },
        { title: "تقنية حديثة", description: "أدوات سريعة وهيكلة قابلة للتوسع وذكاء اصطناعي عملي عندما يكون مفيدًا." },
        { title: "تنفيذ متكامل", description: "استراتيجية وتصميم وتنفيذ وإطلاق وتطوير ضمن مسار واحد متناسق." },
      ],
    },
    portfolio: {
      hero: {
        eyebrow: "أعمال مختارة",
        title: "دراسات حالة عصرية بجودة بصرية أقوى وعرض أنظف",
        description: "تستخدم صفحة الأعمال صورًا أعلى جودة وتخطيطًا أكثر فخامة حتى يشعر الزائر بقيمة العمل قبل القراءة.",
      },
      projects: [
        {
          title: "موقع علامة فاخرة",
          category: "تصميم مواقع",
          description: "موقع تسويقي فاخر بتخطيطات تحريرية وصور غامرة وبنية تركز على التحويل.",
          image: sharedImages.portfolioOne,
          result: "تموضع احترافي",
        },
        {
          title: "مركز تشغيل وتحكم",
          category: "نظام داخلي",
          description: "بيئة لوحات تحكم تجمع بيانات الأعمال وسير المهام ومؤشرات الأداء في مكان واحد.",
          image: sharedImages.portfolioTwo,
          result: "قرارات أسرع",
        },
        {
          title: "تدفق تأهيل العملاء بالذكاء الاصطناعي",
          category: "أتمتة ذكية",
          description: "نظام تلقائي يفرز الطلبات الواردة ويوجه الفرص الحقيقية بسرعة.",
          image: sharedImages.portfolioThree,
          result: "عملاء أجود",
        },
        {
          title: "منصة مطعم حديثة",
          category: "تجربة حجوزات",
          description: "موقع بصري يجمع بين سرد الهوية والحجوزات أونلاين والتفاعل السلس على الهاتف.",
          image: sharedImages.portfolioFour,
          result: "حجوزات أقوى",
        },
        {
          title: "منصة تقارير تنفيذية",
          category: "ذكاء أعمال",
          description: "نظام تقارير نظيف يعرض التحليلات والبيانات المباشرة بصورة واضحة للإدارة.",
          image: sharedImages.portfolioFive,
          result: "إشراف أوضح",
        },
        {
          title: "رحلة تهيئة العملاء",
          category: "نظام أتمتة",
          description: "تدفق تهيئة منظم يشمل النماذج والموافقات والتنبيهات ومراحل التسليم.",
          image: sharedImages.portfolioSix,
          result: "انتقال أسلس",
        },
      ],
      cta: {
        eyebrow: "مشروعك القادم",
        title: "إذا كانت الصفحة الرئيسية هي النغمة فبقية الموقع تسير على نفس الاتجاه",
        description: "صفحة الأعمال الآن أكثر إشراقًا ونظافة واعتمادًا على الصور مع نفس الإيقاع الاحترافي للصفحة الرئيسية.",
        image: sharedImages.creativeOffice,
        imageAlt: "مكتب إبداعي احترافي",
      },
    },
    process: {
      hero: {
        eyebrow: "كيف نعمل",
        title: "عملية حديثة فيها هيكلة كافية للحفاظ على الجودة",
        description: "تعرض صفحة الخطوات نفس الثقة البصرية الموجودة في الصفحة الرئيسية مع توضيح مسار العمل من الاستراتيجية إلى التنفيذ.",
        image: sharedImages.processHero,
        imageAlt: "جلسة تخطيط للمشروع",
        cards: [
          { title: "وضوح", text: "أهداف متفق عليها قبل بدء التصميم." },
          { title: "سرعة", text: "مراحل مركزة مع أقل قدر من التشتت." },
          { title: "جودة", text: "قرارات التصميم والتنفيذ تظل مترابطة." },
        ],
      },
      stepsTitle: "مسار واضح من أول محادثة حتى الإطلاق النهائي",
      steps: [
        {
          num: "01",
          title: "الاكتشاف",
          description: "نفهم أهداف النشاط والجمهور واتجاه العلامة والمشكلة التشغيلية التي يجب أن يحلها المشروع.",
        },
        {
          num: "02",
          title: "التخطيط",
          description: "نحدد الهيكل والأولويات واتجاه التفاعل وأسرع طريق لإطلاق أول نسخة قوية.",
        },
        {
          num: "03",
          title: "التنفيذ",
          description: "ننفذ التصميم والواجهة والمنطق البرمجي والأتمتة مع تركيز على الوضوح وقابلية التطوير.",
        },
        {
          num: "04",
          title: "الإطلاق والدعم",
          description: "نطلق المشروع ونحسنه وندعمه حتى ينجح بعد التسليم وليس فقط يوم الإطلاق.",
        },
      ],
      cta: {
        eyebrow: "جاهز للبدء",
        title: "العملية الأفضل لا تهم إلا إذا قادت إلى نتيجة أقوى",
        description: "إذا أعجبك التفكير وراء الصفحة الرئيسية فستجد نفس الاتجاه حاضرًا في مسار العمل والتنفيذ.",
        image: sharedImages.processCta,
        imageAlt: "مساحة عمل احترافية بسيطة",
      },
    },
    contact: {
      hero: {
        eyebrow: "تواصل معنا",
        title: "صفحة التواصل بنفس الطابع الاحترافي للصفحة الرئيسية",
        description: "خيارات تواصل أوضح وطبقات أخف وتسلسل بصري أفضل وتجربة متناسقة مع بقية الموقع.",
        image: sharedImages.contactHero,
        imageAlt: "فريق يتعاون حول طاولة",
      },
      whyTitle: "مواقع وأنظمة وتخطيط أتمتة في محادثة واحدة",
      reasons: [
        "توصية واضحة حسب المرحلة الحالية لنشاطك",
        "نصيحة عملية حول أسرع خطوة ذات أثر قوي",
        "اتجاه رقمي احترافي يظل واقعيًا في التنفيذ",
      ],
      cta: {
        eyebrow: "تواصل المشروع",
        title: "لنصنع شيئًا قويًا ومفيدًا",
        description: "إذا أعجبك الاتجاه البصري في الصفحة الرئيسية فستجد تجربة التواصل تسير على نفس الفكرة: أخف وأنظف وأكثر احترافية.",
        image: sharedImages.contactCta,
        imageAlt: "مكتب داخلي احترافي",
      },
    },
  },
};
