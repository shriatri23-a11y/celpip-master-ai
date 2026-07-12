import type { ReadingPracticeTest } from './types'

/**
 * CELPIP Reading Part 3 — Reading for Information.
 * Each passage is organised into labelled paragraphs (A–D). Questions ask the
 * reader to locate where specific information appears or to interpret it.
 */
export const part3Tests: ReadingPracticeTest[] = [
  {
    id: 'r3-01',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'The Return of Urban Beekeeping',
    topic: 'Keeping bees in cities',
    difficulty: 'medium',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. Once seen as a rural hobby, beekeeping has quietly moved into the heart of many cities. Rooftops, balconies, and community gardens now host hives that would have surprised previous generations. Supporters argue that urban environments, with their variety of flowering plants in parks and private gardens, can actually provide bees with a more diverse diet than farmland dominated by a single crop.',
      'B. The benefits extend beyond honey. As bees travel from flower to flower, they pollinate the plants that produce much of the food people eat. In neighbourhoods where community gardens struggle, the arrival of a few hives has been linked to healthier harvests of tomatoes, squash, and berries. Some schools have even added hives to teach children about the connection between insects and the food on their plates.',
      'C. Urban beekeeping is not without challenges. Beginners often underestimate the time and cost involved, from buying protective equipment to inspecting hives regularly for disease. Neighbours may worry about being stung, although experts point out that honeybees are generally docile when left undisturbed. In dense areas, an overcrowding of hives can also mean too many bees competing for too few flowers.',
      'D. For those interested in starting, most cities now offer introductory courses through local associations. These programs cover the basics of hive management, seasonal care, and, importantly, the rules that govern where hives may be placed. Experienced keepers strongly recommend beginning with a single hive and joining a mentorship group before expanding.',
    ],
    questions: [
      {
        prompt:
          'Which paragraph explains how bees help nearby food gardens produce more?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B describes how pollination leads to "healthier harvests of tomatoes, squash, and berries."',
      },
      {
        prompt:
          'Which paragraph describes the difficulties new beekeepers may face?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C covers the time, cost, neighbour concerns, and overcrowding challenges.',
      },
      {
        prompt:
          'Which paragraph suggests that cities can offer bees a varied diet?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A argues that urban gardens provide "a more diverse diet than farmland dominated by a single crop."',
      },
      {
        prompt:
          'Which paragraph gives advice on how to begin beekeeping responsibly?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D recommends introductory courses and "beginning with a single hive."',
      },
      {
        prompt: 'According to the passage, why are neighbours’ fears often unfounded?',
        options: [
          'Honeybees are generally docile when left undisturbed.',
          'Bees rarely leave their hives.',
          'Hives are always placed far from people.',
          'Stings cause no discomfort.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph C states that "honeybees are generally docile when left undisturbed."',
      },
      {
        prompt: 'What do experienced keepers recommend before expanding?',
        options: [
          'Joining a mentorship group.',
          'Buying several hives at once.',
          'Moving hives to farmland.',
          'Avoiding local associations.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph D advises "joining a mentorship group before expanding."',
      },
    ],
  },
  {
    id: 'r3-02',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'How Libraries Are Changing',
    topic: 'The modern public library',
    difficulty: 'easy',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. The public library has long been thought of simply as a quiet place to borrow books. For many communities, however, that image no longer captures what these institutions actually do. Modern libraries lend everything from musical instruments to power tools, and some even provide seeds so that members can grow their own vegetables and return seeds from the harvest.',
      'B. Technology has driven much of this change. Free internet access remains one of the most valued services, especially for people who cannot afford a home connection. Many branches now offer three-dimensional printers, recording studios, and classes on everything from coding to editing video, turning the library into a place where people create rather than only consume.',
      'C. Libraries have also become community anchors. They host job-search workshops, welcome newcomers with language programs, and offer warm, safe spaces during extreme weather. Staff increasingly help visitors navigate government forms and online services, roles that were once handled elsewhere.',
      'D. None of this means that books are disappearing. Reading remains at the core of the library’s mission, and borrowing figures for both print and digital titles continue to rise in many regions. Instead, libraries have expanded around that core, adapting to serve a wider range of needs while keeping their doors open to all.',
    ],
    questions: [
      {
        prompt:
          'Which paragraph mentions unusual items that libraries now lend?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A lists "musical instruments," "power tools," and even seeds.',
      },
      {
        prompt:
          'Which paragraph focuses on technology-based creative services?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B describes 3D printers, recording studios, and coding classes.',
      },
      {
        prompt:
          'Which paragraph describes the library as a social and community support?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C mentions job workshops, language programs, and safe spaces.',
      },
      {
        prompt:
          'Which paragraph reassures readers that reading is still central?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D states "books are [not] disappearing" and that reading "remains at the core."',
      },
      {
        prompt: 'Why is free internet access described as especially valuable?',
        options: [
          'It helps people who cannot afford a home connection.',
          'It replaces the need for printed books.',
          'It is only available to newcomers.',
          'It is the library’s oldest service.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph B says it is valued "especially for people who cannot afford a home connection."',
      },
      {
        prompt: 'What has happened to borrowing figures in many regions?',
        options: [
          'They continue to rise for print and digital titles.',
          'They have fallen sharply.',
          'They have stopped being counted.',
          'They apply only to instruments.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph D notes borrowing figures "continue to rise in many regions."',
      },
    ],
  },
  {
    id: 'r3-03',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'The Science of a Good Night’s Sleep',
    topic: 'Sleep and health',
    difficulty: 'medium',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. Sleep is often the first thing people sacrifice when life gets busy, yet researchers describe it as one of the most powerful tools for health. During deep sleep, the body repairs tissue, strengthens the immune system, and consolidates memories from the day. Skimping on sleep, even by an hour a night, can accumulate into what scientists call a "sleep debt" that affects mood and concentration.',
      'B. The timing of sleep matters as much as the amount. The body follows an internal clock, known as the circadian rhythm, that responds strongly to light. Bright screens late at night can trick the brain into thinking it is still daytime, delaying the release of melatonin, the hormone that signals it is time to rest.',
      'C. Small changes to the bedroom can make a surprising difference. Experts suggest keeping the room cool, dark, and quiet, and reserving the bed for sleep rather than work or television. Establishing a consistent routine, such as going to bed and waking at the same time every day, helps the body anticipate rest.',
      'D. When sleep problems persist, they should not be ignored. Ongoing insomnia or loud snoring accompanied by daytime exhaustion can signal underlying conditions that benefit from medical attention. Specialists can recommend behavioural therapies that are often more effective in the long term than relying on sleeping pills.',
    ],
    questions: [
      {
        prompt: 'Which paragraph explains what the body does during deep sleep?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A says the body "repairs tissue, strengthens the immune system, and consolidates memories."',
      },
      {
        prompt: 'Which paragraph discusses how light affects sleep?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B describes the circadian rhythm and how screens delay melatonin.',
      },
      {
        prompt: 'Which paragraph offers practical tips for the bedroom?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C suggests keeping the room "cool, dark, and quiet" and a consistent routine.',
      },
      {
        prompt: 'Which paragraph advises seeking professional help?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D says persistent problems "benefit from medical attention."',
      },
      {
        prompt: 'What is "sleep debt"?',
        options: [
          'The accumulation of lost sleep over time.',
          'The cost of sleep medication.',
          'A medical condition requiring surgery.',
          'The time spent falling asleep.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph A defines it as lost sleep that "can accumulate" and affect mood and concentration.',
      },
      {
        prompt: 'According to the passage, what does melatonin do?',
        options: [
          'It signals to the body that it is time to rest.',
          'It repairs damaged tissue.',
          'It increases alertness during the day.',
          'It strengthens the immune system.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph B calls melatonin "the hormone that signals it is time to rest."',
      },
    ],
  },
  {
    id: 'r3-04',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'The Rise of the Farmers’ Market',
    topic: 'Local food markets',
    difficulty: 'easy',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. On weekend mornings in towns across the country, tables fill with fresh produce, baked goods, and handmade crafts. Farmers’ markets have grown rapidly over the past two decades, drawing shoppers who want to know where their food comes from and to meet the people who grow it.',
      'B. For farmers, these markets offer a rare chance to sell directly to customers without a middleman. This means a larger share of each dollar stays with the producer. Many small farms say the markets are what allow them to survive against large industrial operations that can sell at much lower prices.',
      'C. Shoppers benefit too, though not always in the ways they expect. While some items cost more than at a supermarket, the produce is often picked within a day of sale, meaning better flavour and longer freshness at home. Buyers can also ask directly about how food was grown, something impossible with anonymous packaging.',
      'D. Critics note that markets are not a perfect solution. They are usually open only on certain days, and their locations can be hard to reach for people without cars. Prices may also place some products out of reach for lower-income families, a problem some markets address by accepting food-assistance vouchers.',
    ],
    questions: [
      {
        prompt: 'Which paragraph explains the financial advantage for farmers?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B explains selling "without a middleman" keeps more money with the producer.',
      },
      {
        prompt: 'Which paragraph describes drawbacks of farmers’ markets?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D notes limited days, hard-to-reach locations, and high prices.',
      },
      {
        prompt: 'Which paragraph introduces the growing popularity of markets?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A says markets "have grown rapidly over the past two decades."',
      },
      {
        prompt: 'Which paragraph focuses on benefits to shoppers?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C discusses fresher produce and the ability to ask about growing methods.',
      },
      {
        prompt: 'How do some markets help lower-income families?',
        options: [
          'By accepting food-assistance vouchers.',
          'By offering free delivery.',
          'By opening every day.',
          'By lowering all prices.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph D says some markets "address [this] by accepting food-assistance vouchers."',
      },
      {
        prompt: 'Why does market produce often taste better?',
        options: [
          'It is picked within a day of sale.',
          'It is grown in greenhouses.',
          'It is always organic.',
          'It is frozen before selling.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph C says produce is "often picked within a day of sale, meaning better flavour."',
      },
    ],
  },
  {
    id: 'r3-05',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'Understanding Volunteer Burnout',
    topic: 'Sustaining volunteers',
    difficulty: 'hard',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. Volunteers are the backbone of countless charities, yet organisations often overlook a quiet threat to their work: burnout. Unlike paid employees, volunteers give their time freely, which can make it harder for them to admit when they are overwhelmed. Many fear that stepping back will let down a cause they deeply believe in.',
      'B. The warning signs are not always obvious. A once-enthusiastic helper may begin arriving late, avoiding new tasks, or speaking about the work with a flatness that was not there before. Because these changes appear gradually, coordinators may mistake them for simple bad moods rather than signs of exhaustion.',
      'C. Preventing burnout starts with realistic expectations. Successful programs match tasks to each person’s available time and skills, rather than asking everyone to do everything. Regular check-ins give volunteers a safe way to voice concerns, and rotating responsibilities keeps roles from becoming monotonous.',
      'D. Recognition matters just as much as workload. Studies show that volunteers who feel genuinely appreciated stay far longer than those who do not, even when the tasks are demanding. Something as simple as a handwritten thank-you note or a public acknowledgement can renew a person’s sense of purpose.',
    ],
    questions: [
      {
        prompt:
          'Which paragraph describes the subtle signs that a volunteer is struggling?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B lists arriving late, avoiding tasks, and flatness as warning signs.',
      },
      {
        prompt:
          'Which paragraph explains why volunteers may hide their exhaustion?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A says volunteers "fear that stepping back will let down a cause."',
      },
      {
        prompt: 'Which paragraph gives strategies to prevent burnout?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C recommends matching tasks, regular check-ins, and rotating duties.',
      },
      {
        prompt: 'Which paragraph highlights the importance of appreciation?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D says appreciated volunteers "stay far longer."',
      },
      {
        prompt: 'Why might coordinators miss the signs of burnout?',
        options: [
          'The changes appear gradually and seem like bad moods.',
          'Volunteers report their exhaustion immediately.',
          'The signs only appear in paid staff.',
          'Burnout has no visible symptoms.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph B says changes "appear gradually" and may be mistaken for "simple bad moods."',
      },
      {
        prompt: 'What example of recognition does the passage give?',
        options: [
          'A handwritten thank-you note.',
          'A cash bonus.',
          'A promotion to paid staff.',
          'An extra day off.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph D mentions "a handwritten thank-you note or a public acknowledgement."',
      },
    ],
  },
  {
    id: 'r3-06',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'The Comeback of the Bicycle Commute',
    topic: 'Cycling to work',
    difficulty: 'medium',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. For decades, cars dominated the journey to work, and the bicycle was largely dismissed as a child’s toy or a weekend pastime. That perception is shifting. Rising fuel costs, crowded roads, and a growing awareness of health have led many adults to reconsider the bicycle as a serious way to get around.',
      'B. Cities have played a major role in this revival. When protected bike lanes are added, cycling numbers tend to climb sharply, because people who once felt unsafe are finally willing to try. Some municipalities have introduced public bike-share systems, allowing residents to pick up a bicycle at one station and drop it off at another.',
      'C. The advantages reach beyond the individual. Every commuter who switches from a car to a bicycle removes one vehicle from congested streets and reduces the emissions that harm air quality. Employers report that staff who cycle regularly take fewer sick days and arrive more alert and ready to work.',
      'D. Barriers remain, of course. Bad weather, long distances, and a lack of secure parking can discourage would-be cyclists. Yet many of these obstacles are being addressed through covered bike shelters, electric bicycles that flatten steep hills, and workplaces that provide showers and changing rooms.',
    ],
    questions: [
      {
        prompt: 'Which paragraph describes how cities encourage cycling?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B discusses protected bike lanes and bike-share systems.',
      },
      {
        prompt: 'Which paragraph lists benefits to employers and the environment?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C mentions fewer emissions and staff taking "fewer sick days."',
      },
      {
        prompt: 'Which paragraph explains why attitudes toward cycling changed?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A cites fuel costs, traffic, and health awareness.',
      },
      {
        prompt: 'Which paragraph discusses solutions to the obstacles cyclists face?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D describes bike shelters, electric bicycles, and workplace showers.',
      },
      {
        prompt: 'What makes people more willing to cycle, according to the passage?',
        options: [
          'The addition of protected bike lanes.',
          'Higher car prices alone.',
          'Removing all traffic lights.',
          'Banning cars entirely.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph B says numbers climb when "protected bike lanes are added."',
      },
      {
        prompt: 'How do electric bicycles help new cyclists?',
        options: [
          'They flatten steep hills.',
          'They require no parking.',
          'They work in any weather.',
          'They need no charging.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph D mentions "electric bicycles that flatten steep hills."',
      },
    ],
  },
  {
    id: 'r3-07',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'Why We Procrastinate',
    topic: 'The psychology of delay',
    difficulty: 'hard',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. Nearly everyone puts things off from time to time, but psychologists warn against dismissing procrastination as mere laziness. Research suggests it is often an emotional response: when a task feels boring, difficult, or threatening to our self-image, the brain seeks relief by turning to something more pleasant, even briefly.',
      'B. This explains why willpower alone rarely solves the problem. Telling someone to "just start" ignores the feelings driving the delay. In fact, harsh self-criticism can make procrastination worse, because the guilt it produces becomes yet another uncomfortable emotion the person wants to escape.',
      'C. More effective strategies work with the brain rather than against it. Breaking a large task into small, clearly defined steps reduces the sense of threat. Promising oneself a modest reward after finishing can also shift the emotional balance, making the task feel less like a punishment.',
      'D. Interestingly, self-forgiveness appears to help. Studies of students found that those who forgave themselves for procrastinating on one occasion were less likely to do so again. Letting go of guilt seems to free people to approach the next task with a clearer, calmer mind.',
    ],
    questions: [
      {
        prompt:
          'Which paragraph argues that procrastination is emotional, not laziness?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A calls it "an emotional response" to unpleasant tasks.',
      },
      {
        prompt: 'Which paragraph explains why self-criticism backfires?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B says guilt "becomes yet another uncomfortable emotion the person wants to escape."',
      },
      {
        prompt: 'Which paragraph offers practical techniques to reduce procrastination?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C suggests small steps and modest rewards.',
      },
      {
        prompt: 'Which paragraph describes a study about forgiving oneself?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D reports students who "forgave themselves" procrastinated less afterward.',
      },
      {
        prompt: 'Why does telling someone to "just start" often fail?',
        options: [
          'It ignores the feelings driving the delay.',
          'It requires special training.',
          'It works only for large tasks.',
          'It demands a reward first.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph B says it "ignores the feelings driving the delay."',
      },
      {
        prompt: 'How does breaking up a task help?',
        options: [
          'It reduces the sense of threat.',
          'It removes the need for rewards.',
          'It increases guilt.',
          'It makes tasks longer.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph C says small steps "reduce[] the sense of threat."',
      },
    ],
  },
  {
    id: 'r3-08',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'The Hidden Life of Trees',
    topic: 'How forests communicate',
    difficulty: 'medium',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. To a casual walker, a forest may look like a collection of separate trees competing for sunlight. Scientists studying woodland ecosystems, however, describe something closer to a connected community. Beneath the soil, threadlike fungi link the roots of many trees into a vast underground network sometimes nicknamed the "wood wide web."',
      'B. Through this network, trees can share resources in surprising ways. A large, well-established tree may send sugars to a struggling seedling shaded beneath it, and trees under attack by insects can release chemical signals that warn their neighbours to strengthen their defences before the pests arrive.',
      'C. This cooperation does not mean the forest is free of competition. Trees still compete for light, water, and space, and not every interaction is helpful. Some plants use the same fungal network to steal nutrients, and researchers caution against imagining the forest as a purely harmonious family.',
      'D. Understanding these connections has practical value. Foresters who once cleared land completely are now leaving certain older trees standing, recognising that they anchor the network that helps younger trees grow. The findings are slowly reshaping how people manage woodlands for the long term.',
    ],
    questions: [
      {
        prompt: 'Which paragraph introduces the underground fungal network?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A describes the "wood wide web" of fungi linking roots.',
      },
      {
        prompt: 'Which paragraph gives examples of trees helping one another?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B describes sharing sugars and sending warning signals.',
      },
      {
        prompt: 'Which paragraph warns against seeing the forest as purely harmonious?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C notes competition and plants that "steal nutrients."',
      },
      {
        prompt: 'Which paragraph explains how the research changes forestry?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D says foresters now leave "certain older trees standing."',
      },
      {
        prompt: 'What can trees under insect attack do?',
        options: [
          'Release chemical signals to warn their neighbours.',
          'Move away from the pests.',
          'Absorb more sunlight.',
          'Grow new roots instantly.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph B says they "release chemical signals that warn their neighbours."',
      },
      {
        prompt: 'Why are older trees now sometimes left standing?',
        options: [
          'They anchor the network that helps younger trees grow.',
          'They produce the most timber.',
          'They block harmful sunlight.',
          'They are too costly to remove.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph D says they "anchor the network that helps younger trees grow."',
      },
    ],
  },
  {
    id: 'r3-09',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'Learning a Second Language as an Adult',
    topic: 'Adult language learning',
    difficulty: 'medium',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. A common belief holds that only children can truly master a new language and that adults have missed their chance. While it is true that young children often acquire a native-like accent more easily, research has repeatedly shown that adults can reach a high level of fluency. In some areas, such as learning grammar rules and vocabulary quickly, adults may even have an advantage.',
      'B. Adults bring strengths that children lack. They can study deliberately, use their understanding of their first language to spot patterns, and set clear goals for what they want to achieve. An adult learner preparing for a job interview, for instance, can focus practice on the exact situations they expect to face.',
      'C. The greatest obstacles are often practical rather than biological. Busy schedules, fear of making mistakes in front of others, and limited chances to practise with fluent speakers all slow progress. Motivation tends to fade when learners cannot see immediate results, which is why realistic expectations are so important.',
      'D. Experts recommend regular, short practice over occasional marathon sessions. Speaking from the very first lessons, even imperfectly, builds confidence faster than silent study. Above all, they stress that mistakes are not failures but a natural and necessary part of the learning process.',
    ],
    questions: [
      {
        prompt: 'Which paragraph challenges the belief that only children can learn languages?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A says adults "can reach a high level of fluency."',
      },
      {
        prompt: 'Which paragraph describes the advantages adults have?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B says adults "can study deliberately" and set clear goals.',
      },
      {
        prompt: 'Which paragraph identifies practical barriers to learning?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C lists busy schedules, fear of mistakes, and few chances to practise.',
      },
      {
        prompt: 'Which paragraph gives advice on how to practise effectively?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D recommends "regular, short practice" and speaking early.',
      },
      {
        prompt: 'In which skill might adults have an advantage over children?',
        options: [
          'Learning grammar and vocabulary quickly.',
          'Acquiring a native-like accent.',
          'Understanding songs.',
          'Ignoring their first language.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph A says adults may have an advantage in "learning grammar rules and vocabulary quickly."',
      },
      {
        prompt: 'How does the passage describe mistakes?',
        options: [
          'A natural and necessary part of learning.',
          'A sign the learner should stop.',
          'Something only children make.',
          'A rare event for adults.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph D calls mistakes "a natural and necessary part of the learning process."',
      },
    ],
  },
  {
    id: 'r3-10',
    part: 3,
    partLabel: 'Reading for Information',
    title: 'The Everyday History of Coffee',
    topic: 'How coffee spread worldwide',
    difficulty: 'easy',
    instruction:
      'Read the following passage. Then answer the questions by choosing the paragraph that best matches each statement.',
    timeMinutes: 10,
    passage: [
      'A. Few drinks are as woven into daily life as coffee, yet its journey to the world’s cups is a long one. According to a popular legend, a goat herder in the highlands of Ethiopia noticed his animals becoming lively after eating the bright red berries of a certain shrub. Whether or not the story is true, the plant’s energising effect was soon widely known.',
      'B. From there, coffee spread through trade. By the fifteenth century it was being roasted and brewed in the Arabian Peninsula, where coffee houses became lively centres of conversation and news. Travellers carried beans and brewing methods along trade routes, and the drink gradually reached Europe, where it met both fascination and suspicion.',
      'C. Coffee houses eventually flourished across European cities. They earned nicknames such as "penny universities," because for the price of a cup a visitor could join discussions on business, politics, and science. Some historians argue these gathering places helped spread ideas that shaped the modern world.',
      'D. Today, coffee is among the most traded commodities on the planet, supporting millions of farmers, many of them on small plots in tropical regions. Growing awareness of their working conditions has fuelled interest in fair-trade labels, which aim to ensure that more of the final price reaches the people who grow the beans.',
    ],
    questions: [
      {
        prompt: 'Which paragraph tells the legend of coffee’s discovery?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph A recounts the goat herder in Ethiopia.',
      },
      {
        prompt: 'Which paragraph describes how coffee reached Europe?',
        options: ['Paragraph B', 'Paragraph A', 'Paragraph C', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph B traces the spread through trade routes to Europe.',
      },
      {
        prompt: 'Which paragraph explains the nickname "penny universities"?',
        options: ['Paragraph C', 'Paragraph A', 'Paragraph B', 'Paragraph D'],
        correctIndex: 0,
        explanation:
          'Paragraph C explains the nickname came from cheap access to discussions.',
      },
      {
        prompt: 'Which paragraph discusses coffee’s modern trade and fair-trade labels?',
        options: ['Paragraph D', 'Paragraph A', 'Paragraph B', 'Paragraph C'],
        correctIndex: 0,
        explanation:
          'Paragraph D covers coffee as a commodity and fair-trade efforts.',
      },
      {
        prompt: 'What was special about early coffee houses in the Arabian Peninsula?',
        options: [
          'They became centres of conversation and news.',
          'They were only for the wealthy.',
          'They sold beans but no drinks.',
          'They were run by governments.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph B calls them "lively centres of conversation and news."',
      },
      {
        prompt: 'What is the goal of fair-trade labels?',
        options: [
          'To ensure more of the price reaches the growers.',
          'To make coffee cheaper for buyers.',
          'To increase coffee production.',
          'To reduce the number of farmers.',
        ],
        correctIndex: 0,
        explanation:
          'Paragraph D says they "aim to ensure that more of the final price reaches the people who grow the beans."',
      },
    ],
  },
]
