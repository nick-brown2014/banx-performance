const trainerize = 'https://www.trainerize.me/profile/banxperformance/'
export const coachProfile = trainerize + 'Banks.Telkamp/'
export const instagram = 'https://www.instagram.com/coachbanx/'
export const threads = 'https://www.threads.com/@coachbanx'
const checkout = (plan: string) => trainerize + '?planGUID=' + plan + '&mode=checkout'
export const consultation = checkout('60d0a5ef7b594ce49bd30f7d5c529d26')
const coaching = checkout('37c544c1cb3f4f2bb2f1b1a2c7ecd322')

export const navigation = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/programs', label: 'Programs' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export const services = [
  { title: 'Speed Key', tag: 'Youth & adult athletes', description: 'Learn how to accelerate, sprint, and put force into the ground. Speed Key gives youth and adult athletes a dedicated space to work on the mechanics and strength behind getting faster.', url: consultation },
  { title: 'Custom Online Training', tag: 'Train from anywhere', description: 'Get a program built around your goals, your equipment, and the time you actually have. Train where it makes sense for you, with structure and accountability from Coach Banx.', url: null },
  { title: 'Personal Training', tag: 'Individual coaching', description: 'Build strength and conditioning with coaching that fits your starting point. Get feedback on your technique and a plan that changes as your confidence and abilities grow.', url: coaching },
  { title: 'Post-Rehab Training', tag: 'Return to activity', description: 'Once you’ve been cleared to train, rebuild the strength and confidence you need for the activities you miss. This is performance coaching after rehab, not a replacement for clinical care.', url: coaching },
  { title: 'Performance Training', tag: 'Sport & competition', description: 'Develop the strength, power, and conditioning your sport demands. Train with intent in the gym so you can put those qualities to work in practice and competition.', url: coaching },
]

export const programs = [
  { name: 'Greenhorn', goal: 'Build your base', description: 'New to structured training? Start here. Establish a routine, build foundational strength, and get comfortable with the movements you’ll return to for years.', url: checkout('2ec862192f0440e78b79f7a32e7844b4') },
  { name: 'Bolt', goal: 'Get faster', description: 'A speed and power program for athletes who want to move faster, change direction more confidently, and bring more pop to their first step.', url: checkout('204271cf512a4c64a4310fc8ad40d1dd') },
  { name: 'Composite', goal: 'Build strength & endurance', description: 'Train strength and conditioning together. Composite is for people who want to lift well, improve their endurance, and keep both in the same plan.', url: checkout('34a45435f6c542fdb389c00c246e02be') },
]

export const posts = [
  {
    slug: 'elastic-performance', image: 'elastic.webp', category: 'Speed development', title: 'Elastic Performance', date: 'Jan 20',
    intro: 'Speed isn’t just about muscle. What happens in the split second your foot touches the ground matters, too.',
    sections: [
      { title: 'Think of each step as a spring', body: 'When your foot hits the ground, muscles and tendons take on load. After a brief transition, they release it as you push off. That sequence is the stretch-shortening cycle. The more effectively you move from absorbing force to producing it, the less time you spend on the ground.' },
      { title: 'Young athletes build this skill over time', body: 'As kids grow, coordination improves and muscles and tendons change. Training should meet them where they are. Start with basic jumps, landings, and sprints. Add more demanding work when they can repeat the basics with control.' },
      { title: 'Put it together on the track', body: 'Strength work helps you put force into the ground. Plyometrics help you learn to absorb and redirect it. Sprinting gives you the chance to use both at speed. Each has a place; none has to do the whole job.' },
    ],
  },
  {
    slug: 'enhancing-vertical-jump-performance', image: 'jump.webp', category: 'Power development', title: 'Enhancing Vertical Jump Performance', date: 'May 13',
    intro: 'A look at Coach Banx’s own jump-training project and what it taught him about building explosive power.',
    sections: [
      { title: 'Start with a baseline', body: 'The project began with a 25-inch vertical and a goal of 32 inches. After six weeks, Banks reported reaching 27.5 inches. The numbers helped him evaluate his own training, not set a target everyone else should expect to reach.' },
      { title: 'Train more than the jump itself', body: 'The plan combined lower-body strength, speed, plyometrics, and mobility. One tool Banks used was French contrast training: a heavy lift followed by a plyometric movement, a resisted jump, and an assisted jump. The sequence gave him different ways to practice producing force quickly.' },
      { title: 'Let the measurements guide the plan', body: 'As the project continued, Banks planned to give single-leg strength and mobility more attention. Track your own jumps under consistent conditions, watch how they change over time, and adjust the plan when the work stops addressing what’s holding you back.' },
    ],
  },
  {
    slug: 'why-should-youth-athletes-lift-weights', image: 'youth.webp', category: 'Youth athletes', title: 'Why Should Youth Athletes Lift Weights?', date: 'Mar 29',
    intro: 'The weight room can help young athletes get stronger and practice habits that carry over to their sport.',
    sections: [
      { title: 'Build a base before competition gets tougher', body: 'The jump to high school sports often means faster, stronger opponents. An age-appropriate strength program gives young athletes time to practice good movement and get stronger without having to learn it all during the season.' },
      { title: 'Make it fit their week', body: 'School, practices, and games already ask a lot. The right plan is one an athlete can stick with. Keep the sessions purposeful, teach technique before adding weight, and adjust the work when the rest of the schedule gets heavy.' },
      { title: 'Take the lessons beyond the gym', body: 'During his time competing at Whittier College and studying kinesiology, Banks worked with four different strength coaches. Their approaches varied, but one takeaway stuck: show up consistently, pay attention to how you move, and give progress time.' },
    ],
  },
]

export const testimonials = [
  { name: 'Alex', quote: 'He listens carefully, adjusts in real time, and tailors programming to my specific goals.' },
  { name: 'Amy', quote: 'My main goal was to build all-around strength, and I’ve worked with a lot of trainers before, but none have helped me make progress like Banks has.' },
  { name: 'James', quote: 'I appreciate his attention to form and technique, which has helped me gain confidence in my abilities.' },
]
