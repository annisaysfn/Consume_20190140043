var data = document.getElementById("viewer");

function openJsonData() {

        $.getJSON("http://localhost:8080/datakaryawanjson", function(result){
            console.log(result)
            $.each(result, function(a){
                document.getElementById("viewer").innerHTML += "Nama : " + result[a].nama + "<br> NIK : " +
                result[a].nik + "<br> Jenis Kelamin : " + result[a].jenisKelamin + "<br> Alamat : " + result[a].alamat 
                + "<br> Divisi : " + result[a].divisi + "<br> <br>"
            })
        })
    }