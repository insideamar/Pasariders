const dictionary = [
  // Nav
  { selector: ".nav__menu li:nth-child(1) .nav__link", en: "Home", ne: "गृहपृष्ठ" },
  { selector: ".nav__menu li:nth-child(2) .nav__link", en: "About", ne: "हाम्रो बारेमा" },
  { selector: ".nav__menu li:nth-child(3) .nav__link", en: "Services", ne: "सेवाहरू" },
  { selector: ".nav__menu li:nth-child(4) .nav__link", en: "How It Works", ne: "कसरी काम गर्छ" },
  { selector: ".nav__menu li:nth-child(5) .nav__link", en: "Contact", ne: "सम्पर्क" },

  // Hero
  { selector: ".hero__badge", en: "<span class=\"badge-dot\" aria-hidden=\"true\"></span>Now Open · Kathmandu Valley", ne: "<span class=\"badge-dot\" aria-hidden=\"true\"></span>अब खुला छ · काठमाडौं उपत्यका" },
  { selector: ".hero__headline", en: "Ride More,<br /><span class=\"highlight\">Earn More!</span>", ne: "धेरै चलाउनुहोस्,<br /><span class=\"highlight\">धेरै कमाउनुहोस्!</span>" },
  { selector: ".hero__sub", en: "Rent a motorcycle for just <strong>Rs.700/day</strong> — perfect for Pathao, Yango &amp; InDrive riders.<br class=\"hide-mobile\" /> Insurance included. Start earning from <strong>Day 1.</strong>", ne: "मात्र <strong>रू.७००/दिन</strong> मा मोटरसाइकल भाडामा लिनुहोस् — पठाओ, याङ्गो र इनड्राइभ राइडरहरूका लागि उत्तम।<br class=\"hide-mobile\" /> बीमा समावेश छ। <strong>पहिलो दिन</strong> बाटै कमाउन सुरु गर्नुहोस्।" },
  { selector: ".hero__actions .btn--primary", en: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M5 12h14M12 5l7 7-7 7\" /></svg> Book Now", ne: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M5 12h14M12 5l7 7-7 7\" /></svg> अहिले बुक गर्नुहोस्" },
  { selector: ".hero__actions .btn--whatsapp", en: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"20\" height=\"20\" aria-hidden=\"true\"><path d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z\" /></svg>\n            WhatsApp Us", ne: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"20\" height=\"20\" aria-hidden=\"true\"><path d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z\" /></svg>\n            हामीलाई ह्वाट्सएप गर्नुहोस्" },
  { selector: ".hero__scroll-hint span", en: "Scroll to explore", ne: "अन्वेषण गर्न तल स्क्रोल गर्नुहोस्" },

  // Stats Bar
  { selector: ".stat-item:nth-child(1) .stat-item__label", en: "Daily Rental Rate", ne: "दैनिक भाडा दर" },
  { selector: ".stat-item:nth-child(3) .stat-item__label", en: "Start Earning", ne: "कमाउन सुरु गर्नुहोस्" },
  { selector: ".stat-item:nth-child(3) .stat-item__value", en: "Day 1", ne: "पहिलो दिन" },
  { selector: ".stat-item:nth-child(5) .stat-item__value", en: "3 Cities", ne: "३ शहरहरू" },
  { selector: ".stat-item:nth-child(5) .stat-item__label", en: "Kathmandu · Bhaktapur · Lalitpur", ne: "काठमाडौं · भक्तपुर · ललितपुर" },
  { selector: ".stat-item:nth-child(7) .stat-item__value", en: "Insured", ne: "बीमा गरिएको" },
  { selector: ".stat-item:nth-child(7) .stat-item__label", en: "Health &amp; Safety Covered", ne: "स्वास्थ्य र सुरक्षा कभर गरिएको" },

  // How it works
  { selector: "#how-it-works .section-tag", en: "Simple Process", ne: "सरल प्रक्रिया" },
  { selector: "#how-it-works .section-title", en: "How It <span class=\"highlight\">Works</span>", ne: "कसरी <span class=\"highlight\">काम गर्छ</span>" },
  { selector: "#how-it-works .section-desc", en: "Get on the road and earning in just 4 easy steps", ne: "४ सजिलो चरणहरूमा सडकमा निस्कनुहोस् र कमाउनुहोस्" },
  
  { selector: ".step-card:nth-child(1) .step-card__title", en: "Register", ne: "दर्ता गर्नुहोस्" },
  { selector: ".step-card:nth-child(1) .step-card__desc", en: "Fill our quick inquiry form or WhatsApp us with your details and preferred area.", ne: "हाम्रो छोटो फारम भर्नुहोस् वा तपाईंको विवरण र मनपर्ने क्षेत्रको साथ हामीलाई ह्वाट्सएप गर्नुहोस्।" },
  
  { selector: ".step-card:nth-child(2) .step-card__title", en: "Choose Bike", ne: "बाइक छान्नुहोस्" },
  { selector: ".step-card:nth-child(2) .step-card__desc", en: "Select from our fleet of well-maintained motorcycles suited for city delivery work.", ne: "हाम्रो राम्रोसँग मर्मत गरिएका मोटरसाइकलहरू मध्येबाट छान्नुहोस् जुन शहरको डेलिभरी कामको लागि उपयुक्त छ।" },

  { selector: ".step-card:nth-child(3) .step-card__title", en: "Pay Rs.700/day", ne: "रू.७००/दिन तिर्नुहोस्" },
  { selector: ".step-card:nth-child(3) .step-card__desc", en: "Simple daily rate — no hidden fees. Pay daily or in advance as per your convenience.", ne: "सरल दैनिक दर — कुनै लुकेका शुल्कहरू छैनन्। तपाईंको सुविधा अनुसार दैनिक वा अग्रिम भुक्तानी गर्नुहोस्।" },

  { selector: ".step-card:nth-child(4) .step-card__title", en: "Start Earning", ne: "कमाउन सुरु गर्नुहोस्" },
  { selector: ".step-card:nth-child(4) .step-card__desc", en: "Hit the road on Pathao, Yango or InDrive and start earning from your very first day!", ne: "पठाओ, याङ्गो वा इनड्राइभमा सडकमा निस्कनुहोस् र तपाईंको पहिलो दिनबाटै कमाउन सुरु गर्नुहोस्!" },

  // Services
  { selector: "#services .section-tag", en: "What We Offer", ne: "हामी के प्रस्ताव गर्छौं" },
  { selector: "#services .section-title", en: "Our <span class=\"highlight\">Services</span>", ne: "हाम्रा <span class=\"highlight\">सेवाहरू</span>" },
  { selector: "#services .section-desc", en: "Everything you need to ride and earn in Kathmandu Valley", ne: "तपाईंलाई काठमाडौं उपत्यकामा सवारी गर्न र कमाउन आवश्यक पर्ने सबै कुरा" },

  { selector: ".service-card:nth-child(1) .service-card__title", en: "Bike Rental for Delivery", ne: "डेलिभरीको लागि बाइक भाडा" },
  { selector: ".service-card:nth-child(1) .service-card__desc", en: "Premium motorcycles available at Rs.700/day, perfectly maintained for long-hour delivery work across Kathmandu Valley.", ne: "रू.७००/दिनमा प्रिमियम मोटरसाइकलहरू उपलब्ध छन्, जुन काठमाडौं उपत्यका भरि लामो समयसम्म डेलिभरी कामको लागि पूर्ण रूपमा मर्मत गरिएको छ।" },
  
  { selector: ".service-card:nth-child(2) .service-card__title", en: "Courier Service Partnership", ne: "कुरियर सेवा साझेदारी" },
  { selector: ".service-card:nth-child(2) .service-card__desc", en: "Partner with leading courier networks. Our bikes are licensed, insured and ready for same-day delivery operations.", ne: "अग्रणी कुरियर नेटवर्कहरूसँग साझेदारी गर्नुहोस्। हाम्रा बाइकहरू लाइसेन्स प्राप्त, बीमा गरिएका र सोही दिन डेलिभरी सञ्चालनका लागि तयार छन्।" },

  { selector: ".service-card:nth-child(3) .service-card__title", en: "Ride-hailing Bike Access", ne: "राइड-हेलिङ बाइक पहुँच" },
  { selector: ".service-card:nth-child(3) .service-card__desc", en: "Ride for Pathao, Yango, or InDrive using our bikes. We handle the vehicle — you focus on earning.", ne: "हाम्रो बाइकहरू प्रयोग गरेर पठाओ, याङ्गो वा इनड्राइभको लागि सवारी गर्नुहोस्। हामी गाडी सम्हाल्छौं — तपाईं कमाउनमा ध्यान दिनुहोस्।" },

  { selector: ".service-card:nth-child(4) .service-card__title", en: "Insurance Coverage", ne: "बीमा कभरेज" },
  { selector: ".service-card:nth-child(4) .service-card__desc", en: "Health &amp; safety insurance included in your daily rate. Ride with total peace of mind — we've got you covered.", ne: "तपाईंको दैनिक दरमा स्वास्थ्य र सुरक्षा बीमा समावेश छ। पूर्ण शान्तिको साथ सवारी गर्नुहोस् — हामीले तपाईंलाई सुरक्षित गरेका छौं।" },
  { selector: ".service-card:nth-child(4) .service-card__badge", en: "Fully Insured", ne: "पूर्ण बीमा गरिएको" },

  // Why Us
  { selector: "#why-us .section-tag", en: "Our Advantages", ne: "हाम्रा फाइदाहरू" },
  { selector: "#why-us .section-title", en: "Why Choose <span class=\"highlight\">Pasa Riders?</span>", ne: "किन <span class=\"highlight\">पासा राइडर्स</span> छान्ने?" },
  { selector: "#why-us .section-desc", en: "We make it easy and profitable for riders across the valley", ne: "हामी उपत्यका भरिका राइडरहरूका लागि यसलाई सजिलो र लाभदायक बनाउँछौं" },

  { selector: ".why-card:nth-child(1) .why-card__title", en: "Low Daily Rate", ne: "कम दैनिक दर" },
  { selector: ".why-card:nth-child(1) .why-card__desc", en: "Just Rs.700/day — one of the lowest motorcycle rental rates in Kathmandu. Maximize your daily take-home.", ne: "मात्र रू.७००/दिन — काठमाडौंमा सबैभन्दा कम मोटरसाइकल भाडा दरहरू मध्ये एक। तपाईंको दैनिक कमाई बढाउनुहोस्।" },

  { selector: ".why-card:nth-child(2) .why-card__title", en: "Earn from Day 1", ne: "पहिलो दिनबाटै कमाउनुहोस्" },
  { selector: ".why-card:nth-child(2) .why-card__desc", en: "No waiting period. Sign up, pick your bike, and hit the road earning on the very same day.", ne: "कुनै प्रतीक्षा अवधि छैन। साइन अप गर्नुहोस्, आफ्नो बाइक लिनुहोस्, र सोही दिनबाटै कमाउन सुरु गर्नुहोस्।" },

  { selector: ".why-card:nth-child(3) .why-card__title", en: "High Mileage Bikes", ne: "उच्च माइलेज भएका बाइकहरू" },
  { selector: ".why-card:nth-child(3) .why-card__desc", en: "Our fleet is built for long-hour operation — fuel-efficient, well-maintained, and serviced regularly.", ne: "हाम्रो फ्लिट लामो समयसम्म सञ्चालनको लागि बनाइएको छ — इन्धन-कुशल, राम्रोसँग मर्मत गरिएको, र नियमित रूपमा सर्भिसिङ गरिएको छ।" },

  { selector: ".why-card:nth-child(4) .why-card__title", en: "Insurance Included", ne: "बीमा समावेश छ" },
  { selector: ".why-card:nth-child(4) .why-card__desc", en: "Health and safety insurance is baked into your Rs.700/day rate. No extra costs, no surprises.", ne: "तपाईंको रू.७००/दिनको दरमा स्वास्थ्य र सुरक्षा बीमा समावेश छ। कुनै अतिरिक्त लागत छैन, कुनै आश्चर्य छैन।" },

  { selector: ".why-card:nth-child(5) .why-card__title", en: "Full Valley Coverage", ne: "पूर्ण उपत्यका कभरेज" },
  { selector: ".why-card:nth-child(5) .why-card__desc", en: "Operate freely across Kathmandu, Bhaktapur, and Lalitpur — the entire valley is your earning zone.", ne: "काठमाडौं, भक्तपुर, र ललितपुर भर स्वतन्त्र रूपमा सञ्चालन गर्नुहोस् — सम्पूर्ण उपत्यका तपाईंको कमाई क्षेत्र हो।" },

  { selector: ".why-card:nth-child(6) .why-card__title", en: "Easy Registration", ne: "सजिलो दर्ता" },
  { selector: ".why-card:nth-child(6) .why-card__desc", en: "Simple onboarding process. Just your driving licence and a basic form — no complicated paperwork.", ne: "सरल अनबोर्डिङ प्रक्रिया। केवल तपाईंको ड्राइभिङ लाइसेन्स र एक आधारभूत फारम — कुनै जटिल कागजी कार्य छैन।" },

  // About
  { selector: "#about .section-tag", en: "Our Story", ne: "हाम्रो कथा" },
  { selector: "#about .section-title", en: "About <span class=\"highlight\">Pasa Riders Nepal</span>", ne: "<span class=\"highlight\">पासा राइडर्स नेपाल</span> को बारेमा" },
  { selector: ".about__text:nth-of-type(1)", en: "Founded in June 2026, <strong>Pasa Riders Nepal Pvt. Ltd.</strong> was born from a simple vision:\n            to make motorcycle rental accessible, affordable, and profitable for everyday riders across Kathmandu\n            Valley.", ne: "जुन २०२६ मा स्थापित, <strong>पासा राइडर्स नेपाल प्रालि</strong> एउटा साधारण दृष्टिकोणबाट जन्मिएको थियो: काठमाडौं उपत्यका भरिका दैनिक राइडरहरूका लागि मोटरसाइकल भाडा पहुँचयोग्य, सस्तो र लाभदायक बनाउने।" },
  { selector: ".about__text:nth-of-type(2)", en: "We understand the hustle — platform riders on Pathao, Yango, and InDrive need reliable, insured bikes\n            without the burden of ownership costs. That's exactly what we provide.", ne: "हामी संघर्ष बुझ्छौं — पठाओ, याङ्गो, र इनड्राइभका राइडरहरूलाई स्वामित्व लागतको बोझ बिना भरपर्दो, बीमा गरिएका बाइकहरू चाहिन्छ। हामी ठ्याक्कै त्यही प्रदान गर्छौं।" },
  { selector: ".about__owner-role", en: "Founder &amp; Owner", ne: "संस्थापक र मालिक" },
  { selector: ".about__badge-text", en: "Established", ne: "स्थापित" },
  
  // Certifications
  { selector: "#certifications .section-tag", en: "Verified &amp; Trusted", ne: "प्रमाणित र भरपर्दो" },
  { selector: "#certifications .section-title", en: "Our <span class=\"highlight\">Certifications</span>", ne: "हाम्रा <span class=\"highlight\">प्रमाणपत्रहरू</span>" },
  { selector: "#certifications .section-desc", en: "Fully registered and compliant with Nepal Government regulations", ne: "नेपाल सरकारको नियम अनुसार पूर्ण रूपमा दर्ता र पालना गरिएको छ" },
  
  { selector: ".cert-card:nth-child(1) .cert-card__title", en: "Company Registration", ne: "कम्पनी दर्ता" },
  { selector: ".cert-card:nth-child(1) .cert-card__desc", en: "Registered with the Office of Company Registrar, Government of Nepal", ne: "नेपाल सरकारको कम्पनी रजिस्ट्रारको कार्यालयमा दर्ता भएको छ" },
  
  { selector: ".cert-card:nth-child(2) .cert-card__title", en: "PAN Registration", ne: "प्यान दर्ता" },
  { selector: ".cert-card:nth-child(2) .cert-card__desc", en: "Permanent Account Number issued by the Inland Revenue Department, Nepal", ne: "आन्तरिक राजस्व विभाग, नेपाल द्वारा जारी स्थायी लेखा नम्बर" },

  { selector: ".cert-card:nth-child(3) .cert-card__title", en: "Ministry Registered", ne: "मन्त्रालय दर्ता" },
  { selector: ".cert-card:nth-child(3) .cert-card__desc", en: "Registered under Ministry of Industry, Commerce &amp; Supplies, Nepal", ne: "उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय, नेपाल अन्तर्गत दर्ता भएको छ" },

  { selector: ".cert-card:nth-child(4) .cert-card__title", en: "Incorporation Date", ne: "स्थापना मिति" },
  { selector: ".cert-card:nth-child(4) .cert-card__desc", en: "Incorporated under the Companies Act 2006 of Nepal", ne: "नेपालको कम्पनी ऐन २००६ अन्तर्गत स्थापित" },

  // FAQ
  { selector: "#faq .section-tag", en: "Got Questions?", ne: "प्रश्नहरू छन्?" },
  { selector: "#faq .section-title", en: "Frequently Asked <span class=\"highlight\">Questions</span>", ne: "बारम्बार सोधिने <span class=\"highlight\">प्रश्नहरू</span>" },
  { selector: "#faq .section-desc", en: "Everything you need to know about renting with Pasa Riders", ne: "पासा राइडर्ससँग भाडामा लिने बारे तपाईंले जान्नु पर्ने सबै कुरा" },

  // FAQ Questions
  { selector: ".faq-item:nth-child(1) .faq-item__question", en: "\n              How much does it cost to rent a bike per day?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            ", ne: "\n              प्रति दिन बाइक भाडामा लिन कति खर्च लाग्छ?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            " },
  { selector: ".faq-item:nth-child(1) .faq-item__answer p", en: "Our daily rental rate is <strong>Rs.700/day</strong>, which includes health and safety insurance. There\n                are no hidden charges or extra fees — what you see is what you pay.", ne: "हाम्रो दैनिक भाडा दर <strong>रू.७००/दिन</strong> हो, जसमा स्वास्थ्य र सुरक्षा बीमा समावेश छ। कुनै लुकेका शुल्कहरू वा अतिरिक्त शुल्कहरू छैनन् — तपाईं जे देख्नुहुन्छ त्यही तिर्नुहुन्छ।" },

  { selector: ".faq-item:nth-child(2) .faq-item__question", en: "\n              Which platforms can I use the rented bike for?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            ", ne: "\n              म भाडामा लिएको बाइक कुन प्लेटफर्महरूको लागि प्रयोग गर्न सक्छु?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            " },
  { selector: ".faq-item:nth-child(2) .faq-item__answer p", en: "You can use our bikes for <strong>Pathao, Yango, InDrive</strong>, or any other ride-hailing and\n                delivery platform operating in Kathmandu Valley. You can also use them for personal delivery work or\n                courier services.", ne: "तपाईं हाम्रा बाइकहरू <strong>पठाओ, याङ्गो, इनड्राइभ</strong>, वा काठमाडौं उपत्यकामा सञ्चालन हुने अन्य कुनै राइड-हेलिङ र डेलिभरी प्लेटफर्मको लागि प्रयोग गर्न सक्नुहुन्छ। तपाईं व्यक्तिगत डेलिभरी काम वा कुरियर सेवाहरूको लागि पनि तिनीहरूलाई प्रयोग गर्न सक्नुहुन्छ।" },

  { selector: ".faq-item:nth-child(3) .faq-item__question", en: "\n              What documents do I need to rent a bike?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            ", ne: "\n              बाइक भाडामा लिन मलाई कुन कागजातहरू चाहिन्छ?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            " },
  { selector: ".faq-item:nth-child(3) .faq-item__answer p", en: "You'll need: a valid <strong>driving licence</strong>, a citizenship card (Nagarikta), and a\n                passport-size photo. No complex paperwork — we keep the process simple and fast.", ne: "तपाईंलाई आवश्यक पर्नेछ: एक मान्य <strong>ड्राइभिङ लाइसेन्स</strong>, नागरिकता, र एक पासपोर्ट आकारको फोटो। कुनै जटिल कागजी कार्य छैन — हामी प्रक्रियालाई सरल र छिटो राख्छौं।" },

  { selector: ".faq-item:nth-child(4) .faq-item__question", en: "\n              Is insurance really included in the Rs.700/day rate?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            ", ne: "\n              के रू.७००/दिनको दरमा साँच्चै बीमा समावेश छ?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            " },
  { selector: ".faq-item:nth-child(4) .faq-item__answer p", en: "Yes! <strong>Health and safety insurance</strong> is fully included in your daily Rs.700 rate. You\n                don't need to pay anything extra. Ride with peace of mind knowing you're covered.", ne: "हो! तपाईंको दैनिक रू.७०० दरमा <strong>स्वास्थ्य र सुरक्षा बीमा</strong> पूर्ण रूपमा समावेश छ। तपाईंले अतिरिक्त केही तिर्नु पर्दैन। आफू सुरक्षित रहेको महसुस गर्दै शान्तिका साथ सवारी गर्नुहोस्।" },

  { selector: ".faq-item:nth-child(5) .faq-item__question", en: "\n              In which areas can I operate the rented bike?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            ", ne: "\n              म भाडामा लिएको बाइक कुन क्षेत्रमा चलाउन सक्छु?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            " },
  { selector: ".faq-item:nth-child(5) .faq-item__answer p", en: "You can freely operate across the <strong>entire Kathmandu Valley</strong> — including Kathmandu,\n                Bhaktapur, and Lalitpur districts. Coverage for outside the valley may require prior arrangement.", ne: "तपाईं <strong>सम्पूर्ण काठमाडौं उपत्यका</strong> — काठमाडौं, भक्तपुर, र ललितपुर जिल्लाहरू सहित स्वतन्त्र रूपमा सञ्चालन गर्न सक्नुहुन्छ। उपत्यका बाहिरको कभरेजको लागि पूर्व व्यवस्था आवश्यक हुन सक्छ।" },

  { selector: ".faq-item:nth-child(6) .faq-item__question", en: "\n              Can I start earning on the same day I register?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            ", ne: "\n              के म दर्ता गरेकै दिनबाट कमाउन सुरु गर्न सक्छु?\n              <span class=\"faq-icon\" aria-hidden=\"true\">+</span>\n            " },
  { selector: ".faq-item:nth-child(6) .faq-item__answer p", en: "Absolutely! Once your registration is complete and all documents are verified, you can take the bike\n                and <strong>start earning the same day</strong>. Our process is designed to get you on the road as fast\n                as possible.", ne: "पक्कै पनि! तपाईंको दर्ता पूरा भएपछि र सबै कागजातहरू प्रमाणित भएपछि, तपाईं बाइक लिन र <strong>सोही दिन कमाउन सुरु गर्न सक्नुहुन्छ</strong>। हाम्रो प्रक्रिया तपाईंलाई सकेसम्म छिटो सडकमा ल्याउनको लागि डिजाइन गरिएको छ।" },

  // Inquiry
  { selector: "#inquiry .section-tag", en: "Get Started Today", ne: "आजै सुरु गर्नुहोस्" },
  { selector: "#inquiry .section-title", en: "Book Your <span class=\"highlight\">Bike Now</span>", ne: "आफ्नो <span class=\"highlight\">बाइक अहिले बुक गर्नुहोस्</span>" },
  { selector: ".inquiry__desc", en: "Fill in the form and we'll get back to you within a few hours. Or reach us instantly\n            on WhatsApp!", ne: "फारम भर्नुहोस् र हामी तपाईंलाई केही घण्टा भित्र सम्पर्क गर्नेछौं। वा हामीलाई ह्वाट्सएपमा तुरुन्तै सम्पर्क गर्नुहोस्!" },
  { selector: ".contact-quick:nth-child(1) .contact-quick__label", en: "Call Us", ne: "हामीलाई कल गर्नुहोस्" },
  
  { selector: "label[for='inq-name']", en: "Full Name <span aria-hidden=\"true\">*</span>", ne: "पूरा नाम <span aria-hidden=\"true\">*</span>" },
  { selector: "label[for='inq-phone']", en: "Phone Number <span aria-hidden=\"true\">*</span>", ne: "फोन नम्बर <span aria-hidden=\"true\">*</span>" },
  { selector: "label[for='inq-platform']", en: "Current Platform <span aria-hidden=\"true\">*</span>", ne: "हालको प्लेटफर्म <span aria-hidden=\"true\">*</span>" },
  { selector: "label[for='inq-area']", en: "Preferred Area <span aria-hidden=\"true\">*</span>", ne: "मनपर्ने क्षेत्र <span aria-hidden=\"true\">*</span>" },
  { selector: "label[for='inq-message']", en: "Message (Optional)", ne: "सन्देश (वैकल्पिक)" },
  
  { selector: "#inq-platform option:nth-child(1)", en: "Select your platform", ne: "तपाईंको प्लेटफर्म छान्नुहोस्" },
  { selector: "#inq-platform option:nth-child(5)", en: "Other", ne: "अन्य" },
  { selector: "#inq-area option:nth-child(1)", en: "Select area", ne: "क्षेत्र छान्नुहोस्" },
  { selector: "#inq-area option:nth-child(2)", en: "Kathmandu", ne: "काठमाडौं" },
  { selector: "#inq-area option:nth-child(3)", en: "Bhaktapur", ne: "भक्तपुर" },
  { selector: "#inq-area option:nth-child(4)", en: "Lalitpur", ne: "ललितपुर" },

  // Contact
  { selector: "#contact .section-tag", en: "Find Us", ne: "हामीलाई खोज्नुहोस्" },
  { selector: "#contact .section-title", en: "Get In <span class=\"highlight\">Touch</span>", ne: "<span class=\"highlight\">सम्पर्क</span> मा रहनुहोस्" },
  { selector: "#contact .section-desc", en: "We're here to help. Reach out anytime!", ne: "हामी मद्दत गर्न यहाँ छौं। जुनसुकै बेला सम्पर्क गर्नुहोस्!" },

  { selector: ".contact-info__item:nth-child(1) .contact-info__label", en: "Address", ne: "ठेगाना" },
  { selector: ".contact-info__item:nth-child(1) .contact-info__value", en: "Ward No. 6, Hatigounda, Budhanilkantha Municipality, Kathmandu,\n                    Nepal", ne: "वडा नं. ६, हात्तीगौंडा, बुढानिलकण्ठ नगरपालिका, काठमाडौं, नेपाल" },
  
  { selector: ".contact-info__item:nth-child(2) .contact-info__label", en: "Phone", ne: "फोन" },
  { selector: ".contact-info__item:nth-child(4) .contact-info__label", en: "Business Hours", ne: "व्यापारिक घण्टा" },
  { selector: ".contact-info__item:nth-child(4) .contact-info__value", en: "6:00 AM – 8:00 PM · 7 days a week", ne: "बिहान ६:०० – बेलुका ८:०० · हप्ताको ७ दिन" },

  { selector: ".contact-platforms__title", en: "We serve riders on:", ne: "हामी निम्नका राइडरहरूलाई सेवा दिन्छौं:" },

  // Footer
  { selector: ".footer__tagline", en: "Ride More, Earn More!", ne: "धेरै चलाउनुहोस्, धेरै कमाउनुहोस्!" },
  { selector: ".footer__links .footer__heading", en: "Quick Links", ne: "द्रुत लिङ्कहरू" },
  { selector: ".footer__services .footer__heading", en: "Services", ne: "सेवाहरू" },
  { selector: ".footer__contact .footer__heading", en: "Contact Us", ne: "हामीलाई सम्पर्क गर्नुहोस्" },
  
  { selector: ".footer__links li:nth-child(1) a", en: "Home", ne: "गृहपृष्ठ" },
  { selector: ".footer__links li:nth-child(2) a", en: "About Us", ne: "हाम्रो बारेमा" },
  { selector: ".footer__links li:nth-child(3) a", en: "Services", ne: "सेवाहरू" },
  { selector: ".footer__links li:nth-child(4) a", en: "How It Works", ne: "कसरी काम गर्छ" },
  { selector: ".footer__links li:nth-child(5) a", en: "FAQ", ne: "बारम्बार सोधिने प्रश्नहरू" },
  { selector: ".footer__links li:nth-child(6) a", en: "Contact", ne: "सम्पर्क" },

  { selector: ".footer__services li:nth-child(1)", en: "Bike Rental (Rs.700/day)", ne: "बाइक भाडा (रू.७००/दिन)" },
  { selector: ".footer__services li:nth-child(2)", en: "Pathao Rider Support", ne: "पठाओ राइडर समर्थन" },
  { selector: ".footer__services li:nth-child(3)", en: "Yango Rider Support", ne: "याङ्गो राइडर समर्थन" },
  { selector: ".footer__services li:nth-child(4)", en: "InDrive Rider Support", ne: "इनड्राइभ राइडर समर्थन" },
  { selector: ".footer__services li:nth-child(5)", en: "Courier Partnerships", ne: "कुरियर साझेदारी" },
  { selector: ".footer__services li:nth-child(6)", en: "Insurance Coverage", ne: "बीमा कभरेज" }
];

document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle");
  const dataLangElements = document.querySelectorAll(".lang-text");
  
  // Default to Nepali as per requirements, unless user previously selected English
  let currentLang = localStorage.getItem("site-lang") || "ne"; 
  
  function updateLanguage() {
    // 1. Update data-en/data-ne attributes
    dataLangElements.forEach(el => {
      el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
    
    // 2. Update via dictionary
    dictionary.forEach(item => {
      const el = document.querySelector(item.selector);
      if (el) {
        if (!el.hasAttribute('data-en-saved')) {
          el.setAttribute('data-en-saved', item.en);
        }
        el.innerHTML = item[currentLang];
      }
    });

    // 3. Update toggle styling
    if (langToggle) {
      if (currentLang === "en") {
        langToggle.querySelector(".lang-en").classList.add("active");
        langToggle.querySelector(".lang-ne").classList.remove("active");
      } else {
        langToggle.querySelector(".lang-ne").classList.add("active");
        langToggle.querySelector(".lang-en").classList.remove("active");
      }
    }

    // 4. Update inputs/placeholders
    const nameInput = document.getElementById('inq-name');
    const msgInput = document.getElementById('inq-message');
    if (nameInput) nameInput.placeholder = currentLang === 'en' ? 'Your full name' : 'तपाईंको पूरा नाम';
    if (msgInput) msgInput.placeholder = currentLang === 'en' ? 'Any specific requirements or questions?' : 'कुनै विशेष आवश्यकता वा प्रश्नहरू छन्?';

    // Update body class for CSS adjustments
    document.body.classList.remove('lang-en', 'lang-ne');
    document.body.classList.add(`lang-${currentLang}`);
    
    localStorage.setItem("site-lang", currentLang);
  }

  // Initialize
  updateLanguage();

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ne" : "en";
      updateLanguage();
    });
  }
});
