import type { ReadingPracticeTest } from './types'

/**
 * CELPIP Reading Part 1 — Reading Correspondence.
 * Each test presents a personal or professional message followed by questions
 * about its content and the best wording to complete a reply.
 */
export const part1Tests: ReadingPracticeTest[] = [
  {
    id: 'r1-01',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'A Message from an Old Colleague',
    topic: 'Reconnecting with a former co-worker',
    difficulty: 'easy',
    instruction:
      'Read the following message from a former colleague. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Hi Priya,',
      'It has been far too long! I was going through some old photos from the marketing team and realised we have not spoken since I left Brightway Media almost three years ago. I hope everything is going well for you and that the new office downtown is treating you kindly.',
      'I am writing because I have finally started the small design studio we always talked about over lunch. It is just me and two others for now, but we already have a handful of loyal clients. I would love to hear your honest advice, since you always had a sharp eye for what makes a brand memorable.',
      'If you are free, could we meet for coffee next Saturday? I am flexible in the afternoon. No pressure at all if your weekend is busy — even a quick phone call would make my week.',
      'Warmly, Daniel',
    ],
    questions: [
      {
        prompt: 'Why has Daniel decided to contact Priya now?',
        options: [
          'He saw old photos and realised how long it had been since they talked.',
          'He wants to return to his job at Brightway Media.',
          'He needs Priya to introduce him to new clients.',
          'He is moving to the downtown office where she works.',
        ],
        correctIndex: 0,
        explanation:
          'Daniel says he was "going through some old photos" and noticed they had not spoken in almost three years, which prompted him to write.',
      },
      {
        prompt: 'What has Daniel recently done?',
        options: [
          'Started his own design studio.',
          'Retired from the marketing industry.',
          'Been promoted at Brightway Media.',
          'Moved to a different city.',
        ],
        correctIndex: 0,
        explanation:
          'He writes that he has "finally started the small design studio we always talked about."',
      },
      {
        prompt: 'What does Daniel value about Priya?',
        options: [
          'Her sharp eye for what makes a brand memorable.',
          'Her ability to manage large budgets.',
          'Her connections with photographers.',
          'Her experience running a studio.',
        ],
        correctIndex: 0,
        explanation:
          'He says she "always had a sharp eye for what makes a brand memorable" and wants her advice.',
      },
      {
        prompt: 'How does Daniel describe his availability?',
        options: [
          'He is flexible on Saturday afternoon.',
          'He can only meet on weekday mornings.',
          'He is busy for the next several weeks.',
          'He can meet at any time on Sunday.',
        ],
        correctIndex: 0,
        explanation:
          'He asks to meet "next Saturday" and adds that he is "flexible in the afternoon."',
      },
      {
        prompt:
          'Priya is writing a reply. Choose the best word: "It was such a _____ surprise to hear from you after all this time."',
        options: ['pleasant', 'strict', 'financial', 'temporary'],
        correctIndex: 0,
        explanation:
          '"Pleasant" fits the warm, friendly tone of reconnecting with an old colleague; the other words do not match the emotion of a happy surprise.',
      },
      {
        prompt:
          'Complete Priya\'s reply: "I would be _____ to meet on Saturday and hear all about the new studio."',
        options: ['delighted', 'reluctant', 'confused', 'disappointed'],
        correctIndex: 0,
        explanation:
          '"Delighted" matches her positive response to his invitation; the other choices express unwillingness or negative feelings.',
      },
    ],
  },
  {
    id: 'r1-02',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'A Note About a Delayed Order',
    topic: 'Customer service email about a shipping delay',
    difficulty: 'medium',
    instruction:
      'Read the following email from an online store. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Dear Ms. Okafor,',
      'Thank you for your recent order of the walnut bookshelf (Order #48213). We are writing to let you know that your delivery will be delayed by approximately one week due to a shortage of materials at our supplier.',
      'We understand how frustrating this can be, especially since you selected express shipping. As an apology, we have refunded your shipping fee and added a fifteen percent discount code to your account for a future purchase.',
      'Your bookshelf is now expected to arrive on the 24th of this month. You will receive a tracking number by email as soon as it leaves our warehouse. If this new date does not work for you, simply reply to this message and we will arrange a full refund with no questions asked.',
      'Sincerely, The Maplewood Furniture Team',
    ],
    questions: [
      {
        prompt: 'What is the main purpose of this email?',
        options: [
          'To inform the customer that her order will be delayed.',
          'To confirm that the order has been delivered.',
          'To ask the customer to choose a different product.',
          'To advertise a new range of bookshelves.',
        ],
        correctIndex: 0,
        explanation:
          'The email states the delivery "will be delayed by approximately one week."',
      },
      {
        prompt: 'Why is the order delayed?',
        options: [
          'A shortage of materials at the supplier.',
          'A mistake in the customer’s address.',
          'A problem with the customer’s payment.',
          'Bad weather affecting the couriers.',
        ],
        correctIndex: 0,
        explanation:
          'The delay is caused by "a shortage of materials at our supplier."',
      },
      {
        prompt: 'What has the company done to apologise?',
        options: [
          'Refunded the shipping fee and given a discount code.',
          'Sent a second bookshelf for free.',
          'Upgraded the customer to a premium account.',
          'Offered a gift card worth the full order value.',
        ],
        correctIndex: 0,
        explanation:
          'They "refunded your shipping fee and added a fifteen percent discount code."',
      },
      {
        prompt: 'What can the customer do if the new date does not suit her?',
        options: [
          'Reply to the message to arrange a full refund.',
          'Visit the store in person to collect the item.',
          'Wait for a phone call from the manager.',
          'Cancel the order through the courier company.',
        ],
        correctIndex: 0,
        explanation:
          'The email says to "simply reply to this message and we will arrange a full refund."',
      },
      {
        prompt:
          'Ms. Okafor replies. Choose the best word: "Thank you for letting me know so _____; I appreciate the honesty."',
        options: ['promptly', 'rarely', 'loudly', 'carelessly'],
        correctIndex: 0,
        explanation:
          '"Promptly" praises the company for informing her quickly, which fits the appreciative tone.',
      },
      {
        prompt:
          'Complete the reply: "The new delivery date is _____ for me, so please go ahead as planned."',
        options: ['acceptable', 'impossible', 'expensive', 'temporary'],
        correctIndex: 0,
        explanation:
          '"Acceptable" signals she agrees to the new date and wants the order to continue.',
      },
    ],
  },
  {
    id: 'r1-03',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'An Invitation to a Neighbourhood Event',
    topic: 'Community street party invitation',
    difficulty: 'easy',
    instruction:
      'Read the following invitation from a neighbour. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Hello everyone on Cedar Lane,',
      'My name is Grace, and I recently moved into the blue house at number 14. To get to know all of you, I would like to organise a small street party on the last Sunday of the month, starting at noon.',
      'The idea is simple: each family brings one dish to share, and I will provide tables, chairs, and plenty of lemonade. If the weather turns bad, we can move everything into my garage, which is surprisingly large.',
      'I am also hoping a few people might help set up beforehand. If you can lend a hand, or if you play an instrument and would not mind providing some music, please drop a note in my mailbox. I cannot wait to meet you all!',
      'Cheers, Grace',
    ],
    questions: [
      {
        prompt: 'Why is Grace organising the street party?',
        options: [
          'To get to know her new neighbours.',
          'To raise money for a local charity.',
          'To celebrate a national holiday.',
          'To sell items from her old house.',
        ],
        correctIndex: 0,
        explanation:
          'Grace says the party is a way "to get to know all of you" after moving in.',
      },
      {
        prompt: 'What are families asked to bring?',
        options: [
          'One dish to share.',
          'Their own tables and chairs.',
          'A small entry fee.',
          'Drinks for everyone.',
        ],
        correctIndex: 0,
        explanation:
          'Each family is asked to bring "one dish to share," while Grace provides tables, chairs, and lemonade.',
      },
      {
        prompt: 'What is the backup plan if it rains?',
        options: [
          'Moving the party into Grace’s garage.',
          'Postponing the event to the following week.',
          'Cancelling the party entirely.',
          'Holding it at a nearby community centre.',
        ],
        correctIndex: 0,
        explanation:
          'Grace writes that if the weather is bad, "we can move everything into my garage."',
      },
      {
        prompt: 'How can neighbours offer to help?',
        options: [
          'By dropping a note in Grace’s mailbox.',
          'By calling her the night before.',
          'By replying to a group email.',
          'By signing a list at the community centre.',
        ],
        correctIndex: 0,
        explanation:
          'She asks people to "drop a note in my mailbox" to help set up or provide music.',
      },
      {
        prompt:
          'A neighbour replies. Choose the best word: "What a _____ idea — our street could really use a get-together!"',
        options: ['wonderful', 'pointless', 'strict', 'secret'],
        correctIndex: 0,
        explanation:
          '"Wonderful" matches the enthusiastic, supportive tone of the reply.',
      },
      {
        prompt:
          'Complete the reply: "I would be happy to _____ with setting up the tables on Sunday morning."',
        options: ['help', 'refuse', 'compete', 'argue'],
        correctIndex: 0,
        explanation:
          '"Help" fits the offer to assist with setup that Grace requested.',
      },
    ],
  },
  {
    id: 'r1-04',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'A Letter to a Landlord',
    topic: 'Tenant requesting a repair',
    difficulty: 'medium',
    instruction:
      'Read the following letter from a tenant to a landlord. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Dear Mr. Alvarez,',
      'I am writing about the heating system in apartment 3B, which I have rented from you for the past two years. Over the last week, the radiators have stopped producing warmth, and the evenings have become quite cold.',
      'I have tried adjusting the thermostat and bleeding the radiators, as you suggested last winter, but neither has solved the problem. I suspect the boiler may need professional attention.',
      'Would it be possible to send a technician within the next few days? I am usually home after five o’clock on weekdays and all day on weekends, so almost any appointment time would work. I appreciate your quick response, as the forecast predicts colder temperatures ahead.',
      'Kind regards, Helen Tran',
    ],
    questions: [
      {
        prompt: 'What problem is Helen reporting?',
        options: [
          'The radiators have stopped producing heat.',
          'The rent has been charged twice.',
          'A window in the apartment is broken.',
          'The building’s front door will not lock.',
        ],
        correctIndex: 0,
        explanation:
          'She writes that "the radiators have stopped producing warmth."',
      },
      {
        prompt: 'What has Helen already tried?',
        options: [
          'Adjusting the thermostat and bleeding the radiators.',
          'Replacing the boiler herself.',
          'Calling several outside technicians.',
          'Moving to a warmer apartment.',
        ],
        correctIndex: 0,
        explanation:
          'She says she tried "adjusting the thermostat and bleeding the radiators."',
      },
      {
        prompt: 'What does Helen suspect is the cause?',
        options: [
          'The boiler may need professional attention.',
          'The thermostat is set incorrectly.',
          'The windows are letting in cold air.',
          'The electricity supply has failed.',
        ],
        correctIndex: 0,
        explanation:
          'She states, "I suspect the boiler may need professional attention."',
      },
      {
        prompt: 'When is Helen available for an appointment?',
        options: [
          'After five on weekdays and all day on weekends.',
          'Only on weekday mornings.',
          'Any time during business hours.',
          'Only on the first weekend of the month.',
        ],
        correctIndex: 0,
        explanation:
          'She is "home after five o’clock on weekdays and all day on weekends."',
      },
      {
        prompt:
          'Mr. Alvarez replies. Choose the best word: "I am sorry for the _____ and will arrange a technician for Thursday."',
        options: ['inconvenience', 'celebration', 'discount', 'appointment'],
        correctIndex: 0,
        explanation:
          '"Inconvenience" is the polite, appropriate word for apologising about the heating trouble.',
      },
      {
        prompt:
          'Complete the reply: "Please _____ me know if Thursday at six o’clock suits you."',
        options: ['let', 'made', 'take', 'give'],
        correctIndex: 0,
        explanation:
          'The fixed expression is "let me know," used to ask for confirmation.',
      },
    ],
  },
  {
    id: 'r1-05',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'A Thank-You Email After an Interview',
    topic: 'Follow-up note after a job interview',
    difficulty: 'medium',
    instruction:
      'Read the following email sent after a job interview. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Dear Ms. Delacroix,',
      'Thank you very much for meeting with me yesterday to discuss the role of project coordinator. I enjoyed learning about the team’s current work on the riverfront housing development.',
      'Our conversation confirmed my interest in the position. In particular, I was excited to hear that the coordinator will help design the volunteer training program, since organising community workshops is one of the things I enjoy most.',
      'If it would be helpful, I am happy to send samples of the scheduling templates I mentioned. Please let me know if you require any additional information. I look forward to hearing about the next steps.',
      'Best regards, Samuel Idris',
    ],
    questions: [
      {
        prompt: 'Why is Samuel writing this email?',
        options: [
          'To thank the interviewer and confirm his interest.',
          'To ask for a higher salary.',
          'To decline the job offer.',
          'To reschedule the interview.',
        ],
        correctIndex: 0,
        explanation:
          'He thanks Ms. Delacroix for the meeting and says the conversation "confirmed my interest in the position."',
      },
      {
        prompt: 'What part of the role excited Samuel most?',
        options: [
          'Helping design the volunteer training program.',
          'Managing the company’s finances.',
          'Travelling to other cities.',
          'Supervising a large team.',
        ],
        correctIndex: 0,
        explanation:
          'He was excited that the coordinator "will help design the volunteer training program."',
      },
      {
        prompt: 'What does Samuel offer to send?',
        options: [
          'Samples of scheduling templates.',
          'A list of professional references.',
          'A copy of his university diploma.',
          'Photographs of past events.',
        ],
        correctIndex: 0,
        explanation:
          'He offers to "send samples of the scheduling templates I mentioned."',
      },
      {
        prompt: 'What does Samuel say he enjoys most?',
        options: [
          'Organising community workshops.',
          'Working alone on long reports.',
          'Designing buildings.',
          'Analysing financial data.',
        ],
        correctIndex: 0,
        explanation:
          'He calls "organising community workshops" one of the things he enjoys most.',
      },
      {
        prompt:
          'Ms. Delacroix replies. Choose the best word: "It was a _____ to meet you, and the team was impressed by your ideas."',
        options: ['pleasure', 'burden', 'mistake', 'refusal'],
        correctIndex: 0,
        explanation:
          '"Pleasure" fits the warm, professional tone of a positive follow-up.',
      },
      {
        prompt:
          'Complete the reply: "We will be in _____ next week once the panel has made its decision."',
        options: ['touch', 'charge', 'debt', 'trouble'],
        correctIndex: 0,
        explanation:
          'The idiom "in touch" means to communicate again, which suits the promise to follow up.',
      },
    ],
  },
  {
    id: 'r1-06',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'A Message About a Book Club',
    topic: 'Friend inviting someone to join a book club',
    difficulty: 'easy',
    instruction:
      'Read the following message from a friend. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Hi Marcus,',
      'A few of us from the library have started a monthly book club, and I immediately thought of you because you always have the best recommendations. We meet on the first Tuesday evening of each month at the café on Elm Street.',
      'This month we are reading a travel memoir about cycling across South America. Do not worry if you have not read it yet — several members are still halfway through, and the discussions are relaxed rather than academic.',
      'There is no fee to join, and you are welcome to bring a friend. Let me know if you would like me to save you a seat for next Tuesday. I really think you would enjoy the group.',
      'Talk soon, Renata',
    ],
    questions: [
      {
        prompt: 'Why did Renata think of Marcus for the book club?',
        options: [
          'He always has the best recommendations.',
          'He works at the café on Elm Street.',
          'He has read the travel memoir already.',
          'He started a similar group last year.',
        ],
        correctIndex: 0,
        explanation:
          'She thought of him because he "always ha[s] the best recommendations."',
      },
      {
        prompt: 'When does the book club meet?',
        options: [
          'The first Tuesday evening of each month.',
          'Every Tuesday afternoon.',
          'The last weekend of each month.',
          'Whenever members finish the book.',
        ],
        correctIndex: 0,
        explanation:
          'They meet "on the first Tuesday evening of each month."',
      },
      {
        prompt: 'What is this month’s book about?',
        options: [
          'Cycling across South America.',
          'Cooking traditional recipes.',
          'Starting a small business.',
          'The history of the local library.',
        ],
        correctIndex: 0,
        explanation:
          'It is "a travel memoir about cycling across South America."',
      },
      {
        prompt: 'What does Renata say about members’ reading progress?',
        options: [
          'Several are still halfway through the book.',
          'Everyone must finish before the meeting.',
          'Only those who finish may attend.',
          'Nobody has started the book yet.',
        ],
        correctIndex: 0,
        explanation:
          'She reassures him that "several members are still halfway through."',
      },
      {
        prompt:
          'Marcus replies. Choose the best word: "That sounds _____ — I have been meaning to read more lately."',
        options: ['great', 'terrible', 'expensive', 'boring'],
        correctIndex: 0,
        explanation:
          '"Great" matches his positive, interested response.',
      },
      {
        prompt:
          'Complete the reply: "Please _____ me a seat for Tuesday, and I might bring my sister."',
        options: ['save', 'sell', 'lose', 'borrow'],
        correctIndex: 0,
        explanation:
          '"Save" matches Renata’s offer to "save you a seat."',
      },
    ],
  },
  {
    id: 'r1-07',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'A Reminder from a Dentist’s Office',
    topic: 'Appointment reminder and policy notice',
    difficulty: 'medium',
    instruction:
      'Read the following reminder from a dental clinic. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Dear Mr. Petrov,',
      'This is a friendly reminder that you have a cleaning appointment scheduled with Dr. Nguyen on Wednesday, the 12th, at 10:30 in the morning. Please arrive ten minutes early to update your health information.',
      'As a reminder of our policy, appointments cancelled with less than twenty-four hours’ notice may be charged a small fee. If you need to reschedule, our front desk is happy to find a time that suits you.',
      'We have also introduced online booking through our website, so you can view available times and manage future visits at your convenience. If you have any questions about your coverage, feel free to call us before your appointment.',
      'Warm regards, Riverside Dental Clinic',
    ],
    questions: [
      {
        prompt: 'What is the main purpose of this message?',
        options: [
          'To remind Mr. Petrov of an upcoming appointment.',
          'To inform him that his appointment was cancelled.',
          'To advertise a new dentist joining the clinic.',
          'To request an overdue payment.',
        ],
        correctIndex: 0,
        explanation:
          'It is "a friendly reminder that you have a cleaning appointment scheduled."',
      },
      {
        prompt: 'Why should Mr. Petrov arrive early?',
        options: [
          'To update his health information.',
          'To pay for the appointment in advance.',
          'To meet a new dentist.',
          'To take an X-ray before cleaning.',
        ],
        correctIndex: 0,
        explanation:
          'He should arrive early "to update your health information."',
      },
      {
        prompt: 'What is the clinic’s cancellation policy?',
        options: [
          'Cancelling with less than 24 hours’ notice may cost a fee.',
          'Cancellations are never allowed.',
          'Appointments can be cancelled at any time for free.',
          'Only online cancellations are accepted.',
        ],
        correctIndex: 0,
        explanation:
          'Appointments cancelled "with less than twenty-four hours’ notice may be charged a small fee."',
      },
      {
        prompt: 'What new service has the clinic introduced?',
        options: [
          'Online booking through its website.',
          'A 24-hour emergency phone line.',
          'Free transport to the clinic.',
          'A loyalty discount program.',
        ],
        correctIndex: 0,
        explanation:
          'They "introduced online booking through our website."',
      },
      {
        prompt:
          'Mr. Petrov replies. Choose the best word: "Thank you for the reminder; I will _____ arrive by 10:20."',
        options: ['definitely', 'rarely', 'hardly', 'reluctantly'],
        correctIndex: 0,
        explanation:
          '"Definitely" confirms his intention to be there early, matching a cooperative tone.',
      },
      {
        prompt:
          'Complete the reply: "Could you also _____ whether my new insurance is accepted?"',
        options: ['confirm', 'cancel', 'ignore', 'delay'],
        correctIndex: 0,
        explanation:
          '"Confirm" fits a request to check his coverage before the visit.',
      },
    ],
  },
  {
    id: 'r1-08',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'A Postcard from a Trip',
    topic: 'Friend describing a holiday abroad',
    difficulty: 'easy',
    instruction:
      'Read the following postcard from a friend on holiday. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Dear Amina,',
      'Greetings from the coast! I finally took the long holiday I kept postponing, and I am so glad I did. The little fishing village where I am staying is quieter than any place I have ever visited, and the mornings smell of salt and fresh bread.',
      'Each day I walk along the harbour, watch the boats come in, and then spend the afternoon painting. My landlady, Sofia, has been incredibly kind — she insists on teaching me to cook the local seafood stew, whether I want to learn or not!',
      'I will be here for two more weeks. When I return, I would love to show you my sketches and, of course, cook that stew for you. Save room for seconds.',
      'Missing you, Clara',
    ],
    questions: [
      {
        prompt: 'How does Clara feel about her holiday?',
        options: [
          'She is very glad she finally took it.',
          'She regrets choosing such a quiet place.',
          'She wishes she had stayed home.',
          'She finds the village too crowded.',
        ],
        correctIndex: 0,
        explanation:
          'She writes, "I am so glad I did," about taking the holiday.',
      },
      {
        prompt: 'What does Clara do in the afternoons?',
        options: [
          'She paints.',
          'She goes fishing.',
          'She sleeps.',
          'She works remotely.',
        ],
        correctIndex: 0,
        explanation:
          'She spends "the afternoon painting."',
      },
      {
        prompt: 'What has Sofia been teaching Clara?',
        options: [
          'How to cook the local seafood stew.',
          'How to sail a fishing boat.',
          'How to speak the local language.',
          'How to sell paintings at the market.',
        ],
        correctIndex: 0,
        explanation:
          'Sofia "insists on teaching me to cook the local seafood stew."',
      },
      {
        prompt: 'What does Clara plan to do when she returns?',
        options: [
          'Show Amina her sketches and cook the stew.',
          'Move permanently to the village.',
          'Open a small art gallery.',
          'Start selling seafood.',
        ],
        correctIndex: 0,
        explanation:
          'She wants to "show you my sketches and, of course, cook that stew for you."',
      },
      {
        prompt:
          'Amina replies. Choose the best word: "Your trip sounds absolutely _____ — I can almost smell the fresh bread!"',
        options: ['idyllic', 'stressful', 'ordinary', 'disappointing'],
        correctIndex: 0,
        explanation:
          '"Idyllic" (peaceful and charming) matches Clara’s description of the village.',
      },
      {
        prompt:
          'Complete the reply: "I cannot _____ to see your sketches and taste that famous stew."',
        options: ['wait', 'stop', 'help', 'afford'],
        correctIndex: 0,
        explanation:
          'The expression "cannot wait" shows excited anticipation.',
      },
    ],
  },
  {
    id: 'r1-09',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'A Note to a Team About a Schedule Change',
    topic: 'Manager announcing a new meeting time',
    difficulty: 'medium',
    instruction:
      'Read the following note from a team leader. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Hello team,',
      'After hearing your feedback, I have decided to move our weekly check-in from Monday morning to Wednesday at 2 p.m. Several of you mentioned that Mondays felt rushed, and the new time should give everyone a chance to prepare properly.',
      'The meeting will still last thirty minutes, and the agenda will be shared the day before so no one is caught off guard. If you cannot attend, please send a short written update instead, and I will summarise the key points for you afterwards.',
      'I know change can be inconvenient, but I believe this small adjustment will make our meetings more useful. Thank you for being flexible, and please reach out if the new time creates a serious conflict.',
      'Best, Yuki',
    ],
    questions: [
      {
        prompt: 'What change is Yuki announcing?',
        options: [
          'The weekly check-in is moving to Wednesday at 2 p.m.',
          'The team will stop having weekly meetings.',
          'The meeting will now last one hour.',
          'The team is switching to online-only meetings.',
        ],
        correctIndex: 0,
        explanation:
          'The check-in moves "from Monday morning to Wednesday at 2 p.m."',
      },
      {
        prompt: 'Why is Yuki making this change?',
        options: [
          'Team members felt Mondays were rushed.',
          'The meeting room was double-booked.',
          'A new employee is joining the team.',
          'Management ordered the change.',
        ],
        correctIndex: 0,
        explanation:
          'Several people "mentioned that Mondays felt rushed."',
      },
      {
        prompt: 'When will the agenda be shared?',
        options: [
          'The day before the meeting.',
          'At the start of the meeting.',
          'One week in advance.',
          'Only if someone requests it.',
        ],
        correctIndex: 0,
        explanation:
          'The agenda "will be shared the day before."',
      },
      {
        prompt: 'What should someone do if they cannot attend?',
        options: [
          'Send a short written update.',
          'Reschedule the meeting for everyone.',
          'Record the meeting themselves.',
          'Ask a colleague to attend for them.',
        ],
        correctIndex: 0,
        explanation:
          'If they cannot attend, they should "send a short written update instead."',
      },
      {
        prompt:
          'A team member replies. Choose the best word: "The new time works much better for me; thanks for being so _____ to our feedback."',
        options: ['responsive', 'opposed', 'indifferent', 'unavailable'],
        correctIndex: 0,
        explanation:
          '"Responsive" praises Yuki for acting on the team’s comments.',
      },
      {
        prompt:
          'Complete the reply: "I will make sure to _____ the agenda before each session."',
        options: ['review', 'delete', 'hide', 'lose'],
        correctIndex: 0,
        explanation:
          '"Review" fits the intention to prepare by reading the agenda.',
      },
    ],
  },
  {
    id: 'r1-10',
    part: 1,
    partLabel: 'Reading Correspondence',
    title: 'A Message About a Lost Item',
    topic: 'Enquiring about a lost wallet at a restaurant',
    difficulty: 'hard',
    instruction:
      'Read the following email to a restaurant manager. Then answer the questions.',
    timeMinutes: 11,
    passage: [
      'Dear Manager,',
      'I visited your restaurant, The Copper Kettle, last Friday evening for a birthday dinner and had a lovely time. Unfortunately, when I got home I realised I had left a brown leather wallet behind, most likely under the table near the window where our party of six was seated.',
      'The wallet contains my transit card and a photograph that has great sentimental value, though thankfully no cash. I have already cancelled my bank cards, so my main hope is simply to recover the photograph.',
      'If any of your staff have found it, I would be extremely grateful. I can come by any afternoon this week to collect it, or I am happy to cover the cost of postage if that is easier for you. Thank you for looking into this.',
      'Sincerely, Omar Haddad',
    ],
    questions: [
      {
        prompt: 'Why is Omar writing to the restaurant?',
        options: [
          'To ask whether his lost wallet has been found.',
          'To complain about poor service.',
          'To book a table for another birthday.',
          'To request a refund for his meal.',
        ],
        correctIndex: 0,
        explanation:
          'He explains he "left a brown leather wallet behind" and hopes to recover it.',
      },
      {
        prompt: 'What does Omar value most in the wallet?',
        options: [
          'A photograph with sentimental value.',
          'A large amount of cash.',
          'His driver’s licence.',
          'A gift card from the restaurant.',
        ],
        correctIndex: 0,
        explanation:
          'His "main hope is simply to recover the photograph," which has "great sentimental value."',
      },
      {
        prompt: 'What has Omar already done about his bank cards?',
        options: [
          'He has cancelled them.',
          'He has reported them stolen to the police.',
          'He has ordered replacements at the bank.',
          'He has left them with a friend.',
        ],
        correctIndex: 0,
        explanation:
          'He states, "I have already cancelled my bank cards."',
      },
      {
        prompt: 'What two options does Omar suggest for getting the wallet back?',
        options: [
          'Collecting it in person or paying for postage.',
          'Sending a courier or a friend.',
          'Meeting the manager at the bank.',
          'Having it delivered by a staff member.',
        ],
        correctIndex: 0,
        explanation:
          'He can "come by any afternoon this week" or "cover the cost of postage."',
      },
      {
        prompt:
          'The manager replies. Choose the best word: "I am _____ to tell you that a staff member found your wallet."',
        options: ['pleased', 'sorry', 'unable', 'forced'],
        correctIndex: 0,
        explanation:
          '"Pleased" fits the good news that the wallet was found.',
      },
      {
        prompt:
          'Complete the reply: "You are welcome to _____ it up whenever the restaurant is open."',
        options: ['pick', 'throw', 'give', 'put'],
        correctIndex: 0,
        explanation:
          'The phrasal verb "pick up" means to collect an item, matching Omar’s plan to come by.',
      },
    ],
  },
]
