import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest9: ListeningPracticeTest = {
  id: "hard-9",
  title: "Elite Listening Test 9",
  topic: "Airline compensation, wedding budget, library closure, wildfire smoke policy, AI grading debate, heritage demolition",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test. Dense qualifications, partial concessions, and positions that shift mid-sentence — designed so even an examiner rarely clears CLB 6 on a single listen.",
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
        "A passenger phones an airline about compensation for a long delay, and the agent explains why the amount is less than the passenger expects.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Agent", text: "I can see your flight landed just over five hours late, Ms. Reyes, so you're right that compensation is on the table. But the figure won't be the headline amount you may have read about, and I'd rather explain why now than have it feel like a bait-and-switch later." },
        { speaker: "Reyes", text: "The website said up to seven hundred for a delay this long." },
        { speaker: "Agent", text: "'Up to' is doing a lot of work in that sentence. The top figure applies to the longest-haul routes. Yours is medium-haul, which caps at four hundred. That part isn't discretionary — it's set by the regulation, not by us." },
        { speaker: "Reyes", text: "Fine, four hundred then." },
        { speaker: "Agent", text: "That would be the figure if the delay were entirely within our control. The first three hours were — a crew scheduling problem, which is on us. The remaining time was a runway closure after a security incident, which counts as an extraordinary circumstance." },
        { speaker: "Reyes", text: "So you're splitting the delay in half to pay me half?" },
        { speaker: "Agent", text: "Not exactly half, and not quite how the rule works. Compensation is triggered by the total delay crossing the threshold — which yours did — but the airline can reduce or deny it if an extraordinary circumstance was the decisive cause of crossing that line. Here, you'd have crossed the three-hour mark on our fault alone, so the trigger stands. The runway closure doesn't erase the claim; it just means I can't add anything on top." },
        { speaker: "Reyes", text: "So I get the four hundred after all?" },
        { speaker: "Agent", text: "You get the four hundred, yes — because our portion alone already breached the threshold. If the crew issue had only cost you two hours and the closure pushed you over, we'd be having a very different, and worse, conversation." },
        { speaker: "Reyes", text: "And the meal vouchers from the airport?" },
        { speaker: "Agent", text: "Those are separate and don't reduce the compensation. Care during the delay and compensation for the delay are two different obligations — people conflate them constantly." },
      ],
      transcript:
        "An agent explains that although the passenger's five-hour delay qualifies for compensation, the maximum is 400 for her medium-haul route, not the 700 headline reserved for long-haul. The delay had two causes — a crew problem (the airline's fault) and a runway closure (an extraordinary circumstance) — but because the airline's portion alone crossed the three-hour threshold, the full 400 stands; the closure only prevents adding more. Meal vouchers are a separate 'care' obligation and do not reduce the compensation.",
      questions: [
        {
          prompt: "Why does the agent raise the compensation amount before the passenger asks?",
          options: [
            "To avoid the final figure feeling like a bait-and-switch.",
            "To persuade the passenger to drop the claim.",
            "Because the passenger is not actually eligible.",
            "Because the amount is higher than the passenger expects.",
          ],
          correctIndex: 0,
          explanation:
            "He says he'd 'rather explain why now than have it feel like a bait-and-switch later' — pre-empting disappointment, not denying eligibility.",
        },
        {
          prompt: "Why is the maximum 400 rather than 700 for this passenger?",
          options: [
            "Because the airline chose to reduce it.",
            "Because the 700 figure applies only to the longest-haul routes, and hers is medium-haul.",
            "Because she booked a discounted fare.",
            "Because part of the delay was her fault.",
          ],
          correctIndex: 1,
          explanation:
            "He explains 'up to' seven hundred applies to long-haul; her medium-haul route caps at 400, and that cap is set by regulation, not discretion.",
        },
        {
          prompt: "What were the two causes of the delay?",
          options: [
            "A crew scheduling problem and a runway closure after a security incident.",
            "Weather and a mechanical fault.",
            "A crew problem and a passenger boarding issue.",
            "A runway closure and a catering delay.",
          ],
          correctIndex: 0,
          explanation:
            "The first three hours were a crew scheduling problem (the airline's fault); the rest was a runway closure after a security incident (an extraordinary circumstance).",
        },
        {
          prompt: "Why does the runway closure NOT reduce the passenger's compensation?",
          options: [
            "Because runway closures are always the airline's responsibility.",
            "Because the airline's own fault alone already crossed the three-hour threshold.",
            "Because the passenger complained quickly enough.",
            "Because extraordinary circumstances never affect compensation.",
          ],
          correctIndex: 1,
          explanation:
            "He says she'd have crossed the three-hour mark 'on our fault alone,' so the trigger stands; the closure only means nothing extra can be added.",
        },
        {
          prompt: "What does the agent mean by 'a very different, and worse, conversation'?",
          options: [
            "If the crew issue had caused only two hours and the closure pushed her over, the claim could be reduced or denied.",
            "If the passenger had booked long-haul, she would get less.",
            "If she had missed her flight entirely, there would be no claim.",
            "If she refused the vouchers, the compensation would drop.",
          ],
          correctIndex: 0,
          explanation:
            "He explains that if the airline's fault were only two hours and the extraordinary circumstance were the decisive cause of crossing the line, compensation could be reduced or denied.",
        },
        {
          prompt: "How much compensation does the passenger ultimately receive?",
          options: [
            "700, the headline figure.",
            "400, the full medium-haul cap.",
            "200, half the cap.",
            "Nothing, because of the extraordinary circumstance.",
          ],
          correctIndex: 1,
          explanation:
            "The agent confirms 'you get the four hundred' because the airline's portion alone breached the threshold.",
        },
        {
          prompt: "How do the meal vouchers relate to the compensation?",
          options: [
            "They are deducted from the compensation.",
            "They are a separate 'care' obligation and do not reduce the compensation.",
            "They replace the compensation entirely.",
            "They are only given if compensation is denied.",
          ],
          correctIndex: 1,
          explanation:
            "He says care during the delay and compensation for the delay are 'two different obligations' that people conflate; the vouchers don't reduce the payment.",
        },
        {
          prompt: "What distinction does the agent stress about how compensation is triggered?",
          options: [
            "That it depends on the ticket price.",
            "That it is triggered by the total delay crossing a threshold, but can be reduced if an extraordinary circumstance was the decisive cause of crossing it.",
            "That it is entirely at the airline's discretion.",
            "That it applies only to long-haul flights.",
          ],
          correctIndex: 1,
          explanation:
            "He explains compensation is 'triggered by the total delay crossing the threshold,' but the airline can reduce it only if an extraordinary circumstance was the decisive cause of crossing that line.",
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
        "An engaged couple disagree about how to cut their wedding budget without disappointing family.",
      blueprint: LISTENING_BLUEPRINT.dailyConversation,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Sam", text: "I've run the numbers three ways and we're about six thousand over no matter how I slice it. The two big levers are the guest count and the venue. Everything else is rounding error." },
        { speaker: "Jordan", text: "Cutting the guest list is the one thing I can't do without a fight with my mother. She's already told half of Portugal they're invited." },
        { speaker: "Sam", text: "I know, and I'm not asking you to. That's exactly why I think we move on the venue instead. The barn is beautiful but it's the reason we're over — the per-head catering minimum is brutal." },
        { speaker: "Jordan", text: "But if we downgrade the venue to afford the guests, we end up with everyone we love in a room nobody remembers. I'd almost rather fewer people somewhere that feels like us." },
        { speaker: "Sam", text: "See, that surprises me. I thought the guest list was the non-negotiable." },
        { speaker: "Jordan", text: "It is with my mother. It isn't with me. Those aren't the same thing, and I keep letting the first one speak for the second." },
        { speaker: "Sam", text: "Then let's separate them. What if we keep the barn, trim the list quietly by cutting the evening-only guests your mother won't track, and tell her nothing changed?" },
        { speaker: "Jordan", text: "That's… sneaky enough to actually work. She counts the ceremony chairs, not the late-night ones." },
        { speaker: "Sam", text: "Then that's the plan — venue stays, list shrinks where no one's looking, and your mother's guest list stays technically intact." },
      ],
      transcript:
        "Sam identifies that the couple is 6,000 over budget and the only meaningful levers are the guest count and the venue. Jordan resists cutting the guest list because of pressure from their mother, but admits that personally they'd prefer fewer people at a venue that feels right — distinguishing their mother's non-negotiable from their own. They settle on keeping the barn venue while quietly trimming evening-only guests the mother won't notice, since she counts ceremony chairs, not late-night ones.",
      questions: [
        {
          prompt: "According to Sam, what are the only two significant ways to cut the budget?",
          options: [
            "The guest count and the venue.",
            "The catering and the flowers.",
            "The venue and the photographer.",
            "The guest count and the music.",
          ],
          correctIndex: 0,
          explanation:
            "Sam says the 'two big levers are the guest count and the venue' and everything else is 'rounding error.'",
        },
        {
          prompt: "Why is Jordan initially reluctant to cut the guest list?",
          options: [
            "Because Jordan personally wants a large wedding.",
            "Because their mother has already invited many people and would fight about it.",
            "Because the venue requires a minimum number of guests.",
            "Because cutting guests would not save money.",
          ],
          correctIndex: 1,
          explanation:
            "Jordan says cutting the list means 'a fight with my mother,' who 'has already told half of Portugal they're invited.'",
        },
        {
          prompt: "What does Jordan reveal about their own preference, as opposed to their mother's?",
          options: [
            "That Jordan also considers the guest list non-negotiable.",
            "That Jordan would personally prefer fewer people at a venue that feels right.",
            "That Jordan wants to cancel the wedding.",
            "That Jordan prefers a bigger venue over fewer guests.",
          ],
          correctIndex: 1,
          explanation:
            "Jordan says the guest list is non-negotiable 'with my mother. It isn't with me,' preferring 'fewer people somewhere that feels like us.'",
        },
        {
          prompt: "What does Jordan mean by 'I keep letting the first one speak for the second'?",
          options: [
            "That Sam's opinion overrides Jordan's.",
            "That Jordan has been treating their mother's position as if it were their own.",
            "That the venue matters more than the guests.",
            "That Jordan changes their mind too often.",
          ],
          correctIndex: 1,
          explanation:
            "Jordan distinguishes the mother's non-negotiable from their own and admits letting the mother's view 'speak for' their own personal preference.",
        },
        {
          prompt: "What is the couple's final plan?",
          options: [
            "Downgrade the venue and keep every guest.",
            "Keep the barn and quietly cut evening-only guests the mother won't notice.",
            "Cut the guest list openly and tell the mother directly.",
            "Postpone the wedding to save money.",
          ],
          correctIndex: 1,
          explanation:
            "They agree the venue stays and the list shrinks 'where no one's looking' — cutting late-night guests the mother, who 'counts the ceremony chairs,' won't track.",
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
        "A city councillor briefs a community organizer on why a branch library is closing, and the organizer challenges the reasoning.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 100 seconds long.",
      script: [
        { speaker: "Councillor", text: "I want to be straight with you: the Eastgate branch is closing, but not for the reason the flyers say. It isn't simply that visits are down. Visits are down at every branch. Eastgate is closing because its building needs two million in structural repairs we can't justify against its usage." },
        { speaker: "Organizer", text: "So it is about usage." },
        { speaker: "Councillor", text: "It's about usage per dollar, which isn't the same thing. If Eastgate were in a sound building, low visits alone wouldn't close it — we keep other quiet branches open. It's the combination: low usage and a repair bill that would fund a year of programming across three branches." },
        { speaker: "Organizer", text: "Then move the branch. Rent a storefront two blocks over. You keep the service and drop the repair bill." },
        { speaker: "Councillor", text: "We modelled that. A storefront solves the building but not the economics — you'd still be running a low-traffic branch, just in cheaper premises. It narrows the gap; it doesn't close it. I'll admit it's the option I'd have preferred if the numbers were closer." },
        { speaker: "Organizer", text: "What happens to Eastgate's regulars?" },
        { speaker: "Councillor", text: "The nearest branch is a fifteen-minute bus ride, which I know is not nothing for the seniors who walk to Eastgate now. We're adding a twice-weekly bookmobile stop, but I won't oversell it — a bookmobile is not a branch, and anyone who tells you it's equivalent is selling you something." },
        { speaker: "Organizer", text: "At least you're honest about that. Most wouldn't be." },
        { speaker: "Councillor", text: "Honest doesn't mean I've made the popular choice. It means when you fight me on it — and you will — you'll be fighting the real reasons, not a press release." },
      ],
      transcript:
        "A councillor explains that the Eastgate library is closing not simply because visits are down (they're down everywhere) but because of a two-million-dollar repair bill that can't be justified against its low usage — 'usage per dollar.' A storefront relocation was modelled but only narrows the economic gap without closing it, though the councillor admits it would have been preferable if the numbers were closer. The nearest branch is a fifteen-minute bus ride, hard for local seniors, and a twice-weekly bookmobile is offered but frankly described as not equivalent to a branch.",
      questions: [
        {
          prompt: "According to the councillor, what is the real reason Eastgate is closing?",
          options: [
            "Simply that visitor numbers are down.",
            "That a two-million-dollar repair bill can't be justified against its low usage.",
            "That the staff requested a transfer.",
            "That a new branch is opening nearby.",
          ],
          correctIndex: 1,
          explanation:
            "He says it's not simply low visits — those are down everywhere — but the combination of low usage and a two-million repair bill.",
        },
        {
          prompt: "What distinction does the councillor draw between 'usage' and 'usage per dollar'?",
          options: [
            "They mean the same thing.",
            "Low usage alone wouldn't close a sound building, but low usage combined with a huge repair cost does.",
            "Usage per dollar refers only to staff salaries.",
            "Usage measures visits while usage per dollar measures book sales.",
          ],
          correctIndex: 1,
          explanation:
            "He notes other quiet branches stay open; it's the 'combination' of low usage and the repair bill that decides Eastgate, hence 'usage per dollar,' not usage alone.",
        },
        {
          prompt: "Why does the councillor say a storefront relocation is not a full solution?",
          options: [
            "Because it would cost more than the repairs.",
            "Because it solves the building problem but not the economics of a low-traffic branch.",
            "Because no storefronts are available nearby.",
            "Because the regulars would refuse to use it.",
          ],
          correctIndex: 1,
          explanation:
            "He says a storefront 'solves the building but not the economics' — you'd still run a low-traffic branch, narrowing but not closing the gap.",
        },
        {
          prompt: "What does the councillor admit about the storefront option?",
          options: [
            "That it was never actually considered.",
            "That it would have been his preferred choice if the numbers were closer.",
            "That it is cheaper than keeping Eastgate open.",
            "That it fully solves the problem.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'it's the option I'd have preferred if the numbers were closer,' conceding its appeal while explaining why it falls short.",
        },
        {
          prompt: "How does the councillor describe the bookmobile replacement?",
          options: [
            "As fully equivalent to keeping the branch.",
            "As helpful but explicitly not equivalent to a branch.",
            "As a permanent daily service.",
            "As unnecessary given the nearby branch.",
          ],
          correctIndex: 1,
          explanation:
            "He offers a twice-weekly bookmobile but says 'a bookmobile is not a branch, and anyone who tells you it's equivalent is selling you something.'",
        },
        {
          prompt: "What does the councillor mean by 'you'll be fighting the real reasons, not a press release'?",
          options: [
            "That he expects no opposition.",
            "That by being honest, he ensures any opposition engages with the true rationale.",
            "That the organizer should not oppose the closure.",
            "That the press has misreported the decision on purpose.",
          ],
          correctIndex: 1,
          explanation:
            "He says honesty doesn't make the choice popular, but it means opposition will engage 'the real reasons, not a press release' — arguing over true rationale.",
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
        "A news item reports on a school board's new policy for cancelling outdoor activities during wildfire smoke.",
      blueprint: LISTENING_BLUEPRINT.newsReport,
      audioInstruction:
        "Listen to the news report. You will hear it only once. It is about 75 seconds long.",
      script: [
        { speaker: "Anchor", text: "The Kettle Valley school board has approved a new air-quality policy for outdoor activities, replacing a system that critics said left too much to individual principals' judgment." },
        { speaker: "Reporter", text: "Under the old rules, each principal decided when smoke was bad enough to move children indoors. The result, parents complained, was that two schools on the same street could make opposite calls on the same afternoon. The new policy ties decisions to a single number: the regional air-quality index." },
        { speaker: "Reporter", text: "But the board resisted pressure to make the thresholds fully automatic. Above an index of seven, outdoor activity is cancelled district-wide, no exceptions. Below four, it proceeds. It's the middle band — four to seven — where principals keep discretion, and that's the part that drew debate. Some trustees wanted the automatic cutoff lowered to remove judgment entirely." },
        { speaker: "Reporter", text: "The board declined, arguing that a rigid low threshold would cancel activities on marginal days and, over a long smoke season, cost children weeks of outdoor time for little health benefit. Critics counter that leaving the middle band to principals reintroduces exactly the inconsistency the policy was meant to fix." },
        { speaker: "Reporter", text: "The policy takes effect next month, and the board has promised to review the thresholds after one full smoke season." },
      ],
      transcript:
        "Kettle Valley's school board approved an air-quality policy replacing principal-by-principal judgment with the regional air-quality index. Above index 7, outdoor activity is cancelled district-wide; below 4 it proceeds; the 4–7 middle band leaves principals discretion — the contested part. The board rejected a fully automatic low cutoff, arguing it would cancel marginal days and cost weeks of outdoor time for little benefit, while critics say the middle-band discretion reintroduces the inconsistency the policy aimed to end; thresholds will be reviewed after one smoke season.",
      questions: [
        {
          prompt: "What problem was the new policy designed to fix?",
          options: [
            "Schools spending too much on air filters.",
            "Inconsistent decisions when each principal judged smoke severity individually.",
            "A lack of any outdoor activities at all.",
            "Parents keeping children home during smoke season.",
          ],
          correctIndex: 1,
          explanation:
            "The old system let each principal decide, so 'two schools on the same street could make opposite calls' — the inconsistency the policy targets.",
        },
        {
          prompt: "What happens when the air-quality index is above seven?",
          options: [
            "Principals decide individually.",
            "Outdoor activity is cancelled district-wide with no exceptions.",
            "Outdoor activity proceeds normally.",
            "Only younger children go indoors.",
          ],
          correctIndex: 1,
          explanation:
            "The report states above an index of seven, 'outdoor activity is cancelled district-wide, no exceptions.'",
        },
        {
          prompt: "Which part of the policy drew the most debate?",
          options: [
            "The cancellation above seven.",
            "The middle band of four to seven, where principals keep discretion.",
            "The proceed rule below four.",
            "The date the policy takes effect.",
          ],
          correctIndex: 1,
          explanation:
            "The reporter says the 'middle band — four to seven — where principals keep discretion' is 'the part that drew debate.'",
        },
        {
          prompt: "Why did the board reject a fully automatic low threshold?",
          options: [
            "Because it would be too expensive to monitor.",
            "Because a rigid low cutoff would cancel marginal days and cost weeks of outdoor time for little health benefit.",
            "Because principals demanded total control.",
            "Because the index is unreliable below four.",
          ],
          correctIndex: 1,
          explanation:
            "The board argued a rigid low threshold 'would cancel activities on marginal days' and cost 'weeks of outdoor time for little health benefit.'",
        },
        {
          prompt: "What is the critics' objection to the final policy?",
          options: [
            "That the thresholds are too high to protect children.",
            "That leaving the middle band to principals reintroduces the very inconsistency the policy meant to fix.",
            "That the policy cancels too many activities.",
            "That the review after one season is too soon.",
          ],
          correctIndex: 1,
          explanation:
            "Critics counter that middle-band discretion 'reintroduces exactly the inconsistency the policy was meant to fix.'",
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
        "Three university instructors debate whether to allow an AI system to grade first-year essays.",
      blueprint: LISTENING_BLUEPRINT.campusDiscussion,
      audioInstruction:
        "Listen to the discussion. You will hear it only once. It is about 110 seconds long.",
      script: [
        { speaker: "Nadia", text: "I'll say the unpopular thing: I want the AI grader for first-year essays. Not because it's better than us, but because it's consistent. My Friday-afternoon grading is measurably harsher than my Monday grading, and that's not fair to students." },
        { speaker: "Owen", text: "Consistent at what, though? It's consistently good at surface features — grammar, structure, topic sentences. It's consistently blind to a student who breaks the rules on purpose and does something original. You'd be training first-years to write for a machine that rewards the formulaic." },
        { speaker: "Nadia", text: "For a first-year essay, honestly, mastering the formula is most of the battle. The originality you're protecting shows up in maybe one paper in forty." },
        { speaker: "Priyanka", text: "That one in forty is exactly who I got into teaching for, but I take Nadia's point about fairness. What bothers me more is what we're not saying: if the AI grades, do students still get a human reading their work at all? Because the grade isn't the only thing feedback does. Being read by a person is part of why they bother." },
        { speaker: "Nadia", text: "What if the AI grades and we spend the time we save writing real comments — the thing we're all too rushed to do properly now?" },
        { speaker: "Owen", text: "That's a better version of your proposal, I'll admit. My worry is that 'the time we save' has a way of quietly disappearing into other work, and a year later the AI grades and no one comments at all." },
        { speaker: "Priyanka", text: "Which is an argument about institutions, not about the tool. If we can't protect the saved time, that's a failure of the department, not evidence the AI is bad." },
        { speaker: "Owen", text: "Fine — but the tool is being sold to us precisely on the promise of saving labour, and departments under budget pressure will pocket the savings, not reinvest them. You can't separate the technology from how it'll actually be used here." },
        { speaker: "Nadia", text: "Then let's pilot it with the saved time formally protected in writing, and pull the plug if the comments don't materialize." },
        { speaker: "Priyanka", text: "That I can support — a pilot with a kill switch, not a permanent installation nobody voted for." },
      ],
      transcript:
        "Nadia advocates using an AI grader for first-year essays for its consistency, since human grading varies by mood. Owen objects that it rewards surface features and is blind to deliberate originality, training students to write formulaically. Priyanka worries whether students still get a human reader at all, since being read matters beyond the grade. They converge on Nadia's revised idea — AI grades while instructors reinvest saved time in real comments — but Owen warns saved time tends to vanish under budget pressure; they settle on a formally protected pilot with a 'kill switch' rather than a permanent installation.",
      questions: [
        {
          prompt: "What is Nadia's main reason for wanting the AI grader?",
          options: [
            "That it is better than human instructors.",
            "That it is consistent, unlike human grading that varies with mood and timing.",
            "That it saves the department money.",
            "That students prefer it.",
          ],
          correctIndex: 1,
          explanation:
            "She wants it 'not because it's better than us, but because it's consistent,' citing her own harsher Friday grading as unfair.",
        },
        {
          prompt: "What is Owen's primary objection to the AI grader?",
          options: [
            "That it is too slow.",
            "That it rewards surface features and is blind to deliberate originality.",
            "That it costs too much.",
            "That students cannot understand its feedback.",
          ],
          correctIndex: 1,
          explanation:
            "He says it is 'consistently good at surface features' but 'consistently blind' to a student who breaks rules originally, training students to write formulaically.",
        },
        {
          prompt: "How does Nadia respond to Owen's concern about originality?",
          options: [
            "She agrees originality is the most important thing.",
            "She argues that for first-year essays, mastering the formula is most of the battle and originality is rare.",
            "She says originality cannot be graded at all.",
            "She withdraws her proposal.",
          ],
          correctIndex: 1,
          explanation:
            "She says 'mastering the formula is most of the battle' and originality 'shows up in maybe one paper in forty.'",
        },
        {
          prompt: "What additional concern does Priyanka raise?",
          options: [
            "Whether students still get a human reading their work at all.",
            "Whether the AI is expensive to license.",
            "Whether the AI can grade in multiple languages.",
            "Whether instructors will lose their jobs.",
          ],
          correctIndex: 0,
          explanation:
            "She worries 'do students still get a human reading their work,' since 'being read by a person is part of why they bother.'",
        },
        {
          prompt: "What is Nadia's revised proposal?",
          options: [
            "Let the AI grade and abandon written feedback.",
            "Let the AI grade while instructors spend the saved time writing real comments.",
            "Keep all grading human but add AI spell-check.",
            "Have the AI grade only the strongest essays.",
          ],
          correctIndex: 1,
          explanation:
            "She proposes the AI grade 'and we spend the time we save writing real comments' that they're too rushed to do now.",
        },
        {
          prompt: "What is Owen's worry about the 'saved time'?",
          options: [
            "That it will be spent on research instead.",
            "That it will quietly disappear into other work, leaving no one commenting at all.",
            "That there will be no time saved.",
            "That students will demand even more comments.",
          ],
          correctIndex: 1,
          explanation:
            "He warns 'the time we save has a way of quietly disappearing' so 'a year later the AI grades and no one comments at all.'",
        },
        {
          prompt: "How do Priyanka and Owen differ on whether the saved-time problem counts against the tool?",
          options: [
            "Priyanka says it's an institutional failure, not evidence the tool is bad; Owen says you can't separate the tool from how it'll be used.",
            "Owen says it's an institutional failure; Priyanka blames the tool.",
            "Both agree the tool itself is flawed.",
            "Both agree it is purely an institutional issue.",
          ],
          correctIndex: 0,
          explanation:
            "Priyanka calls it 'a failure of the department, not evidence the AI is bad'; Owen replies 'you can't separate the technology from how it'll actually be used here.'",
        },
        {
          prompt: "What do the three finally agree on?",
          options: [
            "A permanent adoption of the AI grader.",
            "A pilot with saved time protected in writing and a 'kill switch' if comments don't materialize.",
            "Rejecting the AI grader entirely.",
            "Letting each instructor decide individually.",
          ],
          correctIndex: 1,
          explanation:
            "Nadia proposes a pilot with saved time 'formally protected in writing' and a plug to pull; Priyanka backs 'a pilot with a kill switch, not a permanent installation.'",
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
        "A heritage architect gives a talk on when it is right to demolish an old building rather than preserve it.",
      blueprint: LISTENING_BLUEPRINT.publicTalk,
      audioInstruction:
        "Listen to the talk. You will hear it only once. It is about 100 seconds long.",
      script: [
        { speaker: "Speaker", text: "People expect a heritage architect to defend every old building. I won't, and I want to explain why the reflex to save everything can actually harm the cause of preservation." },
        { speaker: "Speaker", text: "Start with the obvious case for saving: an old building carries embodied history, craftsmanship we can't reproduce cheaply, and a continuity that new construction can't fake. All true. But notice that none of those goods are absolute — they can be outweighed, and pretending they can't is where preservationists lose public trust." },
        { speaker: "Speaker", text: "Here's the uncomfortable part. When we fight to save a mediocre building simply because it's old, we spend the public's goodwill and the city's money on something few people love. Then, when a genuinely irreplaceable building is threatened, the public is exhausted, the budget is gone, and 'the heritage people cry wolf about everything' has become common wisdom. Indiscriminate preservation devalues the currency of preservation." },
        { speaker: "Speaker", text: "That said — and this is where I complicate my own argument — 'mediocre' is a dangerous word. Buildings we dismissed a generation ago are treasured now; taste moves. So I don't trust my own certainty that a given building is worthless. My rule is procedural, not aesthetic: demolish only when the replacement is demonstrably better for the people who'll use the place, not merely cheaper or newer." },
        { speaker: "Speaker", text: "So where do I land? Not 'save everything,' and not 'let the market decide.' Save deliberately. Spend our credibility on the buildings that truly warrant it, and let some go — humbly, knowing we might be wrong — so that when we plant our flag, the city still believes us." },
      ],
      transcript:
        "A heritage architect argues against the reflex to save every old building. He grants the genuine goods of preservation — embodied history, irreproducible craftsmanship, continuity — but insists none are absolute. Fighting to save mediocre buildings spends public goodwill and money, so when a truly irreplaceable building is threatened, the public is exhausted and preservationists have 'cried wolf.' Yet he complicates this by noting taste shifts and 'mediocre' is dangerous, so his rule is procedural: demolish only when the replacement is demonstrably better for users, not merely cheaper. He lands on 'save deliberately,' preserving credibility for the buildings that warrant it.",
      questions: [
        {
          prompt: "What is the speaker's surprising opening position?",
          options: [
            "That every old building should be saved.",
            "That the reflex to save everything can harm the cause of preservation.",
            "That heritage architecture is a waste of money.",
            "That new buildings are always better.",
          ],
          correctIndex: 1,
          explanation:
            "He refuses to defend every old building and explains why 'the reflex to save everything can actually harm the cause of preservation.'",
        },
        {
          prompt: "What does the speaker say about the recognized goods of preservation?",
          options: [
            "That they do not exist.",
            "That they are real but not absolute, and can be outweighed.",
            "That they always outweigh other considerations.",
            "That only craftsmanship matters.",
          ],
          correctIndex: 1,
          explanation:
            "He calls embodied history, craftsmanship, and continuity 'all true,' but stresses 'none of those goods are absolute — they can be outweighed.'",
        },
        {
          prompt: "What does the speaker mean by 'indiscriminate preservation devalues the currency of preservation'?",
          options: [
            "That saving mediocre buildings spends goodwill and money, weakening the case when a truly vital building is threatened.",
            "That preserving buildings lowers property values.",
            "That old buildings are worth less over time.",
            "That preservation should be funded privately.",
          ],
          correctIndex: 0,
          explanation:
            "He argues fighting for mediocre buildings exhausts public goodwill and budget, so 'the heritage people cry wolf' takes hold when an irreplaceable building is at risk.",
        },
        {
          prompt: "How does the speaker complicate his own argument?",
          options: [
            "By admitting he wants to save every building after all.",
            "By noting that taste shifts, so 'mediocre' is a dangerous judgment he doesn't fully trust.",
            "By saying the market should decide.",
            "By claiming aesthetics are the only valid criterion.",
          ],
          correctIndex: 1,
          explanation:
            "He warns buildings 'dismissed a generation ago are treasured now,' so he distrusts 'my own certainty that a given building is worthless.'",
        },
        {
          prompt: "What is the speaker's rule for when demolition is acceptable?",
          options: [
            "When the building is old and mediocre.",
            "When the replacement is demonstrably better for the people who'll use it, not merely cheaper or newer.",
            "When demolition is the cheapest option.",
            "When the public votes for it.",
          ],
          correctIndex: 1,
          explanation:
            "His rule is 'procedural, not aesthetic': demolish only when the replacement is 'demonstrably better for the people who'll use the place, not merely cheaper or newer.'",
        },
        {
          prompt: "Where does the speaker ultimately land?",
          options: [
            "'Save everything.'",
            "'Save deliberately' — spending credibility on buildings that warrant it and letting some go humbly.",
            "'Let the market decide.'",
            "Demolish all mediocre buildings quickly.",
          ],
          correctIndex: 1,
          explanation:
            "He rejects both 'save everything' and 'let the market decide,' landing on 'save deliberately' to preserve credibility for the buildings that truly warrant it.",
        },
      ],
    },
  ],
}
