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
    "score": 120,
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
    "score": 480,
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
  },
  {
    "username": "john",
    "email": "jonh@mail.com",
    "score": 90,
    "rank": 0,
    "QA_history": [
      {
        "category": "capital",
        "question": "What is the capital city of Niger?",
        "answer": "Niamey",
        "options": ["Mata-Utu", "Niamey", "Dushanbe", "Amman"]
      }
    ]
  },
  {
    "username": "jarrod",
    "email": "jarrod@mail.com",
    "score": 50,
    "rank": 0,
    "QA_history": [
      {
        "category": "capital",
        "question": "What is the capital city of Niger?",
        "answer": "Niamey",
        "options": ["Mata-Utu", "Niamey", "Dushanbe", "Amman"]
      }
    ]
  },
  {
    "username": "stan",
    "email": "stan@mail.com",
    "score": 220,
    "rank": 0,
    "QA_history": [
      {
        "category": "capital",
        "question": "What is the capital city of Niger?",
        "answer": "Niamey",
        "options": ["Mata-Utu", "Niamey", "Dushanbe", "Amman"]
      }
    ]
  },
  {
    "username": "cetin",
    "email": "cetin@mail.com",
    "score": 20,
    "rank": 0,
    "QA_history": [
      {
        "category": "capital",
        "question": "What is the capital city of Niger?",
        "answer": "Niamey",
        "options": ["Mata-Utu", "Niamey", "Dushanbe", "Amman"]
      }
    ]
  },
  {
    "username": "elaina",
    "email": "elaina@mail.com",
    "score": 310,
    "rank": 0,
    "QA_history": [
      {
        "category": "capital",
        "question": "What is the capital city of Niger?",
        "answer": "Niamey",
        "options": ["Mata-Utu", "Niamey", "Dushanbe", "Amman"]
      }
    ]
  },
  {
    "username": "sheldon",
    "email": "sheldor@mail.com",
    "score": 1810,
    "rank": 0,
    "QA_history": []
  },
  {
    "username": "leonard",
    "email": "leonerd@mail.com",
    "score": 930,
    "rank": 0,
    "QA_history": []
  },
]);