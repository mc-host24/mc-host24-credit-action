const core = require('@actions/core');
const github = require('@actions/github');

try {
  const token = core.getInput('token', { required: true });
  const user = core.getInput('user', { required: true });
  const balance = core.getInput('balance', { required: true });
  const reason = core.getInput('reason', { required: true });

  // TODO: Manipulate user balance

  core.setOutput('outcome', balance);
} catch (error) {
  core.setFailed(error.message);
}
