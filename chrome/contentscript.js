console.log("from extension youtube");

const mouseClick = new MouseEvent("click", {
  view: window,
  bubbles: true,
  cancelable: false
});

const handleAddNode = event => {
  try {
    let adSkipButton = document.getElementsByClassName("ytp-ad-skip-button")[0];
    let adOverlayCloseButton = document.getElementsByClassName(
      "ytp-ad-overlay-close-button"
    )[0];

    if (adSkipButton) {
      adSkipButton.dispatchEvent(mouseClick);
    }

    if (adOverlayCloseButton) {
      adOverlayCloseButton.dispatchEvent(mouseClick);
    }
  } catch (e) {}
};

document.addEventListener("DOMNodeInserted", handleAddNode);
