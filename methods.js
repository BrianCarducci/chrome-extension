export function buildUI(favs) {
  followedChannelsDiv = document.querySelector(
    'div[aria-label="Followed Channels"]'
  );

  const favsDiv = document.createElement("div");

  const favsHeaderWrapper = document.createElement("div");
  favsHeaderWrapper.className = "Layout-sc-nxg1ff-0 hbYWXo side-nav-header";

  const favsHeader = document.createElement("h2");
  favsHeader.innerHTML = "FAVORITES";
  favsHeader.className = "CoreText-sc-cpl358-0 ezafKb";

  favsHeaderWrapper.appendChild(favsHeader);
  favsDiv.append(favsHeaderWrapper);

  for (fav of favs) {
    twitchUserDiv = document.querySelector(`[href="/${fav}"]`);
    if (twitchUserDiv) {
      twitchUserDivClone = twitchUserDiv.cloneNode(true);
      favsDiv.append(twitchUserDivClone);
    } else {
    }
  }
}
