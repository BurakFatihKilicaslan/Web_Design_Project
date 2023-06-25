function showFormData(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engellemek için kullanılır
    var form = event.target;
    var formData = new FormData(form);
    
    // Form verilerini alarak sayfada gösterme
    var name = formData.get('Name');
    var email = formData.get('Email');
    var subject = formData.get('Subject');
    var note = formData.get('Note');
    
    var output = "Name: " + name + "<br>" + "Email: " + email + "<br>" + "Subject: " + subject + "<br>" + "Note: " + note;
                
    document.getElementById("formOutput").innerHTML = output;
  }

  let data = '[{"TarihID":"28/02/1986","KonserYeri":"United Kingdom", "Resim":"concert4.jpg"}, {"TarihID":"13/05/1981","KonserYeri":"United States of America", "Resim":"concert8.jpg"}, {"TarihID":"20/11/1984","KonserYeri":"Australia", "Resim":"concert11.png"}, {"TarihID":"02/04/1985","KonserYeri":"Canada", "Resim":"concert10.jpg"}]';
  jsonVerisiniTablodaGoster(data);

  //JSON datasını WEB sayfasına gonderme
  
  function jsonVerisiniTablodaGoster(strJSON)
  {
      //alert(strJSON);
      //Gelen string json verisi nesneye nasıl cevrilir???

      //Serileştirme-Deserileştirme Kullanıyoruz burda(daha once bahsetmistik)Stringi objecte ceviriyoruz(Deserilestirme)

      let veriler = JSON.parse(strJSON);

      let table = document.getElementById("table");

      for(let i = 0; i < veriler.length; i++)
      {
        let tr = document.createElement("tr");

        let id = document.createElement("td");
        id.innerHTML=veriler[i].TarihID;

        let bosluk = document.createElement("td");
        bosluk.textContent = " "; // Boşluk için &nbsp; kullanabilirsiniz


        let tip = document.createElement("td");
        tip.innerHTML=veriler[i].KonserYeri;

        let resim = document.createElement("td");
        let img = document.createElement("img");
        let src = document.createAttribute("src");
        src.value = "home_files/"+ veriler[i].Resim;

        img.attributes.setNamedItem(src);
        img.style.width="280px";
        img.style.height="250px";
        resim.appendChild(img);

        tr.appendChild(id);
        tr.appendChild(bosluk);
        tr.appendChild(tip);
        tr.appendChild(bosluk);
        tr.appendChild(resim);

        table.appendChild(tr);
        
      }
  }