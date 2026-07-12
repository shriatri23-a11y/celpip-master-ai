import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest2: ListeningPracticeTest = {
  id: "hard-2",
  title: "Elite Listening Test 2",
  topic: "Deadline conflict, roommate exit, gym contract, transit strike, remote work, standardized testing",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test built around competing priorities, hedged commitments, and speakers who partly agree and partly disagree. Detail traps and implied meaning throughout.",
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
        "A junior analyst tells her manager that two projects now share the same deadline, and they work out how to handle it.",
      blueprint: LISTENING_BLUEPRINT.workplaceMeeting,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Nadia", text: "I need to flag something before it becomes a crisis. The Harmon report and the quarterly forecast are both now due Friday, and I can do one of them well or both of them badly." },
        { speaker: "Manager", text: "Who moved? Last I knew Harmon was Wednesday." },
        { speaker: "Nadia", text: "The client did. They pushed our review call to Thursday afternoon, which means the report can't be final until Friday morning — and the forecast was always Friday." },
        { speaker: "Manager", text: "Okay. My instinct is to protect the forecast, because the board sees it. But tell me why I might be wrong." },
        { speaker: "Nadia", text: "Because the forecast is mostly assembly — I'm pulling numbers others produced. Harmon is analysis only I've done, so if I rush it, no one downstream can catch the errors. The forecast has three sets of eyes after me. Harmon has none." },
        { speaker: "Manager", text: "That's a better argument than mine. So you want to give Harmon the clean time and treat the forecast as the one we can afford to hand off." },
        { speaker: "Nadia", text: "Ideally. Could Priya assemble the forecast from my template? She's done the inputs before, and I'd still review it Friday, just not build it." },
        { speaker: "Manager", text: "Priya's out Thursday, back Friday. Cutting it close, but workable if you brief her today. What I won't do is ask for an extension on the forecast — the board date is fixed." },
        { speaker: "Nadia", text: "Understood. Then the only real risk is if the client pushes the call again." },
        { speaker: "Manager", text: "If that happens, don't absorb it silently. Come straight to me, because at that point it's a scope problem, not a scheduling one, and it's mine to escalate." },
      ],
      transcript:
        "Nadia warns that the Harmon report and the quarterly forecast are both due Friday after the client moved a review call to Thursday. The manager's instinct is to protect the board-facing forecast, but Nadia argues Harmon deserves the clean time because it is original analysis no one downstream can error-check, while the forecast is assembly with three later reviewers. They agree Priya will assemble the forecast from Nadia's template (briefed today, since Priya is out Thursday), Nadia still reviewing it Friday. No extension will be sought on the fixed board date; if the client moves the call again, Nadia must escalate it to the manager as a scope problem.",
      questions: [
        {
          prompt: "What has changed to create Nadia's problem?",
          options: [
            "The board moved the forecast deadline earlier.",
            "A client rescheduled the Harmon review to Thursday afternoon.",
            "A colleague resigned unexpectedly.",
            "The forecast template was lost.",
          ],
          correctIndex: 1,
          explanation:
            "The client pushed the review call to Thursday, so the report can't be final until Friday morning — colliding with the always-Friday forecast.",
        },
        {
          prompt: "Why does the manager initially favour protecting the forecast?",
          options: [
            "Because it takes longer to produce than the report.",
            "Because the board sees it.",
            "Because Nadia prefers working on it.",
            "Because the client insists on it.",
          ],
          correctIndex: 1,
          explanation:
            "His stated instinct is to protect the forecast 'because the board sees it.'",
        },
        {
          prompt: "What is Nadia's key argument for prioritizing Harmon instead?",
          options: [
            "Harmon is worth more money to the firm.",
            "The forecast has later reviewers who can catch errors, but Harmon does not.",
            "Harmon is due before the forecast.",
            "The board does not read the Harmon report.",
          ],
          correctIndex: 1,
          explanation:
            "The forecast has 'three sets of eyes' after her; Harmon has 'none,' so rushing Harmon risks uncorrectable errors.",
        },
        {
          prompt: "What does the manager mean by 'That's a better argument than mine'?",
          options: [
            "He is being sarcastic and rejects her reasoning.",
            "He genuinely finds her risk-based logic more persuasive than his own.",
            "He wants her to keep debating before deciding.",
            "He thinks both arguments are equally weak.",
          ],
          correctIndex: 1,
          explanation:
            "He concedes her point and reframes the plan around giving Harmon the clean time — a sincere acceptance, not sarcasm.",
        },
        {
          prompt: "What is the plan for producing the forecast?",
          options: [
            "Nadia will build it herself on Friday morning.",
            "Priya will assemble it from Nadia's template, with Nadia reviewing.",
            "The board will grant an extension.",
            "It will be postponed until Priya returns.",
          ],
          correctIndex: 1,
          explanation:
            "Priya will assemble it from the template; Nadia will still review it Friday but not build it.",
        },
        {
          prompt: "Why is briefing Priya 'today' important?",
          options: [
            "Because Priya is out Thursday and back only Friday.",
            "Because the template expires Wednesday.",
            "Because the client requires it.",
            "Because Priya is leaving the company.",
          ],
          correctIndex: 0,
          explanation:
            "Priya is out Thursday, so the handoff must be briefed today for the Friday assembly to be 'workable.'",
        },
        {
          prompt: "What is the manager firm about not doing?",
          options: [
            "Letting Priya touch the forecast.",
            "Seeking an extension on the board-fixed forecast date.",
            "Escalating problems to senior management.",
            "Reviewing Harmon himself.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'What I won't do is ask for an extension on the forecast — the board date is fixed.'",
        },
        {
          prompt: "What does the manager mean by 'don't absorb it silently'?",
          options: [
            "Nadia should quietly rework the schedule on her own.",
            "If the client moves the call again, Nadia must escalate it rather than shoulder it.",
            "Nadia should ignore any further client requests.",
            "Nadia should tell the client the date is fixed.",
          ],
          correctIndex: 1,
          explanation:
            "A further move becomes 'a scope problem, not a scheduling one,' which is his to escalate — so she must bring it to him, not manage it alone.",
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
        { speaker: "Theo", text: "So you're really moving out at the end of the lease. I'm not going to pretend I'm not a little thrown." },
        { speaker: "Sam", text: "It's not about you, honestly. I've just realized I've been treating this place as temporary for three years, and at some point 'temporary' is just a decision you keep not making." },
        { speaker: "Theo", text: "Fair. Do you have somewhere lined up, or is this more of a leap?" },
        { speaker: "Sam", text: "A leap with a soft landing. My cousin's got a spare room for a few months while I look. I'd rather choose the next place slowly than sign somewhere just to avoid the gap." },
        { speaker: "Theo", text: "That's the part I'd struggle with — the not-knowing. But I can see it suits you. You've always been better at open doors than I am." },
        { speaker: "Sam", text: "You say that like it's a compliment, but half the time it's just me avoiding commitment and calling it flexibility." },
        { speaker: "Theo", text: "Well, for what it's worth, if the slow search turns into six months, don't let pride stop you asking to come back." },
        { speaker: "Sam", text: "I appreciate that. Though if I'm back here in six months, we'll both know it didn't work." },
      ],
      transcript:
        "Sam is moving out at the end of the lease, reflecting that treating the flat as 'temporary' for three years was really a decision never made. There's no new place yet — a cousin's spare room is a 'soft landing' so Sam can choose slowly rather than sign somewhere to avoid a gap. Theo admits the uncertainty would trouble him but sees it suits Sam; Sam self-deprecatingly reframes 'flexibility' as avoiding commitment. Theo offers a return if the search drags to six months, and Sam notes that returning would signal the plan failed.",
      questions: [
        {
          prompt: "Why is Sam moving out?",
          options: [
            "Because of a conflict with Theo.",
            "Because staying had become an unmade decision Sam wants to finally make.",
            "Because the rent has become unaffordable.",
            "Because the cousin needs company.",
          ],
          correctIndex: 1,
          explanation:
            "Sam says 'temporary' for three years was 'a decision you keep not making' — the move is about finally deciding, not about Theo or money.",
        },
        {
          prompt: "What does 'a leap with a soft landing' refer to?",
          options: [
            "Signing a new lease before leaving.",
            "Moving abroad for a job.",
            "Staying temporarily with a cousin while searching.",
            "Buying a home outright.",
          ],
          correctIndex: 2,
          explanation:
            "The 'soft landing' is the cousin's spare room 'for a few months' during an unhurried search.",
        },
        {
          prompt: "What does Sam mean by 'avoiding commitment and calling it flexibility'?",
          options: [
            "That Sam is proud of being flexible.",
            "That Sam suspects the openness Theo admires is really avoidance.",
            "That Theo lacks flexibility.",
            "That flexibility and commitment are the same thing.",
          ],
          correctIndex: 1,
          explanation:
            "Sam undercuts Theo's compliment, suggesting the 'open doors' trait is sometimes just dodging commitment.",
        },
        {
          prompt: "What does Theo reveal about himself in the conversation?",
          options: [
            "That he also plans to move out soon.",
            "That he would find the uncertainty harder to handle than Sam does.",
            "That he resents Sam's decision.",
            "That he has offered Sam money.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'the not-knowing' is 'the part I'd struggle with' and that Sam is 'better at open doors than I am.'",
        },
        {
          prompt: "What does Sam's final line imply?",
          options: [
            "Sam is confident the new plan will succeed.",
            "Returning within six months would mean the plan had failed.",
            "Sam expects to move back regardless.",
            "Theo's offer was insincere.",
          ],
          correctIndex: 1,
          explanation:
            "'If I'm back here in six months, we'll both know it didn't work' frames a return as a sign of failure, not a neutral option.",
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
        { speaker: "Member", text: "I want to cancel my gym membership. I've barely used it and I'm still being charged." },
        { speaker: "Staff", text: "I can help, but I want to be accurate so you don't get a surprise. Your plan is the twelve-month commitment, and you're in month seven, so cancelling today triggers an early-termination fee equal to half the remaining months." },
        { speaker: "Member", text: "Half of five months? That's outrageous. Nobody told me that." },
        { speaker: "Staff", text: "It's in the agreement, but I understand it stings. There's one exception, though: if you're cancelling because of a documented medical reason or a move more than forty kilometres away, the fee is waived entirely." },
        { speaker: "Member", text: "I am moving — about thirty kilometres." },
        { speaker: "Staff", text: "Then it wouldn't qualify, unfortunately; the threshold is firm at forty. What might help more is a freeze. You can pause the membership for up to three months at no charge, and the clock on your commitment pauses too." },
        { speaker: "Member", text: "So freezing doesn't just delay payment, it delays the end date?" },
        { speaker: "Staff", text: "Correct — a freeze extends your term by the same length, so you're not losing the months, just shifting them. Most people who think they want to cancel actually want to freeze." },
        { speaker: "Member", text: "And if I still want out after the freeze?" },
        { speaker: "Staff", text: "Then the same early-termination math applies, based on whatever months remain then. But there's also the transfer option: you can sign the remainder over to someone else for a one-time twenty-dollar administrative fee, and after that you owe nothing." },
      ],
      transcript:
        "A member wants to cancel a 12-month gym plan in month seven; cancelling now triggers an early-termination fee equal to half the remaining months. The fee is waived only for a documented medical reason or a move over 40 km — the member's 30 km move doesn't qualify (the 40 km threshold is firm). A freeze pauses payments and the commitment clock for up to three months at no charge, shifting rather than losing months. Cancelling after a freeze re-applies the same fee math on remaining months; alternatively, transferring the remainder to someone else costs a one-time $20 admin fee and clears the balance.",
      questions: [
        {
          prompt: "What does cancelling today cost the member?",
          options: [
            "The full value of the remaining five months.",
            "A fee equal to half of the remaining months.",
            "A flat twenty-dollar fee.",
            "Nothing, because of the move.",
          ],
          correctIndex: 1,
          explanation:
            "The early-termination fee equals 'half the remaining months' in a 12-month plan at month seven.",
        },
        {
          prompt: "Why doesn't the member's move qualify for a waiver?",
          options: [
            "Because the move is not documented.",
            "Because it is only thirty kilometres, under the firm forty-kilometre threshold.",
            "Because moves never qualify, only medical reasons.",
            "Because the member is only in month seven.",
          ],
          correctIndex: 1,
          explanation:
            "The waiver requires a move 'more than forty kilometres away'; thirty km falls short of the firm threshold.",
        },
        {
          prompt: "How does a freeze differ from simply delaying payment?",
          options: [
            "It also pushes back the membership's end date by the same length.",
            "It cancels the remaining months entirely.",
            "It costs half the remaining months.",
            "It converts the plan to month-to-month.",
          ],
          correctIndex: 0,
          explanation:
            "The freeze 'extends your term by the same length,' shifting months rather than delaying payment alone.",
        },
        {
          prompt: "Why does the staff member say most people 'actually want to freeze'?",
          options: [
            "Because freezing is more profitable for the gym.",
            "Because a freeze preserves the months at no cost instead of forfeiting them via a fee.",
            "Because cancelling is not allowed mid-term.",
            "Because a freeze qualifies for the medical waiver.",
          ],
          correctIndex: 1,
          explanation:
            "A freeze avoids the fee and doesn't lose the months, so it suits people who feel they want to quit but really just need a pause.",
        },
        {
          prompt: "If the member freezes and then still cancels, what happens?",
          options: [
            "No fee applies after any freeze.",
            "The same fee math applies to whatever months remain then.",
            "The fee doubles.",
            "The membership auto-transfers to a new member.",
          ],
          correctIndex: 1,
          explanation:
            "'The same early-termination math applies, based on whatever months remain then.'",
        },
        {
          prompt: "What is the cheapest way for the member to fully end the obligation?",
          options: [
            "Paying the early-termination fee now.",
            "Freezing for three months, then cancelling.",
            "Transferring the remainder to someone else for a $20 admin fee.",
            "Claiming the medical waiver.",
          ],
          correctIndex: 2,
          explanation:
            "Transfer costs a one-time $20 and then 'you owe nothing,' cheaper than the half-of-remaining-months fee.",
        },
      ],
    },
    {
      part: 4,
      partLabel: "Listening to a News Item",
      sectionTitle: "Listening to a News Item",
      instructionBullets: [
        "You will hear a news item. You will hear it only once.",
        "Then you will answer 5 questions. Choose the best answer to each question.",
      ],
      blueprint: LISTENING_BLUEPRINT.newsReport,
      audioInstruction:
        "Listen to the news item. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Anchor", text: "Transit riders face a third day of disruption as talks between the city and the drivers' union stalled overnight. But the sticking point, both sides agree, is no longer pay — it is scheduling." },
        { speaker: "Anchor", text: "The union says a new algorithm that assigns shifts has produced rosters that are technically legal but humanly punishing: split shifts with unpaid four-hour gaps, and start times that shift by hours day to day. The city counters that the same system cut overtime costs by nineteen percent and that reversing it would mean either higher fares or fewer routes." },
        { speaker: "Anchor", text: "Notably, an independent mediator's report sided partly with each: it found the union's fatigue concerns 'well-founded and safety-relevant,' but also concluded the city's budget math was 'not a bluff.' The mediator's recommendation — predictable schedules funded by trimming the least-used late-night routes — has so far been rejected by both parties, each unwilling to be seen accepting a cut." },
        { speaker: "Anchor", text: "For riders, the practical message is simple: expect reduced service through at least the weekend. For the negotiation, the harder truth is that the numbers may already point to a deal neither side wants to sign first." },
      ],
      transcript:
        "A transit strike enters a third day, with scheduling — not pay — the sticking point. The union says a shift-assigning algorithm produces legal but punishing rosters (split shifts, four-hour unpaid gaps, shifting start times); the city says the system cut overtime 19% and reversing it means higher fares or fewer routes. An independent mediator sided partly with each: the fatigue concerns were 'well-founded and safety-relevant,' but the city's budget math was 'not a bluff.' The mediator proposed predictable schedules funded by cutting the least-used late-night routes, which both rejected, each unwilling to accept a visible cut. Riders should expect reduced service through the weekend.",
      questions: [
        {
          prompt: "What is the central issue in the dispute now?",
          options: [
            "Driver pay levels.",
            "Scheduling produced by a shift-assignment algorithm.",
            "The cost of new buses.",
            "Fare increases already imposed.",
          ],
          correctIndex: 1,
          explanation:
            "Both sides agree 'the sticking point... is no longer pay — it is scheduling,' driven by the rostering algorithm.",
        },
        {
          prompt: "What does the union mean by rosters that are 'technically legal but humanly punishing'?",
          options: [
            "The schedules break labour law but are tolerated.",
            "The schedules comply with rules yet impose severe strain through gaps and shifting times.",
            "The schedules are illegal and unpaid.",
            "The schedules are generous but confusing.",
          ],
          correctIndex: 1,
          explanation:
            "They meet legal requirements but include unpaid four-hour gaps and start times shifting by hours — lawful yet exhausting.",
        },
        {
          prompt: "How did the mediator's report treat the two sides?",
          options: [
            "It fully supported the union.",
            "It fully supported the city.",
            "It validated the union's safety concerns and the city's budget claims.",
            "It dismissed both positions as exaggerated.",
          ],
          correctIndex: 2,
          explanation:
            "It called the fatigue concerns 'well-founded and safety-relevant' and the budget math 'not a bluff' — partial vindication for each.",
        },
        {
          prompt: "Why have both parties rejected the mediator's recommendation?",
          options: [
            "Because it would raise fares immediately.",
            "Because neither wants to be seen accepting a service cut.",
            "Because it ignored the fatigue issue.",
            "Because it required a pay freeze.",
          ],
          correctIndex: 1,
          explanation:
            "Each is 'unwilling to be seen accepting a cut' to late-night routes, despite the recommendation addressing both concerns.",
        },
        {
          prompt: "What does the anchor imply by 'a deal neither side wants to sign first'?",
          options: [
            "No agreement is mathematically possible.",
            "The logical compromise already exists, but each side fears the optics of conceding.",
            "The union will inevitably win.",
            "Riders will never see normal service again.",
          ],
          correctIndex: 1,
          explanation:
            "'The numbers may already point to a deal' suggests the solution is clear; the obstacle is who accepts the visible concession first.",
        },
      ],
    },
    {
      part: 5,
      partLabel: "Listening to a Discussion",
      sectionTitle: "Listening to a Discussion",
      instructionBullets: [
        "You will hear a discussion among three speakers. You will hear it only once.",
        "Then you will answer 8 questions. Choose the best answer to each question.",
      ],
      blueprint: LISTENING_BLUEPRINT.workplaceMeeting,
      audioInstruction:
        "Listen to the discussion. You will hear it only once. It is about 2 minutes long.",
      script: [
        { speaker: "Host", text: "We're asking whether fully remote work helps or hurts early-career employees specifically. Raj, you manage a large distributed team." },
        { speaker: "Raj", text: "I do, and I'll be blunt: remote is great for my senior people and quietly bad for my juniors. Not because they work less — they often work more — but because they miss the ambient learning, the overheard conversation that teaches you how decisions actually get made." },
        { speaker: "Elena", text: "I'd challenge the framing, Raj. It's not remote that hurts juniors; it's remote done as if everyone were senior. If you don't rebuild mentorship deliberately, of course it collapses — but that's a design failure, not an inherent flaw." },
        { speaker: "Raj", text: "I'd accept 'design failure' if I believed most companies would do the design. In my experience they announce remote to save on real estate and call the mentorship question someone else's problem." },
        { speaker: "Host", text: "Dana, you were a junior hire on a remote team yourself." },
        { speaker: "Dana", text: "I was, and honestly both of them are describing my experience at different times. My first year was isolating in exactly the way Raj means. My second year was transformative in exactly the way Elena means — but only because one manager decided to make it so. The system didn't save me; a person did." },
        { speaker: "Elena", text: "But that's my whole point — it's fixable by design, not luck. If it depends on one heroic manager, we should be building it into the process so it doesn't." },
        { speaker: "Dana", text: "Agreed in principle. My worry is that 'building it into the process' becomes scheduled calls nobody values, which is worse than nothing because it looks solved." },
        { speaker: "Raj", text: "That's the honest risk. A mentorship checkbox is arguably more dangerous than an open gap, because at least the gap is visible." },
        { speaker: "Host", text: "So the consensus, roughly: remote isn't the problem, neglect is — but well-meant process can disguise neglect as well as it cures it." },
      ],
      transcript:
        "A host and three speakers debate remote work for early-career staff. Raj argues remote helps seniors but quietly hurts juniors, who lose the 'ambient learning' of overheard decisions. Elena reframes it as not remote itself but 'remote done as if everyone were senior' — a fixable design failure — though Raj doubts most firms will do the design, adopting remote to save on real estate. Dana, a former remote junior, says both are right at different times: an isolating first year (Raj) and a transformative second year (Elena) — but saved by one manager, not the system. Elena insists it must be built into process, not luck; Dana warns process can become valueless scheduled calls that merely look solved. Raj agrees a 'mentorship checkbox' can be worse than a visible gap.",
      questions: [
        {
          prompt: "What is Raj's initial claim about remote work?",
          options: [
            "It harms everyone equally.",
            "It benefits senior staff but quietly disadvantages juniors.",
            "It makes juniors work less.",
            "It is better for juniors than for seniors.",
          ],
          correctIndex: 1,
          explanation:
            "He says remote is 'great for my senior people and quietly bad for my juniors,' who miss ambient learning.",
        },
        {
          prompt: "What does Raj mean by 'ambient learning'?",
          options: [
            "Formal training courses.",
            "Learning absorbed from overheard conversations about how decisions are made.",
            "Online tutorials watched at home.",
            "Feedback given in performance reviews.",
          ],
          correctIndex: 1,
          explanation:
            "He defines it as 'the overheard conversation that teaches you how decisions actually get made.'",
        },
        {
          prompt: "How does Elena reframe the problem?",
          options: [
            "As proof that remote work should be abandoned.",
            "As remote being run as if everyone were senior — a fixable design failure.",
            "As a problem only juniors can solve themselves.",
            "As an issue of pay rather than mentorship.",
          ],
          correctIndex: 1,
          explanation:
            "She says it's 'remote done as if everyone were senior,' a 'design failure, not an inherent flaw.'",
        },
        {
          prompt: "Why is Raj skeptical of Elena's 'design failure' framing?",
          options: [
            "He doubts most companies will actually do the redesign.",
            "He believes mentorship is impossible remotely.",
            "He thinks juniors don't need mentorship.",
            "He disagrees that design matters at all.",
          ],
          correctIndex: 0,
          explanation:
            "He'd accept the framing 'if I believed most companies would do the design,' but says they adopt remote to save on real estate.",
        },
        {
          prompt: "What does Dana's experience illustrate?",
          options: [
            "That remote work is uniformly positive.",
            "That both Raj and Elena describe real, different phases of her experience.",
            "That neither speaker understands remote work.",
            "That mentorship is unnecessary in the second year.",
          ],
          correctIndex: 1,
          explanation:
            "Her isolating first year matched Raj; her transformative second matched Elena — both true at different times.",
        },
        {
          prompt: "What does Dana mean by 'The system didn't save me; a person did'?",
          options: [
            "Her improvement came from one manager's initiative, not the structure.",
            "The company's process was excellent.",
            "She saved herself without help.",
            "The system was redesigned to help her.",
          ],
          correctIndex: 0,
          explanation:
            "Her second year improved 'only because one manager decided to make it so' — an individual, not the system.",
        },
        {
          prompt: "What is Dana's worry about 'building it into the process'?",
          options: [
            "That it costs too much.",
            "That it can become valueless scheduled calls that merely appear to solve the problem.",
            "That managers will refuse to participate.",
            "That juniors will resent the extra meetings.",
          ],
          correctIndex: 1,
          explanation:
            "She fears process becomes 'scheduled calls nobody values,' worse than nothing 'because it looks solved.'",
        },
        {
          prompt: "Why does Raj call a 'mentorship checkbox' more dangerous than an open gap?",
          options: [
            "Because checkboxes take too much time.",
            "Because a visible gap at least prompts action, while a checkbox hides the neglect.",
            "Because juniors dislike being mentored formally.",
            "Because it increases real-estate costs.",
          ],
          correctIndex: 1,
          explanation:
            "'At least the gap is visible' — a false sense of resolution can conceal ongoing neglect.",
        },
      ],
    },
    {
      part: 6,
      partLabel: "Listening to Viewpoints",
      sectionTitle: "Listening to Viewpoints",
      instructionBullets: [
        "You will hear a report expressing viewpoints. You will hear it only once.",
        "Then you will answer 6 questions. Choose the best answer to each question.",
      ],
      blueprint: LISTENING_BLUEPRINT.publicTalk,
      audioInstruction:
        "Listen to the report. You will hear it only once. It is about 3 minutes long.",
      script: [
        { speaker: "Speaker", text: "Every few years someone declares the standardized test dead, and every few years it returns, because the arguments against it are strong and the alternatives are worse in ways we prefer not to examine." },
        { speaker: "Speaker", text: "The case against is familiar and largely correct. A single high-stakes test rewards coaching, disadvantages students who can't afford it, and captures a narrow slice of what makes someone capable. Schools that dropped test requirements often saw more diverse applicant pools. So far, so damning." },
        { speaker: "Speaker", text: "But here is the part the critics rarely finish. When you remove the test, you do not remove the need to compare thousands of applicants — you simply move the weight onto the things that remain: essays, recommendations, extracurriculars. And every one of those is more sensitive to wealth than the test was, not less. A polished essay is often a paid essay. A glittering activity list is often a purchased one." },
        { speaker: "Speaker", text: "So the uncomfortable finding from several studies is this: test-optional policies can increase the appearance of fairness while leaving the underlying advantage largely intact, because the advantage simply relocates to less visible channels. We feel better; the wealthy applicant is, if anything, slightly better off." },
        { speaker: "Speaker", text: "None of this means the test is good. It means 'abolish the test' and 'increase fairness' are not the same sentence, though we keep saying them as if they were. The honest reformer's question is not 'test or no test,' but 'which imperfect signal is hardest to buy?' — and that is a far less satisfying slogan, which is precisely why it loses." },
      ],
      transcript:
        "The speaker argues standardized tests keep returning because the alternatives are worse in overlooked ways. The case against is largely correct: high-stakes tests reward coaching, disadvantage the poor, and measure a narrow slice; dropping them often diversified applicant pools. But removing the test doesn't remove the need to compare applicants — it shifts weight onto essays, recommendations, and activities, all more sensitive to wealth (a polished essay is often paid for). So test-optional policies can increase the appearance of fairness while leaving underlying advantage intact, merely relocating it to less visible channels. This doesn't make the test good; it means 'abolish the test' and 'increase fairness' aren't the same. The real question is 'which imperfect signal is hardest to buy?' — a less satisfying slogan, which is why it loses.",
      questions: [
        {
          prompt: "Why does the speaker say standardized tests keep 'returning'?",
          options: [
            "Because the arguments against them are weak.",
            "Because the alternatives are worse in ways people prefer not to examine.",
            "Because governments mandate them.",
            "Because students prefer them.",
          ],
          correctIndex: 1,
          explanation:
            "The tests return 'because the arguments against it are strong and the alternatives are worse in ways we prefer not to examine.'",
        },
        {
          prompt: "Which statement reflects the speaker's view of the case against testing?",
          options: [
            "It is mistaken and exaggerated.",
            "It is familiar and largely correct.",
            "It is irrelevant to fairness.",
            "It applies only to wealthy schools.",
          ],
          correctIndex: 1,
          explanation:
            "He calls the case against 'familiar and largely correct,' citing coaching, cost, and narrow measurement.",
        },
        {
          prompt: "What happens, according to the speaker, when the test is removed?",
          options: [
            "The need to compare applicants disappears.",
            "The comparison weight shifts to essays, recommendations, and activities.",
            "Wealth stops influencing admissions.",
            "Applicant pools become less diverse.",
          ],
          correctIndex: 1,
          explanation:
            "Removing the test 'move[s] the weight onto the things that remain,' which are more wealth-sensitive.",
        },
        {
          prompt: "Why does the speaker say alternatives are 'more sensitive to wealth, not less'?",
          options: [
            "Because polished essays and activity lists are often bought.",
            "Because they are graded by computers.",
            "Because they are cheaper to prepare.",
            "Because they ignore recommendations.",
          ],
          correctIndex: 0,
          explanation:
            "'A polished essay is often a paid essay. A glittering activity list is often a purchased one.'",
        },
        {
          prompt: "What is the 'uncomfortable finding' from several studies?",
          options: [
            "Test-optional policies eliminate wealth advantage.",
            "Test-optional policies can look fairer while leaving the advantage intact.",
            "Standardized tests are perfectly fair.",
            "Essays predict success better than tests.",
          ],
          correctIndex: 1,
          explanation:
            "They 'increase the appearance of fairness while leaving the underlying advantage largely intact,' relocating it to hidden channels.",
        },
        {
          prompt: "What does the speaker propose as the honest reformer's real question?",
          options: [
            "'Test or no test?'",
            "'How can we make tests cheaper?'",
            "'Which imperfect signal is hardest to buy?'",
            "'How do we abolish admissions entirely?'",
          ],
          correctIndex: 2,
          explanation:
            "He reframes the question as 'which imperfect signal is hardest to buy?' — a less satisfying slogan, which is why it loses.",
        },
      ],
    },
  ],
}
