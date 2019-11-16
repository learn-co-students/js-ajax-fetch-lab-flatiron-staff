function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = `https://api.github.com/repos/${repo}/forks`;

  fetch(url, { method: 'POST', headers: { Authorization: 'djdkfjdkfjdkjf' } })
  .then(res => res.json())
  .then(json => showResults(json))
  .catch(err => console.log(err));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const url = 'https://api.github.com/repos/js-ajax-fetch-lab/issues';

  fetch(url, { method: 'POST', headers: { Authorization: 'djdkfjdkfjdkjf' }, body: 'test body' })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const url = 'https://api.github.com/repos/js-ajax-fetch-lab/issues';

  fetch(url)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
}
