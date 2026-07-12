import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest4: ListeningPracticeTest = {
  id: "hard-4",
  title: "Elite Listening Test 4",
  topic: "Warranty claim, roommate finances, transit rollout, factory recall, thesis defense, gig-economy law",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test. Overlapping claims, buried conditions, and speakers who partly retract their own positions — designed so even an examiner rarely clears CLB 6 on a single listen.",
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
        "A customer calls a laptop maker's support line about a screen that flickers, and the agent works out whether the warranty applies.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Agent", text: "I've pulled up your registration, Mr. Larsson. The unit's fourteen months old, so the standard one-year warranty has lapsed — but before you groan, the display panel carries its own two-year coverage, separate from the rest." },
        { speaker: "Larsson", text: "So the flickering screen might still be covered even though everything else isn't?" },
        { speaker: "Agent", text: "Potentially. The catch is what's causing it. Panel coverage handles manufacturing defects in the display. If the flicker traces back to the graphics chip on the mainboard, that's a system component, and that ship has sailed." },
        { speaker: "Larsson", text: "How would you even tell which one it is?" },
        { speaker: "Agent", text: "We run a diagnostic that isolates the panel. If plugging in an external monitor gives you a clean picture, the fault's almost certainly the internal panel, which is good news for you. If the external screen flickers too, the problem's upstream, and you'd be paying." },
        { speaker: "Larsson", text: "I actually tried an external monitor last week — it was perfectly fine." },
        { speaker: "Agent", text: "That's a strong sign it's the panel, though I can't promise until our technician confirms it. What I'd caution against is opening the laptop yourself or taking it to a third party first — either of those voids the panel coverage instantly." },
        { speaker: "Larsson", text: "A friend offered to swap the cable. I take it that's a bad idea?" },
        { speaker: "Agent", text: "Financially, yes. Even a harmless cable swap, done outside our network, gives us grounds to decline. Send it to us and the repair, if it's the panel, costs you nothing but shipping one way." },
        { speaker: "Larsson", text: "One way — so I cover sending it, you cover returning it?" },
        { speaker: "Agent", text: "Correct. And keep the box; shipping a bare laptop that arrives damaged becomes your liability, not ours." },
      ],
      transcript:
        "Mr. Larsson's 14-month-old laptop is past its one-year system warranty, but the display panel has separate two-year coverage. Whether the flicker is covered depends on the cause: a panel defect is covered, but a graphics-chip (mainboard) fault is not. His external monitor showing a clean picture strongly suggests a panel fault, though a technician must confirm. Opening the unit or using a third party — even a harmless cable swap — voids panel coverage. If it is the panel, repair is free except one-way shipping, and he should keep the original box or bear liability for transit damage.",
      questions: [
        {
          prompt: "Why is the flickering screen still potentially covered despite the laptop's age?",
          options: [
            "The one-year warranty was extended automatically at registration.",
            "The display panel has its own separate two-year coverage.",
            "Screen faults are always covered regardless of warranty.",
            "The agent waived the expiry as a courtesy.",
          ],
          correctIndex: 1,
          explanation:
            "The agent notes the system warranty lapsed but 'the display panel carries its own two-year coverage, separate from the rest.'",
        },
        {
          prompt: "What determines whether the repair will be free?",
          options: [
            "Whether the fault is in the panel or the graphics chip.",
            "Whether Mr. Larsson registered the product on time.",
            "Whether the laptop is still within one year.",
            "Whether an external monitor is available.",
          ],
          correctIndex: 0,
          explanation:
            "A panel defect is covered; a graphics-chip/mainboard fault is 'a system component' and no longer covered.",
        },
        {
          prompt: "What does the clean external-monitor picture suggest?",
          options: [
            "The graphics chip is failing.",
            "The fault is almost certainly the internal panel.",
            "The laptop needs a new mainboard.",
            "Nothing, until the warranty is renewed.",
          ],
          correctIndex: 1,
          explanation:
            "The agent says a clean external picture means 'the fault's almost certainly the internal panel' — the covered scenario.",
        },
        {
          prompt: "Why does the agent warn against a friend swapping the cable?",
          options: [
            "The cable is not the real problem.",
            "It would take too long to arrange.",
            "Any work outside their network gives grounds to decline the claim.",
            "The friend would be charged a service fee.",
          ],
          correctIndex: 2,
          explanation:
            "Even a harmless cable swap 'done outside our network' gives the company grounds to void the panel coverage.",
        },
        {
          prompt: "What does 'that ship has sailed' refer to?",
          options: [
            "The shipping deadline for the repair.",
            "Coverage for a mainboard/graphics-chip fault, which has expired.",
            "The two-year panel coverage.",
            "The option to buy an extended warranty.",
          ],
          correctIndex: 1,
          explanation:
            "He uses the idiom about system components: if the flicker is the graphics chip, that coverage is gone with the one-year warranty.",
        },
        {
          prompt: "Who pays for shipping, and in which direction?",
          options: [
            "The company pays both ways.",
            "Mr. Larsson pays to send it; the company pays to return it.",
            "Mr. Larsson pays both ways.",
            "Shipping is free in both directions.",
          ],
          correctIndex: 1,
          explanation:
            "The agent confirms one-way shipping: Larsson covers sending, the company covers the return.",
        },
        {
          prompt: "Why does the agent tell him to keep the box?",
          options: [
            "It is required to validate the warranty.",
            "Transit damage to a bare laptop becomes his liability.",
            "The technician needs the packaging for testing.",
            "It contains the shipping label.",
          ],
          correctIndex: 1,
          explanation:
            "He warns that a bare laptop arriving damaged 'becomes your liability, not ours.'",
        },
        {
          prompt: "How would you describe the agent's handling of the call?",
          options: [
            "Dismissive, treating the claim as already lost.",
            "Helpful but careful to flag the actions that could forfeit coverage.",
            "Uncertain, unable to explain the coverage rules.",
            "Aggressive, pushing an extended-warranty upsell.",
          ],
          correctIndex: 1,
          explanation:
            "He highlights favourable signs yet repeatedly warns which steps would void coverage — helpful within firm limits.",
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
        { speaker: "Marcus", text: "We need to talk about the utilities. I'm not accusing you, but the bills doubled the month your sister moved in, and she's still here." },
        { speaker: "Tara", text: "I know how it looks. But two of us were home all day that month because I was between jobs, so it wasn't only her." },
        { speaker: "Marcus", text: "Fair. I'm less worried about who ran the heater than about the fact that we split fifty-fifty as if nothing changed." },
        { speaker: "Tara", text: "You want a third share now that there are three of us? I'd actually prefer that — it's cleaner than me quietly feeling guilty every month." },
        { speaker: "Marcus", text: "Thirds for utilities, yes. Rent's trickier, since she's in the small room, not sharing the master with either of us." },
        { speaker: "Tara", text: "Then maybe she pays a reduced rent share but a full third of utilities, since power doesn't care how big your room is." },
        { speaker: "Marcus", text: "That's the fairest thing either of us has said. Let's write it down before we both forget the logic and end up arguing again in April." },
      ],
      transcript:
        "Marcus raises that utility bills doubled when Tara's sister moved in. Tara notes she was also home all day while between jobs, so her sister isn't the sole cause. Marcus's real concern is that they still split everything fifty-fifty. They agree to split utilities in thirds, but treat rent differently because the sister has only the small room — she'll pay reduced rent but a full third of utilities, since usage isn't tied to room size. They decide to write it down to avoid future arguments.",
      questions: [
        {
          prompt: "What is Marcus's main concern?",
          options: [
            "That the sister is running the heater too much.",
            "That the cost split no longer matches the number of people.",
            "That Tara lost her job.",
            "That the sister should move out.",
          ],
          correctIndex: 1,
          explanation:
            "He says he's less worried about who used what than that 'we split fifty-fifty as if nothing changed.'",
        },
        {
          prompt: "Why does Tara mention being 'between jobs'?",
          options: [
            "To ask Marcus for a loan.",
            "To point out she also contributed to the higher usage, not just her sister.",
            "To explain why she cannot pay rent.",
            "To suggest her sister should pay everything.",
          ],
          correctIndex: 1,
          explanation:
            "She notes two of them were home all day that month, so the increase 'wasn't only her' sister.",
        },
        {
          prompt: "How do they decide to handle utilities?",
          options: [
            "Keep the fifty-fifty split.",
            "Split them into thirds.",
            "Have the sister pay them entirely.",
            "Base them on room size.",
          ],
          correctIndex: 1,
          explanation:
            "Both agree on 'thirds for utilities.'",
        },
        {
          prompt: "Why is rent treated differently from utilities?",
          options: [
            "The sister earns less than the others.",
            "The sister occupies only the small room, not a shared master.",
            "Rent is paid to a different landlord.",
            "Utilities are cheaper than rent.",
          ],
          correctIndex: 1,
          explanation:
            "Marcus notes rent is trickier because she's 'in the small room,' so room size justifies a reduced rent share while utilities stay equal.",
        },
        {
          prompt: "Why do they decide to write the arrangement down?",
          options: [
            "The landlord requires it in writing.",
            "To avoid forgetting the reasoning and arguing again later.",
            "Because Tara does not trust Marcus.",
            "To show the sister she is being overcharged.",
          ],
          correctIndex: 1,
          explanation:
            "Marcus wants to record it 'before we both forget the logic and end up arguing again in April.'",
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
        { speaker: "Rider", text: "I want to use the new express bus line downtown. Is it the same fare as the regular route?" },
        { speaker: "Clerk", text: "Almost. The base fare's identical, but the express adds a fifty-cent surcharge that's waived if you're transferring from a train within the last ninety minutes." },
        { speaker: "Rider", text: "So a train-to-express trip costs the same as a normal bus, but express-only costs fifty cents more?" },
        { speaker: "Clerk", text: "Exactly. Here's what trips people up, though: the ninety-minute window starts when you tap onto the train, not when you get off. A slow train can eat your whole window before you reach the bus stop." },
        { speaker: "Rider", text: "Good to know. Does the express run all day?" },
        { speaker: "Clerk", text: "Peak only for now — six to ten in the morning, three to seven at night. Outside those hours the express buses run, but they don't skip stops, so you're paying the surcharge for no time saving. I'd avoid it off-peak." },
        { speaker: "Rider", text: "And weekends?" },
        { speaker: "Clerk", text: "No express service at all on weekends yet. They've promised Saturday service by summer, but I wouldn't plan around a promise." },
        { speaker: "Rider", text: "Last thing — can I pay cash?" },
        { speaker: "Clerk", text: "You can, but the transfer discount only applies with the tap card. Pay cash and you lose the waiver, even coming straight off a train. The card pays for itself fast if you transfer daily." },
      ],
      transcript:
        "The express bus has the same base fare as the regular route plus a 50-cent surcharge, waived when transferring from a train within 90 minutes — but that window starts when you tap onto the train, not when you exit. The express runs peak only (6–10 am, 3–7 pm); off-peak the buses run without skipping stops, so the surcharge buys no time saving. There is no weekend express yet, with Saturday service only promised for summer. Cash payment is accepted, but the transfer waiver applies only with a tap card.",
      questions: [
        {
          prompt: "How does the express fare compare to the regular fare?",
          options: [
            "It is always fifty cents more.",
            "Same base fare plus a surcharge that can be waived on a train transfer.",
            "It is cheaper during peak hours.",
            "It is identical in every case.",
          ],
          correctIndex: 1,
          explanation:
            "Same base fare, plus a 50-cent surcharge waived if transferring from a train within 90 minutes.",
        },
        {
          prompt: "What detail 'trips people up' about the transfer window?",
          options: [
            "It only applies on weekends.",
            "It starts when you tap onto the train, not when you get off.",
            "It lasts only thirty minutes.",
            "It requires paying with cash.",
          ],
          correctIndex: 1,
          explanation:
            "The 90-minute window 'starts when you tap onto the train, not when you get off,' so a slow train can consume it.",
        },
        {
          prompt: "Why does the clerk advise against the express off-peak?",
          options: [
            "The buses are usually full.",
            "The surcharge is higher off-peak.",
            "Off-peak buses don't skip stops, so there's no time saving.",
            "The transfer waiver doesn't apply off-peak.",
          ],
          correctIndex: 2,
          explanation:
            "Off-peak they 'don't skip stops,' so you pay the surcharge 'for no time saving.'",
        },
        {
          prompt: "What is the current weekend situation?",
          options: [
            "Full express service on both days.",
            "Saturday-only express service.",
            "No express service, with Saturday service only promised.",
            "Express service at a reduced fare.",
          ],
          correctIndex: 2,
          explanation:
            "There's 'no express service at all on weekends yet,' with Saturday service merely promised by summer.",
        },
        {
          prompt: "What happens if the rider pays cash after a train?",
          options: [
            "The waiver still applies.",
            "The surcharge is doubled.",
            "The transfer waiver is lost.",
            "The fare is refunded later.",
          ],
          correctIndex: 2,
          explanation:
            "The transfer discount applies only with the tap card; paying cash means losing the waiver even straight off a train.",
        },
        {
          prompt: "What is the clerk's overall recommendation?",
          options: [
            "Avoid the express entirely.",
            "Use a tap card and ride the express mainly at peak times.",
            "Always pay cash to keep it simple.",
            "Wait until weekend service begins.",
          ],
          correctIndex: 1,
          explanation:
            "He steers the rider toward the tap card (for the waiver) and peak-hour use (for real time savings).",
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
        { speaker: "Anchor", text: "A regional appliance maker has issued a recall of roughly forty thousand dishwashers after reports of overheating, though the company stresses no injuries have been confirmed." },
        { speaker: "Reporter", text: "The fault lies in a control board that, in rare cases, keeps a heating element running after the cycle ends. The manufacturer says the risk is low but not negligible, and that a free repair is preferable to waiting for a pattern to emerge." },
        { speaker: "Reporter", text: "What's notable is the timing. The defect was flagged internally eight months ago, but the recall came only after a consumer advocacy group obtained the internal memo and threatened to publish it." },
        { speaker: "Anchor", text: "So the recall was voluntary in name only?" },
        { speaker: "Reporter", text: "The company disputes that framing, insisting the delay was spent verifying the fault rather than concealing it. Regulators haven't taken a side, but they've opened a review into how long the firm sat on the finding." },
        { speaker: "Reporter", text: "For owners, the practical step is simple: check the serial number online, and until a technician visits, run the dishwasher only when someone's home and awake." },
      ],
      transcript:
        "An appliance maker recalled about 40,000 dishwashers over an overheating risk from a control board that can keep a heating element running after the cycle ends; no injuries are confirmed and the company calls the risk low but not negligible. The defect was flagged internally eight months earlier, but the recall came only after an advocacy group obtained the internal memo and threatened to publish it. The company says the delay was for verification, not concealment; regulators have opened a review into the timing but taken no side. Owners should check the serial number and only run the machine when someone is home and awake.",
      questions: [
        {
          prompt: "What is the technical cause of the recall?",
          options: [
            "A leaking water valve.",
            "A control board that can keep a heating element running after the cycle.",
            "A faulty door latch.",
            "An electrical cord defect.",
          ],
          correctIndex: 1,
          explanation:
            "The fault is a control board that 'keeps a heating element running after the cycle ends.'",
        },
        {
          prompt: "How does the company characterize the risk?",
          options: [
            "Nonexistent.",
            "Severe and widespread.",
            "Low but not negligible.",
            "Confined to one production batch.",
          ],
          correctIndex: 2,
          explanation:
            "The manufacturer calls the risk 'low but not negligible.'",
        },
        {
          prompt: "Why is the timing of the recall 'notable'?",
          options: [
            "It came right after the product launched.",
            "It followed an advocacy group obtaining and threatening to publish an internal memo.",
            "It coincided with a regulator's deadline.",
            "It happened during a holiday sales period.",
          ],
          correctIndex: 1,
          explanation:
            "The defect was flagged internally eight months earlier; the recall came only after the memo was obtained and publication was threatened.",
        },
        {
          prompt: "How does the company respond to the 'voluntary in name only' framing?",
          options: [
            "It accepts the characterization.",
            "It says the delay was for verifying the fault, not concealing it.",
            "It blames the advocacy group for the delay.",
            "It refuses to comment.",
          ],
          correctIndex: 1,
          explanation:
            "The firm insists the delay 'was spent verifying the fault rather than concealing it.'",
        },
        {
          prompt: "What are owners advised to do in the meantime?",
          options: [
            "Stop using the dishwasher entirely.",
            "Run it only when someone is home and awake.",
            "Return the unit to the retailer immediately.",
            "Replace the control board themselves.",
          ],
          correctIndex: 1,
          explanation:
            "Until a technician visits, owners should run it 'only when someone's home and awake.'",
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
        { speaker: "Professor", text: "Ms. Okonkwo, your thesis argues that community gardens reduce urban food insecurity. I want to press on the strength of that claim before your defense." },
        { speaker: "Okonkwo", text: "My data show households with garden plots reported fewer skipped meals over the survey year." },
        { speaker: "Professor", text: "Reported fewer, or actually ate more? Self-reported food security is notoriously slippery. People who join gardens may already be more food-secure or more motivated." },
        { speaker: "Okonkwo", text: "That's the selection problem, I know. I tried to address it by comparing gardeners to applicants on the waiting list, who presumably share the motivation but lack the plot." },
        { speaker: "Professor", text: "Now that's a much stronger design, and honestly the most defensible part of your work. Why did you bury it in an appendix?" },
        { speaker: "Okonkwo", text: "I worried the waitlist sample was too small to lead with." },
        { speaker: "Professor", text: "Small but clean beats large but confounded. I'd move it to the front. But here's a harder question: even if gardens help, is the effect large enough to matter for policy, or are we talking about a rounding error dressed up as a solution?" },
        { speaker: "Okonkwo", text: "The effect was modest — about a ten percent drop in skipped meals. I'd argue that's meaningful for the families involved even if it's small at the city scale." },
        { speaker: "Professor", text: "That's a fair distinction, and you should make it explicitly: significant for participants, marginal as citywide policy. Don't let a committee member force you into overclaiming." },
        { speaker: "Okonkwo", text: "So I should frame it as a supplement to food programs, not a replacement." },
        { speaker: "Professor", text: "Precisely. The moment you call it a replacement, someone will ask why the city should fund gardens instead of food banks, and you'll lose the room." },
      ],
      transcript:
        "A professor pressures Ms. Okonkwo on her thesis that community gardens reduce food insecurity. He challenges her reliance on self-reported data and the selection problem — gardeners may already be more food-secure or motivated. Her strongest move, comparing gardeners to waitlist applicants (who share motivation but lack plots), was buried in an appendix; he urges moving it to the front, since 'small but clean beats large but confounded.' The effect was modest (about a 10% drop in skipped meals). He advises framing it as significant for participants but marginal as citywide policy, and as a supplement to food programs rather than a replacement, to avoid overclaiming and losing the committee.",
      questions: [
        {
          prompt: "What is the professor's first objection to Okonkwo's claim?",
          options: [
            "Her sample was collected in the wrong city.",
            "Self-reported food security is unreliable and gardeners may differ at the outset.",
            "Community gardens are illegal in the study area.",
            "She used no data at all.",
          ],
          correctIndex: 1,
          explanation:
            "He questions 'reported fewer, or actually ate more,' noting self-reports are slippery and gardeners may already be more food-secure or motivated.",
        },
        {
          prompt: "How did Okonkwo try to address the selection problem?",
          options: [
            "By surveying only wealthy households.",
            "By comparing gardeners to waitlist applicants who share motivation but lack plots.",
            "By removing all self-reported data.",
            "By doubling the sample size.",
          ],
          correctIndex: 1,
          explanation:
            "She compared gardeners to applicants on the waiting list, who 'presumably share the motivation but lack the plot.'",
        },
        {
          prompt: "Why does the professor call the waitlist comparison her strongest work?",
          options: [
            "It used the largest sample.",
            "It is a cleaner design that reduces confounding.",
            "It relied purely on official statistics.",
            "It matched a famous prior study.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'small but clean beats large but confounded' — the waitlist design controls for motivation.",
        },
        {
          prompt: "What mistake did Okonkwo make with her strongest evidence?",
          options: [
            "She fabricated part of it.",
            "She buried it in an appendix because the sample felt small.",
            "She never collected it.",
            "She shared it before the defense.",
          ],
          correctIndex: 1,
          explanation:
            "She admits she 'buried it in an appendix' out of worry the waitlist sample was too small to lead with.",
        },
        {
          prompt: "What was the measured size of the effect?",
          options: [
            "About a 10% drop in skipped meals.",
            "About a 50% drop in skipped meals.",
            "No measurable effect.",
            "A 10% increase in skipped meals.",
          ],
          correctIndex: 0,
          explanation:
            "She reports 'about a ten percent drop in skipped meals.'",
        },
        {
          prompt: "How does the professor advise framing the effect?",
          options: [
            "As a complete solution to urban hunger.",
            "As significant for participants but marginal as citywide policy.",
            "As too small to mention.",
            "As larger than the data show.",
          ],
          correctIndex: 1,
          explanation:
            "He tells her to say it explicitly: 'significant for participants, marginal as citywide policy.'",
        },
        {
          prompt: "Why does he warn against calling gardens a 'replacement' for food programs?",
          options: [
            "It would exaggerate the sample size.",
            "It invites the question of why fund gardens instead of food banks, losing the committee.",
            "Food banks would sue the university.",
            "The committee prefers gardens to food banks.",
          ],
          correctIndex: 1,
          explanation:
            "He warns that calling it a replacement prompts 'why the city should fund gardens instead of food banks, and you'll lose the room.'",
        },
        {
          prompt: "What is the professor's overall attitude toward Okonkwo's thesis?",
          options: [
            "He rejects it as fundamentally flawed.",
            "He finds it defensible if she foregrounds her best evidence and avoids overclaiming.",
            "He believes it needs no changes.",
            "He is indifferent to the outcome.",
          ],
          correctIndex: 1,
          explanation:
            "He pushes hard but points to real strengths and a defensible framing — constructive, not dismissive.",
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
        { speaker: "Speaker", text: "There's a new law requiring gig platforms to reclassify their drivers as employees, and I've been asked whether I support it. My honest answer is: I support the goal and distrust the instrument." },
        { speaker: "Speaker", text: "The goal is obvious — people driving forty hours a week deserve the protections employees get: sick pay, a minimum wage floor, contributions to a pension. No serious person disputes that a full-time driver is, in substance, an employee." },
        { speaker: "Speaker", text: "My worry is the instrument, because the law treats a forty-hour driver and a five-hour-a-week student identically. Reclassify everyone, and the platforms will cap hours and cut the flexible slots that the occasional driver actually values. You protect the full-timer by pricing the part-timer out." },
        { speaker: "Speaker", text: "Supporters tell me that's scaremongering — that platforms threaten this every time and rarely follow through. Maybe. But in the two jurisdictions that tried a blanket rule, sign-up numbers fell and wait times rose, which is at least suggestive." },
        { speaker: "Speaker", text: "What I'd prefer is a threshold model: protections that scale in once someone crosses, say, twenty hours a week. That targets the people the law is meant to help without dismantling the casual tier." },
        { speaker: "Speaker", text: "So if you're keeping score: I'm not against regulation, and I'm certainly not carrying water for the platforms, who'd love no rules at all. I'm against a blunt rule when a graduated one is available and, frankly, harder to argue against." },
      ],
      transcript:
        "The speaker supports the goal of the gig-driver reclassification law but distrusts its design. Full-time drivers clearly deserve employee protections. His concern: the law treats a 40-hour driver the same as a 5-hour-a-week student, so platforms may cap hours and cut flexible slots, pricing out casual drivers to protect full-timers. He concedes supporters call this scaremongering but cites two jurisdictions where sign-ups fell and wait times rose. He prefers a threshold model where protections scale in past about 20 hours a week, targeting those the law should help without dismantling the casual tier. He is neither anti-regulation nor pro-platform.",
      questions: [
        {
          prompt: "What is the speaker's overall position?",
          options: [
            "He opposes the law's goal and its method.",
            "He supports the goal but distrusts the specific instrument.",
            "He fully supports the law as written.",
            "He is indifferent to the outcome.",
          ],
          correctIndex: 1,
          explanation:
            "He states plainly: 'I support the goal and distrust the instrument.'",
        },
        {
          prompt: "What does he concede about full-time drivers?",
          options: [
            "They are not really working.",
            "They are, in substance, employees who deserve protections.",
            "They prefer to remain contractors.",
            "They already receive full benefits.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'a full-time driver is, in substance, an employee' deserving sick pay, a wage floor, and a pension.",
        },
        {
          prompt: "What is his central objection to the law's design?",
          options: [
            "It treats a 40-hour driver and a 5-hour driver identically.",
            "It exempts the largest platforms.",
            "It sets the minimum wage too high.",
            "It applies only to new drivers.",
          ],
          correctIndex: 0,
          explanation:
            "His worry is that the law 'treats a forty-hour driver and a five-hour-a-week student identically.'",
        },
        {
          prompt: "How does he respond to the charge of 'scaremongering'?",
          options: [
            "He fully accepts it.",
            "He concedes it may be partly true but cites two jurisdictions where sign-ups fell and waits rose.",
            "He ignores the criticism.",
            "He says platforms never make such threats.",
          ],
          correctIndex: 1,
          explanation:
            "He allows 'maybe,' then points to two jurisdictions where a blanket rule saw sign-ups fall and wait times rise — 'at least suggestive.'",
        },
        {
          prompt: "What alternative does he propose?",
          options: [
            "Banning gig platforms entirely.",
            "A threshold model where protections scale in past about 20 hours a week.",
            "Leaving the sector completely unregulated.",
            "Fixed pay for all drivers regardless of hours.",
          ],
          correctIndex: 1,
          explanation:
            "He prefers protections that 'scale in once someone crosses, say, twenty hours a week.'",
        },
        {
          prompt: "Why does he stress he is 'not carrying water for the platforms'?",
          options: [
            "He secretly works for a platform.",
            "To make clear his critique is about method, not opposition to any regulation.",
            "Because platforms funded the new law.",
            "To signal he wants no rules at all.",
          ],
          correctIndex: 1,
          explanation:
            "He distances himself from platforms (who'd 'love no rules at all') to show he objects to a blunt rule, not to regulation itself.",
        },
      ],
    },
  ],
}
