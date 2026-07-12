import type { ReadingPracticeTest } from './types'

/**
 * CELPIP Reading Part 2 — Reading to Apply a Diagram.
 * Each test pairs a comparison diagram with a short message and asks the reader
 * to apply the information to a specific situation.
 */
export const part2Tests: ReadingPracticeTest[] = [
  {
    id: 'r2-01',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Travel Options to Seattle',
    topic: 'Choosing transport for a weekend trip',
    difficulty: 'medium',
    instruction:
      'Study the diagram of travel options, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'Travel Options: Vancouver to Seattle',
      caption: 'Compare price, duration, and comfort for a one-way trip.',
      rows: [
        {
          label: 'Train',
          icon: 'train',
          cells: [
            { label: 'Price', lines: ['$45'] },
            { label: 'Duration', lines: ['4 hours'] },
            { label: 'Notes', lines: ['Scenic route', 'Free Wi-Fi'] },
          ],
        },
        {
          label: 'Bus',
          icon: 'bus',
          cells: [
            { label: 'Price', lines: ['$30'] },
            { label: 'Duration', lines: ['4.5 hours'] },
            { label: 'Notes', lines: ['Frequent stops', 'Limited legroom'] },
          ],
        },
        {
          label: 'Flight',
          icon: 'plane',
          cells: [
            { label: 'Price', lines: ['$120'] },
            { label: 'Duration', lines: ['1 hour'] },
            { label: 'Notes', lines: ['Airport 45 min away', 'Baggage fees'] },
          ],
        },
        {
          label: 'Car',
          icon: 'car',
          cells: [
            { label: 'Price', lines: ['$60 fuel'] },
            { label: 'Duration', lines: ['3 hours'] },
            { label: 'Notes', lines: ['Border wait varies', 'Flexible timing'] },
          ],
        },
      ],
    },
    passage: [
      'Hi Jordan,',
      'I want to visit you in Seattle this weekend but I am on a tight budget, so the cheapest option matters most to me. I also get carsick easily, so I would rather not drive or take anything with too many stops.',
      'That said, I do value comfort for a longer journey, and I love a good view. I do not mind arriving a little later as long as I can relax and maybe get some work done on the way.',
      'Let me know what you think I should book!',
      'See you soon, Casey',
    ],
    questions: [
      {
        prompt:
          'Which option best matches Casey’s priorities of low cost, comfort, and a good view?',
        options: ['The train', 'The bus', 'The flight', 'The car'],
        correctIndex: 0,
        explanation:
          'Casey values a view, comfort, and Wi-Fi for working, and dislikes stops and driving. The train offers a scenic route and free Wi-Fi at a reasonable $45, matching best.',
      },
      {
        prompt: 'Why is the bus not ideal for Casey despite being cheapest?',
        options: [
          'It makes frequent stops and has limited legroom.',
          'It is the most expensive option.',
          'It does not offer Wi-Fi at all.',
          'It takes the longest of all options.',
        ],
        correctIndex: 0,
        explanation:
          'Casey dislikes journeys with "too many stops," and the bus makes "frequent stops" with "limited legroom."',
      },
      {
        prompt: 'Which option is the fastest?',
        options: ['The flight', 'The car', 'The train', 'The bus'],
        correctIndex: 0,
        explanation:
          'The flight takes 1 hour, the shortest duration in the diagram.',
      },
      {
        prompt:
          'If Casey suddenly needed to arrive as quickly as possible regardless of price, which two factors about the flight should she still consider?',
        options: [
          'The airport is 45 minutes away and there are baggage fees.',
          'The scenic route and the free Wi-Fi.',
          'The border wait and flexible timing.',
          'The frequent stops and limited legroom.',
        ],
        correctIndex: 0,
        explanation:
          'The flight’s notes warn that the "airport [is] 45 min away" and there are "baggage fees," which add time and cost.',
      },
      {
        prompt: 'Why would driving be a poor choice for Casey specifically?',
        options: [
          'She gets carsick and prefers not to drive.',
          'It is the most expensive option.',
          'It offers no flexibility in timing.',
          'It has no space for luggage.',
        ],
        correctIndex: 0,
        explanation:
          'Casey says she "get[s] carsick easily" and would "rather not drive."',
      },
    ],
  },
  {
    id: 'r2-02',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Choosing a Fitness Membership',
    topic: 'Comparing gym plans',
    difficulty: 'medium',
    instruction:
      'Study the diagram of membership plans, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'Northside Gym — Membership Plans',
      caption: 'Monthly plans and what each includes.',
      rows: [
        {
          label: 'Basic',
          icon: 'users',
          cells: [
            { label: 'Price', lines: ['$25/mo'] },
            { label: 'Access', lines: ['Gym floor only', '6 a.m.–10 p.m.'] },
            { label: 'Classes', lines: ['Not included'] },
          ],
        },
        {
          label: 'Plus',
          icon: 'users',
          cells: [
            { label: 'Price', lines: ['$45/mo'] },
            { label: 'Access', lines: ['Gym + pool', '24 hours'] },
            { label: 'Classes', lines: ['4 per month'] },
          ],
        },
        {
          label: 'Premium',
          icon: 'users',
          cells: [
            { label: 'Price', lines: ['$70/mo'] },
            { label: 'Access', lines: ['All facilities', '24 hours'] },
            { label: 'Classes', lines: ['Unlimited', '+ 1 trainer session'] },
          ],
        },
      ],
    },
    passage: [
      'Hi Sam,',
      'I want to join Northside Gym, but I am trying to keep my spending sensible. My main goal is to swim in the mornings before work, and I would like to try a few group classes now and then — maybe once a week.',
      'I do not need a personal trainer yet, and I probably will not go often enough to need unlimited classes. Which plan do you think fits me best?',
      'Thanks, Riley',
    ],
    questions: [
      {
        prompt: 'Which plan best fits Riley’s needs?',
        options: ['Plus', 'Basic', 'Premium', 'None of them'],
        correctIndex: 0,
        explanation:
          'Riley needs pool access and about four classes a month but no trainer or unlimited classes. The Plus plan includes the pool and 4 classes per month.',
      },
      {
        prompt: 'Why is the Basic plan unsuitable for Riley?',
        options: [
          'It does not include pool access or classes.',
          'It is too expensive.',
          'It is only open at night.',
          'It requires a personal trainer.',
        ],
        correctIndex: 0,
        explanation:
          'Basic is "Gym floor only" with classes "not included," but Riley wants to swim and take classes.',
      },
      {
        prompt: 'Why does Riley not need the Premium plan?',
        options: [
          'He does not want a trainer or unlimited classes.',
          'It does not include the pool.',
          'It is not open in the mornings.',
          'It has no group classes.',
        ],
        correctIndex: 0,
        explanation:
          'Premium adds unlimited classes and a trainer session, which Riley says he does not need "yet."',
      },
      {
        prompt: 'Riley wants to swim before work. Which plans allow early morning pool use?',
        options: [
          'Plus and Premium (24-hour access).',
          'Basic only.',
          'Premium only.',
          'None of the plans.',
        ],
        correctIndex: 0,
        explanation:
          'Only Plus and Premium include the pool, and both offer 24-hour access, covering early mornings.',
      },
      {
        prompt: 'How much would Riley pay each month for the recommended plan?',
        options: ['$45', '$25', '$70', '$90'],
        correctIndex: 0,
        explanation:
          'The Plus plan, which fits Riley best, costs $45 per month.',
      },
    ],
  },
  {
    id: 'r2-03',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Selecting a Meeting Room',
    topic: 'Booking a room for a workshop',
    difficulty: 'medium',
    instruction:
      'Study the diagram of meeting rooms, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'Community Centre — Bookable Rooms',
      caption: 'Capacity and features per room.',
      rows: [
        {
          label: 'Oak Room',
          icon: 'building',
          cells: [
            { label: 'Capacity', lines: ['10 people'] },
            { label: 'Features', lines: ['Whiteboard', 'No projector'] },
            { label: 'Rate', lines: ['$15/hr'] },
          ],
        },
        {
          label: 'Maple Hall',
          icon: 'building',
          cells: [
            { label: 'Capacity', lines: ['40 people'] },
            { label: 'Features', lines: ['Projector', 'Sound system'] },
            { label: 'Rate', lines: ['$50/hr'] },
          ],
        },
        {
          label: 'Birch Studio',
          icon: 'building',
          cells: [
            { label: 'Capacity', lines: ['20 people'] },
            { label: 'Features', lines: ['Projector', 'Movable tables'] },
            { label: 'Rate', lines: ['$30/hr'] },
          ],
        },
      ],
    },
    passage: [
      'Hello,',
      'I am organising a hands-on writing workshop for about eighteen participants next month. I will need a projector for my slides, and it is important that people can rearrange into small groups, so movable tables would be a big help.',
      'I would like to keep costs moderate — the large hall is more than we need. The workshop runs for three hours.',
      'Which room would you recommend, and what would the total cost be?',
      'Regards, Dana',
    ],
    questions: [
      {
        prompt: 'Which room best fits Dana’s workshop?',
        options: ['Birch Studio', 'Oak Room', 'Maple Hall', 'Any of them'],
        correctIndex: 0,
        explanation:
          'Dana needs a projector, movable tables, and space for 18 people at a moderate cost. Birch Studio holds 20, has a projector and movable tables at $30/hr.',
      },
      {
        prompt: 'Why is the Oak Room unsuitable?',
        options: [
          'It is too small and has no projector.',
          'It is the most expensive option.',
          'It has no whiteboard.',
          'It only holds 40 people.',
        ],
        correctIndex: 0,
        explanation:
          'Oak Room holds only 10 people and has "no projector," but Dana needs a projector for 18 participants.',
      },
      {
        prompt: 'Why does Dana not want Maple Hall?',
        options: [
          'It is larger and more expensive than needed.',
          'It lacks a projector.',
          'It has no sound system.',
          'It cannot be rearranged.',
        ],
        correctIndex: 0,
        explanation:
          'Dana says "the large hall is more than we need" and wants moderate costs; Maple Hall is $50/hr for 40 people.',
      },
      {
        prompt: 'What would the total cost be for the recommended room?',
        options: ['$90', '$45', '$150', '$30'],
        correctIndex: 0,
        explanation:
          'Birch Studio costs $30/hr and the workshop runs three hours: 30 × 3 = $90.',
      },
      {
        prompt: 'Which feature makes small-group work easier?',
        options: [
          'Movable tables.',
          'The sound system.',
          'The whiteboard.',
          'The larger capacity.',
        ],
        correctIndex: 0,
        explanation:
          'Dana specifically wants people to "rearrange into small groups," which "movable tables" enable.',
      },
    ],
  },
  {
    id: 'r2-04',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Comparing Phone Plans',
    topic: 'Picking a mobile plan',
    difficulty: 'hard',
    instruction:
      'Study the diagram of phone plans, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'CellFast — Monthly Plans',
      caption: 'Data, calling, and extras for each plan.',
      rows: [
        {
          label: 'Lite',
          icon: 'clock',
          cells: [
            { label: 'Price', lines: ['$20'] },
            { label: 'Data', lines: ['3 GB'] },
            { label: 'Extras', lines: ['Canada calling', 'No roaming'] },
          ],
        },
        {
          label: 'Standard',
          icon: 'clock',
          cells: [
            { label: 'Price', lines: ['$35'] },
            { label: 'Data', lines: ['15 GB'] },
            { label: 'Extras', lines: ['Canada + US calling', 'No roaming'] },
          ],
        },
        {
          label: 'Global',
          icon: 'clock',
          cells: [
            { label: 'Price', lines: ['$55'] },
            { label: 'Data', lines: ['30 GB'] },
            { label: 'Extras', lines: ['Intl. calling', 'Roaming included'] },
          ],
        },
      ],
    },
    passage: [
      'Hi Alex,',
      'I need help choosing a new phone plan. I stream music and use maps a lot, so 3 GB would definitely not be enough for me. I also call my family in the United States most weekends, which is important.',
      'However, I rarely travel outside North America, so paying extra for international roaming would be a waste. I would like the best value that still covers my calling needs.',
      'What would you pick?',
      'Thanks, Morgan',
    ],
    questions: [
      {
        prompt: 'Which plan best matches Morgan’s needs?',
        options: ['Standard', 'Lite', 'Global', 'None'],
        correctIndex: 0,
        explanation:
          'Morgan needs plenty of data and US calling but not roaming. Standard offers 15 GB and Canada + US calling for $35 without paying for unused roaming.',
      },
      {
        prompt: 'Why is the Lite plan unsuitable?',
        options: [
          'Its 3 GB of data is not enough and it lacks US calling.',
          'It is the most expensive plan.',
          'It includes roaming Morgan does not need.',
          'It does not allow calls within Canada.',
        ],
        correctIndex: 0,
        explanation:
          'Morgan says 3 GB "would definitely not be enough" and needs US calling, which Lite lacks.',
      },
      {
        prompt: 'Why would the Global plan be a poor value for Morgan?',
        options: [
          'He would pay extra for roaming he rarely uses.',
          'It does not include US calling.',
          'It offers too little data.',
          'It cannot make calls within Canada.',
        ],
        correctIndex: 0,
        explanation:
          'Morgan "rarely travel[s] outside North America," so paying for Global’s roaming "would be a waste."',
      },
      {
        prompt: 'Which requirement rules out the Lite plan on calling alone?',
        options: [
          'Morgan calls family in the United States.',
          'Morgan needs unlimited data.',
          'Morgan travels internationally.',
          'Morgan wants a cheaper plan.',
        ],
        correctIndex: 0,
        explanation:
          'Lite only includes "Canada calling," but Morgan needs US calling for his weekend calls.',
      },
      {
        prompt: 'How much would Morgan save monthly by choosing Standard over Global?',
        options: ['$20', '$15', '$35', '$5'],
        correctIndex: 0,
        explanation:
          'Global is $55 and Standard is $35; the difference is $20 per month.',
      },
    ],
  },
  {
    id: 'r2-05',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Booking a Campsite',
    topic: 'Choosing a campground site',
    difficulty: 'medium',
    instruction:
      'Study the diagram of campsites, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'Pinecrest Campground — Site Types',
      caption: 'Features of each site type per night.',
      rows: [
        {
          label: 'Tent Site',
          icon: 'map',
          cells: [
            { label: 'Price', lines: ['$20/night'] },
            { label: 'Power', lines: ['No electricity'] },
            { label: 'Extras', lines: ['Near washrooms', 'Fire pit'] },
          ],
        },
        {
          label: 'RV Site',
          icon: 'car',
          cells: [
            { label: 'Price', lines: ['$40/night'] },
            { label: 'Power', lines: ['Full hookup'] },
            { label: 'Extras', lines: ['Paved pad', 'Water tap'] },
          ],
        },
        {
          label: 'Cabin',
          icon: 'home',
          cells: [
            { label: 'Price', lines: ['$85/night'] },
            { label: 'Power', lines: ['Electricity + heat'] },
            { label: 'Extras', lines: ['Beds for 4', 'Mini-kitchen'] },
          ],
        },
      ],
    },
    passage: [
      'Hi Pat,',
      'I am planning a two-night camping trip for our family of four. We will be sleeping in a tent, so we do not need beds, but I would love to be close to the washrooms since we have young kids.',
      'We are watching our budget carefully, and we do not have an RV or need electricity — we just want a fire pit for cooking marshmallows. What should I book?',
      'Cheers, Jamie',
    ],
    questions: [
      {
        prompt: 'Which site best fits Jamie’s family?',
        options: ['Tent Site', 'RV Site', 'Cabin', 'Any of them'],
        correctIndex: 0,
        explanation:
          'Jamie has a tent, no RV, wants to be near washrooms with a fire pit, and is budget-conscious. The Tent Site matches all of these at $20/night.',
      },
      {
        prompt: 'Why is the Cabin unnecessary for them?',
        options: [
          'They are sleeping in a tent and do not need beds.',
          'It has no electricity.',
          'It is too far from the washrooms.',
          'It has no kitchen.',
        ],
        correctIndex: 0,
        explanation:
          'Jamie says they "will be sleeping in a tent, so we do not need beds," which the cabin provides.',
      },
      {
        prompt: 'Why is the RV Site not a good match?',
        options: [
          'They have no RV and do not need electricity.',
          'It is the cheapest option.',
          'It has no water tap.',
          'It is only for tents.',
        ],
        correctIndex: 0,
        explanation:
          'Jamie says "we do not have an RV or need electricity," but the RV Site is built around full hookups.',
      },
      {
        prompt: 'What would the total cost be for the recommended site?',
        options: ['$40', '$20', '$80', '$85'],
        correctIndex: 0,
        explanation:
          'The Tent Site is $20/night for two nights: 20 × 2 = $40.',
      },
      {
        prompt: 'Which feature did Jamie specifically request for cooking?',
        options: [
          'A fire pit.',
          'A mini-kitchen.',
          'A water tap.',
          'A paved pad.',
        ],
        correctIndex: 0,
        explanation:
          'Jamie wants "a fire pit for cooking marshmallows," a feature of the Tent Site.',
      },
    ],
  },
  {
    id: 'r2-06',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Choosing a Language Course',
    topic: 'Selecting a French class',
    difficulty: 'medium',
    instruction:
      'Study the diagram of language courses, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'City College — French Courses',
      caption: 'Schedule and format of each course.',
      rows: [
        {
          label: 'Morning',
          icon: 'calendar',
          cells: [
            { label: 'Time', lines: ['Mon/Wed 9 a.m.'] },
            { label: 'Format', lines: ['In person'] },
            { label: 'Level', lines: ['Beginner'] },
          ],
        },
        {
          label: 'Evening',
          icon: 'calendar',
          cells: [
            { label: 'Time', lines: ['Tue/Thu 7 p.m.'] },
            { label: 'Format', lines: ['In person'] },
            { label: 'Level', lines: ['Intermediate'] },
          ],
        },
        {
          label: 'Online',
          icon: 'calendar',
          cells: [
            { label: 'Time', lines: ['Sat 10 a.m.'] },
            { label: 'Format', lines: ['Live video'] },
            { label: 'Level', lines: ['Beginner'] },
          ],
        },
      ],
    },
    passage: [
      'Hi,',
      'I would like to start learning French. I am a complete beginner, so I need a course at the right level. I work full-time during the week, which makes weekday classes impossible for me.',
      'I would prefer to attend from home if I can, since I do not have a car and the campus is far away. Which course should I sign up for?',
      'Thank you, Robin',
    ],
    questions: [
      {
        prompt: 'Which course best fits Robin?',
        options: ['Online', 'Morning', 'Evening', 'None'],
        correctIndex: 0,
        explanation:
          'Robin is a beginner who cannot attend on weekdays and prefers to study from home. The Online course is beginner-level, on Saturday, and via live video.',
      },
      {
        prompt: 'Why can Robin not take the Morning course?',
        options: [
          'It is on weekdays while Robin works.',
          'It is only for advanced students.',
          'It is held online.',
          'It is too expensive.',
        ],
        correctIndex: 0,
        explanation:
          'The Morning course runs Mon/Wed, but weekday classes are "impossible" for Robin.',
      },
      {
        prompt: 'Why is the Evening course unsuitable, even setting aside the schedule?',
        options: [
          'It is at the intermediate level, not beginner.',
          'It is fully online.',
          'It meets only once a week.',
          'It requires a car to attend.',
        ],
        correctIndex: 0,
        explanation:
          'The Evening course is "Intermediate," but Robin is "a complete beginner."',
      },
      {
        prompt: 'Which of Robin’s constraints does the online format solve?',
        options: [
          'Not having a car to reach a distant campus.',
          'Needing an intermediate class.',
          'Wanting weekday morning lessons.',
          'Preferring recorded lessons.',
        ],
        correctIndex: 0,
        explanation:
          'Robin has no car and the campus is far; the Online course lets Robin "attend from home."',
      },
      {
        prompt: 'On which day does the recommended course meet?',
        options: ['Saturday', 'Monday', 'Thursday', 'Sunday'],
        correctIndex: 0,
        explanation:
          'The Online course meets "Sat 10 a.m."',
      },
    ],
  },
  {
    id: 'r2-07',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Picking a Delivery Service',
    topic: 'Shipping a package',
    difficulty: 'hard',
    instruction:
      'Study the diagram of delivery services, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'QuickShip — Delivery Options',
      caption: 'Speed, cost, and tracking for each service.',
      rows: [
        {
          label: 'Economy',
          icon: 'ship',
          cells: [
            { label: 'Cost', lines: ['$8'] },
            { label: 'Speed', lines: ['5–7 days'] },
            { label: 'Tracking', lines: ['Basic'] },
          ],
        },
        {
          label: 'Express',
          icon: 'plane',
          cells: [
            { label: 'Cost', lines: ['$18'] },
            { label: 'Speed', lines: ['2 days'] },
            { label: 'Tracking', lines: ['Full + signature'] },
          ],
        },
        {
          label: 'Same-Day',
          icon: 'bike',
          cells: [
            { label: 'Cost', lines: ['$35'] },
            { label: 'Speed', lines: ['Within city only'] },
            { label: 'Tracking', lines: ['Live GPS'] },
          ],
        },
      ],
    },
    passage: [
      'Hi,',
      'I need to send an important signed contract to a client in another province. It must arrive quickly — within a couple of days — and I want proof that someone received it, because it is a legal document.',
      'The Same-Day service is not an option because the client is not in my city, and I do not want to pay for the slowest service and risk it being late. What do you suggest?',
      'Regards, Taylor',
    ],
    questions: [
      {
        prompt: 'Which service best fits Taylor’s needs?',
        options: ['Express', 'Economy', 'Same-Day', 'None'],
        correctIndex: 0,
        explanation:
          'Taylor needs fast, out-of-province delivery with proof of receipt. Express delivers in 2 days with "Full + signature" tracking.',
      },
      {
        prompt: 'Why is Same-Day not possible?',
        options: [
          'It only delivers within the city.',
          'It has no tracking.',
          'It is the slowest option.',
          'It does not provide a signature.',
        ],
        correctIndex: 0,
        explanation:
          'Same-Day is "within city only," but the client is "in another province."',
      },
      {
        prompt: 'Why does Taylor avoid the Economy service?',
        options: [
          'It takes 5–7 days and risks arriving late.',
          'It is the most expensive option.',
          'It offers no delivery outside the city.',
          'It provides only live GPS tracking.',
        ],
        correctIndex: 0,
        explanation:
          'Taylor does not want "the slowest service and risk it being late"; Economy takes 5–7 days.',
      },
      {
        prompt: 'Which feature meets Taylor’s need for proof of receipt?',
        options: [
          'Signature tracking with Express.',
          'Basic tracking with Economy.',
          'Live GPS with Same-Day.',
          'No tracking is needed.',
        ],
        correctIndex: 0,
        explanation:
          'Taylor wants "proof that someone received it"; Express includes "Full + signature" tracking.',
      },
      {
        prompt: 'How much more does Express cost than Economy?',
        options: ['$10', '$18', '$27', '$8'],
        correctIndex: 0,
        explanation:
          'Express is $18 and Economy is $8; the difference is $10.',
      },
    ],
  },
  {
    id: 'r2-08',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Renting a Bicycle',
    topic: 'Choosing a bike rental package',
    difficulty: 'easy',
    instruction:
      'Study the diagram of rental packages, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'Harbour Cycles — Rental Packages',
      caption: 'Duration and inclusions for each package.',
      rows: [
        {
          label: 'Hourly',
          icon: 'bike',
          cells: [
            { label: 'Price', lines: ['$6/hr'] },
            { label: 'Best for', lines: ['Short rides'] },
            { label: 'Includes', lines: ['Helmet'] },
          ],
        },
        {
          label: 'Day Pass',
          icon: 'bike',
          cells: [
            { label: 'Price', lines: ['$25/day'] },
            { label: 'Best for', lines: ['Full-day trips'] },
            { label: 'Includes', lines: ['Helmet + lock + map'] },
          ],
        },
        {
          label: 'Weekly',
          icon: 'bike',
          cells: [
            { label: 'Price', lines: ['$120/week'] },
            { label: 'Best for', lines: ['Long visits'] },
            { label: 'Includes', lines: ['Helmet + lock + repairs'] },
          ],
        },
      ],
    },
    passage: [
      'Hi there,',
      'I am visiting the city for one day and want to explore the whole waterfront by bike. I will be out for most of the day, so I need something that lasts longer than an hour or two.',
      'I am not familiar with the area, so a map would be really useful, and I would like to lock the bike safely when I stop for lunch. Which package makes the most sense?',
      'Thanks, Nadia',
    ],
    questions: [
      {
        prompt: 'Which package best fits Nadia?',
        options: ['Day Pass', 'Hourly', 'Weekly', 'None'],
        correctIndex: 0,
        explanation:
          'Nadia needs a bike for a full day with a map and a lock. The Day Pass is "best for full-day trips" and includes a "Helmet + lock + map."',
      },
      {
        prompt: 'Why is the Hourly package unsuitable?',
        options: [
          'She will ride most of the day, longer than an hour or two.',
          'It does not include a helmet.',
          'It is more expensive than the Day Pass.',
          'It is only available for a week.',
        ],
        correctIndex: 0,
        explanation:
          'Nadia will "be out for most of the day," so the Hourly rate suits only "short rides."',
      },
      {
        prompt: 'Why does Nadia not need the Weekly package?',
        options: [
          'She is only visiting for one day.',
          'It does not include a lock.',
          'It has no map.',
          'It is the cheapest option.',
        ],
        correctIndex: 0,
        explanation:
          'Nadia is "visiting the city for one day," while the Weekly package suits "long visits."',
      },
      {
        prompt: 'Which two inclusions did Nadia specifically want?',
        options: [
          'A map and a lock.',
          'Repairs and a helmet.',
          'A map and repairs.',
          'A lock and repairs.',
        ],
        correctIndex: 0,
        explanation:
          'Nadia wanted "a map" to find her way and to "lock the bike safely," both in the Day Pass.',
      },
      {
        prompt: 'How much will Nadia pay?',
        options: ['$25', '$6', '$120', '$12'],
        correctIndex: 0,
        explanation:
          'The Day Pass costs $25 for the day.',
      },
    ],
  },
  {
    id: 'r2-09',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Selecting a Catering Package',
    topic: 'Ordering food for an office lunch',
    difficulty: 'medium',
    instruction:
      'Study the diagram of catering packages, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'Green Fork Catering — Packages',
      caption: 'Per-person options for group meals.',
      rows: [
        {
          label: 'Sandwich',
          icon: 'users',
          cells: [
            { label: 'Price', lines: ['$9/person'] },
            { label: 'Includes', lines: ['Wraps', 'Chips'] },
            { label: 'Diet', lines: ['Veg option'] },
          ],
        },
        {
          label: 'Hot Buffet',
          icon: 'users',
          cells: [
            { label: 'Price', lines: ['$16/person'] },
            { label: 'Includes', lines: ['Mains', 'Sides', 'Salad'] },
            { label: 'Diet', lines: ['Veg + gluten-free'] },
          ],
        },
        {
          label: 'Deluxe',
          icon: 'users',
          cells: [
            { label: 'Price', lines: ['$28/person'] },
            { label: 'Includes', lines: ['3 courses', 'Server'] },
            { label: 'Diet', lines: ['All diets'] },
          ],
        },
      ],
    },
    passage: [
      'Hi,',
      'I am arranging lunch for a team of twelve. Two of my colleagues need gluten-free meals, and one is vegetarian, so I have to be sure everyone is covered. We want a proper hot meal, not just sandwiches.',
      'This is a casual working lunch, though, so we do not need servers or a fancy three-course meal. I would like to keep it reasonable. Which package fits?',
      'Thanks, Chris',
    ],
    questions: [
      {
        prompt: 'Which package best fits Chris’s team lunch?',
        options: ['Hot Buffet', 'Sandwich', 'Deluxe', 'None'],
        correctIndex: 0,
        explanation:
          'Chris wants a hot meal covering gluten-free and vegetarian diets without servers. The Hot Buffet offers mains and salad with "Veg + gluten-free" options.',
      },
      {
        prompt: 'Why is the Sandwich package unsuitable?',
        options: [
          'It is not a hot meal and lacks gluten-free options.',
          'It is too expensive.',
          'It has no vegetarian choice.',
          'It requires a server.',
        ],
        correctIndex: 0,
        explanation:
          'Chris wants "a proper hot meal, not just sandwiches," and needs gluten-free, which the Sandwich package does not list.',
      },
      {
        prompt: 'Why does Chris not need the Deluxe package?',
        options: [
          'It has servers and three courses, which are unnecessary.',
          'It does not cover all diets.',
          'It offers no salad.',
          'It is the cheapest option.',
        ],
        correctIndex: 0,
        explanation:
          'Chris says "we do not need servers or a fancy three-course meal," which is what Deluxe provides.',
      },
      {
        prompt: 'What is the total cost for the recommended package?',
        options: ['$192', '$108', '$336', '$160'],
        correctIndex: 0,
        explanation:
          'The Hot Buffet is $16/person for 12 people: 16 × 12 = $192.',
      },
      {
        prompt: 'Which dietary needs must the chosen package cover?',
        options: [
          'Gluten-free and vegetarian.',
          'Vegan only.',
          'Dairy-free and vegan.',
          'No special diets.',
        ],
        correctIndex: 0,
        explanation:
          'Two colleagues need "gluten-free" and one is "vegetarian," both covered by the Hot Buffet.',
      },
    ],
  },
  {
    id: 'r2-10',
    part: 2,
    partLabel: 'Reading to Apply a Diagram',
    title: 'Choosing a Hotel Room',
    topic: 'Booking accommodation for a conference',
    difficulty: 'hard',
    instruction:
      'Study the diagram of hotel rooms, then read the message and answer the questions.',
    timeMinutes: 9,
    diagram: {
      title: 'Lakeview Hotel — Room Types',
      caption: 'Nightly rate and features per room.',
      rows: [
        {
          label: 'Standard',
          icon: 'home',
          cells: [
            { label: 'Rate', lines: ['$110/night'] },
            { label: 'Desk', lines: ['Small table'] },
            { label: 'Extras', lines: ['Wi-Fi', 'No breakfast'] },
          ],
        },
        {
          label: 'Business',
          icon: 'building',
          cells: [
            { label: 'Rate', lines: ['$150/night'] },
            { label: 'Desk', lines: ['Large work desk'] },
            { label: 'Extras', lines: ['Wi-Fi', 'Breakfast', 'Late checkout'] },
          ],
        },
        {
          label: 'Suite',
          icon: 'building',
          cells: [
            { label: 'Rate', lines: ['$240/night'] },
            { label: 'Desk', lines: ['Office + lounge'] },
            { label: 'Extras', lines: ['Breakfast', 'Lake view', 'Minibar'] },
          ],
        },
      ],
    },
    passage: [
      'Hi,',
      'I am attending a two-day conference and need a room where I can work comfortably in the evenings, so a proper desk is essential. I would also appreciate breakfast included, since the mornings will be busy.',
      'I have a modest travel allowance, so a full suite would be more than my company will reimburse. A late checkout on the final day would be a nice bonus after the closing sessions. What do you recommend?',
      'Regards, Lee',
    ],
    questions: [
      {
        prompt: 'Which room best fits Lee’s needs?',
        options: ['Business', 'Standard', 'Suite', 'None'],
        correctIndex: 0,
        explanation:
          'Lee needs a proper desk, breakfast, and ideally late checkout within a modest budget. The Business room has a "Large work desk," breakfast, and late checkout at $150.',
      },
      {
        prompt: 'Why is the Standard room not ideal?',
        options: [
          'It has only a small table and no breakfast.',
          'It is the most expensive room.',
          'It has no Wi-Fi.',
          'It offers a lake view Lee does not want.',
        ],
        correctIndex: 0,
        explanation:
          'Lee needs a proper desk and breakfast; the Standard room has only a "Small table" and "No breakfast."',
      },
      {
        prompt: 'Why does Lee avoid the Suite?',
        options: [
          'It costs more than the company will reimburse.',
          'It has no desk.',
          'It does not include breakfast.',
          'It offers no late checkout.',
        ],
        correctIndex: 0,
        explanation:
          'Lee has "a modest travel allowance," and "a full suite would be more than my company will reimburse."',
      },
      {
        prompt: 'Which bonus feature did Lee mention wanting?',
        options: [
          'Late checkout on the final day.',
          'A minibar.',
          'A lake view.',
          'A lounge area.',
        ],
        correctIndex: 0,
        explanation:
          'Lee says "a late checkout on the final day would be a nice bonus," a feature of the Business room.',
      },
      {
        prompt: 'What is the total cost for two nights in the recommended room?',
        options: ['$300', '$220', '$480', '$260'],
        correctIndex: 0,
        explanation:
          'The Business room is $150/night for two nights: 150 × 2 = $300.',
      },
    ],
  },
]
