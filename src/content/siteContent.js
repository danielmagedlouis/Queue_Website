const sharedImages = {
  homeTech: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  homeAi: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1400&q=80",
  officeOne: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  officeTwo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  teamOne: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  servicesHero: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  serviceAi: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  serviceWeb: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  serviceSystem: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  serviceModel: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  serviceIt: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
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
      shortTagline: "Digital systems for ambitious businesses",
      description:
        "Queue Solutions helps businesses look more credible online, run more smoothly behind the scenes, and remove repetitive work with practical automation.",
    },
    ui: {
      startProject: "Start Your Project",
      contactUs: "Contact Us",
      viewPortfolio: "See Our Work",
      ourServices: "Explore Services",
      discussService: "Talk About This Service",
      beginProject: "Start the Process",
      languageToggle: "العربية",
      languageToggleMobile: "Arabic (Egypt)",
      footerNavigate: "Navigate",
      footerConnect: "Connect",
      modal: {
        eyebrow: "Project Inquiry",
        title: "Tell us what you need help with",
        description:
          "Tell us what your business does, what is slowing you down, and what you want this project to improve.",
        name: "Your name",
        email: "Email",
        phone: "Phone number",
        idea: "Project idea",
        cancel: "Cancel",
        submit: "Send Details",
        success: "Thank you. Your inquiry has been sent successfully.",
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
    },
    home: {
      heroBadge: "For businesses that want a stronger digital presence and smoother operations",
      heroTitleTop: "Built for businesses that need",
      heroTitleAccent: "Queue Solutions",
      heroDescription:
        "We design the parts your customers see and the systems your team relies on, so the business feels sharper, quicker, and easier to run.",
      heroCards: [
        { title: "Sales Websites", description: "Clear, polished websites that build trust and turn interest into real inquiries." },
        { title: "Internal Systems", description: "Simple dashboards and tools that help teams stay aligned and work with less friction." },
        { title: "Smart Automation", description: "Useful AI and workflow automation that save time without adding complexity." },
      ],
      sections: [
        {
          eyebrow: "Built for trust",
          title: "A website that makes the right impression before the first call",
          description:
            "Clean structure, stronger messaging, and polished visuals help people understand what you do and why they should take you seriously.",
          image: sharedImages.homeTech,
          imageAlt: "Premium workspace with laptop and code",
          points: [
            { title: "Clear messaging", description: "Visitors quickly understand the offer, the value, and the next step." },
            { title: "Mobile polish", description: "The experience stays clean, readable, and well paced on smaller screens." },
          ],
        },
        {
          eyebrow: "Built for operations",
          title: "Automation that takes repetitive work off your team",
          description:
            "We connect forms, follow-up, reporting, approvals, and internal handoffs so work keeps moving without constant manual chasing.",
          image: sharedImages.homeAi,
          imageAlt: "Futuristic AI workflow screen",
          tags: ["Lead capture", "Follow-up flows", "Internal reporting", "Task routing"],
        },
      ],
      gallery: {
        eyebrow: "How It Should Feel",
        title: "Professional, current, and easy to trust",
        description:
          "Every section is designed to make the company feel organized, capable, and ready for serious work.",
        images: [
          { src: sharedImages.officeOne, alt: "Software team working across laptops in a product session" },
          { src: sharedImages.officeTwo, alt: "Business intelligence dashboard with charts and metrics" },
          { src: sharedImages.teamOne, alt: "Engineering team collaborating on software delivery" },
        ],
      },
    },
    services: {
      hero: {
        eyebrow: "Our Services",
        title: "The core digital services businesses need before they scale",
        description:
          "We help companies improve how they present themselves, how their teams work, and how repetitive tasks get handled.",
        stats: [
          { value: "5", label: "core services" },
          { value: "Clear", label: "business focus" },
          { value: "Built", label: "to last" },
        ],
        image: sharedImages.servicesHero,
        imageAlt: "Digital strategy team collaborating around a laptop",
      },
      services: [
        {
          title: "AI Automations",
          icon: "brain",
          description:
            "We automate lead capture, follow-up, status updates, and repetitive handoffs so work moves without manual chasing.",
          image: sharedImages.serviceAi,
        },
        {
          title: "Website Building",
          icon: "globe",
          description:
            "We build websites that feel credible, load cleanly, and help visitors understand the value quickly.",
          image: sharedImages.serviceWeb,
        },
        {
          title: "System Building",
          icon: "cogs",
          description:
            "We create internal tools and dashboards that give your team one clear place to track work, data, and decisions.",
          image: sharedImages.serviceSystem,
        },
        {
          title: "AI Modeling",
          icon: "database",
          description:
            "When the problem needs prediction or classification, we build focused AI models around a real business use case.",
          image: sharedImages.serviceModel,
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
      capabilitiesDescription:
        "The website, the workflow, and the internal system should feel like parts of the same business, not separate projects.",
      reasonsTitle: "Why businesses choose Queue",
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
        title: "A clearer look at the kind of work we help businesses launch",
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
        description:
          "The goal is not to make things look expensive. The goal is to make the business feel clear, credible, and well run.",
        image: sharedImages.creativeOffice,
        imageAlt: "Digital strategy team discussing a project",
      },
    },
    process: {
      hero: {
        eyebrow: "How We Work",
        title: "A straightforward process that keeps momentum without losing quality",
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
        description:
          "If you need a better website, a clearer internal system, or smarter automation, send the details and we will come back with the right next step.",
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
      modal: {
        eyebrow: "ابدأ مشروعك",
        title: "احك لنا ما الذي تريد بناءه",
        description: "شاركنا الفكرة والهدف التجاري وكل ما يساعدنا على فهم المشروع بشكل أفضل.",
        name: "اسمك",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        idea: "فكرة المشروع",
        cancel: "إلغاء",
        submit: "إرسال الطلب",
        success: "شكرًا لك. تم إرسال طلبك بنجاح.",
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
      heroTitleTop: "حلول مصممة للشركات التي تحتاج إلى",
      heroTitleAccent: "Queue Solutions",
      heroDescription:
        "نصمم تجارب رقمية أنيقة وأنظمة داخلية وأتمتة بالذكاء الاصطناعي تجعل نشاطك أكثر قوة وسرعة.",
      heroCards: [
        { title: "المواقع", description: "صفحات سريعة واحترافية تبدو قوية على الكمبيوتر والهاتف." },
        { title: "الأنظمة", description: "لوحات تحكم وأدوات أعمال تقلل العمل اليدوي وتزيد الوضوح." },
        { title: "الأتمتة", description: "تدفقات عملية تساعد فريقك على التحرك بشكل أسرع." },
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
          eyebrow: "أتمتة ذكية بالذكاء الاصطناعي",
          title: "أنظمة تدعم النشاط وليس فقط لحظة الإطلاق",
          description:
            "من استقبال الطلبات إلى التدفقات الداخلية، نبني طبقات أتمتة تقلل التكرار وتمنح الفريق سرعة وثقة أعلى.",
          image: sharedImages.homeAi,
          imageAlt: "واجهة عمل مستقبلية للذكاء الاصطناعي",
          tags: ["استقبال العملاء", "متابعة العملاء", "لوحات تحكم داخلية", "أتمتة العمليات"],
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
        title: "أنظمة رقمية احترافية تدفع النشاط إلى الأمام",
        description:
          "نبني الواجهة الرقمية والأنظمة الداخلية وطبقات الأتمتة التي تساعد الشركات على العمل بوضوح وسرعة أكبر.",
        stats: [
          { value: "+5", label: "مجالات خدمة أساسية" },
          { value: "سريع", label: "تنفيذ مركز" },
          { value: "راقي", label: "جودة التصميم" },
        ],
        image: sharedImages.servicesHero,
        imageAlt: "فريق استراتيجية رقمية يتعاون حول لابتوب",
      },
      services: [
        {
          title: "أتمتة الذكاء الاصطناعي",
          icon: "brain",
          description: "تدفقات ذكية لفرز الطلبات ومتابعة العملاء والمهام الداخلية والعمليات المتكررة.",
          image: sharedImages.serviceAi,
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
