var favs = [
  "xqc",
  "avoidingthepuddle",
  "distortion2",
  "trainwreckstv",
  "miirio",
  "orchlon",
  "shroud",
  "sodapoppin",
];

var categories = ["favz"];

window.onload = () => {
  followedChannelsDiv = document.querySelector(
    'div[aria-label="Followed Channels"]'
  );

  const favsDiv = document.createElement("div");
  const favsHeader = document.createElement("h2");

  favsHeader.innerHTML = "FAVORITES";
  favsDiv.append(favsHeader);

  for (fav of favs) {
    twitchUserDiv = document.querySelector(`[href="/${fav}"]`);
    if (twitchUserDiv) {
      twitchUserDivClone = twitchUserDiv.cloneNode(true);
      favsDiv.append(twitchUserDivClone);
    } else {
    }
  }

  followedChannelsDiv.prepend(favsDiv);
};

// CHANNEL DIV EXAMPLE
/* <a data-a-id="followed-channel-43" data-test-selector="followed-channel" class="ScCoreLink-sc-udwpw5-0 cmQKL InjectLayout-sc-588ddc-0 hqHHYw side-nav-card__link tw-link" href="/avoidingthepuddle"><div class="Layout-sc-nxg1ff-0 kZFVrV side-nav-card__avatar side-nav-card__avatar--offline"><figure aria-label="AvoidingThePuddle" class="ScAvatar-sc-12nlgut-0 dncwPH tw-avatar"><img class="InjectLayout-sc-588ddc-0 iDjrEF tw-image tw-image-avatar" alt="AvoidingThePuddle" src="https://static-cdn.jtvnw.net/jtv_user_pictures/avoidingthepuddle-profile_image-8656268d189524ec-70x70.jpeg"></figure></div><div class="Layout-sc-nxg1ff-0 blhocS"><div data-a-target="side-nav-card-metadata" class="Layout-sc-nxg1ff-0 bGPqDX"><div class="Layout-sc-nxg1ff-0 gcwIMz side-nav-card__title"><p title="AvoidingThePuddle" data-a-target="side-nav-title" class="CoreText-sc-cpl358-0 gYupEs InjectLayout-sc-588ddc-0 emHXNr">AvoidingThePuddle</p></div><div class="Layout-sc-nxg1ff-0 bXhxYI side-nav-card__metadata" data-a-target="side-nav-game-title"><p class="CoreText-sc-cpl358-0 ciPVTQ"></p></div></div><div class="Layout-sc-nxg1ff-0 iiA-dIp side-nav-card__live-status" data-a-target="side-nav-live-status"><span class="CoreText-sc-cpl358-0 iUznyJ">Offline</span></div></div></a> */

// FOLLOWED CHANNELS HEADER DIV EXAMPLE
/* <div class="Layout-sc-nxg1ff-0 hbYWXo side-nav-header" data-a-target="side-nav-header-expanded"><h2 class="CoreText-sc-cpl358-0 ezafKb">Followed Channels</h2></div> */
