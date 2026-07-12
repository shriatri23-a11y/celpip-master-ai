import type { ReadingPracticeTest } from './types'

/**
 * CELPIP Reading Part 4 — Reading for Viewpoints.
 * Each test presents a short article expressing viewpoints followed by a reader
 * comment. Questions test comprehension of opinions, tone, and completing the
 * reader response with the best phrase.
 */
export const part4Tests: ReadingPracticeTest[] = [
  {
    id: 'r4-01',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'Should Cities Ban Cars Downtown?',
    topic: 'Car-free city centres',
    difficulty: 'medium',
    instruction:
      'Read the following article about car-free downtowns. Then answer the questions.',
    timeMinutes: 13,
    passage: [
      'For decades, city planners assumed that a healthy downtown depended on easy car access. Wide roads and generous parking were treated as signs of progress. Recently, however, a number of European and Asian cities have reversed this thinking, closing their central streets to private vehicles. Supporters argue that the results speak for themselves: cleaner air, quieter streets, and a surprising boost to local businesses.',
      'Critics remain unconvinced. They point out that not everyone can cycle or walk, and that elderly residents, parents with young children, and people with disabilities may find a car-free core difficult to navigate. Some shop owners also worry that customers who cannot park nearby will simply drive to suburban malls instead, taking their spending with them.',
      'The evidence so far is mixed but leans positive. In cities that phased in restrictions gradually and invested heavily in buses, trams, and protected bike lanes, foot traffic and retail sales generally rose within two years. Where bans were imposed suddenly, without strong transit alternatives, complaints multiplied and some measures were quietly rolled back.',
      'What seems clear is that banning cars is not a single policy but a package. Success appears to depend less on the ban itself and more on what replaces the car: frequent public transport, safe cycling routes, and pleasant public spaces where people actually want to spend time.',
    ],
    questions: [
      {
        prompt: 'What was the traditional assumption among city planners?',
        options: [
          'That a thriving downtown required easy access for cars.',
          'That downtowns should be closed to private vehicles.',
          'That public transport was the key to progress.',
          'That parking should be limited to encourage cycling.',
        ],
        correctIndex: 0,
        explanation:
          'The first paragraph states planners "assumed that a healthy downtown depended on easy car access," with roads and parking seen as progress.',
      },
      {
        prompt: 'Which concern do critics of car-free downtowns raise?',
        options: [
          'That some residents, such as the elderly or disabled, may struggle to get around.',
          'That air quality will worsen without cars.',
          'That streets will become too quiet for businesses.',
          'That cycling is dangerous in city centres.',
        ],
        correctIndex: 0,
        explanation:
          'Critics note that "elderly residents, parents with young children, and people with disabilities may find a car-free core difficult to navigate."',
      },
      {
        prompt: 'According to the article, when did car-free measures tend to succeed?',
        options: [
          'When introduced gradually alongside strong transit and bike investment.',
          'When imposed suddenly to force quick change.',
          'When combined with more downtown parking.',
          'When limited to weekends only.',
        ],
        correctIndex: 0,
        explanation:
          'Cities that "phased in restrictions gradually and invested heavily in buses, trams, and protected bike lanes" saw foot traffic and sales rise.',
      },
      {
        prompt: 'What is the author\u2019s overall conclusion?',
        options: [
          'Banning cars works best as part of a wider package of transport and public-space improvements.',
          'Car bans always fail without exception.',
          'Cars should never be restricted in any city.',
          'Suburban malls are the future of retail.',
        ],
        correctIndex: 0,
        explanation:
          'The final paragraph argues success "depends less on the ban itself and more on what replaces the car."',
      },
      {
        prompt: 'How would you best describe the author\u2019s tone?',
        options: [
          'Balanced and cautiously optimistic.',
          'Angry and dismissive of critics.',
          'Completely opposed to car restrictions.',
          'Uninterested in the outcome.',
        ],
        correctIndex: 0,
        explanation:
          'The author presents both sides fairly and notes the evidence "leans positive," reflecting a balanced, cautiously optimistic tone.',
      },
    ],
    diagram: undefined,
  },
  {
    id: 'r4-02',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'The Four-Day Work Week',
    topic: 'Shorter working weeks',
    difficulty: 'medium',
    instruction:
      'Read the following article about the four-day work week. Then answer the questions.',
    timeMinutes: 13,
    passage: [
      'The idea of a four-day work week has moved from fringe experiment to mainstream debate. Several large trials, most notably in Iceland and the United Kingdom, have reported that employees working fewer hours were just as productive, and sometimes more so, than those on a standard schedule. Enthusiasts see this as proof that the traditional five-day model is an outdated habit rather than an economic necessity.',
      'Not everyone is persuaded. Some economists caution that the trials tended to involve office-based knowledge workers, whose output is easier to compress. Hospitals, factories, and shops, they argue, cannot simply close an extra day, and squeezing the same work into fewer days may raise stress rather than lower it. There is also the question of pay: workers understandably expect no reduction in salary, which raises costs for employers.',
      'Supporters respond that the productivity gains often offset the shorter hours. Rested employees, they say, waste less time, take fewer sick days, and stay with their companies longer, reducing the expense of hiring and training replacements. Several firms that adopted the model permanently report that they would not go back.',
      'Perhaps the fairest summary is that the four-day week suits some workplaces far better than others. Rather than a universal rule, it may become one option among many as employers experiment with flexible schedules to attract and keep talented staff.',
    ],
    questions: [
      {
        prompt: 'What did the trials in Iceland and the UK reportedly find?',
        options: [
          'Employees working fewer hours were just as productive, sometimes more so.',
          'Productivity dropped sharply with fewer working hours.',
          'Employees preferred longer hours for higher pay.',
          'The trials were abandoned before results were collected.',
        ],
        correctIndex: 0,
        explanation:
          'The first paragraph reports employees "were just as productive, and sometimes more so, than those on a standard schedule."',
      },
      {
        prompt: 'Why do some economists doubt the four-day week can be universal?',
        options: [
          'Many jobs, such as those in hospitals or factories, cannot simply close an extra day.',
          'Office workers dislike shorter weeks.',
          'It always reduces worker pay.',
          'It has never been tested anywhere.',
        ],
        correctIndex: 0,
        explanation:
          'Economists note that "hospitals, factories, and shops... cannot simply close an extra day."',
      },
      {
        prompt: 'What benefit do supporters say offsets the shorter hours?',
        options: [
          'Rested employees waste less time, take fewer sick days, and stay longer.',
          'Employers can pay lower wages.',
          'Customers spend more on the extra day off.',
          'Factories can run around the clock.',
        ],
        correctIndex: 0,
        explanation:
          'Supporters argue rested workers "waste less time, take fewer sick days, and stay with their companies longer."',
      },
      {
        prompt: 'What is the article\u2019s balanced conclusion?',
        options: [
          'The four-day week suits some workplaces better than others.',
          'Every company should adopt it immediately.',
          'The idea should be abandoned entirely.',
          'Only factories benefit from shorter weeks.',
        ],
        correctIndex: 0,
        explanation:
          'The final paragraph says it "suits some workplaces far better than others" and may become one option among many.',
      },
      {
        prompt: 'A reader comments: "As a nurse, I like the idea, but my ward simply can\u2019t ____." Which best completes the sentence?',
        options: [
          'shut down for an extra day each week',
          'hire more office workers',
          'reduce everyone\u2019s salary',
          'move to the suburbs',
        ],
        correctIndex: 0,
        explanation:
          'The article specifically notes hospitals cannot close an extra day, so a nurse would echo that a ward cannot "shut down for an extra day each week."',
      },
    ],
    diagram: undefined,
  },
  {
    id: 'r4-03',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'Homework: Help or Hindrance?',
    topic: 'The value of school homework',
    difficulty: 'easy',
    instruction:
      'Read the following article about school homework. Then answer the questions.',
    timeMinutes: 12,
    passage: [
      'Few school traditions spark as much disagreement among parents as homework. For generations it was accepted without question: children came home, opened their books, and practised what they had learned. Lately, though, a growing number of teachers and researchers have begun to ask whether all that after-school work actually helps.',
      'Those in favour argue that homework builds discipline and lets students review material at their own pace. A child who is confused in class, they say, has a chance to slow down at home and truly understand a concept. Homework also keeps parents informed about what their children are studying.',
      'Opponents counter that much homework is simply busywork that eats into family time, sleep, and play. They point to studies suggesting that in the early grades, homework has little measurable effect on achievement. Worse, they argue, it can widen gaps between children whose parents can help and those whose parents cannot.',
      'A moderate position is gaining ground: keep homework light and purposeful. Rather than assigning worksheets every night, some schools now favour a small amount of meaningful reading or a single focused task, leaving children time to rest and pursue their own interests.',
    ],
    questions: [
      {
        prompt: 'What has recently changed regarding attitudes to homework?',
        options: [
          'Teachers and researchers have started questioning whether it helps.',
          'Parents have demanded far more homework.',
          'Homework has been made illegal in most schools.',
          'Students have stopped attending class.',
        ],
        correctIndex: 0,
        explanation:
          'The first paragraph notes that teachers and researchers "have begun to ask whether all that after-school work actually helps."',
      },
      {
        prompt: 'Which argument do supporters of homework make?',
        options: [
          'It builds discipline and lets students review at their own pace.',
          'It replaces the need for classroom teaching.',
          'It guarantees higher test scores for every child.',
          'It reduces the workload for teachers.',
        ],
        correctIndex: 0,
        explanation:
          'Supporters argue homework "builds discipline and lets students review material at their own pace."',
      },
      {
        prompt: 'What concern do opponents raise?',
        options: [
          'It can widen gaps between children with and without parental help.',
          'It makes children too disciplined.',
          'It gives parents too much free time.',
          'It shortens the school day.',
        ],
        correctIndex: 0,
        explanation:
          'Opponents warn homework "can widen gaps between children whose parents can help and those whose parents cannot."',
      },
      {
        prompt: 'What is the moderate position described in the article?',
        options: [
          'Keep homework light and purposeful.',
          'Ban homework in all grades.',
          'Assign worksheets every single night.',
          'Replace class time with homework.',
        ],
        correctIndex: 0,
        explanation:
          'The final paragraph describes a moderate view: "keep homework light and purposeful."',
      },
      {
        prompt: 'A parent writes: "I agree homework has value, but for my six-year-old, a nightly stack of worksheets feels like ____." Which best completes the comment?',
        options: [
          'busywork that eats into family time',
          'the best use of the evening',
          'a guaranteed path to top grades',
          'too little practice',
        ],
        correctIndex: 0,
        explanation:
          'The article calls excessive homework "busywork that eats into family time, sleep, and play," which matches the parent\u2019s concern.',
      },
    ],
    diagram: undefined,
  },
  {
    id: 'r4-04',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'Are Ratings and Reviews Trustworthy?',
    topic: 'Online reviews',
    difficulty: 'medium',
    instruction:
      'Read the following article about online reviews. Then answer the questions.',
    timeMinutes: 13,
    passage: [
      'Before buying almost anything online, millions of shoppers now scroll straight to the star ratings and customer reviews. For many, these opinions from strangers carry more weight than any advertisement. Yet a lively debate has emerged about whether the review economy can still be trusted.',
      'Defenders of reviews say they have democratised information. A small business with genuinely happy customers can now compete with a large brand, and a poorly made product is quickly exposed. For everyday decisions, they argue, the average of hundreds of reviews is usually a reliable guide, even if a few entries are fake.',
      'Skeptics are less relaxed. They warn that some sellers pay for glowing reviews or bury negative ones, and that competitors sometimes post unfair criticism. Emotional extremes are also over-represented: people who are furious or delighted are far more likely to write than the quietly satisfied majority, which can distort the picture.',
      'Most experts land somewhere in between. Reviews, they suggest, are a useful tool rather than a verdict. Reading a spread of comments, ignoring the most extreme, and checking whether complaints repeat is a smarter approach than trusting a single number at the top of the page.',
    ],
    questions: [
      {
        prompt: 'Why do many shoppers rely on reviews?',
        options: [
          'They trust opinions from other customers more than advertisements.',
          'They are required to read them before purchasing.',
          'Reviews are always written by experts.',
          'Advertisements are no longer allowed online.',
        ],
        correctIndex: 0,
        explanation:
          'The article states these opinions "carry more weight than any advertisement" for many shoppers.',
      },
      {
        prompt: 'What benefit do defenders of reviews highlight?',
        options: [
          'They have democratised information, letting small businesses compete.',
          'They eliminate the need for any product testing.',
          'They guarantee every review is genuine.',
          'They lower the price of every product.',
        ],
        correctIndex: 0,
        explanation:
          'Defenders say reviews "have democratised information," helping small businesses compete with big brands.',
      },
      {
        prompt: 'Which problem do skeptics identify?',
        options: [
          'Some sellers pay for positive reviews or bury negative ones.',
          'Reviews are too difficult to find.',
          'Customers never read reviews.',
          'Reviews are always neutral and boring.',
        ],
        correctIndex: 0,
        explanation:
          'Skeptics warn that "some sellers pay for glowing reviews or bury negative ones."',
      },
      {
        prompt: 'What approach do most experts recommend?',
        options: [
          'Read a spread of comments and check whether complaints repeat.',
          'Trust only the single number at the top.',
          'Ignore all reviews entirely.',
          'Write your own review before buying.',
        ],
        correctIndex: 0,
        explanation:
          'Experts suggest "reading a spread of comments, ignoring the most extreme, and checking whether complaints repeat."',
      },
      {
        prompt: 'Why can review scores give a distorted picture?',
        options: [
          'Very angry or very delighted people are more likely to write than the quietly satisfied.',
          'Only experts are allowed to post them.',
          'Reviews are deleted after one day.',
          'Most products have no reviews at all.',
        ],
        correctIndex: 0,
        explanation:
          'The article notes "emotional extremes are also over-represented," distorting the overall picture.',
      },
    ],
    diagram: undefined,
  },
  {
    id: 'r4-05',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'Should Zoos Still Exist?',
    topic: 'The role of modern zoos',
    difficulty: 'medium',
    instruction:
      'Read the following article about the future of zoos. Then answer the questions.',
    timeMinutes: 13,
    passage: [
      'Zoos occupy an uncomfortable place in modern life. Loved by families and criticised by animal-welfare groups, they are asked to be both entertaining attractions and serious centres of conservation. As public attitudes toward animals shift, many people wonder whether keeping wild creatures behind glass can still be justified.',
      'Advocates insist that good zoos have transformed. The best now run breeding programmes that have saved species from extinction, fund research and field projects, and teach millions of visitors to care about wildlife they would otherwise never see. Without zoos, they argue, several animals alive today would have vanished.',
      'Critics reply that no enclosure, however spacious, can replace the wild. They point to animals that pace repetitively or show signs of stress, and question whether education truly requires captivity when documentaries and virtual experiences exist. For them, the comfort of a single animal outweighs the benefit to visitors.',
      'A middle path is emerging in the form of stricter standards. Some countries now ban the keeping of species that fare badly in captivity, while investing in large sanctuaries that prioritise the animals\u2019 needs over public viewing. The question, increasingly, is not whether zoos should exist but what kind of institution deserves the name.',
    ],
    questions: [
      {
        prompt: 'Why do zoos occupy "an uncomfortable place" in modern life?',
        options: [
          'They are expected to be both entertaining attractions and serious conservation centres.',
          'They are too expensive to build.',
          'They no longer attract any visitors.',
          'They are illegal in most countries.',
        ],
        correctIndex: 0,
        explanation:
          'The article says zoos "are asked to be both entertaining attractions and serious centres of conservation."',
      },
      {
        prompt: 'What do advocates say the best modern zoos do?',
        options: [
          'Run breeding programmes and fund research that help save species.',
          'Focus only on selling tickets.',
          'Release all their animals into cities.',
          'Replace documentaries entirely.',
        ],
        correctIndex: 0,
        explanation:
          'Advocates note the best zoos "run breeding programmes that have saved species from extinction" and fund research.',
      },
      {
        prompt: 'What is the critics\u2019 main objection?',
        options: [
          'No enclosure can truly replace the wild, and some animals show stress.',
          'Zoos are too educational.',
          'Documentaries are boring.',
          'Zoos have too few animals.',
        ],
        correctIndex: 0,
        explanation:
          'Critics argue "no enclosure, however spacious, can replace the wild," citing stressed animals.',
      },
      {
        prompt: 'What "middle path" is described?',
        options: [
          'Stricter standards, banning species that fare badly and building better sanctuaries.',
          'Closing every zoo immediately.',
          'Allowing zoos to keep any animal they wish.',
          'Replacing zoos with shopping centres.',
        ],
        correctIndex: 0,
        explanation:
          'The article describes stricter standards: banning ill-suited species and investing in sanctuaries that prioritise animals\u2019 needs.',
      },
      {
        prompt: 'What does the author suggest the real question has become?',
        options: [
          'Not whether zoos should exist, but what kind of institution deserves the name.',
          'Whether zoos can ever make a profit.',
          'How many animals a zoo can hold.',
          'Whether families still enjoy visiting.',
        ],
        correctIndex: 0,
        explanation:
          'The final line states the question "is not whether zoos should exist but what kind of institution deserves the name."',
      },
    ],
    diagram: undefined,
  },
  {
    id: 'r4-06',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'Screen Time for Young Children',
    topic: 'Children and digital devices',
    difficulty: 'easy',
    instruction:
      'Read the following article about children and screens. Then answer the questions.',
    timeMinutes: 12,
    passage: [
      'Walk into any waiting room and you will likely see a toddler absorbed in a glowing tablet. For busy parents, screens can feel like a lifesaver, buying a few quiet minutes to make a phone call or finish a meal. Yet few parenting topics generate as much guilt and confusion as how much screen time is too much.',
      'Some experts urge caution. Very young brains, they note, develop through real interaction, movement, and play. Time spent staring at a screen, they argue, is time not spent building the skills that matter most in early childhood, and heavy use has been linked to sleep and attention problems.',
      'Others take a gentler view. Not all screen time is equal, they say: a video call with a distant grandparent or a well-designed learning app is very different from hours of fast-paced cartoons. Context, content, and whether an adult watches along all shape whether screens help or harm.',
      'The advice that most professionals now offer is refreshingly practical. Keep screens out of mealtimes and bedrooms, choose quality content, watch together when you can, and remember that no app replaces conversation, books, and time outdoors.',
    ],
    questions: [
      {
        prompt: 'Why do screens appeal to busy parents?',
        options: [
          'They can buy a few quiet minutes for other tasks.',
          'They improve children\u2019s eyesight.',
          'They are required by schools.',
          'They replace the need for sleep.',
        ],
        correctIndex: 0,
        explanation:
          'The article says screens "can feel like a lifesaver, buying a few quiet minutes."',
      },
      {
        prompt: 'What concern do cautious experts raise?',
        options: [
          'Screen time replaces real interaction and play important for young brains.',
          'Screens are too expensive for most families.',
          'Children learn to read too quickly.',
          'Tablets are difficult to operate.',
        ],
        correctIndex: 0,
        explanation:
          'Cautious experts argue screen time is "time not spent building the skills that matter most in early childhood."',
      },
      {
        prompt: 'What point do the "gentler" experts make?',
        options: [
          'Not all screen time is equal; content and context matter.',
          'All screen time is harmful.',
          'Screens should replace books entirely.',
          'Children should never use devices.',
        ],
        correctIndex: 0,
        explanation:
          'They argue "not all screen time is equal," distinguishing a grandparent video call from endless cartoons.',
      },
      {
        prompt: 'Which practical advice does the article give?',
        options: [
          'Keep screens out of mealtimes and bedrooms and choose quality content.',
          'Give children unlimited access to any app.',
          'Ban all technology from the home.',
          'Use screens only during meals.',
        ],
        correctIndex: 0,
        explanation:
          'The final paragraph advises keeping "screens out of mealtimes and bedrooms" and choosing quality content.',
      },
      {
        prompt: 'A parent comments: "I felt guilty about the tablet, but this reminds me that watching a learning app together is not the same as ____." Which best completes the comment?',
        options: [
          'hours of fast-paced cartoons alone',
          'reading a bedtime story',
          'playing outdoors',
          'talking at dinner',
        ],
        correctIndex: 0,
        explanation:
          'The article contrasts a "well-designed learning app" with "hours of fast-paced cartoons," matching the parent\u2019s point.',
      },
    ],
    diagram: undefined,
  },
  {
    id: 'r4-07',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'Working From Home for Good?',
    topic: 'Remote work debates',
    difficulty: 'medium',
    instruction:
      'Read the following article about remote work. Then answer the questions.',
    timeMinutes: 13,
    passage: [
      'When offices emptied almost overnight a few years ago, many assumed the change would be temporary. Instead, remote work has proven remarkably sticky. Millions of employees, having tasted a commute-free life, are reluctant to return full time, and companies are still working out what the future of the workplace should look like.',
      'Fans of remote work list clear advantages. Workers save hours once lost to commuting, enjoy more control over their day, and can live farther from expensive city centres. Employers, meanwhile, can recruit talent from almost anywhere and often spend less on office space.',
      'Yet doubts persist. Managers worry that spontaneous conversations, mentoring, and team spirit suffer when colleagues rarely meet. New employees, in particular, may struggle to learn the unwritten rules of a workplace over video calls. Some studies also suggest that the line between work and home life blurs, leaving remote staff working longer, not shorter, hours.',
      'The likely outcome is a hybrid compromise. Rather than choosing between the office and the kitchen table, many organisations now expect staff to come in for a few days a week, reserving in-person time for collaboration and keeping focused solo work at home.',
    ],
    questions: [
      {
        prompt: 'What surprised many people about remote work?',
        options: [
          'It proved lasting rather than temporary.',
          'It was quickly banned by governments.',
          'No one wanted to try it.',
          'It lowered everyone\u2019s pay.',
        ],
        correctIndex: 0,
        explanation:
          'The article notes that instead of being temporary, "remote work has proven remarkably sticky."',
      },
      {
        prompt: 'Which advantage of remote work is mentioned for employers?',
        options: [
          'They can recruit talent from almost anywhere and spend less on offices.',
          'They can force longer hours by law.',
          'They no longer need to pay salaries.',
          'They can eliminate all managers.',
        ],
        correctIndex: 0,
        explanation:
          'Employers "can recruit talent from almost anywhere and often spend less on office space."',
      },
      {
        prompt: 'What worry do managers express?',
        options: [
          'Mentoring and team spirit may suffer when colleagues rarely meet.',
          'Workers are too productive at home.',
          'Office rent is too cheap.',
          'Video calls are impossible to arrange.',
        ],
        correctIndex: 0,
        explanation:
          'Managers worry that "spontaneous conversations, mentoring, and team spirit suffer" without in-person contact.',
      },
      {
        prompt: 'What is described as the likely outcome?',
        options: [
          'A hybrid compromise with a few office days each week.',
          'A permanent return to five office days.',
          'The end of all office buildings.',
          'A ban on working from home.',
        ],
        correctIndex: 0,
        explanation:
          'The final paragraph predicts "a hybrid compromise," with staff coming in a few days a week.',
      },
      {
        prompt: 'What surprising downside of remote work does the article mention?',
        options: [
          'The work-home line can blur, leaving staff working longer hours.',
          'Workers never log on at all.',
          'Commutes become longer.',
          'Offices become too crowded.',
        ],
        correctIndex: 0,
        explanation:
          'Some studies suggest "the line between work and home life blurs, leaving remote staff working longer, not shorter, hours."',
      },
    ],
    diagram: undefined,
  },
  {
    id: 'r4-08',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'Tourism: Blessing or Burden?',
    topic: 'The impact of mass tourism',
    difficulty: 'hard',
    instruction:
      'Read the following article about the effects of tourism. Then answer the questions.',
    timeMinutes: 14,
    passage: [
      'For many towns and small nations, tourism is the engine of the economy. Visitors bring money that supports hotels, restaurants, guides, and countless small businesses, and their spending can fund schools and roads that residents could not otherwise afford. In some places, nearly one job in three depends on the steady arrival of travellers.',
      'But the same crowds that fill cash registers can overwhelm the very places they come to enjoy. Historic centres buckle under the weight of visitors; rents rise as apartments become short-term rentals; and locals sometimes feel like actors in a theme-park version of their own home. Fragile beaches and coral reefs, too, can be worn down by the sheer number of feet and fins.',
      'Some destinations have started to push back, not by banning tourists but by managing them. Timed-entry tickets, tourist taxes, and limits on cruise-ship arrivals aim to spread visitors more evenly and channel their money toward preserving what makes a place special. Critics of these measures worry they may price out ordinary travellers and favour the wealthy.',
      'The challenge, most agree, is balance. Tourism handled thoughtfully can protect heritage and lift living standards; handled carelessly, it can hollow out communities and damage the landscapes that drew visitors in the first place. The difference lies less in the number of tourists than in how a place chooses to welcome them.',
    ],
    questions: [
      {
        prompt: 'Why is tourism vital to many small towns and nations?',
        options: [
          'Visitor spending supports businesses and can fund public services.',
          'Tourists build the roads themselves.',
          'It removes the need for any local jobs.',
          'It guarantees free housing for residents.',
        ],
        correctIndex: 0,
        explanation:
          'The article says visitor money "supports hotels, restaurants... and can fund schools and roads."',
      },
      {
        prompt: 'What negative effect of heavy tourism is described?',
        options: [
          'Rising rents as apartments become short-term rentals.',
          'Falling numbers of restaurants.',
          'A shortage of tourists.',
          'The disappearance of historic centres by law.',
        ],
        correctIndex: 0,
        explanation:
          'The article notes "rents rise as apartments become short-term rentals."',
      },
      {
        prompt: 'How are some destinations responding?',
        options: [
          'By managing visitors with timed tickets, taxes, and cruise limits.',
          'By banning all tourists permanently.',
          'By building more cruise ports.',
          'By ignoring the problem.',
        ],
        correctIndex: 0,
        explanation:
          'They "push back, not by banning tourists but by managing them" with timed entry, taxes, and cruise limits.',
      },
      {
        prompt: 'What worry do critics of these measures have?',
        options: [
          'They may price out ordinary travellers and favour the wealthy.',
          'They make travel too cheap.',
          'They increase pollution.',
          'They reduce tax revenue to zero.',
        ],
        correctIndex: 0,
        explanation:
          'Critics worry the measures "may price out ordinary travellers and favour the wealthy."',
      },
      {
        prompt: 'What does the author identify as the key to good tourism?',
        options: [
          'Balance \u2014 how a place chooses to welcome visitors.',
          'Attracting the largest possible number of tourists.',
          'Removing all restrictions on travel.',
          'Closing historic centres to residents.',
        ],
        correctIndex: 0,
        explanation:
          'The author concludes "the difference lies less in the number of tourists than in how a place chooses to welcome them."',
      },
    ],
    diagram: undefined,
  },
  {
    id: 'r4-09',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'Should University Be Free?',
    topic: 'Free higher education',
    difficulty: 'hard',
    instruction:
      'Read the following article about free university tuition. Then answer the questions.',
    timeMinutes: 14,
    passage: [
      'Few policy proposals divide opinion as sharply as the idea of free university education. Supporters present it as a matter of fairness and national investment; opponents see it as an expensive gift that mostly benefits those who need help least. Both sides can point to real evidence, which is part of what makes the debate so stubborn.',
      'Those in favour argue that removing tuition fees widens access. Talented students from poorer families, they say, are often discouraged by the fear of debt, and a better-educated population benefits everyone through higher productivity and stronger democracy. Countries that offer free tuition, they add, have not collapsed under the cost.',
      'Opponents raise the question of who pays. Free tuition, they note, is funded by taxpayers, many of whom never attend university yet subsidise those who do and who tend to earn more over a lifetime. They also warn that without fees, universities may lose a source of income and a reason to compete on quality.',
      'A frequently suggested compromise is targeted support. Rather than making university free for all, some argue, governments should focus generous grants and interest-free loans on students who genuinely cannot afford to attend, while asking wealthier graduates to contribute once they are earning.',
    ],
    questions: [
      {
        prompt: 'Why is the debate over free university described as "stubborn"?',
        options: [
          'Both sides can point to real evidence.',
          'No one has ever studied the issue.',
          'Universities refuse to comment.',
          'The policy is illegal everywhere.',
        ],
        correctIndex: 0,
        explanation:
          'The article says "both sides can point to real evidence, which is part of what makes the debate so stubborn."',
      },
      {
        prompt: 'What is the main argument of supporters?',
        options: [
          'Removing fees widens access for talented students from poorer families.',
          'It reduces the number of graduates.',
          'It makes universities close.',
          'It lowers national productivity.',
        ],
        correctIndex: 0,
        explanation:
          'Supporters argue "removing tuition fees widens access," especially for poorer students afraid of debt.',
      },
      {
        prompt: 'What concern do opponents raise about who pays?',
        options: [
          'Taxpayers who never attend university subsidise those who tend to earn more.',
          'Students would have to pay double.',
          'Universities would become too crowded.',
          'Graduates would refuse to work.',
        ],
        correctIndex: 0,
        explanation:
          'Opponents note free tuition is funded by taxpayers "many of whom never attend university yet subsidise those who do."',
      },
      {
        prompt: 'What compromise does the article describe?',
        options: [
          'Targeted support focused on students who cannot afford to attend.',
          'Making all education free forever.',
          'Charging every student the same high fee.',
          'Abolishing universities entirely.',
        ],
        correctIndex: 0,
        explanation:
          'The compromise is "targeted support," directing grants and interest-free loans to those who need them.',
      },
      {
        prompt: 'Which additional worry do opponents mention about quality?',
        options: [
          'Without fees, universities may lose income and a reason to compete on quality.',
          'Free universities would have too much money.',
          'Students would study too hard.',
          'Professors would earn too little to teach.',
        ],
        correctIndex: 0,
        explanation:
          'Opponents warn that "without fees, universities may lose a source of income and a reason to compete on quality."',
      },
    ],
    diagram: undefined,
  },
  {
    id: 'r4-10',
    part: 4,
    partLabel: 'Reading for Viewpoints',
    title: 'The Rise of Artificial Intelligence at Work',
    topic: 'AI in the workplace',
    difficulty: 'hard',
    instruction:
      'Read the following article about AI in the workplace. Then answer the questions.',
    timeMinutes: 14,
    passage: [
      'Rarely has a technology stirred both excitement and anxiety as quickly as artificial intelligence. In the space of a few years, tools that draft emails, summarise documents, and even write computer code have moved from laboratories into ordinary offices. The question on many minds is simple: will these systems help workers or replace them?',
      'Optimists describe AI as a powerful assistant. By taking over repetitive tasks, they argue, it frees people to focus on creative and strategic work that machines cannot do well. History, they remind us, is full of technologies that destroyed some jobs while creating many new ones nobody could have predicted.',
      'Pessimists are not reassured. This time, they warn, the technology is different, because it targets not just manual labour but skilled, white-collar work once thought safe. If a single tool can do the work of several analysts or translators, they ask, what happens to those workers, and will new jobs really appear quickly enough to absorb them?',
      'Most careful observers avoid both extremes. AI, they suggest, will neither doom nor rescue the workforce on its own; its effects will depend on choices made by companies, governments, and workers themselves. Investing in retraining, updating education, and deciding which tasks should stay human may matter far more than the technology\u2019s raw power.',
    ],
    questions: [
      {
        prompt: 'What central question does the article raise about AI?',
        options: [
          'Whether these systems will help workers or replace them.',
          'Whether AI can be switched off.',
          'Whether offices will disappear.',
          'Whether computers can feel emotion.',
        ],
        correctIndex: 0,
        explanation:
          'The article frames the debate around whether AI "will help workers or replace them."',
      },
      {
        prompt: 'How do optimists view AI?',
        options: [
          'As a powerful assistant that frees people for creative work.',
          'As a threat that should be banned.',
          'As a passing fad with no effect.',
          'As a replacement for all human thought.',
        ],
        correctIndex: 0,
        explanation:
          'Optimists describe AI "as a powerful assistant," handling repetitive tasks so people can do creative work.',
      },
      {
        prompt: 'Why do pessimists say "this time is different"?',
        options: [
          'AI targets skilled, white-collar work once thought safe.',
          'AI only affects factory jobs.',
          'AI is far too slow to be useful.',
          'AI cannot process language.',
        ],
        correctIndex: 0,
        explanation:
          'Pessimists warn the technology "targets not just manual labour but skilled, white-collar work once thought safe."',
      },
      {
        prompt: 'What do careful observers emphasise?',
        options: [
          'AI\u2019s effects will depend on choices by companies, governments, and workers.',
          'AI will definitely destroy all jobs.',
          'AI will solve every problem automatically.',
          'AI should be ignored completely.',
        ],
        correctIndex: 0,
        explanation:
          'Careful observers say AI\u2019s effects "will depend on choices made by companies, governments, and workers themselves."',
      },
      {
        prompt: 'A reader writes: "As a translator, I don\u2019t think AI will simply hand me free time \u2014 I worry it may ____." Which best completes the comment?',
        options: [
          'do the work of several translators at once',
          'refuse to translate anything',
          'make translation impossible',
          'create thousands of translator jobs overnight',
        ],
        correctIndex: 0,
        explanation:
          'The article raises the fear that "a single tool can do the work of several analysts or translators," matching the reader\u2019s worry.',
      },
    ],
    diagram: undefined,
  },
]
