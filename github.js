const { Octokit, App } = require("octokit");

const octokit = new Octokit({
  auth: `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`,
});
octokit.rest.users.getAuthenticated().then((data) => console.log(data));
