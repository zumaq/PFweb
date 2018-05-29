import 'bootstrap';
import './scss/app.scss';
import Data from './contacts.xml';

function component() {
  console.log(Data);
  var cardGroup = document.createElement('div');
  cardGroup.className = "card-deck py-3 px-2";
  //address.innerHTML = "Pianoforce Europe <br>EU Headquarter, R&D Centre, Warehouse <br>Pianoforce s.r.o. <br>Račianska 66 <br> 831 02 Bratislava <br>Slovakia <br> pianoforce@pianoforce.eu <br>support@pianoforce.eu";

  //Data.database.contact.forEach(function(contact) {

  var contacts = Data.database.contact;
  for (var k=0, l = contacts.length; k < l; k++){
    var card = document.createElement('div');
    card.className = "card";
    //console.log(contacts[k].title);
    var cardHeader = document.createElement('div');
    cardHeader.className = "card-header";
    cardHeader.innerHTML = contacts[k].title;
    card.appendChild(cardHeader);
    //var listGroup = document.createElement('ul');
    //listGroup.className = "list-group list-group-flush";
    var cardBody = document.createElement('div');
    cardBody.className = "card-body";

    var contents = contacts[k].address[0].content;
    console.log(contents[0].content);
    var p = "";
    for (var i = 0, len = contents.length; i < len; i++) {
      p = p + contents[i] + "<br>";
    }
    var para = document.createElement('p');
    para.className = "card-text";
    para.innerHTML = p;
    cardBody.appendChild(para);
    card.appendChild(cardBody);

    cardGroup.appendChild(card);
  }

    //var content = document.createElement('p');
    //content.className = "card-text";
    //content.innerHTML = contact.content;

    /*
    Data.database.contact.links.link.forEach(function(link) {
      var linkA = document.createElement('a');
      _link.setAttribute('href', link);
      _link.innerHTML = link;
      content.appendChild(linkA);
    });


    //cardBody.appendChild(content);

    card.appendChild(cardBody);
    cardGroup.appendChild(card);
  };
  */
  //}

  return cardGroup;
}

document.body.appendChild(component());
