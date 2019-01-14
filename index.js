function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  let repo = 'https://api.github.com/repos/emilyjennings/js-ajax-fetch-lab/issues'

  fetch(repo).then(res => res.json())
  .then(res => showIssues(json))


  // fetch(repo, {
  //   method: 'get',
  //   body: JSON.stringify({
  //     "html_url",
  //     "title",
  //     "body"
  //   })
  // })

}


function showIssues(json){
  const issuesTemplate = document.getElementById("issues-template").innerHTML;
  const template = Handlebars.compile(issuesTemplate)
  const html = template(json)

  document.getElementById("issues").innerHTML = html

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  let repo = 'https://api.github.com/repos/emilyjennings/js-ajax-fetch-lab/issues'

  fetch(repo, {
    method: 'post',
    body: JSON.stringify({
      "title": title,
      "body": body
    }),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues());
}

function showResults(json) {
  const repoTemplate = document.getElementById("repo-template").innerHTML;
  const template = Handlebars.compile(repoTemplate)
  const html_url = template(json);
  //use this function to display the results from forking via the API
  document.getElementById("results").innerHTML = html_url
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  //use fetch to fork it!
  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
