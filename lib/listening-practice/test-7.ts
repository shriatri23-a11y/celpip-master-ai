import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest7: ListeningPracticeTest = {
  id: "hard-7",
  title: "Elite Listening Test 7",
  topic: "Deposit dispute, sibling caregiving, clinic booking, wildfire smoke, open-access publishing, congestion pricing",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test. Competing obligations, dry humour, and conclusions that hinge on a single qualifying clause — tuned so even an examiner rarely clears CLB 6 on one listen.",
  timeMinutes: 48,
  parts: [
    {
      part: 1,
      partLabel: "Listening to Problem Solving",
      sectionTitle: "Listening to Problem Solving",
      instructionBullets: [
        "You will hear a conversation. You will hear it only once.",
        "Then you will answer 8 questions. Choose the best answer to each question.",
      ],
      scenario:
        "A former tenant disputes deductions from a rental deposit with a property manager.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Tenant", text: "You've kept four hundred dollars of my deposit for 'repainting,' but I lived there three years and painting after that long is normal wear. That's not on me." },
        { speaker: "Manager", text: "You're right about ordinary repainting — and if that were all, I'd refund it. But the charge isn't for repainting generally; it's for covering the accent wall you painted dark red without written permission." },
        { speaker: "Tenant", text: "The lease said I could paint." },
        { speaker: "Manager", text: "It said you could paint with approval and return the walls to neutral. You did the first half and skipped the second. Repainting a normal wall is our cost; restoring a colour we didn't approve is yours." },
        { speaker: "Tenant", text: "Dark red takes what, one extra coat? Four hundred dollars is absurd." },
        { speaker: "Manager", text: "It took three coats plus a primer to stop the red bleeding through — I have the painter's itemized invoice, which I'll send you. If it had been one coat, you'd have a strong case, and I'd adjust it." },
        { speaker: "Tenant", text: "Fine, but you also deducted for cleaning, and I had it professionally cleaned. I have the receipt." },
        { speaker: "Manager", text: "Then that deduction I'll reverse today — a professional-cleaning receipt overrides our standard cleaning fee entirely. Send it over and I'll refund that portion within the week." },
        { speaker: "Tenant", text: "So the cleaning comes back, but the red wall stays deducted." },
        { speaker: "Manager", text: "Correct, unless the invoice I send looks padded to you, in which case you can dispute that specific line at the tenancy board. I'd say you'd win on cleaning and lose on the wall." },
      ],
      transcript:
        "A former tenant disputes $400 kept from the deposit for 'repainting.' The manager agrees ordinary repainting after three years is normal wear and would be refunded — but the charge is for restoring an unapproved dark-red accent wall the tenant painted without written permission. The lease allowed painting with approval and required returning walls to neutral; the tenant did the first, not the second. The red needed three coats plus primer (an itemized invoice will be sent); one coat would have given the tenant a strong case. A separate cleaning deduction will be reversed because the tenant has a professional-cleaning receipt, which overrides the standard fee. The manager predicts the tenant wins on cleaning and loses on the wall.",
      questions: [
        {
          prompt: "What is the manager's position on ordinary repainting?",
          options: [
            "It is always the tenant's responsibility.",
            "After three years it is normal wear and would be refunded.",
            "It is never charged to anyone.",
            "It depends on the tenant's income.",
          ],
          correctIndex: 1,
          explanation:
            "He agrees ordinary repainting after three years is normal wear and 'if that were all, I'd refund it.'",
        },
        {
          prompt: "Why is the repainting charge actually being kept?",
          options: [
            "The tenant never cleaned the apartment.",
            "It covers restoring an unapproved dark-red accent wall.",
            "The tenant broke the lease early.",
            "The whole apartment needed repainting.",
          ],
          correctIndex: 1,
          explanation:
            "The charge is 'for covering the accent wall you painted dark red without written permission.'",
        },
        {
          prompt: "How does the manager interpret the lease's painting clause?",
          options: [
            "Painting was completely forbidden.",
            "Painting was allowed with approval and required returning walls to neutral.",
            "Any painting was automatically approved.",
            "Only professional painters could be used.",
          ],
          correctIndex: 1,
          explanation:
            "It allowed painting 'with approval' and required returning walls 'to neutral' — the tenant skipped the second half.",
        },
        {
          prompt: "Why does the manager say the $400 is justified rather than 'absurd'?",
          options: [
            "The painter charges a flat fee.",
            "It took three coats plus primer to stop the red bleeding through.",
            "Dark red is a banned colour.",
            "The tenant refused to pay rent.",
          ],
          correctIndex: 1,
          explanation:
            "It 'took three coats plus a primer to stop the red bleeding through,' documented in an itemized invoice.",
        },
        {
          prompt: "Under what circumstance would the manager adjust the wall charge?",
          options: [
            "If the tenant complained loudly enough.",
            "If it had only required one coat.",
            "If the tenant repainted it themselves.",
            "If the tenant stayed longer than three years.",
          ],
          correctIndex: 1,
          explanation:
            "'If it had been one coat, you'd have a strong case, and I'd adjust it.'",
        },
        {
          prompt: "Why will the cleaning deduction be reversed?",
          options: [
            "The manager forgot to apply it.",
            "A professional-cleaning receipt overrides the standard cleaning fee.",
            "Cleaning is never charged.",
            "The tenant threatened legal action.",
          ],
          correctIndex: 1,
          explanation:
            "'A professional-cleaning receipt overrides our standard cleaning fee entirely.'",
        },
        {
          prompt: "What does the manager predict about a tenancy-board dispute?",
          options: [
            "The tenant would win on both items.",
            "The tenant would win on cleaning and lose on the wall.",
            "The tenant would lose on both.",
            "The board would refuse to hear it.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'you'd win on cleaning and lose on the wall.'",
        },
        {
          prompt: "How would you describe the manager's overall handling?",
          options: [
            "Rigid, refusing to concede anything.",
            "Fair, conceding valid points while defending the documented charge.",
            "Evasive about the invoice.",
            "Hostile toward the tenant.",
          ],
          correctIndex: 1,
          explanation:
            "He grants the cleaning reversal and explains exactly when he'd adjust the wall charge — fair and evidence-based.",
        },
      ],
    },
    {
      part: 2,
      partLabel: "Listening to a Daily Life Conversation",
      sectionTitle: "Listening to a Daily Life Conversation",
      instructionBullets: [
        "You will hear a conversation. You will hear it only once.",
        "Then you will answer 5 questions. Choose the best answer to each question.",
      ],
      blueprint: LISTENING_BLUEPRINT.dailyConversation,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 70 seconds long.",
      script: [
        { speaker: "Ravi", text: "Mom's going to need someone at her appointments now, and you're two hours closer than I am. I'm not dumping it on you, but geography's geography." },
        { speaker: "Lena", text: "I hear the geography. What I don't hear is any acknowledgement that 'closer' has meant me doing everything for two years while you send links to articles about caregiving." },
        { speaker: "Ravi", text: "That's fair, and it stings because it's true. I've treated proximity as if it were your job and distance as my excuse." },
        { speaker: "Lena", text: "So don't just apologize — trade me something concrete. Take over every financial and admin task remotely. The forms, the insurance calls, the pharmacy. I'll keep the in-person visits since I'm here." },
        { speaker: "Ravi", text: "That I can actually do well, and honestly better than the visits — I'm the one who likes spreadsheets. Split it by what each of us can do, not by guilt." },
        { speaker: "Lena", text: "Exactly. And when you visit, it's to give me an actual weekend off, not to 'supervise.'" },
        { speaker: "Ravi", text: "Deal. I'll book the first weekend this month so it's real and not a someday." },
      ],
      transcript:
        "Ravi says their mother now needs someone at appointments and Lena, being two hours closer, is better placed. Lena pushes back that 'closer' has meant her doing everything for two years while Ravi merely sends articles. Ravi concedes he's treated her proximity as her job and his distance as an excuse. Instead of just apologizing, Lena proposes a concrete trade: Ravi takes all financial and admin tasks remotely (forms, insurance, pharmacy) while she keeps in-person visits. Ravi agrees, noting he's better at that anyway — split by ability, not guilt. Lena adds that his visits should give her a real weekend off, not 'supervise.' Ravi commits to booking the first weekend this month.",
      questions: [
        {
          prompt: "What does Ravi initially argue?",
          options: [
            "That Lena should move closer to their mother.",
            "That Lena, being geographically closer, should attend the appointments.",
            "That their mother needs no help.",
            "That they should hire a caregiver.",
          ],
          correctIndex: 1,
          explanation:
            "He argues from 'geography' — Lena is 'two hours closer' — that she attend the appointments.",
        },
        {
          prompt: "What is Lena's main grievance?",
          options: [
            "That Ravi visits too often.",
            "That 'closer' has meant her doing everything while Ravi only sends articles.",
            "That their mother refuses help.",
            "That Ravi spends too much money.",
          ],
          correctIndex: 1,
          explanation:
            "She resents doing 'everything for two years while you send links to articles about caregiving.'",
        },
        {
          prompt: "How does Ravi respond to her grievance?",
          options: [
            "He denies it.",
            "He concedes he treated her proximity as her job and his distance as an excuse.",
            "He blames their mother.",
            "He ends the conversation.",
          ],
          correctIndex: 1,
          explanation:
            "He admits 'it stings because it's true' and that he used proximity/distance as job and excuse.",
        },
        {
          prompt: "What concrete trade does Lena propose?",
          options: [
            "Ravi handles all financial/admin tasks remotely; she keeps in-person visits.",
            "They alternate every appointment.",
            "Ravi pays her for the visits.",
            "They both stop helping.",
          ],
          correctIndex: 0,
          explanation:
            "Ravi takes 'every financial and admin task remotely,' while Lena keeps 'the in-person visits.'",
        },
        {
          prompt: "What does Lena say Ravi's visits should accomplish?",
          options: [
            "Supervising her caregiving.",
            "Giving her an actual weekend off.",
            "Meeting their mother's doctors.",
            "Reviewing the finances in person.",
          ],
          correctIndex: 1,
          explanation:
            "His visits should 'give me an actual weekend off, not to supervise.'",
        },
      ],
    },
    {
      part: 3,
      partLabel: "Listening for Information",
      sectionTitle: "Listening for Information",
      instructionBullets: [
        "You will hear an informational conversation. You will hear it only once.",
        "Then you will answer 6 questions. Choose the best answer to each question.",
      ],
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Caller", text: "I'm trying to book a specialist at the clinic, but the online system keeps rejecting me. Can you book me in?" },
        { speaker: "Receptionist", text: "I can, but the rejection is telling you something: specialists here need a referral on file, and yours expired. Referrals lapse after six months if unused." },
        { speaker: "Caller", text: "My doctor referred me in January. It's July." },
        { speaker: "Receptionist", text: "Then it lapsed this month. The good news is a renewal is faster than a fresh referral — your doctor can re-date the existing one without a new consultation, usually within a day or two." },
        { speaker: "Caller", text: "Okay. Once it's renewed, how soon can I be seen?" },
        { speaker: "Receptionist", text: "Depends on urgency. Routine cases are four to six weeks out. But if your doctor marks it 'expedited' on the renewal, you drop into a priority pool seen within a week — though doctors only flag it when clinically justified, not on request." },
        { speaker: "Caller", text: "Can I at least get on the waitlist now, before the referral clears?" },
        { speaker: "Receptionist", text: "I can pencil you in, but it's provisional. If the renewed referral isn't received within seventy-two hours of the slot, the system auto-cancels it and releases the time." },
        { speaker: "Caller", text: "And if I miss that window?" },
        { speaker: "Receptionist", text: "You go back to the general queue, not the front. So chase your doctor today — the seventy-two hours is the part people underestimate." },
      ],
      transcript:
        "A caller can't book a specialist online because the referral expired — referrals lapse after six months if unused, and a January referral lapsed in July. A renewal is faster than a fresh referral: the doctor can re-date the existing one without a new consultation, usually in a day or two. Wait times are 4–6 weeks for routine cases, but a doctor-marked 'expedited' renewal drops the caller into a priority pool seen within a week — flagged only when clinically justified, not on request. A provisional waitlist slot can be penciled in, but if the renewed referral isn't received within 72 hours of the slot, it auto-cancels and the time is released, sending the caller back to the general queue.",
      questions: [
        {
          prompt: "Why is the online system rejecting the caller?",
          options: [
            "The clinic is fully booked.",
            "The caller's referral has expired.",
            "The caller entered the wrong password.",
            "Specialists are not accepting patients.",
          ],
          correctIndex: 1,
          explanation:
            "Specialists 'need a referral on file, and yours expired' — referrals lapse after six months if unused.",
        },
        {
          prompt: "Why does the receptionist say a renewal is better than a fresh referral?",
          options: [
            "It is cheaper.",
            "The doctor can re-date the existing one without a new consultation.",
            "It skips the specialist entirely.",
            "It never expires again.",
          ],
          correctIndex: 1,
          explanation:
            "A renewal lets the doctor 're-date the existing one without a new consultation, usually within a day or two.'",
        },
        {
          prompt: "How can the caller be seen within a week rather than 4–6 weeks?",
          options: [
            "By paying a priority fee.",
            "If the doctor marks the renewal 'expedited' when clinically justified.",
            "By calling every morning.",
            "By visiting the emergency room.",
          ],
          correctIndex: 1,
          explanation:
            "An 'expedited' flag drops the caller into a priority pool, but doctors flag it 'only when clinically justified, not on request.'",
        },
        {
          prompt: "What is the status of a penciled-in waitlist slot?",
          options: [
            "Fully confirmed.",
            "Provisional, requiring the renewed referral within 72 hours.",
            "Permanent regardless of the referral.",
            "Available only to expedited cases.",
          ],
          correctIndex: 1,
          explanation:
            "It's 'provisional'; without the renewed referral 'within seventy-two hours,' the system auto-cancels it.",
        },
        {
          prompt: "What happens if the caller misses the 72-hour window?",
          options: [
            "They keep the slot anyway.",
            "They return to the general queue, not the front.",
            "They are banned from booking.",
            "They are automatically expedited.",
          ],
          correctIndex: 1,
          explanation:
            "Missing it means going 'back to the general queue, not the front.'",
        },
        {
          prompt: "What does the receptionist say people underestimate?",
          options: [
            "The cost of the appointment.",
            "The 72-hour referral window.",
            "The distance to the clinic.",
            "The specialist's availability.",
          ],
          correctIndex: 1,
          explanation:
            "'The seventy-two hours is the part people underestimate,' so the caller should chase the doctor today.",
        },
      ],
    },
    {
      part: 4,
      partLabel: "Listening to a News Item",
      sectionTitle: "Listening to a News Item",
      instructionBullets: [
        "You will hear a news report. You will hear it only once.",
        "Then you will answer 5 questions. Choose the best answer to each question.",
      ],
      blueprint: LISTENING_BLUEPRINT.newsReport,
      audioInstruction:
        "Listen to the news report. You will hear it only once. It is about 75 seconds long.",
      script: [
        { speaker: "Anchor", text: "Air quality across the region hit hazardous levels this week from distant wildfire smoke, and officials say the usual advice may be doing more harm than good in one respect." },
        { speaker: "Reporter", text: "The standard guidance — stay indoors, close the windows — still holds. What officials are correcting is the assumption that indoors automatically means safe. In many older homes, indoor air was only marginally better than outside, because smoke seeps through gaps faster than people realize." },
        { speaker: "Reporter", text: "The more effective step, they say, is creating one 'clean room' with a portable air filter, rather than trying to seal a whole house. Concentrate the effort, don't spread it thin." },
        { speaker: "Anchor", text: "And the masks people kept from the pandemic?" },
        { speaker: "Reporter", text: "Useful, but only the well-fitted kind. A loose cloth mask does almost nothing against fine smoke particles, which are far smaller than what cloth was ever meant to catch. That's a distinction that got lost in the messaging." },
        { speaker: "Reporter", text: "Officials also note the health effects lag the smoke. Emergency-room visits for breathing problems typically peak two to three days after the air clears, so the danger doesn't end when the sky looks blue again." },
      ],
      transcript:
        "Distant wildfire smoke pushed regional air quality to hazardous levels. The standard advice — stay indoors, close windows — still holds, but officials correct the assumption that indoors is automatically safe: in many older homes, smoke seeps through gaps so indoor air is only marginally better. The more effective step is creating one 'clean room' with a portable air filter rather than sealing the whole house. Pandemic masks help only if well-fitted; loose cloth masks do almost nothing against fine smoke particles. Health effects also lag: ER visits for breathing problems peak two to three days after the air clears, so the danger persists after the sky looks blue.",
      questions: [
        {
          prompt: "What assumption are officials correcting?",
          options: [
            "That staying indoors is bad advice.",
            "That being indoors automatically means the air is safe.",
            "That wildfires are close by.",
            "That windows should be left open.",
          ],
          correctIndex: 1,
          explanation:
            "The advice still holds, but they're correcting 'the assumption that indoors automatically means safe.'",
        },
        {
          prompt: "Why is indoor air only marginally better in many older homes?",
          options: [
            "People open their doors too often.",
            "Smoke seeps through gaps faster than people realize.",
            "Indoor heating produces smoke.",
            "The homes lack air conditioning.",
          ],
          correctIndex: 1,
          explanation:
            "'Smoke seeps through gaps faster than people realize,' making indoor air only marginally better.",
        },
        {
          prompt: "What more effective step do officials recommend?",
          options: [
            "Sealing every window in the house.",
            "Creating one 'clean room' with a portable air filter.",
            "Leaving the house entirely.",
            "Running the furnace continuously.",
          ],
          correctIndex: 1,
          explanation:
            "They recommend 'creating one clean room with a portable air filter, rather than trying to seal a whole house.'",
        },
        {
          prompt: "What is said about masks?",
          options: [
            "All masks work equally well.",
            "Only well-fitted masks help; loose cloth masks do almost nothing against fine particles.",
            "Masks are useless against smoke.",
            "Cloth masks are the best option.",
          ],
          correctIndex: 1,
          explanation:
            "Masks are useful 'but only the well-fitted kind'; a loose cloth mask 'does almost nothing against fine smoke particles.'",
        },
        {
          prompt: "Why does the danger not end when the sky clears?",
          options: [
            "Smoke returns every evening.",
            "ER visits for breathing problems peak two to three days after the air clears.",
            "The filters stop working.",
            "Masks expire quickly.",
          ],
          correctIndex: 1,
          explanation:
            "Health effects lag — ER visits 'peak two to three days after the air clears.'",
        },
      ],
    },
    {
      part: 5,
      partLabel: "Listening to a Discussion",
      sectionTitle: "Listening to a Discussion",
      instructionBullets: [
        "You will hear a discussion. You will hear it only once.",
        "Then you will answer 8 questions. Choose the best answer to each question.",
      ],
      blueprint: LISTENING_BLUEPRINT.campusDiscussion,
      audioInstruction:
        "Listen to the discussion. You will hear it only once. It is about 2 minutes long.",
      script: [
        { speaker: "Dean", text: "The library wants us to shift the department's journals to open-access publishing. Before I sign, I want the objections aired, Professor Ahmed." },
        { speaker: "Ahmed", text: "In principle I'm for it — research funded by the public should be readable by the public. My hesitation is about who pays. Open access doesn't make publishing free; it moves the cost from readers to authors." },
        { speaker: "Dean", text: "The library says grants can cover the author fees." },
        { speaker: "Ahmed", text: "For funded researchers, yes. But a third of our output comes from grad students and unfunded faculty. Shift to author-pays and you've quietly built a system where only the well-funded can publish. That's a different inequity, not the end of one." },
        { speaker: "Dean", text: "So you're not defending the paywall — you're worried the cure recreates the disease at the other end." },
        { speaker: "Ahmed", text: "Exactly. And there's a subtler risk. Some open-access journals, chasing fees, have loosened peer review. Not all — but enough that 'open access' and 'lower quality' have started, unfairly, to travel together in people's minds." },
        { speaker: "Librarian", text: "We'd only endorse journals with a fee waiver for the unfunded and a clean peer-review record. That addresses both of your points, doesn't it?" },
        { speaker: "Ahmed", text: "It addresses them well, if the waivers are real and not a fig leaf. My one condition is that we audit the waiver uptake after a year. A waiver nobody can actually get is just marketing." },
        { speaker: "Dean", text: "That's reasonable. A commitment now, with a review clause to check the waivers work in practice." },
        { speaker: "Ahmed", text: "Then I'm on board. My objection was never to openness — it was to congratulating ourselves before checking who gets left out." },
      ],
      transcript:
        "A dean wants to shift the department's journals to open access and asks Professor Ahmed for objections. Ahmed supports the principle — publicly funded research should be public — but worries about who pays: open access moves cost from readers to authors. Grants cover funded researchers, but a third of output comes from grad students and unfunded faculty, so author-pays could mean only the well-funded publish — a different inequity. He also flags that some fee-chasing open-access journals loosened peer review, linking 'open access' with 'lower quality' unfairly. The librarian proposes endorsing only journals with real fee waivers and clean peer review. Ahmed agrees on the condition of auditing waiver uptake after a year, since 'a waiver nobody can actually get is just marketing.'",
      questions: [
        {
          prompt: "What is Ahmed's stance on open access in principle?",
          options: [
            "He opposes it entirely.",
            "He supports it — public-funded research should be publicly readable.",
            "He is indifferent.",
            "He wants to keep all paywalls.",
          ],
          correctIndex: 1,
          explanation:
            "He's 'for it — research funded by the public should be readable by the public.'",
        },
        {
          prompt: "What is his central concern about the funding model?",
          options: [
            "That publishing becomes completely free.",
            "That it shifts cost from readers to authors, disadvantaging the unfunded.",
            "That libraries will lose money.",
            "That readers will stop reading journals.",
          ],
          correctIndex: 1,
          explanation:
            "Open access 'moves the cost from readers to authors,' so only the well-funded could publish.",
        },
        {
          prompt: "Why doesn't the grant-covers-fees argument fully satisfy Ahmed?",
          options: [
            "Grants are illegal for journals.",
            "A third of output comes from grad students and unfunded faculty.",
            "Grants never cover any fees.",
            "The library controls all grants.",
          ],
          correctIndex: 1,
          explanation:
            "Grants cover funded researchers, but 'a third of our output comes from grad students and unfunded faculty.'",
        },
        {
          prompt: "How does the dean summarize Ahmed's worry?",
          options: [
            "That the paywall should stay.",
            "That the cure recreates the disease at the other end.",
            "That open access is too expensive for the library.",
            "That no one reads the journals anyway.",
          ],
          correctIndex: 1,
          explanation:
            "The dean says Ahmed worries 'the cure recreates the disease at the other end' — a new inequity.",
        },
        {
          prompt: "What 'subtler risk' does Ahmed raise?",
          options: [
            "Open-access journals are always fraudulent.",
            "Some fee-chasing journals loosened peer review, linking open access with lower quality.",
            "Readers prefer print journals.",
            "Authors plagiarize more online.",
          ],
          correctIndex: 1,
          explanation:
            "Some journals 'chasing fees, have loosened peer review,' so 'open access' and 'lower quality' unfairly travel together.",
        },
        {
          prompt: "What does the librarian propose to address his concerns?",
          options: [
            "Endorsing only journals with fee waivers and a clean peer-review record.",
            "Abandoning open access.",
            "Charging all authors the same fee.",
            "Publishing only funded research.",
          ],
          correctIndex: 0,
          explanation:
            "They'd endorse only journals 'with a fee waiver for the unfunded and a clean peer-review record.'",
        },
        {
          prompt: "What condition does Ahmed attach to his agreement?",
          options: [
            "That the fees be doubled.",
            "That waiver uptake be audited after a year.",
            "That only faculty may publish.",
            "That the library pay all costs.",
          ],
          correctIndex: 1,
          explanation:
            "He wants to 'audit the waiver uptake after a year,' since a waiver nobody can get 'is just marketing.'",
        },
        {
          prompt: "What does Ahmed say his objection was never about?",
          options: [
            "Openness itself.",
            "The cost of journals.",
            "Peer review.",
            "The library's budget.",
          ],
          correctIndex: 0,
          explanation:
            "'My objection was never to openness — it was to congratulating ourselves before checking who gets left out.'",
        },
      ],
    },
    {
      part: 6,
      partLabel: "Listening to Viewpoints",
      sectionTitle: "Listening to Viewpoints",
      instructionBullets: [
        "You will hear a person expressing their viewpoint. You will hear it only once.",
        "Then you will answer 6 questions. Choose the best answer to each question.",
      ],
      blueprint: LISTENING_BLUEPRINT.interview,
      audioInstruction:
        "Listen to the talk. You will hear it only once. It is about 2 minutes long.",
      script: [
        { speaker: "Speaker", text: "My city just introduced congestion pricing — a charge to drive into the core at peak hours — and I've been asked, as a transport economist, whether it's fair. I'll give you the answer people don't want, which is: it's fair in effect but easy to make unfair in design." },
        { speaker: "Speaker", text: "The economics are clean. Road space at rush hour is scarce, and pricing scarce things reduces waste. Traffic in the zone dropped noticeably, buses sped up, and air quality improved. On the numbers, it works." },
        { speaker: "Speaker", text: "The fairness complaint is that a flat charge hits a low-wage cleaner and a wealthy lawyer identically, and as a share of income that's regressive. That objection is correct, and dismissing it is how these schemes lose public support." },
        { speaker: "Speaker", text: "But here's what critics miss: the money doesn't vanish. If the revenue funds better buses and discounts for low-income drivers, the same policy flips from regressive to progressive. The charge isn't the whole story; what you do with the proceeds is." },
        { speaker: "Speaker", text: "Where I break with the enthusiasts is timing. Rolling out the charge before the transit alternative is ready punishes people who have no other way in. Get the buses running first, then price the road — do it in the wrong order and you've just taxed the carless for the sins of the drivers." },
        { speaker: "Speaker", text: "So my verdict is conditional. Congestion pricing is a good tool held the right way and a blunt instrument held the wrong way. Judge each scheme by its rebate and its sequencing, not by the slogan." },
      ],
      transcript:
        "A transport economist assesses whether congestion pricing is fair: fair in effect but easy to make unfair in design. The economics are clean — pricing scarce rush-hour road space cut traffic, sped buses, and improved air. The fairness complaint is valid: a flat charge is regressive, hitting a low-wage worker and a wealthy lawyer identically as a share of income, and dismissing that loses public support. But critics miss that the revenue can fund better buses and low-income discounts, flipping the policy from regressive to progressive — what matters is what's done with the proceeds. He breaks with enthusiasts on timing: charging before transit alternatives exist punishes those with no other way in. His verdict is conditional — judge each scheme by its rebate and sequencing, not the slogan.",
      questions: [
        {
          prompt: "What is the speaker's headline verdict on congestion pricing?",
          options: [
            "It is inherently unfair.",
            "It's fair in effect but easy to make unfair in design.",
            "It never reduces traffic.",
            "It is purely a revenue grab.",
          ],
          correctIndex: 1,
          explanation:
            "He says it's 'fair in effect but easy to make unfair in design.'",
        },
        {
          prompt: "What evidence does he give that it works economically?",
          options: [
            "Traffic dropped, buses sped up, and air quality improved.",
            "Car sales increased.",
            "Fuel prices fell.",
            "The city's budget doubled.",
          ],
          correctIndex: 0,
          explanation:
            "'Traffic in the zone dropped noticeably, buses sped up, and air quality improved.'",
        },
        {
          prompt: "Why does he say a flat charge is regressive?",
          options: [
            "It only applies to wealthy drivers.",
            "It takes a larger share of income from low earners than high earners.",
            "It exempts commercial vehicles.",
            "It rises with income.",
          ],
          correctIndex: 1,
          explanation:
            "A flat charge hits a low-wage cleaner and wealthy lawyer 'identically, and as a share of income that's regressive.'",
        },
        {
          prompt: "What do critics miss, according to the speaker?",
          options: [
            "That the charge is too low.",
            "That revenue can fund buses and low-income discounts, flipping it to progressive.",
            "That traffic never actually drops.",
            "That the money disappears.",
          ],
          correctIndex: 1,
          explanation:
            "'The money doesn't vanish'; spent on buses and low-income discounts, the policy 'flips from regressive to progressive.'",
        },
        {
          prompt: "Where does he break with the 'enthusiasts'?",
          options: [
            "On the amount of the charge.",
            "On timing — transit alternatives must come before the charge.",
            "On whether pricing works at all.",
            "On which streets to include.",
          ],
          correctIndex: 1,
          explanation:
            "He warns against 'rolling out the charge before the transit alternative is ready.'",
        },
        {
          prompt: "By what should each scheme be judged, in his view?",
          options: [
            "Its slogan and popularity.",
            "Its rebate and its sequencing.",
            "The size of the zone.",
            "The number of cars affected.",
          ],
          correctIndex: 1,
          explanation:
            "'Judge each scheme by its rebate and its sequencing, not by the slogan.'",
        },
      ],
    },
  ],
}
