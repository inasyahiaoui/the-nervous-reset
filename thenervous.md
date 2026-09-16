# THE NERVOUS RESET

## Master Specification --- `thenervous.md`

> **Status:** Master specification / source of truth\
> **Project:** The Nervous Reset --- Brand Landing Page + Reset
> Check-In\
> **Primary goal:** Build a premium, memorable, emotionally intelligent
> digital wellness brand experience that introduces five digital Reset
> products and guides visitors toward the Reset most relevant to their
> current situation.
>
> This document is the governing specification for Claude Code and all
> future implementation work. Read it before making project changes.

------------------------------------------------------------------------

# 1. PROJECT VISION

## 1.1 Brand

**The Nervous Reset** is a digital wellness brand built around guided
"resets" for difficult or overwhelming seasons of life.

The brand does **not** position itself as a medical clinic, diagnostic
service, or replacement for professional mental-health care.

The brand provides practical, self-guided digital experiences designed
to help people understand what they are going through, create space to
pause, and take manageable steps forward.

## 1.2 Core product philosophy

The Nervous Reset does not primarily sell PDFs.

Each product is a **complete digital Reset experience** made from:

-   A digital book
-   An interactive platform for applying the book
-   A dedicated planner
-   Phone wallpapers / visual reminders

The product philosophy is:

**Read → Understand → Apply → Reflect → Reset**

The Landing Page must communicate this value clearly without
overwhelming the visitor.

## 1.3 Brand promise

The emotional promise is:

> You do not have to fix everything at once. You can understand where
> you are, find a place to begin, and take one step at a time.

The experience should feel:

-   Calm
-   Premium
-   Human
-   Intelligent
-   Reassuring
-   Modern
-   Minimal
-   Intentional
-   Never clinical or frightening

------------------------------------------------------------------------

# 2. PRIMARY OBJECTIVES

The website must accomplish five things:

1.  Introduce The Nervous Reset as a distinctive brand.
2.  Make the five Resets easy to understand.
3.  Give uncertain visitors a clear entry point through the **Reset
    Check-In**.
4.  Capture the visitor's email without requiring account creation.
5.  Eventually direct visitors to the appropriate Payhip product.

The website should make the visitor think:

> "This understands what I am going through."

Then:

> "I know where to start."

Then:

> "This feels worth exploring."

------------------------------------------------------------------------

# 3. IMPORTANT SIMPLICITY RULE

This project must remain intentionally simple.

Do NOT introduce complexity unless it is genuinely necessary.

## Do NOT build for the Landing Page:

-   User accounts
-   Passwords
-   Login
-   Authentication
-   User profiles
-   User dashboards
-   Supabase authentication
-   A traditional application database
-   Payment processing
-   Shopping cart
-   In-platform checkout
-   CMS
-   Admin dashboard

The Landing Page is primarily a marketing + discovery + Check-In +
email-capture experience.

## Current data flow

Visitor → Landing Page → Reset Check-In → Email capture → Result →
Recommended Reset → Product information → Payhip link (added at final
stage)

------------------------------------------------------------------------

# 4. BRAND NAME AND LANGUAGE

Official brand name:

**THE NERVOUS RESET**

Use consistent capitalization in major brand treatments.

The primary website language is **English**.

Copy should be:

-   Natural
-   Modern
-   Emotionally intelligent
-   Concise
-   Human
-   Never exaggerated
-   Never overly clinical
-   Never generic self-help language

Avoid empty marketing phrases such as:

-   "Transform your life overnight"
-   "Cure yourself"
-   "Guaranteed results"
-   "Fix your mental health"
-   "Heal everything"
-   "Become a completely new person"

Prefer language around:

-   Reset
-   Space
-   Pause
-   Understand
-   Begin
-   Support
-   Practice
-   Reconnect
-   Restore
-   One step
-   What you are carrying
-   Where you are right now

------------------------------------------------------------------------

# 5. VISUAL IDENTITY

## 5.1 Logo

The supplied brand logo is the primary visual reference.

The logo consists of a minimal white organic wave with two white
circular points on a black background and a small four-point sparkle.

The logo's visual language is:

-   Extremely minimal
-   Geometric + organic
-   High contrast
-   Spacious
-   Quiet
-   Premium
-   Symbolic

The logo must NOT be redesigned casually.

Use the existing logo as the source of truth.

## 5.2 Brand visual metaphor

The wave is not merely decoration.

It represents:

-   Breath
-   Rhythm
-   Nervous-system regulation
-   Movement
-   Change
-   Returning to balance
-   A reset

The wave should become a recurring visual language throughout the
website.

## 5.3 Sparkle

The small four-point sparkle is a secondary brand motif.

Use it sparingly for:

-   Section transitions
-   Small moments of emphasis
-   Result reveals
-   Micro-interactions
-   Decorative accents

Do not scatter sparkles everywhere.

Scarcity creates premium feeling.

## 5.4 Dots

The two dots from the logo can occasionally be used as:

-   Decorative markers
-   Progress elements
-   Small visual anchors
-   Transition states

They should remain subtle.

------------------------------------------------------------------------

# 6. COLOR DIRECTION

## 6.1 Core palette

The primary visual system should be built around:

-   Deep black / near-black
-   Pure white
-   Soft off-white / warm neutral

The site should feel premium through contrast and restraint.

## 6.2 Accent colors

Each Reset may eventually have a subtle accent color.

The accents must remain muted and sophisticated.

Suggested direction only:

-   Anxiety → soft blue / teal
-   New Mom → warm blush
-   Burnout → muted amber
-   Low Energy → soft sage
-   Heartbreak → muted mauve

These are starting directions, not immutable final values.

Do not allow the five colors to make the main website look colorful or
playful.

The brand always comes first.

## 6.3 Color rules

Avoid:

-   Neon gradients
-   Excessive purple
-   Generic "mental health" blue
-   Loud CTA colors
-   Rainbow systems
-   Overly saturated backgrounds

Use color intentionally.

------------------------------------------------------------------------

# 7. TYPOGRAPHY

Typography should feel:

-   Editorial
-   Premium
-   Modern
-   Highly readable

Use a strong display typeface for major headings if appropriate,
combined with a highly legible body font.

Typography hierarchy must be obvious:

1.  Brand / display
2.  Hero headline
3.  Section headline
4.  Supporting headline
5.  Body copy
6.  Labels
7.  Metadata / microcopy

Do not use overly decorative fonts that reduce readability.

Do not use all-caps for large amounts of body copy.

------------------------------------------------------------------------

# 8. SPACING AND COMPOSITION

Whitespace is a major part of the brand.

Do not fill every area of the screen.

Use:

-   Large breathing room
-   Strong vertical rhythm
-   Large section transitions
-   Clear visual hierarchy
-   Generous card padding

The website should feel intentionally sparse rather than unfinished.

------------------------------------------------------------------------

# 9. MOTION DESIGN

Motion is important, but restraint is mandatory.

## Desired motion language

-   Slow
-   Soft
-   Organic
-   Atmospheric
-   Smooth
-   Purposeful

The wave may have a subtle breathing-like movement.

Possible interactions:

-   Gentle wave movement
-   Soft opacity changes
-   Slight text reveal
-   Smooth section transitions
-   Subtle hover movement
-   Result reveal animation
-   Small sparkle appearance

Avoid:

-   Fast bouncing
-   Excessive parallax
-   Aggressive zooming
-   Constant movement
-   Distracting scroll effects
-   Heavy animation libraries unless genuinely necessary

Respect `prefers-reduced-motion`.

The website must remain fully usable with reduced motion.

------------------------------------------------------------------------

# 10. LANDING PAGE INFORMATION ARCHITECTURE

Recommended order:

1.  Navigation
2.  Hero
3.  Brand philosophy / emotional problem
4.  Reset Check-In
5.  Five Resets
6.  What is inside each Reset
7.  How it works
8.  Brand closing statement
9.  Final CTA
10. Footer

The exact visual arrangement can evolve during implementation, but the
psychological flow should remain.

------------------------------------------------------------------------

# 11. NAVIGATION

Keep navigation minimal.

Suggested items:

-   The Resets
-   Reset Check-In
-   How It Works

Primary CTA:

**Take the Check-In**

The logo returns to the homepage.

On mobile:

-   Keep navigation extremely simple.
-   Use a clean menu if necessary.
-   Do not overload the mobile header.

------------------------------------------------------------------------

# 12. HERO SECTION

The Hero is the first major impression.

It should immediately establish:

**THE NERVOUS RESET**

Then communicate the core idea without a wall of text.

Possible conceptual direction:

> Digital resets for the seasons of life that feel like too much.

Primary CTA:

**Take the Reset Check-In**

Secondary CTA:

**Explore the Resets**

The hero should use the logo/wave language as a visual focal point.

Do not make the hero look like a generic SaaS landing page.

------------------------------------------------------------------------

# 13. BRAND INTRODUCTION

The next section should communicate:

> You do not need to fix everything at once.

The copy should validate the visitor without diagnosing them.

Concept:

Life can leave us:

-   Overwhelmed
-   Drained
-   Disconnected
-   Exhausted
-   Heartbroken
-   Stuck

The Nervous Reset gives the visitor a place to begin.

This section should be emotionally strong but visually minimal.

------------------------------------------------------------------------

# 14. THE RESET CHECK-IN

## 14.1 Role

The Reset Check-In is a central feature of the website.

It is not merely a marketing quiz.

It is a guided wellbeing check-in designed to help the visitor identify
what area may deserve attention right now.

## 14.2 Important positioning

Do NOT call the experience a medical diagnosis.

Avoid:

-   "Find out if you are mentally ill"
-   "Are you sick?"
-   "Diagnose yourself"
-   "You have anxiety"
-   "You are depressed"

Prefer:

-   "Check in with yourself"
-   "Understand where you are right now"
-   "Find the Reset that may fit you"
-   "See what may need your attention"
-   "Find your starting point"

The check-in provides **guidance, not diagnosis**.

------------------------------------------------------------------------

# 15. CHECK-IN ENTRY FLOW

The email must be requested **before the first question**.

Suggested introduction:

> **Before we begin**
>
> Take a few quiet minutes to check in with yourself. Enter your email
> to receive your personalized result.

Field:

**Email address**

CTA:

**Start My Check-In**

Do NOT ask for:

-   Name
-   Age
-   Password
-   Phone number
-   Address
-   Account creation

Only collect the email unless a future requirement explicitly changes
this.

------------------------------------------------------------------------

# 16. EMAIL DATA

The email will eventually be stored in Google Sheets.

Minimum useful data:

-   Date / timestamp
-   Email
-   Result category
-   Recommended Reset

Avoid storing detailed answers to sensitive wellbeing questions unless
there is a clear, justified reason and an appropriate privacy design.

The first implementation should keep data collection minimal.

------------------------------------------------------------------------

# 17. CHECK-IN EXPERIENCE

The Check-In must NOT look like a boring form.

Avoid:

> Question 4 of 15\
> ○ Answer A\
> ○ Answer B\
> Next

Instead, create a calm, focused, almost conversational experience.

One question at a time is preferred.

Each screen should contain:

-   Small progress indicator
-   One clear question
-   3--5 answer choices where appropriate
-   Clear touch targets
-   Smooth transition
-   Optional back control where appropriate

Answering should feel effortless.

------------------------------------------------------------------------

# 18. CHECK-IN VISUAL LANGUAGE

The Check-In should visually belong to the brand.

Use:

-   Black / white / warm neutral system
-   Wave motif
-   Dots
-   Occasional sparkle
-   Large typography
-   Generous whitespace
-   Soft transitions

The progress indicator can evolve into a wave-like visual rather than a
generic progress bar.

Example conceptual progression:

Start → calm wave → wave changes subtly as progress increases →
completed wave / reveal

Do not over-design the progress indicator.

------------------------------------------------------------------------

# 19. CHECK-IN QUESTION DESIGN

The exact questions will be finalized before implementation.

Questions should explore broad wellbeing dimensions related to the five
Reset products, such as:

-   Mental tension / worry
-   Emotional overwhelm
-   Energy / depletion
-   Rest / recovery
-   Life pressure
-   Burnout-like exhaustion
-   New-mother adjustment
-   Emotional loss / heartbreak

Questions must be:

-   Clear
-   Non-leading
-   Non-judgmental
-   Short
-   Easy to answer
-   Appropriate for a general wellbeing check-in

Do not make the quiz unnecessarily long.

Target experience:

**Short enough to complete comfortably.**

The exact question count should be decided during the Check-In
specification phase based on the scoring design.

------------------------------------------------------------------------

# 20. SCORING LOGIC

The scoring system should be simple and transparent internally.

Each answer contributes to one or more dimensions.

Potential dimensions:

-   Anxiety / mental tension
-   Burnout / depletion
-   Low energy
-   New Mom adjustment
-   Heartbreak / emotional recovery

A sixth state may exist:

-   Doing Well / No strong reset signal

The system should identify the strongest relevant area rather than
trying to produce a complicated psychological profile.

Do not over-engineer the scoring algorithm.

------------------------------------------------------------------------

# 21. THREE PRIMARY RESULT STATES

The Check-In should conceptually produce three levels.

## State A --- Doing Well

The responses do not suggest significant current distress.

The website should reassure the user.

Example tone:

> **You're doing okay.**
>
> Nothing in your answers strongly suggests that you need a major reset
> right now. Keep protecting the habits and connections that help you
> feel grounded.

Then provide several practical, non-medical suggestions.

Do NOT force a product recommendation.

This is important for brand trust.

------------------------------------------------------------------------

## State B --- A Reset May Help

The user shows meaningful signs that one area deserves attention.

Example:

> **You may be carrying more than usual.**

Then explain the strongest area.

Example:

> Your answers suggest that mental tension and overthinking may be
> taking up more space than you'd like.

Then:

**Your suggested starting point**

**ANXIETY RESET**

CTA:

**Explore the Anxiety Reset**

The result must feel supportive, not alarming.

------------------------------------------------------------------------

## State C --- Consider Additional Support

If the answers indicate severe or concerning distress, the website must
not behave as though a digital book is a sufficient treatment.

Tone:

> **You may need more support than a self-guided reset can provide.**

Encourage the visitor to consider speaking with a qualified
professional.

If the assessment includes a self-harm / immediate-danger question in
the future, that path must prioritize appropriate urgent support rather
than product promotion.

Do not make medical diagnoses.

------------------------------------------------------------------------

# 22. RESULT EXPERIENCE

The result should be one of the most visually impressive moments of the
site.

After the final answer:

1.  Brief transition
2.  Calm pause
3.  Wave animation
4.  Result reveal
5.  Personalized interpretation
6.  Recommended Reset if applicable
7.  CTA

Avoid an abrupt results page.

The result should feel like a conclusion to a guided experience.

------------------------------------------------------------------------

# 23. RESET PROFILE LANGUAGE

Where useful, results can have emotionally resonant profile names rather
than only clinical-sounding categories.

Examples:

-   **The Overloaded Mind** → Anxiety
-   **The Exhausted Self** → Burnout
-   **The Depleted Self** → Low Energy
-   **The New Beginning** → New Mom
-   **The Healing Heart** → Heartbreak

These names are conceptual and must be reviewed before final
implementation.

Do not make the profile names sound like diagnoses or permanent
identities.

------------------------------------------------------------------------

# 24. FIVE RESET PRODUCTS

The brand currently has five products.

## 24.1 ANXIETY

Core theme:

-   Worry
-   Overthinking
-   Mental tension
-   Feeling on edge
-   Creating more calm

Positioning direction:

**A guided reset for a mind that has been running too fast.**

------------------------------------------------------------------------

## 24.2 NEW MOM

Core theme:

-   Adjustment to motherhood
-   Emotional overload
-   Identity change
-   Rest
-   Self-care
-   Reconnection with self

Positioning direction:

**A gentle reset for the woman behind the new-mom identity.**

The product should feel warm and compassionate, never judgmental.

------------------------------------------------------------------------

## 24.3 BURNOUT

Core theme:

-   Exhaustion
-   Overload
-   Constant output
-   Boundaries
-   Recovery
-   Rebuilding capacity

Positioning direction:

**For when you are tired of being tired.**

------------------------------------------------------------------------

## 24.4 LOW ENERGY

Core theme:

-   Depletion
-   Low motivation
-   Daily energy
-   Gentle routines
-   Rebuilding momentum

Positioning direction:

**A gentle reset for when your energy reserves feel low.**

Avoid presenting low energy as a guaranteed medical condition.

------------------------------------------------------------------------

## 24.5 HEARTBREAK

Core theme:

-   Emotional loss
-   Separation
-   Grief after a relationship
-   Rebuilding identity
-   Emotional recovery
-   Moving forward

Positioning direction:

**A guided reset for finding your way forward after heartbreak.**

The tone should be emotionally rich but hopeful.

------------------------------------------------------------------------

# 25. PRODUCT CARD DESIGN

Each product card should contain:

-   Product name
-   Short emotional description
-   Distinct visual accent
-   Brand-consistent wave/graphic
-   Clear CTA

Possible CTA:

**Explore the Reset**

Do not use aggressive sales language.

------------------------------------------------------------------------

# 26. PRODUCT SYSTEM

Every product should communicate that it is more than a book.

Visual structure:

### THE BOOK

Read and understand.

### THE INTERACTIVE EXPERIENCE

Put the ideas into practice.

### THE PLANNER

Turn reflection into action.

### THE WALLPAPERS

Carry visual reminders with you.

The system can be represented visually as four connected elements.

------------------------------------------------------------------------

# 27. "HOW IT WORKS"

Keep this section extremely simple.

### 01 --- Check in

Take a moment to understand where you are.

### 02 --- Find your Reset

Discover which Reset may fit your current season.

### 03 --- Start your experience

Read, practice, reflect, and move at your own pace.

The exact copy may evolve, but the three-step logic should remain.

------------------------------------------------------------------------

# 28. PAYHIP INTEGRATION

Payhip links are intentionally a **final-stage task**.

At the current development stage, the five Payhip products may not yet
be finished.

Therefore:

-   Do NOT require Payhip URLs during initial development.
-   Do NOT block UI development on Payhip.
-   Do NOT invent Payhip URLs.
-   Do NOT hard-code fake production links.
-   Use clearly identifiable placeholders or temporary disabled CTAs if
    necessary.

When the products are finished, add the real links:

-   Anxiety → Payhip URL
-   New Mom → Payhip URL
-   Burnout → Payhip URL
-   Low Energy → Payhip URL
-   Heartbreak → Payhip URL

The implementation should make replacing these links easy and localized.

------------------------------------------------------------------------

# 29. GOOGLE SHEETS

Google Sheets is the intended lightweight storage destination for email
leads.

The integration should be designed so it can be added without
restructuring the entire application.

Potential implementation approach:

Website → lightweight server endpoint / form action → Google Sheets
integration

Do not add a database just to support email capture.

Do not expose private API credentials in client-side code.

Do not put secrets in `NEXT_PUBLIC_*` variables.

The final integration method will be selected during implementation
based on the simplest secure option available.

------------------------------------------------------------------------

# 30. PRIVACY AND TRUST

Because the Check-In touches personal wellbeing, the experience must
avoid unnecessary data collection.

Principles:

-   Collect only what is needed.
-   Email is required because the user explicitly chooses to receive the
    result.
-   Do not store detailed psychological answers by default.
-   Do not imply medical diagnosis.
-   Do not sell or expose personal wellbeing information.
-   Keep copy clear about what the Check-In is.

A concise privacy notice may be added near the email field.

------------------------------------------------------------------------

# 31. RESPONSIVE DESIGN

Mobile is a first-class experience.

The website must be excellent at:

-   Small phones
-   Large phones
-   Tablets
-   Desktop
-   Large desktop screens

Do not merely shrink the desktop design.

Pay particular attention to:

-   Hero composition
-   Typography
-   Navigation
-   Check-In answer buttons
-   Result screens
-   Product cards
-   Touch target sizes
-   Animation performance

------------------------------------------------------------------------

# 32. ACCESSIBILITY

Must include:

-   Semantic HTML
-   Keyboard navigation
-   Visible focus states
-   Accessible form labels
-   Proper button semantics
-   Sufficient text contrast
-   Screen-reader-friendly structure
-   `prefers-reduced-motion`
-   No interaction that depends only on hover
-   Clear error states

The design can be premium without sacrificing accessibility.

------------------------------------------------------------------------

# 33. PERFORMANCE

Do not sacrifice performance for visual effects.

Priorities:

1.  Fast initial load
2.  Optimized images
3.  Minimal JavaScript where possible
4.  Avoid unnecessary dependencies
5.  Avoid large animation libraries unless necessary
6.  Lazy-load non-critical media
7.  Keep animations GPU-friendly
8.  Maintain smooth mobile scrolling

The site should feel light.

------------------------------------------------------------------------

# 34. TECHNICAL PHILOSOPHY

The implementation should favor:

-   Simple architecture
-   Small number of dependencies
-   Reusable components
-   Clear data structures
-   Easy future edits
-   No unnecessary abstraction
-   No premature backend architecture

If a feature can be implemented cleanly without adding a package, prefer
that.

If a feature does not materially improve the user experience, do not
build it.

------------------------------------------------------------------------

# 35. SOURCE-OF-TRUTH RULE

This file is the project's master specification.

Claude Code must:

1.  Read `thenervous.md` before major implementation work.
2.  Follow this specification unless explicitly instructed otherwise.
3.  Avoid silently changing core product decisions.
4.  Ask for clarification only when a decision genuinely affects
    architecture, brand, safety, or functionality.
5.  Prefer the simplest implementation that satisfies the specification.

If a later explicit user instruction conflicts with this file, the
latest explicit user instruction takes priority and this file should be
updated accordingly.

------------------------------------------------------------------------

# 36. DEVELOPMENT RULES FOR CLAUDE CODE

## Always

-   Inspect the existing code before modifying it.
-   Reuse existing components where appropriate.
-   Keep the design system consistent.
-   Keep the brand feeling premium.
-   Test changes.
-   Check mobile behavior.
-   Preserve working functionality.
-   Keep code readable.
-   Make changes in logical phases.

## Never

-   Rewrite the entire project unnecessarily.
-   Add authentication.
-   Add a database without explicit approval.
-   Add payment processing.
-   Invent Payhip links.
-   Add random UI libraries.
-   Replace the logo with a generic icon.
-   Turn the design into a generic SaaS template.
-   Overuse gradients.
-   Overuse animations.
-   Add stock-photo-heavy sections unless explicitly requested.
-   Change unrelated files.
-   Delete working features without reason.

------------------------------------------------------------------------

# 37. DESIGN QUALITY BAR

Before considering a major UI phase complete, evaluate:

### Brand

Does it immediately feel like The Nervous Reset?

### Visual

Does it feel premium and distinctive?

### Emotional

Does it feel calm, intelligent, and human?

### UX

Can a first-time visitor understand what to do?

### Check-In

Does it feel like an experience rather than a form?

### Product

Is the value of the complete Reset clear?

### Mobile

Does it still feel premium on a phone?

### Motion

Does movement add atmosphere rather than distraction?

### Trust

Does the language avoid exaggerated medical or therapeutic claims?

------------------------------------------------------------------------

# 38. WHAT THE WEBSITE IS NOT

The website is NOT:

-   A hospital
-   A therapy clinic
-   A diagnostic tool
-   A social network
-   A generic online bookstore
-   A SaaS dashboard
-   A meditation app
-   A clinical assessment platform

It is:

> **A premium digital wellness brand offering guided Reset experiences
> for difficult seasons of life.**

------------------------------------------------------------------------

# 39. CORE USER JOURNEY

The ideal journey:

**Arrive**

↓

**Feel understood**

↓

**Discover The Nervous Reset**

↓

**Take the Check-In**

↓

**Enter email**

↓

**Answer questions**

↓

**Receive a meaningful result**

↓

**Understand the suggested starting point**

↓

**Explore the relevant Reset**

↓

**Eventually purchase through Payhip**

The user should never feel trapped or pressured.

------------------------------------------------------------------------

# 40. PRIMARY CTA HIERARCHY

Primary:

**Take the Reset Check-In**

Secondary:

**Explore the Resets**

Product:

**Explore the Reset**

Purchase CTA, when Payhip is ready:

**Get the Reset**

Avoid excessive CTA variations.

------------------------------------------------------------------------

# 41. FOOTER

Keep it minimal.

Include:

-   The Nervous Reset logo/name
-   Short brand statement
-   Navigation
-   Contact / support if available
-   Privacy
-   Terms if applicable
-   Copyright

Do not overload the footer.

------------------------------------------------------------------------

# 42. FUTURE EXPANSION

The architecture should leave room for future additions such as:

-   Additional Resets
-   More digital tools
-   More Check-In profiles
-   Email sequences
-   Educational resources
-   Additional interactive experiences

But do NOT build these now.

Build a strong foundation first.

------------------------------------------------------------------------

# 43. FINAL CREATIVE DIRECTION

The final website should feel like entering a quiet space.

Not loud.

Not clinical.

Not salesy.

Not childish.

Not generic.

The visual identity should take the simplicity of the supplied logo and
expand it into a complete digital world.

Think:

**black space + white wave + soft light + typography + silence +
movement**

The wave is the recurring symbol.

The sparkle is the moment of insight.

The whitespace is the breathing room.

The Check-In is the doorway.

The five Resets are the paths.

The brand is the environment that connects them.

------------------------------------------------------------------------

# 44. NORTH STAR

If there is ever a design or implementation decision that is not
explicitly covered in this document, use this question:

> **Does this make The Nervous Reset feel calmer, more premium, more
> distinctive, more useful, or easier to experience?**

If the answer is no, it probably does not belong.

------------------------------------------------------------------------

# 45. CURRENT PROJECT SCOPE

## Build now

-   Brand landing page
-   Responsive design
-   Navigation
-   Hero
-   Brand story
-   Reset Check-In
-   Email-first entry
-   Check-In scoring
-   Results
-   Five Reset presentation
-   Product detail/value presentation
-   How It Works
-   Final CTA
-   Footer
-   Brand motion system
-   Accessibility
-   Performance

## Add later

-   Google Sheets production integration
-   Final Payhip URLs
-   Final product-specific purchase CTAs
-   Final legal/privacy copy
-   Final production assets

## Do not build unless explicitly requested

-   Authentication
-   User accounts
-   Database
-   Payments
-   Dashboard
-   Admin panel
-   OAuth
-   Subscription system
-   Complex CMS

------------------------------------------------------------------------

# 46. IMPLEMENTATION PHASE ORDER

The recommended implementation order is:

### Phase 1

Project inspection + design foundation

### Phase 2

Landing Page shell + navigation + Hero

### Phase 3

Brand story + Reset collection

### Phase 4

Reset Check-In experience

### Phase 5

Scoring + Results

### Phase 6

Email capture architecture

### Phase 7

How It Works + final CTA + Footer

### Phase 8

Responsive + accessibility + performance

### Phase 9

Google Sheets integration

### Phase 10

Final Payhip links

### Phase 11

Final QA + deployment

Do not jump directly to Phase 10.

------------------------------------------------------------------------

# 47. SUCCESS CRITERIA

The project is successful when:

-   A visitor understands the brand within seconds.
-   The website feels visually distinctive.
-   The logo's visual language is clearly reflected throughout the
    experience.
-   The Check-In feels memorable and effortless.
-   The visitor can discover a suitable Reset without confusion.
-   The email collection feels natural.
-   The site does not require an account.
-   No unnecessary database is required.
-   Payhip can be connected later without architectural changes.
-   The five products feel like one coherent family.
-   The experience is excellent on mobile.
-   The website feels premium enough to support the perceived value of
    the digital products.

------------------------------------------------------------------------

# END OF MASTER SPECIFICATION

**The Nervous Reset is not about fixing people.\
It is about giving people a place to pause, understand where they are,
and find a way forward.**
