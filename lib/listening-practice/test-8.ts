import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest8: ListeningPracticeTest = {
  id: "hard-8",
  title: "Elite Listening Test 8",
  topic: "Rent arbitration, sibling caregiving, hospital triage change, coastal erosion, peer-review reform, remote-work tax",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test. Overlapping hedges, buried conditions, and speakers who quietly reverse themselves — built so even an examiner rarely clears CLB 6 on one listen.",
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
        "A tenant phones a rent-arbitration officer to challenge an above-guideline increase, and the officer explains what the tenant can and cannot contest.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Officer", text: "I've pulled your file, Mr. Halvorsen. Before we talk about the eleven percent, I should be clear that the board can only look at part of it. The guideline portion — the two point five percent — isn't something we can touch. That's set provincially." },
        { speaker: "Halvorsen", text: "So the whole fight is about the extra eight and a half?" },
        { speaker: "Officer", text: "Not quite the whole of it either. The landlord is claiming that increment for capital work — a new boiler and roof repairs. If the work qualifies and the receipts hold up, most of it stands. What you can contest is whether the work was capital improvement or ordinary maintenance dressed up as improvement." },
        { speaker: "Halvorsen", text: "The roof was patched, not replaced. That sounds like maintenance to me." },
        { speaker: "Officer", text: "It might be, and that's your strongest line. But be careful — a patch that extends the roof's life by years can still count as capital. The board looks at effect, not just the word the contractor used." },
        { speaker: "Halvorsen", text: "And the boiler? It's clearly new." },
        { speaker: "Officer", text: "A new boiler is almost certainly capital, so I wouldn't spend your energy there. Where you might gain ground is timing: the rules require the landlord to have completed the work within a defined window before applying. If the boiler was installed too early, the cost can't be carried into this increase." },
        { speaker: "Halvorsen", text: "The invoice is dated fourteen months ago." },
        { speaker: "Officer", text: "That could matter a great deal, depending on the window in force at the time — I'm not going to promise it does, because the rule changed last year and I'd need to check which version applies to your building." },
        { speaker: "Halvorsen", text: "So should I file on the roof or the timing?" },
        { speaker: "Officer", text: "File on both, but understand they pull in opposite directions on effort. The roof argument is easy to raise and hard to win; the timing argument is harder to raise but, if the dates line up, close to decisive." },
      ],
      transcript:
        "An arbitration officer explains that the guideline portion of a rent increase cannot be challenged, only the above-guideline increment claimed for capital work. The tenant's roof-patch argument is his easiest to raise but hard to win, since even a patch can count as capital if it extends the roof's life. The new boiler is almost certainly capital, but a timing rule about when the work was completed — complicated by a rule change last year — could be close to decisive if the dates line up.",
      questions: [
        {
          prompt: "Why does the officer say the board 'can only look at part of it'?",
          options: [
            "Because the guideline portion of the increase is fixed provincially and cannot be contested.",
            "Because the tenant filed his complaint after the deadline.",
            "Because the landlord has withdrawn most of the increase already.",
            "Because the board lacks the receipts needed to review the full amount.",
          ],
          correctIndex: 0,
          explanation:
            "The officer separates the untouchable 2.5% guideline portion from the contestable above-guideline increment; that division, not a deadline or missing receipts, is why only part is reviewable.",
        },
        {
          prompt: "What does the officer imply about the roof argument?",
          options: [
            "It is legally strong and likely to succeed.",
            "It is easy to bring forward but difficult to win.",
            "It cannot be raised because the roof was replaced.",
            "It will automatically be classed as maintenance.",
          ],
          correctIndex: 1,
          explanation:
            "He calls it the tenant's 'strongest line' to raise, then warns a life-extending patch can still be capital, and later that it is 'easy to raise and hard to win.'",
        },
        {
          prompt: "Why does the officer discourage focusing on the boiler as capital versus maintenance?",
          options: [
            "Because the boiler was never actually installed.",
            "Because a new boiler is almost certainly capital, so that classification is nearly unwinnable.",
            "Because the boiler cost is too small to affect the increase.",
            "Because the tenant already agreed the boiler was maintenance.",
          ],
          correctIndex: 1,
          explanation:
            "He says a new boiler is 'almost certainly capital,' so contesting its classification wastes energy — the opening is timing, not category.",
        },
        {
          prompt: "What is the significance of the boiler invoice being dated fourteen months ago?",
          options: [
            "It proves the landlord never paid for the boiler.",
            "It may fall outside the completion window that lets the cost be carried into the increase.",
            "It confirms the increase is entirely invalid.",
            "It shows the tenant was overcharged in a previous year.",
          ],
          correctIndex: 1,
          explanation:
            "The officer raises a rule requiring work to be completed within a defined window before applying; an early date could bar the cost — hence the interest in the invoice date.",
        },
        {
          prompt: "Why does the officer refuse to promise the timing argument will work?",
          options: [
            "Because timing arguments are never accepted by the board.",
            "Because a rule change last year means he must confirm which version applies to the building.",
            "Because the tenant has not paid the required filing fee.",
            "Because the landlord has a stronger timing claim of his own.",
          ],
          correctIndex: 1,
          explanation:
            "He notes 'the rule changed last year' and he'd need to check which version applies, so he won't commit to whether the fourteen-month date is disqualifying.",
        },
        {
          prompt: "What does the officer mean when he says the two arguments 'pull in opposite directions on effort'?",
          options: [
            "One is cheap to raise but weak; the other is harder to raise but potentially decisive.",
            "Filing one argument automatically cancels the other.",
            "Both arguments require the same amount of preparation.",
            "The board will only allow the tenant to choose one.",
          ],
          correctIndex: 0,
          explanation:
            "He contrasts the roof line (easy to raise, hard to win) with the timing line (harder to raise, close to decisive if dates align) — opposite trade-offs, not mutual exclusivity.",
        },
        {
          prompt: "What is the officer's overall recommendation to the tenant?",
          options: [
            "Drop the challenge because the increase is valid.",
            "File on both the roof and the timing, while understanding their different odds and effort.",
            "File only on the roof because it is the strongest point.",
            "Wait until the rule change is finalized before filing anything.",
          ],
          correctIndex: 1,
          explanation:
            "He explicitly says 'File on both,' then explains the differing effort-versus-payoff of each, rather than telling him to drop or narrow the claim.",
        },
        {
          prompt: "What can be inferred about the officer's general stance in the call?",
          options: [
            "He is advocating aggressively for the tenant to win.",
            "He is giving measured guidance while avoiding guarantees on any point.",
            "He has already decided the landlord will prevail.",
            "He is indifferent to which arguments the tenant raises.",
          ],
          correctIndex: 1,
          explanation:
            "Throughout he hedges — 'might,' 'almost certainly,' 'I'm not going to promise' — offering direction without committing to an outcome, which is measured rather than partisan or dismissive.",
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
        "Two adult siblings discuss how to share the care of their aging father, and disagree about what 'fair' means.",
      blueprint: LISTENING_BLUEPRINT.dailyConversation,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Dana", text: "I'm not saying you don't help, Marcus. I'm saying the help isn't the kind that shows up on a calendar. I do the driving, the pharmacy, the appointments — you send money." },
        { speaker: "Marcus", text: "Money that pays for the cleaner and the grocery delivery, which is time you'd otherwise be spending. I'm not pretending it's equal, but it isn't nothing." },
        { speaker: "Dana", text: "I never said it was nothing. I said it's easier. You can wire a transfer from another city in thirty seconds. I can't wire a transfer to sit in a waiting room for two hours." },
        { speaker: "Marcus", text: "Then let's hire someone for the appointments too. I'll cover it." },
        { speaker: "Dana", text: "That's the part I keep tripping on. He doesn't want a stranger in the room when the doctor talks. He wants one of us. Paying more doesn't solve that — it just moves the problem somewhere you can't see it." },
        { speaker: "Marcus", text: "Okay. So what would actually help you, as opposed to what would settle the argument?" },
        { speaker: "Dana", text: "Come out one week a month. Not to fix anything — just so I'm not the only name he associates with being unwell." },
        { speaker: "Marcus", text: "One week a month is a lot with my job. But… let me stop negotiating that down before I've even tried it. I'll do a week next month and we'll see how it lands." },
        { speaker: "Dana", text: "That's the first thing you've said that sounds like sharing it rather than funding it." },
      ],
      transcript:
        "Dana argues that although Marcus contributes money, the caregiving that 'shows up on a calendar' falls to her, and that hiring help doesn't solve their father's wish for a family member at appointments. Marcus initially offers to pay for more help, then recognizes Dana wants his presence, not more funding. He agrees to try spending one week a month there, which Dana welcomes as finally sharing the burden rather than funding it.",
      questions: [
        {
          prompt: "What is Dana's main complaint about the current arrangement?",
          options: [
            "That Marcus contributes no money at all.",
            "That the time-based caregiving falls entirely on her, even though Marcus pays.",
            "That their father prefers Marcus to her.",
            "That the cleaner and grocery delivery are unnecessary.",
          ],
          correctIndex: 1,
          explanation:
            "She distinguishes Marcus's money from 'the kind that shows up on a calendar' — driving, appointments — which she does; her issue is the imbalance of time, not an absence of money.",
        },
        {
          prompt: "Why does Dana reject Marcus's offer to hire someone for the appointments?",
          options: [
            "Because their father wants a family member, not a stranger, in the room.",
            "Because they cannot afford additional help.",
            "Because she enjoys taking him to appointments.",
            "Because the doctor forbids paid caregivers.",
          ],
          correctIndex: 0,
          explanation:
            "She says he 'doesn't want a stranger in the room' and that paying just moves the problem out of Marcus's sight — the objection is their father's preference, not cost or enjoyment.",
        },
        {
          prompt: "What does Marcus mean by 'let me stop negotiating that down before I've even tried it'?",
          options: [
            "He wants Dana to reduce her request first.",
            "He catches himself bargaining and decides to attempt the full commitment.",
            "He is refusing the one-week-a-month plan.",
            "He plans to send more money instead.",
          ],
          correctIndex: 1,
          explanation:
            "He notices he is instinctively shrinking the commitment and chooses to try the full week rather than talk it down — a self-correction, not a refusal or counteroffer.",
        },
        {
          prompt: "What distinction does Dana draw when Marcus asks what would 'actually help'?",
          options: [
            "Between helping their father and helping herself.",
            "Between what would help her and what would merely settle the argument.",
            "Between weekday and weekend visits.",
            "Between medical and financial decisions.",
          ],
          correctIndex: 1,
          explanation:
            "Marcus explicitly frames it as 'what would help you, as opposed to what would settle the argument,' and Dana answers in those terms by asking for presence.",
        },
        {
          prompt: "Why does Dana say Marcus's final offer 'sounds like sharing it rather than funding it'?",
          options: [
            "Because he agreed to pay for a full-time nurse.",
            "Because he committed his own time and presence rather than more money.",
            "Because he offered to take over all the appointments permanently.",
            "Because he promised to move to the same city.",
          ],
          correctIndex: 1,
          explanation:
            "The whole tension was money versus time; his agreeing to spend a week there is the first contribution of presence, which she contrasts with merely 'funding it.'",
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
        "A hospital administrator briefs a new charge nurse on a change to the emergency triage system, and the nurse pushes back on how it will work in practice.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 100 seconds long.",
      script: [
        { speaker: "Admin", text: "The new triage tool replaces the five-level scale with a model that weighs vital signs against a predicted-deterioration score. The idea is to catch patients who look stable now but are trending badly." },
        { speaker: "Nurse", text: "So a patient with normal vitals could be bumped up the queue on a prediction?" },
        { speaker: "Admin", text: "In principle, yes, but the tool doesn't move anyone on its own. It flags. A nurse still assigns the level. The prediction is advisory, not binding." },
        { speaker: "Nurse", text: "Advisory until the day there's a bad outcome and someone asks why we overrode the flag." },
        { speaker: "Admin", text: "That's a fair worry, and I won't pretend the documentation burden is zero. If you override a high flag, you note why. But that's true of the old system too — you always had to justify a downgrade." },
        { speaker: "Nurse", text: "The difference is the old system was based on what I could see. This is based on a model I can't interrogate." },
        { speaker: "Admin", text: "You can, actually — the tool shows the top three factors driving each score. It's not a black box. What it won't show is the weighting math behind them." },
        { speaker: "Nurse", text: "And when the model and my judgment disagree, whose call carries?" },
        { speaker: "Admin", text: "Yours, on the floor, every time. The model can't be disciplined for being wrong; you can. That's precisely why the final assignment stays with a person." },
        { speaker: "Nurse", text: "Then say that in the training, loudly. Half the staff already think the software is going to be blamed instead of them, and that's when people stop using their own eyes." },
        { speaker: "Admin", text: "Point taken. I'll make the accountability line the first slide, not the last." },
      ],
      transcript:
        "An administrator describes a new triage tool that weighs vital signs against a predicted-deterioration score to catch patients trending badly despite stable vitals. The tool only flags; a nurse still assigns the level, so the prediction is advisory, and overrides must be documented as downgrades always were. The tool shows the top three factors behind each score but not the weighting math, and final judgment always rests with the nurse — a point the nurse urges be stated prominently in training.",
      questions: [
        {
          prompt: "What is the main purpose of the new triage tool?",
          options: [
            "To replace nurses' judgment with automated level assignment.",
            "To identify patients who appear stable but are trending toward deterioration.",
            "To reduce the number of triage levels from five to three.",
            "To speed up discharge for low-risk patients.",
          ],
          correctIndex: 1,
          explanation:
            "The admin says the point is to 'catch patients who look stable now but are trending badly' — deterioration prediction, not automation or discharge speed.",
        },
        {
          prompt: "How does the tool actually affect a patient's place in the queue?",
          options: [
            "It automatically moves patients up based on the prediction.",
            "It flags patients, but a nurse still assigns the level.",
            "It locks the nurse's assignment once entered.",
            "It has no effect until a doctor confirms it.",
          ],
          correctIndex: 1,
          explanation:
            "He stresses 'the tool doesn't move anyone on its own. It flags,' with the nurse assigning the level — the prediction is advisory.",
        },
        {
          prompt: "How does the administrator respond to the nurse's worry about being blamed for overrides?",
          options: [
            "He denies there is any documentation involved.",
            "He acknowledges the concern and notes overrides must be justified, as downgrades always were.",
            "He says overrides are not permitted under the new system.",
            "He promises the software will take responsibility for outcomes.",
          ],
          correctIndex: 1,
          explanation:
            "He calls it 'a fair worry,' admits the documentation burden isn't zero, and points out justifying a downgrade was already required under the old scale.",
        },
        {
          prompt: "What does the administrator concede the tool will NOT show?",
          options: [
            "The top three factors driving the score.",
            "The weighting math behind the factors.",
            "The patient's vital signs.",
            "The nurse's final level assignment.",
          ],
          correctIndex: 1,
          explanation:
            "He says it shows the top three factors — 'not a black box' — but 'won't show is the weighting math behind them.'",
        },
        {
          prompt: "When the model and the nurse disagree, whose decision prevails, and why?",
          options: [
            "The model's, because it is more accurate.",
            "The nurse's, because a person can be held accountable and the model cannot.",
            "The doctor's, because they outrank both.",
            "It is decided by hospital policy on a case-by-case basis.",
          ],
          correctIndex: 1,
          explanation:
            "He says the nurse's call carries 'every time' because 'the model can't be disciplined for being wrong; you can' — accountability is the stated reason.",
        },
        {
          prompt: "Why does the nurse insist the accountability point be stated 'loudly' in training?",
          options: [
            "Because staff fear the software will be blamed, which could make them stop relying on their own observation.",
            "Because the training sessions are too short.",
            "Because the administrator forgot to mention overrides.",
            "Because nurses want the model removed entirely.",
          ],
          correctIndex: 0,
          explanation:
            "She warns that if staff think the software takes the blame, 'people stop using their own eyes' — so the accountability line must be prominent to preserve vigilance.",
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
        "A radio news item reports on a coastal town's decision about managed retreat from an eroding shoreline.",
      blueprint: LISTENING_BLUEPRINT.newsReport,
      audioInstruction:
        "Listen to the news report. You will hear it only once. It is about 75 seconds long.",
      script: [
        { speaker: "Anchor", text: "The council of Saltmarsh Bay voted last night to adopt a policy of managed retreat for its eastern shoreline, becoming the first town in the region to do so — though the vote was closer, and narrower in scope, than early reports suggested." },
        { speaker: "Reporter", text: "The policy does not, as some residents feared, order any home to be demolished. What it does is stop the town from rebuilding public infrastructure — roads, the seawall, storm drains — once erosion claims it. Private owners may still defend their own property, but at their own cost and without a guarantee the town will maintain access." },
        { speaker: "Reporter", text: "Supporters argue that decades of rebuilding the seawall have cost more than the land it protects is worth, and that each repair simply postpones an inevitable loss. Opponents counter that withdrawing public services is demolition by other means — a house no one can reach or insure is a house no one can keep." },
        { speaker: "Reporter", text: "The council stressed that the policy applies only to the eastern shoreline for now, and that a separate study on the more populated southern beach won't report until next year. The mayor cautioned against reading last night's vote as a template for the whole coast." },
      ],
      transcript:
        "Saltmarsh Bay's council adopted managed retreat for its eastern shoreline by a narrow vote, but the policy demolishes no homes; it stops the town rebuilding public infrastructure once erosion claims it, while private owners may defend property at their own cost without guaranteed access. Supporters say endless seawall repairs cost more than the land is worth; opponents call withdrawing services 'demolition by other means.' The policy covers only the eastern shore, with a study on the southern beach due next year, and the mayor warned against treating the vote as a coast-wide template.",
      questions: [
        {
          prompt: "What did the Saltmarsh Bay council actually vote to do?",
          options: [
            "Demolish homes along the eastern shoreline.",
            "Stop rebuilding public infrastructure once erosion destroys it on the eastern shoreline.",
            "Build a larger seawall to protect the whole coast.",
            "Relocate all residents of the southern beach.",
          ],
          correctIndex: 1,
          explanation:
            "The report says no home is ordered demolished; the policy stops the town from rebuilding roads, seawall, and drains once erosion claims them.",
        },
        {
          prompt: "What may private property owners still do under the policy?",
          options: [
            "Require the town to maintain their road access.",
            "Defend their own property, but at their own cost and without guaranteed access.",
            "Force the council to rebuild the public seawall.",
            "Claim full compensation for lost land.",
          ],
          correctIndex: 1,
          explanation:
            "Owners 'may still defend their own property, but at their own cost and without a guarantee the town will maintain access.'",
        },
        {
          prompt: "How do opponents characterize the withdrawal of public services?",
          options: [
            "As a temporary cost-saving measure.",
            "As 'demolition by other means,' since an unreachable, uninsurable house cannot be kept.",
            "As a fair compromise between both sides.",
            "As a plan that only affects the southern beach.",
          ],
          correctIndex: 1,
          explanation:
            "Opponents argue 'withdrawing public services is demolition by other means — a house no one can reach or insure is a house no one can keep.'",
        },
        {
          prompt: "What is the main argument made by supporters of the policy?",
          options: [
            "That the eastern shoreline is more valuable than the southern beach.",
            "That repeated seawall repairs cost more than the land is worth and only postpone loss.",
            "That residents have already agreed to leave voluntarily.",
            "That private defense of property is impossible.",
          ],
          correctIndex: 1,
          explanation:
            "Supporters say decades of rebuilding 'cost more than the land it protects is worth' and each repair 'postpones an inevitable loss.'",
        },
        {
          prompt: "Why did the mayor caution against seeing the vote as 'a template for the whole coast'?",
          options: [
            "Because the vote was unanimous and uncontroversial.",
            "Because the policy applies only to the eastern shoreline, with the southern beach still under separate study.",
            "Because the council plans to reverse the decision next year.",
            "Because other towns have already adopted the same policy.",
          ],
          correctIndex: 1,
          explanation:
            "The council stressed the policy covers only the eastern shoreline 'for now,' with a separate southern-beach study due next year — so it is not a coast-wide decision.",
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
        "Three academics debate a proposal to reform scientific peer review by making reviewer reports public and signed.",
      blueprint: LISTENING_BLUEPRINT.campusDiscussion,
      audioInstruction:
        "Listen to the discussion. You will hear it only once. It is about 110 seconds long.",
      script: [
        { speaker: "Priya", text: "The core problem with peer review is that it happens in the dark. If reports were published alongside the paper, and signed, reviewers would write more carefully and readers could weigh the criticism themselves." },
        { speaker: "Tomas", text: "I'm with you on publishing the reports. I part ways at 'signed.' The moment a junior reviewer has to put their name on a critique of a powerful lab, honesty becomes a career risk. You'd get politeness, not scrutiny." },
        { speaker: "Priya", text: "Or you'd get accountability. Anonymous reviewers hide lazy, cruel, or biased reports behind the mask. Take the mask off and the worst behaviour stops." },
        { speaker: "Elena", text: "Both of you are assuming the effect runs one way. It doesn't. Signing probably improves the worst reviewers and silences the most vulnerable good ones. The question is which effect is larger, and that's empirical — we don't actually know." },
        { speaker: "Tomas", text: "That's my point though, Elena. If we don't know, defaulting to signing gambles with the people who have the least protection." },
        { speaker: "Elena", text: "Except the status quo also gambles — with the authors who get savaged anonymously and can't tell whether a rival tanked their paper. There's no neutral option here. Every design protects someone and exposes someone else." },
        { speaker: "Priya", text: "So make it optional. Reviewers who sign get credit; those who don't stay anonymous but their unsigned report is labelled as such." },
        { speaker: "Tomas", text: "And instantly a signed report reads as brave and an unsigned one as suspect, even when the anonymous reviewer is simply protecting themselves. Optional isn't neutral either — it just hides the pressure under a choice." },
        { speaker: "Elena", text: "That I'll grant you. A 'choice' that carries a reputational penalty isn't really optional. If we're serious, we'd publish the reports, keep signing genuinely voluntary, and study whether review quality actually changes before we mandate anything." },
        { speaker: "Priya", text: "I can live with that, as long as 'study it' doesn't become a polite way of never changing anything." },
      ],
      transcript:
        "Priya proposes publishing signed peer-review reports so reviewers write carefully and readers can judge criticism, arguing anonymity hides bad behaviour. Tomas supports publishing but opposes signing, warning junior reviewers would soften critiques of powerful labs. Elena argues the effect runs both ways — signing improves bad reviewers but silences vulnerable good ones — and that no option is neutral since every design protects some and exposes others; she concludes they should publish reports, keep signing genuinely voluntary, and study effects before mandating, while Priya warns 'study it' must not become an excuse for inaction.",
      questions: [
        {
          prompt: "What is Priya's original proposal?",
          options: [
            "To abolish peer review entirely.",
            "To publish reviewer reports and require reviewers to sign them.",
            "To keep reviews anonymous but pay reviewers.",
            "To let authors choose their own reviewers.",
          ],
          correctIndex: 1,
          explanation:
            "She proposes reports be 'published alongside the paper, and signed' so reviewers write carefully and readers can weigh the criticism.",
        },
        {
          prompt: "On what point does Tomas agree with Priya, and where does he break away?",
          options: [
            "He agrees on signing but rejects publishing.",
            "He agrees on publishing the reports but rejects requiring signatures.",
            "He rejects both publishing and signing.",
            "He agrees with the entire proposal.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'I'm with you on publishing the reports. I part ways at signed,' fearing signatures make honesty a career risk for junior reviewers.",
        },
        {
          prompt: "What is Elena's central contribution to the debate?",
          options: [
            "That signing has only positive effects.",
            "That the effects run in both directions and no option is neutral.",
            "That peer review should be abolished.",
            "That authors should never see reviewer reports.",
          ],
          correctIndex: 1,
          explanation:
            "She argues signing 'improves the worst reviewers and silences the most vulnerable good ones' and that 'every design protects someone and exposes someone else.'",
        },
        {
          prompt: "How does Elena respond to Tomas's claim that not knowing the effect means we should avoid signing?",
          options: [
            "She agrees the status quo is safe.",
            "She argues the status quo also gambles — with authors savaged anonymously.",
            "She says the effect is already fully known.",
            "She proposes abandoning the reform discussion.",
          ],
          correctIndex: 1,
          explanation:
            "She counters that 'the status quo also gambles — with the authors who get savaged anonymously' — there is 'no neutral option.'",
        },
        {
          prompt: "Why does Tomas object to Priya's compromise of making signing optional?",
          options: [
            "Because it would cost too much to administer.",
            "Because a signed report would read as brave and an unsigned one as suspect, so 'optional' hides pressure under a choice.",
            "Because reviewers would refuse to review at all.",
            "Because authors would never see the unsigned reports.",
          ],
          correctIndex: 1,
          explanation:
            "He says optional signing makes unsigned reports 'read as suspect,' so it 'just hides the pressure under a choice' rather than being neutral.",
        },
        {
          prompt: "What does Elena concede to Tomas?",
          options: [
            "That signing should be mandatory after all.",
            "That a choice carrying a reputational penalty isn't really optional.",
            "That reports should not be published.",
            "That anonymous reviews are always dishonest.",
          ],
          correctIndex: 1,
          explanation:
            "She grants that 'a choice that carries a reputational penalty isn't really optional,' accepting his critique of the optional model.",
        },
        {
          prompt: "What is the group's tentative resolution?",
          options: [
            "Mandate signing immediately across all journals.",
            "Publish reports, keep signing genuinely voluntary, and study effects before mandating anything.",
            "Keep the current anonymous system unchanged.",
            "Let each author decide whether reviews are signed.",
          ],
          correctIndex: 1,
          explanation:
            "Elena proposes publishing reports, keeping signing 'genuinely voluntary,' and studying whether quality changes 'before we mandate anything,' which Priya accepts.",
        },
        {
          prompt: "What is Priya's caveat when she accepts the resolution?",
          options: [
            "That the study must be funded by the journals.",
            "That 'study it' must not become a polite way of never changing anything.",
            "That signing must remain mandatory during the study.",
            "That authors must approve the study design.",
          ],
          correctIndex: 1,
          explanation:
            "She agrees 'as long as study it doesn't become a polite way of never changing anything' — a warning against using research as an excuse for inaction.",
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
        "An economist gives a talk on proposals to tax remote workers who live in one jurisdiction but work for employers in another.",
      blueprint: LISTENING_BLUEPRINT.publicTalk,
      audioInstruction:
        "Listen to the talk. You will hear it only once. It is about 100 seconds long.",
      script: [
        { speaker: "Speaker", text: "There's a proposal gaining traction that I want to complicate rather than simply endorse or reject: taxing remote workers where their employer sits, not where they live. On its face it sounds like closing a loophole. I think the truth is messier." },
        { speaker: "Speaker", text: "The argument for it is intuitive. A worker uses a city's brand, its client networks, its labour market — even from two hundred kilometres away — while paying no tax to sustain any of it, and drawing services from the town where they actually live. Someone, the argument goes, is free-riding." },
        { speaker: "Speaker", text: "But notice the sleight of hand. The worker's home town isn't subsidizing the employer's city; it's the other way around. The bedroom community collects the property taxes, fills its schools, keeps its main street alive — precisely because that worker earns city wages and spends them locally. Tax the wages back to the employer's city and you hollow out the very towns that remote work was supposed to revive." },
        { speaker: "Speaker", text: "I'm not claiming the employer's city has no case. It does bear costs — congestion when workers do commute in, infrastructure that anchors the industry. My point is narrower: the fairness story is being told from one side of the ledger. Both cities gain something and lose something, and a tax that assumes only one of them is owed will overcorrect." },
        { speaker: "Speaker", text: "So where do I land? Cautiously against the proposal as written, but not against the question it raises. If we must reallocate, split the revenue by formula rather than handing it wholesale to the city with the louder lobby. And be honest that any formula is a political choice dressed as an accounting one." },
      ],
      transcript:
        "An economist examines a proposal to tax remote workers where their employer is located rather than where they live. The intuitive case is that such workers free-ride on the employer city's networks while paying it nothing; but the speaker argues the home town actually benefits, collecting property taxes and local spending, so taxing wages back to the employer's city would hollow out the communities remote work revives. Conceding the employer city bears some costs, he lands cautiously against the proposal as written, favouring a formula-based split while admitting any formula is a political choice dressed as accounting.",
      questions: [
        {
          prompt: "How does the speaker position himself toward the proposal at the start?",
          options: [
            "He fully endorses it as a way to close a loophole.",
            "He wants to complicate it rather than simply endorse or reject it.",
            "He dismisses it as obviously wrong.",
            "He refuses to take any position.",
          ],
          correctIndex: 1,
          explanation:
            "He says he wants 'to complicate rather than simply endorse or reject' the proposal, calling the truth 'messier' than closing a loophole.",
        },
        {
          prompt: "What is the intuitive argument FOR taxing workers where the employer sits?",
          options: [
            "That remote workers earn too much money.",
            "That such workers use the employer city's networks and brand while paying it no tax — free-riding.",
            "That home towns refuse to collect any taxes.",
            "That employers want to relocate their offices.",
          ],
          correctIndex: 1,
          explanation:
            "The argument is that a worker 'uses a city's brand, its client networks, its labour market... while paying no tax to sustain any of it' — i.e., free-riding.",
        },
        {
          prompt: "What 'sleight of hand' does the speaker identify in that argument?",
          options: [
            "That the employer's city subsidizes the home town.",
            "That the home town actually benefits from the worker's city wages, not the reverse.",
            "That remote workers pay no taxes anywhere.",
            "That the worker's home town is wealthier than the employer's city.",
          ],
          correctIndex: 1,
          explanation:
            "He argues the home town isn't subsidizing the employer's city; rather it collects property taxes and local spending 'because that worker earns city wages and spends them locally.'",
        },
        {
          prompt: "What does the speaker concede about the employer's city?",
          options: [
            "That it has no legitimate claim at all.",
            "That it does bear some costs, such as congestion and anchoring infrastructure.",
            "That it should receive all the tax revenue.",
            "That it benefits more than the home town in every case.",
          ],
          correctIndex: 1,
          explanation:
            "He says he's 'not claiming the employer's city has no case' — it bears congestion costs and infrastructure that anchors the industry.",
        },
        {
          prompt: "What is the speaker's central criticism of the 'fairness story'?",
          options: [
            "That it is too complicated for voters to understand.",
            "That it is told from only one side of the ledger, ignoring that both cities gain and lose.",
            "That it favours the home town unfairly.",
            "That it ignores the workers' own preferences.",
          ],
          correctIndex: 1,
          explanation:
            "He says the fairness story 'is being told from one side of the ledger' when 'both cities gain something and lose something,' so a one-sided tax will overcorrect.",
        },
        {
          prompt: "Where does the speaker ultimately land?",
          options: [
            "Firmly in favour of the proposal as written.",
            "Cautiously against the proposal as written, favouring a formula-based split while admitting any formula is political.",
            "Against reallocating any revenue at all.",
            "In favour of giving all revenue to the city with the strongest lobby.",
          ],
          correctIndex: 1,
          explanation:
            "He is 'cautiously against the proposal as written,' preferring to 'split the revenue by formula' while conceding any formula 'is a political choice dressed as an accounting one.'",
        },
      ],
    },
  ],
}
