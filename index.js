function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $(".data").css("display", "block");
  $(".g-signin2").css("display", "none");
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
      alert("You have been signed out successfully");
      $(".data").css("display", "none");
      $(".g-signin2").css("display", "block");
  });
}

$(document).ready(function() {
  $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#dataTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });
});

$("#dataTable").ready(function () {
  var tabel = document.getElementById("dataTable")
  getAll().then(response => {
      console.log(response)
      for(var i = 0; i <response.length; i++){
          const tr = tabel.insertRow()
          const td1 = tr.insertCell();
          const td2 = tr.insertCell();
          const td3 = tr.insertCell();
          const td4 = tr.insertCell();
          const td5 = tr.insertCell();
          const td6 = tr.insertCell();
          console.log(response[i])
          td1.innerHTML = response[i].nik
          td2.innerHTML = response[i].nama
          td3.innerHTML = response[i].jenisKelamin
          td4.innerHTML = response[i].alamat
          td5.innerHTML = response[i].divisi
          td6.innerHTML = `<div class ="text-center align-middler">
          <a class="btn btn-warning btn-sm text-white" href="edit_data.html?nik=${response[i].nik}">Edit</a>
          <button type ="button" class="btn btn-danger btn-sm" onclick="del(${response[i].nik});">Delete</button>
          </div>`
          }
      }
  )
});