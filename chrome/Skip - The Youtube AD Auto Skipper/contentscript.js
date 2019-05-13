const mouseClick = new MouseEvent("click", {
  view: window,
  bubbles: true,
  cancelable: false
});

const handleAddNode = event => {
  try {
    if (adSkipButtons) {
      for (let i = 0; i < adSkipButtons.length; i++)
        adSkipButtons[i].dispatchEvent(mouseClick);
    }

    let adOverlayCloseButtons = document.getElementsByClassName(
      "ytp-ad-overlay-close-button"
    );
    if (adOverlayCloseButtons && adOverlayCloseButtons.length > 0) {
      for (let i = 0; i < adOverlayCloseButtons.length; i++)
        adOverlayCloseButtons[i].dispatchEvent(mouseClick);
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

    let promotedVideos = document.getElementsByTagName(
      "ytd-promoted-video-renderer"
    );
    if (promotedVideos && promotedVideos.length > 0) {
      for (let i = 0; i < promotedVideos.length; i++)
        promotedVideos[i].parentNode.removeChild(promotedVideos[i]);
    }
  } catch (e) {}
};

document.addEventListener("DOMNodeInserted", handleAddNode);
