const names = [
  "Aarav", "Sophia", "Vivaan", "Olivia", "Advait", "Emma", "Arjun", "Ava", "Reyansh", "Isabella", "Aryan", "Mia", "Vihaan", "Luna", "Ishaan", "Charlotte", "Mohammed", "Amelia", "Aadi", "Evelyn", "Rudra", "Abigail", "Kabir", "Emily", "Dhruv", "Scarlett", "Arnav", "Elizabeth", "Ahaan", "Sofia", "Sai", "Avery", "Alex", "Ella", "Aayush", "Mila", "Shivansh", "Grace", "Shaurya", "Chloe", "Atharv", "Victoria", "Advik", "Penelope", "Dev", "Layla", "Veer", "Madison", "Yash", "Riley", "Aryan", "Zoey", "Jayden", "Sarah", "Nathan", "Emily", "Caleb", "Hannah", "Isaac", "Olivia", "Samuel", "Ava", "David", "Sophia", "John", "Mia", "Luke", "Charlotte", "Henry", "Amelia", "Daniel", "Evelyn", "Andrew", "Isabella", "Ryan", "Harper", "Matthew", "Elizabeth", "Jack", "Abigail", "Nathan", "Emily", "Benjamin", "Scarlett", "Christopher", "Elizabeth", "James", "Sofia", "Joshua", "Avery"
];


const quotes = [
  "Be yourself; everyone else is already taken.",
  "Stay hungry, stay foolish.",
  "Carpe diem.",
  "Life is short, make it sweet.",
  "Keep it simple.",
  "Less is more.",
  "Dream big, work hard.",
  "Embrace the journey.",
  "Live in the moment.",
  "Believe in yourself.",
  "Follow your heart.",
  "Do what you love.",
  "Stay positive.",
  "Think outside the box.",
  "Love what you do.",
  "Create your own path.",
  "Never give up.",
  "Find your passion.",
  "Stay focused.",
  "Seize the day.",
  "Learn from yesterday.",
  "Chase your dreams.",
  "Make it happen.",
  "Keep moving forward.",
  "Stay true to yourself.",
  "Enjoy the little things.",
  "Be the change.",
  "Take risks.",
  "Keep pushing.",
  "Let your light shine.",
  "Live with no regrets.",
  "Do more of what makes you happy.",
  "Stay curious.",
  "Be kind to yourself.",
  "Choose joy.",
  "Believe in miracles.",
  "Stay humble.",
  "Find beauty in simplicity.",
  "Inspire others.",
  "Take a deep breath.",
  "Embrace the unknown.",
  "Never stop learning.",
  "Trust the process.",
  "Live boldly.",
  "Spread love and kindness.",
  "Think positive, be positive.",
  "Keep your head up.",
  "Focus on the good.",
  "Enjoy every moment.",
  "Make every day count.",
  "Find your inner strength."
];



export function getRandomName() {
  const randomNumber = Math.floor(Math.random()*(names.length));
  return names[randomNumber];
}

export function getRandomMessage() {
  const randomNumber = Math.floor(Math.random()*(quotes.length));
  return quotes[randomNumber];
}