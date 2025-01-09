// Collect wiki metrics.
import trackEvent from "sumo/js/analytics";

// The "DOMContentLoaded" event is guaranteed not to have been
// called by the time the following code is run, because it always
// waits until all deferred scripts have been loaded, and the code
// in this file is always bundled into a script that is deferred.
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body.document");
  if (body) {
    const versionSelect = document.querySelector("#showfor-panel select.version");
    const platformSelect = document.querySelector("#showfor-panel select.platform");

    // Track showfor changes in GA.
    if (versionSelect) {
      versionSelect.addEventListener("change", function (event) {
        trackEvent("showfor_version_change", {
          "showfor_version": this.value,
        });
      });
    }
    if (platformSelect) {
      platformSelect.addEventListener("change", function (event) {
        trackEvent("showfor_platform_change", {
          "showfor_platform": this.value,
        });
      });
    }
  }
});
