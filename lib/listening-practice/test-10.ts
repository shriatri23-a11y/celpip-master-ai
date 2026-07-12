import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest10: ListeningPracticeTest = {
  id: "hard-10",
  title: "Elite Listening Test 10",
  topic: "Contractor dispute, study-abroad decision, clinic billing change, river flooding buyout, standardized-testing debate, gene-edited crops",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test. Layered conditions, mid-turn reversals, and distractors drawn from things speakers nearly said — engineered so even an examiner rarely clears CLB 6 on one listen.",
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
        "A homeowner phones a contractor about a kitchen renovation that has gone over budget and past deadline, and they negotiate who absorbs the overrun.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Contractor", text: "I know the invoice is a shock, Mr. Deng, and I'm not going to defend all of it. But I'd separate the overrun into three buckets, because we're responsible for one, you asked for the second, and the third is genuinely nobody's fault." },
        { speaker: "Deng", text: "Start with the one that's on you." },
        { speaker: "Contractor", text: "The tiling. My crew mismeasured, re-ordered, and the redo cost about eight hundred in labour. That's ours — it won't appear on your bill, and it shouldn't." },
        { speaker: "Deng", text: "Good. And the second?" },
        { speaker: "Contractor", text: "The cabinets. You upgraded to the soft-close units after we'd priced the standard ones. That's a fair charge — you chose it knowingly — but I'll own that I should have put the price difference in writing before ordering, so I'm splitting the markup with you, not the cost, just the markup." },
        { speaker: "Deng", text: "That seems reasonable. And the third?" },
        { speaker: "Contractor", text: "When we opened the wall we found the wiring didn't meet code. I can't legally close it back up as it was, and I can't predict wiring I can't see. That cost is real and it's yours — but I'd rather you be angry at the previous owner's electrician than at me." },
        { speaker: "Deng", text: "The delay, though. Three weeks late is three weeks I paid rent on my old place." },
        { speaker: "Contractor", text: "The wiring added a week I couldn't avoid. The other two are on my scheduling, and I'll credit you a week's worth of the delay — not because the contract requires it, but because two of those three weeks were mine to prevent." },
        { speaker: "Deng", text: "So you're crediting one week, not two?" },
        { speaker: "Contractor", text: "One week of the delay and the full tiling redo. I'm not crediting the wiring week, because pretending that was mine to control wouldn't be honest — it'd just be me buying goodwill." },
      ],
      transcript:
        "A contractor breaks a renovation overrun into three parts: the tiling redo (his crew's error, fully absorbed), the cabinet upgrade (the homeowner's knowing choice, though the contractor splits only the markup for failing to confirm the price in writing), and code-violation wiring found behind the wall (a real, unforeseeable cost that is the homeowner's). On the three-week delay, he credits one week — the portion caused by his scheduling — but not the wiring week, saying crediting that would be dishonestly 'buying goodwill' rather than owning what he could control.",
      questions: [
        {
          prompt: "Why does the contractor divide the overrun into 'three buckets'?",
          options: [
            "To assign responsibility differently for each part of the cost.",
            "To confuse the homeowner about the total.",
            "Because the homeowner filed three separate complaints.",
            "Because three different crews did the work.",
          ],
          correctIndex: 0,
          explanation:
            "He divides it because 'we're responsible for one, you asked for the second, and the third is genuinely nobody's fault' — differing responsibility, not obfuscation.",
        },
        {
          prompt: "How is the tiling cost handled?",
          options: [
            "It is split evenly with the homeowner.",
            "The contractor absorbs it fully because his crew mismeasured.",
            "The homeowner pays it because he changed the design.",
            "It is added to the wiring charge.",
          ],
          correctIndex: 1,
          explanation:
            "He says the mismeasured redo 'won't appear on your bill, and it shouldn't' — the contractor absorbs it entirely.",
        },
        {
          prompt: "On the cabinet upgrade, what exactly does the contractor agree to split?",
          options: [
            "The entire cabinet cost.",
            "Only the markup, not the cost, because he failed to confirm the price difference in writing.",
            "Nothing, since the homeowner chose the upgrade.",
            "The labour but not the materials.",
          ],
          correctIndex: 1,
          explanation:
            "He says it's a fair charge the homeowner chose knowingly, but he splits 'the markup with you, not the cost, just the markup' for not putting it in writing.",
        },
        {
          prompt: "Why is the wiring cost charged to the homeowner?",
          options: [
            "Because the contractor caused the wiring fault.",
            "Because the wiring didn't meet code, couldn't legally be left as-is, and couldn't be foreseen.",
            "Because the homeowner requested new wiring.",
            "Because it was cheaper than the tiling.",
          ],
          correctIndex: 1,
          explanation:
            "He explains the hidden wiring 'didn't meet code,' can't legally be closed up as it was, and 'I can't predict wiring I can't see' — a real, unforeseeable cost.",
        },
        {
          prompt: "What does the contractor mean by wanting Mr. Deng 'angry at the previous owner's electrician than at me'?",
          options: [
            "That the contractor caused the code violation.",
            "That the fault lies with earlier work, not with the contractor.",
            "That the homeowner should sue the electrician.",
            "That the wiring cost will be waived.",
          ],
          correctIndex: 1,
          explanation:
            "He is directing blame for the code-violating wiring to whoever installed it originally, distancing himself from a fault he didn't create.",
        },
        {
          prompt: "How many weeks of delay does the contractor credit, and why?",
          options: [
            "All three weeks, because the contract requires it.",
            "One week, because that portion was caused by his own scheduling.",
            "Two weeks, one for wiring and one for scheduling.",
            "No weeks, because delays are never credited.",
          ],
          correctIndex: 1,
          explanation:
            "He credits 'one week of the delay' plus the tiling redo, since two of three weeks were his to prevent — though he credits only the scheduling portion.",
        },
        {
          prompt: "Why does the contractor refuse to credit the wiring week?",
          options: [
            "Because the homeowner did not ask him to.",
            "Because crediting a delay he couldn't control would be dishonestly 'buying goodwill.'",
            "Because the contract forbids crediting it.",
            "Because the wiring week was actually the homeowner's fault.",
          ],
          correctIndex: 1,
          explanation:
            "He says pretending the wiring week 'was mine to control wouldn't be honest — it'd just be me buying goodwill.'",
        },
        {
          prompt: "What can be inferred about the contractor's overall approach?",
          options: [
            "He accepts blame only where he judges he was actually at fault.",
            "He refuses to accept any responsibility.",
            "He credits everything to keep the customer happy.",
            "He blames the homeowner for the entire overrun.",
          ],
          correctIndex: 0,
          explanation:
            "He absorbs the tiling and one delay week and splits the cabinet markup, but declines costs he didn't cause — accepting blame precisely where he judges he was at fault.",
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
      scenario:
        "Two friends discuss whether one of them should accept a study-abroad place that clashes with a relationship.",
      blueprint: LISTENING_BLUEPRINT.dailyConversation,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Mei", text: "Everyone keeps telling me to go, and I keep nodding, and then I don't book the flight. At some point the not-booking is the decision, isn't it?" },
        { speaker: "Raj", text: "Maybe. Or the not-booking is you waiting for someone to admit the thing nobody will say — that going might cost you Theo." },
        { speaker: "Mei", text: "He says it won't. He says he'll wait, and I believe he means it." },
        { speaker: "Raj", text: "Meaning it and it being true are different things. I'm not saying he'd cheat or leave. I'm saying a year is long, and you'd both come back as slightly different people, and 'slightly different' is sometimes enough." },
        { speaker: "Mei", text: "So you think I shouldn't go." },
        { speaker: "Raj", text: "No — that's you putting words in my mouth so you can argue with them. I think you should go, and stop pretending the risk to the relationship isn't real. Go with your eyes open, not by convincing yourself there's nothing to lose." },
        { speaker: "Mei", text: "That's harder than just being told it'll be fine." },
        { speaker: "Raj", text: "It's supposed to be. If it were easy you'd have booked the flight in September. The reason you haven't isn't the visa or the money — it's that you're trying to get the opportunity without paying for it, and this one has a price whichever way you choose." },
        { speaker: "Mei", text: "Okay. Then I'd rather pay for the thing I'll regret not doing." },
        { speaker: "Raj", text: "That's the first sentence you've said all evening that sounds like you and not the people advising you." },
      ],
      transcript:
        "Mei admits that repeatedly not booking her study-abroad flight is itself becoming a decision. Raj suggests she's waiting for someone to name the unspoken risk: that going might cost her relationship with Theo. He refuses to tell her not to go — clarifying he thinks she should go but stop pretending the relationship risk isn't real, going 'with your eyes open.' He argues the real obstacle isn't visa or money but wanting the opportunity 'without paying for it,' and Mei concludes she'd rather pay for the thing she'd regret not doing.",
      questions: [
        {
          prompt: "What does Mei mean by 'the not-booking is the decision'?",
          options: [
            "That she has definitely decided to stay.",
            "That her repeated inaction is effectively becoming a choice by default.",
            "That she cannot afford the flight.",
            "That someone else will book it for her.",
          ],
          correctIndex: 1,
          explanation:
            "She recognizes that continually failing to book, despite agreeing to go, is itself functioning as a decision.",
        },
        {
          prompt: "What does Raj suggest Mei is really waiting for?",
          options: [
            "For Theo to propose to her.",
            "For someone to admit the unspoken risk that going might cost her Theo.",
            "For the visa to be approved.",
            "For her friends to book the trip.",
          ],
          correctIndex: 1,
          explanation:
            "He says the not-booking may be her 'waiting for someone to admit the thing nobody will say — that going might cost you Theo.'",
        },
        {
          prompt: "What is Raj's point about Theo 'meaning it' when he says he'll wait?",
          options: [
            "That Theo is lying about waiting.",
            "That meaning something and it turning out true are different, because a year changes people.",
            "That Theo will definitely leave her.",
            "That Theo does not actually want her to go.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'meaning it and it being true are different,' noting they'd return 'slightly different people,' which 'is sometimes enough.'",
        },
        {
          prompt: "How does Raj respond when Mei says 'you think I shouldn't go'?",
          options: [
            "He agrees she should stay.",
            "He says she's putting words in his mouth; he thinks she should go but with eyes open to the risk.",
            "He refuses to give any opinion.",
            "He tells her the relationship is already over.",
          ],
          correctIndex: 1,
          explanation:
            "He says that's her 'putting words in my mouth,' clarifying he thinks she should go but 'stop pretending the risk to the relationship isn't real.'",
        },
        {
          prompt: "What does Raj identify as the real reason Mei hasn't booked?",
          options: [
            "The visa and the money.",
            "That she wants the opportunity without paying its price, and this choice has a cost either way.",
            "That she doesn't really want to study abroad.",
            "That Theo forbade her from going.",
          ],
          correctIndex: 1,
          explanation:
            "He says it 'isn't the visa or the money' but that she's 'trying to get the opportunity without paying for it,' and this choice 'has a price whichever way you choose.'",
        },
      ],
    },
    {
      part: 3,
      partLabel: "Listening for Information",
      sectionTitle: "Listening for Information",
      instructionBullets: [
        "You will hear a conversation. You will hear it only once.",
        "Then you will answer 6 questions. Choose the best answer to each question.",
      ],
      scenario:
        "A clinic manager explains a new billing policy to a patient advocate, who questions how it affects low-income patients.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 100 seconds long.",
      script: [
        { speaker: "Manager", text: "The new policy charges a flat forty-dollar fee for missed appointments, but I want to be precise, because the version being repeated in the neighbourhood isn't quite what we approved." },
        { speaker: "Advocate", text: "What's being repeated is that you'll bill people forty dollars for being sick and unable to call." },
        { speaker: "Manager", text: "And that's the part we specifically wrote against. The fee applies only to no-shows with no contact. If a patient calls or messages at any point before the appointment — even five minutes before — there's no fee. We're penalizing silence, not illness." },
        { speaker: "Advocate", text: "Plenty of my clients don't have phone minutes at the end of the month. 'Just call' assumes a phone that works." },
        { speaker: "Manager", text: "Which is why the policy accepts a callback request through the front desk, a message left with any staff member, or a note from a shelter caseworker. But I'll be honest about the gap you're pointing at: someone with no phone and no caseworker on a given day can still get caught. I can't claim we've closed that hole entirely." },
        { speaker: "Advocate", text: "And the waiver?" },
        { speaker: "Manager", text: "Any patient can have the fee waived once per year, no reason required. After that, waivers need a documented hardship. The idea was to forgive the genuine one-off without creating a fee that simply never applies to anyone." },
        { speaker: "Advocate", text: "One waiver a year is thin for someone whose life is unstable." },
        { speaker: "Manager", text: "It is, and I won't pretend otherwise. What I can tell you is the fee is never sent to collections and never affects a patient's care — an unpaid fee doesn't stop anyone being seen. It's a nudge, not a debt. Whether a nudge is fair to people already stretched is a real question, and I don't think it's fully settled internally either." },
      ],
      transcript:
        "A clinic manager clarifies that a new 40 missed-appointment fee applies only to no-shows with no contact — any message, even five minutes before, avoids it, so it penalizes silence, not illness. Alternatives to phoning (front-desk callback, a message via staff, a shelter caseworker's note) exist, but the manager admits someone with no phone and no caseworker can still be caught. Each patient gets one no-reason waiver per year, then documented hardship is required; the fee never goes to collections and never affects care, though the manager concedes its fairness to unstable patients isn't fully settled internally.",
      questions: [
        {
          prompt: "What triggers the forty-dollar fee under the actual policy?",
          options: [
            "Being sick and unable to attend.",
            "A no-show with no contact of any kind before the appointment.",
            "Arriving late to an appointment.",
            "Cancelling more than a day in advance.",
          ],
          correctIndex: 1,
          explanation:
            "The manager says the fee applies 'only to no-shows with no contact'; any message, even five minutes before, avoids it — 'penalizing silence, not illness.'",
        },
        {
          prompt: "Why does the manager say they are 'penalizing silence, not illness'?",
          options: [
            "Because sick patients are always charged.",
            "Because any prior contact, even minutes before, cancels the fee.",
            "Because only silent patients are healthy.",
            "Because illness is never a valid excuse.",
          ],
          correctIndex: 1,
          explanation:
            "Since a call or message 'at any point before the appointment — even five minutes before' removes the fee, it targets lack of contact, not being ill.",
        },
        {
          prompt: "What alternatives to calling does the policy accept?",
          options: [
            "Only a phone call from the patient personally.",
            "A front-desk callback request, a message left with any staff member, or a shelter caseworker's note.",
            "An email sent after the appointment.",
            "A payment made in advance.",
          ],
          correctIndex: 1,
          explanation:
            "The manager lists a callback request through the front desk, a message with any staff member, or a note from a shelter caseworker.",
        },
        {
          prompt: "What gap does the manager openly admit remains?",
          options: [
            "That the fee is too low to matter.",
            "That someone with no phone and no caseworker on a given day can still be caught.",
            "That staff cannot process waivers.",
            "That the policy applies to late arrivals too.",
          ],
          correctIndex: 1,
          explanation:
            "He concedes 'someone with no phone and no caseworker on a given day can still get caught' and won't claim the hole is fully closed.",
        },
        {
          prompt: "How does the annual waiver work?",
          options: [
            "Waivers are unlimited with no documentation.",
            "One no-reason waiver per year, after which documented hardship is required.",
            "No waivers are permitted under any circumstances.",
            "A waiver requires a doctor's note every time.",
          ],
          correctIndex: 1,
          explanation:
            "Any patient can have the fee waived 'once per year, no reason required,' after which 'waivers need a documented hardship.'",
        },
        {
          prompt: "What does the manager mean by calling the fee 'a nudge, not a debt'?",
          options: [
            "That it is a large penalty meant to punish patients.",
            "That it is never sent to collections and never affects care, so it encourages rather than coerces.",
            "That it must be paid before any treatment.",
            "That it doubles if left unpaid.",
          ],
          correctIndex: 1,
          explanation:
            "He says the fee 'is never sent to collections and never affects a patient's care' — 'a nudge, not a debt' — while admitting its fairness is debated internally.",
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
      scenario:
        "A news item reports on a government offer to buy out homeowners in a repeatedly flooded river valley.",
      blueprint: LISTENING_BLUEPRINT.newsReport,
      audioInstruction:
        "Listen to the news report. You will hear it only once. It is about 75 seconds long.",
      script: [
        { speaker: "Anchor", text: "The provincial government has opened a voluntary buyout program for homeowners in the Miller Creek valley, which has flooded three times in six years — but the terms have divided the community it was meant to help." },
        { speaker: "Reporter", text: "The offer pays homeowners the pre-flood market value of their properties, not the current, much-lower value. On its face, that's generous. The complication is the word 'voluntary.' The program only proceeds if two-thirds of valley homeowners accept. Below that, it collapses and no one is bought out." },
        { speaker: "Reporter", text: "That threshold has turned neighbour against neighbour. Those who want to leave accuse holdouts of trapping everyone; those who want to stay say they're being pressured out of homes they never wanted to sell. And there's a further catch: if the buyout succeeds, the province will decommission the road and utilities, meaning anyone who refused the offer would be left in a house with no services." },
        { speaker: "Reporter", text: "The province says it won't force anyone to sell, which is technically true. But critics argue that removing services from those who stay makes 'voluntary' a polite fiction. The government counters that maintaining infrastructure for a handful of holdouts can't be justified once the valley is largely empty." },
        { speaker: "Reporter", text: "Homeowners have until the spring to decide, and early indications suggest the vote will be close." },
      ],
      transcript:
        "The province has opened a voluntary buyout for repeatedly flooded Miller Creek valley, paying pre-flood (higher) market value. But it proceeds only if two-thirds of homeowners accept, or it collapses entirely — a threshold pitting those wanting to leave against holdouts. A further catch: if the buyout succeeds, the province will decommission road and utilities, leaving refusers without services. The government says it won't force anyone to sell (technically true), but critics call 'voluntary' a polite fiction; the government replies that maintaining infrastructure for a few holdouts is unjustifiable once the valley empties. The vote is expected to be close.",
      questions: [
        {
          prompt: "What value does the buyout offer pay homeowners?",
          options: [
            "The current, flood-reduced value.",
            "The higher pre-flood market value.",
            "The cost of rebuilding elsewhere.",
            "A fixed government-set amount.",
          ],
          correctIndex: 1,
          explanation:
            "The offer pays 'the pre-flood market value of their properties, not the current, much-lower value.'",
        },
        {
          prompt: "What condition must be met for the buyout to proceed?",
          options: [
            "A simple majority of the province must approve it.",
            "At least two-thirds of valley homeowners must accept, or it collapses.",
            "All homeowners must accept unanimously.",
            "The road must be decommissioned first.",
          ],
          correctIndex: 1,
          explanation:
            "The program 'only proceeds if two-thirds of valley homeowners accept'; below that, it collapses and no one is bought out.",
        },
        {
          prompt: "Why has the threshold 'turned neighbour against neighbour'?",
          options: [
            "Because those wanting to leave blame holdouts, while those staying feel pressured to sell.",
            "Because everyone agrees the offer is too low.",
            "Because the province favours certain families.",
            "Because the flooding damaged only some homes.",
          ],
          correctIndex: 0,
          explanation:
            "Leavers 'accuse holdouts of trapping everyone,' while stayers say they're 'being pressured out of homes they never wanted to sell.'",
        },
        {
          prompt: "What is the 'further catch' if the buyout succeeds?",
          options: [
            "Homeowners must repay part of the money.",
            "The province will decommission the road and utilities, leaving refusers without services.",
            "The offer amount is reduced.",
            "The valley is rezoned for industry.",
          ],
          correctIndex: 1,
          explanation:
            "If it succeeds, 'the province will decommission the road and utilities,' so anyone who refused would be left 'in a house with no services.'",
        },
        {
          prompt: "Why do critics call the program's 'voluntary' label 'a polite fiction'?",
          options: [
            "Because the province secretly forces sales.",
            "Because removing services from those who stay effectively pressures them to leave.",
            "Because the vote is not actually held.",
            "Because the payments are never made.",
          ],
          correctIndex: 1,
          explanation:
            "Critics argue that 'removing services from those who stay makes voluntary a polite fiction,' even though no one is legally forced to sell.",
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
      scenario:
        "Three educators debate whether to drop standardized admissions tests in favour of holistic review.",
      blueprint: LISTENING_BLUEPRINT.campusDiscussion,
      audioInstruction:
        "Listen to the discussion. You will hear it only once. It is about 110 seconds long.",
      script: [
        { speaker: "Grace", text: "I've come around to dropping the admissions test. It correlates with family income more than with anything we actually want to measure, and every year we admit wealthy kids who were coached to a score they can't reproduce in class." },
        { speaker: "Hassan", text: "It correlates with income, yes. But so does everything else on the application — more so, in some cases. Essays can be professionally edited. Extracurriculars require money and free time. Take away the test and you don't remove the wealth advantage; you just remove the one part of the file a poor student could study for alone, for free, at the library." },
        { speaker: "Grace", text: "That assumes the test is studyable for free. In practice the coaching industry exists precisely because it isn't, quite." },
        { speaker: "Hassan", text: "Coaching helps at the margin. But a motivated student with a library book still gains far more on a test than on an essay they have no one to edit. I'm not defending the test as fair — I'm saying it may be the least unfair thing in the file." },
        { speaker: "Leila", text: "You're both treating the test as one thing. The problem isn't the test; it's using it as a threshold — a hard cutoff. As one factor among many, it adds information. As a gate, it discards students who'd have thrived. Keep it, weight it lightly, and never let it be disqualifying on its own." },
        { speaker: "Grace", text: "But once it's in the file, admissions officers over-weight it because it's a number and numbers feel objective. You can't tell people to hold a score loosely; the number does the gripping for them." },
        { speaker: "Leila", text: "That's a real cognitive bias, I'll grant. But the answer to a number being over-weighted isn't to delete the number — it's to train the readers and audit the decisions. Deleting data because people misuse it is a strange kind of fix." },
        { speaker: "Hassan", text: "Except sometimes it's the only realistic fix, if the misuse is guaranteed and the training never sticks. Leila's right in principle and might be wrong in practice." },
        { speaker: "Leila", text: "Then let's test it: keep the score, run one cycle where readers see it and one where they don't, and compare who gets admitted. Argue from the outcome, not the theory." },
        { speaker: "Grace", text: "That I'll agree to — provided we actually act on what we find, and don't just admire the data." },
      ],
      transcript:
        "Grace favours dropping the admissions test because it tracks family income and rewards coached scores. Hassan agrees it correlates with income but argues everything else on the application correlates more — essays get edited, extracurriculars cost money — so the test may be 'the least unfair thing in the file,' the one part a poor student can study for free. Leila reframes: the problem isn't the test but using it as a hard cutoff; keep it, weight it lightly, never make it disqualifying. Grace warns readers over-weight numbers; Leila says the fix is training and auditing, not deleting data, though Hassan notes deletion may be the only realistic fix if misuse is guaranteed. They agree to a controlled trial comparing cycles with and without the score, provided they act on the results.",
      questions: [
        {
          prompt: "Why has Grace come to favour dropping the test?",
          options: [
            "Because it is too expensive to administer.",
            "Because it correlates with family income and rewards coached scores students can't reproduce in class.",
            "Because students dislike taking it.",
            "Because it takes too long to grade.",
          ],
          correctIndex: 1,
          explanation:
            "She says it 'correlates with family income' and admits wealthy, coached students 'to a score they can't reproduce in class.'",
        },
        {
          prompt: "What is Hassan's central counterargument?",
          options: [
            "That the test does not correlate with income at all.",
            "That everything else in the application correlates with income more, so the test may be the least unfair element.",
            "That poor students always score higher.",
            "That essays are the fairest part of the file.",
          ],
          correctIndex: 1,
          explanation:
            "He argues essays and extracurriculars correlate with wealth more, so the test 'may be the least unfair thing in the file' — the one a poor student can study for free.",
        },
        {
          prompt: "How does Hassan respond to Grace's point that coaching proves the test isn't freely studyable?",
          options: [
            "He concedes the test should be dropped.",
            "He says coaching only helps at the margin, and a motivated student gains more from a library book on a test than on an unedited essay.",
            "He denies a coaching industry exists.",
            "He argues coaching is available for free.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'coaching helps at the margin,' but a student with a library book 'still gains far more on a test than on an essay they have no one to edit.'",
        },
        {
          prompt: "How does Leila reframe the debate?",
          options: [
            "By saying the test should be the only admissions factor.",
            "By arguing the problem is using the test as a hard cutoff, not the test itself.",
            "By insisting the test be dropped immediately.",
            "By claiming the test measures nothing useful.",
          ],
          correctIndex: 1,
          explanation:
            "She says 'the problem isn't the test; it's using it as a threshold' — fine as one factor, harmful 'as a gate.'",
        },
        {
          prompt: "What is Grace's objection to Leila's 'weight it lightly' solution?",
          options: [
            "That light weighting is illegal.",
            "That admissions officers over-weight numbers because they feel objective, regardless of instructions.",
            "That the test is already weighted lightly.",
            "That officers ignore numbers entirely.",
          ],
          correctIndex: 1,
          explanation:
            "She says officers 'over-weight it because it's a number,' and 'you can't tell people to hold a score loosely; the number does the gripping for them.'",
        },
        {
          prompt: "How does Leila answer the over-weighting objection?",
          options: [
            "By agreeing the score must be deleted.",
            "By arguing the fix is training readers and auditing decisions, not deleting the data.",
            "By saying bias cannot be addressed.",
            "By proposing the test count double.",
          ],
          correctIndex: 1,
          explanation:
            "She grants the bias but says 'the answer to a number being over-weighted isn't to delete the number — it's to train the readers and audit the decisions.'",
        },
        {
          prompt: "What concession does Hassan make about Leila's position?",
          options: [
            "That she is wrong in principle.",
            "That she is right in principle but might be wrong in practice if misuse is guaranteed and training never sticks.",
            "That deleting the score is never justified.",
            "That training always works.",
          ],
          correctIndex: 1,
          explanation:
            "He says deletion may be 'the only realistic fix' if misuse is guaranteed, so 'Leila's right in principle and might be wrong in practice.'",
        },
        {
          prompt: "What do the three agree to do?",
          options: [
            "Drop the test immediately.",
            "Run a controlled trial comparing admissions cycles with and without the score, and act on the results.",
            "Keep the current system unchanged.",
            "Let each reader decide whether to use the score.",
          ],
          correctIndex: 1,
          explanation:
            "Leila proposes running one cycle where readers see the score and one where they don't and 'argue from the outcome'; Grace agrees, provided they act on the findings.",
        },
      ],
    },
    {
      part: 6,
      partLabel: "Listening to Viewpoints",
      sectionTitle: "Listening to Viewpoints",
      instructionBullets: [
        "You will hear a person speaking. You will hear it only once.",
        "Then you will answer 6 questions. Choose the best answer to each question.",
      ],
      scenario:
        "A plant scientist gives a talk on the public debate over gene-edited crops.",
      blueprint: LISTENING_BLUEPRINT.publicTalk,
      audioInstruction:
        "Listen to the talk. You will hear it only once. It is about 100 seconds long.",
      script: [
        { speaker: "Speaker", text: "I study gene-edited crops, and audiences usually expect me either to reassure them that it's all perfectly safe or to confess some hidden danger. I'm going to disappoint both camps, because the interesting question isn't safety — it's who decides and who benefits." },
        { speaker: "Speaker", text: "On safety, briefly: editing a plant's own genes to, say, resist a fungus is not meaningfully riskier than the mutations we've induced with radiation and chemicals for a century and called conventional breeding. If you eat those without alarm, the science gives you no reason to fear the edited version. I'll stand behind that." },
        { speaker: "Speaker", text: "But — and here's where the cheerleaders lose me — 'safe to eat' is not the same as 'good for the food system.' A drought-tolerant seed can feed people, or it can concentrate power in whoever patents it, depending entirely on the licensing terms. The gene is neutral; the contract around it is not. When a farmer can't save seed and must repurchase every season, the technology hasn't fed him — it's rented him the ability to farm." },
        { speaker: "Speaker", text: "So I resist both scripts. The activists who say the food is dangerous are wrong, and they discredit the real concern by crying poison. The companies who say 'it's just breeding, trust us' are telling a half-truth, because breeding never came with an ownership model like this." },
        { speaker: "Speaker", text: "My position, if you want one: regulate the contract, not the chromosome. Approve the science on its merits, and put the fight where it belongs — on patents, seed-saving rights, and who is allowed to benefit. Argue about the ownership, not the DNA." },
      ],
      transcript:
        "A plant scientist declines to either reassure or alarm audiences about gene-edited crops, saying the real question is 'who decides and who benefits,' not safety. On safety he's firm: editing a plant's own genes isn't meaningfully riskier than century-old conventional breeding via radiation and chemicals. But 'safe to eat' isn't 'good for the food system' — a drought-tolerant seed can feed people or concentrate power depending on licensing; the gene is neutral, the contract isn't. He rejects both activists who cry poison (discrediting real concerns) and companies who say 'it's just breeding' (a half-truth, since breeding lacked this ownership model), concluding: regulate the contract, not the chromosome.",
      questions: [
        {
          prompt: "What does the speaker say is the truly interesting question about gene-edited crops?",
          options: [
            "Whether they are safe to eat.",
            "Who decides and who benefits.",
            "Whether they taste different.",
            "How quickly they can be grown.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'the interesting question isn't safety — it's who decides and who benefits.'",
        },
        {
          prompt: "What is the speaker's position on the safety of editing a plant's own genes?",
          options: [
            "It is far more dangerous than conventional breeding.",
            "It is not meaningfully riskier than the radiation- and chemical-induced mutations of conventional breeding.",
            "It is impossible to assess.",
            "It is safe only for certain crops.",
          ],
          correctIndex: 1,
          explanation:
            "He says it 'is not meaningfully riskier than the mutations we've induced with radiation and chemicals... and called conventional breeding.'",
        },
        {
          prompt: "What distinction does the speaker draw with 'the gene is neutral; the contract around it is not'?",
          options: [
            "That genes are dangerous but contracts are safe.",
            "That the seed's effect on the food system depends on licensing terms, not the biology.",
            "That contracts have no bearing on farming.",
            "That only the DNA should be regulated.",
          ],
          correctIndex: 1,
          explanation:
            "He argues a drought-tolerant seed 'can feed people, or it can concentrate power... depending entirely on the licensing terms' — the contract, not the gene, determines the outcome.",
        },
        {
          prompt: "What does the speaker mean by the technology having 'rented him the ability to farm'?",
          options: [
            "That farmers get the seeds for free.",
            "That when farmers can't save seed and must repurchase each season, they don't own their means of farming.",
            "That renting land is cheaper than buying seed.",
            "That farming has become fully automated.",
          ],
          correctIndex: 1,
          explanation:
            "He says when 'a farmer can't save seed and must repurchase every season,' the technology 'hasn't fed him — it's rented him the ability to farm.'",
        },
        {
          prompt: "Why does the speaker criticize BOTH activists and companies?",
          options: [
            "Both exaggerate the safety risks.",
            "Activists wrongly cry poison and discredit real concerns; companies tell a half-truth by ignoring the new ownership model.",
            "Both want the technology banned.",
            "Both agree the food is dangerous.",
          ],
          correctIndex: 1,
          explanation:
            "Activists 'who say the food is dangerous are wrong' and discredit real concerns; companies saying 'it's just breeding' tell a half-truth because 'breeding never came with an ownership model like this.'",
        },
        {
          prompt: "What is the speaker's concluding position?",
          options: [
            "Ban gene-edited crops entirely.",
            "Regulate the contract, not the chromosome — approve the science but fight over patents and seed-saving rights.",
            "Deregulate the industry completely.",
            "Focus regulation on the DNA itself.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'regulate the contract, not the chromosome,' approving the science while putting the fight on 'patents, seed-saving rights, and who is allowed to benefit.'",
        },
      ],
    },
  ],
}
