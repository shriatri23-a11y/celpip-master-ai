import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest5: ListeningPracticeTest = {
  id: "hard-5",
  title: "Elite Listening Test 5",
  topic: "Gym contract, wedding budget, library renovation, coral bleaching, peer review ethics, remote-work tax",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test. Layered conditions, ironic understatement, and speakers who concede points without abandoning their conclusions — tuned so even an examiner rarely clears CLB 6 on one listen.",
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
        "A member tries to cancel a gym contract after an injury, and the manager explains what the agreement actually allows.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Member", text: "I hurt my knee and my doctor says no impact training for six months. I want to cancel — surely a medical reason lets me out." },
        { speaker: "Manager", text: "It can, but 'cancel' and 'freeze' are two different doors, and most people want the second while asking for the first. A medical freeze suspends your billing for up to six months at no charge. A cancellation ends the contract but triggers the early-termination fee." },
        { speaker: "Member", text: "So freezing is cheaper, but I'm still a member when it ends?" },
        { speaker: "Manager", text: "Right. And here's the wrinkle: the freeze needs a doctor's note dated within the last thirty days. Yours says six months of rest — perfect — but I need it on letterhead, not a text from the clinic." },
        { speaker: "Member", text: "I can get that. But what if the knee doesn't recover and I still can't train in six months?" },
        { speaker: "Manager", text: "Then you'd convert the freeze to a cancellation, and at that point the termination fee is waived, because a documented medical cancellation after a freeze is treated differently from a walk-in cancellation today." },
        { speaker: "Member", text: "Wait — so if I cancel now I pay the fee, but if I freeze first and cancel later for the same reason, I don't?" },
        { speaker: "Manager", text: "Ironic, isn't it. The system rewards patience. Freezing first shows the injury was genuine and not just buyer's remorse, so the fee falls away." },
        { speaker: "Member", text: "Then freeze it. What starts the clock?" },
        { speaker: "Manager", text: "The date I log the note, not today's conversation. So send the letterhead version before the weekend or you lose three days of the freeze for nothing." },
      ],
      transcript:
        "A member with a knee injury wants to cancel. The manager distinguishes a freeze (suspends billing up to six months, free) from a cancellation (ends the contract but triggers an early-termination fee). A freeze needs a doctor's note on letterhead dated within 30 days. If the knee doesn't recover, converting the freeze to a cancellation waives the fee — because a documented medical cancellation after a freeze differs from a walk-in cancellation today. Freezing first proves the injury is genuine. The freeze clock starts when the note is logged, so the member should send the letterhead note before the weekend.",
      questions: [
        {
          prompt: "What is the key difference between a 'freeze' and a 'cancellation'?",
          options: [
            "A freeze ends the contract; a cancellation only pauses billing.",
            "A freeze suspends billing temporarily; a cancellation ends the contract and triggers a fee.",
            "Both cost the same but a freeze is faster.",
            "A cancellation is free; a freeze costs extra.",
          ],
          correctIndex: 1,
          explanation:
            "A freeze 'suspends your billing for up to six months at no charge,' while a cancellation 'ends the contract but triggers the early-termination fee.'",
        },
        {
          prompt: "What does the manager mean by 'two different doors'?",
          options: [
            "The gym has two physical entrances.",
            "Freezing and cancelling are distinct options people often confuse.",
            "There are two managers who handle cancellations.",
            "The member must choose between two branches.",
          ],
          correctIndex: 1,
          explanation:
            "He uses the metaphor to say most people ask to cancel when they really want to freeze — two separate choices.",
        },
        {
          prompt: "What must the doctor's note satisfy?",
          options: [
            "Be a text message from the clinic.",
            "Be on letterhead and dated within the last thirty days.",
            "Be signed by two doctors.",
            "Be older than six months.",
          ],
          correctIndex: 1,
          explanation:
            "The freeze needs a note 'on letterhead' dated 'within the last thirty days.'",
        },
        {
          prompt: "What happens if the knee has not recovered after six months?",
          options: [
            "The member must renew the contract.",
            "The freeze converts to a cancellation with the termination fee waived.",
            "The member automatically owes double fees.",
            "The freeze extends indefinitely for free.",
          ],
          correctIndex: 1,
          explanation:
            "He explains the freeze converts to a cancellation and 'the termination fee is waived.'",
        },
        {
          prompt: "Why is cancelling now more expensive than freezing then cancelling later?",
          options: [
            "Prices rise every month.",
            "Freezing first demonstrates the injury is genuine, so the fee falls away.",
            "The gym charges a penalty for indecision.",
            "Later cancellations always cost more.",
          ],
          correctIndex: 1,
          explanation:
            "He says freezing first 'shows the injury was genuine and not just buyer's remorse,' which waives the fee.",
        },
        {
          prompt: "When does the freeze period officially begin?",
          options: [
            "The date of today's phone conversation.",
            "The date the manager logs the doctor's note.",
            "The date the injury occurred.",
            "The first day of the next month.",
          ],
          correctIndex: 1,
          explanation:
            "The clock starts 'the date I log the note, not today's conversation.'",
        },
        {
          prompt: "Why should the member send the note before the weekend?",
          options: [
            "The gym closes permanently on Monday.",
            "Otherwise three days of the freeze are lost for nothing.",
            "The doctor is unavailable after Friday.",
            "The termination fee doubles on weekends.",
          ],
          correctIndex: 1,
          explanation:
            "Because the clock starts when logged, delaying means losing 'three days of the freeze for nothing.'",
        },
        {
          prompt: "How would you characterize the manager's approach?",
          options: [
            "Obstructive, trying to keep the member paying.",
            "Guiding the member toward the cheaper, fee-free path while explaining the rules.",
            "Indifferent to which option the member picks.",
            "Eager to process an immediate cancellation with a fee.",
          ],
          correctIndex: 1,
          explanation:
            "He steers the member toward freezing first, which avoids the fee, and explains the timing to maximize the benefit.",
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
        { speaker: "Nadia", text: "My parents offered to pay for the wedding, but only if we keep it under a hundred guests. Sixty of those slots are basically theirs." },
        { speaker: "Jordan", text: "So we'd get forty seats at our own wedding? That's the part I keep choking on." },
        { speaker: "Nadia", text: "I know how it sounds. But if we pay ourselves, we're looking at a small courthouse thing, and I'd make peace with that faster than you think." },
        { speaker: "Jordan", text: "See, I wouldn't mind the courthouse at all — it's the strings I mind, not the money. Taking their cheque means their guest list, their venue notes, their timeline." },
        { speaker: "Nadia", text: "That's fair, and honestly it's the real question: is the bigger day worth handing them the steering wheel?" },
        { speaker: "Jordan", text: "For me, no. But I don't want to decide this for you, since it's your family footing it." },
        { speaker: "Nadia", text: "Then let's counter: we accept the money but ask for the forty seats to be genuinely ours, no vetoes. If they balk, we know it was never really a gift." },
      ],
      transcript:
        "Nadia's parents will pay for the wedding only if it stays under 100 guests, 60 of whom are effectively the parents' invitees, leaving the couple 40 seats. Jordan is bothered less by the money than by the strings — the parents' guest list, venue notes, and timeline. Nadia would accept a courthouse wedding but sees the trade-off clearly: is a bigger day worth surrendering control. Jordan says no for himself but won't decide for Nadia since it's her family paying. They agree to counter-offer: accept the money but insist their 40 seats be truly theirs with no vetoes, testing whether it was ever really a gift.",
      questions: [
        {
          prompt: "What is the parents' condition for paying?",
          options: [
            "The wedding must be at a courthouse.",
            "The guest list must stay under a hundred, mostly their invitees.",
            "The couple must marry within a year.",
            "The couple must repay half the cost later.",
          ],
          correctIndex: 1,
          explanation:
            "They'll pay 'only if we keep it under a hundred guests,' with 60 slots 'basically theirs.'",
        },
        {
          prompt: "What bothers Jordan most about accepting the money?",
          options: [
            "The size of the guest list.",
            "The strings attached — control over list, venue, and timeline.",
            "The cost of the courthouse option.",
            "Having to invite his own relatives.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'it's the strings I mind, not the money' — their list, venue notes, and timeline.",
        },
        {
          prompt: "What does Nadia identify as 'the real question'?",
          options: [
            "Whether a bigger day is worth giving her parents control.",
            "Whether they can afford a courthouse wedding.",
            "Whether Jordan's family will attend.",
            "Whether to marry at all.",
          ],
          correctIndex: 0,
          explanation:
            "She frames it as whether the bigger day is 'worth handing them the steering wheel.'",
        },
        {
          prompt: "Why does Jordan decline to make the final decision?",
          options: [
            "He has no opinion on the matter.",
            "It is Nadia's family footing the bill, so it's her call.",
            "He prefers the parents decide.",
            "He wants to avoid the wedding entirely.",
          ],
          correctIndex: 1,
          explanation:
            "He says no for himself but 'don't want to decide this for you, since it's your family footing it.'",
        },
        {
          prompt: "What is the purpose of their counter-offer?",
          options: [
            "To get more than forty seats.",
            "To test whether the money is truly a gift by insisting on no vetoes.",
            "To reduce the total cost.",
            "To delay the wedding by a year.",
          ],
          correctIndex: 1,
          explanation:
            "They'll ask for their 40 seats with 'no vetoes'; if the parents balk, 'we know it was never really a gift.'",
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
        { speaker: "Patron", text: "I heard the central library is closing for renovation. Where do I return the books I've got out, and do the due dates change?" },
        { speaker: "Librarian", text: "Two separate answers. Returns: any branch, or the outdoor chute here, which stays open through the closure. Due dates: everything currently on loan is auto-extended to the reopening week, so nothing goes overdue while we're shut." },
        { speaker: "Patron", text: "So I could just keep them the whole time?" },
        { speaker: "Librarian", text: "Technically, but I'd advise against holding high-demand titles, because the auto-extension doesn't apply to items with holds behind them. Those you must return within the normal period, closure or not." },
        { speaker: "Patron", text: "How would I know if something has a hold?" },
        { speaker: "Librarian", text: "Your account flags it, and we email a recall notice. Ignore the recall and the auto-extension is cancelled for that title only, and late fines resume at the usual rate." },
        { speaker: "Patron", text: "What about picking up new holds during the closure?" },
        { speaker: "Librarian", text: "Redirected to the Eastside branch, but only for the first three weeks. After that, holds pause entirely until we reopen, so if you place something in week four, don't expect it soon." },
        { speaker: "Patron", text: "And computer access? I use the ones here for job applications." },
        { speaker: "Librarian", text: "Eastside has a dozen, but they book up fast. The quieter option most people miss is the community centre annex — same login, half the wait." },
      ],
      transcript:
        "During the central library's renovation, books can be returned to any branch or the outdoor chute, which stays open. Loans are auto-extended to the reopening week, so nothing goes overdue — except items with holds behind them, which must be returned normally. Accounts flag holds and a recall notice is emailed; ignoring a recall cancels that title's extension and resumes fines. New hold pickups are redirected to the Eastside branch for the first three weeks only, after which holds pause until reopening. For computer access, Eastside has a dozen machines but fills fast; the community centre annex is a quieter alternative with the same login.",
      questions: [
        {
          prompt: "Where can the patron return books during the closure?",
          options: [
            "Only at the Eastside branch.",
            "Any branch or the outdoor chute, which stays open.",
            "Only by mail.",
            "Nowhere until the library reopens.",
          ],
          correctIndex: 1,
          explanation:
            "Returns can go to 'any branch, or the outdoor chute here, which stays open through the closure.'",
        },
        {
          prompt: "What happens to due dates during the closure?",
          options: [
            "All loans are auto-extended to the reopening week.",
            "All loans become overdue immediately.",
            "Due dates are shortened.",
            "Due dates are unchanged.",
          ],
          correctIndex: 0,
          explanation:
            "Everything on loan is 'auto-extended to the reopening week, so nothing goes overdue.'",
        },
        {
          prompt: "Which items are exempt from the auto-extension?",
          options: [
            "Reference books.",
            "Items that have holds behind them.",
            "Children's books.",
            "Newly published titles.",
          ],
          correctIndex: 1,
          explanation:
            "The extension 'doesn't apply to items with holds behind them,' which must be returned normally.",
        },
        {
          prompt: "What is the consequence of ignoring a recall notice?",
          options: [
            "The account is closed permanently.",
            "The auto-extension is cancelled for that title and fines resume.",
            "All the patron's loans become overdue.",
            "Nothing changes.",
          ],
          correctIndex: 1,
          explanation:
            "Ignoring a recall cancels the extension 'for that title only, and late fines resume at the usual rate.'",
        },
        {
          prompt: "How are new hold pickups handled during the closure?",
          options: [
            "Always available at the central chute.",
            "Redirected to Eastside for the first three weeks, then paused until reopening.",
            "Cancelled entirely.",
            "Mailed to the patron's home.",
          ],
          correctIndex: 1,
          explanation:
            "Holds go to Eastside 'only for the first three weeks,' after which they 'pause entirely until we reopen.'",
        },
        {
          prompt: "What computer-access tip does the librarian offer?",
          options: [
            "Use Eastside early in the morning only.",
            "The community centre annex uses the same login with a shorter wait.",
            "Bring a personal laptop instead.",
            "Book a machine a month in advance.",
          ],
          correctIndex: 1,
          explanation:
            "The 'quieter option most people miss is the community centre annex — same login, half the wait.'",
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
        { speaker: "Anchor", text: "Marine scientists report that the reef off the northern coast has suffered its third bleaching event in seven years, but the story is more complicated than the headline suggests." },
        { speaker: "Reporter", text: "Bleaching isn't death. Corals expel the algae that feed them under heat stress, turning white; if the water cools in time, many recover. The alarm is about frequency, not this single event — reefs need roughly a decade between bleachings to fully rebuild, and they're now getting a fraction of that." },
        { speaker: "Reporter", text: "Interestingly, one patch fared far better: a section near a cold-water upwelling that researchers had almost written off as too sparse to matter. It's now the healthiest part of the reef." },
        { speaker: "Anchor", text: "So the neglected area became the refuge?" },
        { speaker: "Reporter", text: "Exactly, and that's reshaping conservation thinking. Instead of pouring resources into the showpiece sections tourists love, some scientists argue for protecting these cooler, unglamorous pockets that may seed recovery elsewhere." },
        { speaker: "Reporter", text: "The government has funded monitoring but stopped short of the fishing limits researchers wanted, calling them premature — a caution the scientists say the reef can't afford." },
      ],
      transcript:
        "The northern reef has bleached for the third time in seven years. Bleaching isn't death — corals expel their algae under heat stress and can recover if water cools — so the real alarm is frequency: reefs need about a decade to rebuild but are getting far less. Notably, a sparse section near a cold-water upwelling, once nearly written off, is now the healthiest part, reshaping conservation thinking toward protecting these cooler, unglamorous pockets rather than the tourist showpieces. The government funded monitoring but declined the fishing limits researchers sought, calling them premature — a caution scientists say the reef can't afford.",
      questions: [
        {
          prompt: "According to the report, what does bleaching actually involve?",
          options: [
            "The immediate death of the coral.",
            "Corals expelling their algae under heat stress, sometimes recovering if water cools.",
            "Corals being covered by sediment.",
            "A permanent color change with no recovery possible.",
          ],
          correctIndex: 1,
          explanation:
            "Corals 'expel the algae that feed them under heat stress,' and 'if the water cools in time, many recover.'",
        },
        {
          prompt: "Why is frequency the main concern rather than this single event?",
          options: [
            "Single events always kill the reef.",
            "Reefs need about a decade to rebuild but are bleaching far more often.",
            "The water never cools anymore.",
            "Bleaching spreads to other oceans.",
          ],
          correctIndex: 1,
          explanation:
            "Reefs 'need roughly a decade between bleachings to fully rebuild,' but now get 'a fraction of that.'",
        },
        {
          prompt: "What was surprising about the section near the cold-water upwelling?",
          options: [
            "It was the first to die.",
            "It had been nearly written off but is now the healthiest part.",
            "It was the most popular with tourists.",
            "It bleached faster than the rest.",
          ],
          correctIndex: 1,
          explanation:
            "Researchers 'had almost written off' the sparse patch, yet 'it's now the healthiest part of the reef.'",
        },
        {
          prompt: "How is this finding reshaping conservation thinking?",
          options: [
            "Toward focusing only on tourist showpiece sections.",
            "Toward protecting cooler, unglamorous pockets that may seed recovery.",
            "Toward abandoning the reef entirely.",
            "Toward relocating corals to aquariums.",
          ],
          correctIndex: 1,
          explanation:
            "Some scientists argue for protecting 'cooler, unglamorous pockets that may seed recovery elsewhere.'",
        },
        {
          prompt: "How did the government respond to researchers' requests?",
          options: [
            "It imposed strict fishing limits immediately.",
            "It funded monitoring but declined fishing limits as premature.",
            "It rejected all funding requests.",
            "It closed the reef to all visitors.",
          ],
          correctIndex: 1,
          explanation:
            "The government 'funded monitoring but stopped short of the fishing limits,' calling them premature.",
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
        { speaker: "Editor", text: "Dr. Feld, you flagged a problem with the paper we sent you to review. Walk me through it before I decide." },
        { speaker: "Feld", text: "The results are probably sound. My concern isn't the data — it's that I recognized the work. I sat on a grant panel that funded this exact project, and I know one author personally." },
        { speaker: "Editor", text: "You're disclosing a conflict rather than an error, then." },
        { speaker: "Feld", text: "Correct. I could review it fairly, I believe, but 'I believe I can be fair' is precisely what every conflicted reviewer says. The point of the rule is to remove my judgment about my own judgment." },
        { speaker: "Editor", text: "Some editors would say a small field makes these overlaps unavoidable, and if we excluded everyone who knew everyone, nothing would get reviewed." },
        { speaker: "Feld", text: "That's the real tension, and it's not trivial. But there's a difference between incidental familiarity and having helped decide the project's funding. The second isn't just knowing the work; it's being invested in its success." },
        { speaker: "Editor", text: "So you'd draw the line at financial or decision-making involvement, not mere acquaintance." },
        { speaker: "Feld", text: "Yes. Acquaintance you can often manage with disclosure. Prior funding decisions you can't, because a negative review now would implicitly criticize my own earlier judgment — I have a stake in the paper looking good." },
        { speaker: "Editor", text: "That's a sharper distinction than our policy currently makes. Our guidelines just say 'avoid conflicts of interest,' which tells a reviewer nothing about the gradations." },
        { speaker: "Feld", text: "Which is why I'd recommend you recuse me and, separately, tighten the guideline. Vague rules push the hardest calls onto the very people least able to judge them impartially." },
        { speaker: "Editor", text: "Agreed on both. I'll find another reviewer and take your note to the board." },
      ],
      transcript:
        "Dr. Feld tells an editor his concern about a paper isn't the data but a conflict of interest: he sat on a grant panel that funded the exact project and knows an author. He argues 'I believe I can be fair' is exactly what conflicted reviewers say, so the rule exists to remove self-judgment. The editor notes small fields make overlaps unavoidable. Feld distinguishes incidental acquaintance (manageable by disclosure) from prior funding/decision involvement (unmanageable), because a negative review would criticize his own earlier judgment, giving him a stake in the paper looking good. He recommends recusal and tightening the vague guideline, which pushes hard calls onto those least able to judge impartially. The editor agrees to both.",
      questions: [
        {
          prompt: "What is the nature of Dr. Feld's concern?",
          options: [
            "An error in the paper's data.",
            "A conflict of interest, not a flaw in the results.",
            "The paper was plagiarized.",
            "The paper is outside his field.",
          ],
          correctIndex: 1,
          explanation:
            "He says the results are 'probably sound' and his concern 'isn't the data — it's that I recognized the work' and helped fund it.",
        },
        {
          prompt: "Why does Feld distrust his own belief that he could be fair?",
          options: [
            "He has been wrong about data before.",
            "'I believe I can be fair' is exactly what every conflicted reviewer says.",
            "He dislikes the authors.",
            "He has not read the paper carefully.",
          ],
          correctIndex: 1,
          explanation:
            "He notes the rule exists 'to remove my judgment about my own judgment,' since every conflicted reviewer claims fairness.",
        },
        {
          prompt: "What counterargument does the editor raise?",
          options: [
            "That Feld is not qualified to review.",
            "That in a small field, overlaps are unavoidable.",
            "That conflicts of interest do not matter.",
            "That the paper should be rejected outright.",
          ],
          correctIndex: 1,
          explanation:
            "The editor notes a small field makes overlaps unavoidable — excluding everyone who knows everyone would halt review.",
        },
        {
          prompt: "What distinction does Feld draw?",
          options: [
            "Between good and bad data.",
            "Between incidental acquaintance and prior funding/decision involvement.",
            "Between senior and junior authors.",
            "Between published and unpublished work.",
          ],
          correctIndex: 1,
          explanation:
            "He separates 'incidental familiarity' from 'having helped decide the project's funding,' the latter meaning he's invested in its success.",
        },
        {
          prompt: "Why can't prior funding involvement be managed by disclosure alone?",
          options: [
            "Disclosure is against the rules.",
            "A negative review would implicitly criticize his own earlier funding judgment.",
            "The authors would find out his identity.",
            "Disclosure takes too long.",
          ],
          correctIndex: 1,
          explanation:
            "A negative review 'would implicitly criticize my own earlier judgment — I have a stake in the paper looking good.'",
        },
        {
          prompt: "What does Feld say is wrong with the journal's current guideline?",
          options: [
            "It is too strict.",
            "It is too vague, offering no gradations of conflict.",
            "It bans all outside reviewers.",
            "It is impossible to follow.",
          ],
          correctIndex: 1,
          explanation:
            "The guideline just says 'avoid conflicts of interest,' which 'tells a reviewer nothing about the gradations.'",
        },
        {
          prompt: "What two actions does Feld recommend?",
          options: [
            "Reject the paper and ban the authors.",
            "Recuse him and tighten the guideline.",
            "Publish the paper and revise the data.",
            "Keep him as reviewer but add a co-reviewer.",
          ],
          correctIndex: 1,
          explanation:
            "He recommends the editor 'recuse me and, separately, tighten the guideline.'",
        },
        {
          prompt: "What is the broader principle behind Feld's closing point?",
          options: [
            "Vague rules force the hardest ethical calls onto those least able to judge impartially.",
            "Reviewers should always trust their own fairness.",
            "Small fields should have no conflict rules.",
            "Editors should never recuse reviewers.",
          ],
          correctIndex: 0,
          explanation:
            "He warns 'vague rules push the hardest calls onto the very people least able to judge them impartially.'",
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
        { speaker: "Speaker", text: "Cities keep offering tax breaks to lure remote workers — move here, work from home for your out-of-town employer, pay little local tax for two years. I want to explain why I've moved from supporting these schemes to doubting them." },
        { speaker: "Speaker", text: "The pitch is seductive. New residents spend at local shops, fill empty apartments, and cost the city little since their salaries come from elsewhere. When I first saw the model, I thought it was close to free money." },
        { speaker: "Speaker", text: "What changed my mind was watching who actually comes. The breaks attract high earners who were mobile anyway, many of whom would have moved without the incentive. So the city forgoes tax revenue to subsidize a choice people had already made." },
        { speaker: "Speaker", text: "Defenders point to the local spending, and that's real. But a remote worker earning a big-city salary also bids up local rents, and the people priced out are often the lower-paid residents who were already here. The spending is visible; the displacement is quiet." },
        { speaker: "Speaker", text: "Now, I'm not saying every such program fails. A town genuinely emptying out, with cheap housing to spare, might use this to arrest a real decline. There the calculus is different — you're filling a vacuum, not inflating a shortage." },
        { speaker: "Speaker", text: "So my position now is narrow, not blanket: these breaks can work where there's slack, and backfire where there's scarcity. The mistake is copying a policy that suited a shrinking town and pasting it onto a crowded one." },
      ],
      transcript:
        "The speaker explains why he shifted from supporting to doubting remote-worker tax breaks. The pitch — new residents spend locally, fill apartments, and cost little since salaries come from elsewhere — first struck him as near-free money. He changed his mind seeing that the breaks attract high earners who were mobile anyway and would often have moved regardless, so the city forgoes revenue to subsidize an already-made choice. Local spending is real, but these workers bid up rents and quietly displace lower-paid existing residents. He concedes the breaks can help a genuinely emptying town with spare cheap housing — filling a vacuum, not inflating a shortage. His position is narrow: such breaks work where there's slack and backfire where there's scarcity.",
      questions: [
        {
          prompt: "How has the speaker's view of remote-worker tax breaks changed?",
          options: [
            "From doubt to full support.",
            "From support to doubt.",
            "It has never changed.",
            "From indifference to strong support.",
          ],
          correctIndex: 1,
          explanation:
            "He describes moving 'from supporting these schemes to doubting them.'",
        },
        {
          prompt: "What first attracted him to the schemes?",
          options: [
            "They seemed like nearly 'free money' — local spending at little cost.",
            "They reduced traffic congestion.",
            "They funded new public transit.",
            "They lowered taxes for existing residents.",
          ],
          correctIndex: 0,
          explanation:
            "He thought the model was 'close to free money,' as salaries came from elsewhere while residents spent locally.",
        },
        {
          prompt: "What changed his mind?",
          options: [
            "The programs attracted no one.",
            "The breaks mostly attract high earners who would have moved anyway.",
            "Local shops went out of business.",
            "The tax revenue increased unexpectedly.",
          ],
          correctIndex: 1,
          explanation:
            "He saw the breaks attract 'high earners who were mobile anyway,' so the city subsidizes 'a choice people had already made.'",
        },
        {
          prompt: "What 'quiet' harm does he identify?",
          options: [
            "Increased noise pollution.",
            "Displacement of lower-paid existing residents as rents rise.",
            "A decline in local spending.",
            "Overcrowded schools.",
          ],
          correctIndex: 1,
          explanation:
            "Remote workers 'bid up local rents,' displacing lower-paid residents — 'the spending is visible; the displacement is quiet.'",
        },
        {
          prompt: "Under what conditions does he concede the breaks can work?",
          options: [
            "In any large, crowded city.",
            "In a genuinely emptying town with spare cheap housing.",
            "Only in the national capital.",
            "Wherever rents are highest.",
          ],
          correctIndex: 1,
          explanation:
            "A 'town genuinely emptying out, with cheap housing to spare' can use them to 'arrest a real decline.'",
        },
        {
          prompt: "What does he identify as 'the mistake'?",
          options: [
            "Offering any tax incentives at all.",
            "Copying a policy suited to a shrinking town onto a crowded one.",
            "Setting the tax break period too short.",
            "Targeting low earners instead of high earners.",
          ],
          correctIndex: 1,
          explanation:
            "The mistake is 'copying a policy that suited a shrinking town and pasting it onto a crowded one.'",
        },
      ],
    },
  ],
}
