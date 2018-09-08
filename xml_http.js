(async () => {
    const xhr = new XMLHttpRequest();
    try {
      await xhr.open('GET', 'https://reqres.in/api/users?page=1');
      xhr.onload =()=> {
        const response = JSON.parse(xhr.responseText).data;
        if (response ) {
          document.getElementById('container').innerHTML = response.map(person =>
            `<div class="photo-column"><div>${person.first_name} ${person.last_name}</div>`+
            `<div class="image-container"><img src="${person.avatar}" /></div></div>` ).join('');
        }
        console.log('Who are these people?');
      }
      xhr.send();
    } catch(err) {
      console.log('XMLHttpRequest error ${err}');
    }
  })();
