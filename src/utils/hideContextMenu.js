const hideContextMenu = (id) => {
  const videoId = document?.getElementById(id);
  if (videoId?.addEventListener) {
    return videoId?.addEventListener(
      "contextmenu",
      function (e) {
        console.log("User Right Clicked on the video");
        e.preventDefault();
      },
      false
    );
  } else {
    return videoId?.attachEvent("oncontextmenu", function () {
      window.event.returnValue = false;
    });
  }
};

export { hideContextMenu };
