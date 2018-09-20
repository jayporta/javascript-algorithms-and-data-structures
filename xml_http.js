function fetchPics() {
  const url = 'https://picsum.photos/list';
  const init = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
    mode: 'cors'
  };
  const request = new Request(url, init);
  fetch(request).then((response) => {
    if (!response) throw new Error(response);
    return response.json();
  }).then((json) => {
    console.log(json);
  }).catch(error => console.warn(`Error fetching pics ${error}`));
}

fetchPics();
