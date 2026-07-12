import { LISTENING_BLUEPRINT } from "@/lib/mock-test/listening-blueprint"
import type { ListeningPracticeTest } from "./types"

export const listeningPracticeTest1: ListeningPracticeTest = {
  id: "hard-1",
  title: "Elite Listening Test 1",
  topic: "Insurance dispute, relocation, grant rules, water restrictions, urban density, museum funding",
  difficulty: "hard",
  description:
    "A hardest-tier full listening test. Fast, dense audio with hedged claims, concessions, and speaker positions that shift — engineered so even an examiner rarely exceeds CLB 6 on first listen.",
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
        "A policyholder phones an insurance adjuster after a burst pipe, and the two work out what will and will not be covered.",
      blueprint: LISTENING_BLUEPRINT.customerService,
      audioInstruction:
        "Listen to the conversation. You will hear it only once. It is about 90 seconds long.",
      script: [
        { speaker: "Adjuster", text: "Thanks for holding, Ms. Okafor. I have the plumber's report and your photographs, but before we talk about payment I need to separate two things: the damage caused by the water itself, and the cost of fixing the pipe that failed." },
        { speaker: "Okafor", text: "I assumed both would be covered. The whole thing started with the pipe." },
        { speaker: "Adjuster", text: "That's the common assumption, and it's where policies surprise people. We cover sudden, accidental water damage to your floors and walls. We don't cover repairing the component that broke if it broke through gradual wear — and the report describes corrosion consistent with age." },
        { speaker: "Okafor", text: "So because the pipe was old, I pay for the pipe, but you pay for the ruined floor?" },
        { speaker: "Adjuster", text: "Broadly, yes, provided the discharge was sudden. If the report had said the pipe had been weeping for weeks, we'd be having a harder conversation, because slow leaks are excluded entirely." },
        { speaker: "Okafor", text: "It wasn't weeping. My downstairs neighbour heard it burst on Sunday night, and I shut the main within minutes." },
        { speaker: "Adjuster", text: "That detail helps you more than you realize — it establishes suddenness and shows you acted to limit the loss, which the policy actually requires. What I can't do yet is confirm the floor figure, because your quote bundles the pipe and the flooring on one line." },
        { speaker: "Okafor", text: "I can ask the contractor to itemize it. Will the deductible come off the floor amount or the total?" },
        { speaker: "Adjuster", text: "Off the covered amount only — the flooring — never off the parts we aren't paying for. And one more thing: keep the failed section of pipe. If we can't inspect it later, I may have to treat the cause as unproven." },
        { speaker: "Okafor", text: "The plumber already hauled it away, but I can call him tonight." },
        { speaker: "Adjuster", text: "Do, today if you can. It's not fatal to the claim, but its absence shifts the burden onto you." },
      ],
      transcript:
        "An adjuster explains that sudden water damage to floors and walls is covered, but repairing a pipe that failed through age-related corrosion is not; slow leaks would be excluded entirely. Ms. Okafor's account of a sudden Sunday-night burst and her shutting off the main both help her, because they establish suddenness and show she mitigated the loss. The deductible applies only to the covered flooring amount, and she is urged to recover the discarded pipe section so the cause can be verified.",
      questions: [
        {
          prompt: "Why does the adjuster insist on separating 'two things' at the start?",
          options: [
            "Because the policy treats the water damage and the failed pipe under different rules.",
            "Because the photographs and the plumber's report contradict each other.",
            "Because Ms. Okafor filed two separate claims by mistake.",
            "Because the deductible must be paid before either item is discussed.",
          ],
          correctIndex: 0,
          explanation:
            "He distinguishes covered water damage from the uncovered cost of the worn component — the whole call turns on that distinction, not on any contradiction or duplicate claim.",
        },
        {
          prompt: "What does the adjuster imply when he calls Ms. Okafor's assumption 'where policies surprise people'?",
          options: [
            "That most customers eventually read their policies in full.",
            "That the coverage is narrower than customers instinctively expect.",
            "That her particular policy is unusually generous.",
            "That the surprise works in the customer's favour more often than not.",
          ],
          correctIndex: 1,
          explanation:
            "He is softening the news that the pipe repair is excluded — the 'surprise' is that coverage is narrower than the natural assumption, not broader.",
        },
        {
          prompt: "The corrosion noted in the report matters because it determines whether the claim involves —",
          options: [
            "a sudden accident or gradual wear.",
            "the policyholder or the neighbour.",
            "the floor or the walls.",
            "a deductible or a full payout.",
          ],
          correctIndex: 0,
          explanation:
            "Corrosion 'consistent with age' points to gradual wear, which is why the pipe itself is not covered even though the resulting sudden water damage is.",
        },
        {
          prompt: "Why does the adjuster say the burst being heard on Sunday night 'helps you more than you realize'?",
          options: [
            "It proves the neighbour is a reliable witness.",
            "It means the insurer will waive the deductible.",
            "It establishes suddenness and shows she acted to limit the damage.",
            "It confirms the pipe was replaced with a newer model.",
          ],
          correctIndex: 2,
          explanation:
            "A sudden burst supports the 'sudden and accidental' requirement, and shutting the main quickly satisfies the policy's duty to mitigate — two things that strengthen her claim.",
        },
        {
          prompt: "What is the consequence of a leak that had been 'weeping for weeks'?",
          options: [
            "The floor would be covered but the pipe would not.",
            "The entire claim would be excluded.",
            "Only the deductible would change.",
            "The insurer would still pay but at a reduced rate.",
          ],
          correctIndex: 1,
          explanation:
            "He states that slow leaks are 'excluded entirely,' meaning even the water damage would not be paid — a harsher outcome than the age-corrosion situation.",
        },
        {
          prompt: "How will the deductible be applied?",
          options: [
            "To the combined total of pipe and flooring.",
            "To whichever amount is larger.",
            "To the flooring amount only.",
            "It is waived because she mitigated the loss.",
          ],
          correctIndex: 2,
          explanation:
            "He says it comes off 'the covered amount only — the flooring — never off the parts we aren't paying for.'",
        },
        {
          prompt: "Why does the adjuster ask her to keep the failed section of pipe?",
          options: [
            "To prove she paid for the replacement herself.",
            "So the cause of failure can be independently verified.",
            "Because the plumber's report is missing.",
            "To calculate the age of the plumbing for a discount.",
          ],
          correctIndex: 1,
          explanation:
            "He wants the ability to inspect it; without it, he 'may have to treat the cause as unproven,' shifting the burden onto her.",
        },
        {
          prompt: "What is the adjuster's overall stance toward Ms. Okafor in the call?",
          options: [
            "Skeptical, treating her account as likely exaggerated.",
            "Cooperative but bound by rules he must apply consistently.",
            "Indifferent, since the outcome is already decided.",
            "Apologetic, hinting the exclusion may be reversed later.",
          ],
          correctIndex: 1,
          explanation:
            "He repeatedly points out details that help her and explains how to strengthen the claim, yet he cannot override the policy's exclusions — cooperative within firm limits.",
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
        { speaker: "Devin", text: "So, are you actually taking the job in Halifax, or still weighing it?" },
        { speaker: "Priya", text: "I keep flipping. The salary's barely higher once you factor rent, but the role itself is exactly what I said I wanted two years ago." },
        { speaker: "Devin", text: "Two years ago you also said you never wanted to leave your parents this far behind." },
        { speaker: "Priya", text: "I know, and that hasn't changed. What's changed is that staying here now feels like standing still, and I can't tell if that's a real reason or just restlessness dressed up as ambition." },
        { speaker: "Devin", text: "Would you regret not going, or regret going?" },
        { speaker: "Priya", text: "That's the trap, isn't it. I think I'd regret not going more, but only because 'not going' is the option I can picture too clearly. The other one's a blank." },
        { speaker: "Devin", text: "For what it's worth, you light up talking about the work and go flat talking about the move. That tells me something." },
        { speaker: "Priya", text: "It tells you I want the job and not the relocation, which unfortunately don't come separately." },
        { speaker: "Devin", text: "Then maybe negotiate a remote arrangement for the first six months before you rule it out." },
        { speaker: "Priya", text: "I hadn't even asked. I assumed it was all or nothing." },
      ],
      transcript:
        "Priya is torn about a job in Halifax: the pay is barely better after rent, but the role is what she once wanted. She worries her urge to leave is 'restlessness dressed up as ambition,' and admits she can picture staying but not leaving. Devin observes she brightens about the work but not the move, and suggests she ask about a remote arrangement — an option she had never considered, having assumed it was all or nothing.",
      questions: [
        {
          prompt: "What best captures Priya's central dilemma?",
          options: [
            "She wants the role but not the relocation that comes with it.",
            "She cannot afford the move on the salary offered.",
            "She has already promised her parents she will stay.",
            "She dislikes the work but likes the city.",
          ],
          correctIndex: 0,
          explanation:
            "She explicitly says she wants the job and not the relocation, 'which unfortunately don't come separately.'",
        },
        {
          prompt: "What does Priya mean by 'restlessness dressed up as ambition'?",
          options: [
            "That her ambition is stronger than her restlessness.",
            "That she may be mistaking mere boredom for a genuine career motive.",
            "That her parents see her as overly ambitious.",
            "That the job is beneath her level of ambition.",
          ],
          correctIndex: 1,
          explanation:
            "She is questioning whether her reason to leave is a real motive or just boredom disguising itself as ambition.",
        },
        {
          prompt: "Why does Priya call the regret question 'the trap'?",
          options: [
            "Because Devin keeps changing the question.",
            "Because both choices would lead to equal regret.",
            "Because she can vividly imagine staying but not leaving, which skews the comparison.",
            "Because she has already decided and resents being asked.",
          ],
          correctIndex: 2,
          explanation:
            "She notes she'd 'regret not going more,' but only because staying is easy to picture while leaving is 'a blank' — an unfair basis for comparison.",
        },
        {
          prompt: "What does Devin infer from how Priya talks about the work versus the move?",
          options: [
            "That she is more suited to the city than the role.",
            "That her enthusiasm points to the job, not the relocation.",
            "That she has secretly already declined the offer.",
            "That she is exaggerating her interest in the work.",
          ],
          correctIndex: 1,
          explanation:
            "He says she 'lights up' about the work and 'goes flat' about the move, reading that as a sign of where her genuine interest lies.",
        },
        {
          prompt: "What does Priya's final line reveal?",
          options: [
            "She had wrongly assumed a compromise was impossible.",
            "She intends to decline the offer immediately.",
            "She has already requested a remote arrangement.",
            "She resents Devin's suggestion.",
          ],
          correctIndex: 0,
          explanation:
            "She admits she 'hadn't even asked' and 'assumed it was all or nothing' — she had never considered the middle option Devin raised.",
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
        { speaker: "Applicant", text: "I'd like to apply for the small-business energy grant. A friend said it covers new equipment." },
        { speaker: "Officer", text: "Partly. The grant reimburses efficiency upgrades — insulation, heat pumps, LED retrofits — but only equipment that replaces something less efficient. Buying a first-ever appliance for a new fit-out doesn't qualify." },
        { speaker: "Applicant", text: "So if I swap my old gas heater for a heat pump, that counts, but a brand-new second heater wouldn't?" },
        { speaker: "Officer", text: "Exactly. And you claim after installation, not before. We reimburse up to sixty percent of the invoice, capped at eight thousand dollars per site, per year." },
        { speaker: "Applicant", text: "Per site — I have two locations. Does that mean sixteen thousand total?" },
        { speaker: "Officer", text: "In principle, but each site needs its own energy audit first, and the audit itself is only reimbursed if you go on to complete at least one upgrade at that site. Audit without an upgrade, you eat the cost." },
        { speaker: "Applicant", text: "How long does approval take?" },
        { speaker: "Officer", text: "The pre-approval is quick — about two weeks. The reimbursement, though, is released only after we receive the paid invoice and a verification photo, and that payment runs on a quarterly cycle, so timing matters if your cash flow is tight." },
        { speaker: "Applicant", text: "And if the contractor isn't on your registered list?" },
        { speaker: "Officer", text: "Then the work is ineligible, full stop. People lose the whole claim on that one detail more than any other, so check the registry before you sign anything." },
      ],
      transcript:
        "The grant reimburses efficiency upgrades that replace less-efficient equipment — not first-time purchases — at up to 60% of the invoice, capped at $8,000 per site per year. With two sites, $16,000 is possible, but each needs its own energy audit, and the audit is reimbursed only if at least one upgrade follows. Pre-approval takes about two weeks; reimbursement comes only after a paid invoice and verification photo, paid on a quarterly cycle. Using a contractor not on the registered list voids the entire claim — the most common cause of lost claims.",
      questions: [
        {
          prompt: "Which purchase would qualify for the grant?",
          options: [
            "A first-ever heater installed in a brand-new fit-out.",
            "A heat pump replacing an older gas heater.",
            "A second heater added for extra capacity.",
            "Any new appliance bought within the calendar year.",
          ],
          correctIndex: 1,
          explanation:
            "Only equipment that replaces something less efficient qualifies; the heat-pump-for-gas-heater swap is the officer's own example of an eligible upgrade.",
        },
        {
          prompt: "What is the reimbursement structure?",
          options: [
            "Sixty percent of the invoice, capped at $8,000 per site per year.",
            "A flat $8,000 regardless of invoice size.",
            "One hundred percent up to $8,000 total.",
            "Sixty percent with no upper limit.",
          ],
          correctIndex: 0,
          explanation:
            "He states 'up to sixty percent of the invoice, capped at eight thousand dollars per site, per year.'",
        },
        {
          prompt: "Under what condition is a site's energy audit reimbursed?",
          options: [
            "Whenever the audit is completed, regardless of outcome.",
            "Only if at least one upgrade is completed at that site.",
            "Only if both of the applicant's sites are audited.",
            "Only if the audit is done before pre-approval.",
          ],
          correctIndex: 1,
          explanation:
            "The audit 'is only reimbursed if you go on to complete at least one upgrade at that site.'",
        },
        {
          prompt: "Why does the officer mention the quarterly payment cycle?",
          options: [
            "To explain why pre-approval is slow.",
            "To warn that reimbursement timing may strain tight cash flow.",
            "To note that claims can only be filed four times a year.",
            "To indicate the grant expires after one quarter.",
          ],
          correctIndex: 1,
          explanation:
            "He links the quarterly release to cash flow — 'timing matters if your cash flow is tight' — since money arrives only after invoice and photo, on that cycle.",
        },
        {
          prompt: "What most often causes applicants to lose their entire claim?",
          options: [
            "Missing the two-week pre-approval window.",
            "Failing to submit a verification photo.",
            "Using a contractor who is not on the registered list.",
            "Exceeding the $8,000 per-site cap.",
          ],
          correctIndex: 2,
          explanation:
            "He says people lose the whole claim over an unregistered contractor 'more than any other' detail.",
        },
        {
          prompt: "What can be correctly concluded about the two-site applicant?",
          options: [
            "They are guaranteed $16,000 once approved.",
            "They may reach $16,000, but only by auditing and upgrading each site.",
            "They must choose only one site to claim for.",
            "They can claim $16,000 before any installation.",
          ],
          correctIndex: 1,
          explanation:
            "$16,000 is possible 'in principle,' but each site needs its own audit plus at least one completed upgrade, and claims come only after installation.",
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
        { speaker: "Anchor", text: "The regional water authority has announced stage-two restrictions beginning Monday, a month earlier than in any previous year. Outdoor watering will be limited to two mornings a week, and decorative fountains must be shut off entirely." },
        { speaker: "Anchor", text: "Officials were careful to frame the move as precautionary rather than a response to immediate shortage. Reservoir levels, they noted, are actually slightly above the ten-year average — but the snowpack that feeds them is well below it, and it is the snowpack, not today's reservoir, that determines late-summer supply." },
        { speaker: "Anchor", text: "The authority also introduced a tiered pricing change: households staying under a monthly baseline will see rates fall, while heavy users face steep increases. A spokesperson stressed that the goal is behavioural, not revenue: 'If we collect less because people use less, that is success, not failure.'" },
        { speaker: "Anchor", text: "Critics from the agricultural sector argue that residential restrictions are largely symbolic when farms account for the majority of regional use, and that exempting them undercuts the message. The authority responded that farm allocations are being reviewed separately and that changes there would come with longer notice to protect crops already in the ground." },
      ],
      transcript:
        "Stage-two water restrictions start Monday, a month earlier than ever, limiting outdoor watering to two mornings weekly and shutting decorative fountains. Officials call it precautionary: reservoirs are slightly above the ten-year average, but the snowpack that feeds them is well below it, and snowpack determines late-summer supply. Tiered pricing will lower rates for low users and raise them sharply for heavy users, with the stated aim of changing behaviour, not raising revenue. Agricultural critics call residential limits symbolic since farms use the most water; the authority says farm allocations are being reviewed separately with longer notice.",
      questions: [
        {
          prompt: "Why does the authority describe the restrictions as 'precautionary'?",
          options: [
            "Because reservoirs have already fallen below safe levels.",
            "Because current supply is adequate but the snowpack signals future risk.",
            "Because the restrictions are voluntary this year.",
            "Because previous years' restrictions failed.",
          ],
          correctIndex: 1,
          explanation:
            "Reservoirs are above the ten-year average now, but the below-average snowpack — which governs late-summer supply — is the reason for acting early.",
        },
        {
          prompt: "What is the apparent contradiction the report resolves?",
          options: [
            "Reservoirs are high, yet restrictions are being imposed.",
            "Fountains are banned, yet lawns may still be watered daily.",
            "Prices are rising, yet usage is expected to rise too.",
            "Farms are restricted, yet households are exempt.",
          ],
          correctIndex: 0,
          explanation:
            "The puzzle is that reservoirs are slightly above average while restrictions tighten; it's resolved by noting snowpack, not present reservoir level, sets future supply.",
        },
        {
          prompt: "What does the spokesperson's quote reveal about the pricing change?",
          options: [
            "The authority expects and welcomes falling revenue if usage drops.",
            "The main purpose is to increase the authority's income.",
            "Rates will rise for every household regardless of use.",
            "The tiers will be abolished if revenue falls.",
          ],
          correctIndex: 0,
          explanation:
            "'If we collect less because people use less, that is success, not failure' shows the aim is behavioural, with lower revenue an acceptable result.",
        },
        {
          prompt: "What is the agricultural sector's main criticism?",
          options: [
            "That farms are being restricted too harshly.",
            "That residential limits are symbolic while farms use most of the water.",
            "That tiered pricing will bankrupt small farms.",
            "That the snowpack data is inaccurate.",
          ],
          correctIndex: 1,
          explanation:
            "Critics argue residential restrictions are 'largely symbolic' because farms account for the majority of use, so exempting them undercuts the message.",
        },
        {
          prompt: "Why does the authority say farm allocations will change with longer notice?",
          options: [
            "To give farms time to lobby against the changes.",
            "To protect crops already planted.",
            "Because farm data has not yet been collected.",
            "Because farms are exempt from all restrictions.",
          ],
          correctIndex: 1,
          explanation:
            "Longer notice is 'to protect crops already in the ground,' i.e., to avoid harming plantings mid-season.",
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
      blueprint: LISTENING_BLUEPRINT.campusDiscussion,
      audioInstruction:
        "Listen to the discussion. You will hear it only once. It is about 2 minutes long.",
      script: [
        { speaker: "Host", text: "Tonight: should cities keep building upward to house more people, or does density have limits we're ignoring? Lena, you plan neighbourhoods for a living." },
        { speaker: "Lena", text: "I do, and I'll start with a caveat: density isn't a single lever. A tower with no transit, no daycare, and no grocery is just vertical sprawl. Done well, though, density is the only tool that lowers per-person emissions and housing cost at the same time." },
        { speaker: "Marcus", text: "That 'done well' is doing a lot of work, Lena. In practice we get the towers and not the daycare, because the tower is profitable and the daycare isn't. So residents get the costs of density without the benefits." },
        { speaker: "Lena", text: "I won't pretend that's rare. But the fix isn't less density — it's binding the approvals together, so you can't get the tower approved without the amenities funded." },
        { speaker: "Host", text: "Aisha, you've studied how residents actually experience these buildings." },
        { speaker: "Aisha", text: "And what I find complicates both of you. People tolerate remarkable density if they have control over their immediate environment — a quiet unit, a bit of green, a say in the building. They rebel against density that's imposed, even when it's objectively well-designed." },
        { speaker: "Marcus", text: "So it's not the height, it's the powerlessness." },
        { speaker: "Aisha", text: "Largely, yes. Which means Lena's 'done well' has to include process, not just physical design. A perfect building people had no voice in still breeds resentment." },
        { speaker: "Lena", text: "I'd accept that. Though I'd warn that endless consultation is how good projects die — there's a point where 'having a say' becomes 'having a veto.'" },
        { speaker: "Marcus", text: "And that's exactly where I'd push back on you, because the veto usually protects people already housed at the expense of those who aren't." },
        { speaker: "Aisha", text: "Both true, and that's the tension: the people in the room are rarely the people who'd move in." },
        { speaker: "Host", text: "So no clean answer tonight — density works, but only with amenities, genuine voice, and a process that doesn't let the housed lock out the unhoused." },
      ],
      transcript:
        "A host and three speakers debate urban density. Lena argues density, done well, uniquely lowers both emissions and housing cost, but 'done well' means binding tower approvals to funded amenities. Marcus counters that in practice developers build the profitable towers without the daycare, so residents bear density's costs without its benefits. Aisha adds that people tolerate high density when they have control and a voice but rebel against imposed density even if well-designed, so process matters as much as design. Lena warns that endless consultation lets 'a say' become 'a veto'; Marcus notes vetoes protect the already-housed over the unhoused; Aisha frames the tension that those in the room are rarely the future residents.",
      questions: [
        {
          prompt: "What is Lena's core position?",
          options: [
            "Density should be limited because its costs outweigh its benefits.",
            "Density, if paired with amenities, uniquely reduces emissions and cost together.",
            "Towers should be built wherever they are most profitable.",
            "Transit matters more than housing density.",
          ],
          correctIndex: 1,
          explanation:
            "She calls density 'the only tool that lowers per-person emissions and housing cost at the same time,' conditioned on being 'done well.'",
        },
        {
          prompt: "Why does Marcus say Lena's phrase 'done well' is 'doing a lot of work'?",
          options: [
            "Because it hides how rarely the ideal is actually achieved.",
            "Because he thinks density is never done well.",
            "Because Lena repeats it too often.",
            "Because it refers to construction quality specifically.",
          ],
          correctIndex: 0,
          explanation:
            "He argues that in reality towers get built without amenities, so 'done well' papers over a gap between theory and practice.",
        },
        {
          prompt: "What solution does Lena propose to Marcus's objection?",
          options: [
            "Building fewer, shorter towers.",
            "Letting the market decide which amenities to include.",
            "Binding approvals so a tower cannot proceed without funded amenities.",
            "Banning residential towers without transit.",
          ],
          correctIndex: 2,
          explanation:
            "She says the fix is 'binding the approvals together, so you can't get the tower approved without the amenities funded.'",
        },
        {
          prompt: "What does Aisha's research add to the debate?",
          options: [
            "That building height is the strongest predictor of resident satisfaction.",
            "That residents accept density when they have control and a voice.",
            "That well-designed buildings are always welcomed.",
            "That density should be capped at a fixed number of storeys.",
          ],
          correctIndex: 1,
          explanation:
            "She finds people 'tolerate remarkable density if they have control' but 'rebel against density that's imposed,' even when well-designed.",
        },
        {
          prompt: "When Marcus says 'it's not the height, it's the powerlessness,' he is —",
          options: [
            "disagreeing with Aisha's findings.",
            "summarizing Aisha's point in his own words.",
            "returning to his argument about developer profit.",
            "conceding that height does not matter to anyone.",
          ],
          correctIndex: 1,
          explanation:
            "He restates Aisha's claim that the objection is to imposition/lack of control rather than to density itself.",
        },
        {
          prompt: "What is Lena's warning about resident 'voice'?",
          options: [
            "That consultation always improves projects.",
            "That too much consultation can turn a say into an effective veto.",
            "That residents should have no role in approvals.",
            "That process matters more than design.",
          ],
          correctIndex: 1,
          explanation:
            "She cautions that 'endless consultation is how good projects die' when 'having a say' becomes 'having a veto.'",
        },
        {
          prompt: "How does Marcus respond to Lena's warning about vetoes?",
          options: [
            "He agrees consultation should be minimized.",
            "He argues vetoes tend to protect the already-housed over the unhoused.",
            "He says vetoes rarely affect real projects.",
            "He withdraws his earlier criticism of developers.",
          ],
          correctIndex: 1,
          explanation:
            "He pushes back that 'the veto usually protects people already housed at the expense of those who aren't.'",
        },
        {
          prompt: "What tension does Aisha identify at the end?",
          options: [
            "That developers and planners never agree.",
            "That the people consulted are rarely the people who would move in.",
            "That green space and density cannot coexist.",
            "That emissions and cost cannot both fall.",
          ],
          correctIndex: 1,
          explanation:
            "She notes 'the people in the room are rarely the people who'd move in,' capturing who holds voice versus who bears the need.",
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
        { speaker: "Speaker", text: "The debate over whether public museums should charge admission is usually framed as access versus funding, but that framing is too tidy, and it hides the more interesting disagreement underneath." },
        { speaker: "Speaker", text: "The access argument is intuitive: free entry removes a barrier, and museums hold a shared inheritance no one should be priced out of. Evidence broadly supports this — free admission does raise total visits. But raise them among whom? Studies repeatedly show the additional visitors skew toward those who were already frequent gallery-goers. In other words, free entry rewards the enthusiast more than it recruits the newcomer." },
        { speaker: "Speaker", text: "Defenders of charging seize on this: if free entry mostly subsidizes the comfortable, a modest fee with targeted free days may distribute public money more fairly. It's a serious point. Yet it assumes the fee itself doesn't deter the very newcomers we hoped to reach — and the deterrent effect of a price is rarely linear. For some, three dollars and thirty dollars are psychologically identical: both mean 'not for me.'" },
        { speaker: "Speaker", text: "So the honest position is uncomfortable. Free admission is a blunt instrument that helps the wrong people efficiently; charging is a sharper instrument that risks missing the right people entirely. Neither the access camp nor the funding camp likes hearing that its preferred tool is imprecise." },
        { speaker: "Speaker", text: "The most persuasive research points elsewhere. What actually recruits newcomers is not price at all, but relevance and invitation — programming that speaks to communities who never saw themselves reflected on the walls. A museum that is free but alienating stays empty of the people it claims to want; a museum that charges but reaches out can fill with them. Price, in the end, is the argument we have because it is the easiest to measure, not because it is the one that matters most." },
      ],
      transcript:
        "The speaker argues the 'access versus funding' framing of museum admission is too tidy. Free entry does raise visits, but mostly among already-frequent visitors, so it rewards enthusiasts more than it recruits newcomers. Charging with targeted free days could distribute public money more fairly, but a price may deter the very newcomers hoped for, and price deterrence isn't linear — for some, any fee means 'not for me.' The honest view: free admission efficiently helps the wrong people, while charging risks missing the right ones. The strongest research says what recruits newcomers is relevance and invitation, not price; price dominates the debate mainly because it is easiest to measure.",
      questions: [
        {
          prompt: "What is the speaker's main criticism of the usual framing?",
          options: [
            "That it exaggerates how much museums cost to run.",
            "That 'access versus funding' is too tidy and hides a deeper disagreement.",
            "That it ignores the views of museum staff.",
            "That it focuses only on large national museums.",
          ],
          correctIndex: 1,
          explanation:
            "The opening states the framing 'is too tidy, and it hides the more interesting disagreement underneath.'",
        },
        {
          prompt: "What does the evidence on free admission actually show?",
          options: [
            "It fails to raise total visits.",
            "It raises visits mainly among people who already visited often.",
            "It recruits large numbers of first-time visitors.",
            "It has no measurable effect on any group.",
          ],
          correctIndex: 1,
          explanation:
            "Studies show the extra visitors 'skew toward those who were already frequent gallery-goers' — it 'rewards the enthusiast more than it recruits the newcomer.'",
        },
        {
          prompt: "Why does the speaker say the deterrent effect of a price is 'rarely linear'?",
          options: [
            "Because higher prices always deter proportionally more people.",
            "Because for some people any fee at all signals 'not for me,' regardless of amount.",
            "Because prices only deter wealthy visitors.",
            "Because free days eliminate all deterrence.",
          ],
          correctIndex: 1,
          explanation:
            "He says 'three dollars and thirty dollars are psychologically identical' for some — both mean exclusion — so the effect isn't proportional to price.",
        },
        {
          prompt: "What does the speaker mean by calling free admission 'a blunt instrument'?",
          options: [
            "That it efficiently benefits people who least need the help.",
            "That it is too expensive for museums to sustain.",
            "That it precisely targets newcomers.",
            "That it damages museum collections over time.",
          ],
          correctIndex: 0,
          explanation:
            "Free admission 'helps the wrong people efficiently' — it works, but on the already-comfortable rather than the intended newcomers.",
        },
        {
          prompt: "According to the strongest research cited, what actually recruits newcomers?",
          options: [
            "Lower prices and more free days.",
            "Relevance and invitation through programming that reflects communities.",
            "Longer opening hours.",
            "Larger and more famous collections.",
          ],
          correctIndex: 1,
          explanation:
            "He says what recruits newcomers is 'not price at all, but relevance and invitation' — programming that speaks to overlooked communities.",
        },
        {
          prompt: "What is the speaker's final claim about why price dominates the debate?",
          options: [
            "Because price is the factor that matters most.",
            "Because museums refuse to discuss programming.",
            "Because price is simply the easiest thing to measure.",
            "Because free admission has been proven to fail.",
          ],
          correctIndex: 2,
          explanation:
            "He concludes price is 'the argument we have because it is the easiest to measure, not because it is the one that matters most.'",
        },
      ],
    },
  ],
}
