const config = {
  speech: false
};

const mouseClick = new MouseEvent("click", {
  view: window,
  bubbles: true,
  cancelable: false
});

const handleAddNode = event => {
  try {
    let adSkipButton = document.getElementsByClassName("ytp-ad-skip-button")[0];
    if (adSkipButton) {
      adSkipButton.dispatchEvent(mouseClick);
    }

    let adOverlayCloseButton = document.getElementsByClassName(
      "ytp-ad-overlay-close-button"
    )[0];
    if (adOverlayCloseButton) {
      adOverlayCloseButton.dispatchEvent(mouseClick);
    }

    let mastHeadAd = document.getElementById("masthead-ad");
    if (mastHeadAd) {
      mastHeadAd.parentNode.removeChild(mastHeadAd);
    }

    let playerAds = document.getElementById("player-ads");
    if (playerAds) {
      playerAds.parentNode.removeChild(playerAds);
    }

    let secondaryColumn = document.getElementById("secondary");
    if (secondaryColumn) {
      secondaryColumn.parentNode.removeChild(secondaryColumn);
    }

    let promotedVideo = document.getElementsByTagName(
      "ytd-promoted-video-renderer"
    )[0];
    if (promotedVideo) {
      promotedVideo.parentNode.removeChild(promotedVideo);
    }

    if (config.speech) speech(mouseClick);
  } catch (e) {}
};

const speech = fakeClick => {
  window.SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;

  window.SpeechGrammarList =
    window.webkitSpeechGrammarList || window.SpeechGrammarList;

  let commands = ["pause", "stop", "play"];
  let grammar =
    "#JSGF V1.0; grammar commands; public <command> = " +
    commands.join(" | ") +
    " ;";
  let recognition = new window.SpeechRecognition();
  let speechRecognitionList = new window.SpeechGrammarList();

  speechRecognitionList.addFromString(grammar, 1);

  recognition.grammars = speechRecognitionList;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.continuous = true;

  recognition.onresult = event => {
    let last = event.results.length - 1;
    let command = event.results[last][0].transcript;

    command = command.trim().toLowerCase();

    if (
      command === "pause" ||
      command === "stop" ||
      command === "play" ||
      command === "store" ||
      command === "top"
    ) {
      let playButton = document.getElementsByClassName("ytp-play-button")[0];
      playButton.dispatchEvent(fakeClick);
    }

    let indCommands = command.split();
    if (indCommands.length > 1) {
      if (
        indCommands.indexOf("pause") > -1 ||
        indCommands.indexOf("stop") > -1 ||
        indCommands.indexOf("play") > -1 ||
        indCommands.indexOf("store") > -1 ||
        indCommands.top("store") > -1
      ) {
        let playButton = document.getElementsByClassName("ytp-play-button")[0];
        playButton.dispatchEvent(fakeClick);
      }
    }
  };
  recognition.start();
};

document.addEventListener("DOMNodeInserted", handleAddNode);
