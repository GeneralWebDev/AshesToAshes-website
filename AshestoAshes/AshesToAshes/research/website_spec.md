# Ashes To Ashes Concierge Services — Website Specification Document

**Document Version:** 1.0  
**Date:** February 8, 2026  
**Purpose:** Comprehensive website specification with draft content for all sections. This document provides everything needed to build the complete mobile-first, responsive website.

---

## Table of Contents

1. [Brand Guidelines](#1-brand-guidelines)
2. [Navigation Structure](#2-navigation-structure)
3. [Draft Content — All Sections](#3-draft-content--all-sections)
   - 3.1 Home / Hero
   - 3.2 About Us
   - 3.3 Services
   - 3.4 How It Works
   - 3.5 Pricing
   - 3.6 FAQ
   - 3.7 Testimonials
   - 3.8 Contact
4. [Footer Content](#4-footer-content)
5. [Compliance Notes](#5-compliance-notes)
6. [Technical Specifications](#6-technical-specifications)
7. [Research Sources & References](#7-research-sources--references)

---

## 1. Brand Guidelines

### 1.1 Business Identity

- **Business Name:** Ashes To Ashes Concierge Services
- **Service Type:** Concierge advocacy and ministry-focused service
- **NOT:** A funeral home, crematory, or mortuary
- **Core Identity:** A compassionate concierge advocacy and ministry-focused service that guides and supports families through end-of-life arrangements. The service acts as a neutral, unbiased advocate — coordinating with funeral homes, crematories, and other providers on behalf of families, but never performing those services directly.

### 1.2 Color Scheme

| Color Name  | Hex Code  | Usage |
|-------------|-----------|-------|
| Deep Maroon | `#5C0A0A` | Primary color — headers, nav background, buttons, accents |
| Deep Gold   | `#B8860B` | Secondary color — highlights, icons, borders, hover states, CTAs |
| Cream       | `#FFFDD0` | Background color — page backgrounds, card backgrounds |
| White       | `#FFFFFF` | Text on dark backgrounds, card backgrounds |
| Dark Text   | `#2C2C2C` | Body text color for readability |
| Light Maroon| `#7A1A1A` | Hover state for maroon elements |
| Soft Gold   | `#D4A843` | Lighter gold for subtle accents |

### 1.3 Typography

| Element         | Font Family                        | Weight    | Size (Mobile / Desktop) |
|-----------------|------------------------------------|-----------|-------------------------|
| H1 (Hero)       | Georgia, 'Times New Roman', serif  | Bold (700)| 2rem / 3.5rem           |
| H2 (Section)    | Georgia, 'Times New Roman', serif  | Bold (700)| 1.75rem / 2.5rem        |
| H3 (Subsection) | Georgia, 'Times New Roman', serif  | SemiBold (600) | 1.25rem / 1.75rem  |
| Body Text       | Georgia, 'Times New Roman', serif  | Normal (400) | 1rem / 1.125rem     |
| Nav Links       | Georgia, 'Times New Roman', serif  | Normal (400) | 1rem / 1rem         |
| Buttons         | Georgia, 'Times New Roman', serif  | Bold (700)| 1rem / 1.125rem         |
| Small/Disclaimer| Georgia, 'Times New Roman', serif  | Normal (400) | 0.85rem / 0.9rem   |

### 1.4 Aesthetic & Tone

- **Visual Aesthetic:** Clean, calm, professional. Minimal clutter. Generous whitespace. Soft transitions.
- **Imagery Style:** Warm, comforting — nature scenes (sunrises, peaceful landscapes, gentle light), hands clasped in support, candles. Avoid anything clinical, dark, or overtly funereal.
- **Tone of Voice:** Compassionate, professional, supportive, ministry-oriented. Warm but not overly emotional. Empowering and informative. Always respectful and dignified.
- **Key Messaging Principles:**
  1. We walk alongside families — we do not replace funeral professionals.
  2. We advocate, coordinate, and support — we do not perform cremations or funerals.
  3. Our ministry is service through guidance and compassion.
  4. Transparency and honesty in all communications.

---

## 2. Navigation Structure

### 2.1 Desktop Navigation

A fixed/sticky horizontal navigation bar at the top of the page:

```
[Logo: Ashes To Ashes Concierge Services]   Home | About Us | Services | How It Works | Pricing | FAQ | Contact   [Call Now Button]
```

- Logo on the left
- Navigation links centered or right-aligned
- "Call Now" or "Get Started" CTA button on the far right (deep gold background, white text)
- Background: Deep Maroon (`#5C0A0A`)
- Text: White (`#FFFFFF`)
- Active/hover state: Deep Gold (`#B8860B`) underline or text color

### 2.2 Mobile Navigation (Hamburger Menu)

- Hamburger icon (three horizontal lines) on the right side of the nav bar
- Logo on the left
- On tap, a full-screen or slide-in overlay menu appears with vertical navigation links
- Menu background: Deep Maroon (`#5C0A0A`)
- Links: White, large tap targets (minimum 48px height)
- Close button (X icon) in the top-right corner
- Smooth slide-in animation (from right or top)

### 2.3 Navigation Links (Anchor-based Single Page)

All sections are on a single page with smooth scrolling:

| Nav Label     | Anchor ID       |
|---------------|-----------------|
| Home          | `#home`         |
| About Us      | `#about`        |
| Services      | `#services`     |
| How It Works  | `#how-it-works` |
| Pricing       | `#pricing`      |
| FAQ           | `#faq`          |
| Contact       | `#contact`      |

---

## 3. Draft Content — All Sections

### 3.1 Home / Hero Section

**Section ID:** `#home`  
**Layout:** Full-viewport hero with background image/gradient overlay, centered text, CTA button.

**Background:** A warm, soft-focus image of a sunrise over a peaceful landscape, overlaid with a semi-transparent deep maroon gradient (to ensure text readability). Alternatively, a solid gradient from deep maroon to a slightly lighter maroon.

**Content:**

- **Tagline (above headline, smaller text, deep gold color):**
  > "Compassionate Guidance Through Life's Most Difficult Moments"

- **Headline (H1, white, large):**
  > "Walking Alongside You With Care, Advocacy & Grace"

- **Subheadline / Value Proposition (white, medium text):**
  > "Ashes To Ashes Concierge Services is a ministry-focused concierge advocacy service dedicated to guiding families through end-of-life arrangements with compassion, transparency, and unwavering support. We are not a funeral home — we are your advocate."

- **Primary CTA Button (deep gold background, white text):**
  > "Learn How We Can Help"  
  > (Scrolls to `#services`)

- **Secondary CTA (text link, white with gold underline):**
  > "Call Us Now: (XXX) XXX-XXXX"

---

### 3.2 About Us Section

**Section ID:** `#about`  
**Layout:** Two-column on desktop (text left, image right), single column stacked on mobile. Cream background.

**Content:**

- **Section Heading (H2):**
  > "About Ashes To Ashes Concierge Services"

- **Introductory Paragraph:**
  > "Ashes To Ashes Concierge Services was founded on a simple but powerful calling: to walk alongside families during one of life's most overwhelming seasons. We are a concierge advocacy and ministry-focused service — not a funeral home, crematory, or mortuary. Our mission is to serve as your compassionate guide and advocate, helping you navigate end-of-life arrangements with clarity, dignity, and peace of mind."

- **Our Mission:**
  > "To provide compassionate, transparent, and personalized concierge advocacy for families navigating end-of-life arrangements — serving as a bridge between grieving families and the funeral industry with integrity, grace, and a heart for ministry."

- **Our Vision:**
  > "A world where no family has to face the complexity of end-of-life planning alone — where every person is treated with dignity, every family is empowered with knowledge, and every arrangement reflects the wishes and values of the one being honored."

- **What Makes Us Different:**
  > "Unlike funeral homes and crematories, we do not handle remains, perform cremations, or conduct funeral services. Instead, we serve as your personal advocate and concierge — coordinating with licensed providers on your behalf, assisting with paperwork, explaining your options, and ensuring your family's wishes are honored. Our ministry-centered approach means we bring not only professional expertise but also spiritual compassion and emotional support to every family we serve."

- **Our Values (displayed as icon + text cards):**
  1. **Compassion** — "Every family deserves kindness and understanding during their time of loss."
  2. **Advocacy** — "We stand beside you, ensuring your voice is heard and your rights are protected."
  3. **Transparency** — "No hidden fees, no pressure. Just honest guidance and clear information."
  4. **Ministry** — "Our work is rooted in a calling to serve others with grace and love."
  5. **Dignity** — "We honor every life and every family's unique wishes and traditions."

---

### 3.3 Services Section

**Section ID:** `#services`  
**Layout:** Section heading, brief intro paragraph, then a grid of service cards (2 columns on desktop, 1 column on mobile). Each card has an icon, title, and description. Cream background with white cards.

**Content:**

- **Section Heading (H2):**
  > "Our Concierge Services"

- **Section Introduction:**
  > "We offer a comprehensive range of concierge advocacy services designed to ease the burden on families during end-of-life planning. As your dedicated advocate, we handle the details so you can focus on what matters most — honoring your loved one and supporting each other."

- **Service Cards:**

  1. **Cremation Coordination & Advocacy**
     - Icon: 🕊️ (dove or similar peaceful icon)
     - Description: "We coordinate directly with licensed crematories on your behalf, ensuring the process is handled with care, transparency, and respect for your family's wishes. We compare providers, negotiate pricing, and manage all logistics."

  2. **Paperwork & Documentation Assistance**
     - Icon: 📋 (clipboard icon)
     - Description: "Navigating death certificates, permits, insurance claims, Social Security notifications, and other required documents can be overwhelming. We guide you through every form and filing, ensuring nothing is missed."

  3. **Memorial & Celebration of Life Planning Guidance**
     - Icon: 🕯️ (candle icon)
     - Description: "Whether you envision a traditional memorial, a celebration of life, or a private family gathering, we help you plan a meaningful tribute that reflects your loved one's personality, values, and legacy."

  4. **Funeral Provider Advocacy & Negotiation**
     - Icon: 🤝 (handshake icon)
     - Description: "Under the FTC Funeral Rule, you have the right to choose only the services you want and to receive transparent pricing. We advocate on your behalf with funeral homes and providers, ensuring you are treated fairly and never pressured into unnecessary purchases."

  5. **Grief Support Resources & Referrals**
     - Icon: 💛 (heart icon)
     - Description: "Grief doesn't end when the arrangements are made. We connect you with trusted grief counselors, support groups, faith-based resources, and community organizations to support your healing journey."

  6. **Pre-Planning Consultation**
     - Icon: 📖 (book icon)
     - Description: "Planning ahead is one of the greatest gifts you can give your family. We offer pre-planning consultations to help you document your wishes, explore options, and make informed decisions — all at your own pace, with no pressure."

  7. **Veterans & Special Honors Assistance**
     - Icon: ⭐ (star icon)
     - Description: "For families of veterans and service members, we help navigate VA burial benefits, military honors, and special memorial arrangements to ensure your loved one receives the recognition they deserve."

  8. **24/7 Compassionate Support Line**
     - Icon: 📞 (phone icon)
     - Description: "Loss doesn't follow a schedule. Our compassionate support team is available around the clock to answer your questions, provide guidance, and offer comfort when you need it most."

- **Section CTA:**
  > "Not sure which services you need? Contact us for a free, no-obligation consultation."  
  > [Button: "Schedule a Consultation" → scrolls to #contact]

---

### 3.4 How It Works Section

**Section ID:** `#how-it-works`  
**Layout:** Section heading, then a horizontal step-by-step process (vertical on mobile). Each step has a number, icon, title, and description. Deep maroon background with white/cream text.

**Content:**

- **Section Heading (H2, white text):**
  > "How It Works"

- **Section Subheading (cream text):**
  > "Our simple, compassionate process ensures you're never alone during this journey."

- **Steps:**

  **Step 1: Reach Out**
  - Number: "01"
  - Icon: Phone/message icon
  - Description: "Contact us by phone, email, or through our website. Whether you're planning ahead or need immediate assistance, we're here for you 24/7. Your first consultation is always free."

  **Step 2: Personalized Consultation**
  - Number: "02"
  - Icon: Conversation/people icon
  - Description: "We listen to your needs, answer your questions, and learn about your loved one's wishes. Together, we'll create a personalized plan that honors their life and fits your family's needs and budget."

  **Step 3: We Advocate & Coordinate**
  - Number: "03"
  - Icon: Clipboard/shield icon
  - Description: "We handle the details — coordinating with cremation providers, assisting with paperwork, negotiating with service providers, and managing logistics. You'll be informed every step of the way."

  **Step 4: Ongoing Support**
  - Number: "04"
  - Icon: Heart/hands icon
  - Description: "Our care doesn't end when the arrangements are complete. We follow up with grief support resources, assist with remaining paperwork, and remain available for any questions that arise in the weeks and months ahead."

---

### 3.5 Pricing Section

**Section ID:** `#pricing`  
**Layout:** Section heading, transparency statement, then pricing cards in a row (3 columns on desktop, stacked on mobile). Cream background. Each card has a tier name, price, feature list, and CTA button.

**Important Note:** These are concierge advocacy service fees — NOT cremation or funeral costs. The pricing covers the advocacy, coordination, and support services provided by Ashes To Ashes Concierge Services. Actual cremation and funeral costs are separate and paid directly to the licensed providers.

**Content:**

- **Section Heading (H2):**
  > "Transparent, Honest Pricing"

- **Section Introduction:**
  > "We believe in complete transparency. Our concierge advocacy fees are clearly outlined below — no hidden costs, no surprises. These fees cover our advocacy, coordination, and support services. Actual cremation or funeral service costs are separate and paid directly to the licensed providers we help you select."

- **Pricing Tiers:**

  **Tier 1: Essential Guidance**
  - Price: "$495"
  - Subtitle: "For families who need basic support and guidance"
  - Features:
    - Initial consultation and needs assessment
    - Cremation provider research and recommendations
    - Assistance with essential paperwork (death certificate, permits)
    - Basic provider coordination
    - Phone and email support during business hours
  - CTA Button: "Get Started"

  **Tier 2: Complete Advocacy** *(Most Popular — highlighted card)*
  - Price: "$995"
  - Subtitle: "Comprehensive support for complete peace of mind"
  - Features:
    - Everything in Essential Guidance, plus:
    - Full cremation or funeral provider coordination and advocacy
    - Price negotiation with providers on your behalf
    - Memorial or celebration of life planning guidance
    - Insurance and benefits claims assistance
    - Social Security and VA benefits notification assistance
    - 24/7 phone support for 30 days
    - Grief support resource referrals
  - CTA Button: "Choose Complete Advocacy"

  **Tier 3: Full Concierge & Ministry Care**
  - Price: "$1,495"
  - Subtitle: "Our most comprehensive, hands-on concierge experience"
  - Features:
    - Everything in Complete Advocacy, plus:
    - Dedicated personal concierge advocate assigned to your family
    - Unlimited 24/7 support for 90 days
    - In-person coordination assistance (where available)
    - Detailed memorial planning and vendor coordination
    - Ongoing grief support and ministry care follow-up
    - Assistance with estate and probate document preparation
    - Anniversary remembrance and check-in
  - CTA Button: "Choose Full Concierge"

- **Below Pricing Cards — Important Disclaimer (smaller text, centered):**
  > "* All prices listed are for our concierge advocacy and coordination services only. Cremation, funeral, and memorial service costs are separate and vary by provider and location. We help you find the most transparent and fairly priced providers in your area. Payment plans are available."

- **Custom/Pre-Planning Note:**
  > "**Planning Ahead?** We offer pre-planning consultations starting at $250. Contact us to learn more about how pre-planning can save your family time, stress, and money."

---

### 3.6 FAQ Section

**Section ID:** `#faq`  
**Layout:** Section heading, then an accordion-style FAQ list. Each question is clickable to expand/collapse the answer. Cream background. Questions in deep maroon, answers in dark text.

**Content:**

- **Section Heading (H2):**
  > "Frequently Asked Questions"

- **Section Subheading:**
  > "We understand you may have questions. Here are answers to the most common ones. If you don't see your question here, please don't hesitate to contact us."

- **FAQ Items:**

  **Q1: "Are you a funeral home or crematory?"**
  > **A:** "No. Ashes To Ashes Concierge Services is NOT a funeral home, crematory, or mortuary. We are a concierge advocacy and ministry-focused service. We do not handle remains, perform cremations, or conduct funeral services. Instead, we serve as your personal advocate — coordinating with licensed funeral homes and crematories on your behalf, assisting with paperwork, and providing compassionate guidance throughout the process."

  **Q2: "What exactly does a concierge advocacy service do?"**
  > **A:** "Think of us as your personal guide and advocate for end-of-life arrangements. Just as a travel concierge helps you plan and coordinate a trip, we help you navigate the complex world of cremation and funeral arrangements. We research providers, compare pricing, handle paperwork, coordinate logistics, advocate for your rights, and provide emotional and spiritual support — all so you can focus on grieving and healing."

  **Q3: "Why should I use your service instead of going directly to a funeral home?"**
  > **A:** "Funeral homes provide essential services, but navigating your options during a time of grief can be overwhelming. Families often feel pressured, confused by pricing, or unsure of their rights. As your independent advocate, we provide unbiased guidance, help you understand your options under the FTC Funeral Rule, negotiate fair pricing, and ensure your family's wishes are honored — without any conflict of interest."

  **Q4: "How much does cremation cost, and are your fees separate?"**
  > **A:** "Yes, our concierge advocacy fees are completely separate from the actual cost of cremation or funeral services. Direct cremation through a licensed provider typically ranges from $950 to $3,000 depending on your location and provider. Our advocacy fees range from $495 to $1,495 depending on the level of support you need. We help you find the most transparent and fairly priced providers in your area, which often results in significant savings."

  **Q5: "Do I need to use your service, or can I arrange cremation on my own?"**
  > **A:** "You absolutely can arrange cremation or funeral services on your own. Our service is entirely optional. However, many families find that having a knowledgeable, compassionate advocate by their side reduces stress, saves time, prevents costly mistakes, and ensures they receive fair treatment from providers. We're here for families who want support and guidance during an incredibly difficult time."

  **Q6: "What is the FTC Funeral Rule, and how does it protect me?"**
  > **A:** "The Federal Trade Commission's Funeral Rule requires funeral providers to give you itemized price lists, allows you to choose only the services you want, and prohibits providers from requiring unnecessary purchases (like requiring a casket for cremation). As your advocate, we ensure these rights are respected and help you make informed decisions based on transparent pricing information."

  **Q7: "Can you help with pre-planning arrangements?"**
  > **A:** "Absolutely. Pre-planning is one of the most thoughtful gifts you can give your family. We offer pre-planning consultations where we help you document your wishes, explore cremation and memorial options, compare providers, and create a clear plan — all at your own pace, with no pressure. This ensures your family knows exactly what you want and isn't burdened with difficult decisions during their time of grief."

  **Q8: "What is the ministry aspect of your service?"**
  > **A:** "Our service is rooted in a calling to serve others with compassion, grace, and love. The ministry aspect of our work means we approach every family with spiritual care and emotional support — not just logistical coordination. We pray with families who welcome it, offer comfort grounded in faith, and treat every interaction as an opportunity to serve. However, we respect all faiths and belief systems and never impose our beliefs on anyone."

  **Q9: "How quickly can you help if my loved one has just passed?"**
  > **A:** "We are available 24/7 for immediate assistance. When you call, we will guide you through the first steps, begin coordinating with providers right away, and ensure your loved one is treated with dignity and care. There is no need to make rushed decisions — we help you take things one step at a time."

  **Q10: "Do you serve all locations?"**
  > **A:** "We provide remote concierge advocacy services that can assist families in many locations. Our provider network and coordination capabilities continue to grow. Please contact us to discuss your specific location and needs, and we'll let you know how we can best serve you."

---

### 3.7 Testimonials Section

**Section ID:** `#testimonials`  
**Layout:** Section heading, then a carousel or grid of testimonial cards. Each card has a quote, name, and relationship. Soft cream background with white cards and a subtle gold border.

**Note:** These are placeholder testimonials for initial website launch. They should be replaced with real testimonials as they are collected. Each placeholder should be clearly marked in the code with a comment indicating it needs to be replaced.

**Content:**

- **Section Heading (H2):**
  > "What Families Are Saying"

- **Testimonial 1:**
  > *"When my mother passed unexpectedly, I was completely overwhelmed. Ashes To Ashes walked us through every step with such patience and compassion. They handled the coordination with the crematory, helped us with all the paperwork, and even helped us plan a beautiful celebration of life. I don't know how we would have managed without them."*
  > — **Placeholder Name, Relationship** *(To be replaced with real testimonial)*

- **Testimonial 2:**
  > *"I used their pre-planning service to get everything in order for my family. The peace of mind knowing that my wishes are documented and my family won't have to make difficult decisions during their grief — that's priceless. The team was so respectful and thorough."*
  > — **Placeholder Name** *(To be replaced with real testimonial)*

- **Testimonial 3:**
  > *"What sets Ashes To Ashes apart is their heart. This isn't just a business to them — it's a ministry. They prayed with our family, checked in on us weeks after the service, and connected us with a wonderful grief support group. They truly care."*
  > — **Placeholder Name, Relationship** *(To be replaced with real testimonial)*

- **Testimonial 4:**
  > *"I was shocked at how much money they saved us. The first funeral home we contacted quoted us over $4,000 for a simple cremation. Ashes To Ashes helped us find a reputable provider for nearly half that cost and made sure we weren't pressured into services we didn't need."*
  > — **Placeholder Name, Relationship** *(To be replaced with real testimonial)*

---

### 3.8 Contact Section

**Section ID:** `#contact`  
**Layout:** Two-column on desktop (form on left, contact info on right), stacked on mobile. Deep maroon background with white/cream text and form elements.

**Content:**

- **Section Heading (H2, white):**
  > "Get In Touch"

- **Section Subheading (cream):**
  > "Whether you need immediate assistance or want to learn more about our services, we're here for you. Reach out anytime — there's no obligation, and your first consultation is always free."

- **Contact Form Fields:**
  1. Full Name (text input, required)
  2. Email Address (email input, required)
  3. Phone Number (tel input, required)
  4. Subject (dropdown: "Immediate Need", "Pre-Planning", "General Inquiry", "Pricing Question", "Other")
  5. Message (textarea, required)
  6. Preferred Contact Method (radio buttons: "Phone", "Email", "Either")
  7. Submit Button: "Send Message" (deep gold background, white text)

- **Contact Information (right column):**
  - **Phone:** "(XXX) XXX-XXXX" *(placeholder — to be replaced with actual number)*
  - **Email:** "info@ashestoashesconcierge.com" *(placeholder — to be replaced with actual email)*
  - **Hours:**
    - "24/7 Emergency Support Line Available"
    - "Office Hours: Monday – Friday, 9:00 AM – 6:00 PM"
    - "Saturday: 10:00 AM – 2:00 PM"
    - "Sunday: By Appointment / Ministry Hours"
  - **Note:** "We respond to all inquiries within 24 hours. For immediate needs, please call our support line."

---

## 4. Footer Content

### 4.1 Footer Layout

Three-column layout on desktop, stacked on mobile. Deep maroon background, white/cream text.

### 4.2 Footer Column 1 — About

> **Ashes To Ashes Concierge Services**
> "Compassionate concierge advocacy and ministry-focused support for families navigating end-of-life arrangements."

### 4.3 Footer Column 2 — Quick Links

- Home
- About Us
- Services
- How It Works
- Pricing
- FAQ
- Contact
- Privacy Policy
- Terms of Service

### 4.4 Footer Column 3 — Contact Info

- Phone: (XXX) XXX-XXXX
- Email: info@ashestoashesconcierge.com
- 24/7 Support Available

### 4.5 Legal Disclaimer (Full Width, Below Columns)

This disclaimer must be prominently displayed in the footer on every page. It should be in a slightly different background shade (slightly lighter maroon or bordered section) to draw attention.

> **IMPORTANT DISCLAIMER:** Ashes To Ashes Concierge Services is **NOT** a funeral home, crematory, or mortuary. We are a concierge advocacy and ministry-focused service dedicated to guiding and supporting families through end-of-life planning and arrangements. We do not handle human remains, perform cremations, embalming, or burial services. We do not hold a funeral director's license or mortuary license. All cremation, funeral, and memorial services referenced are performed by independent, licensed third-party providers. Our role is to advocate, coordinate, and provide compassionate support on your behalf. Any information provided by Ashes To Ashes Concierge Services is for guidance purposes only and should not be considered legal, medical, or financial advice. Please consult with appropriate licensed professionals for specific legal, medical, or financial matters.

### 4.6 Copyright Notice

> © 2026 Ashes To Ashes Concierge Services. All rights reserved.

### 4.7 Bottom Links

- Privacy Policy | Terms of Service | Sitemap

---

## 5. Compliance Notes

### 5.1 Non-Negotiable Rules

These rules must be followed throughout the entire website without exception:

1. **Never claim or imply that Ashes To Ashes Concierge Services is a funeral home, crematory, or mortuary.** Every page and section must be consistent with the advocacy/concierge positioning.

2. **The legal disclaimer must appear in the footer on every page** and must be clearly visible and readable.

3. **Never use language that suggests the service handles remains, performs cremations, or conducts funerals.** Use language like "coordinate," "advocate," "guide," "assist," and "support."

4. **Pricing must clearly distinguish between concierge advocacy fees and actual cremation/funeral costs.** Never present pricing in a way that could be confused with funeral home pricing.

5. **All references to cremation or funeral services must clarify that these are performed by independent, licensed third-party providers.**

### 5.2 Required Disclaimer Language

The following disclaimer (or substantially similar language) must appear in the website footer:

> "Ashes To Ashes Concierge Services is NOT a funeral home, crematory, or mortuary. We are a concierge advocacy and ministry-focused service. We do not handle human remains, perform cremations, or conduct funeral services. All such services are performed by independent, licensed providers."

### 5.3 Regulatory Considerations

Based on research into the funeral industry regulatory landscape:

1. **FTC Funeral Rule:** While the FTC Funeral Rule (16 CFR Part 453) primarily regulates funeral providers, Ashes To Ashes should be knowledgeable about it to properly advocate for clients. The rule requires funeral providers to give itemized price lists and prohibits bundling requirements. The service should educate clients about these rights.

2. **State Licensing:** Funeral directors and mortuary operators require state licenses. Since Ashes To Ashes does NOT perform these services, it likely does not require a funeral director's license. However, state regulations vary, and it is strongly recommended to consult with a local attorney to confirm compliance with state-specific regulations regarding advocacy and coordination services.

3. **Advertising Compliance:** All marketing and website content must be truthful and not misleading. The service must never advertise in a way that could be interpreted as offering funeral or cremation services directly.

4. **Consumer Protection:** The service should maintain transparency in pricing, provide clear service agreements, and ensure clients understand exactly what they are paying for (advocacy/coordination) versus what they will pay separately to providers (cremation/funeral costs).

5. **Ministry/Religious Considerations:** If the service operates under a ministry or religious organization, there may be additional considerations regarding tax status, charitable solicitation laws, and religious organization regulations. Consult with legal counsel.

### 5.4 Recommended Legal Pages (Linked from Footer)

1. **Privacy Policy** — Standard privacy policy covering data collection, use, and protection.
2. **Terms of Service** — Terms governing use of the website and services, including the disclaimer language.

---

## 6. Technical Specifications

### 6.1 Responsive Breakpoints

| Breakpoint   | Width          | Target Devices          |
|--------------|----------------|-------------------------|
| Mobile       | 0 – 767px      | Phones                  |
| Tablet       | 768px – 1023px | Tablets, small laptops  |
| Desktop      | 1024px+        | Desktops, large screens |

### 6.2 Mobile-First Approach

- Base CSS styles target mobile devices
- Use `min-width` media queries to progressively enhance for larger screens
- Touch-friendly tap targets (minimum 48px × 48px)
- Readable font sizes without zooming (minimum 16px base)

### 6.3 Interactive Elements (JavaScript)

1. **Hamburger Menu:** Toggle mobile navigation overlay with smooth animation
2. **Smooth Scrolling:** Clicking nav links smoothly scrolls to the corresponding section
3. **FAQ Accordion:** Click to expand/collapse FAQ answers with smooth animation
4. **Testimonial Carousel (optional):** Auto-rotating testimonials with manual navigation dots
5. **Scroll-to-Top Button:** Appears after scrolling down, smoothly scrolls to top
6. **Active Nav Highlighting:** Highlight the current section's nav link based on scroll position
7. **Form Validation:** Client-side validation for the contact form

### 6.4 Performance & Accessibility

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- ARIA labels for interactive elements
- Alt text for all images
- Sufficient color contrast ratios (WCAG AA minimum)
- Fast loading — minimize external dependencies
- No heavy frameworks required — vanilla HTML, CSS, JavaScript

### 6.5 File Structure

```
project/
├── final/
│   ├── index.html               # Main single-page website
│   ├── css/
│   │   └── styles.css           # All styles (mobile-first, responsive)
│   ├── js/
│   │   └── main.js              # Interactive functionality
│   └── images/                  # Any images used
├── research/
│   └── website_spec.md          # This document
└── temp/                        # Temporary working files
```

---

## 7. Research Sources & References

The following sources were consulted during the research phase to inform this specification:

### 7.1 Concierge & Advocacy Service Examples
- **Concierge Funeral Services** — https://conciergefuneralservices.com/ — Example of concierge-style funeral coordination service positioning
- **Everest Funeral** — https://everestfuneral.com/ — Funeral advocacy and price negotiation service
- **The Modern Mortician** — https://themodernmortician.com/ — Death doula and end-of-life concierge service
- **Caroline Lee Concierge Services** — https://withcarolinelee.com/conciergeservices — End-of-life concierge service example

### 7.2 Consumer Advocacy Organizations
- **Funeral Consumers Alliance** — https://www.funerals.org/ — Non-profit consumer advocacy for funeral rights and education
- **People's Memorial Association** — Consumer education and funeral choice advocacy
- **Order of the Good Death** — https://www.orderofthegooddeath.com/ — Death acceptance and education organization

### 7.3 Pricing Research
- **Compassionate Cremations and Memorials (Florida)** — https://www.compassionatecremationsflorida.com/pricing/ — Direct cremation pricing examples ($950–$3,700)
- **Phaneuf Funeral Homes** — https://phaneuf.net/blog/how-much-does-cremation-cost — Cremation cost ranges ($1,300–$3,000)
- **Endswell Funeral Home** — https://endswellfuneralhome.com/cremation-cost/ — Flat-rate concierge funeral care ($3,000)
- **US Funerals Online** — Industry pricing data (January 2026)

### 7.4 Regulatory & Legal
- **Federal Trade Commission (FTC) Funeral Rule** — https://www.ftc.gov/ — Consumer protection regulations for funeral services
- **Shared Crossing Project** — https://www.sharedcrossing.com/concierge — End-of-life concierge service model
- **Cremation Tampa Bay** — https://cremationstampabay.com/ — Distinction between funeral services and cremation services

### 7.5 Ministry & End-of-Life Care
- **Death With Dignity** — https://deathwithdignity.org/ — End-of-life options and advocacy
- **Compassion & Choices** — https://compassionandchoices.org/ — Federal advocacy for end-of-life policy
- **Cremation.green** — https://www.cremation.green/ — Common death care questions and answers

---

*End of Website Specification Document*
*Prepared for: Ashes To Ashes Concierge Services Website Development*
*Date: February 8, 2026*
