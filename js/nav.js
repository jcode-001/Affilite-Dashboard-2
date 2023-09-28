"use strict";

const dashboard = document.querySelector(".dashboard");
const market = document.querySelector(".market");
const withdraw = document.querySelector(".withdraw");
const team = document.querySelector(".team");
const contest = document.querySelector(".contest");
const influence = document.querySelector(".influence");
const plug = document.querySelector(".plug");
const dashLink = document.querySelector(".dash-link");
const marketLink = document.querySelector(".market-link");
const withdrawLink = document.querySelector(".withdraw-link");
const teamLink = document.querySelector(".team-link");
const contestLink = document.querySelector(".contest-link");
const influenceLink = document.querySelector(".influence-link");
const plugLink = document.querySelector(".plug-link");

function openDashboard() {
  dashboard.style.display = "block";
  market.style.display = "none";
  withdraw.style.display = "none";
  team.style.display = "none";
  contest.style.display = "none";
  influence.style.display = "none";
  plug.style.display = "none";

  dashLink.classList.add("current");
  marketLink.classList.remove("current");
  withdrawLink.classList.remove("current");
  teamLink.classList.remove("current");
  contestLink.classList.remove("current");
  influenceLink.classList.remove("current");
  plugLink.classList.remove("current");
}

function openMarket() {
  dashboard.style.display = "none";
  market.style.display = "block";
  withdraw.style.display = "none";
  team.style.display = "none";
  contest.style.display = "none";
  influence.style.display = "none";
  plug.style.display = "none";

  dashLink.classList.remove("current");
  marketLink.classList.add("current");
  withdrawLink.classList.remove("current");
  teamLink.classList.remove("current");
  contestLink.classList.remove("current");
  influenceLink.classList.remove("current");
  plugLink.classList.remove("current");
}
function openWithdraw() {
  dashboard.style.display = "none";
  market.style.display = "none";
  withdraw.style.display = "block";
  team.style.display = "none";
  contest.style.display = "none";
  influence.style.display = "none";
  plug.style.display = "none";

  dashLink.classList.remove("current");
  marketLink.classList.remove("current");
  withdrawLink.classList.add("current");
  teamLink.classList.remove("current");
  contestLink.classList.remove("current");
  influenceLink.classList.remove("current");
  plugLink.classList.remove("current");
}
function openTeam() {
  dashboard.style.display = "none";
  market.style.display = "none";
  withdraw.style.display = "none";
  team.style.display = "block";
  contest.style.display = "none";
  influence.style.display = "none";
  plug.style.display = "none";

  dashLink.classList.remove("current");
  marketLink.classList.remove("current");
  withdrawLink.classList.remove("current");
  teamLink.classList.add("current");
  contestLink.classList.remove("current");
  influenceLink.classList.remove("current");
  plugLink.classList.remove("current");
}
function openContest() {
  dashboard.style.display = "none";
  market.style.display = "none";
  withdraw.style.display = "none";
  team.style.display = "none";
  contest.style.display = "block";
  influence.style.display = "none";
  plug.style.display = "none";

  dashLink.classList.remove("current");
  marketLink.classList.remove("current");
  withdrawLink.classList.remove("current");
  teamLink.classList.remove("current");
  contestLink.classList.add("current");
  influenceLink.classList.remove("current");
  plugLink.classList.remove("current");
}
function openInfluence() {
  dashboard.style.display = "none";
  market.style.display = "none";
  withdraw.style.display = "none";
  team.style.display = "none";
  contest.style.display = "none";
  influence.style.display = "block";
  plug.style.display = "none";

  dashLink.classList.remove("current");
  marketLink.classList.remove("current");
  withdrawLink.classList.remove("current");
  teamLink.classList.remove("current");
  contestLink.classList.remove("current");
  influenceLink.classList.add("current");
  plugLink.classList.remove("current");
}
function openPlugin() {
  dashboard.style.display = "none";
  market.style.display = "none";
  withdraw.style.display = "none";
  team.style.display = "none";
  contest.style.display = "none";
  influence.style.display = "none";
  plug.style.display = "block";

  dashLink.classList.remove("current");
  marketLink.classList.remove("current");
  withdrawLink.classList.remove("current");
  teamLink.classList.remove("current");
  contestLink.classList.remove("current");
  influenceLink.classList.remove("current");
  plugLink.classList.add("current");
}

// calling the function
dashLink.addEventListener("click", openDashboard);
marketLink.addEventListener("click", openMarket);
withdrawLink.addEventListener("click", openWithdraw);
teamLink.addEventListener("click", openTeam);
contestLink.addEventListener("click", openContest);
influenceLink.addEventListener("click", openInfluence);
plugLink.addEventListener("click", openPlugin);
