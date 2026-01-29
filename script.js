document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATA SOURCE (From Uploaded Document) ---
    const servicesData = [
        {
            id: 'tax-advisory',
            title: 'Tax Advisory Services',
            icon: 'fa-file-invoice-dollar',
            subtitle: 'Expert Saudi Tax Advisors with Practical Business Insight',
            intro: 'Big4 Consultancy is a trusted provider of professional tax advisory services in Saudi Arabia, helping businesses stay compliant, reduce tax risks, and operate with confidence under ZATCA regulations. We advise local companies, multinational groups, and foreign investors across all stages of their business operations in the Kingdom.',
            sections: [
                {
                    heading: 'Comprehensive Tax Advisory Services',
                    text: 'Our tax advisory services cover all major areas of Saudi taxation, providing businesses with a single, reliable advisory partner.',
                    list: [
                        '<strong>Corporate Tax & Zakat Advisory:</strong> We advise businesses on corporate tax and Zakat matters, including planning, interpretation of regulations, risk assessment, and structuring to ensure accurate reporting and compliance with ZATCA requirements.',
                        '<strong>VAT Advisory Services:</strong> We support businesses with VAT advisory, including transaction reviews, VAT treatment analysis, compliance support, and audit readiness to minimize exposure and penalties.',
                        '<strong>Withholding Tax Advisory:</strong> We assist businesses in managing withholding tax obligations on cross-border payments, ensuring correct application of rates, treaty benefits, and timely filings.',
                        '<strong>Tax Risk Management & Audit Support:</strong> We help businesses identify tax risks early, prepare for ZATCA audits, respond to assessments, and manage disputes professionally and efficiently.'
                    ]
                },
                {
                    heading: 'Why Businesses Choose Big4 Consultancy for Tax Advisory',
                    list: [
                        'Proven expertise in Saudi tax laws and ZATCA regulations',
                        'Strong commercial understanding of business operations',
                        'Support for local and foreign-owned companies',
                        'Practical advice focused on risk reduction and compliance',
                        'Reliable support during audits and regulatory reviews'
                    ]
                }
            ]
        },
        {
            id: 'corporate-structuring',
            title: 'Corporate Structuring Services',
            icon: 'fa-sitemap',
            subtitle: 'Strategic Corporate Structuring with Commercial Focus',
            intro: 'Big4 Consultancy provides expert corporate structuring services in Saudi Arabia, helping businesses establish strong, compliant, and efficient corporate structures that support growth and long-term success. A well-designed corporate structure is critical for regulatory compliance, tax efficiency, operational control, and risk management.',
            sections: [
                {
                    heading: 'Comprehensive Corporate Structuring Solutions',
                    list: [
                        '<strong>Business Setup & Entity Structuring:</strong> We advise on the most suitable legal structure for your business in Saudi Arabia, including foreign-owned entities, joint ventures, and group structures.',
                        '<strong>Holding & Group Structures:</strong> We design efficient group and holding structures that support governance, operational efficiency, and future expansion while meeting Saudi regulatory requirements.',
                        '<strong>Regulatory & Compliance Alignment:</strong> We ensure that corporate structures comply with Saudi laws, licensing requirements, and ongoing regulatory obligations.',
                        '<strong>Tax-Efficient Structuring:</strong> We work closely with our tax advisory team to ensure that corporate structures are aligned with tax, Zakat, VAT, and withholding tax considerations.'
                    ]
                },
                {
                    heading: 'Why Choose Big4 Consultancy for Corporate Structuring',
                    list: [
                        'Expertise in Saudi corporate laws and regulations',
                        'Strong understanding of business and commercial operations',
                        'Support for local and foreign investors',
                        'Integrated tax and regulatory advisory approach',
                        'Practical, scalable structuring solutions'
                    ]
                }
            ]
        },
        {
            id: 'corporate-tax',
            title: 'Corporate Tax Compliance Services',
            icon: 'fa-building-columns',
            subtitle: 'Reliable Corporate Tax Compliance with Full Regulatory Confidence',
            intro: 'Big4 Consultancy provides comprehensive corporate tax compliance services in Saudi Arabia, supporting businesses with accurate registration, timely filings, and ongoing compliance in accordance with Saudi tax laws and ZATCA regulations.',
            sections: [
                {
                    heading: 'End-to-End Corporate Tax Compliance Services',
                    list: [
                        '<strong>Corporate Tax Registration:</strong> We assist businesses with corporate tax registration and ensure that all regulatory requirements are completed accurately and on time.',
                        '<strong>Corporate Tax Return Preparation & Filing:</strong> We prepare and file corporate tax returns in accordance with Saudi tax laws, ensuring accuracy, completeness, and timely submission to ZATCA.',
                        '<strong>Ongoing Compliance & Advisory Support:</strong> We provide continuous support throughout the year, addressing tax-related queries, regulatory updates, and compliance requirements.',
                        '<strong>ZATCA Audit & Review Support:</strong> We assist businesses during ZATCA reviews and audits, including documentation support, responses to queries, and professional representation.'
                    ]
                },
                {
                    heading: 'Why Choose Big4 Consultancy for Corporate Tax Compliance',
                    list: [
                        'Expertise in Saudi corporate tax laws and ZATCA regulations',
                        'Proven experience managing corporate tax compliance',
                        'Support for local and foreign-owned companies',
                        'Strong focus on accuracy and deadline management',
                        'Professional support during audits and regulatory reviews'
                    ]
                }
            ]
        },
        {
            id: 'zakat',
            title: 'Zakat Services',
            icon: 'fa-hand-holding-dollar',
            subtitle: 'Expert Zakat Advisory with Practical Business Focus',
            intro: 'Big4 Consultancy provides comprehensive Zakat services in Saudi Arabia, supporting businesses with accurate calculation, optimal Zakat planning, filing, and full compliance in accordance with ZATCA regulations.',
            sections: [
                {
                    heading: 'End-to-End Zakat Compliance Services',
                    list: [
                        '<strong>Zakat Calculation & Review:</strong> We prepare and review Zakat calculations in line with ZATCA guidelines, ensuring accuracy, consistency, and proper treatment of assets and liabilities.',
                        '<strong>Optimal Zakat Planning:</strong> We advise on optimal Zakat positions by reviewing business structures, transactions, and financial data to ensure fair and compliant Zakat assessments.',
                        '<strong>Zakat Return Filing:</strong> We manage the preparation and filing of Zakat returns, ensuring timely submission and accurate reporting to ZATCA.',
                        '<strong>ZATCA Liaison & Audit Support:</strong> We support businesses during ZATCA reviews, assessments, and audits, including documentation support, responses to queries, and professional representation.'
                    ]
                }
            ]
        },
        {
            id: 'vat',
            title: 'VAT Services',
            icon: 'fa-percent',
            subtitle: 'Expert VAT Advisory with a Commercial Approach',
            intro: 'Big4 Consultancy provides professional VAT services in Saudi Arabia, helping businesses comply with Saudi VAT regulations while managing risks and maintaining operational efficiency.',
            sections: [
                {
                    heading: 'Comprehensive VAT Services in Saudi Arabia',
                    list: [
                        '<strong>VAT Registration & Deregistration:</strong> We assist businesses with VAT registration, amendments, and deregistration, ensuring correct classification and timely submissions to ZATCA.',
                        '<strong>VAT Return Preparation & Filing:</strong> We prepare and file VAT returns accurately and on time, ensuring compliance with Saudi VAT laws and ZATCA guidelines.',
                        '<strong>VAT Advisory & Transaction Support:</strong> We advise on VAT treatment of local and cross-border transactions, contracts, imports, exports, and special supplies to reduce VAT risks.',
                        '<strong>VAT Audit & ZATCA Support:</strong> We support businesses during ZATCA VAT audits and reviews, including documentation preparation, responses to queries, and professional representation.'
                    ]
                }
            ]
        },
        {
            id: 'withholding-tax',
            title: 'Withholding Tax Services',
            icon: 'fa-money-bill-transfer',
            subtitle: 'Clear Withholding Tax Advice with Commercial Understanding',
            intro: 'Big4 Consultancy provides expert withholding tax services in Saudi Arabia, helping businesses manage withholding tax obligations on cross-border payments in full compliance with Saudi tax laws and ZATCA regulations.',
            sections: [
                {
                    heading: 'Comprehensive Withholding Tax Services in Saudi Arabia',
                    list: [
                        '<strong>Withholding Tax Assessment & Advisory:</strong> We review cross-border transactions to determine withholding tax applicability, rates, and compliance requirements under Saudi regulations.',
                        '<strong>Withholding Tax Return Preparation & Filing:</strong> We prepare and file withholding tax returns accurately and on time, ensuring compliance with ZATCA filing requirements.',
                        '<strong>Double Tax Treaty Advisory:</strong> We advise on the application of double tax treaties, helping businesses benefit from reduced withholding tax rates where applicable.',
                        '<strong>ZATCA Audit & Dispute Support:</strong> We assist businesses during ZATCA reviews, assessments, and disputes related to withholding tax.'
                    ]
                }
            ]
        },
        {
            id: 'gosi',
            title: 'GOSI Compliance Services',
            icon: 'fa-users-gear',
            subtitle: 'Clear and Practical GOSI Compliance Support',
            intro: 'Big4 Consultancy provides professional GOSI (Social Security) compliance services in Saudi Arabia, helping businesses meet their statutory obligations under Saudi labor and social insurance regulations.',
            sections: [
                {
                    heading: 'Comprehensive GOSI Compliance Services',
                    list: [
                        '<strong>GOSI Registration & Employer Setup:</strong> We assist businesses with employer registration under GOSI and ensure correct setup from the start.',
                        '<strong>Employee Registration & Updates:</strong> We manage employee registrations, additions, removals, and salary updates in accordance with Saudi labor and GOSI regulations.',
                        '<strong>Monthly GOSI Compliance & Reporting:</strong> We handle monthly GOSI calculations and submissions, ensuring accurate contributions and timely compliance.',
                        '<strong>GOSI Audit & Inquiry Support:</strong> We support businesses during GOSI inspections, reviews, and inquiries, including documentation support and professional responses.'
                    ]
                }
            ]
        },
        {
            id: 'bookkeeping',
            title: 'Bookkeeping and Accounting Services',
            icon: 'fa-book-journal-whills',
            subtitle: 'Reliable Accounting Support with Business Focus',
            intro: 'Big4 Consultancy provides professional bookkeeping and accounting services in Saudi Arabia, helping businesses maintain accurate financial records, meet regulatory requirements, and make informed business decisions.',
            sections: [
                {
                    heading: 'Comprehensive Bookkeeping and Accounting Services',
                    list: [
                        '<strong>Day-to-Day Bookkeeping:</strong> We manage daily bookkeeping activities, including recording transactions, reconciliations, and maintaining accurate ledgers.',
                        '<strong>Monthly and Periodic Accounting:</strong> We prepare monthly, quarterly, and annual accounts, ensuring timely and accurate financial reporting.',
                        '<strong>Financial Statements & Reporting:</strong> We prepare financial statements and management reports to support decision-making and regulatory compliance.',
                        '<strong>Compliance-Ready Accounting:</strong> Our accounting services support compliance with corporate tax, Zakat, VAT, and audit requirements.'
                    ]
                }
            ]
        },
        {
            id: 'cfo',
            title: 'CFO Services',
            icon: 'fa-user-tie',
            subtitle: 'Strategic Financial Leadership with Commercial Insight',
            intro: 'Big4 Consultancy provides professional CFO services in Saudi Arabia, supporting business owners, CEOs, and management teams with strategic financial leadership, control, and decision-making support.',
            sections: [
                {
                    heading: 'Comprehensive CFO Services in Saudi Arabia',
                    list: [
                        '<strong>Financial Planning & Budgeting:</strong> We support businesses with budgeting, forecasting, and financial planning to improve visibility and control over financial performance.',
                        '<strong>Cash Flow & Working Capital Management:</strong> We help businesses manage cash flow, optimize working capital, and maintain financial stability.',
                        '<strong>Management Reporting & Analysis:</strong> We prepare clear and insightful management reports, helping leadership understand performance, trends, and key financial drivers.',
                        '<strong>Financial Controls & Governance:</strong> We strengthen internal controls, financial processes, and governance structures to reduce risk and support compliance.',
                        '<strong>Strategic Advisory & Business Support:</strong> We support key business decisions, expansion plans, restructuring, and investment initiatives.'
                    ]
                }
            ]
        },
        {
            id: 'actuarial',
            title: 'Actuarial Services',
            icon: 'fa-calculator',
            subtitle: 'Reliable Actuarial Expertise with Business Understanding',
            intro: 'Big4 Consultancy provides professional actuarial services in Saudi Arabia, supporting businesses with accurate actuarial calculations, employee benefit valuations, and financial risk assessment in compliance with Saudi regulations.',
            sections: [
                {
                    heading: 'Comprehensive Actuarial Services',
                    list: [
                        '<strong>Employee End-of-Service Benefits (EOSB) Valuations:</strong> We perform actuarial valuations for employee end-of-service benefits in accordance with Saudi labor law and applicable accounting standards.',
                        '<strong>Employee Benefit Obligations:</strong> We support businesses with actuarial assessments of long-term employee benefit obligations, ensuring accurate recognition in financial statements.',
                        '<strong>Financial Reporting Support:</strong> We provide actuarial inputs required for financial reporting, audits, and regulatory reviews.',
                        '<strong>Actuarial Advisory & Risk Assessment:</strong> We advise management on actuarial assumptions, financial impact, and long-term obligations.'
                    ]
                }
            ]
        },
        {
            id: 'incorporation',
            title: 'Company Incorporation Services',
            icon: 'fa-rocket',
            subtitle: 'Business Setup with Clear Guidance and Control',
            intro: 'Big4 Consultancy provides professional company incorporation services in Saudi Arabia, supporting local and foreign investors with end-to-end business setup, licensing, and regulatory approvals.',
            sections: [
                {
                    heading: 'Comprehensive Company Incorporation Services',
                    list: [
                        '<strong>Entity Structure & Licensing Advisory:</strong> We advise on the appropriate legal structure, licensing requirements, and regulatory approvals for your business in Saudi Arabia.',
                        '<strong>Foreign Investment & Local Ownership Support:</strong> We assist foreign investors with incorporation requirements, ownership structures, and regulatory compliance in line with Saudi laws.',
                        '<strong>Company Registration & Government Approvals:</strong> We manage registrations with relevant authorities, ensuring accurate documentation and timely approvals.',
                        '<strong>Post-Incorporation Compliance Setup:</strong> We support post-incorporation requirements, including tax, Zakat, VAT, GOSI, and regulatory registrations to ensure full compliance from day one.'
                    ]
                }
            ]
        }
    ];

    // --- RENDER SERVICES GRID ---
    const servicesGrid = document.getElementById('services-grid');
    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card reveal';
        card.innerHTML = `
            <div class="icon-box"><i class="fa-solid ${service.icon}"></i></div>
            <h3>${service.title}</h3>
            <p>${service.intro.substring(0, 100)}...</p>
            <span class="read-more">Learn More <i class="fa-solid fa-arrow-right"></i></span>
        `;
        card.addEventListener('click', () => openService(service.id));
        servicesGrid.appendChild(card);
    });

    // --- NAVIGATION LOGIC ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Mobile Menu Toggle
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.remove('fa-xmark');
            mobileBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // --- VIEW SWITCHING LOGIC (SPA) ---
    const homeView = document.getElementById('home-view');
    const serviceView = document.getElementById('service-view');
    const detailTitle = document.getElementById('detail-title');
    const detailSubtitle = document.getElementById('detail-subtitle');
    const detailContent = document.getElementById('detail-content');

    window.openService = function(serviceId) {
        const service = servicesData.find(s => s.id === serviceId);
        if (!service) return;

        // Populate Content
        detailTitle.innerHTML = `<i class="fa-solid ${service.icon}"></i> ${service.title}`;
        detailSubtitle.textContent = service.subtitle;
        
        let contentHTML = `<p class="fade-in">${service.intro}</p>`;
        
        service.sections.forEach(section => {
            contentHTML += `
                <h2 class="fade-in">${section.heading}</h2>
                ${section.text ? `<p class="fade-in">${section.text}</p>` : ''}
                <ul class="fade-in">
                    ${section.list.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        });

        // Add Footer Vision 2030 text
        contentHTML += `
            <div class="fade-in" style="background: #eef2f5; padding: 30px; border-radius: 8px; margin-top: 50px; border-left: 4px solid var(--primary);">
                <h3 style="font-size: 1.3rem; color: var(--primary); margin-bottom: 10px;">Supporting Business Growth under Saudi Vision 2030</h3>
                <p style="margin-bottom:0;">Saudi Arabia’s regulatory environment is aligned with Vision 2030, emphasizing transparency, governance, and compliance. Our services support your business in meeting these objectives while maintaining competitiveness and growth in the Saudi market.</p>
            </div>
        `;

        detailContent.innerHTML = contentHTML;

        // Switch Views
        homeView.classList.add('hidden');
        serviceView.classList.remove('hidden');
        serviceView.classList.add('fade-in');
        window.scrollTo(0, 0);
    };

    window.goHome = function() {
        serviceView.classList.add('hidden');
        homeView.classList.remove('hidden');
        homeView.classList.add('fade-in');
        window.scrollTo(0, 0);
    };

    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));


    // --- NUMBER COUNTER ANIMATION ---
    const statsSection = document.querySelector('.stats-bar');
    const counters = document.querySelectorAll('.stat-item h3');
    let hasStarted = false;

    const statsObserver = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
            hasStarted = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; 
                const increment = target / (duration / 16); 
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current) + (target === 100 ? '%' : '+');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target + (target === 100 ? '%' : '+');
                    }
                };
                updateCounter();
            });
        }
    }, { threshold: 0.5 });

    if(statsSection) {
        statsObserver.observe(statsSection);
    }


    // --- 2D SLIDER LOGIC ---
    const track = document.getElementById('slidesTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    const slides = document.querySelectorAll('.slide');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;

    // Initialize Dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            if(index === currentIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
        resetAutoPlay();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
        resetAutoPlay();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoPlay();
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Event Listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    const sliderContainer = document.querySelector('.about-slider-container');
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    sliderContainer.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();

});
