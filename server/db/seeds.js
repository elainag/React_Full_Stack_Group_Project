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