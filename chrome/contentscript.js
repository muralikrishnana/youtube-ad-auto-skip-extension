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
  } catch (e) {}
};

document.addEventListener("DOMNodeInserted", handleAddNode);
