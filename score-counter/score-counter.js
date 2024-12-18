let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');
let homeScore = 0;
let guestScore = 0;

function addHome(points) {
  homeScore += points;
  homeScoreEl.textContent = homeScore;
}

function addGuest(points) {
  guestScore += points;
  guestScoreEl.textContent = guestScore;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
}
