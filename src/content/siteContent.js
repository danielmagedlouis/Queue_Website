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
      tagline: "Websites, Systems, and AI Automations",
      shortTagline: "Web, systems, and AI for modern brands",
      description:
        "Queue Solutions designs premium websites, internal systems, and AI automations for businesses that want a cleaner digital presence and stronger operations.",
    },
    ui: {
      startProject: "Start Project",
      contactUs: "Contact Us",
      viewPortfolio: "View Portfolio",
      ourServices: "Our Services",
      discussService: "Discuss This Service",
      beginProject: "Begin Your Project",
      languageToggle: "العربية",
      languageToggleMobile: "Arabic (Egypt)",
      footerNavigate: "Navigate",
      footerConnect: "Connect",
      modal: {
        eyebrow: "Start Your Project",
        title: "Tell us what you want to build",
        description:
          "Share the idea, the business goal, and anything else that helps us understand the project.",
        name: "Your name",
        email: "Email",
        phone: "Phone number",
        idea: "Project idea",
        cancel: "Cancel",
        submit: "Send Inquiry",
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
        emailAction: "We reply after you submit the form",
        formTitle: "Start with the form",
        formBody: "Share the main project details and we will contact you directly.",
        formAction: "Open project form",
      },
      contactWhy: "Why Reach Out",
      processSteps: "Process Steps",
      capabilities: "Capabilities",
      whyQueue: "Why Queue Solutions",
      nextProject: "Next Project",
      readyToBegin: "Ready To Begin",
      getInTouch: "Get In Touch",
    },
    home: {
      heroBadge: "Modern websites, systems, and AI workflows for growing businesses",
      heroTitleTop: "Built for brands that need",
      heroTitleAccent: "Queue Solutions",
      heroDescription:
        "We design clean digital experiences, internal systems, and AI automations that make your business look sharper and run faster.",
      heroCards: [
        { title: "Websites", description: "Fast, polished pages that look premium on desktop and mobile." },
        { title: "Systems", description: "Dashboards and business tools that reduce manual work." },
        { title: "AI Automations", description: "Practical workflows that help your team move quicker." },
      ],
      sections: [
        {
          eyebrow: "Powerful Web Technology",
          title: "A cleaner visual style without losing the modern feel",
          description:
            "The homepage leans into a bright studio look with white surfaces, softer depth, and stronger typography while still keeping the brand edge.",
          image: sharedImages.homeTech,
          imageAlt: "Premium workspace with laptop and code",
          points: [
            { title: "Responsive layout", description: "Structured sections that stay clean on smaller screens." },
            { title: "Brand accents", description: "Purple stays as the accent instead of carrying the entire theme." },
          ],
        },
        {
          eyebrow: "Smart AI Automations",
          title: "Systems that support the business, not just the launch",
          description:
            "From inquiry capture to internal workflows, we build automation layers that remove repetitive tasks and help teams move with more confidence.",
          image: sharedImages.homeAi,
          imageAlt: "Futuristic AI workflow screen",
          tags: ["Lead capture", "Client follow-up", "Internal dashboards", "Process automation"],
        },
      ],
      gallery: {
        eyebrow: "Visual Direction",
        title: "Brighter, more premium, and easier to trust at first glance",
        description:
          "The supporting imagery now sits on light cards so the page feels modern without the heavy black backdrop.",
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
        title: "Premium digital systems designed to move the business forward",
        description:
          "We build the front-end presence, internal systems, and automation layers that help companies operate with more clarity and speed.",
        stats: [
          { value: "5+", label: "Core service areas" },
          { value: "Fast", label: "Delivery focused" },
          { value: "Clean", label: "Design quality" },
        ],
        image: sharedImages.servicesHero,
        imageAlt: "Digital strategy team collaborating around a laptop",
      },
      services: [
        {
          title: "AI Automations",
          icon: "brain",
          description:
            "Intelligent workflows for lead routing, client follow-up, internal tasks, and repetitive business operations.",
          image: sharedImages.serviceAi,
        },
        {
          title: "Website Building",
          icon: "globe",
          description:
            "Conversion-focused websites with strong visual direction, clean performance, and mobile-first execution.",
          image: sharedImages.serviceWeb,
        },
        {
          title: "System Building",
          icon: "cogs",
          description:
            "Custom operational platforms that centralize data, reduce manual work, and support business growth.",
          image: sharedImages.serviceSystem,
        },
        {
          title: "AI Modeling",
          icon: "database",
          description:
            "Targeted machine learning implementations for forecasting, classification, and decision support.",
          image: sharedImages.serviceModel,
        },
        {
          title: "IT Services",
          icon: "code",
          description:
            "Reliable support for infrastructure, workflows, and the technical systems behind day-to-day delivery.",
          image: sharedImages.serviceIt,
        },
      ],
      capabilitiesTitle: "A service mix built for modern brands and operations",
      capabilitiesDescription:
        "Each offer is designed to work with the others, so the website, the system, and the workflow automation all feel connected.",
      reasonsTitle: "Bright design language, serious delivery standards",
      reasonsDescription:
        "The visual system stays premium and modern, but the work is still focused on speed, clarity, and measurable business value.",
      reasons: [
        {
          title: "Business-Driven Thinking",
          description: "Every build is tied to a business outcome, not just visual polish or technical novelty.",
        },
        {
          title: "Premium Execution",
          description: "Clean interfaces, strong interaction design, and maintainable implementation from day one.",
        },
        {
          title: "Modern Technology",
          description: "Fast tools, scalable architecture, and practical AI used where it creates real leverage.",
        },
        {
          title: "End-to-End Delivery",
          description: "Strategy, design, implementation, launch, and iteration handled in one consistent process.",
        },
      ],
    },
    portfolio: {
      hero: {
        eyebrow: "Featured Work",
        title: "Modern case studies with stronger visual quality and cleaner presentation",
        description:
          "The portfolio uses higher-quality imagery and a more premium layout so the work feels polished before the user even reads the details.",
      },
      projects: [
        {
          title: "Luxury Brand Website",
          category: "Website Design",
          description:
            "A high-end marketing site with editorial layouts, immersive visuals, and a conversion-focused structure.",
          image: sharedImages.portfolioOne,
          result: "Premium positioning",
        },
        {
          title: "Operations Control Center",
          category: "Internal System",
          description: "A dashboard environment that centralizes business data, task flow, and performance visibility.",
          image: sharedImages.portfolioTwo,
          result: "Faster decisions",
        },
        {
          title: "AI Lead Qualification Flow",
          category: "AI Automation",
          description:
            "An automated qualification pipeline that filters inbound requests and routes real opportunities instantly.",
          image: sharedImages.portfolioThree,
          result: "Higher-quality leads",
        },
        {
          title: "Modern Restaurant Platform",
          category: "Booking Experience",
          description:
            "A visual-first website combining brand storytelling, online reservations, and mobile-native interactions.",
          image: sharedImages.portfolioFour,
          result: "Stronger bookings",
        },
        {
          title: "Executive Reporting Suite",
          category: "Business Intelligence",
          description:
            "A clean reporting system with digestible analytics, live data snapshots, and monthly decision support.",
          image: sharedImages.portfolioFive,
          result: "Clearer oversight",
        },
        {
          title: "Client Onboarding Journey",
          category: "Automation System",
          description:
            "A structured onboarding workflow with form capture, approvals, notifications, and delivery milestones.",
          image: sharedImages.portfolioSix,
          result: "Smoother handoff",
        },
      ],
      cta: {
        eyebrow: "Next Project",
        title: "If the home page is the tone, the rest of the site now follows it",
        description:
          "The portfolio is brighter, cleaner, and more image-led, with the same premium rhythm used on the homepage.",
        image: sharedImages.creativeOffice,
        imageAlt: "Digital strategy team discussing a project",
      },
    },
    process: {
      hero: {
        eyebrow: "How We Work",
        title: "A modern process with enough structure to keep quality high",
        description:
          "The process page matches the visual confidence of the homepage while showing how the work moves from strategy to delivery in a clean, premium way.",
        image: sharedImages.processHero,
        imageAlt: "Project planning session",
        cards: [
          { title: "Clarity", text: "Aligned goals before design starts." },
          { title: "Speed", text: "Focused phases with less drift." },
          { title: "Quality", text: "Design and build decisions stay connected." },
        ],
      },
      stepsTitle: "A clear path from first conversation to finished launch",
      steps: [
        {
          num: "01",
          title: "Discovery",
          description:
            "We map business goals, audience expectations, brand direction, and the operational problem the build needs to solve.",
        },
        {
          num: "02",
          title: "Planning",
          description:
            "We define structure, priorities, interaction direction, and the fastest route to a polished first release.",
        },
        {
          num: "03",
          title: "Development",
          description:
            "Design, front-end build, system logic, and automation are implemented with a focus on clarity and maintainability.",
        },
        {
          num: "04",
          title: "Launch and Support",
          description:
            "We ship, refine, and support the solution so the project performs well after the handoff, not just on launch day.",
        },
      ],
      cta: {
        eyebrow: "Ready To Begin",
        title: "A sharper process only matters if it leads to a stronger result",
        description:
          "If you like the thinking behind the homepage, the same direction now carries across the process and delivery story as well.",
        image: sharedImages.processCta,
        imageAlt: "Product team planning a technical rollout",
      },
    },
    contact: {
      hero: {
        eyebrow: "Get In Touch",
        title: "Contact page rebuilt in the same premium style as the homepage",
        description:
          "Clear contact options, lighter surfaces, better hierarchy, and a modern visual treatment that feels consistent with the rest of the site.",
        image: sharedImages.contactHero,
        imageAlt: "Team collaboration around a table",
      },
      whyTitle: "Websites, systems, and automation planning in one conversation",
      reasons: [
        "A clear recommendation based on your current stage",
        "Practical advice on the fastest high-impact first step",
        "A premium digital direction that stays realistic to build",
      ],
      cta: {
        eyebrow: "Project Contact",
        title: "Let's create something sharp and useful",
        description:
          "If you like the visual direction of the home page, the contact experience follows the same thinking: lighter, cleaner, and more premium.",
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
      heroTitleTop: "حلول مصممة للعلامات التي تحتاج إلى",
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
