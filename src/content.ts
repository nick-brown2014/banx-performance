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

export const testimonials = [
  { name: 'Alex', quote: 'He listens carefully, adjusts in real time, and tailors programming to my specific goals.' },
  { name: 'Amy', quote: 'My main goal was to build all-around strength, and I’ve worked with a lot of trainers before, but none have helped me make progress like Banks has.' },
  { name: 'James', quote: 'I appreciate his attention to form and technique, which has helped me gain confidence in my abilities.' },
]
