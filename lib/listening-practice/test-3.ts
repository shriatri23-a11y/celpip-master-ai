import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest3: ListeningPracticeTest = {
  id: "hard-3",
  title: "Elite Listening Test 3",
  topic: "Warranty claim, surprise trip, makerspace rules, wildfire smoke, AI hiring, four-day week",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test. Speakers hedge, qualify, and reverse; distractors echo the audio's exact words while missing its meaning.",
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
        "A customer calls a laptop manufacturer about a screen that flickers, and a support agent works out whether the warranty applies.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Agent", text: "Let me make sure I understand the fault before we talk warranty. You say the screen flickers, but only sometimes — can you tell me when?" },
        { speaker: "Customer", text: "Mostly when I move the lid, or after it's been running a few hours. If I hold the hinge steady, it usually stops." },
        { speaker: "Agent", text: "That's a useful clue, because it points to a cable rather than the panel. A panel fault is generally covered; accidental damage to a hinge or cable from a knock or drop generally isn't. So the cause matters more than the symptom." },
        { speaker: "Customer", text: "I've never dropped it. It just started after a system update, oddly enough." },
        { speaker: "Agent", text: "The update timing is probably a coincidence — a display cable doesn't respond to software — but I'll note it, because if a diagnostic shows it's genuinely firmware, that's a different repair path and it's free regardless of warranty." },
        { speaker: "Customer", text: "So either way I might not pay?" },
        { speaker: "Agent", text: "Possibly, but I don't want to promise that. If it's the cable and there's no sign of impact, warranty covers it. If it's the cable and the technician sees impact damage, you'd pay. If it's firmware, it's free. The one bad outcome is impact damage." },
        { speaker: "Customer", text: "How do I avoid being charged for damage I didn't cause?" },
        { speaker: "Agent", text: "You can't control the diagnosis, but you can request photographs of anything they flag as impact, and if you dispute it, ask for a second assessment before you authorize any paid work. Never approve a charge you don't understand." },
      ],
      transcript:
        "A customer reports a laptop screen that flickers when the lid moves or after hours of use, stopping when the hinge is held steady — a clue pointing to a cable rather than the panel. Panel faults are generally covered; accidental cable/hinge damage from a knock is not, so cause matters more than symptom. The customer denies dropping it and notes it began after an update; the agent calls the timing coincidental (software doesn't affect a display cable) but will log it, since a genuine firmware cause is a free repair regardless of warranty. The only outcome the customer pays for is impact damage; to protect themselves, they can request photos of any flagged impact and a second assessment before authorizing paid work.",
      questions: [
        {
          prompt: "Why does the agent ask when the flicker occurs?",
          options: [
            "To decide whether to escalate the call.",
            "Because the timing helps identify whether the cable or the panel is at fault.",
            "To confirm the customer dropped the laptop.",
            "To check whether the warranty has expired.",
          ],
          correctIndex: 1,
          explanation:
            "The lid-movement clue 'points to a cable rather than the panel,' and cause determines coverage.",
        },
        {
          prompt: "Why does the agent say 'the cause matters more than the symptom'?",
          options: [
            "Because the symptom is difficult to reproduce.",
            "Because coverage depends on what caused the fault, not on the flicker itself.",
            "Because the panel is never covered.",
            "Because the customer described the symptom poorly.",
          ],
          correctIndex: 1,
          explanation:
            "Panel faults are covered and accidental damage isn't, so the underlying cause decides who pays.",
        },
        {
          prompt: "How does the agent treat the customer's point about the system update?",
          options: [
            "As proof the fault is covered.",
            "As likely coincidental, but worth noting in case a diagnostic shows firmware.",
            "As evidence the customer caused the damage.",
            "As the definite cause of the flicker.",
          ],
          correctIndex: 1,
          explanation:
            "Software 'doesn't respond' to a display cable, so it's 'probably a coincidence,' yet logged because firmware faults are free to fix.",
        },
        {
          prompt: "Which outcome would require the customer to pay?",
          options: [
            "A cable fault with no sign of impact.",
            "A firmware fault.",
            "A cable fault with visible impact damage.",
            "A covered panel fault.",
          ],
          correctIndex: 2,
          explanation:
            "The agent lists the 'one bad outcome' as 'impact damage' — a cable fault plus signs of a knock or drop.",
        },
        {
          prompt: "Why won't the agent promise the repair will be free?",
          options: [
            "Because the warranty has clearly expired.",
            "Because the outcome depends on a diagnosis he cannot predict.",
            "Because firmware repairs are always charged.",
            "Because the customer admitted to dropping it.",
          ],
          correctIndex: 1,
          explanation:
            "He outlines three possible diagnoses with different cost outcomes and won't guarantee one he can't foresee.",
        },
        {
          prompt: "What does the agent advise if the technician flags impact damage?",
          options: [
            "Accept the charge to speed up the repair.",
            "Request photos and a second assessment before authorizing paid work.",
            "Refuse any repair entirely.",
            "Return the laptop to the store instead.",
          ],
          correctIndex: 1,
          explanation:
            "He says to request photographs of flagged impact and, if disputed, 'ask for a second assessment before you authorize any paid work.'",
        },
        {
          prompt: "What general principle does the agent leave the customer with?",
          options: [
            "Always approve repairs quickly to avoid delays.",
            "Never approve a charge you don't understand.",
            "Software updates cause most hardware faults.",
            "Warranty covers all accidental damage.",
          ],
          correctIndex: 1,
          explanation:
            "His closing advice is explicit: 'Never approve a charge you don't understand.'",
        },
        {
          prompt: "What is the agent's overall approach in the call?",
          options: [
            "Reassuring the customer that everything will be free.",
            "Carefully managing expectations while explaining how to protect against unfair charges.",
            "Blaming the customer for the fault.",
            "Refusing to discuss the warranty at all.",
          ],
          correctIndex: 1,
          explanation:
            "He avoids false promises, lays out each scenario honestly, and coaches the customer on safeguards — measured and protective.",
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
        { speaker: "Mia", text: "Okay, I've been planning Dad's birthday trip in secret and I need a sanity check before I book anything." },
        { speaker: "Ben", text: "Go on. Though you know Dad says he hates surprises." },
        { speaker: "Mia", text: "He says that. But he hates being the centre of attention, which isn't the same thing. A quiet cabin weekend isn't a party — it's the opposite." },
        { speaker: "Ben", text: "True. So what's the plan?" },
        { speaker: "Mia", text: "Two nights near the lake, just family, no itinerary. The only thing I'd 'organize' is the fishing boat he keeps saying he'll rent and never does." },
        { speaker: "Ben", text: "That's smart — it's a surprise that removes a decision he finds stressful rather than adding one. But two nights away means someone's covering his clinic appointments." },
        { speaker: "Mia", text: "Already handled. I moved them to the following week under the excuse of the receptionist's schedule, so he thinks it was their idea, not mine." },
        { speaker: "Ben", text: "Then honestly my only concern is the drive. If you spring it on him Friday after work, he'll be tired and grumpy for the first hour, and you'll read that as him hating it." },
        { speaker: "Mia", text: "Good point. I'll tell him that morning, so he has the day to get used to the idea. Not a surprise exactly — more a short-notice invitation." },
      ],
      transcript:
        "Mia is secretly planning a low-key two-night lakeside cabin weekend for their father's birthday. Ben notes Dad claims to hate surprises, but Mia distinguishes that from hating being the centre of attention — a quiet trip is the opposite of a party. She'll organize only the fishing boat he never gets around to renting, framing it as removing a stressful decision. Clinic appointments are already moved to look like the receptionist's idea. Ben's remaining worry is springing it Friday after work, when Dad's tiredness could be misread as dislike; Mia decides to tell him that morning, reframing it as a short-notice invitation rather than a surprise.",
      questions: [
        {
          prompt: "How does Mia reconcile the trip with Dad's dislike of surprises?",
          options: [
            "She argues he doesn't really mean what he says.",
            "She distinguishes hating attention from hating surprises, and the trip avoids attention.",
            "She plans to cancel if he objects.",
            "She decides to make it a large party instead.",
          ],
          correctIndex: 1,
          explanation:
            "She separates 'hates surprises' from 'hates being the centre of attention,' noting the quiet cabin is 'the opposite' of a party.",
        },
        {
          prompt: "Why does Ben call the fishing-boat plan 'smart'?",
          options: [
            "Because it adds an exciting new activity.",
            "Because it removes a decision Dad finds stressful rather than adding one.",
            "Because fishing is Dad's favourite hobby.",
            "Because it saves money on the trip.",
          ],
          correctIndex: 1,
          explanation:
            "He praises it as 'a surprise that removes a decision he finds stressful rather than adding one.'",
        },
        {
          prompt: "How did Mia handle the clinic appointments?",
          options: [
            "She cancelled them without telling anyone.",
            "She moved them so Dad thinks the receptionist rescheduled them.",
            "She asked Dad to reschedule them himself.",
            "She left them unchanged.",
          ],
          correctIndex: 1,
          explanation:
            "She moved them 'under the excuse of the receptionist's schedule, so he thinks it was their idea.'",
        },
        {
          prompt: "What is Ben's main concern about the timing?",
          options: [
            "That Dad will be too busy on Friday.",
            "That a tired, grumpy first hour could be misread as Dad disliking the trip.",
            "That the lake will be too crowded.",
            "That the drive is too long to attempt.",
          ],
          correctIndex: 1,
          explanation:
            "He warns that Friday-after-work tiredness could be misinterpreted: 'you'll read that as him hating it.'",
        },
        {
          prompt: "What does Mia decide about telling Dad?",
          options: [
            "To keep it a full surprise until arrival.",
            "To tell him that morning so it feels like a short-notice invitation.",
            "To let Ben tell him instead.",
            "To cancel the surprise element entirely by telling him a week ahead.",
          ],
          correctIndex: 1,
          explanation:
            "She'll tell him 'that morning,' reframing it as 'a short-notice invitation' so he can adjust.",
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
        { speaker: "Visitor", text: "I'd like to use the library's makerspace — the 3D printers and the laser cutter. What do I need to know?" },
        { speaker: "Staff", text: "First, the two tools have different rules. The 3D printers you can book after a short online orientation. The laser cutter requires an in-person certification session, because the risks are higher, and that runs only on Tuesdays." },
        { speaker: "Visitor", text: "So I could print something this week but not cut anything until I've done Tuesday's session?" },
        { speaker: "Staff", text: "Exactly. And even after certification, the laser cutter can't be used unsupervised — a trained volunteer must be present, which is why its hours are narrower than the printers'." },
        { speaker: "Visitor", text: "Is there a cost?" },
        { speaker: "Staff", text: "The equipment time is free. You pay only for materials, and only for what you actually use — we weigh the filament before and after. The one thing that isn't free is a failed print you caused by ignoring the size limits; that material still counts." },
        { speaker: "Visitor", text: "What about my own materials? Can I bring my own acrylic for the laser cutter?" },
        { speaker: "Staff", text: "Only from an approved list, because some plastics release toxic fumes when cut. Bring the wrong one and you'll be turned away — no exceptions, since it's a shared air supply." },
        { speaker: "Visitor", text: "And booking — how far ahead?" },
        { speaker: "Staff", text: "Printers, up to a week ahead and you can hold two slots at once. The laser cutter, one slot at a time, because demand outstrips the supervised hours. Cancel less than two hours before and it counts as a no-show; three no-shows and you lose booking privileges for a month." },
      ],
      transcript:
        "The makerspace's two tools differ: 3D printers need only a short online orientation, but the laser cutter requires an in-person certification held only Tuesdays, and even certified users can't run it unsupervised — a trained volunteer must be present, so its hours are narrower. Equipment time is free; users pay only for materials actually used (filament weighed before and after), except a failed print caused by ignoring size limits, which still counts. Own materials for the laser cutter must be from an approved list because some plastics release toxic fumes into the shared air. Printers can be booked a week ahead with two held slots; the laser cutter allows one slot at a time. Cancelling under two hours ahead is a no-show, and three no-shows cost booking privileges for a month.",
      questions: [
        {
          prompt: "What is the key difference in access between the two tools?",
          options: [
            "The printers cost money; the laser cutter is free.",
            "The printers need only online orientation; the laser cutter needs in-person certification.",
            "Both require the same Tuesday session.",
            "The laser cutter needs no training at all.",
          ],
          correctIndex: 1,
          explanation:
            "Printers require 'a short online orientation'; the laser cutter requires 'an in-person certification session' on Tuesdays.",
        },
        {
          prompt: "Why are the laser cutter's hours narrower than the printers'?",
          options: [
            "Because it uses more electricity.",
            "Because a trained volunteer must supervise its use.",
            "Because it is older equipment.",
            "Because fewer people want to use it.",
          ],
          correctIndex: 1,
          explanation:
            "Even certified users can't use it unsupervised — 'a trained volunteer must be present,' limiting its hours.",
        },
        {
          prompt: "When does a user have to pay for material?",
          options: [
            "For all equipment time.",
            "Only for material actually used, plus failed prints caused by ignoring size limits.",
            "Only for successful prints.",
            "Never — everything is free.",
          ],
          correctIndex: 1,
          explanation:
            "Time is free; you pay for material used (weighed before/after), and a failure you caused by ignoring size limits 'still counts.'",
        },
        {
          prompt: "Why must the visitor's own acrylic come from an approved list?",
          options: [
            "Because unapproved plastics are more expensive.",
            "Because some plastics release toxic fumes into a shared air supply.",
            "Because the library sells its own acrylic.",
            "Because approved plastics cut faster.",
          ],
          correctIndex: 1,
          explanation:
            "Some plastics 'release toxic fumes when cut,' and 'it's a shared air supply,' so wrong materials are refused.",
        },
        {
          prompt: "How do booking limits differ between the tools?",
          options: [
            "Both allow two slots a week ahead.",
            "Printers allow two slots up to a week ahead; the laser cutter allows one at a time.",
            "The laser cutter allows more slots than the printers.",
            "Neither can be booked in advance.",
          ],
          correctIndex: 1,
          explanation:
            "Printers: 'up to a week ahead' and 'two slots at once'; laser cutter: 'one slot at a time' due to demand.",
        },
        {
          prompt: "What is the consequence of repeated late cancellations?",
          options: [
            "A warning letter with no further penalty.",
            "Three no-shows cost booking privileges for a month.",
            "A per-cancellation fee.",
            "Immediate permanent ban.",
          ],
          correctIndex: 1,
          explanation:
            "Cancelling under two hours ahead is a no-show; 'three no-shows and you lose booking privileges for a month.'",
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
        { speaker: "Anchor", text: "Health officials have issued an air-quality advisory as wildfire smoke drifts into the region from fires hundreds of kilometres away. The advisory is unusual in one respect: the smoke is arriving under a clear blue sky." },
        { speaker: "Anchor", text: "Officials stressed that visibility is a poor guide today. The most harmful particles are the finest ones, invisible to the eye, and they can penetrate deep into the lungs. People who judge the risk by how hazy it looks, they warned, will consistently underestimate it." },
        { speaker: "Anchor", text: "The advice differs by group. Healthy adults may notice only mild irritation, but those with asthma, heart conditions, or respiratory illness are urged to stay indoors and keep windows closed. Officials specifically cautioned against outdoor exercise, noting that heavy breathing draws far more of the fine particles into the body — so the fitter you are, the more you may inhale if you push it." },
        { speaker: "Anchor", text: "Schools will remain open but move recess and sports indoors. And in a detail officials called easy to overlook, they reminded residents that many household air purifiers do nothing for this kind of particle unless fitted with the right grade of filter — a purifier running with the wrong filter offers reassurance, not protection." },
      ],
      transcript:
        "An air-quality advisory warns of wildfire smoke arriving under a clear blue sky. Visibility is a poor guide: the most harmful particles are the finest, invisible ones that penetrate deep into the lungs, so judging risk by haziness underestimates it. Advice differs by group — healthy adults may feel mild irritation, but those with asthma, heart, or respiratory conditions should stay indoors with windows closed. Outdoor exercise is discouraged because heavy breathing draws in more fine particles, so fitter people who push themselves inhale more. Schools stay open but move recess and sports indoors. Officials also note many home air purifiers do nothing without the right grade of filter — offering 'reassurance, not protection.'",
      questions: [
        {
          prompt: "Why do officials call this advisory 'unusual'?",
          options: [
            "Because the fires are unusually close.",
            "Because the harmful smoke is arriving under a clear blue sky.",
            "Because it was issued at night.",
            "Because it applies only to schools.",
          ],
          correctIndex: 1,
          explanation:
            "The unusual feature is that 'the smoke is arriving under a clear blue sky,' making the danger less obvious.",
        },
        {
          prompt: "Why is visibility 'a poor guide' to the risk?",
          options: [
            "Because the most harmful particles are too fine to see.",
            "Because the sky changes colour rapidly.",
            "Because smoke only appears at night.",
            "Because haze always exaggerates the danger.",
          ],
          correctIndex: 0,
          explanation:
            "'The most harmful particles are the finest ones, invisible to the eye,' so judging by haze underestimates risk.",
        },
        {
          prompt: "Why is outdoor exercise specifically discouraged?",
          options: [
            "Because it raises body temperature.",
            "Because heavy breathing draws far more fine particles into the body.",
            "Because exercise weakens the immune system.",
            "Because the smoke is worse at ground level during exercise.",
          ],
          correctIndex: 1,
          explanation:
            "Heavy breathing 'draws far more of the fine particles into the body,' so exertion increases intake.",
        },
        {
          prompt: "What is the implication of 'the fitter you are, the more you may inhale if you push it'?",
          options: [
            "Fit people are immune to smoke.",
            "Fitness protects fully against the particles.",
            "Being fit does not exempt someone who exercises hard from greater exposure.",
            "Only unfit people should stay indoors.",
          ],
          correctIndex: 2,
          explanation:
            "The point is counter-intuitive: hard exertion increases inhalation regardless of fitness, so fitness is no shield here.",
        },
        {
          prompt: "What do officials warn about many household air purifiers?",
          options: [
            "They are always effective against smoke.",
            "They should be run with windows open.",
            "They offer no protection without the correct grade of filter.",
            "They must be replaced entirely during advisories.",
          ],
          correctIndex: 2,
          explanation:
            "Many 'do nothing for this kind of particle unless fitted with the right grade of filter' — 'reassurance, not protection.'",
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
      blueprint: LISTENING_BLUEPRINT.interview,
      audioInstruction:
        "Listen to the discussion. You will hear it only once. It is about 2 minutes long.",
      script: [
        { speaker: "Host", text: "Should companies use AI to screen job applicants? Priya builds these systems; Omar studies hiring discrimination; and Grace runs recruitment for a mid-sized firm." },
        { speaker: "Priya", text: "I'll start by defusing a myth. People imagine the AI decides. It doesn't — it ranks. A human still hires. The danger isn't robot overlords; it's that humans trust the ranking more than they should because a number feels objective." },
        { speaker: "Omar", text: "And that's precisely the harm, Priya. The bias doesn't disappear; it gets laundered. A recruiter who might have questioned her own gut won't question a score, because the score arrives wearing the costume of math." },
        { speaker: "Priya", text: "I don't disagree. But the alternative — unaided human screening — is measurably more biased, not less. We have decades of data on that. So 'the AI has bias' can't be the end of the argument if the thing it replaces is worse." },
        { speaker: "Grace", text: "From where I sit, you're both right and both missing my actual problem. My issue isn't accuracy — it's that when the vendor's model rejects someone, I can't explain why, and increasingly the law says I have to be able to." },
        { speaker: "Omar", text: "That's the strongest point yet. An unexplainable rejection is worse than a biased one you can interrogate, because you can't even challenge it." },
        { speaker: "Priya", text: "I'd only add that explainability and accuracy often trade off. The models you can fully explain tend to be the simpler, blunter ones. Grace may have to choose which she values more." },
        { speaker: "Grace", text: "Except the regulator has chosen for me. So the honest question isn't 'best model,' it's 'best model I'm allowed to defend in writing.'" },
        { speaker: "Host", text: "So: not humans versus machines, but which errors we can see, challenge, and be held accountable for." },
      ],
      transcript:
        "A host and three speakers debate AI in hiring. Priya defuses the myth that AI decides — it ranks, humans hire; the danger is over-trusting a number that 'feels objective.' Omar says this launders bias: a recruiter won't question a score wearing 'the costume of math.' Priya counters that unaided human screening is measurably more biased, so 'the AI has bias' can't end the argument if the alternative is worse. Grace shifts the ground: her real problem is that she can't explain a vendor model's rejection, and the law increasingly requires it. Omar calls an unexplainable rejection worse than an interrogable biased one. Priya notes explainability and accuracy often trade off — explainable models are blunter — so Grace must choose; Grace says the regulator has chosen for her, making the real question 'best model I'm allowed to defend in writing.'",
      questions: [
        {
          prompt: "What myth does Priya begin by 'defusing'?",
          options: [
            "That AI hiring tools are expensive.",
            "That the AI makes the hiring decision rather than ranking candidates.",
            "That humans are unbiased.",
            "That AI cannot read résumés.",
          ],
          correctIndex: 1,
          explanation:
            "She stresses the AI 'ranks,' while 'a human still hires' — it doesn't decide.",
        },
        {
          prompt: "According to Priya, what is the real danger of the ranking?",
          options: [
            "That the AI will replace all recruiters.",
            "That humans trust the number more than they should because it feels objective.",
            "That rankings are always inaccurate.",
            "That candidates can manipulate the score.",
          ],
          correctIndex: 1,
          explanation:
            "The danger is humans 'trust the ranking more than they should because a number feels objective.'",
        },
        {
          prompt: "What does Omar mean by bias being 'laundered'?",
          options: [
            "The AI removes bias completely.",
            "Bias is disguised as objective math and so goes unquestioned.",
            "Bias is transferred to the candidates.",
            "Bias becomes cheaper to fix.",
          ],
          correctIndex: 1,
          explanation:
            "A recruiter 'won't question a score' because it 'arrives wearing the costume of math' — bias hidden behind apparent objectivity.",
        },
        {
          prompt: "How does Priya defend AI screening despite its bias?",
          options: [
            "By claiming AI has no bias at all.",
            "By arguing the human screening it replaces is measurably more biased.",
            "By saying bias doesn't matter in hiring.",
            "By insisting regulators approve of it.",
          ],
          correctIndex: 1,
          explanation:
            "She says unaided human screening is 'measurably more biased,' so criticizing AI's bias isn't decisive if the alternative is worse.",
        },
        {
          prompt: "What is Grace's actual problem with the vendor's model?",
          options: [
            "It is too expensive.",
            "It is inaccurate.",
            "She cannot explain its rejections, which the law increasingly requires.",
            "It rejects too few candidates.",
          ],
          correctIndex: 2,
          explanation:
            "Her issue 'isn't accuracy' but that she 'can't explain why' someone was rejected, and 'the law says I have to be able to.'",
        },
        {
          prompt: "Why does Omar call an unexplainable rejection worse than a biased one?",
          options: [
            "Because it is more expensive to appeal.",
            "Because you can't challenge what you can't understand.",
            "Because it always affects more people.",
            "Because bias is never a real problem.",
          ],
          correctIndex: 1,
          explanation:
            "A biased decision 'you can interrogate,' but an unexplainable one 'you can't even challenge.'",
        },
        {
          prompt: "What trade-off does Priya raise near the end?",
          options: [
            "Cost versus speed.",
            "Explainability versus accuracy.",
            "Human versus machine.",
            "Fairness versus legality.",
          ],
          correctIndex: 1,
          explanation:
            "She notes 'explainability and accuracy often trade off' — fully explainable models tend to be simpler and blunter.",
        },
        {
          prompt: "What does Grace mean by 'the regulator has chosen for me'?",
          options: [
            "The regulator selected her vendor.",
            "The legal requirement to explain decisions settles the trade-off toward explainability.",
            "The regulator banned AI hiring.",
            "She has no say in her hiring process.",
          ],
          correctIndex: 1,
          explanation:
            "Since she must 'defend in writing,' the law forces the choice toward explainable models regardless of raw accuracy.",
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
        { speaker: "Speaker", text: "The four-day workweek is often sold as a productivity trick: work less, produce the same, everyone wins. The trials are real and the headline results are genuinely encouraging. But the way we talk about them quietly smuggles in an assumption worth dragging into the light." },
        { speaker: "Speaker", text: "Most successful trials didn't simply cut a day. They forced companies to eliminate low-value work — pointless meetings, redundant reporting, performative busyness — because you can't fit five days of waste into four. So the gain wasn't really 'a shorter week.' The gain was 'a war on waste,' and the shorter week was the weapon that made the war unavoidable." },
        { speaker: "Speaker", text: "This matters, because it predicts where the four-day week will fail. It works best where waste is abundant — knowledge work full of ritual meetings. It works poorly where a day's output is a day's output: a nurse's shift, a bus route, a kitchen. You cannot 'eliminate waste' out of caring for a patient. In those sectors, four days means either four days of pay or someone else covering the fifth." },
        { speaker: "Speaker", text: "So the uncomfortable pattern is that the four-day week may hand its biggest benefits to workers who already have the most autonomy, while the workers whose jobs are hardest and least flexible get the least. A reform sold in the language of universal fairness could, if we're careless, widen the very gap it claims to close." },
        { speaker: "Speaker", text: "I'm not arguing against it. I'm arguing against the slogan. Adopt it where it fits, name honestly where it doesn't, and stop pretending a policy that suits the salaried office is automatically a gift to everyone who works." },
      ],
      transcript:
        "The speaker argues the four-day week is mis-sold as a simple productivity trick. Successful trials mostly worked by forcing companies to eliminate low-value work — you can't fit five days of waste into four — so the real gain was 'a war on waste,' with the shorter week as the weapon. This predicts where it fails: it works where waste is abundant (ritual-heavy knowledge work) but poorly where a day's output is fixed (nurses, bus routes, kitchens), where four days means either four days of pay or someone covering the fifth. So the benefits may flow to workers who already have the most autonomy while the hardest, least flexible jobs gain least — a reform in the language of fairness that could widen the gap it claims to close. The speaker opposes the slogan, not the policy: adopt it where it fits and name honestly where it doesn't.",
      questions: [
        {
          prompt: "What 'assumption' does the speaker want to drag into the light?",
          options: [
            "That the four-day week trials were faked.",
            "That the benefit is simply 'a shorter week,' when it actually came from eliminating waste.",
            "That workers want more days off.",
            "That productivity cannot be measured.",
          ],
          correctIndex: 1,
          explanation:
            "He argues the real gain was 'a war on waste,' not the shorter week itself — the hidden assumption in how trials are discussed.",
        },
        {
          prompt: "Why does the speaker say the shorter week was 'the weapon'?",
          options: [
            "Because it forced companies to cut low-value work they otherwise wouldn't.",
            "Because it reduced wages.",
            "Because it increased the number of meetings.",
            "Because it was imposed by regulators.",
          ],
          correctIndex: 0,
          explanation:
            "You 'can't fit five days of waste into four,' so the shorter week 'made the war unavoidable' — the mechanism, not the goal.",
        },
        {
          prompt: "Where does the speaker predict the four-day week works best?",
          options: [
            "In hospitals and public transit.",
            "In knowledge work full of ritual meetings and redundant reporting.",
            "In kitchens and caregiving.",
            "In any sector equally.",
          ],
          correctIndex: 1,
          explanation:
            "It 'works best where waste is abundant — knowledge work full of ritual meetings.'",
        },
        {
          prompt: "Why does it work poorly for a nurse, bus driver, or cook?",
          options: [
            "Because those workers dislike time off.",
            "Because 'a day's output is a day's output' — there is little waste to eliminate.",
            "Because those jobs are already part-time.",
            "Because those sectors have too many meetings.",
          ],
          correctIndex: 1,
          explanation:
            "You 'cannot eliminate waste out of caring for a patient'; the output is fixed, so four days means less pay or a cover for the fifth.",
        },
        {
          prompt: "What is the 'uncomfortable pattern' the speaker identifies?",
          options: [
            "The reform mainly benefits workers who already have the most autonomy.",
            "The reform benefits manual workers most.",
            "The reform reduces productivity everywhere.",
            "The reform is universally beneficial.",
          ],
          correctIndex: 0,
          explanation:
            "Its 'biggest benefits' may go to already-autonomous workers, while the hardest, least flexible jobs gain least.",
        },
        {
          prompt: "What is the speaker's final position?",
          options: [
            "The four-day week should be banned.",
            "The policy should be adopted universally without exception.",
            "He opposes the slogan, not the policy — adopt it where it fits and be honest where it doesn't.",
            "The policy only helps manual workers.",
          ],
          correctIndex: 2,
          explanation:
            "'I'm arguing against the slogan' — apply it where it fits, 'name honestly where it doesn't.'",
        },
      ],
    },
  ],
}
