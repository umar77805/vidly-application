function init() {
  // Raven.config(
  //   "https://d319dacf8f794e0da90ff9598168b517@o1334325.ingest.sentry.io/6600616",
  //   {
  //     release: "1-0-0",
  //     environment: "development-test",
  //   }
  // ).install();
}

function log(error) {
  // Raven.captureException(error);
}

export default {
  init,
  log,
};
