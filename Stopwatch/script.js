"use strict";
const sec = document.querySelector(".sec");
const msec = document.querySelector(".msec");
const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
let myIntervalMsec;
let secNum = 0;
let msecNum = 0;
const updateSec = function () {
  secNum++;
  sec.textContent = secNum;
};
const updateMsec = function () {
  msecNum++;
  if (msecNum > 99) {
    msecNum = 0;
    updateSec();
  }
  msec.textContent = msecNum;
};
btnStart.addEventListener("click", function () {
  myIntervalMsec = setInterval(updateMsec, 10);
  btnStart.disabled = "true";
});
btnStop.addEventListener("click", function () {
  btnStart.disabled = false;
  clearInterval(myIntervalMsec);
});
btnReset.addEventListener("click", function () {
  secNum = 0;
  msecNum = 0;
  sec.textContent = "00";
  msec.textContent = "00";
  btnStart.disabled = false;
});
