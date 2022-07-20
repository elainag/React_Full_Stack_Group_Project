use react_app;
db.dropDatabase();


db.countries.insertMany([
  {
    name: "Elaina",
    email: "me@me.com",
    checkedIn: false
  },
  {
    name: "Sandy",
    email: "sandy@me.com",
    checkedIn: false
  }
]);

//  These Collection will hold the user data related quiz section
db.users.insertMany([
  {
    "username": "charlie05",
    "email": "charlie@mail.com",
    "score": 10,
    "rank": 0,
    "QA_history": [
      {
        "category": "capital",
        "question": "What is the capital city of Niger?",
        "answer": "Niamey",
        "options": ["Mata-Utu", "Niamey", "Dushanbe", "Amman"]
      },
      {
        "category": "capital",
        "question": "What is the capital city of Maldives?",
        "answer": "Malé",
        "options": ["Malé", "Manama", "Bern", "Sofia"]
      }
    ]
  },
  {
    "username": "sushi04",
    "email": "sushi@mail.com",
    "score": 10,
    "rank": 0,
    "QA_history": [
      {
        "category": "capital",
        "question": "What is the capital city of Canada?",
        "answer": "Ottawa",
        "options": ["Ottawa", "Phnom Penh", "Seoul", "Khartoum"]
      },
      {
        "category": "capital",
        "question": "What is the capital city of Lesotho?",
        "answer": "Maseru",
        "options": 
        ["Phnom Penh", "Maseru", "San José", "Saint Helier"]        
      }
    ]
  }
]);