console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $('#addButton').on('click', function () {
    console.log('in addButton on click');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      ready_to_transfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    saveKoala(koalaToSend);
  });
}

function getKoalas() {
  console.log('in getKoalas');
  $.ajax({
    method: 'GET',
    url: '/koalas',
  })
    .then(function (response) {
      const listOfKoalas = response;
      console.log('server response:', response);

      $('#nameIn').val('');
      $('#ageIn').val('');
      $('#genderIn').val('');
      $('#readyForTransferIn').val('');
      $('#notesIn').val('');

      $('#viewKoalas').empty();
      for (let koala of listOfKoalas) {
        $('#viewKoalas').append(`
        <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
      </tr>`);
      }
    })
    .catch(function (error) {
      console.log('error in koala get', error);
    });
}
// end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to post koalas

  console.log('newKoala', newKoala);
  if (
    (newKoala.name ||
      newKoala.gender ||
      newKoala.age ||
      newKoala.ready_to_transfer) === ''
  ) {
    alert('Please fill in missing koala fields');
  } else {
    $.ajax({
      method: 'POST',
      url: '/koalas',
      data: newKoala,
    })
      .then(function (response) {
        console.log(response);
        getKoalas();
      })
      .catch(function (error) {
        console.log('error in koala post', error);
      });
  }
}
