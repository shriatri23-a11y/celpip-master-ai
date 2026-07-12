import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest6: ListeningPracticeTest = {
  id: "hard-6",
  title: "Elite Listening Test 6",
  topic: "Flight rebooking, shared car, parking permits, antibiotic resistance, museum repatriation, four-day week",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test. Nested exceptions, sarcasm, and speakers who agree on facts but not on what follows from them — tuned so even an examiner rarely clears CLB 6 on one listen.",
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
        "A traveller whose connecting flight was cancelled works with an airline agent to find the best way home.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Agent", text: "Your connection to Winnipeg was cancelled because of the crew shortage, not weather — and that distinction matters for what I can offer you." },
        { speaker: "Traveller", text: "Why does the reason matter? Cancelled is cancelled." },
        { speaker: "Agent", text: "Not for compensation. Weather is outside our control, so we'd owe you only a seat on the next flight. A crew shortage is on us, which means you're entitled to meal vouchers and a hotel if the delay runs overnight." },
        { speaker: "Traveller", text: "The next flight isn't until tomorrow morning. So a hotel tonight?" },
        { speaker: "Agent", text: "Yes — unless you'd rather I route you through Calgary tonight and get you in at 1 a.m. You'd sleep in your own bed, but you'd lose the hotel and the vouchers, since accepting a same-day reroute counts as us fulfilling the obligation." },
        { speaker: "Traveller", text: "So it's arrive tonight exhausted with nothing extra, or arrive tomorrow rested with a hotel and meals?" },
        { speaker: "Agent", text: "That's the trade exactly. And a small catch on the Calgary option: the connection there is tight — forty minutes — so if the first leg slips even slightly, you're stranded in Calgary, where I can't promise a hotel because that delay would then be, technically, your choice." },
        { speaker: "Traveller", text: "That's a risk I don't love. Let's take the morning flight and the hotel." },
        { speaker: "Agent", text: "Sensible. I'll book the airport hotel, not the downtown one — the shuttle's included and you won't miss the early check-in. Vouchers print with your new boarding pass." },
      ],
      transcript:
        "A traveller's Winnipeg connection was cancelled due to a crew shortage, not weather — a distinction that matters for compensation: weather owes only the next seat, but a crew shortage entitles the traveller to meal vouchers and an overnight hotel. The next flight is tomorrow morning. The agent offers an alternative reroute via Calgary tonight (arriving 1 a.m.), but accepting it forfeits the hotel and vouchers, and its 40-minute connection is risky — if the first leg slips, the traveller is stranded in Calgary with no guaranteed hotel because that would count as their own choice. The traveller picks the morning flight and hotel; the agent books the airport hotel with included shuttle.",
      questions: [
        {
          prompt: "Why does the agent stress the cancellation was due to a crew shortage, not weather?",
          options: [
            "Weather cancellations are more common.",
            "The cause determines what compensation the traveller is owed.",
            "The traveller booked a weather-protected fare.",
            "Crew shortages delay flights longer.",
          ],
          correctIndex: 1,
          explanation:
            "Weather is 'outside our control' (only a next seat), but a crew shortage is 'on us,' entitling the traveller to vouchers and a hotel.",
        },
        {
          prompt: "What is the traveller entitled to because of the crew shortage?",
          options: [
            "A full refund only.",
            "Meal vouchers and an overnight hotel.",
            "A free upgrade to business class.",
            "Nothing beyond the next available seat.",
          ],
          correctIndex: 1,
          explanation:
            "A crew shortage means the traveller is 'entitled to meal vouchers and a hotel if the delay runs overnight.'",
        },
        {
          prompt: "What is the downside of accepting the Calgary reroute?",
          options: [
            "It costs an extra fee.",
            "It forfeits the hotel and vouchers.",
            "It arrives even later than the morning flight.",
            "It requires a visa.",
          ],
          correctIndex: 1,
          explanation:
            "Accepting a same-day reroute 'counts as us fulfilling the obligation,' so the hotel and vouchers are lost.",
        },
        {
          prompt: "Why is the Calgary connection risky?",
          options: [
            "The airport frequently closes at night.",
            "The 40-minute connection means a slight delay could strand the traveller.",
            "There are no flights from Calgary to Winnipeg.",
            "The traveller lacks a boarding pass.",
          ],
          correctIndex: 1,
          explanation:
            "The connection is 'tight — forty minutes,' so if the first leg slips, the traveller is stranded in Calgary.",
        },
        {
          prompt: "Why couldn't the agent promise a hotel if the traveller got stranded in Calgary?",
          options: [
            "Calgary has no hotels.",
            "That delay would technically count as the traveller's own choice.",
            "The airline has no staff there.",
            "The vouchers expire at midnight.",
          ],
          correctIndex: 1,
          explanation:
            "A Calgary strand 'would then be, technically, your choice,' so no hotel could be promised.",
        },
        {
          prompt: "What trade-off does the traveller ultimately face?",
          options: [
            "Arrive tonight exhausted with nothing extra, or tomorrow rested with hotel and meals.",
            "Pay more now or pay more later.",
            "Fly business class or economy.",
            "Get a refund or a voucher.",
          ],
          correctIndex: 0,
          explanation:
            "The traveller summarizes it as arriving tonight 'exhausted with nothing extra' versus 'tomorrow rested with a hotel and meals.'",
        },
        {
          prompt: "Why does the agent choose the airport hotel over the downtown one?",
          options: [
            "It is cheaper for the airline.",
            "The shuttle is included and the traveller won't miss early check-in.",
            "The downtown hotel was fully booked.",
            "The traveller requested downtown.",
          ],
          correctIndex: 1,
          explanation:
            "The airport hotel means 'the shuttle's included and you won't miss the early check-in.'",
        },
        {
          prompt: "How would you describe the agent's guidance?",
          options: [
            "Pushy, forcing the reroute on the traveller.",
            "Transparent about the trade-offs and risks of each option.",
            "Vague and unhelpful about entitlements.",
            "Focused only on minimizing airline cost.",
          ],
          correctIndex: 1,
          explanation:
            "The agent lays out compensation rules, the reroute's hidden risks, and a practical hotel choice — transparent throughout.",
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
        { speaker: "Sam", text: "We've shared the car for a year and it's worked, but now we both need it Tuesday and Thursday mornings for the new jobs. That's the whole problem in one sentence." },
        { speaker: "Ellie", text: "It is. And before you suggest it — no, I'm not selling my half and taking the bus. I did the math and the bus adds ninety minutes a day." },
        { speaker: "Sam", text: "I wasn't going to say that. I was going to say one of us drives, drops the other at the train, and we split the difference in time, not just cost." },
        { speaker: "Ellie", text: "Huh. So whoever gets the car that day owes the other the favour back, not money." },
        { speaker: "Sam", text: "Right. Cash makes it feel transactional and someone always feels cheated. Time evens out because we both value the mornings equally." },
        { speaker: "Ellie", text: "Only if we actually track it. Last time we 'kept it casual' I ended up doing every airport run for six months." },
        { speaker: "Sam", text: "Fair hit. Let's put it in a shared note, then. Not a contract — just enough that neither of us can quietly forget." },
      ],
      transcript:
        "Sam and Ellie have shared a car for a year, but new jobs mean both need it Tuesday and Thursday mornings. Ellie rejects selling her half and taking the bus (it adds 90 minutes daily). Sam proposes one drives and drops the other at the train, settling in time owed rather than cash, since money feels transactional and breeds resentment while time evens out because they value mornings equally. Ellie agrees but insists on tracking it, recalling that 'keeping it casual' left her doing every airport run for six months. They agree to log it in a shared note — not a contract, just enough that neither can quietly forget.",
      questions: [
        {
          prompt: "What is the core problem?",
          options: [
            "The car has broken down.",
            "Both need the shared car on the same mornings for new jobs.",
            "Ellie wants to sell the car.",
            "The bus route has been cancelled.",
          ],
          correctIndex: 1,
          explanation:
            "Sam sums it up: they both need it 'Tuesday and Thursday mornings for the new jobs.'",
        },
        {
          prompt: "Why does Ellie reject taking the bus?",
          options: [
            "The bus is too expensive.",
            "It adds ninety minutes to her day.",
            "There is no nearby bus stop.",
            "She dislikes public transit generally.",
          ],
          correctIndex: 1,
          explanation:
            "She 'did the math and the bus adds ninety minutes a day.'",
        },
        {
          prompt: "What does Sam propose instead of splitting costs?",
          options: [
            "Selling the car and buying two.",
            "Settling in time owed rather than money.",
            "Each buying separate transit passes.",
            "Alternating weeks with the car.",
          ],
          correctIndex: 1,
          explanation:
            "He suggests they 'split the difference in time, not just cost' — favours returned, not cash.",
        },
        {
          prompt: "Why does Sam prefer time over cash?",
          options: [
            "Cash makes it feel transactional and someone feels cheated.",
            "They have no money to spare.",
            "Time is easier to measure than money.",
            "The bank charges fees on transfers.",
          ],
          correctIndex: 0,
          explanation:
            "He says cash 'makes it feel transactional and someone always feels cheated,' while time evens out.",
        },
        {
          prompt: "Why does Ellie insist on tracking the arrangement?",
          options: [
            "She wants a legal contract.",
            "Keeping it casual before left her doing every airport run for six months.",
            "She doesn't trust the shared note app.",
            "The employer requires documentation.",
          ],
          correctIndex: 1,
          explanation:
            "She recalls that when they 'kept it casual,' she did 'every airport run for six months.'",
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
        { speaker: "Resident", text: "I just moved to the neighbourhood and need a residential parking permit. What do I bring?" },
        { speaker: "Clerk", text: "Proof of address and vehicle registration. But here's the part that trips up newcomers: the address on your registration must already match your new address, or the permit's denied — we can't accept a lease as a stand-in for the registration." },
        { speaker: "Resident", text: "My registration still shows my old address. How long does it take to update?" },
        { speaker: "Clerk", text: "The registry usually turns it around in a week, but you can request an expedited change that's same-day for a small fee. Most people don't know that option exists." },
        { speaker: "Resident", text: "Okay. And once I have the permit, can I park anywhere on the street?" },
        { speaker: "Clerk", text: "Only within your zone — the letter on the permit. Cross into the next zone and you're ticketed, permit or not. And the permit doesn't override street-cleaning days; you still move the car those mornings." },
        { speaker: "Resident", text: "What about visitors?" },
        { speaker: "Clerk", text: "You get twenty visitor-day passes a year, printed or digital. They're capped at four consecutive days per visitor, so you can't park a relative's car all month on your allotment." },
        { speaker: "Resident", text: "And if I move within the same neighbourhood later?" },
        { speaker: "Clerk", text: "New permit required, even one street over, because zones don't follow you. People assume it transfers; it doesn't." },
      ],
      transcript:
        "For a residential parking permit, a new resident needs proof of address and vehicle registration — and the registration's address must already match the new address (a lease can't substitute). Updating the registration takes about a week, or same-day via an expedited change for a small fee. The permit is valid only within the zone lettered on it; crossing zones means a ticket, and it doesn't override street-cleaning days. Residents get 20 visitor-day passes a year, capped at four consecutive days per visitor. Moving within the neighbourhood, even one street over, requires a new permit because zones don't transfer.",
      questions: [
        {
          prompt: "What commonly trips up newcomers applying for the permit?",
          options: [
            "They forget their driver's license.",
            "Their registration address must already match the new address.",
            "They apply at the wrong office.",
            "They need two proofs of income.",
          ],
          correctIndex: 1,
          explanation:
            "The registration address 'must already match your new address, or the permit's denied' — a lease can't substitute.",
        },
        {
          prompt: "What option for updating registration do most people not know about?",
          options: [
            "A free online update.",
            "A same-day expedited change for a small fee.",
            "A mail-in form.",
            "A permanent address waiver.",
          ],
          correctIndex: 1,
          explanation:
            "There's an 'expedited change that's same-day for a small fee' most people don't know exists.",
        },
        {
          prompt: "Where can the resident park with the permit?",
          options: [
            "Anywhere on the street.",
            "Only within the zone lettered on the permit.",
            "Anywhere in the city.",
            "Only in front of their own home.",
          ],
          correctIndex: 1,
          explanation:
            "Parking is allowed 'only within your zone — the letter on the permit'; crossing zones means a ticket.",
        },
        {
          prompt: "What does the permit NOT override?",
          options: [
            "Parking meters downtown.",
            "Street-cleaning days.",
            "Overnight parking bans.",
            "Toll roads.",
          ],
          correctIndex: 1,
          explanation:
            "'The permit doesn't override street-cleaning days; you still move the car those mornings.'",
        },
        {
          prompt: "What is the limit on visitor passes?",
          options: [
            "Unlimited within the year.",
            "Twenty per year, capped at four consecutive days per visitor.",
            "Ten per year with no daily cap.",
            "Four per month regardless of visitor.",
          ],
          correctIndex: 1,
          explanation:
            "Residents get '20 visitor-day passes a year,' capped at 'four consecutive days per visitor.'",
        },
        {
          prompt: "What happens if the resident later moves one street over?",
          options: [
            "The permit transfers automatically.",
            "A new permit is required because zones don't transfer.",
            "The permit is upgraded for free.",
            "No permit is needed within the neighbourhood.",
          ],
          correctIndex: 1,
          explanation:
            "A new permit is 'required, even one street over, because zones don't follow you.'",
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
        { speaker: "Anchor", text: "Health officials are warning that a common infection is becoming harder to treat, but they're urging calm rather than alarm — a message that's proving hard to thread." },
        { speaker: "Reporter", text: "The bacterium behind many urinary infections is showing resistance to the first-choice antibiotic in nearly a third of cases locally, up from about a tenth five years ago. The drugs still work — just not the cheap, convenient one doctors reach for first." },
        { speaker: "Reporter", text: "The counterintuitive part is the cause. It isn't patients failing to finish their prescriptions, the usual villain. Researchers here trace most of the rise to over-prescription for infections that were never bacterial to begin with." },
        { speaker: "Anchor", text: "So the fix is fewer prescriptions, not more diligence from patients?" },
        { speaker: "Reporter", text: "Largely, yes — better diagnosis before prescribing. The health authority is rolling out a rapid test that tells a doctor within minutes whether an antibiotic will even help, which should cut needless use." },
        { speaker: "Reporter", text: "The catch is cost and habit. The test adds a few dollars per visit, and changing a prescribing reflex built over decades is, doctors admit, the harder half of the problem." },
      ],
      transcript:
        "Officials warn a common infection is getting harder to treat but urge calm. The bacterium behind many urinary infections now resists the first-choice antibiotic in nearly a third of local cases, up from about a tenth five years ago — the drugs still work, just not the cheapest, most convenient one. Counterintuitively, the main cause isn't patients failing to finish prescriptions but over-prescription for infections that were never bacterial. The fix is better diagnosis before prescribing; the authority is rolling out a rapid test that shows within minutes whether an antibiotic will help. The obstacles are the test's small added cost and the difficulty of changing decades-old prescribing habits.",
      questions: [
        {
          prompt: "What is the current level of resistance to the first-choice antibiotic?",
          options: [
            "About a tenth of cases.",
            "Nearly a third of cases, up from about a tenth five years ago.",
            "Nearly all cases.",
            "It has fallen to a tenth.",
          ],
          correctIndex: 1,
          explanation:
            "Resistance is in 'nearly a third of cases locally, up from about a tenth five years ago.'",
        },
        {
          prompt: "What does the reporter clarify about the drugs?",
          options: [
            "No antibiotics work anymore.",
            "The drugs still work — just not the cheap, convenient first choice.",
            "Only imported drugs work.",
            "The infection is now untreatable.",
          ],
          correctIndex: 1,
          explanation:
            "'The drugs still work — just not the cheap, convenient one doctors reach for first.'",
        },
        {
          prompt: "What is the counterintuitive cause of the rise?",
          options: [
            "Patients not finishing their prescriptions.",
            "Over-prescription for infections that were never bacterial.",
            "Contaminated water supplies.",
            "Overuse of hand sanitizer.",
          ],
          correctIndex: 1,
          explanation:
            "Researchers trace most of the rise to 'over-prescription for infections that were never bacterial to begin with,' not unfinished courses.",
        },
        {
          prompt: "What solution is the health authority rolling out?",
          options: [
            "A new, stronger antibiotic.",
            "A rapid test showing whether an antibiotic will help.",
            "A ban on the first-choice drug.",
            "Longer prescription courses.",
          ],
          correctIndex: 1,
          explanation:
            "A 'rapid test that tells a doctor within minutes whether an antibiotic will even help.'",
        },
        {
          prompt: "What obstacles to the solution are mentioned?",
          options: [
            "Lack of doctors and hospitals.",
            "The test's small added cost and hard-to-change prescribing habits.",
            "Patient refusal to be tested.",
            "A shortage of the rapid test kits.",
          ],
          correctIndex: 1,
          explanation:
            "The catch is 'cost and habit' — a few dollars per visit and changing a decades-old prescribing reflex.",
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
        { speaker: "Curator", text: "The ministry wants us to return the bronzes to their country of origin. I called this meeting because I don't think 'yes' or 'no' captures the real decision." },
        { speaker: "Historian", text: "I'd have thought it was straightforward. They were taken during a colonial raid. Return them." },
        { speaker: "Curator", text: "Morally I agree the acquisition was indefensible. But 'return' assumes a single obvious recipient, and there isn't one. The kingdom that made them no longer exists as a state; three modern institutions each claim to be the rightful heir." },
        { speaker: "Historian", text: "That's a reason to resolve the claim carefully, not a reason to keep them." },
        { speaker: "Curator", text: "Agreed — I'm not using it as a stalling tactic, though I can hear how it sounds. My worry is that if we hand them to the wrong claimant, we don't undo the original wrong; we just add a new one." },
        { speaker: "Conservator", text: "There's also the physical question no one's raised. Two of the bronzes are structurally fragile. A move without months of stabilization work could destroy exactly what everyone's fighting over." },
        { speaker: "Historian", text: "That I'll grant is real, though I'd want it documented independently, or 'too fragile to move' becomes a permanent excuse." },
        { speaker: "Curator", text: "That's a fair guard against bad faith, and I'd welcome it. So here's what I'm actually proposing: commit publicly to return, now, in principle — but make the transfer conditional on an agreed recipient and a conservation-cleared move." },
        { speaker: "Historian", text: "A commitment with conditions, rather than a vague 'someday.' I can support that, provided the conditions come with deadlines." },
        { speaker: "Curator", text: "Deadlines, yes. Open-ended conditions are just refusal wearing a nicer suit." },
      ],
      transcript:
        "A curator convenes a meeting on a ministry request to return colonial-era bronzes. The historian sees it as straightforward: they were looted, so return them. The curator agrees the acquisition was indefensible but notes 'return' assumes one obvious recipient, and three modern institutions each claim to be heir to the now-defunct kingdom; handing them to the wrong claimant would add a new wrong. The conservator raises that two bronzes are structurally fragile and could be destroyed by a move without months of stabilization. The historian accepts this but wants it independently documented so 'too fragile' can't become a permanent excuse. The curator proposes committing publicly to return in principle now, conditional on an agreed recipient and a conservation-cleared move; the historian supports it provided the conditions carry deadlines.",
      questions: [
        {
          prompt: "Why does the curator say 'yes or no' doesn't capture the decision?",
          options: [
            "Because the ministry hasn't decided yet.",
            "Because returning the bronzes raises questions of recipient and physical safety.",
            "Because the historian refuses to discuss it.",
            "Because the bronzes are not actually valuable.",
          ],
          correctIndex: 1,
          explanation:
            "The curator sees complications beyond a simple yes/no: who the rightful recipient is and whether a move is safe.",
        },
        {
          prompt: "What is the historian's initial position?",
          options: [
            "The bronzes should stay in the museum.",
            "They were looted in a colonial raid and should be returned.",
            "The claim should be ignored.",
            "The bronzes should be sold.",
          ],
          correctIndex: 1,
          explanation:
            "He says they 'were taken during a colonial raid. Return them.'",
        },
        {
          prompt: "What complicates the question of who should receive the bronzes?",
          options: [
            "The origin country refuses to accept them.",
            "The originating kingdom no longer exists and three institutions each claim to be heir.",
            "No one wants the bronzes.",
            "The ministry claims ownership.",
          ],
          correctIndex: 1,
          explanation:
            "The kingdom 'no longer exists as a state; three modern institutions each claim to be the rightful heir.'",
        },
        {
          prompt: "What is the curator's worry about handing them over hastily?",
          options: [
            "The museum would lose funding.",
            "Giving them to the wrong claimant would add a new wrong rather than undo the original.",
            "The historian would resign.",
            "The bronzes would be forgotten.",
          ],
          correctIndex: 1,
          explanation:
            "If handed 'to the wrong claimant,' they 'don't undo the original wrong; we just add a new one.'",
        },
        {
          prompt: "What physical concern does the conservator raise?",
          options: [
            "The bronzes are too heavy to lift.",
            "Two bronzes are fragile and a move without stabilization could destroy them.",
            "The bronzes are fakes.",
            "There is no suitable crate available.",
          ],
          correctIndex: 1,
          explanation:
            "Two are 'structurally fragile,' and a move without 'months of stabilization work could destroy' them.",
        },
        {
          prompt: "Why does the historian want the fragility independently documented?",
          options: [
            "To increase the museum's insurance payout.",
            "So 'too fragile to move' cannot become a permanent excuse.",
            "Because he doubts the conservator's expertise.",
            "To delay the return indefinitely.",
          ],
          correctIndex: 1,
          explanation:
            "He wants it documented independently or '\"too fragile to move\" becomes a permanent excuse.'",
        },
        {
          prompt: "What does the curator ultimately propose?",
          options: [
            "Refusing the return outright.",
            "A public commitment to return in principle, conditional on a recipient and a safe move.",
            "Selling the bronzes to fund conservation.",
            "Returning them immediately without conditions.",
          ],
          correctIndex: 1,
          explanation:
            "He proposes committing 'to return, now, in principle,' conditional on an agreed recipient and a conservation-cleared move.",
        },
        {
          prompt: "What condition does the historian attach to his support?",
          options: [
            "That the bronzes never leave the country.",
            "That the conditions come with deadlines.",
            "That the ministry pays for the move.",
            "That the museum keeps copies.",
          ],
          correctIndex: 1,
          explanation:
            "He supports it 'provided the conditions come with deadlines,' since open-ended conditions are 'refusal wearing a nicer suit.'",
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
        { speaker: "Speaker", text: "My company ran a four-day work week for a year, and everyone wants to know if it 'worked.' The honest answer is that it worked, and that's exactly why I'm cautious about the headlines." },
        { speaker: "Speaker", text: "Productivity held steady on four days — we produced about the same in thirty-two hours as in forty. That sounds like magic, but it wasn't. We got there by cutting meetings ruthlessly and killing low-value work we'd tolerated for years." },
        { speaker: "Speaker", text: "So here's my worry about the movement. Companies hear 'same output, fewer hours' and assume the day off caused the gain. It didn't. The discipline caused the gain; the day off was the reward that forced the discipline." },
        { speaker: "Speaker", text: "Which means a firm that adopts the four-day week without doing the painful pruning first will just compress five days of bloat into four and burn people out. The order matters. Fix the work, then shorten the week — not the reverse." },
        { speaker: "Speaker", text: "I'll also admit what didn't transfer well: client-facing teams struggled, because clients keep a five-day week whether you do or not. We ended up staggering their days off, which diluted the 'everyone's off Friday' simplicity people love." },
        { speaker: "Speaker", text: "So do I recommend it? Yes, but with an asterisk the size of a billboard. It's a forcing function for efficiency, not a gift you hand out. Treat it as the second, and it'll quietly punish you." },
      ],
      transcript:
        "The speaker's company ran a four-day week for a year; it 'worked,' which is why he's wary of the headlines. Productivity held steady — about the same output in 32 hours as in 40 — but not by magic: they cut meetings and killed low-value work. His worry is that companies assume the day off caused the gain, when the discipline did; the day off was the reward that forced the discipline. A firm adopting it without pruning first will just compress bloat into four days and burn people out — fix the work, then shorten the week. Client-facing teams struggled since clients keep five days, forcing staggered days off that diluted the simplicity. He recommends it 'with an asterisk the size of a billboard': it's a forcing function for efficiency, not a gift.",
      questions: [
        {
          prompt: "Why is the speaker cautious despite the four-day week 'working'?",
          options: [
            "It actually reduced productivity.",
            "He fears the headlines misattribute why it worked.",
            "His company reversed the policy.",
            "Employees disliked the extra day off.",
          ],
          correctIndex: 1,
          explanation:
            "It worked, but he's cautious 'about the headlines' because people misunderstand the cause.",
        },
        {
          prompt: "How did the company maintain productivity on four days?",
          options: [
            "By hiring more staff.",
            "By cutting meetings and eliminating low-value work.",
            "By extending each workday's hours.",
            "By outsourcing tasks overseas.",
          ],
          correctIndex: 1,
          explanation:
            "They got there 'by cutting meetings ruthlessly and killing low-value work.'",
        },
        {
          prompt: "What does the speaker say actually caused the productivity gain?",
          options: [
            "The extra day off itself.",
            "The discipline of pruning work; the day off merely forced it.",
            "New software tools.",
            "Increased salaries.",
          ],
          correctIndex: 1,
          explanation:
            "'The discipline caused the gain; the day off was the reward that forced the discipline.'",
        },
        {
          prompt: "What mistake does he warn other firms against?",
          options: [
            "Adopting the four-day week without pruning work first.",
            "Keeping the five-day week too long.",
            "Giving employees too many holidays.",
            "Hiring too quickly.",
          ],
          correctIndex: 0,
          explanation:
            "A firm that skips 'the painful pruning first will just compress five days of bloat into four and burn people out.'",
        },
        {
          prompt: "What part of the experiment 'didn't transfer well'?",
          options: [
            "The accounting department.",
            "Client-facing teams, because clients keep a five-day week.",
            "The manufacturing line.",
            "The software developers.",
          ],
          correctIndex: 1,
          explanation:
            "'Client-facing teams struggled, because clients keep a five-day week,' forcing staggered days off.",
        },
        {
          prompt: "What is the speaker's overall recommendation?",
          options: [
            "Avoid the four-day week entirely.",
            "Adopt it, but treat it as a forcing function for efficiency, not a gift.",
            "Adopt it immediately with no preparation.",
            "Only large companies should try it.",
          ],
          correctIndex: 1,
          explanation:
            "He recommends it 'with an asterisk' — it's 'a forcing function for efficiency, not a gift you hand out.'",
        },
      ],
    },
  ],
}
