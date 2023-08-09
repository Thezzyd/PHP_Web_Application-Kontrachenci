//Getting All kontrahenci


const app = document.getElementById('root')


const containerStrings = document.createElement('div')
containerStrings.setAttribute('class', 'container')

const container = document.createElement('div')
container.setAttribute('class', 'container')

const card_Buttons = document.createElement('div')
card_Buttons.setAttribute('class', 'card')

const card_SerachBox = document.createElement('div')
card_SerachBox.setAttribute('class', 'card')
/*
const form_serachBox = document.createElement('form')
form_serachBox.id = 'Serach_box'
form_serachBox.name = 'Serach_box'
form_serachBox.action = 'javascript:void(0)'
form_serachBox.method = 'post'
*/
const box_SerachBox = document.createElement('div')
box_SerachBox.setAttribute('class', 'data_box_serachBox')

const inputSerachString = document.createElement('input')
inputSerachString.type = 'text'
inputSerachString.placeholder = 'Szukaj...'
inputSerachString.name = 'data_string'
inputSerachString.id = 'inputSerachString'
inputSerachString.setAttribute('style', 'width: 70%')

const buttonSerachString = document.createElement('button')
buttonSerachString.textContent = 'Wyszukaj'
buttonSerachString.setAttribute('onclick', 'GetSerachBoxResult("kontrahent")')

const box_ButtonAdd = document.createElement('div')
box_ButtonAdd.setAttribute('class', 'data_box_dynamic')
box_ButtonAdd.id = 'box_ButtonAdd'

const box_ButtonSerach = document.createElement('div')
box_ButtonSerach.setAttribute('class', 'data_box_dynamic')

//Dodaj kontrahenta - przycisk
const nowyKontrahentBtn = document.createElement('a')
nowyKontrahentBtn.href = '#'
nowyKontrahentBtn.setAttribute('class', 'button')
nowyKontrahentBtn.textContent = 'Dodaj nowego kontrhenta'
nowyKontrahentBtn.setAttribute('onclick', `ShowAddKontrahentElements()`)

//Wygeneruj sekcje wyszukiwania - przycisk
const serachBtn = document.createElement('a')
serachBtn.href = '#'
serachBtn.setAttribute('class', 'button')
serachBtn.textContent = 'Wyszukiwarka'
serachBtn.setAttribute('onclick', `Wyszukiwarka()`)

app.appendChild(card_Buttons)
app.appendChild(card_SerachBox)
card_SerachBox.appendChild(box_SerachBox)
box_SerachBox.appendChild(inputSerachString)
box_SerachBox.appendChild(buttonSerachString)

card_Buttons.appendChild(box_ButtonAdd)
card_Buttons.appendChild(box_ButtonSerach)
box_ButtonAdd.appendChild(nowyKontrahentBtn)
box_ButtonSerach.appendChild(serachBtn)

app.appendChild(document.getElementById('subTitle'))

const card_strings = document.createElement('div')
card_strings.setAttribute('class', 'card')
card_strings.id = 'card_strings'

const card_id_string  = document.createElement('div')
card_id_string.setAttribute('class', 'data_box_string')
card_id_string.setAttribute('style', 'color:#8f3143')
card_id_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Desc")')

const Id_string = document.createElement('p')
Id_string.textContent = `Id Kontrahenta` 


const card_nazwa_string = document.createElement('div')
card_nazwa_string.setAttribute('class', 'data_box_string')
card_nazwa_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Nazwa/Desc")')

const Nazwa_string = document.createElement('p')
Nazwa_string.textContent = `Nazwa Kontrahenta` 

const card_nip_string = document.createElement('div')
card_nip_string.setAttribute('class', 'data_box_string')
card_nip_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/NIP/Desc")')

const NIP_string = document.createElement('p')
NIP_string.textContent = `NIP Kontrahenta` 

const card_typ_string = document.createElement('div')
card_typ_string.setAttribute('class', 'data_box_string')
card_typ_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Typ/Desc")')

const Typ_string = document.createElement('p')
Typ_string.textContent = `Typ Kontrahenta` 


const card_btn_empty = document.createElement('div')
card_btn_empty.setAttribute('class', 'data_box_empty')

const card_temp_for_adding = document.createElement('div')
card_temp_for_adding.id = "addKontrahentCard"
card_temp_for_adding.setAttribute('class', 'card_addKontrahent')

app.appendChild(containerStrings)
app.appendChild(container)

containerStrings.appendChild(card_strings)
containerStrings.appendChild(card_temp_for_adding)

card_strings.appendChild(card_id_string)
card_strings.appendChild(card_nazwa_string)
card_strings.appendChild(card_nip_string)
card_strings.appendChild(card_typ_string)
card_strings.appendChild(card_btn_empty)
card_typ_string.appendChild(Typ_string)
card_id_string.appendChild(Id_string)
card_nazwa_string.appendChild(Nazwa_string)
card_nip_string.appendChild(NIP_string)

var IdSprawdzanegoKontrahenta = 0;
GetKontrahenci('http://slimapp/api/kontrahent')

function GetKontrahenci(getKontrahenciUrl)
{
   container.innerHTML = ''
   card_id_string.setAttribute('style', 'color: #ababab')
   card_nazwa_string.setAttribute('style', 'color: #ababab')
   card_nip_string.setAttribute('style', 'color: #ababab')
   card_typ_string.setAttribute('style', 'color: #ababab')
   card_id_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent")')
   card_nazwa_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Nazwa/Asc")')
   card_nip_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/NIP/Asc")')
   card_typ_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Typ/Asc")')

   if(getKontrahenciUrl == 'http://slimapp/api/kontrahent/Desc')
   {
    card_id_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent")')
    card_id_string.setAttribute('style', 'color:#8f3143')
   }
   else if(getKontrahenciUrl == 'http://slimapp/api/kontrahent')
   {
    card_id_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Desc")')
    card_id_string.setAttribute('style', 'color:#318f55')
   }

   if(getKontrahenciUrl == 'http://slimapp/api/kontrahent/Nazwa/Desc')
   {
    card_nazwa_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Nazwa/Asc")')
    card_nazwa_string.setAttribute('style', 'color:#8f3143')
   }
   else if(getKontrahenciUrl == 'http://slimapp/api/kontrahent/Nazwa/Asc')
   {
    card_nazwa_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Nazwa/Desc")')
    card_nazwa_string.setAttribute('style', 'color:#318f55')
   }

   if(getKontrahenciUrl == 'http://slimapp/api/kontrahent/NIP/Desc')
   {
    card_nip_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/NIP/Asc")')
    card_nip_string.setAttribute('style', 'color:#8f3143')
   }
   else if(getKontrahenciUrl == 'http://slimapp/api/kontrahent/NIP/Asc')
   {
    card_nip_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/NIP/Desc")')
    card_nip_string.setAttribute('style', 'color:#318f55')
   }

   if(getKontrahenciUrl == 'http://slimapp/api/kontrahent/Typ/Desc')
   {
    card_typ_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Typ/Asc")')
    card_typ_string.setAttribute('style', 'color:#8f3143')
   }
   else if(getKontrahenciUrl == 'http://slimapp/api/kontrahent/Typ/Asc')
   {
    card_typ_string.setAttribute('onclick', 'GetKontrahenci("http://slimapp/api/kontrahent/Typ/Desc")')
    card_typ_string.setAttribute('style', 'color:#318f55')
   }

  fetch(getKontrahenciUrl)
  .then(response => response.json())
  .then(data => data.forEach((kontrahent) => {
// Create a div with a card class
const card = document.createElement('div')
card.setAttribute('class', 'card')
card.id = 'KontrahentCard_'+kontrahent.Id_kontrahenta

const card_id = document.createElement('div')
card_id.setAttribute('class', 'data_box')
card_id.textContent = `${kontrahent.Id_kontrahenta}` 

//const Id = document.createElement('p')
//Id.textContent = `${kontrahent.Id_kontrahenta}` 

const card_nazwa = document.createElement('div')
card_nazwa.setAttribute('class', 'data_box')
card_nazwa.textContent = `${kontrahent.Nazwa}` 

//const NazwaKontrahenta = document.createElement('p')
//NazwaKontrahenta.textContent = `${kontrahent.Nazwa}` 

const card_nip = document.createElement('div')
card_nip.setAttribute('class', 'data_box')
card_nip.textContent = `${kontrahent.NIP}` 

//const NIPKontrahenta = document.createElement('p')
//NIPKontrahenta.textContent = `${kontrahent.NIP}` 

const card_typ_kontrahenta = document.createElement('div')
card_typ_kontrahenta.setAttribute('class', 'data_box')
card_typ_kontrahenta.textContent = `${kontrahent.Typ_kontrahenta}` 

//const Typ_Kontrahenta = document.createElement('p')
//Typ_Kontrahenta.textContent = `${kontrahent.Typ_kontrahenta}` 

//Button pokaz szczegoly i usuń
const card_btn = document.createElement('div')
card_btn.setAttribute('class', 'data_box_icons')

const img_data = document.createElement('img')
img_data.src = 'data.png'
img_data.setAttribute('class', 'icons')
img_data.title = "Pokaż dane"

const img_delete = document.createElement('img')
img_delete.src = 'delete.png'
img_delete.setAttribute('class', 'icons')
img_delete.title = "Usuń"

const img_edit = document.createElement('img')
img_edit.src = 'edit.png'
img_edit.setAttribute('class', 'icons')
img_edit.title = "Edytuj"


const img_faktura = document.createElement('img')
img_faktura.src = 'faktura.png'
img_faktura.setAttribute('class', 'icons')
img_faktura.title = "Faktury"        

const info_btn = document.createElement('a')
info_btn.href = `javascript:void(0)` 
info_btn.setAttribute('onclick', `ShowData(${kontrahent.Id_kontrahenta},"http://slimapp/api/adres/kontrahent")`)
info_btn.setAttribute('class', 'buttonIMG')
info_btn.appendChild(img_data)
//info_btn.textContent = `Pokaż dane` 

const remove_btn = document.createElement('a')
remove_btn.href = `javascript:void(0)` 
remove_btn.setAttribute('onclick', `DeleteKontrahent(${kontrahent.Id_kontrahenta}, "kontrahent")`)
remove_btn.setAttribute('class', 'buttonIMG')
remove_btn.appendChild(img_delete)
//remove_btn.textContent = `Usuń` 

const update_btn = document.createElement('a')
update_btn.href = `javascript:void(0)` 
update_btn.setAttribute('onclick', `UpdateKontrahent(${kontrahent.Id_kontrahenta}, "kontrahent")`)
update_btn.setAttribute('class', 'buttonIMG')
update_btn.appendChild(img_edit)

const faktura_btn = document.createElement('a')
faktura_btn.href = `javascript:void(0)` 
faktura_btn.setAttribute('onclick', `PokazSekcjeFaktur(${kontrahent.Id_kontrahenta})`)
faktura_btn.setAttribute('class', 'buttonIMG')
faktura_btn.appendChild(img_faktura)   


//update_btn.textContent = `Edytuj` 

container.appendChild(card)

card.appendChild(card_id)
card.appendChild(card_nazwa)
card.appendChild(card_nip)
card.appendChild(card_typ_kontrahenta)
card.appendChild(card_btn)
//card_id.appendChild(Id)
//card_nazwa.appendChild(NazwaKontrahenta)
//card_nip.appendChild(NIPKontrahenta)
//card_typ_kontrahenta.appendChild(Typ_Kontrahenta)
card_btn.appendChild(info_btn)
card_btn.appendChild(remove_btn)
card_btn.appendChild(update_btn)
card_btn.appendChild(faktura_btn)

  }));



}

function PokazSekcjeFaktur(id_kontrahenta)
{

  if(document.getElementById('containerForFaktury'))
  {
    document.getElementById('containerForFaktury').remove()
  }
  else
  {
  const card_selected_kontrahent = document.getElementById('KontrahentCard_'+id_kontrahenta)

  const containerForFaktury = document.createElement('div')
  containerForFaktury.setAttribute('class', 'container')
  containerForFaktury.id = 'containerForFaktury'

  card_selected_kontrahent.appendChild(containerForFaktury)

  const card_1  = document.createElement('div')
  card_1.setAttribute('class', 'containerOsoba')
  
   //Tworzenie nowych nazw parametrow do adresow
  // const containerStringsFaktura = document.createElement('div')
  // containerStringsFaktura.setAttribute('class', 'containerOsoba')

const card_Faktura_Data = document.createElement('div')
card_Faktura_Data.setAttribute('class', 'cardNoBorderOsoba')
card_Faktura_Data.id = 'fakturaMain'

containerForFaktury.appendChild(card_1)
card_1.appendChild(card_Faktura_Data)
//containerStringsFaktura.appendChild(card_Faktura_Data)

const card_date= document.createElement('div')
card_date.id = 'Wybranie_daty'
card_date.setAttribute('class', 'cardFaktura')

const card_date2= document.createElement('div')
card_date2.setAttribute('class', 'cardOsoba')

const wybierzDateString = document.createElement('p')
wybierzDateString.textContent = ' Wybierz datę wystawienia faktury:'


const WybierzDate = document.createElement('input')
WybierzDate.type = 'date'
WybierzDate.id = 'start_date'
WybierzDate.name = 'trip-start'
WybierzDate.value = '2020-01-01'
WybierzDate.min = '2010-01-01'

const WybierzDate2 = document.createElement('input')
WybierzDate2.type = 'date'
WybierzDate2.id = 'end_date'
WybierzDate2.name = 'trip-start'
WybierzDate2.value = '2021-01-01'
WybierzDate2.min = '2010-01-01'

card_Faktura_Data.appendChild(card_date2)
card_Faktura_Data.appendChild(card_date)
card_date2.appendChild(wybierzDateString)
card_date.appendChild(WybierzDate)
card_date.appendChild(WybierzDate2)


//Przyciski akcji na osobie
const card_Buttons = document.createElement('div')
card_Buttons.setAttribute('class', 'cardAdresButtons')
card_Buttons.id = 'OsobaPrzyciski_'

const box_update= document.createElement('div')
box_update.setAttribute('class', 'data_boxOsobaBtns')

   const update_btn = document.createElement('a')
   update_btn.href = `javascript:void(0)` 
   update_btn.setAttribute('onclick', 'PobierzFaktury('+id_kontrahenta+')')
   update_btn.setAttribute('class', 'buttonFullHeight')
   update_btn.textContent = `Pobierz faktury` 

   card_Faktura_Data.appendChild(card_Buttons)
  // card_Buttons.appendChild(box_osoba)
 
   card_Buttons.appendChild(box_update)
   box_update.appendChild(update_btn)

  }
}


function DeleteKontrahent(x, sekcja)
{
    
    fetch('http://slimapp/api/kontrahent/delete/'+x, {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
      .then(data => console.log(data));

      alert('Kontrahent usunięty!');
      if(sekcja == 'kontrahent')
      {
        setTimeout("location.reload(true);");
      }
      else if(sekcja == 'wyszukaj')   
      {
        GlobalSerach();
      } 
 }

 function DeleteAdresWyszukaj(x)
{
    
    fetch('http://slimapp/api/adres/delete/'+x, {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
      .then(data => console.log(data));

      alert('Adres usunięty!');
     
        GlobalSerach();
      
 }

 function DeleteOsobaKontaktowaWyszukaj(x)
 {
     
     fetch('http://slimapp/api/osoba_kontaktowa/delete/'+x, {
         method: 'DELETE', // or 'PUT'
         headers: {
           'Content-Type': 'application/json',
         },
       }).then(response => response.json())
       .then(data => console.log(data));
 
       alert('Osoba kontaktowa usunięta!');
      
         GlobalSerach();
       
  }

//wybranie jednego kontrahenta
function ShowData(Id_kontrahenta, getAdresUrl)
{

IdSprawdzanegoKontrahenta = Id_kontrahenta
container.innerHTML = ""
card_temp_for_adding.innerHTML = ""

nowyKontrahentBtn.textContent = 'Dodaj nowy adres'
nowyKontrahentBtn.setAttribute('onclick', 'ShowAddAdresElements('+Id_kontrahenta+')')

card_id_string.setAttribute('style', 'color: #ababab')
card_nazwa_string.setAttribute('style', 'color: #ababab')
card_nip_string.setAttribute('style', 'color: #ababab')
card_typ_string.setAttribute('style', 'color: #ababab')

card_id_string.removeAttribute('onclick')
card_nazwa_string.removeAttribute('onclick')
card_nip_string.removeAttribute('onclick')
card_typ_string.removeAttribute('onclick')

buttonSerachString.setAttribute('onclick', 'GetSerachBoxResult("adres")')

if(!document.getElementById('returnBtn'))
{
const box_ButtonReturn = document.createElement('div')
box_ButtonReturn.setAttribute('class', 'data_box_dynamic')

document.getElementById('subTitle').textContent = 'Adresy przypisane do kontrahenta:'

//Powrót - przycisk
const returnBtn = document.createElement('a')
returnBtn.href = '#'
returnBtn.setAttribute('class', 'button')
returnBtn.textContent = 'Wróć'
returnBtn.setAttribute('onclick', `ReturnToStart()`)
returnBtn.id = 'returnBtn'

card_Buttons.appendChild(box_ButtonReturn)
box_ButtonReturn.appendChild(returnBtn)
}

  fetch('http://slimapp/api/kontrahent/'+Id_kontrahenta)
  .then(response => response.json())
  .then(data => data.forEach((kontrahent) => {
    // Create a div with a card class
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.id = 'KontrahentCard_'+Id_kontrahenta
    
    const card_id = document.createElement('div')
    card_id.setAttribute('class', 'data_box')
    card_id.textContent = `${kontrahent.Id_kontrahenta}` 
    
 //   const Id = document.createElement('p')
   // Id.textContent = `${kontrahent.Id_kontrahenta}` 
    
    const card_nazwa = document.createElement('div')
    card_nazwa.setAttribute('class', 'data_box')
    card_nazwa.textContent = `${kontrahent.Nazwa}` 
    
  //  const NazwaKontrahenta = document.createElement('p')
   // NazwaKontrahenta.textContent = `${kontrahent.Nazwa}` 
    
    const card_nip = document.createElement('div')
    card_nip.setAttribute('class', 'data_box')
    card_nip.textContent = `${kontrahent.NIP}` 
    
   // const NIPKontrahenta = document.createElement('p')
   // NIPKontrahenta.textContent = `${kontrahent.NIP}` 
    
    const card_typ_kontrahenta = document.createElement('div')
    card_typ_kontrahenta.setAttribute('class', 'data_box')
    card_typ_kontrahenta.textContent = `${kontrahent.Typ_kontrahenta}` 
    
    //const Typ_Kontrahenta = document.createElement('p')
    //Typ_Kontrahenta.textContent = `${kontrahent.Typ_kontrahenta}` 
    
    //Button pokaz szczegoly i usuń
    const card_btn = document.createElement('div')
    card_btn.setAttribute('class', 'data_box_icons')
    
   /* const info_btn = document.createElement('a')
    info_btn.href = `javascript:void(0)` 
    info_btn.setAttribute('onclick', `ShowData(${kontrahent.Id_kontrahenta})`)
    info_btn.setAttribute('class', 'button')
    info_btn.textContent = `Pokaż dane` */
    
    
const img_delete = document.createElement('img')
img_delete.src = 'delete.png'
img_delete.setAttribute('class', 'icons')
img_delete.title = "Usuń"

const img_edit = document.createElement('img')
img_edit.src = 'edit.png'
img_edit.setAttribute('class', 'icons')
img_edit.title = "Edytuj"

    const remove_btn = document.createElement('a')
    remove_btn.href = `javascript:void(0)` 
    remove_btn.setAttribute('onclick', `DeleteKontrahent(${kontrahent.Id_kontrahenta}, "kontrahent")`)
    remove_btn.setAttribute('class', 'buttonIMG')
    remove_btn.appendChild(img_delete)
   // remove_btn.textContent = `Usuń` 
    
    const update_btn = document.createElement('a')
    update_btn.href = `javascript:void(0)` 
    update_btn.setAttribute('onclick', `UpdateKontrahent(${kontrahent.Id_kontrahenta}, "kontrahent")`)
    update_btn.setAttribute('class', 'buttonIMG')
    update_btn.appendChild(img_edit)
  //  update_btn.textContent = `Edytuj` 
    
   // container.appendChild(containerStrings)
    container.prepend(card)
   // parent.prepend(newChild)
    
    card.appendChild(card_id)
    card.appendChild(card_nazwa)
    card.appendChild(card_nip)
    card.appendChild(card_typ_kontrahenta)
    card.appendChild(card_btn)
   // card_id.appendChild(Id)
    //card_nazwa.appendChild(NazwaKontrahenta)
    //card_nip.appendChild(NIPKontrahenta)
    //card_typ_kontrahenta.appendChild(Typ_Kontrahenta)
   // card_btn.appendChild(info_btn)
    card_btn.appendChild(remove_btn)
    card_btn.appendChild(update_btn)
     
    const AddAdresContainer = document.createElement('div')
    AddAdresContainer.setAttribute('class', 'container')
    AddAdresContainer.id = 'AddAdresContainer'

    card.appendChild(AddAdresContainer)

    //const naglowekContainer = document.createElement('div')
    //naglowekContainer.setAttribute('class', 'container')
    //app.appendChild(naglowekContainer)

  //  const naglowekAdresy = document.createElement('h2')
   // naglowekAdresy.textContent = 'Adresy przypisane do kontrahenta:'
   // container.appendChild(naglowekAdresy)
    //Naglowek Adresy
   // const card_naglowekAdresy = document.createElement('div')
    //container.appen
   

      }));
    
   const containerForAllAdresy = document.createElement('div')
   containerForAllAdresy.setAttribute('class', 'container')
   containerForAllAdresy.id = 'containerForAllAdresy'

   container.appendChild(containerForAllAdresy)

    //Getting all Adresy for selected kontrahent
 fetch(getAdresUrl+'/'+Id_kontrahenta)
 .then(response => response.json())
 .then(data => data.forEach((adres) => {
   


    //Tworzenie nowych nazw parametrow do adresow
    const containerStringsAdres = document.createElement('div')
    containerStringsAdres.setAttribute('class', 'container')

    

    const naglowekAdresy2 = document.createElement('h3')
    //naglowekAdresy2.textContent = `${adres.Rodzaj}`

    if(adres.Rodzaj == 'Siedziba_glowna')
    naglowekAdresy2.textContent = `Siedziba Główna`
    else
    naglowekAdresy2.textContent = `Oddział`

   // containerStringsAdres.appendChild(naglowekAdresy)
  
const card_Adres_Data = document.createElement('div')
card_Adres_Data.setAttribute('class', 'card')
card_Adres_Data.id = 'adres_'+adres.Id_adresu

//container.appendChild(containerStringsAdres)
containerForAllAdresy.appendChild(containerStringsAdres)
//document.getElementById('KontrahentCard').appendChild(containerStringsAdres)
containerStringsAdres.appendChild(card_Adres_Data)
card_Adres_Data.appendChild(naglowekAdresy2)


const card_Id_adresu = document.createElement('div')
card_Id_adresu.id = 'Id_adresu_'+adres.Id_adresu
card_Id_adresu.setAttribute('class', 'cardAdres')
const Id_adresu_string = document.createElement('p')
Id_adresu_string.textContent = `Id Adresu: ${adres.Id_adresu}`
card_Adres_Data.appendChild(card_Id_adresu)
card_Id_adresu.appendChild(Id_adresu_string)

const card_Id_kontrahenta = document.createElement('div')
card_Id_kontrahenta.id = 'Id_kontrahenta_'+adres.Id_adresu
card_Id_kontrahenta.setAttribute('class', 'cardAdres')
const Id_kontrahenta_string = document.createElement('p')
Id_kontrahenta_string.textContent = `Id Kontrahenta: ${adres.Id_kontrahenta}` 
card_Adres_Data.appendChild(card_Id_kontrahenta)
card_Id_kontrahenta.appendChild(Id_kontrahenta_string)

const card_Rodzaj = document.createElement('div')
card_Rodzaj.id = 'Rodzaj_'+adres.Id_adresu
card_Rodzaj.setAttribute('class', 'cardAdres')
const Rodzaj_string = document.createElement('p')
Rodzaj_string.textContent = `Rodzaj: ${adres.Rodzaj}` 
card_Adres_Data.appendChild(card_Rodzaj)
card_Rodzaj.appendChild(Rodzaj_string)

const card_Ulica = document.createElement('div')
card_Ulica.id = 'Ulica_'+adres.Id_adresu
card_Ulica.setAttribute('class', 'cardAdres')
const Ulica_string = document.createElement('p')
Ulica_string.textContent = `Ulica: ${adres.Ulica}` 
card_Adres_Data.appendChild(card_Ulica)
card_Ulica.appendChild(Ulica_string)

const card_Miejscowosc = document.createElement('div')
card_Miejscowosc.id = 'Miejscowosc_'+adres.Id_adresu
card_Miejscowosc.setAttribute('class', 'cardAdres')
const Miejscowosc_string = document.createElement('p')
Miejscowosc_string.textContent = `Miejscowosc: ${adres.Miejscowosc}` 
card_Adres_Data.appendChild(card_Miejscowosc)
card_Miejscowosc.appendChild(Miejscowosc_string)

const card_Nr_budynku = document.createElement('div')
card_Nr_budynku.id = 'Nr_budynku_'+adres.Id_adresu
card_Nr_budynku.setAttribute('class', 'cardAdres')
const Nr_budynku_string = document.createElement('p')
Nr_budynku_string.textContent = `Nr Budynku: ${adres.Nr_budynku}` 
card_Adres_Data.appendChild(card_Nr_budynku)
card_Nr_budynku.appendChild(Nr_budynku_string)

const card_Nr_lokalu = document.createElement('div')
card_Nr_lokalu.id = 'Nr_lokalu_'+adres.Id_adresu
card_Nr_lokalu.setAttribute('class', 'cardAdres')
const Nr_lokalu_string = document.createElement('p')
Nr_lokalu_string.textContent = `Nr Lokalu: ${adres.Nr_lokalu}` 
card_Adres_Data.appendChild(card_Nr_lokalu)
card_Nr_lokalu.appendChild(Nr_lokalu_string)

const card_Kod_pocztowy = document.createElement('div')
card_Kod_pocztowy.id = 'Kod_pocztowy_'+adres.Id_adresu
card_Kod_pocztowy.setAttribute('class', 'cardAdres')
const Kod_pocztowy_string = document.createElement('p')
Kod_pocztowy_string.textContent = `Kod Pocztowy: ${adres.Kod_pocztowy}` 
card_Adres_Data.appendChild(card_Kod_pocztowy)
card_Kod_pocztowy.appendChild(Kod_pocztowy_string)

const card_Gmina = document.createElement('div')
card_Gmina.id = 'Gmina_'+adres.Id_adresu
card_Gmina.setAttribute('class', 'cardAdres')
const Gmina_string = document.createElement('p')
Gmina_string.textContent = `Gmina: ${adres.Gmina}` 
card_Adres_Data.appendChild(card_Gmina)
card_Gmina.appendChild(Gmina_string)

const card_Powiat = document.createElement('div')
card_Powiat.id = 'Powiat_'+adres.Id_adresu
card_Powiat.setAttribute('class', 'cardAdres')
const Powiat_string = document.createElement('p')
Powiat_string.textContent = `Powiat: ${adres.Powiat}` 
card_Adres_Data.appendChild(card_Powiat)
card_Powiat.appendChild(Powiat_string)

const card_Wojewodztwo = document.createElement('div')
card_Wojewodztwo.id = 'Wojewodztwo_'+adres.Id_adresu
card_Wojewodztwo.setAttribute('class', 'cardAdres')
const Wojewodztwo_string = document.createElement('p')
Wojewodztwo_string.textContent = `Wojewodztwo: ${adres.Wojewodztwo}` 
card_Adres_Data.appendChild(card_Wojewodztwo)
card_Wojewodztwo.appendChild(Wojewodztwo_string)

const card_Kraj = document.createElement('div')
card_Kraj.id = 'Kraj_'+adres.Id_adresu
card_Kraj.setAttribute('class', 'cardAdres')
const Kraj_string = document.createElement('p')
Kraj_string.textContent = `Kraj: ${adres.Kraj}` 
card_Adres_Data.appendChild(card_Kraj)
card_Kraj.appendChild(Kraj_string)

const card_Nr_tel = document.createElement('div')
card_Nr_tel.id = 'Nr_tel_'+adres.Id_adresu
card_Nr_tel.setAttribute('class', 'cardAdres')
const Nr_tel_string = document.createElement('p')
Nr_tel_string.textContent = `Nr Telefonu: ${adres.Nr_telefonu}` 
card_Adres_Data.appendChild(card_Nr_tel)
card_Nr_tel.appendChild(Nr_tel_string)

const card_Email = document.createElement('div')
card_Email.id = 'Email_'+adres.Id_adresu
card_Email.setAttribute('class', 'cardAdres')
const Email_string = document.createElement('p')
Email_string.textContent = `Email: ${adres.Email}` 
card_Adres_Data.appendChild(card_Email)
card_Email.appendChild(Email_string)

//Przyciski akcji na adresie
const card_Buttons = document.createElement('div')
card_Buttons.setAttribute('class', 'cardAdresButtonsMain')

const box_osoba = document.createElement('div')
box_osoba.setAttribute('class', 'data_boxAdresBtns')

const box_remove = document.createElement('div')
box_remove.setAttribute('class', 'data_boxAdresBtns')

const box_update= document.createElement('div')
box_update.setAttribute('class', 'data_boxAdresBtns')

    const osoby_btn = document.createElement('a')
    osoby_btn.href = `javascript:void(0)` 
    osoby_btn.setAttribute('onclick', `ShowOsobyKontaktowe(${adres.Id_adresu})`)
    osoby_btn.setAttribute('class', 'buttonFullHeight')
    osoby_btn.textContent = `Pokaż osoby kontaktowe`
    
    const remove_btn = document.createElement('a')
    remove_btn.href = `javascript:void(0)` 
    remove_btn.setAttribute('onclick', `DeleteAdres(${adres.Id_adresu}, ${adres.Id_kontrahenta})`)
    remove_btn.setAttribute('class', 'buttonFullHeight')
    remove_btn.textContent = `Usuń` 
    
    const update_btn = document.createElement('a')
    update_btn.href = `javascript:void(0)` 
    update_btn.setAttribute('onclick', `UpdateAdres(${adres.Id_adresu}, ${adres.Id_kontrahenta})`)
    update_btn.setAttribute('class', 'buttonFullHeight')
    update_btn.textContent = `Edytuj` 

    card_Adres_Data.appendChild(card_Buttons)
    card_Buttons.appendChild(box_osoba)
    card_Buttons.appendChild(box_remove)
    card_Buttons.appendChild(box_update)
    box_osoba.appendChild(osoby_btn)
    box_remove.appendChild(remove_btn)
    box_update.appendChild(update_btn)

 }));

  //alert("Przycisk w robocie: "+x)

}

function UpdateKontrahent(x, sekcja)
{
 
  //Hide osoby kontaktowe card
  if(document.getElementById('containerForOsoby'))
  {
    document.getElementById('containerForOsoby').remove();
  }
  
//Ukrycie update adres form
 if(document.getElementById('Input_Id_adresu'))
 {
 document.getElementById('Input_Id_adresu').remove()
 document.getElementById('Input_Id_kontrahenta').remove()
 document.getElementById('Input_Rodzaj').remove()
 document.getElementById('Input_Ulica').remove()
 document.getElementById('Input_Miejscowosc').remove()
 document.getElementById('Input_Nr_budynku').remove()
 document.getElementById('Input_Nr_lokalu').remove()
 document.getElementById('Input_Kod_pocztowy').remove()
 document.getElementById('Input_Gmina').remove()
 document.getElementById('Input_Powiat').remove()
 document.getElementById('Input_Wojewodztwo').remove()
 document.getElementById('Input_Kraj').remove()
 document.getElementById('Input_Nr_telefonu').remove()
 document.getElementById('Input_Email').remove()
 document.getElementById('Submit_Btn').remove()
 }


 card_temp_for_adding.innerHTML = ""

 if(document.getElementById('Update_osoba'))
 {
document.getElementById('Update_osoba').remove();
 }

 if(document.getElementById('Update_adres'))
 {
document.getElementById('Update_adres').remove();
 }

 if(document.getElementById('Update_stanowisko'))
 {
document.getElementById('Update_stanowisko').remove();
 }

 if(document.getElementById('Update_kontrahent'))
 {
    console.log('dziala')
document.getElementById('Update_kontrahent').remove();

 }
else
{
 const selectedUpdateCard = document.getElementById('KontrahentCard_'+x)
 
 const newUpdateForm = document.createElement('form')
 newUpdateForm.id = 'Update_kontrahent'
 newUpdateForm.name = 'Update_kontrahent'
 newUpdateForm.action = 'javascript:void(0)'
 newUpdateForm.method = 'post'
 newUpdateForm.setAttribute('class','Update_kontrahent_stanowisko')

 selectedUpdateCard.appendChild(newUpdateForm)

    const card_empty= document.createElement('div')
    card_empty.setAttribute('class', 'data_box')
    const card_Update_Nazwa= document.createElement('div')
    card_Update_Nazwa.setAttribute('class', 'data_box')
    const card_Update_NIP= document.createElement('div')
    card_Update_NIP.setAttribute('class', 'data_box')
    const card_Update_Typ= document.createElement('div')
    card_Update_Typ.setAttribute('class', 'data_box')
    const card_Update_Btn= document.createElement('div')
    card_Update_Btn.setAttribute('class', 'data_box')

   
    //Create disabled autoIncrement field
        const inputId = document.createElement('input')
        inputId.type = 'text'
        inputId.placeholder = 'Auto Increment'
        inputId.name = 'Id'
        inputId.disabled = true
        inputId.id = 'KontrahentUpdateInputId'

    newUpdateForm.appendChild(card_empty)
    card_empty.appendChild(inputId)

      //Create Nazwa field
      const inputNazwa = document.createElement('input')
      inputNazwa.type = 'text'
      inputNazwa.name = 'Nazwa'
      inputNazwa.id = 'KontrahentUpdateInputNazwa'
  
    newUpdateForm.appendChild(card_Update_Nazwa)
    card_Update_Nazwa.appendChild(inputNazwa)

      //Create NIP field
      const inputNIP = document.createElement('input')
      inputNIP.type = 'text'
      inputNIP.name = 'NIP'
      inputNIP.id = 'KontrahentUpdateInputNIP'

    newUpdateForm.appendChild(card_Update_NIP)
    card_Update_NIP.appendChild(inputNIP)

      //Create Typ_kontrahenta field 
      const selectTyp_kontrahenta = document.createElement('select')
      selectTyp_kontrahenta.value = 'none'
      selectTyp_kontrahenta.name = 'Typ_kontrahenta'
      const optionDostawca = document.createElement('option')
      optionDostawca.value = 'Dostawca'
      optionDostawca.textContent = 'Dostawca'
      const optionOdbiorca = document.createElement('option')
      optionOdbiorca.value = 'Odbiorca'
      optionOdbiorca.textContent = 'Odbiorca'
  
   selectTyp_kontrahenta.appendChild(optionDostawca)
   selectTyp_kontrahenta.appendChild(optionOdbiorca)


   newUpdateForm.appendChild(card_Update_Typ)
   card_Update_Typ.appendChild(selectTyp_kontrahenta)

      // send btn
      const sendForm = document.createElement('button')
      sendForm.type = 'submit'
      sendForm.textContent = "Aktualizuj!"
      sendForm.setAttribute('class', 'buttonForm')
      sendForm.id = 'KontrahentUpdateSendBtn'
   

    newUpdateForm.appendChild(card_Update_Btn)
    card_Update_Btn.appendChild(sendForm)
   

    function CheckForm(data, sekcja)
    {
       if(data == "Pomyslnie zaktualizowano")
       {
         if(sekcja == "kontrahent")
         {
         newUpdateForm.remove()
         setTimeout("location.reload(true);",500)
         alert(data)
         }
         else if(sekcja == 'wyszukaj')   
        {
          newUpdateForm.remove()
          setTimeout(GlobalSerach(), 500);
          alert(data)
        } 

       }
       else
       {
         alert(data)
       }
    }

    newUpdateForm.addEventListener( "submit", function( e2 ) {
        e2.preventDefault();
        var data = toJSONString( this );

        console.log(data)
        fetch('http://slimapp/api/kontrahent/update/'+x, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        }).then(response => response.text())
        .then(data => CheckForm(data, sekcja));

      //  newUpdateForm.remove()
      //  alert('Kontrahent zaktualizowany!');
     /*   if(sekcja == 'kontrahent')
        {
          setTimeout("location.reload(true);", 500);
        }
        else if(sekcja == 'wyszukaj')   
        {
          setTimeout(GlobalSerach(), 500);
        } */

    }, false);

 }
}


function UpdateAdresWyszukaj(x)
{
 

 card_temp_for_adding.innerHTML = ""

 if(document.getElementById('Update_osoba'))
 {
document.getElementById('Update_osoba').remove();
 }

 if(document.getElementById('Update_stanowisko'))
 {
document.getElementById('Update_stanowisko').remove();
 }

 if(document.getElementById('Update_kontrahent'))
 {
document.getElementById('Update_kontrahent').remove();

 }

 if(document.getElementById('Update_Adres'))
 {
    document.getElementById('Update_Adres').remove();
 }
else
{
 const selectedUpdateCard = document.getElementById('AdresCard_'+x)
 
 const newUpdateForm = document.createElement('form')
 newUpdateForm.id = 'Update_Adres'
 newUpdateForm.name = 'Update_Adres'
 newUpdateForm.action = 'javascript:void(0)'
 newUpdateForm.method = 'post'
 newUpdateForm.setAttribute('class', 'formScrollable')

//const breakdiv = document.createElement('div')
//breakdiv.setAttribute('class', 'break')

//document.getElementById('container_scrollable')

 //selectedUpdateCard.appendChild(breakdiv)
 //document.getElementById('container_scrollable').appendChild(newUpdateForm)

 selectedUpdateCard.parentNode.insertBefore(newUpdateForm,  selectedUpdateCard.nextSibling);
 
    const card_empty= document.createElement('div')
    card_empty.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_empty2= document.createElement('div')
    card_empty2.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Rodzaj= document.createElement('div')
    card_Update_Rodzaj.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Ulica= document.createElement('div')
    card_Update_Ulica.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Miejscowosc= document.createElement('div')
    card_Update_Miejscowosc.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Nr_budynku= document.createElement('div')
    card_Update_Nr_budynku.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Nr_lokalu= document.createElement('div')
    card_Update_Nr_lokalu.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Kod_pocztowy = document.createElement('div')
    card_Update_Kod_pocztowy.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Gmina= document.createElement('div')
    card_Update_Gmina.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Powiat= document.createElement('div')
    card_Update_Powiat.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Wojewodztwo= document.createElement('div')
    card_Update_Wojewodztwo.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Kraj= document.createElement('div')
    card_Update_Kraj.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Nr_telefonu= document.createElement('div')
    card_Update_Nr_telefonu.setAttribute('class', 'data_boxWyszukajAdresu')
    const card_Update_Email= document.createElement('div')
    card_Update_Email.setAttribute('class', 'data_boxWyszukajAdresu')

    const card_Update_Btn= document.createElement('div')
    card_Update_Btn.setAttribute('class', 'data_boxWyszukajAdresu')

   
    //Create disabled autoIncrement field
        const inputId = document.createElement('input')
        inputId.type = 'text'
        inputId.placeholder = x
        inputId.name = 'Id'
        inputId.disabled = true
        inputId.id = 'AdresUpdateInputId'

    newUpdateForm.appendChild(card_empty)
    card_empty.appendChild(inputId)

      //Create Nazwa field
      const input_Id_kontrahenta = document.createElement('input')
      input_Id_kontrahenta.type = 'text'
      input_Id_kontrahenta.name = 'Id_kontrahenta'
     // input_Id_kontrahenta.placeholder = 'Id'
      input_Id_kontrahenta.id = 'AdresUpdateInputId_kontrahenta'
     // input_Id_kontrahenta.disabled = true
      
  
    newUpdateForm.appendChild(card_empty2)
    card_empty2.appendChild(input_Id_kontrahenta)

     

      //Create Typ_kontrahenta field 
      const selectRodzaj = document.createElement('select')
      selectRodzaj.value = 'none'
      selectRodzaj.name = 'Rodzaj'
      const optionSiedziba_glowna = document.createElement('option')
      optionSiedziba_glowna.value = 'Siedziba_glowna'
      optionSiedziba_glowna.textContent = 'Siedziba_glowna'
      const optionOddzial= document.createElement('option')
      optionOddzial.value = 'Oddzial'
      optionOddzial.textContent = 'Oddzial'
  
   selectRodzaj.appendChild(optionSiedziba_glowna)
   selectRodzaj.appendChild(optionOddzial)


   newUpdateForm.appendChild(card_Update_Rodzaj)
   card_Update_Rodzaj.appendChild(selectRodzaj)

    //Create NIP field
    const inputUlica = document.createElement('input')
    inputUlica.type = 'text'
    inputUlica.name = 'Ulica'
    inputUlica.id = 'AdresUpdateInputUlica'

  newUpdateForm.appendChild(card_Update_Ulica)
  card_Update_Ulica.appendChild(inputUlica)

   //Create NIP field
   const inputMiejscowosc = document.createElement('input')
   inputMiejscowosc.type = 'text'
   inputMiejscowosc.name = 'Miejscowosc'
   inputMiejscowosc.id = 'AdresUpdateInputMiejscowosc'

 newUpdateForm.appendChild(card_Update_Miejscowosc)
 card_Update_Miejscowosc.appendChild(inputMiejscowosc)

  //Create NIP field
  const inputNr_budynku= document.createElement('input')
  inputNr_budynku.type = 'text'
  inputNr_budynku.name = 'Nr_budynku'
  inputNr_budynku.id = 'AdresUpdateInputNr_budynku'

newUpdateForm.appendChild(card_Update_Nr_budynku)
card_Update_Nr_budynku.appendChild(inputNr_budynku)

  //Create NIP field
  const inputNr_lokalu= document.createElement('input')
  inputNr_lokalu.type = 'text'
  inputNr_lokalu.name = 'Nr_lokalu'
  inputNr_lokalu.id = 'AdresUpdateInputNr_lokalu'

newUpdateForm.appendChild(card_Update_Nr_lokalu)
card_Update_Nr_lokalu.appendChild(inputNr_lokalu)

  //Create NIP field
  const inputKod_pocztowy= document.createElement('input')
  inputKod_pocztowy.type = 'text'
  inputKod_pocztowy.name = 'Kod_pocztowy'
  inputKod_pocztowy.id = 'AdresUpdateInputKod_pocztowy'

newUpdateForm.appendChild(card_Update_Kod_pocztowy)
card_Update_Kod_pocztowy.appendChild(inputKod_pocztowy)

  //Create NIP field
  const inputGmina= document.createElement('input')
  inputGmina.type = 'text'
  inputGmina.name = 'Gmina'
  inputGmina.id = 'AdresUpdateInputGmina'

newUpdateForm.appendChild(card_Update_Gmina)
card_Update_Gmina.appendChild(inputGmina)

  //Create NIP field
  const inputPowiat= document.createElement('input')
  inputPowiat.type = 'text'
  inputPowiat.name = 'Powiat'
  inputPowiat.id = 'AdresUpdateInputPowiat'

newUpdateForm.appendChild(card_Update_Powiat)
card_Update_Powiat.appendChild(inputPowiat)

  //Create NIP field
  const inputWojewodztwo= document.createElement('input')
  inputWojewodztwo.type = 'text'
  inputWojewodztwo.name = 'Wojewodztwo'
  inputWojewodztwo.id = 'AdresUpdateInputWojewodztwo'

newUpdateForm.appendChild(card_Update_Wojewodztwo)
card_Update_Wojewodztwo.appendChild(inputWojewodztwo)

const inputKraj= document.createElement('input')
inputKraj.type = 'text'
inputKraj.name = 'Kraj'
inputKraj.id = 'AdresUpdateInputKraj'

newUpdateForm.appendChild(card_Update_Kraj)
card_Update_Kraj.appendChild(inputKraj)

const inputNr_telefonu= document.createElement('input')
inputNr_telefonu.type = 'text'
inputNr_telefonu.name = 'Nr_telefonu'
inputNr_telefonu.id = 'AdresUpdateInputNr_telefonu'

newUpdateForm.appendChild(card_Update_Nr_telefonu)
card_Update_Nr_telefonu.appendChild(inputNr_telefonu)

const inputEmail= document.createElement('input')
inputEmail.type = 'text'
inputEmail.name = 'Email'
inputEmail.id = 'AdresUpdateInputEmail'

newUpdateForm.appendChild(card_Update_Email)
card_Update_Email.appendChild(inputEmail)


      // send btn
      const sendForm = document.createElement('button')
      sendForm.type = 'submit'
      sendForm.textContent = "Aktualizuj!"
      sendForm.setAttribute('class', 'buttonForm')
      sendForm.id = 'AdresUpdateSendBtn'
   

    newUpdateForm.appendChild(card_Update_Btn)
    card_Update_Btn.appendChild(sendForm)
   
    function CheckForm(data)
    {
       if(data == "Pomyslnie zaktualizowano")
       {
        newUpdateForm.remove()
        setTimeout(GlobalSerach(), 500);
         alert(data)
       }  
       else
       {
         alert(data)
       }
    }

    newUpdateForm.addEventListener( "submit", function( e5 ) {
        e5.preventDefault();
        var data = toJSONString( this );

        console.log(data)
        fetch('http://slimapp/api/adres/update/'+x, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        }).then(response => response.text())
        .then(data => CheckForm(data));

      //  newUpdateForm.remove()
     //   alert('Adres zaktualizowany!');
       
      
        //  setTimeout(GlobalSerach(), 500);
        

    }, false);

 }
}


function UpdateOsobaKontaktowaWyszukaj(x)
{

 card_temp_for_adding.innerHTML = ""

 if(document.getElementById('Update_stanowisko'))
 {
document.getElementById('Update_stanowisko').remove();
 }

 if(document.getElementById('Update_kontrahent'))
 {
document.getElementById('Update_kontrahent').remove();

 }
 if(document.getElementById('Update_Adres'))
 {
    document.getElementById('Update_Adres').remove();
 }

 if(document.getElementById('Update_osoba'))
 {
    document.getElementById('Update_osoba').remove();
 }
else
{
 const selectedUpdateCard = document.getElementById('OsobaCard_'+x)
 
 const newUpdateForm = document.createElement('form')
 newUpdateForm.id = 'Update_osoba'
 newUpdateForm.name = 'Update_osoba'
 newUpdateForm.action = 'javascript:void(0)'
 newUpdateForm.method = 'post'
 newUpdateForm.setAttribute('class', 'formScrollableOsoba')


 selectedUpdateCard.parentNode.insertBefore(newUpdateForm,  selectedUpdateCard.nextSibling);
 
    const card_empty= document.createElement('div')
    card_empty.setAttribute('class', 'data_boxWyszukajOsoby')
    const card_empty2= document.createElement('div')
    card_empty2.setAttribute('class', 'data_boxWyszukajOsoby')
    const card_Update_Imie = document.createElement('div')
    card_Update_Imie.setAttribute('class', 'data_boxWyszukajOsoby')
    const card_Update_Nazwisko= document.createElement('div')
    card_Update_Nazwisko.setAttribute('class', 'data_boxWyszukajOsoby')
    const card_Update_Nr_telefonu= document.createElement('div')
    card_Update_Nr_telefonu.setAttribute('class', 'data_boxWyszukajOsoby')
    const card_Update_Email= document.createElement('div')
    card_Update_Email.setAttribute('class', 'data_boxWyszukajOsoby')

    const card_Update_Btn= document.createElement('div')
    card_Update_Btn.setAttribute('class', 'data_boxWyszukajOsoby')

   
    //Create disabled autoIncrement field
        const inputId = document.createElement('input')
        inputId.type = 'text'
        inputId.placeholder = x
        inputId.name = 'Id'
        inputId.disabled = true
        inputId.id = 'OsobaUpdateInputId'

    newUpdateForm.appendChild(card_empty)
    card_empty.appendChild(inputId)

      //Create Nazwa field
      const input_Id_stanowiska = document.createElement('input')
      input_Id_stanowiska.type = 'text'
      input_Id_stanowiska.name = 'Id_stanowiska'
     // input_Id_kontrahenta.placeholder = 'Id'
      input_Id_stanowiska.id = 'OsobyUpdateInputId_stanowiska'
     // input_Id_kontrahenta.disabled = true
      
  
    newUpdateForm.appendChild(card_empty2)
    card_empty2.appendChild(input_Id_stanowiska)

    //Create NIP field
    const inputImie = document.createElement('input')
    inputImie.type = 'text'
    inputImie.name = 'Imie'
    inputImie.id = 'OsobaUpdateInputImie'

  newUpdateForm.appendChild(card_Update_Imie)
  card_Update_Imie.appendChild(inputImie)

   //Create NIP field
   const inputNazwisko = document.createElement('input')
   inputNazwisko.type = 'text'
   inputNazwisko.name = 'Nazwisko'
   inputNazwisko.id = 'OsobaUpdateInputNazwisko'

 newUpdateForm.appendChild(card_Update_Nazwisko)
 card_Update_Nazwisko.appendChild(inputNazwisko)

  //Create NIP field
  const inputNr_telefonu = document.createElement('input')
  inputNr_telefonu.type = 'text'
  inputNr_telefonu.name = 'Nr_telefonu'
  inputNr_telefonu.id = 'OsobyUpdateInputNr_telefonu'

newUpdateForm.appendChild(card_Update_Nr_telefonu)
card_Update_Nr_telefonu.appendChild(inputNr_telefonu)

  //Create NIP field
  const inputEmail = document.createElement('input')
  inputEmail.type = 'text'
  inputEmail.name = 'Email'
  inputEmail.id = 'OsobaUpdateInputEmail'

newUpdateForm.appendChild(card_Update_Email)
card_Update_Email.appendChild(inputEmail)

      // send btn
      const sendForm = document.createElement('button')
      sendForm.type = 'submit'
      sendForm.textContent = "Aktualizuj!"
      sendForm.setAttribute('class', 'buttonForm')
      sendForm.id = 'OsobaUpdateSendBtn'
   

    newUpdateForm.appendChild(card_Update_Btn)
    card_Update_Btn.appendChild(sendForm)
   
    
function CheckForm(data)
{
   if(data == "Pomyslnie zaktualizowano")
   {
    newUpdateForm.remove()
    setTimeout(GlobalSerach(), 500);
     alert(data)
   }  
   else
   {
     alert(data)
   }
}


    newUpdateForm.addEventListener( "submit", function( e6 ) {
        e6.preventDefault();
        var data = toJSONString( this );

        console.log(data)
        fetch('http://slimapp/api/osoba_kontaktowa/update/'+x, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        }).then(response => response.text())
        .then(data => CheckForm(data));

      //  newUpdateForm.remove()
      //  alert('Osoba kontaktowa zaktualizowana!');
       
      
       //   setTimeout(GlobalSerach(), 500);
        

    }, false);

 }
}


function UpdateStanowiskoWyszukaj(x)
{
 
 card_temp_for_adding.innerHTML = ""
 if(document.getElementById('Update_osoba'))
 {
document.getElementById('Update_osoba').remove();
 }

 if(document.getElementById('Update_adres'))
 {
document.getElementById('Update_adres').remove();
 }

 if(document.getElementById('Update_kontrahent'))
 {
document.getElementById('Update_kontrahent').remove();
 }

 if(document.getElementById('Update_stanowisko'))
 {
document.getElementById('Update_stanowisko').remove();
 }
else
{
 const selectedUpdateCard = document.getElementById('StanowiskoCard_'+x)
 
 const newUpdateForm = document.createElement('form')
 newUpdateForm.id = 'Update_stanowisko'
 newUpdateForm.name = 'Update_stanowisko'
 newUpdateForm.action = 'javascript:void(0)'
 newUpdateForm.method = 'post'
 newUpdateForm.setAttribute('class','Update_kontrahent_stanowisko')

 selectedUpdateCard.appendChild(newUpdateForm)

    const card_empty= document.createElement('div')
    card_empty.setAttribute('class', 'data_box')
    const card_Update_NazwaStanowiska= document.createElement('div')
    card_Update_NazwaStanowiska.setAttribute('class', 'data_box')
    const card_Update_Btn= document.createElement('div')
    card_Update_Btn.setAttribute('class', 'data_box')

    const emptyCard1 = document.createElement('div')
    emptyCard1.setAttribute('class', 'data_box_empty')
    const emptyCard2= document.createElement('div')
    emptyCard2.setAttribute('class', 'data_box_empty')

    //Create disabled autoIncrement field
        const inputId = document.createElement('input')
        inputId.type = 'text'
        inputId.placeholder = 'Auto Increment'
        inputId.name = 'Id'
        inputId.disabled = true
        inputId.id = 'StanowiskoUpdateInputId'

    newUpdateForm.appendChild(card_empty)
    card_empty.appendChild(inputId)

      //Create Nazwa field
      const inputNazwaStanowiska = document.createElement('input')
      inputNazwaStanowiska.type = 'text'
      inputNazwaStanowiska.name = 'Nazwa_stanowiska'
      inputNazwaStanowiska.id = 'StanowiskoUpdateInputNazwa_stanowiska'
  
    newUpdateForm.appendChild(card_Update_NazwaStanowiska)
    card_Update_NazwaStanowiska.appendChild(inputNazwaStanowiska)

      // send btn
      const sendForm = document.createElement('button')
      sendForm.type = 'submit'
      sendForm.textContent = "Aktualizuj!"
      sendForm.setAttribute('class', 'buttonForm')
      sendForm.id = 'StanowiskoUpdateSendBtn'
   

    newUpdateForm.appendChild(card_Update_Btn)
    card_Update_Btn.appendChild(sendForm)
    
    newUpdateForm.appendChild(emptyCard1)
    newUpdateForm.appendChild(emptyCard2)

    newUpdateForm.addEventListener( "submit", function( e7 ) {
        e7.preventDefault();
        var data = toJSONString( this );

        console.log(data)
        fetch('http://slimapp/api/stanowisko/update/'+x, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        }).then(response => response.text())
        .then(data => console.log(data));

        newUpdateForm.remove()
        alert('Kontrahent zaktualizowany!');     
      
          GlobalSerach();
        

    }, false);

 }
}

function ShowAddKontrahentElements()
{   
  //  card_temp_for_adding.innerHTML = ""

    if(document.getElementById('Update_kontrahent'))
 {
     console.log('fajnie')
     var elem = document.getElementById('Update_kontrahent')
     elem.parentNode.removeChild(elem);
 //document.getElementById('Update_kontrahent').remove
 }

 if(document.getElementById('kontrahent'))
 {
    document.getElementById('kontrahent').remove()
 }
 else
 {
    const addKontrahentCard = document.getElementById('addKontrahentCard')
    addKontrahentCard.setAttribute('class', 'card')

   
    const card_empty= document.createElement('div')
    card_empty.setAttribute('class', 'data_box')
    const card_Add_Nazwa= document.createElement('div')
    card_Add_Nazwa.setAttribute('class', 'data_box')
    const card_Add_NIP= document.createElement('div')
    card_Add_NIP.setAttribute('class', 'data_box')
    const card_Add_Typ= document.createElement('div')
    card_Add_Typ.setAttribute('class', 'data_box')
    const card_Add_Btn= document.createElement('div')
    card_Add_Btn.setAttribute('class', 'data_box')

    const form = document.createElement('form')
    form.id = 'kontrahent'
    form.name = 'kontrahent'
    form.action = 'javascript:void(0)'
    form.method = 'post'

    addKontrahentCard.appendChild(form)
    form.appendChild(card_empty)
//Create disabled autoIncrement field
    const inputId = document.createElement('input')
    inputId.type = 'text'
    inputId.placeholder = 'Auto Increment'
    inputId.name = 'AddKontrahentInputId'
    inputId.disabled = true

    form.appendChild(card_empty)
    card_empty.appendChild(inputId)
    //Create Nazwa field
    const inputNazwa = document.createElement('input')
    inputNazwa.type = 'text'
    inputNazwa.name = 'Nazwa'
    inputNazwa.id = 'AddKontrahentInputNazwa'

    form.appendChild(card_Add_Nazwa)
    //card_Add_Nazwa.appendChild(labelNazwa)
    card_Add_Nazwa.appendChild(inputNazwa)

    //Create NIP field
   // const labelNIP = document.createElement('label')
   // labelNIP.setAttribute('for', 'NIP')
    //labelNIP.textContent = 'NIP: '
    const inputNIP = document.createElement('input')
    inputNIP.type = 'text'
    inputNIP.name = 'NIP'
    inputNIP.id = 'AddKontrahentInputNIP'

    form.appendChild(card_Add_NIP)
    //card_Add_NIP.appendChild(labelNIP)
    card_Add_NIP.appendChild(inputNIP)

     //Create Typ_kontrahenta field
    // const labelTyp_kontrahenta = document.createElement('label')
   //  labelTyp_kontrahenta.setAttribute('for', 'Typ_kontrahenta')
   //  labelTyp_kontrahenta.textContent = 'Typ kontrahenta: '
     const selectTyp_kontrahenta = document.createElement('select')
     selectTyp_kontrahenta.value = 'none'
     selectTyp_kontrahenta.name = 'Typ_kontrahenta'
     selectTyp_kontrahenta.id = 'AddKontrahentInputTyp'
     const optionDostawca = document.createElement('option')
     optionDostawca.value = 'Dostawca'
     optionDostawca.textContent = 'Dostawca'
     const optionOdbiorca = document.createElement('option')
     optionOdbiorca.value = 'Odbiorca'
     optionOdbiorca.textContent = 'Odbiorca'
    
     selectTyp_kontrahenta.appendChild(optionDostawca)
     selectTyp_kontrahenta.appendChild(optionOdbiorca)


     form.appendChild(card_Add_Typ)
   //  card_Add_Typ.appendChild(labelTyp_kontrahenta)
     card_Add_Typ.appendChild(selectTyp_kontrahenta)
    
     // send btn
     const sendForm = document.createElement('button')
     sendForm.type = 'submit'
    // sendForm.value = 'Dodaj!'
     sendForm.textContent = "Dodaj!"
     sendForm.setAttribute('class', 'buttonForm')
    
    // sendForm.textContent = 'Dodaj!'

     form.appendChild(card_Add_Btn)
     card_Add_Btn.appendChild(sendForm)

    // const outputPre = document.createElement('pre')
  //   outputPre.id = 'output'
   //  addKontrahentCard.appendChild(outputPre)

    // nowyKontrahentBtn.textContent = 'Dodaj!'
   //  nowyKontrahentBtn.setAttribute('onclick', 'AddKontrahent()')

   function CheckForm(data)
   {
      if(data == "Pomyslnie dodano")
      {
        card_temp_for_adding.innerHTML = ""
        setTimeout("location.reload(true);",500)
        alert(data)
      }
      else
      {
        alert(data)
      }
   }

		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var data = toJSONString( this );
            //outputPre.innerHTML = json;
            //Adding Kontrahent
            console.log(data)
            fetch('http://slimapp/api/kontrahent/add', {
              method: 'POST', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: data,
            }).then(response => response.text())
             .then(data => CheckForm(data))
           // .then(setTimeout("location.reload(true);",500));

          //  card_temp_for_adding.innerHTML = ""
          //  alert('Nowy kontrahent dodany!');
           

		}, false);
    }
}
function ShowAddAdresElements(x)
{   
    card_temp_for_adding.innerHTML = ""

    if(document.getElementById('AddAdresCard'))
    {
        document.getElementById('AddAdresCard').remove()
    }
    else
    {
  

    if(document.getElementById('Update_kontrahent'))
    {
     console.log('fajnie')
     var elem = document.getElementById('Update_kontrahent')
     elem.parentNode.removeChild(elem);
    }

    const addAdresCard = document.createElement('div')
    addAdresCard.setAttribute('class', 'card')
    addAdresCard.id = 'AddAdresCard'

    const form = document.createElement('form')
    form.id = 'adres'
    form.name = 'adres'
    form.action = 'javascript:void(0)'
    form.method = 'post'

    //containerStrings.appendChild(addAdresCard)
    document.getElementById('containerForAllAdresy').prepend(addAdresCard)
    addAdresCard.appendChild(form)
    
   //Create disabled autoIncrement field
    const card_Id_adresu = document.createElement('div')
    card_Id_adresu.setAttribute('class', 'cardAdres')

    const box_Id_adresu = document.createElement('div')
    box_Id_adresu.setAttribute('class', 'data_box_no_border')

    const IdAdresu = document.createElement('p')
    IdAdresu.textContent = 'Id Adresu: '
    const inputIdAdresu = document.createElement('input')
    inputIdAdresu.type = 'text'
    inputIdAdresu.placeholder = 'Auto Increment'
    inputIdAdresu.name = 'Id'
    inputIdAdresu.disabled = true

    form.appendChild(card_Id_adresu)
    card_Id_adresu.appendChild(IdAdresu)
    card_Id_adresu.appendChild(box_Id_adresu)
    box_Id_adresu.appendChild(inputIdAdresu)


    //Create id kontrahenta field
    const card_Id_kontrahenta= document.createElement('div')
    card_Id_kontrahenta.setAttribute('class', 'cardAdres')

    const box_Id_kontrahenta = document.createElement('div')
    box_Id_kontrahenta.setAttribute('class', 'data_box_no_border')

    const IdKontrahenta = document.createElement('p')
    IdKontrahenta.textContent = 'Id Kontrahenta: '
    const inputIdKontrahenta = document.createElement('input')
    inputIdKontrahenta.type = 'text'
    inputIdKontrahenta.placeholder = x
    inputIdKontrahenta.value = x
    inputIdKontrahenta.name = 'Id_kontrahenta'
    inputIdKontrahenta.id = 'Id_kontrahenta'
    inputIdKontrahenta.disabled = true

    form.appendChild(card_Id_kontrahenta)
    card_Id_kontrahenta.appendChild(IdKontrahenta)
    card_Id_kontrahenta.appendChild(box_Id_kontrahenta)
    box_Id_kontrahenta.appendChild(inputIdKontrahenta)

    //Create Rodzaj field
    const card_Rodzaj= document.createElement('div')
    card_Rodzaj.setAttribute('class', 'cardAdres')

    const box_Rodzaj = document.createElement('div')
    box_Rodzaj.setAttribute('class', 'data_box_no_border')

    const Rodzaj = document.createElement('p')
    Rodzaj.textContent = 'Rodzaj: '
    const selectRodzaj = document.createElement('select')
    selectRodzaj.value = 'none'
    selectRodzaj.name = 'Rodzaj'
    const optionSiedziba = document.createElement('option')
    optionSiedziba.value = 'Siedziba_glowna'
    optionSiedziba.textContent = 'Siedziba Główna'
    const optionOddzial = document.createElement('option')
    optionOddzial.value = 'Oddzial'
    optionOddzial.textContent = 'Oddział'

    selectRodzaj.appendChild(optionSiedziba)
    selectRodzaj.appendChild(optionOddzial)

    form.appendChild(card_Rodzaj)
    card_Rodzaj.appendChild(Rodzaj)
    card_Rodzaj.appendChild(box_Rodzaj)
    box_Rodzaj.appendChild(selectRodzaj)

    //Create Ulica field
    const card_Ulica = document.createElement('div')
    card_Ulica.setAttribute('class', 'cardAdres')

    const box_Ulica = document.createElement('div')
    box_Ulica.setAttribute('class', 'data_box_no_border')

    const Ulica = document.createElement('p')
    Ulica.textContent = 'Ulica: '
    const inputUlica = document.createElement('input')
    inputUlica.type = 'text'
    inputUlica.name = 'Ulica'
    inputUlica.id = 'Ulica'

    form.appendChild(card_Ulica)
    card_Ulica.appendChild(Ulica)
    card_Ulica.appendChild(box_Ulica)
    box_Ulica.appendChild(inputUlica)

    //Create Miejscowosc field
    const card_Miejscowosc = document.createElement('div')
    card_Miejscowosc.setAttribute('class', 'cardAdres')

    const box_Miejscowosc = document.createElement('div')
    box_Miejscowosc.setAttribute('class', 'data_box_no_border')

    const Miejscowosc = document.createElement('p')
    Miejscowosc.textContent = 'Miejscowosc: '
    const inputMiejscowosc = document.createElement('input')
    inputMiejscowosc.type = 'text'
    inputMiejscowosc.name = 'Miejscowosc'
    inputMiejscowosc.id = 'Miejscowosc'

    form.appendChild(card_Miejscowosc)
    card_Miejscowosc.appendChild(Miejscowosc)
    card_Miejscowosc.appendChild(box_Miejscowosc)
    box_Miejscowosc.appendChild(inputMiejscowosc)

     //Create Nr_budynku field
     const card_Nr_budynku = document.createElement('div')
     card_Nr_budynku.setAttribute('class', 'cardAdres')
 
     const box_Nr_budynku= document.createElement('div')
     box_Nr_budynku.setAttribute('class', 'data_box_no_border')
 
     const Nr_budynku = document.createElement('p')
     Nr_budynku.textContent = 'Nr Budynku: '
     const inputNr_budynku = document.createElement('input')
     inputNr_budynku.type = 'text'
     inputNr_budynku.name = 'Nr_budynku'
     inputNr_budynku.id = 'Nr_budynku'
 
     form.appendChild(card_Nr_budynku)
     card_Nr_budynku.appendChild(Nr_budynku)
     card_Nr_budynku.appendChild(box_Nr_budynku)
     box_Nr_budynku.appendChild(inputNr_budynku)

      //Create Nr_lokalu field
      const card_Nr_lokalu = document.createElement('div')
      card_Nr_lokalu.setAttribute('class', 'cardAdres')
  
      const box_Nr_lokalu= document.createElement('div')
      box_Nr_lokalu.setAttribute('class', 'data_box_no_border')
  
      const Nr_lokalu = document.createElement('p')
      Nr_lokalu.textContent = 'Nr Lokalu: '
      const inputNr_lokalu = document.createElement('input')
      inputNr_lokalu.type = 'text'
      inputNr_lokalu.name = 'Nr_lokalu'
      inputNr_lokalu.id = 'Nr_lokalu'
  
      form.appendChild(card_Nr_lokalu)
      card_Nr_lokalu.appendChild(Nr_lokalu)
      card_Nr_lokalu.appendChild(box_Nr_lokalu)
      box_Nr_lokalu.appendChild(inputNr_lokalu)

       //Create Kod_pocztowy field
       const card_Kod_pocztowy = document.createElement('div')
       card_Kod_pocztowy.setAttribute('class', 'cardAdres')
   
       const box_Kod_pocztowy= document.createElement('div')
       box_Kod_pocztowy.setAttribute('class', 'data_box_no_border')
   
       const Kod_pocztowy = document.createElement('p')
       Kod_pocztowy.textContent = 'Kod Pocztowy: '
       const inputKod_pocztowy = document.createElement('input')
       inputKod_pocztowy.type = 'text'
       inputKod_pocztowy.name = 'Kod_pocztowy'
       inputKod_pocztowy.id = 'Kod_pocztowy'
   
       form.appendChild(card_Kod_pocztowy)
       card_Kod_pocztowy.appendChild(Kod_pocztowy)
       card_Kod_pocztowy.appendChild(box_Kod_pocztowy)
       box_Kod_pocztowy.appendChild(inputKod_pocztowy)

        //Create Gmina field
        const card_Gmina = document.createElement('div')
        card_Gmina.setAttribute('class', 'cardAdres')
    
        const box_Gmina= document.createElement('div')
        box_Gmina.setAttribute('class', 'data_box_no_border')
    
        const Gmina = document.createElement('p')
        Gmina.textContent = 'Gmina: '
        const inputGmina = document.createElement('input')
        inputGmina.type = 'text'
        inputGmina.name = 'Gmina'
        inputGmina.id = 'Gmina'
    
        form.appendChild(card_Gmina)
        card_Gmina.appendChild(Gmina)
        card_Gmina.appendChild(box_Gmina)
        box_Gmina.appendChild(inputGmina)

         //Create Powiat field
         const card_Powiat = document.createElement('div')
         card_Powiat.setAttribute('class', 'cardAdres')
     
         const box_Powiat= document.createElement('div')
         box_Powiat.setAttribute('class', 'data_box_no_border')
     
         const Powiat = document.createElement('p')
         Powiat.textContent = 'Powiat: '
         const inputPowiat = document.createElement('input')
         inputPowiat.type = 'text'
         inputPowiat.name = 'Powiat'
         inputPowiat.id = 'Powiat'
     
         form.appendChild(card_Powiat)
         card_Powiat.appendChild(Powiat)
         card_Powiat.appendChild(box_Powiat)
         box_Powiat.appendChild(inputPowiat)

           //Create Wojewodztwo field
           const card_Wojewodztwo = document.createElement('div')
           card_Wojewodztwo.setAttribute('class', 'cardAdres')
       
           const box_Wojewodztwo= document.createElement('div')
           box_Wojewodztwo.setAttribute('class', 'data_box_no_border')
       
           const Wojewodztwo = document.createElement('p')
           Wojewodztwo.textContent = 'Wojewodztwo: '
           const inputWojewodztwo = document.createElement('input')
           inputWojewodztwo.type = 'text'
           inputWojewodztwo.name = 'Wojewodztwo'
           inputWojewodztwo.id = 'Wojewodztwo'
       
           form.appendChild(card_Wojewodztwo)
           card_Wojewodztwo.appendChild(Wojewodztwo)
           card_Wojewodztwo.appendChild(box_Wojewodztwo)
           box_Wojewodztwo.appendChild(inputWojewodztwo)

          //Create Kraj field
           const card_Kraj = document.createElement('div')
           card_Kraj.setAttribute('class', 'cardAdres')
       
           const box_Kraj= document.createElement('div')
           box_Kraj.setAttribute('class', 'data_box_no_border')
       
           const Kraj = document.createElement('p')
           Kraj.textContent = 'Kraj: '
           const inputKraj = document.createElement('input')
           inputKraj.type = 'text'
           inputKraj.name = 'Kraj'
           inputKraj.id = 'Kraj'
       
           form.appendChild(card_Kraj)
           card_Kraj.appendChild(Kraj)
           card_Kraj.appendChild(box_Kraj)
           box_Kraj.appendChild(inputKraj)

           
          //Create Nr_telefonu field
          const card_Nr_telefonu = document.createElement('div')
          card_Nr_telefonu.setAttribute('class', 'cardAdres')
      
          const box_Nr_telefonu = document.createElement('div')
          box_Nr_telefonu.setAttribute('class', 'data_box_no_border')
      
          const Nr_telefonu = document.createElement('p')
          Nr_telefonu.textContent = 'Nr Telefonu: '
          const inputNr_telefonu = document.createElement('input')
          inputNr_telefonu.type = 'text'
          inputNr_telefonu.name = 'Nr_telefonu'
          inputNr_telefonu.id = 'Nr_telefonu'
      
          form.appendChild(card_Nr_telefonu)
          card_Nr_telefonu.appendChild(Nr_telefonu)
          card_Nr_telefonu.appendChild(box_Nr_telefonu)
          box_Nr_telefonu.appendChild(inputNr_telefonu)

         //Create Email field
          const card_Email = document.createElement('div')
          card_Email.setAttribute('class', 'cardAdres')
      
          const box_Email = document.createElement('div')
          box_Email.setAttribute('class', 'data_box_no_border')
      
          const Email = document.createElement('p')
          Email.textContent = 'Email: '
          const inputEmail = document.createElement('input')
          inputEmail.type = 'text'
          inputEmail.name = 'Email'
          inputEmail.id = 'Email'
      
          form.appendChild(card_Email)
          card_Email.appendChild(Email)
          card_Email.appendChild(box_Email)
          box_Email.appendChild(inputEmail)

          //Send btn
          const sendForm = document.createElement('button')
          sendForm.type = 'submit'
          sendForm.textContent = "Dodaj!"
          sendForm.setAttribute('class', 'buttonForm2')

          form.appendChild(sendForm)

          function CheckForm(data)
          {
             if(data == "Pomyslnie dodano")
             {
              card_temp_for_adding.innerHTML = ""
              container.innerHTML = ""
              if(document.getElementById('AddAdresCard'))
                 document.getElementById('AddAdresCard').remove()

               setTimeout(ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent'), 500)
               alert(data)
             }  
             else
             {
               alert(data)
             }
          }

          // Form to Json
          form.addEventListener( "submit", function( e3) {
			e3.preventDefault();
			var data = toJSONString( this );
            console.log(data)
            
            fetch('http://slimapp/api/adres/add', {
              method: 'POST', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: data,
            }).then(response => response.text())
            .then(data => CheckForm(data));

           // card_temp_for_adding.innerHTML = ""
         //  alert('Nowy adres dodany!');
           // setTimeout("location.reload(true);");
          /* container.innerHTML = ""
           if(document.getElementById('AddAdresCard'))
              document.getElementById('AddAdresCard').remove()

           setTimeout(ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent'), 500)*/

		}, false);
}
}

var powiazaneOsoby = [];
function ShowOsobyKontaktowe(x)
{
  //Przechowanie w tablicy powiązanych osoób z aktualnym adresem
 // ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent')
 powiazaneOsoby = [];
 //Ukrycie Update kontrahenta form
 if(document.getElementById('Update_kontrahent'))
 {
    console.log('dziala')
document.getElementById('Update_kontrahent').remove();
 }

//Ukrycie update adres form
 if(document.getElementById('Input_Id_adresu'))
 {
 document.getElementById('Input_Id_adresu').remove()
 document.getElementById('Input_Id_kontrahenta').remove()
 document.getElementById('Input_Rodzaj').remove()
 document.getElementById('Input_Ulica').remove()
 document.getElementById('Input_Miejscowosc').remove()
 document.getElementById('Input_Nr_budynku').remove()
 document.getElementById('Input_Nr_lokalu').remove()
 document.getElementById('Input_Kod_pocztowy').remove()
 document.getElementById('Input_Gmina').remove()
 document.getElementById('Input_Powiat').remove()
 document.getElementById('Input_Wojewodztwo').remove()
 document.getElementById('Input_Kraj').remove()
 document.getElementById('Input_Nr_telefonu').remove()
 document.getElementById('Input_Email').remove()
 document.getElementById('Submit_Btn').remove()
 }


var i = 0;
fetch('http://slimapp/api/adres-osoba_kontaktowa/adres/'+x)
.then(response => response.json())
.then(data => data.forEach((osoba) => {

    powiazaneOsoby[i] = osoba.Id_osoby_kontaktowej
    i++;

}))
.then(console.log(powiazaneOsoby));

  if(document.getElementById('containerForOsoby'))
  {
    document.getElementById('containerForOsoby').remove();
  }
  else
  {
  const SelectedAdresCard = document.getElementById('adres_'+x)

  const containerForOsoby = document.createElement('div')
  containerForOsoby.setAttribute('class', 'container')
  containerForOsoby.id = 'containerForOsoby'

  SelectedAdresCard.appendChild(containerForOsoby)
  var Id_osoby = 0;
 
  //Getting relation data from 'adres-osoba_kontaktowa' table
  fetch('http://slimapp/api/adres-osoba_kontaktowa/adres/'+x)
  .then(response => response.json())
  .then(data => data.forEach((relacja) => {

   Id_osoby = relacja.Id_osoby_kontaktowej


 //Getting all Osoby for selected adres
fetch('http://slimapp/api/osoba_kontaktowa/'+Id_osoby)
.then(response => response.json())
.then(data => data.forEach((osoba) => {
  
   //Tworzenie nowych nazw parametrow do adresow
   const containerStringsOsoba = document.createElement('div')
   containerStringsOsoba.setAttribute('class', 'containerOsoba') 


 
const card_Osoba_Data = document.createElement('div')
card_Osoba_Data.setAttribute('class', 'cardNoBorderOsoba')
card_Osoba_Data.id = 'osoba_'+osoba.Id_osoby_kontaktowej



//container.appendChild(containerStringsAdres)
containerForOsoby.appendChild(containerStringsOsoba)
//document.getElementById('KontrahentCard').appendChild(containerStringsAdres)
containerStringsOsoba.appendChild(card_Osoba_Data)
//card_Adres_Data.appendChild(naglowekAdresy2)

const form = document.createElement('form')
form.setAttribute('class', 'osoba')
form.id = 'form_osoba_'+osoba.Id_osoby_kontaktowej
form.name = 'osoba_'+osoba.Id_osoby_kontaktowej
form.action = 'javascript:void(0)'
form.method = 'post'
card_Osoba_Data.appendChild(form)

const card_Id_osoby = document.createElement('div')
card_Id_osoby.id = 'Id_osoby_kontaktowej_'+osoba.Id_osoby_kontaktowej
card_Id_osoby.setAttribute('class', 'cardOsoba')
const Id_osoby_string = document.createElement('p')
Id_osoby_string.textContent = `Id Osoby Kontaktowej: ${osoba.Id_osoby_kontaktowej}`

form.appendChild(card_Id_osoby)
//card_Osoba_Data.appendChild(card_Id_osoby)
card_Id_osoby.appendChild(Id_osoby_string)

//get name stanowiska for id
var stanowiskoName = ''


fetch('http://slimapp/api/stanowisko/'+osoba.Id_stanowiska)
.then(response => response.json())
.then(data => data.forEach((stanowisko) => {
    stanowiskoName = stanowisko.Nazwa_stanowiska
    console.log(stanowiskoName)

    
const card_Id_stanowiska = document.createElement('div')
card_Id_stanowiska.id = 'Id_stanowiska_'+osoba.Id_osoby_kontaktowej
card_Id_stanowiska.setAttribute('class', 'cardOsoba')
const Id_stanowiska_string = document.createElement('p')
Id_stanowiska_string.textContent = `Id Stanowiska: ${osoba.Id_stanowiska} (${stanowiskoName})` 

form.appendChild(card_Id_stanowiska)
//card_Osoba_Data.appendChild(card_Id_stanowiska)
card_Id_stanowiska.appendChild(Id_stanowiska_string)

}));

//


const card_Imie = document.createElement('div')
card_Imie.id = 'Imie_'+osoba.Id_osoby_kontaktowej
card_Imie.setAttribute('class', 'cardOsoba')
const Imie_string = document.createElement('p')
Imie_string.textContent = `Imie: ${osoba.Imie}` 

form.appendChild(card_Imie)
//card_Osoba_Data.appendChild(card_Imie)
card_Imie.appendChild(Imie_string)

const card_Nazwisko = document.createElement('div')
card_Nazwisko.id = 'Nazwisko_'+osoba.Id_osoby_kontaktowej
card_Nazwisko.setAttribute('class', 'cardOsoba')
const Nazwisko_string = document.createElement('p')
Nazwisko_string.textContent = `Nazwisko: ${osoba.Nazwisko}` 

form.appendChild(card_Nazwisko)
//card_Osoba_Data.appendChild(card_Nazwisko)
card_Nazwisko.appendChild(Nazwisko_string)

const card_Nr_telefonu = document.createElement('div')
card_Nr_telefonu.id = 'Nr_telefonu_'+osoba.Id_osoby_kontaktowej
card_Nr_telefonu.setAttribute('class', 'cardOsoba')
const Nr_telefonu_string = document.createElement('p')
Nr_telefonu_string.textContent = `Nr Telefonu: ${osoba.Nr_telefonu}` 

form.appendChild(card_Nr_telefonu)
//card_Osoba_Data.appendChild(card_Nr_telefonu)
card_Nr_telefonu.appendChild(Nr_telefonu_string)

const card_Email = document.createElement('div')
card_Email.id = 'Email_'+osoba.Id_osoby_kontaktowej
card_Email.setAttribute('class', 'cardOsoba')
const Email_string = document.createElement('p')
Email_string.textContent = `Email: ${osoba.Email}`

form.appendChild(card_Email)
//card_Osoba_Data.appendChild(card_Email)
card_Email.appendChild(Email_string)

//Przyciski akcji na osobie
const card_Buttons = document.createElement('div')
card_Buttons.setAttribute('class', 'cardAdresButtons')
card_Buttons.id = 'OsobaPrzyciski_'+osoba.Id_osoby_kontaktowej

//const box_osoba = document.createElement('div')
//box_osoba.setAttribute('class', 'data_boxAdresBtns')

const box_remove = document.createElement('div')
box_remove.setAttribute('class', 'data_boxOsobaBtns')

const box_remove_relation = document.createElement('div')
box_remove_relation.setAttribute('class', 'data_boxOsobaBtns')

const box_update= document.createElement('div')
box_update.setAttribute('class', 'data_boxOsobaBtns')

   /*const osoby_btn = document.createElement('a')
   osoby_btn.href = `javascript:void(0)` 
   osoby_btn.setAttribute('onclick', `ShowOsobyKontaktowe(${adres.Id_adresu})`)
   osoby_btn.setAttribute('class', 'buttonFullHeight')
   osoby_btn.textContent = `Pokaż osoby kontaktowe`
   */
   const remove_relation_btn = document.createElement('a')
   remove_relation_btn.href = `javascript:void(0)` 
   remove_relation_btn.setAttribute('onclick', `DeleteRelationOsoba(${x},${osoba.Id_osoby_kontaktowej})`)
   remove_relation_btn.setAttribute('class', 'buttonFullHeight')
   remove_relation_btn.textContent = `Usuń Powiązanie` 
   
   const remove_btn = document.createElement('a')
   remove_btn.href = `javascript:void(0)` 
   remove_btn.setAttribute('onclick', `DeleteOsoba(${osoba.Id_osoby_kontaktowej})`)
   remove_btn.setAttribute('class', 'buttonFullHeight')
   remove_btn.textContent = `Usuń Osobę` 

   const update_btn = document.createElement('a')
   update_btn.href = `javascript:void(0)` 
   update_btn.setAttribute('onclick', `UpdateOsoba(${osoba.Id_osoby_kontaktowej})`)
   update_btn.setAttribute('class', 'buttonFullHeight')
   update_btn.textContent = `Edytuj` 

   card_Osoba_Data.appendChild(card_Buttons)
  // card_Buttons.appendChild(box_osoba)
 
   card_Buttons.appendChild(box_update)
   card_Buttons.appendChild(box_remove_relation)
   card_Buttons.appendChild(box_remove)
 //  box_osoba.appendChild(osoby_btn)
   box_remove_relation.appendChild(remove_relation_btn)
   box_remove.appendChild(remove_btn)
   box_update.appendChild(update_btn)

}));


  }));

  //Dodaj nowo osobe
  const containerStringsOsoba = document.createElement('div')
  containerStringsOsoba.setAttribute('class', 'containerOsoba') 

const card_Osoba_Data = document.createElement('div')
card_Osoba_Data.setAttribute('class', 'cardNoBorderOsoba')
card_Osoba_Data.id = 'Nowa_osoba_'+x

//container.appendChild(containerStringsAdres)
containerForOsoby.appendChild(containerStringsOsoba)
//document.getElementById('KontrahentCard').appendChild(containerStringsAdres)
containerStringsOsoba.appendChild(card_Osoba_Data)
//card_Adres_Data.appendChild(naglowekAdresy2)

//Przyciski akcji na osobie
const card_Buttons = document.createElement('div')
card_Buttons.setAttribute('class', 'cardAdresButtons')

//const box_osoba = document.createElement('div')
//box_osoba.setAttribute('class', 'data_boxAdresBtns')

const box_add = document.createElement('div')
box_add.setAttribute('class', 'data_boxOsobaBtns')

   const add_btn = document.createElement('a')
   add_btn.href = `javascript:void(0)` 
   add_btn.setAttribute('onclick', `AddOsobaKontaktowa(${x}, ${Id_osoby})`)
   add_btn.setAttribute('class', 'buttonFullHeight')
   add_btn.textContent = `Dodaj Nową Osobę Kontaktową`

   const box_add_existing = document.createElement('div')
   box_add_existing.setAttribute('class', 'data_boxOsobaBtns')
   
    const add_existing_btn = document.createElement('a')
    add_existing_btn.href = `javascript:void(0)` 
    add_existing_btn.setAttribute('onclick', `AddExistingOsobaKontaktowa(${x})`)
    add_existing_btn.setAttribute('class', 'buttonFullHeight')
    add_existing_btn.textContent = `Dodaj Istniejącą Osobę Kontaktową`

    const box_stanowiska = document.createElement('div')
    box_stanowiska.setAttribute('class', 'data_boxOsobaBtns')
    
     const stanowiska_btn = document.createElement('a')
     stanowiska_btn.href = `javascript:void(0)` 
     stanowiska_btn.setAttribute('onclick', `ShowStanowiska(${x})`)
     stanowiska_btn.setAttribute('class', 'buttonFullHeight')
     stanowiska_btn.textContent = `Edytuj Listę Stanowisk`


   card_Osoba_Data.appendChild(card_Buttons)
   card_Buttons.appendChild(box_add)
   card_Buttons.appendChild(box_add_existing)
   card_Buttons.appendChild(box_stanowiska)
  
   box_add.appendChild(add_btn)
   box_add_existing.appendChild(add_existing_btn)
   box_stanowiska.appendChild(stanowiska_btn)


  }
//alert("Przycisk w robocie: "+x)
}

function DeleteOsoba(Id_osoba_kontaktowa)
{
  fetch('http://slimapp/api/osoba_kontaktowa/delete/'+Id_osoba_kontaktowa, {
    method: 'DELETE', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.text())
  .then(data => console.log(data));

  alert('Osoba kontaktowa usunięta!');
 // setTimeout("location.reload(true);");
  container.innerHTML = ""
  ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent')

}

function DeleteRelationOsoba(Id_adresu, Id_osoba_kontaktowa)
{

  fetch('http://slimapp/api/adres-osoba_kontaktowa/delete/'+Id_adresu+'/'+Id_osoba_kontaktowa, {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.text())
    .then(data => console.log(data));

    alert('Powiązanie usunięto!');
   // setTimeout("location.reload(true);");
    container.innerHTML = ""
    ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent')
}

function UpdateOsoba(Id_osoby)
{

  if(document.getElementById('UpdateOsobaSendForm'))
  {
     document.getElementById('box_Id_osoby').remove();
     document.getElementById('box_Id_stanowiska').remove();
     document.getElementById('box_Imie').remove();
     document.getElementById('box_Nazwisko').remove();
     document.getElementById('box_Nr_telefonu').remove();
     document.getElementById('box_Email').remove();
     document.getElementById('UpdateOsobaSendForm').remove();
  }
  else
  {

  const cardIdOsoby = document.getElementById('Id_osoby_kontaktowej_'+Id_osoby)
  const cardIdStanowiska = document.getElementById('Id_stanowiska_'+Id_osoby)
  const cardImie = document.getElementById('Imie_'+Id_osoby)
  const cardNazwisko = document.getElementById('Nazwisko_'+Id_osoby)
  const cardNr_telefonu = document.getElementById('Nr_telefonu_'+Id_osoby)
  const cardEmail = document.getElementById('Email_'+Id_osoby)

  const box_Id_osoby = document.createElement('div')
  box_Id_osoby.setAttribute('class', 'data_box_no_border')
  box_Id_osoby.id = 'box_Id_osoby'
  const box_Id_stanowiska = document.createElement('div')
  box_Id_stanowiska.setAttribute('class', 'data_box_no_border')
  box_Id_stanowiska.id = 'box_Id_stanowiska'
  const box_Imie = document.createElement('div')
  box_Imie.setAttribute('class', 'data_box_no_border')
  box_Imie.id = 'box_Imie'
  const box_Nazwisko = document.createElement('div')
  box_Nazwisko.setAttribute('class', 'data_box_no_border')
  box_Nazwisko.id = 'box_Nazwisko'
  const box_Nr_telefonu = document.createElement('div')
  box_Nr_telefonu.setAttribute('class', 'data_box_no_border')
  box_Nr_telefonu.id = 'box_Nr_telefonu'
  const box_Email = document.createElement('div')
  box_Email.setAttribute('class', 'data_box_no_border')
  box_Email.id = 'box_Email'

  const inputIdOsoby = document.createElement('input')
inputIdOsoby.type = 'text'
inputIdOsoby.placeholder = 'Auto Increment'
inputIdOsoby.name = 'IdOsobaKontaktowa'
inputIdOsoby.disabled = true

cardIdOsoby.appendChild(box_Id_osoby)
box_Id_osoby.appendChild(inputIdOsoby)

const inputIdstanowiska = document.createElement('select')
inputIdstanowiska.id = 'selectIdStanowiska'
inputIdstanowiska.name = 'Id_stanowiska'


fetch('http://slimapp/api/stanowisko')
.then(response => response.json())
.then(data => data.forEach((stanowisko) => {

   const stanowiskoOption = document.createElement('option')
   stanowiskoOption.value = stanowisko.Id_stanowiska
   stanowiskoOption.textContent = stanowisko.Id_stanowiska+' '+ '('+stanowisko.Nazwa_stanowiska+')'

   inputIdstanowiska.appendChild(stanowiskoOption)
}));


cardIdStanowiska.appendChild(box_Id_stanowiska)
box_Id_stanowiska.appendChild(inputIdstanowiska)

const inputimie = document.createElement('input')
inputimie.type = 'text'
inputimie.name = 'Imie'

cardImie.appendChild(box_Imie)
box_Imie.appendChild(inputimie)

const inputnazwisko = document.createElement('input')
inputnazwisko.type = 'text'
inputnazwisko.name = 'Nazwisko'

cardNazwisko.appendChild(box_Nazwisko)
box_Nazwisko.appendChild(inputnazwisko)

const inputnr_telefonu = document.createElement('input')
inputnr_telefonu.type = 'text'
inputnr_telefonu.name = 'Nr_telefonu'

cardNr_telefonu.appendChild(box_Nr_telefonu)
box_Nr_telefonu.appendChild(inputnr_telefonu)

const inputemail = document.createElement('input')
inputemail.type = 'text'
inputemail.name = 'Email'

cardEmail.appendChild(box_Email)
box_Email.appendChild(inputemail)


//Send btn
const sendForm = document.createElement('button')
sendForm.type = 'submit'
sendForm.id = 'UpdateOsobaSendForm'
sendForm.textContent = "Aktualizuj!"
sendForm.setAttribute('class', 'buttonForm3')

form = document.getElementById('form_osoba_'+Id_osoby)

//form.insertBefore(sendForm,document.getElementById('OsobaPrzyciski_'+Id_osoby))

form.appendChild(sendForm)


    
function CheckForm(data)
{
   if(data == "Pomyslnie zaktualizowano")
   {
    container.innerHTML = ""
    setTimeout(ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent'), 500)
     alert(data)
   }  
   else
   {
     alert(data)
   }
}


// Form to Json
form.addEventListener( "submit", function( e10) {
e10.preventDefault();
var data = toJSONString( this );
  console.log(data)
  
  fetch('http://slimapp/api/osoba_kontaktowa/update/'+Id_osoby, {
    method: 'PUT', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  }).then(response => response.text())
  .then(data => CheckForm(data))

 //alert('Osoba kontaktowa zaktualizowana!');
 // setTimeout("location.reload(true);");
 //container.innerHTML = ""
// setTimeout(ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent'), 500)


}, false);

  }
}

function ShowStanowiska(id_adresu)
{

  const card_Osoba_Data = document.getElementById('Nowa_osoba_'+id_adresu)
     
  card_Osoba_Data.innerHTML = ""

  const form = document.createElement('form')
  form.setAttribute('class', 'osoba')
  form.id = 'stanowiska'
  form.name = 'stanowiska'
  form.action = 'javascript:void(0)'
  form.method = 'post'
  card_Osoba_Data.appendChild(form)

  
  const card_Parent= document.createElement('div')
  card_Parent.setAttribute('class', 'cardOsobaStrings')
  card_Parent.id = "cardOsobaStrings"

  const box_Id_stanowiska = document.createElement('div')
  box_Id_stanowiska.setAttribute('class', 'data_box_no_borderOsobaStrings')

  const box_nazwa_stanowiska = document.createElement('div')
  box_nazwa_stanowiska.setAttribute('class', 'data_box_no_borderOsobaStrings')

  const box_empty = document.createElement('div')
  box_empty.setAttribute('class', 'data_box_no_borderOsobaStrings')


  const Id_stanowiska= document.createElement('p')
  Id_stanowiska.textContent = `Id`
  const Nazwa_stanowiska = document.createElement('p')
  Nazwa_stanowiska.textContent = `Stanowisko`

  form.appendChild(card_Parent)
  card_Parent.appendChild(box_Id_stanowiska)
  card_Parent.appendChild(box_nazwa_stanowiska)
  card_Parent.appendChild(box_empty)
  box_Id_stanowiska.appendChild(Id_stanowiska)
  box_nazwa_stanowiska.appendChild(Nazwa_stanowiska)
  
fetch('http://slimapp/api/stanowisko')
.then(response => response.json())
.then(data => data.forEach((stanowisko) => {

  const card_Parent= document.createElement('div')
  card_Parent.setAttribute('class', 'cardOsoba')
  card_Parent.id = 'cardStanowisko_'+stanowisko.Id_stanowiska

  const box_Id_stanowiska = document.createElement('div')
  box_Id_stanowiska.setAttribute('class', 'data_box_no_borderOsoba')

  const box_nazwa_stanowiska = document.createElement('div')
  box_nazwa_stanowiska.setAttribute('class', 'data_box_no_borderOsoba')

  const box_empty = document.createElement('div')
  box_empty.setAttribute('class', 'data_box_no_borderOsoba')

  const Id_stanowiska= document.createElement('p')
  Id_stanowiska.textContent = stanowisko.Id_stanowiska
  const Nazwa_stanowiska = document.createElement('p')
  Nazwa_stanowiska.textContent = stanowisko.Nazwa_stanowiska
  
  form.appendChild(card_Parent)
  card_Parent.appendChild(box_Id_stanowiska)
  card_Parent.appendChild(box_nazwa_stanowiska)
  card_Parent.appendChild(box_empty)
  box_Id_stanowiska.appendChild(Id_stanowiska)
  box_nazwa_stanowiska.appendChild(Nazwa_stanowiska)

  const box_update = document.createElement('div')
  box_update.setAttribute('class', 'data_boxOsobaBtns')

const update_btn = document.createElement('a')
update_btn.href = `javascript:void(0)` 
update_btn.setAttribute('onclick', `UpdateStanowisko(${stanowisko.Id_stanowiska}, ${id_adresu})`)
update_btn.setAttribute('class', 'buttonSmall')
update_btn.textContent = `Edytuj`

const remove_btn = document.createElement('a')
remove_btn.href = `javascript:void(0)` 
remove_btn.setAttribute('onclick', `DeleteStanowisko(${stanowisko.Id_stanowiska})`)
remove_btn.setAttribute('class', 'buttonSmall')
remove_btn.textContent = `Usuń`

box_empty.appendChild(update_btn)
box_empty.appendChild(remove_btn)


}));
  
const card_Buttons = document.createElement('div')
card_Buttons.setAttribute('class', 'cardAdresButtons')

const box_return = document.createElement('div')
box_return.setAttribute('class', 'data_boxOsobaBtns')

const return_btn = document.createElement('a')
return_btn.href = `javascript:void(0)` 
return_btn.setAttribute('onclick', `AddOsobaReturn(${id_adresu})`)
return_btn.setAttribute('class', 'buttonFullHeight')
return_btn.textContent = `Wróć`

const box_add = document.createElement('div')
box_add.setAttribute('class', 'data_boxOsobaBtns')

const add_btn = document.createElement('a')
add_btn.href = `javascript:void(0)` 
add_btn.setAttribute('onclick', `AddStanowisko()`)
add_btn.setAttribute('class', 'buttonFullHeight')
add_btn.textContent = `Dodaj Stanowisko`

card_Osoba_Data.appendChild(card_Buttons)
card_Buttons.appendChild(box_add)
box_add.appendChild(add_btn)

card_Buttons.appendChild(box_return)
box_return.appendChild(return_btn)

}

function AddStanowisko()
{
  
  if(document.getElementById('inputsUpdateStanowisko'))
  {
   document.getElementById('inputsUpdateStanowisko').remove();
  }

 if(document.getElementById('AddStanowisko'))
 {
  document.getElementById('AddStanowisko').remove();
 }
  else
  {

  const form = document.getElementById('stanowiska')


  const card_inputs = document.createElement('div')
  card_inputs.id = 'AddStanowisko'
  card_inputs.setAttribute('class', 'cardOsoba')

  const cardOsobaStrings = document.getElementById('cardOsobaStrings')

  cardOsobaStrings.parentNode.insertBefore(card_inputs, cardOsobaStrings.nextSibling);
  //form.appendChild(card_inputs)

  const box_Id_stanowiska = document.createElement('div')
  box_Id_stanowiska.setAttribute('class', 'data_box_no_borderOsoba')

  const box_Nazwa_stanowiska = document.createElement('div')
  box_Nazwa_stanowiska.setAttribute('class', 'data_box_no_borderOsoba')

  const box_sendbtn = document.createElement('div')
  box_sendbtn.setAttribute('class', 'data_box_no_borderOsoba')
  
  const inputId_stanowiska = document.createElement('input')
  inputId_stanowiska.type = 'text'
  inputId_stanowiska.placeholder = 'Auto Increment'
  inputId_stanowiska.name = 'IdStanowikska'
  inputId_stanowiska.disabled = true

  const inputNazwa_stanowiska = document.createElement('input')
  inputNazwa_stanowiska.type = 'text'
  inputNazwa_stanowiska.name = 'Nazwa_stanowiska'

  //send btn
  const sendForm = document.createElement('button')
  sendForm.type = 'submit'
  sendForm.id = 'UpdateStanowiskoForm'
  sendForm.textContent = "Dodaj!"
  sendForm.setAttribute('class', 'buttonForm')

  card_inputs.appendChild(box_Id_stanowiska)
  card_inputs.appendChild(box_Nazwa_stanowiska)
  card_inputs.appendChild(box_sendbtn)
  box_Id_stanowiska.appendChild(inputId_stanowiska)
  box_Nazwa_stanowiska.appendChild(inputNazwa_stanowiska)
  box_sendbtn.appendChild(sendForm)

  function CheckForm(data)
{
   if(data == "Pomyslnie dodano")
   {
    container.innerHTML = ""
     ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent')
     alert(data)
   }  
   else
   {
     alert(data)
   }
}


  form.addEventListener( "submit", function( e12) {
    e12.preventDefault();
    var data = toJSONString( this );
      console.log(data)
      
      fetch('http://slimapp/api/stanowisko/add', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }).then(response => response.text())
      .then(data => CheckForm(data))
    
     //alert('Stanowisko dodane!');
     // setTimeout("location.reload(true);");
     //container.innerHTML = ""
    // ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent')
     //.then(ShowOsobyKontaktowe(Id_adresu))
 
    
    }, false);

  //alert('Update stanowiska w robocie'+ Id_stanowiska)
 }
  
  // alert('Dodawanie stanowiska w robocie')
}

function UpdateStanowisko(Id_stanowiska, Id_adresu)
{

  if(document.getElementById('AddStanowisko'))
  {
   document.getElementById('AddStanowisko').remove();
  }

 if(document.getElementById('inputsUpdateStanowisko'))
 {
  document.getElementById('inputsUpdateStanowisko').remove();
 }
  else
  {
  const card_Stanowisko = document.getElementById('cardStanowisko_'+Id_stanowiska)


  const card_inputs = document.createElement('div')
  card_inputs.id = 'inputsUpdateStanowisko'
  card_inputs.setAttribute('class', 'cardOsoba')

  card_Stanowisko.parentNode.insertBefore(card_inputs, card_Stanowisko.nextSibling);

  const box_Id_stanowiska = document.createElement('div')
  box_Id_stanowiska.setAttribute('class', 'data_box_no_borderOsoba')

  const box_Nazwa_stanowiska = document.createElement('div')
  box_Nazwa_stanowiska.setAttribute('class', 'data_box_no_borderOsoba')

  const box_sendbtn = document.createElement('div')
  box_sendbtn.setAttribute('class', 'data_box_no_borderOsoba')
  
  const inputId_stanowiska = document.createElement('input')
  inputId_stanowiska.type = 'text'
  inputId_stanowiska.placeholder = 'Auto Increment'
  inputId_stanowiska.name = 'IdStanowikska'
  inputId_stanowiska.disabled = true

  const inputNazwa_stanowiska = document.createElement('input')
  inputNazwa_stanowiska.type = 'text'
  inputNazwa_stanowiska.name = 'Nazwa_stanowiska'

  //send btn
  const sendForm = document.createElement('button')
  sendForm.type = 'submit'
  sendForm.id = 'UpdateStanowiskoForm'
  sendForm.textContent = "Aktualizuj!"
  sendForm.setAttribute('class', 'buttonForm')

  card_inputs.appendChild(box_Id_stanowiska)
  card_inputs.appendChild(box_Nazwa_stanowiska)
  card_inputs.appendChild(box_sendbtn)
  box_Id_stanowiska.appendChild(inputId_stanowiska)
  box_Nazwa_stanowiska.appendChild(inputNazwa_stanowiska)
  box_sendbtn.appendChild(sendForm)

  const form = document.getElementById('stanowiska')

  form.addEventListener( "submit", function( e11) {
    e11.preventDefault();
    var data = toJSONString( this );
      console.log(data)
      
      fetch('http://slimapp/api/stanowisko/update/'+Id_stanowiska, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }).then(response => response.text())
      .then(data => console.log(data))
    
     alert('Stanowisko zaktualizowane!');
     // setTimeout("location.reload(true);");
     container.innerHTML = ""
     ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent')
     //.then(ShowOsobyKontaktowe(Id_adresu))
 
    
    }, false);

  //alert('Update stanowiska w robocie'+ Id_stanowiska)
 }
}

function DeleteStanowisko(Id_stanowiska)
{
  
  fetch('http://slimapp/api/stanowisko/delete/'+Id_stanowiska, {
    method: 'DELETE', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
  .then(data => console.log(data));

  alert('Stanowisko usunięte!');
  container.innerHTML = ""
  ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent')
  //alert('Delete stanowiska w robocie'+ Id_stanowiska)
}

function AddExistingOsobaKontaktowa(id_adresu)
{

  const card_Osoba_Data = document.getElementById('Nowa_osoba_'+id_adresu)
     
  card_Osoba_Data.innerHTML = ""



const form = document.createElement('form')
form.setAttribute('class', 'osoba')
form.id = 'osoba'
form.name = 'osoba'
form.action = 'javascript:void(0)'
form.method = 'post'
card_Osoba_Data.appendChild(form)

const card_Id_osoby = document.createElement('div')
card_Id_osoby.setAttribute('class', 'cardOsoba')
const box_Id_osoby = document.createElement('div')
box_Id_osoby.setAttribute('class', 'data_box_no_border')

const Id_osoby_string = document.createElement('p')
Id_osoby_string.textContent = `Id Osoby Kontaktowej:`

const inputIdOsoby = document.createElement('select')
//inputIdOsoby.type = 'text'
inputIdOsoby.name = 'Id_osoby_kontaktowej'


var j =0;
var czyZawiera = false;

fetch('http://slimapp/api/osoba_kontaktowa')
.then(response => response.json())
.then(data => data.forEach((osoba) => {

  for(var j = 0; j < powiazaneOsoby.length; j++)
  {
      if(powiazaneOsoby[j] == osoba.Id_osoby_kontaktowej)
      czyZawiera = true;
  }

  if(!czyZawiera)
  {
   const osobaOption = document.createElement('option')
   osobaOption.value = osoba.Id_osoby_kontaktowej
   osobaOption.textContent = osoba.Id_osoby_kontaktowej+' '+ '('+osoba.Imie+' '+osoba.Nazwisko+')'
   inputIdOsoby.appendChild(osobaOption)
  }

  czyZawiera = false

}));


//.then(setTimeout(SetOptionSelections(), 2000));


form.appendChild(card_Id_osoby)
card_Id_osoby.appendChild(Id_osoby_string)
card_Id_osoby.appendChild(box_Id_osoby)
box_Id_osoby.appendChild(inputIdOsoby)

//Send btn
const sendForm = document.createElement('button')
sendForm.type = 'submit'
sendForm.textContent = "Powiąż!"
sendForm.setAttribute('class', 'buttonForm3')

form.appendChild(sendForm)

const card_Buttons = document.createElement('div')
card_Buttons.setAttribute('class', 'cardAdresButtons')

const box_return = document.createElement('div')
box_return.setAttribute('class', 'data_boxOsobaBtns')

const return_btn = document.createElement('a')
return_btn.href = `javascript:void(0)` 
return_btn.setAttribute('onclick', `AddOsobaReturn(${id_adresu})`)
return_btn.setAttribute('class', 'buttonFullHeight')
return_btn.textContent = `Wróć`

card_Osoba_Data.appendChild(card_Buttons)
card_Buttons.appendChild(box_return)
box_return.appendChild(return_btn)

form.addEventListener( "submit", function( e9) {
  e9.preventDefault();
  var idOsoby = inputIdOsoby.value
        console.log(idOsoby)
        
        fetch('http://slimapp/api/adres-osoba_kontaktowa/add/'+id_adresu+'/'+idOsoby, {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => response.text())
        .then(data => console.log(data));

      //  card_temp_for_adding.innerHTML = ""
       alert('Osoba kontaktowa dodana!');
       // setTimeout("location.reload(true);");
       container.innerHTML = ""
     //  document.getElementById('AddAdresCard').remove()
     /*  ShowOsobyKontaktowe(id_adresu)*/
       ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent')

}, false);

 // alert("Przycisk w robocie: "+id_adresu)
}


function AddOsobaKontaktowa(id_adresu, id_osoby)
{
      const card_Osoba_Data = document.getElementById('Nowa_osoba_'+id_adresu)
     
      card_Osoba_Data.innerHTML = ""

    const form = document.createElement('form')
    form.id = 'osoba'
    form.setAttribute('class','osoba')
    form.name = 'osoba'
    form.action = 'javascript:void(0)'
    form.method = 'post'
   card_Osoba_Data.appendChild(form)

    //id
const card_Id_osoby = document.createElement('div')
card_Id_osoby.setAttribute('class', 'cardOsoba')
const box_Id_osoby = document.createElement('div')
box_Id_osoby.setAttribute('class', 'data_box_no_border')

const Id_osoby_string = document.createElement('p')
Id_osoby_string.textContent = `Id Osoby Kontaktowej:`
const inputIdOsoby = document.createElement('input')
inputIdOsoby.type = 'text'
inputIdOsoby.placeholder = 'Auto Increment'
inputIdOsoby.name = 'Id'
inputIdOsoby.disabled = true

form.appendChild(card_Id_osoby)
card_Id_osoby.appendChild(Id_osoby_string)
card_Id_osoby.appendChild(box_Id_osoby)
box_Id_osoby.appendChild(inputIdOsoby)

//id stanowiska
const card_Id_stanowiska = document.createElement('div')
card_Id_stanowiska.setAttribute('class', 'cardOsoba')
const box_Id_stanowiska = document.createElement('div')
box_Id_stanowiska.setAttribute('class', 'data_box_no_border')

const Id_stanowiska_string = document.createElement('p')
Id_stanowiska_string.textContent = `Id Stanowiska:`


const inputIdstanowiska = document.createElement('select')
inputIdstanowiska.id = 'selectAddIdStanowiska'
inputIdstanowiska.name = 'Id_stanowiska'


fetch('http://slimapp/api/stanowisko')
.then(response => response.json())
.then(data => data.forEach((stanowisko) => {

   const stanowiskoOption = document.createElement('option')
   stanowiskoOption.value = stanowisko.Id_stanowiska
   stanowiskoOption.textContent = stanowisko.Id_stanowiska+' '+ '('+stanowisko.Nazwa_stanowiska+')'

   inputIdstanowiska.appendChild(stanowiskoOption)
}));

form.appendChild(card_Id_stanowiska)
card_Id_stanowiska.appendChild(Id_stanowiska_string)
card_Id_stanowiska.appendChild(box_Id_stanowiska)
box_Id_stanowiska.appendChild(inputIdstanowiska)


//imie
const card_imie = document.createElement('div')
card_imie.setAttribute('class', 'cardOsoba')
const box_imie = document.createElement('div')
box_imie.setAttribute('class', 'data_box_no_border')

const imie_string = document.createElement('p')
imie_string.textContent = `Imie:`
const inputimie = document.createElement('input')
inputimie.type = 'text'
inputimie.name = 'Imie'

form.appendChild(card_imie)
card_imie.appendChild(imie_string)
card_imie.appendChild(box_imie)
box_imie.appendChild(inputimie)


//nazwisko
const card_nazwisko= document.createElement('div')
card_nazwisko.setAttribute('class', 'cardOsoba')
const box_nazwisko= document.createElement('div')
box_nazwisko.setAttribute('class', 'data_box_no_border')

const nazwisko_string = document.createElement('p')
nazwisko_string.textContent = `Nazwisko:`
const inputnazwisko = document.createElement('input')
inputnazwisko.type = 'text'
inputnazwisko.name = 'Nazwisko'

form.appendChild(card_nazwisko)
card_nazwisko.appendChild(nazwisko_string)
card_nazwisko.appendChild(box_nazwisko)
box_nazwisko.appendChild(inputnazwisko)



//nr tel
const card_nr_telefonu= document.createElement('div')
card_nr_telefonu.setAttribute('class', 'cardOsoba')
const box_nr_telefonu= document.createElement('div')
box_nr_telefonu.setAttribute('class', 'data_box_no_border')

const nr_telefonu_string = document.createElement('p')
nr_telefonu_string.textContent = `Nr Telefonu:`
const inputnr_telefonu = document.createElement('input')
inputnr_telefonu.type = 'text'
inputnr_telefonu.name = 'Nr_telefonu'
inputnr_telefonu.id = "Osoba_Nr_telefonu"

form.appendChild(card_nr_telefonu)
card_nr_telefonu.appendChild(nr_telefonu_string)
card_nr_telefonu.appendChild(box_nr_telefonu)
box_nr_telefonu.appendChild(inputnr_telefonu)


//email
const card_email= document.createElement('div')
card_email.setAttribute('class', 'cardOsoba')
const box_email= document.createElement('div')
box_email.setAttribute('class', 'data_box_no_border')

const email_string = document.createElement('p')
email_string.textContent = `Email:`
const inputemail = document.createElement('input')
inputemail.type = 'text'
inputemail.name = 'Email'

form.appendChild(card_email)
card_email.appendChild(email_string)
card_email.appendChild(box_email)
box_email.appendChild(inputemail)

//Send btn
const sendForm = document.createElement('button')
sendForm.type = 'submit'
sendForm.textContent = "Dodaj!"
sendForm.setAttribute('class', 'buttonForm3')

form.appendChild(sendForm)

const card_Buttons = document.createElement('div')
card_Buttons.setAttribute('class', 'cardAdresButtons')

const box_return = document.createElement('div')
box_return.setAttribute('class', 'data_boxOsobaBtns')

const return_btn = document.createElement('a')
return_btn.href = `javascript:void(0)` 
return_btn.setAttribute('onclick', `AddOsobaReturn(${id_adresu})`)
return_btn.setAttribute('class', 'buttonFullHeight')
return_btn.textContent = `Wróć`

card_Osoba_Data.appendChild(card_Buttons)
card_Buttons.appendChild(box_return)
box_return.appendChild(return_btn)

function CheckForm(data)
{
   if(data == "Pomyslnie dodano")
   {
    container.innerHTML = ""
    setTimeout(ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent'), 500)
     alert(data)
   }  
   else
   {
     alert(data)
   }
}


// Form to Json
form.addEventListener( "submit", function( e8) {
e8.preventDefault();
var data = toJSONString( this );
var nrTel = document.getElementById('Osoba_Nr_telefonu').value
  console.log(data)
  
  fetch('http://slimapp/api/osoba_kontaktowa/add', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  }).then(response => response.text())
  .then(data => CheckForm(data))
  .then(data => {


    
    fetch('http://slimapp/api/osoba_kontaktowa/GetId/'+nrTel)
    .then(response => response.json())
    .then(data => data.forEach((osoba) => {

      fetch('http://slimapp/api/adres-osoba_kontaktowa/add/'+id_adresu+'/'+osoba.Id_osoby_kontaktowej, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.text())
      .then(data => console.log(data));


    }));


 
 });

 //alert('Nowa osoba kontaktowa dodana!');
 // setTimeout("location.reload(true);");
 //container.innerHTML = ""
 //setTimeout(ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent'), 500)


}, false);



  //  alert("Przycisk w robocie: "+id_adresu)
}

function AddOsobaReturn(id_adresu)
{
  if(document.getElementById('containerForOsoby'))
  {
    document.getElementById('containerForOsoby').remove();
  }

  ShowOsobyKontaktowe(id_adresu)

}


function DeleteAdres(Id_adresu, Id_kontrahenta)
{
    if(document.getElementById('AddAdresCard'))
    {
    document.getElementById('AddAdresCard').remove();
    }

    fetch('http://slimapp/api/adres/delete/'+Id_adresu, {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
      .then(data => console.log(data));

      alert('Adres usunięty!');
     // setTimeout("location.reload(true);");
      container.innerHTML = ""
      ShowData(Id_kontrahenta,'http://slimapp/api/adres/kontrahent')
}

function UpdateAdres(Id_adresu, Id_kontrahenta)
{
    
  
    if(document.getElementById('Input_Id_adresu'))
    {
    document.getElementById('Input_Id_adresu').remove()
    document.getElementById('Input_Id_kontrahenta').remove()
    document.getElementById('Input_Rodzaj').remove()
    document.getElementById('Input_Ulica').remove()
    document.getElementById('Input_Miejscowosc').remove()
    document.getElementById('Input_Nr_budynku').remove()
    document.getElementById('Input_Nr_lokalu').remove()
    document.getElementById('Input_Kod_pocztowy').remove()
    document.getElementById('Input_Gmina').remove()
    document.getElementById('Input_Powiat').remove()
    document.getElementById('Input_Wojewodztwo').remove()
    document.getElementById('Input_Kraj').remove()
    document.getElementById('Input_Nr_telefonu').remove()
    document.getElementById('Input_Email').remove()
    document.getElementById('Submit_Btn').remove()
    }
    else{

    fetch('http://slimapp/api/adres/'+Id_adresu)
    .then(response => response.json())
    .then(data => data.forEach((adres) => {
  

  const card_adres = document.getElementById('adres_'+Id_adresu)

  card_adres.innerHTML = ""

  card_temp_for_adding.innerHTML = ""

  if(document.getElementById('Update_kontrahent'))
  {
   var elem = document.getElementById('Update_kontrahent')
   elem.parentNode.removeChild(elem);
  }

  const naglowekAdresy2 = document.createElement('h3')
  //naglowekAdresy2.textContent = `${adres.Rodzaj}`

  if(adres.Rodzaj == 'Siedziba_glowna')
  naglowekAdresy2.textContent = `Siedziba Główna`
  else
  naglowekAdresy2.textContent = `Oddział`

  card_adres.appendChild(naglowekAdresy2)
  //const addAdresCard = document.getElementById('addKontrahentCard')
 // addAdresCard.setAttribute('class', 'card')

  const form = document.createElement('form')
  form.id = 'adres'
  form.name = 'adres'
  form.action = 'javascript:void(0)'
  form.method = 'post'

  //container.appendChild(card_adres123)
  card_adres.appendChild(form)
  
 //Create disabled autoIncrement field
  const card_Id_adresu = document.createElement('div')
  card_Id_adresu.setAttribute('class', 'cardAdres')

  const box_Id_adresu = document.createElement('div')
  box_Id_adresu.setAttribute('class', 'data_box_no_border')
  box_Id_adresu.id = 'Input_Id_adresu'

  const IdAdresu = document.createElement('p')
  IdAdresu.textContent = 'Id Adresu: '+adres.Id_adresu
  const inputIdAdresu = document.createElement('input')
  inputIdAdresu.type = 'text'
  inputIdAdresu.placeholder = 'Auto Increment'
  inputIdAdresu.name = 'Id'
  inputIdAdresu.disabled = true

  form.appendChild(card_Id_adresu)
  card_Id_adresu.appendChild(IdAdresu)
  card_Id_adresu.appendChild(box_Id_adresu)
  box_Id_adresu.appendChild(inputIdAdresu)


  //Create id kontrahenta field
  const card_Id_kontrahenta= document.createElement('div')
  card_Id_kontrahenta.setAttribute('class', 'cardAdres')


  const box_Id_kontrahenta = document.createElement('div')
  box_Id_kontrahenta.setAttribute('class', 'data_box_no_border')
  box_Id_kontrahenta.id = 'Input_Id_kontrahenta'

  const IdKontrahenta = document.createElement('p')
  IdKontrahenta.textContent = 'Id Kontrahenta: '+adres.Id_kontrahenta
  const inputIdKontrahenta = document.createElement('input')
  inputIdKontrahenta.type = 'text'
  inputIdKontrahenta.placeholder = adres.Id_kontrahenta
  inputIdKontrahenta.value = +adres.Id_kontrahenta
  inputIdKontrahenta.name = 'Id_kontrahenta'
  inputIdKontrahenta.id = 'Id_kontrahenta'
  inputIdKontrahenta.disabled = true

  form.appendChild(card_Id_kontrahenta)
  card_Id_kontrahenta.appendChild(IdKontrahenta)
  card_Id_kontrahenta.appendChild(box_Id_kontrahenta)
  box_Id_kontrahenta.appendChild(inputIdKontrahenta)

  //Create Rodzaj field
  const card_Rodzaj= document.createElement('div')
  card_Rodzaj.setAttribute('class', 'cardAdres')

  const box_Rodzaj = document.createElement('div')
  box_Rodzaj.setAttribute('class', 'data_box_no_border')
  box_Rodzaj.id = 'Input_Rodzaj'

  const Rodzaj = document.createElement('p')
  Rodzaj.textContent = 'Rodzaj: '+adres.Rodzaj
  const selectRodzaj = document.createElement('select')
  selectRodzaj.value = 'none'
  selectRodzaj.name = 'Rodzaj'
  const optionSiedziba = document.createElement('option')
  optionSiedziba.value = 'Siedziba_glowna'
  optionSiedziba.textContent = 'Siedziba Główna'
  const optionOddzial = document.createElement('option')
  optionOddzial.value = 'Oddzial'
  optionOddzial.textContent = 'Oddział'

  selectRodzaj.appendChild(optionSiedziba)
  selectRodzaj.appendChild(optionOddzial)

  form.appendChild(card_Rodzaj)
  card_Rodzaj.appendChild(Rodzaj)
  card_Rodzaj.appendChild(box_Rodzaj)
  box_Rodzaj.appendChild(selectRodzaj)

  //Create Ulica field
  const card_Ulica = document.createElement('div')
  card_Ulica.setAttribute('class', 'cardAdres')

  const box_Ulica = document.createElement('div')
  box_Ulica.setAttribute('class', 'data_box_no_border')
  box_Ulica.id = 'Input_Ulica'

  const Ulica = document.createElement('p')
  Ulica.textContent = 'Ulica: '+adres.Ulica
  const inputUlica = document.createElement('input')
  inputUlica.type = 'text'
  inputUlica.name = 'Ulica'
  inputUlica.id = 'Ulica'

  form.appendChild(card_Ulica)
  card_Ulica.appendChild(Ulica)
  card_Ulica.appendChild(box_Ulica)
  box_Ulica.appendChild(inputUlica)

  //Create Miejscowosc field
  const card_Miejscowosc = document.createElement('div')
  card_Miejscowosc.setAttribute('class', 'cardAdres')

  const box_Miejscowosc = document.createElement('div')
  box_Miejscowosc.setAttribute('class', 'data_box_no_border')
  box_Miejscowosc.id = 'Input_Miejscowosc'

  const Miejscowosc = document.createElement('p')
  Miejscowosc.textContent = 'Miejscowosc: '+adres.Miejscowosc
  const inputMiejscowosc = document.createElement('input')
  inputMiejscowosc.type = 'text'
  inputMiejscowosc.name = 'Miejscowosc'
  inputMiejscowosc.id = 'Miejscowosc'

  form.appendChild(card_Miejscowosc)
  card_Miejscowosc.appendChild(Miejscowosc)
  card_Miejscowosc.appendChild(box_Miejscowosc)
  box_Miejscowosc.appendChild(inputMiejscowosc)

   //Create Nr_budynku field
   const card_Nr_budynku = document.createElement('div')
   card_Nr_budynku.setAttribute('class', 'cardAdres')

   const box_Nr_budynku= document.createElement('div')
   box_Nr_budynku.setAttribute('class', 'data_box_no_border')
   box_Nr_budynku.id = 'Input_Nr_budynku'

   const Nr_budynku = document.createElement('p')
   Nr_budynku.textContent = 'Nr Budynku: '+adres.Nr_budynku
   const inputNr_budynku = document.createElement('input')
   inputNr_budynku.type = 'text'
   inputNr_budynku.name = 'Nr_budynku'
   inputNr_budynku.id = 'Nr_budynku'

   form.appendChild(card_Nr_budynku)
   card_Nr_budynku.appendChild(Nr_budynku)
   card_Nr_budynku.appendChild(box_Nr_budynku)
   box_Nr_budynku.appendChild(inputNr_budynku)

    //Create Nr_lokalu field
    const card_Nr_lokalu = document.createElement('div')
    card_Nr_lokalu.setAttribute('class', 'cardAdres')

    const box_Nr_lokalu= document.createElement('div')
    box_Nr_lokalu.setAttribute('class', 'data_box_no_border')
    box_Nr_lokalu.id = 'Input_Nr_lokalu'

    const Nr_lokalu = document.createElement('p')
    Nr_lokalu.textContent = 'Nr Lokalu: '+adres.Nr_lokalu
    const inputNr_lokalu = document.createElement('input')
    inputNr_lokalu.type = 'text'
    inputNr_lokalu.name = 'Nr_lokalu'
    inputNr_lokalu.id = 'Nr_lokalu'

    form.appendChild(card_Nr_lokalu)
    card_Nr_lokalu.appendChild(Nr_lokalu)
    card_Nr_lokalu.appendChild(box_Nr_lokalu)
    box_Nr_lokalu.appendChild(inputNr_lokalu)

     //Create Kod_pocztowy field
     const card_Kod_pocztowy = document.createElement('div')
     card_Kod_pocztowy.setAttribute('class', 'cardAdres')
 
     const box_Kod_pocztowy= document.createElement('div')
     box_Kod_pocztowy.setAttribute('class', 'data_box_no_border')
     box_Kod_pocztowy.id = 'Input_Kod_pocztowy'
 
     const Kod_pocztowy = document.createElement('p')
     Kod_pocztowy.textContent = 'Kod Pocztowy: '+adres.Kod_pocztowy
     const inputKod_pocztowy = document.createElement('input')
     inputKod_pocztowy.type = 'text'
     inputKod_pocztowy.name = 'Kod_pocztowy'
     inputKod_pocztowy.id = 'Kod_pocztowy'
 
     form.appendChild(card_Kod_pocztowy)
     card_Kod_pocztowy.appendChild(Kod_pocztowy)
     card_Kod_pocztowy.appendChild(box_Kod_pocztowy)
     box_Kod_pocztowy.appendChild(inputKod_pocztowy)

      //Create Gmina field
      const card_Gmina = document.createElement('div')
      card_Gmina.setAttribute('class', 'cardAdres')
  
      const box_Gmina= document.createElement('div')
      box_Gmina.setAttribute('class', 'data_box_no_border')
      box_Gmina.id = 'Input_Gmina'
  
      const Gmina = document.createElement('p')
      Gmina.textContent = 'Gmina: '+adres.Gmina
      const inputGmina = document.createElement('input')
      inputGmina.type = 'text'
      inputGmina.name = 'Gmina'
      inputGmina.id = 'Gmina'
  
      form.appendChild(card_Gmina)
      card_Gmina.appendChild(Gmina)
      card_Gmina.appendChild(box_Gmina)
      box_Gmina.appendChild(inputGmina)

       //Create Powiat field
       const card_Powiat = document.createElement('div')
       card_Powiat.setAttribute('class', 'cardAdres')
   
       const box_Powiat= document.createElement('div')
       box_Powiat.setAttribute('class', 'data_box_no_border')
       box_Powiat.id = 'Input_Powiat'
   
       const Powiat = document.createElement('p')
       Powiat.textContent = 'Powiat: '+adres.Powiat
       const inputPowiat = document.createElement('input')
       inputPowiat.type = 'text'
       inputPowiat.name = 'Powiat'
       inputPowiat.id = 'Powiat'
   
       form.appendChild(card_Powiat)
       card_Powiat.appendChild(Powiat)
       card_Powiat.appendChild(box_Powiat)
       box_Powiat.appendChild(inputPowiat)

         //Create Wojewodztwo field
         const card_Wojewodztwo = document.createElement('div')
         card_Wojewodztwo.setAttribute('class', 'cardAdres')
     
         const box_Wojewodztwo= document.createElement('div')
         box_Wojewodztwo.setAttribute('class', 'data_box_no_border')
         box_Wojewodztwo.id = 'Input_Wojewodztwo'
     
         const Wojewodztwo = document.createElement('p')
         Wojewodztwo.textContent = 'Wojewodztwo: '+adres.Wojewodztwo
         const inputWojewodztwo = document.createElement('input')
         inputWojewodztwo.type = 'text'
         inputWojewodztwo.name = 'Wojewodztwo'
         inputWojewodztwo.id = 'Wojewodztwo'
     
         form.appendChild(card_Wojewodztwo)
         card_Wojewodztwo.appendChild(Wojewodztwo)
         card_Wojewodztwo.appendChild(box_Wojewodztwo)
         box_Wojewodztwo.appendChild(inputWojewodztwo)

        //Create Kraj field
         const card_Kraj = document.createElement('div')
         card_Kraj.setAttribute('class', 'cardAdres')
     
         const box_Kraj= document.createElement('div')
         box_Kraj.setAttribute('class', 'data_box_no_border')
         box_Kraj.id = 'Input_Kraj'
     
         const Kraj = document.createElement('p')
         Kraj.textContent = 'Kraj: '+adres.Kraj
         const inputKraj = document.createElement('input')
         inputKraj.type = 'text'
         inputKraj.name = 'Kraj'
         inputKraj.id = 'Kraj'
     
         form.appendChild(card_Kraj)
         card_Kraj.appendChild(Kraj)
         card_Kraj.appendChild(box_Kraj)
         box_Kraj.appendChild(inputKraj)

         
        //Create Nr_telefonu field
        const card_Nr_telefonu = document.createElement('div')
        card_Nr_telefonu.setAttribute('class', 'cardAdres')
    
        const box_Nr_telefonu = document.createElement('div')
        box_Nr_telefonu.setAttribute('class', 'data_box_no_border')
        box_Nr_telefonu.id = 'Input_Nr_telefonu'
    
        const Nr_telefonu = document.createElement('p')
        Nr_telefonu.textContent = 'Nr Telefonu: '+adres.Nr_telefonu
        const inputNr_telefonu = document.createElement('input')
        inputNr_telefonu.type = 'text'
        inputNr_telefonu.name = 'Nr_telefonu'
        inputNr_telefonu.id = 'Nr_telefonu'
    
        form.appendChild(card_Nr_telefonu)
        card_Nr_telefonu.appendChild(Nr_telefonu)
        card_Nr_telefonu.appendChild(box_Nr_telefonu)
        box_Nr_telefonu.appendChild(inputNr_telefonu)

       //Create Email field
        const card_Email = document.createElement('div')
        card_Email.setAttribute('class', 'cardAdres')
    
        const box_Email = document.createElement('div')
        box_Email.setAttribute('class', 'data_box_no_border')
        box_Email.id = 'Input_Email'
    
        const Email = document.createElement('p')
        Email.textContent = 'Email: '+adres.Email
        const inputEmail = document.createElement('input')
        inputEmail.type = 'text'
        inputEmail.name = 'Email'
        inputEmail.id = 'Email'
    
        form.appendChild(card_Email)
        card_Email.appendChild(Email)
        card_Email.appendChild(box_Email)
        box_Email.appendChild(inputEmail)

        //Send btn
        const sendForm = document.createElement('button')
        sendForm.type = 'submit'
        sendForm.textContent = "Aktualizuj"
        sendForm.setAttribute('class', 'buttonForm2')
        sendForm.id = "Submit_Btn"

        form.appendChild(sendForm)

        //Przyciski akcji
        const card_Buttons = document.createElement('div')
        card_Buttons.setAttribute('class', 'cardAdresButtonsMain')
        
        const box_osoba = document.createElement('div')
        box_osoba.setAttribute('class', 'data_boxAdresBtns')
        
        const box_remove = document.createElement('div')
        box_remove.setAttribute('class', 'data_boxAdresBtns')
        
        const box_update= document.createElement('div')
        box_update.setAttribute('class', 'data_boxAdresBtns')
        
        const osoby_btn = document.createElement('a')
        osoby_btn.href = `javascript:void(0)` 
        osoby_btn.setAttribute('onclick', `ShowOsobyKontaktowe(${adres.Id_adresu})`)
        osoby_btn.setAttribute('class', 'buttonFullHeight')
        osoby_btn.textContent = `Pokaż osoby kontaktowe`
        
        const remove_btn = document.createElement('a')
        remove_btn.href = `javascript:void(0)` 
        remove_btn.setAttribute('onclick', `DeleteAdres(${adres.Id_adresu}, ${adres.Id_kontrahenta})`)
        remove_btn.setAttribute('class', 'buttonFullHeight')
        remove_btn.textContent = `Usuń` 
        
        const update_btn = document.createElement('a')
        update_btn.href = `javascript:void(0)` 
        update_btn.setAttribute('onclick', `UpdateAdres(${adres.Id_adresu}, ${adres.Id_kontrahenta})`)
        update_btn.setAttribute('class', 'buttonFullHeight')
        update_btn.textContent = `Edytuj` 
    
        card_adres.appendChild(card_Buttons)
        card_Buttons.appendChild(box_osoba)
        card_Buttons.appendChild(box_remove)
        card_Buttons.appendChild(box_update)
        box_osoba.appendChild(osoby_btn)
        box_remove.appendChild(remove_btn)
        box_update.appendChild(update_btn)

        function CheckForm(data)
        {
           if(data == "Pomyslnie zaktualizowano")
           {
            container.innerHTML = ""
            setTimeout(ShowData(Id_kontrahenta,'http://slimapp/api/adres/kontrahent'), 500)
             alert(data)
           }  
           else
           {
             alert(data)
           }
        }

        // Form to Json
        form.addEventListener( "submit", function( e4) {
          e4.preventDefault();
          var data = toJSONString( this );
          console.log(data)
          
          fetch('http://slimapp/api/adres/update/'+Id_adresu, {
            method: 'PUT', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: data,
          }).then(response => response.text())
          .then(data => CheckForm(data));

         // card_temp_for_adding.innerHTML = ""
         ///alert('Adres zaktualizowany!');
         // setTimeout("location.reload(true);");
       //  container.innerHTML = ""
        // setTimeout(ShowData(Id_kontrahenta,'http://slimapp/api/adres/kontrahent'), 500)

      }, false);
  
    }));
}
}

function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
}

function Wyszukiwarka()
{
    container.innerHTML = ''

    if(document.getElementById('box_ButtonAdd'))
    {
    document.getElementById('box_ButtonAdd').remove()
    }

    if(document.getElementById('returnBtn'))
    {
    document.getElementById('returnBtn').parentElement.remove()
    }

    serachBtn.textContent = 'Wróć'
    serachBtn.setAttribute('onclick', `ReturnToStart()`)

    document.getElementById('subTitle').innerHTML = ''
    if(document.getElementById('card_strings'))
    {
    document.getElementById('card_strings').remove();
    }
    if(document.getElementById('addKontrahentCard'))
    {
    document.getElementById('addKontrahentCard').remove();
    }
    const box_SerachBoxCriteria = document.createElement('div')
    box_SerachBoxCriteria.setAttribute('class', 'data_box_serachBox')
    box_SerachBoxCriteria.id = 'box_SerachBoxCriteria'

    const serach_criteria_field = document.createElement('select')
    serach_criteria_field.id = 'serach_criteria_field'
    serach_criteria_field.value = 'none'
   // serach_criteria_field.value = 'Przeszukaj wszystko'

    const optionAll = document.createElement('option')
    optionAll.value = 'Przeszukaj wszystko'
    optionAll.textContent = 'Przeszukaj wszystko'

    const optionKontrahent = document.createElement('option')
    optionKontrahent.value = 'Przeszukaj kontrahentów'
    optionKontrahent.textContent = 'Przeszukaj kontrahentów'

    const optionAdres = document.createElement('option')
    optionAdres.value = 'Przeszukaj adresy'
    optionAdres.textContent = 'Przeszukaj adresy'

    const optionOsoby = document.createElement('option')
    optionOsoby.value = 'Przeszukaj osoby kontaktowe'
    optionOsoby.textContent = 'Przeszukaj osoby kontaktowe'

    const optionStanowiska= document.createElement('option')
    optionStanowiska.value = 'Przeszukaj stanowiska'
    optionStanowiska.textContent = 'Przeszukaj stanowiska'

    serach_criteria_field.appendChild(optionAll)
    serach_criteria_field.appendChild(optionKontrahent)
    serach_criteria_field.appendChild(optionAdres)
    serach_criteria_field.appendChild(optionOsoby)
    serach_criteria_field.appendChild(optionStanowiska)

     card_SerachBox.prepend(box_SerachBoxCriteria)
     box_SerachBoxCriteria.appendChild(serach_criteria_field)

     buttonSerachString.setAttribute('onclick', 'GlobalSerach()')


    //alert('Przycisk w robocie...')
}

function GlobalSerach()
{
    Wyszukiwarka();

    document.getElementById('box_SerachBoxCriteria').remove();
    const criteria = document.getElementById('serach_criteria_field').value;

    if(criteria == 'Przeszukaj wszystko')
    {
        GlobalSerachGenerujElementyKontrahenta();
        GlobalSerachGenerujElementyAdresu();
        GlobalSerachGenerujElementyOsobKontaktowych();
        GlobalSerachGenerujElementyStanowisaka();
    }
    else if(criteria == 'Przeszukaj kontrahentów')
    {
        GlobalSerachGenerujElementyKontrahenta();
    }
    else if (criteria == 'Przeszukaj adresy')
    {
        GlobalSerachGenerujElementyAdresu();
    }
    else if(criteria == 'Przeszukaj osoby kontaktowe')
    {
        GlobalSerachGenerujElementyOsobKontaktowych();
    }
    else if(criteria == 'Przeszukaj stanowiska')
    {
        GlobalSerachGenerujElementyStanowisaka();
    }


}

function GlobalSerachGenerujElementyKontrahenta()
{
         
const kontrahent_container = document.createElement('div')
kontrahent_container.setAttribute('class', 'container')

const card_strings = document.createElement('div')
card_strings.setAttribute('class', 'card')
card_strings.id = 'card_strings'

const kontrahent_subTitle = document.createElement('h2')
kontrahent_subTitle.textContent = 'Kontrahenci: '

const card_id_string  = document.createElement('div')
card_id_string.setAttribute('class', 'data_box_string')

const Id_string = document.createElement('p')
Id_string.textContent = `Id Kontrahenta` 

const card_nazwa_string = document.createElement('div')
card_nazwa_string.setAttribute('class', 'data_box_string')

const Nazwa_string = document.createElement('p')
Nazwa_string.textContent = `Nazwa Kontrahenta` 

const card_nip_string = document.createElement('div')
card_nip_string.setAttribute('class', 'data_box_string')

const NIP_string = document.createElement('p')
NIP_string.textContent = `NIP Kontrahenta` 

const card_typ_string = document.createElement('div')
card_typ_string.setAttribute('class', 'data_box_string')

const Typ_string = document.createElement('p')
Typ_string.textContent = `Typ Kontrahenta` 

const card_btn_empty = document.createElement('div')
card_btn_empty.setAttribute('class', 'data_box_empty')

container.appendChild(kontrahent_container)
kontrahent_container.appendChild(card_strings)

kontrahent_container.prepend(kontrahent_subTitle)
card_strings.appendChild(card_id_string)
card_strings.appendChild(card_nazwa_string)
card_strings.appendChild(card_nip_string)
card_strings.appendChild(card_typ_string)
card_strings.appendChild(card_btn_empty)
card_typ_string.appendChild(Typ_string)
card_id_string.appendChild(Id_string)
card_nazwa_string.appendChild(Nazwa_string)
card_nip_string.appendChild(NIP_string)

var serachBoxValue = document.getElementById("inputSerachString").value;
if(serachBoxValue == '' || serachBoxValue == null)
{serachUrl = 'http://slimapp/api/kontrahent'}
else
{serachUrl = 'http://slimapp/api/kontrahent/wyszukaj/'+document.getElementById("inputSerachString").value}

fetch(serachUrl)
.then(response => response.json())
.then(data => data.forEach((kontrahent) => {

// Create a div with a card class
const card = document.createElement('div')
card.setAttribute('class', 'card')
card.id = 'KontrahentCard_'+kontrahent.Id_kontrahenta

const card_id = document.createElement('div')
card_id.setAttribute('class', 'data_box')
card_id.textContent = `${kontrahent.Id_kontrahenta}`

//const Id = document.createElement('p')
//Id.textContent = `${kontrahent.Id_kontrahenta}` 

const card_nazwa = document.createElement('div')
card_nazwa.setAttribute('class', 'data_box')
card_nazwa.textContent = `${kontrahent.Nazwa}` 

//const NazwaKontrahenta = document.createElement('p')
//NazwaKontrahenta.textContent = `${kontrahent.Nazwa}` 

const card_nip = document.createElement('div')
card_nip.setAttribute('class', 'data_box')
card_nip.textContent = `${kontrahent.NIP}` 

//const NIPKontrahenta = document.createElement('p')
//NIPKontrahenta.textContent = `${kontrahent.NIP}` 

const card_typ_kontrahenta = document.createElement('div')
card_typ_kontrahenta.setAttribute('class', 'data_box')
card_typ_kontrahenta.textContent = `${kontrahent.Typ_kontrahenta}` 

//const Typ_Kontrahenta = document.createElement('p')
//Typ_Kontrahenta.textContent = `${kontrahent.Typ_kontrahenta}` 

//Button pokaz szczegoly i usuń
const card_btn = document.createElement('div')
card_btn.setAttribute('class', 'data_box_icons')
/*
const info_btn = document.createElement('a')
info_btn.href = `javascript:void(0)` 
info_btn.setAttribute('onclick', `ShowData(${kontrahent.Id_kontrahenta},"http://slimapp/api/adres/kontrahent")`)
info_btn.setAttribute('class', 'button')
info_btn.textContent = `Pokaż dane` */

const img_delete = document.createElement('img')
img_delete.src = 'delete.png'
img_delete.setAttribute('class', 'icons')
img_delete.title = "Usuń"

const img_edit = document.createElement('img')
img_edit.src = 'edit.png'
img_edit.setAttribute('class', 'icons')
img_edit.title = "Edytuj"

const remove_btn = document.createElement('a')
remove_btn.href = `javascript:void(0)` 
remove_btn.setAttribute('onclick', `DeleteKontrahent(${kontrahent.Id_kontrahenta}, "wyszukaj")`)
remove_btn.setAttribute('class', 'buttonIMG')
remove_btn.appendChild(img_delete)
//remove_btn.textContent = `Usuń` 

const update_btn = document.createElement('a')
update_btn.href = `javascript:void(0)` 
update_btn.setAttribute('onclick', `UpdateKontrahent(${kontrahent.Id_kontrahenta}, "wyszukaj")`)
update_btn.setAttribute('class', 'buttonIMG')
update_btn.appendChild(img_edit)
//update_btn.textContent = `Edytuj` 

kontrahent_container.appendChild(card)

card.appendChild(card_id)
card.appendChild(card_nazwa)
card.appendChild(card_nip)
card.appendChild(card_typ_kontrahenta)
card.appendChild(card_btn)
//card_id.appendChild(Id)
//card_nazwa.appendChild(NazwaKontrahenta)
//card_nip.appendChild(NIPKontrahenta)
//card_typ_kontrahenta.appendChild(Typ_Kontrahenta)
//card_btn.appendChild(info_btn)
card_btn.appendChild(remove_btn)
card_btn.appendChild(update_btn)

}));

}

function GlobalSerachGenerujElementyAdresu()
{

 const adres_container = document.createElement('div')
adres_container.setAttribute('class', 'container_scrollable')
adres_container.id = "container_scrollable"
         
const card_strings = document.createElement('div')
card_strings.setAttribute('class', 'cardScrollable')
card_strings.id = 'card_strings'

const adres_subTitle = document.createElement('h2')
adres_subTitle.textContent = 'Adresy: '

const card_id_string  = document.createElement('div')
card_id_string.setAttribute('class', 'data_box_string_scrollable')

const Id_string = document.createElement('p')
Id_string.textContent = `Id Adresu` 

const card_Id_kontrahenta_string = document.createElement('div')
card_Id_kontrahenta_string.setAttribute('class', 'data_box_string_scrollable')

const Id_kontrahenta_string = document.createElement('p')
Id_kontrahenta_string.textContent = `Id Kontrahenta` 

const card_Rodzaj_string = document.createElement('div')
card_Rodzaj_string.setAttribute('class', 'data_box_string_scrollable')

const Rodzaj_string = document.createElement('p')
Rodzaj_string.textContent = `Rodzaj` 

const card_Ulica_string = document.createElement('div')
card_Ulica_string.setAttribute('class', 'data_box_string_scrollable')

const Ulica_string = document.createElement('p')
Ulica_string.textContent = `Ulica` 

const card_Miejscowosc_string = document.createElement('div')
card_Miejscowosc_string.setAttribute('class', 'data_box_string_scrollable')

const Miejscowosc_string = document.createElement('p')
Miejscowosc_string.textContent = `Miejscowosc` 

const card_Nr_budynku_string = document.createElement('div')
card_Nr_budynku_string.setAttribute('class', 'data_box_string_scrollable')

const Nr_budynku_string = document.createElement('p')
Nr_budynku_string.textContent = `Nr Budynku` 

const card_Nr_lokalu_string = document.createElement('div')
card_Nr_lokalu_string.setAttribute('class', 'data_box_string_scrollable')

const Nr_lokalu_string = document.createElement('p')
Nr_lokalu_string.textContent = `Nr Lokalu`

const card_Kod_pocztowy_string = document.createElement('div')
card_Kod_pocztowy_string.setAttribute('class', 'data_box_string_scrollable')

const Kod_pocztowy_string = document.createElement('p')
Kod_pocztowy_string.textContent = `Kod Pocztowy`

const card_Gmina_string = document.createElement('div')
card_Gmina_string.setAttribute('class', 'data_box_string_scrollable')

const Gmina_string = document.createElement('p')
Gmina_string.textContent = `Gmina`

const card_Powiat_string = document.createElement('div')
card_Powiat_string.setAttribute('class', 'data_box_string_scrollable')

const Powiat_string = document.createElement('p')
Powiat_string.textContent = `Powiat`

const card_Wojewodztwo_string = document.createElement('div')
card_Wojewodztwo_string.setAttribute('class', 'data_box_string_scrollable')

const Wojewodztwo_string = document.createElement('p')
Wojewodztwo_string.textContent = `Województwo`

const card_Kraj_string = document.createElement('div')
card_Kraj_string.setAttribute('class', 'data_box_string_scrollable')

const Kraj_string = document.createElement('p')
Kraj_string.textContent = `Kraj`

const card_Nr_telefonu_string = document.createElement('div')
card_Nr_telefonu_string.setAttribute('class', 'data_box_string_scrollable')

const Nr_telefonu_string = document.createElement('p')
Nr_telefonu_string.textContent = `Nr Telefonu`

const card_Email_string = document.createElement('div')
card_Email_string.setAttribute('class', 'data_box_string_scrollable')

const Email_string = document.createElement('p')
Email_string.textContent = `Email`



const card_btn_empty = document.createElement('div')
card_btn_empty.setAttribute('class', 'data_box_string_scrollable')


container.appendChild(adres_container)
adres_container.appendChild(card_strings)

adres_container.prepend(adres_subTitle)
//card_strings.appendChild(document.createElement('br'))
card_strings.appendChild(card_id_string)
card_strings.appendChild(card_Id_kontrahenta_string)
card_strings.appendChild(card_Rodzaj_string)
card_strings.appendChild(card_Ulica_string)
card_strings.appendChild(card_Miejscowosc_string)
card_strings.appendChild(card_Nr_budynku_string)
card_strings.appendChild(card_Nr_lokalu_string)
card_strings.appendChild(card_Kod_pocztowy_string)
card_strings.appendChild(card_Gmina_string)
card_strings.appendChild(card_Powiat_string)
card_strings.appendChild(card_Wojewodztwo_string)
card_strings.appendChild(card_Kraj_string)
card_strings.appendChild(card_Nr_telefonu_string)
card_strings.appendChild(card_Email_string)
card_strings.appendChild(card_btn_empty)


card_Ulica_string.appendChild(Ulica_string)
card_id_string.appendChild(Id_string)
card_Id_kontrahenta_string.appendChild(Id_kontrahenta_string)
card_Rodzaj_string.appendChild(Rodzaj_string)
card_Miejscowosc_string.appendChild(Miejscowosc_string)
card_Nr_budynku_string.appendChild(Nr_budynku_string)
card_Nr_lokalu_string.appendChild(Nr_lokalu_string)
card_Kod_pocztowy_string.appendChild(Kod_pocztowy_string)
card_Gmina_string.appendChild(Gmina_string)
card_Powiat_string.appendChild(Powiat_string)
card_Wojewodztwo_string.appendChild(Wojewodztwo_string)
card_Kraj_string.appendChild(Kraj_string)
card_Nr_telefonu_string.appendChild(Nr_telefonu_string)
card_Email_string.appendChild(Email_string)

var serachBoxValue = document.getElementById("inputSerachString").value;
if(serachBoxValue == '' || serachBoxValue == null)
{serachUrl = 'http://slimapp/api/adres'}
else
{serachUrl = 'http://slimapp/api/adres/wyszukaj/'+document.getElementById("inputSerachString").value}


fetch(serachUrl)
.then(response => response.json())
.then(data => data.forEach((adres) => {

// Create a div with a card class
const card = document.createElement('div')
card.setAttribute('class', 'cardScrollable')
card.id = 'AdresCard_'+adres.Id_adresu

const card_id = document.createElement('div')
card_id.setAttribute('class', 'data_boxWyszukajAdresu')
card_id.textContent = `${adres.Id_adresu}` 

//const Id = document.createElement('p')
//Id.textContent = `${adres.Id_adresu}` 

const card_Id_kontrahenta = document.createElement('div')
card_Id_kontrahenta.setAttribute('class', 'data_boxWyszukajAdresu')
card_Id_kontrahenta.textContent = `${adres.Id_kontrahenta}` 

//const Id_Kontrahenta = document.createElement('p')
//Id_Kontrahenta.textContent = `${adres.Id_kontrahenta}` 

const card_Rodzaj = document.createElement('div')
card_Rodzaj.setAttribute('class', 'data_boxWyszukajAdresu')
card_Rodzaj.textContent = `${adres.Rodzaj}` 

//const RodzajAdresu = document.createElement('p')
//RodzajAdresu.textContent = `${adres.Rodzaj}` 

const card_Ulica = document.createElement('div')
card_Ulica.setAttribute('class', 'data_boxWyszukajAdresu')
card_Ulica.textContent = `${adres.Ulica}` 

//const Ulica = document.createElement('p')
//Ulica.textContent = `${adres.Ulica}` 

const card_Miejscowosc = document.createElement('div')
card_Miejscowosc.setAttribute('class', 'data_boxWyszukajAdresu')
card_Miejscowosc.textContent = `${adres.Miejscowosc}` 

//const Miejscowosc = document.createElement('p')
//Miejscowosc.textContent = `${adres.Miejscowosc}` 

const card_Nr_budynku = document.createElement('div')
card_Nr_budynku.setAttribute('class', 'data_boxWyszukajAdresu')
card_Nr_budynku.textContent = `${adres.Nr_budynku}` 

//const Nr_budynku = document.createElement('p')
//Nr_budynku.textContent = `${adres.Nr_budynku}` 

const card_Nr_lokalu = document.createElement('div')
card_Nr_lokalu.setAttribute('class', 'data_boxWyszukajAdresu')
card_Nr_lokalu.textContent = `${adres.Nr_lokalu}` 

//const Nr_lokalu = document.createElement('p')
//Nr_lokalu.textContent = `${adres.Nr_lokalu}` 

const card_Kod_pocztowy = document.createElement('div')
card_Kod_pocztowy.setAttribute('class', 'data_boxWyszukajAdresu')
card_Kod_pocztowy.textContent = `${adres.Kod_pocztowy}` 

//const Kod_pocztowy = document.createElement('p')
//Kod_pocztowy.textContent = `${adres.Kod_pocztowy}` 

const card_Gmina = document.createElement('div')
card_Gmina.setAttribute('class', 'data_boxWyszukajAdresu')
card_Gmina.textContent = `${adres.Gmina}` 

//const Gmina = document.createElement('p')
//Gmina.textContent = `${adres.Gmina}` 

const card_Powiat = document.createElement('div')
card_Powiat.setAttribute('class', 'data_boxWyszukajAdresu')
card_Powiat.textContent = `${adres.Powiat}` 

//const Powiat = document.createElement('p')
//Powiat.textContent = `${adres.Powiat}` 

const card_Wojewodztwo = document.createElement('div')
card_Wojewodztwo.setAttribute('class', 'data_boxWyszukajAdresu')
card_Wojewodztwo.textContent = `${adres.Wojewodztwo}` 

//const Wojewodztwo = document.createElement('p')
//Wojewodztwo.textContent = `${adres.Wojewodztwo}` 

const card_Kraj= document.createElement('div')
card_Kraj.setAttribute('class', 'data_boxWyszukajAdresu')
card_Kraj.textContent = `${adres.Kraj}` 

//const Kraj = document.createElement('p')
//Kraj.textContent = `${adres.Kraj}` 

const card_Nr_telefonu = document.createElement('div')
card_Nr_telefonu.setAttribute('class', 'data_boxWyszukajAdresu')
card_Nr_telefonu.textContent = `${adres.Nr_telefonu }` 

//const Nr_telefonu  = document.createElement('p')
//Nr_telefonu.textContent = `${adres.Nr_telefonu }` 

const card_Email = document.createElement('div')
card_Email.setAttribute('class', 'data_boxWyszukajAdresu')
card_Email.textContent = `${adres.Email}` 

//const Email  = document.createElement('p')
//Email.textContent = `${adres.Email}` 


//Button pokaz szczegoly i usuń
const card_btn = document.createElement('div')
card_btn.setAttribute('class', 'data_boxWyszukajAdresuIMG')

const img_delete = document.createElement('img')
img_delete.src = 'delete.png'
img_delete.setAttribute('class', 'icons')
img_delete.title = "Usuń"

const img_edit = document.createElement('img')
img_edit.src = 'edit.png'
img_edit.setAttribute('class', 'icons')
img_edit.title = "Edytuj"

const remove_btn = document.createElement('a')
remove_btn.href = `javascript:void(0)` 
remove_btn.setAttribute('onclick', `DeleteAdresWyszukaj(${adres.Id_adresu})`)
remove_btn.setAttribute('class', 'buttonIMG')
remove_btn.appendChild(img_delete)
//remove_btn.textContent = `Usuń` 

const update_btn = document.createElement('a')
update_btn.href = `javascript:void(0)` 
update_btn.setAttribute('onclick', `UpdateAdresWyszukaj(${adres.Id_adresu})`)
update_btn.setAttribute('class', 'buttonIMG')
update_btn.appendChild(img_edit)
//update_btn.textContent = `Edytuj` 

adres_container.appendChild(card)

card.appendChild(card_id)
card.appendChild(card_Id_kontrahenta)
card.appendChild(card_Rodzaj)
card.appendChild(card_Ulica)
card.appendChild(card_Miejscowosc)
card.appendChild(card_Nr_budynku)
card.appendChild(card_Nr_lokalu)
card.appendChild(card_Kod_pocztowy)
card.appendChild(card_Gmina)
card.appendChild(card_Powiat)
card.appendChild(card_Wojewodztwo)
card.appendChild(card_Kraj)
card.appendChild(card_Nr_telefonu)
card.appendChild(card_Email)
card.appendChild(card_btn)
//card_id.appendChild(Id)
//card_Id_kontrahenta.appendChild(Id_Kontrahenta)
///card_Rodzaj.appendChild(RodzajAdresu)
//card_Ulica.appendChild(Ulica)
//card_Miejscowosc.appendChild(Miejscowosc)
//card_Nr_budynku.appendChild(Nr_budynku)
//card_Nr_lokalu.appendChild(Nr_lokalu)
//card_Kod_pocztowy.appendChild(Kod_pocztowy)
//card_Gmina.appendChild(Gmina)
//card_Powiat.appendChild(Powiat)
//card_Wojewodztwo.appendChild(Wojewodztwo)
//card_Kraj.appendChild(Kraj)
///card_Nr_telefonu.appendChild(Nr_telefonu)
//card_Email.appendChild(Email)
//card_btn.appendChild(info_btn)
card_btn.appendChild(remove_btn)
card_btn.appendChild(document.createElement('br'))
card_btn.appendChild(update_btn)

}));

}


function GlobalSerachGenerujElementyOsobKontaktowych()
{

 const osoba_container = document.createElement('div')
 osoba_container.setAttribute('class', 'container_scrollable')
 osoba_container.id = "container_scrollable2"
         
const card_strings = document.createElement('div')
card_strings.setAttribute('class', 'cardScrollableOsoby')
card_strings.id = 'card_strings'

const adres_subTitle = document.createElement('h2')
adres_subTitle.textContent = 'Osoby kontaktowe: '

const card_id_string  = document.createElement('div')
card_id_string.setAttribute('class', 'data_box_string_scrollableOsoby')

const Id_string = document.createElement('p')
Id_string.textContent = `Id Osoby Kontaktowej` 

const card_Id_stanowiska_string = document.createElement('div')
card_Id_stanowiska_string.setAttribute('class', 'data_box_string_scrollableOsoby')

const Id_stanowiska_string = document.createElement('p')
Id_stanowiska_string.textContent = `Id Stanowiska` 

const card_Imie_string = document.createElement('div')
card_Imie_string.setAttribute('class', 'data_box_string_scrollableOsoby')

const Imie_string = document.createElement('p')
Imie_string.textContent = `Imie` 

const card_Nazwisko_string = document.createElement('div')
card_Nazwisko_string.setAttribute('class', 'data_box_string_scrollableOsoby')

const Nazwisko_string = document.createElement('p')
Nazwisko_string.textContent = `Nazwisko` 

const card_Nr_telefonu_string = document.createElement('div')
card_Nr_telefonu_string.setAttribute('class', 'data_box_string_scrollableOsoby')

const Nr_telefonu_string = document.createElement('p')
Nr_telefonu_string.textContent = `Nr Telefonu` 

const card_Email_string = document.createElement('div')
card_Email_string.setAttribute('class', 'data_box_string_scrollableOsoby')

const Email_string = document.createElement('p')
Email_string.textContent = `Email` 

const card_btn_empty = document.createElement('div')
card_btn_empty.setAttribute('class', 'data_box_string_scrollableOsoby')


container.appendChild(osoba_container)
osoba_container.appendChild(card_strings)

osoba_container.prepend(adres_subTitle)
//card_strings.appendChild(document.createElement('br'))
card_strings.appendChild(card_id_string)
card_strings.appendChild(card_Id_stanowiska_string)
card_strings.appendChild(card_Imie_string)
card_strings.appendChild(card_Nazwisko_string)
card_strings.appendChild(card_Nr_telefonu_string)
card_strings.appendChild(card_Email_string)
card_strings.appendChild(card_btn_empty)

card_id_string.appendChild(Id_string)
card_Id_stanowiska_string.appendChild(Id_stanowiska_string)
card_Imie_string.appendChild(Imie_string)
card_Nazwisko_string.appendChild(Nazwisko_string)
card_Nr_telefonu_string.appendChild(Nr_telefonu_string)
card_Email_string.appendChild(Email_string)

var serachBoxValue = document.getElementById("inputSerachString").value;
if(serachBoxValue == '' || serachBoxValue == null)
{serachUrl = 'http://slimapp/api/osoba_kontaktowa'}
else
{serachUrl = 'http://slimapp/api/osoba_kontaktowa/wyszukaj/'+document.getElementById("inputSerachString").value}


fetch(serachUrl)
.then(response => response.json())
.then(data => data.forEach((osoba) => {

// Create a div with a card class
const card = document.createElement('div')
card.setAttribute('class', 'cardScrollableOsoby')
card.id = 'OsobaCard_'+osoba.Id_osoby_kontaktowej

const card_id = document.createElement('div')
card_id.setAttribute('class', 'data_boxWyszukajOsoby')
card_id.textContent = `${osoba.Id_osoby_kontaktowej}` 

//const Id = document.createElement('p')
//Id.textContent = `${osoba.Id_osoby_kontaktowej}` 

const card_Id_stanowiska = document.createElement('div')
card_Id_stanowiska.setAttribute('class', 'data_boxWyszukajOsoby')
card_Id_stanowiska.textContent = `${osoba.Id_stanowiska}` 

//const Id_stanowiska = document.createElement('p')
//Id_stanowiska.textContent = `${osoba.Id_stanowiska}` 

const card_Imie = document.createElement('div')
card_Imie.setAttribute('class', 'data_boxWyszukajOsoby')
card_Imie.textContent = `${osoba.Imie}` 

//const Imie = document.createElement('p')
//Imie.textContent = `${osoba.Imie}` 

const card_Nazwisko = document.createElement('div')
card_Nazwisko.setAttribute('class', 'data_boxWyszukajOsoby')
card_Nazwisko.textContent = `${osoba.Nazwisko}` 

//const Nazwisko= document.createElement('p')
//Nazwisko.textContent = `${osoba.Nazwisko}` 

const card_Nr_telefonu = document.createElement('div')
card_Nr_telefonu.setAttribute('class', 'data_boxWyszukajOsoby')
card_Nr_telefonu.textContent = `${osoba.Nr_telefonu}` 

//const Nr_telefonu = document.createElement('p')
//Nr_telefonu.textContent = `${osoba.Nr_telefonu}` 

const card_Email = document.createElement('div')
card_Email.setAttribute('class', 'data_boxWyszukajOsoby')
card_Email.textContent = `${osoba.Email }` 

//const Email = document.createElement('p')
//Email.textContent = `${osoba.Email }` 


//Button pokaz szczegoly i usuń
const card_btn = document.createElement('div')
card_btn.setAttribute('class', 'data_boxWyszukajOsobyIMG')

const img_delete = document.createElement('img')
img_delete.src = 'delete.png'
img_delete.setAttribute('class', 'icons')
img_delete.title = "Usuń"

const img_edit = document.createElement('img')
img_edit.src = 'edit.png'
img_edit.setAttribute('class', 'icons')
img_edit.title = "Edytuj"

const remove_btn = document.createElement('a')
remove_btn.href = `javascript:void(0)` 
remove_btn.setAttribute('onclick', `DeleteOsobaKontaktowaWyszukaj(${osoba.Id_osoby_kontaktowej})`)
remove_btn.setAttribute('class', 'buttonIMG')
remove_btn.appendChild(img_delete)
//remove_btn.textContent = `Usuń` 

const update_btn = document.createElement('a')
update_btn.href = `javascript:void(0)` 
update_btn.setAttribute('onclick', `UpdateOsobaKontaktowaWyszukaj(${osoba.Id_osoby_kontaktowej})`)
update_btn.setAttribute('class', 'buttonIMG')
update_btn.appendChild(img_edit)
//update_btn.textContent = `Edytuj` 

osoba_container.appendChild(card)

card.appendChild(card_id)
card.appendChild(card_Id_stanowiska)
card.appendChild(card_Imie)
card.appendChild(card_Nazwisko)
card.appendChild(card_Nr_telefonu)
card.appendChild(card_Email)
card.appendChild(card_btn)
//card_id.appendChild(Id)
//card_Id_stanowiska.appendChild(Id_stanowiska)
//card_Imie.appendChild(Imie)
//card_Nazwisko.appendChild(Nazwisko)
//card_Nr_telefonu.appendChild(Nr_telefonu)
//card_Email.appendChild(Email)
//card_btn.appendChild(info_btn)
card_btn.appendChild(remove_btn)
card_btn.appendChild(document.createElement('br'))
card_btn.appendChild(update_btn)

}));

}


function GlobalSerachGenerujElementyStanowisaka()
{
         
const stanowisko_container = document.createElement('div')
stanowisko_container.setAttribute('class', 'container')

const card_strings = document.createElement('div')
card_strings.setAttribute('class', 'card')
card_strings.id = 'card_strings'

const stanowisko_subTitle = document.createElement('h2')
stanowisko_subTitle.textContent = 'Stanowiska: '

const card_id_string  = document.createElement('div')
card_id_string.setAttribute('class', 'data_box_string')

const Id_string = document.createElement('p')
Id_string.textContent = `Id Stanowiska` 

const card_nazwaStanowiska_string = document.createElement('div')
card_nazwaStanowiska_string.setAttribute('class', 'data_box_string')

const NazwaStanowiska_string = document.createElement('p')
NazwaStanowiska_string.textContent = `Nazwa Stanowiska` 

const card_btn_empty = document.createElement('div')
card_btn_empty.setAttribute('class', 'data_box_empty')

const card_btn_empty2 = document.createElement('div')
card_btn_empty2.setAttribute('class', 'data_box_empty')

const card_btn_empty3 = document.createElement('div')
card_btn_empty3.setAttribute('class', 'data_box_empty')

container.appendChild(stanowisko_container)
stanowisko_container.appendChild(card_strings)

stanowisko_container.prepend(stanowisko_subTitle)
card_strings.appendChild(card_id_string)
card_strings.appendChild(card_nazwaStanowiska_string)
card_strings.appendChild(card_btn_empty)
card_strings.appendChild(card_btn_empty2)
card_strings.appendChild(card_btn_empty3)

card_id_string.appendChild(Id_string)
card_nazwaStanowiska_string.appendChild(NazwaStanowiska_string)

var serachBoxValue = document.getElementById("inputSerachString").value;
if(serachBoxValue == '' || serachBoxValue == null)
{serachUrl = 'http://slimapp/api/stanowisko'}
else
{serachUrl = 'http://slimapp/api/stanowisko/wyszukaj/'+document.getElementById("inputSerachString").value}

fetch(serachUrl)
.then(response => response.json())
.then(data => data.forEach((stanowisko) => {

// Create a div with a card class
const card = document.createElement('div')
card.setAttribute('class', 'card')
card.id = 'StanowiskoCard_'+stanowisko.Id_stanowiska

const card_id = document.createElement('div')
card_id.setAttribute('class', 'data_box')
card_id.textContent = `${stanowisko.Id_stanowiska}` 

//const Id = document.createElement('p')
//Id.textContent = `${stanowisko.Id_stanowiska}` 

const card_nazwaStanowiska = document.createElement('div')
card_nazwaStanowiska.setAttribute('class', 'data_box')
card_nazwaStanowiska.textContent = `${stanowisko.Nazwa_stanowiska}` 

//const NazwaStanowiska= document.createElement('p')
//NazwaStanowiska.textContent = `${stanowisko.Nazwa_stanowiska}` 

const card_btn_empty4 = document.createElement('div')
card_btn_empty4.setAttribute('class', 'data_box_empty')

const card_btn_empty5 = document.createElement('div')
card_btn_empty5.setAttribute('class', 'data_box_empty')

//Button pokaz szczegoly i usuń
const card_btn = document.createElement('div')
card_btn.setAttribute('class', 'data_box_icons')

const img_delete = document.createElement('img')
img_delete.src = 'delete.png'
img_delete.setAttribute('class', 'icons')
img_delete.title = "Usuń"

const img_edit = document.createElement('img')
img_edit.src = 'edit.png'
img_edit.setAttribute('class', 'icons')
img_edit.title = "Edytuj"

const remove_btn = document.createElement('a')
remove_btn.href = `javascript:void(0)` 
remove_btn.setAttribute('onclick', `DeleteStanowisko(${stanowisko.Id_stanowiska})`)
remove_btn.setAttribute('class', 'buttonIMG')
remove_btn.appendChild(img_delete)
//remove_btn.textContent = `Usuń` 

const update_btn = document.createElement('a')
update_btn.href = `javascript:void(0)` 
update_btn.setAttribute('onclick', `UpdateStanowiskoWyszukaj(${stanowisko.Id_stanowiska})`)
update_btn.setAttribute('class', 'buttonIMG')
update_btn.appendChild(img_edit)
//update_btn.textContent = `Edytuj` 

stanowisko_container.appendChild(card)

card.appendChild(card_id)
card.appendChild(card_nazwaStanowiska)
card.appendChild(card_btn)
card.appendChild(card_btn_empty4)
card.appendChild(card_btn_empty5)
//card_id.appendChild(Id)
//card_nazwaStanowiska.appendChild(NazwaStanowiska)
//card_btn.appendChild(info_btn)
card_btn.appendChild(remove_btn)
card_btn.appendChild(update_btn)

}));

}

function ReturnToStart()
{
    setTimeout("location.reload(true);");
}



function GetSerachBoxResult(przeszukiwanaTabela)
{
   var string_data = document.getElementById('inputSerachString').value;
 if(przeszukiwanaTabela == 'kontrahent')
 {  
   if(string_data == null || string_data == '')
   {
    GetKontrahenci('http://slimapp/api/kontrahent')
   }
   else
   {
    GetKontrahenci('http://slimapp/api/kontrahent/wyszukaj/'+string_data)
   }
 }
 else if(przeszukiwanaTabela == 'adres')
 {
    if(string_data == null || string_data == '')
    {
     ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/kontrahent')
    }
    else
    {
     ShowData(IdSprawdzanegoKontrahenta,'http://slimapp/api/adres/wyszukaj/'+string_data)
    }
 }
}

//PobierzDaneOFakturach();

function PobierzFaktury(id_kontrahenta)
{

  if(document.getElementById('PobranaFaktura'))
  {
    var tempStartDate =  document.getElementById("start_date").value
    var tempEndDate =  document.getElementById("end_date").value
    PokazSekcjeFaktur(id_kontrahenta);
    PokazSekcjeFaktur(id_kontrahenta);
    document.getElementById("start_date").value = tempStartDate
    document.getElementById("end_date").value = tempEndDate
  }


  var data_start  = document.getElementById("start_date").value
  var data_end = document.getElementById("end_date").value
  var NIP_kontrahenta = 0;

  //alert(id_kontrahenta+' daty: '+data_start+' : '+data_end)

  fetch('http://slimapp/api/kontrahent/'+id_kontrahenta)
  .then(response => response.json())
  .then(data => data.forEach((kontrahent) => {

    NIP_kontrahenta = kontrahent.NIP;

    //http://localhost:3000/1231231231?termin_platnosci_gte=2019-01-01&termin_platnosci_lte=2021-05-01
   // pobranie danych z modułu zarządzania fakturami.../ mockowanie
 //  console.log('http://localhost:3000/'+NIP_kontrahenta+'?termin_platnosci_gte='+data_start+'&termin_platnosci_lte='+data_end)

        fetch('http://localhost:3000/'+NIP_kontrahenta+'?termin_platnosci_gte='+data_start+'&termin_platnosci_lte='+data_end)
        .then(response => response.json())
        .then(faktury => {

              //Deklaracja zmiennych
              var liczba_faktur = 0;
              var liczba_faktur_nieoplaconych = 0;
              var liczba_faktur_oplaconych = 0;
              var liczba_faktur_po_terminie_platnosci = 0;

              var uregulowane_naleznosci = 0;
              var suma_naleznosci_z_wystawionych_faktur = 0;
              var suma_naleznosci_z_faktur_przed_terminem_platnosci = 0;
              var suma_naleznosci_z_faktur_po_terminie_platnosci = 0;

              var today = new Date();
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = today.getFullYear();

              today = yyyy + '-' + mm + '-' + dd;
              //console.log(today);

              var licznik_petli = 0;
              console.log(faktury);

              //Rozpoczęcie pętli 
              while(licznik_petli < faktury.length)
              {

                const containerForFaktury = document.getElementById('containerForFaktury')

                const card_2 = document.createElement('div')
                card_2.id = 'PobranaFaktura'
                card_2.setAttribute('class', 'containerOsoba')

                const card_Faktura_Data = document.createElement('div')
                card_Faktura_Data.setAttribute('class', 'cardNoBorderOsoba')
                card_Faktura_Data.id = 'faktura'

                containerForFaktury.appendChild(card_2)
                card_2.appendChild(card_Faktura_Data)

                const card_Id = document.createElement('div')
                card_Id.id = 'ID_'+faktury[licznik_petli]["id"] 
                card_Id.setAttribute('class', 'cardOsoba')
                const card_Id_string = document.createElement('p')
                card_Id_string.textContent = 'ID: '+faktury[licznik_petli]["id"] 
                
                card_Faktura_Data.appendChild(card_Id)
                card_Id.appendChild(card_Id_string)

                const card_Numer_faktury = document.createElement('div')
                card_Numer_faktury.id = 'NumerFaktury_'+faktury[licznik_petli]["id"] 
                card_Numer_faktury.setAttribute('class', 'cardOsoba')
                const card_Numer_faktury_string = document.createElement('p')
                card_Numer_faktury_string.textContent = 'Numer Faktury: '+faktury[licznik_petli]["numer_faktury"] 
                
                card_Faktura_Data.appendChild(card_Numer_faktury)
                card_Numer_faktury.appendChild(card_Numer_faktury_string)

                const card_NIP = document.createElement('div')
                card_NIP.id = 'NIP_'+faktury[licznik_petli]["id"] 
                card_NIP.setAttribute('class', 'cardOsoba')
                const card_NIP_string = document.createElement('p')
                card_NIP_string.textContent = 'NIP: '+faktury[licznik_petli]["nip"] 
                
                card_Faktura_Data.appendChild(card_NIP)
                card_NIP.appendChild(card_NIP_string)

                const card_Status = document.createElement('div')
                card_Status.id = 'Status_'+faktury[licznik_petli]["id"] 
                card_Status.setAttribute('class', 'cardOsoba')
                const card_Status_string = document.createElement('p')
                card_Status_string.textContent = 'Status: '+faktury[licznik_petli]["status"] 
                
                card_Faktura_Data.appendChild(card_Status)
                card_Status.appendChild(card_Status_string)

                const card_Termin = document.createElement('div')
                card_Termin.id = 'TerminPlatnosci_'+faktury[licznik_petli]["id"] 
                card_Termin.setAttribute('class', 'cardOsoba')
                const card_Termin_string = document.createElement('p')
                card_Termin_string.textContent = 'Termin Płatności: '+faktury[licznik_petli]["termin_platnosci"] 
                
                card_Faktura_Data.appendChild(card_Termin)
                card_Termin.appendChild(card_Termin_string)

                const card_Wartosc = document.createElement('div')
                card_Wartosc.id = 'Wartosc_'+faktury[licznik_petli]["id"] 
                card_Wartosc.setAttribute('class', 'cardOsoba')
                const card_Wartosc_string = document.createElement('p')
                card_Wartosc_string.textContent = 'Wartość Brutto: '+faktury[licznik_petli]["wartosc_faktury_brutto"]+' PLN'
                
                card_Faktura_Data.appendChild(card_Wartosc)
                card_Wartosc.appendChild(card_Wartosc_string)


                if(faktury[licznik_petli]["termin_platnosci"] < today)
                {
                //  console.log('weszlo');
                  if(faktury[licznik_petli]["status"] == "oplacona")
                  {
                  //  console.log('weszlo');
                    liczba_faktur_oplaconych += 1;
                    liczba_faktur_po_terminie_platnosci +=1;
                    uregulowane_naleznosci += parseFloat(faktury[licznik_petli]["wartosc_faktury_brutto"]);
                  }
                  else
                  {
                    liczba_faktur_nieoplaconych += 1;
                    liczba_faktur_po_terminie_platnosci += 1;
                    suma_naleznosci_z_faktur_po_terminie_platnosci += parseFloat(faktury[licznik_petli]["wartosc_faktury_brutto"]);
                  }
                }
                else
                {
                  if(faktury[licznik_petli]["status"] == "oplacona")
                  {
                  //  console.log('weszlo');
                    liczba_faktur_oplaconych += 1;
                    uregulowane_naleznosci += parseFloat(faktury[licznik_petli]["wartosc_faktury_brutto"]);
                  }
                  else
                  {
                    liczba_faktur_nieoplaconych += 1;
                    suma_naleznosci_z_faktur_przed_terminem_platnosci += parseFloat(faktury[licznik_petli]["wartosc_faktury_brutto"]);
                  }
                }

                licznik_petli += 1;
              
   
                }
                //Obliczenia
                liczba_faktur = liczba_faktur_oplaconych + liczba_faktur_nieoplaconych;
                suma_naleznosci_z_wystawionych_faktur = suma_naleznosci_z_faktur_po_terminie_platnosci + suma_naleznosci_z_faktur_przed_terminem_platnosci;


                const fakturaMainCard = document.getElementById('fakturaMain')

                const daneFakturowe = document.createElement('div')
                daneFakturowe.setAttribute('class','cardOsoba2')

                fakturaMainCard.appendChild(daneFakturowe)

                const liczbaFaktur = document.createElement('p')
                liczbaFaktur.textContent = 'Liczba faktur: '+liczba_faktur
                liczbaFaktur.setAttribute('class', 'p_faktury')
                
                const liczbaFakturOplaconych = document.createElement('p')
                liczbaFakturOplaconych.textContent = 'Liczba faktur opłaconych: '+liczba_faktur_oplaconych
                liczbaFakturOplaconych.setAttribute('class', 'p_faktury')

                const liczbaFakturNieoplaconych = document.createElement('p')
                liczbaFakturNieoplaconych.textContent = 'Liczba faktur nieopłaconych: '+liczba_faktur_nieoplaconych
                liczbaFakturNieoplaconych.setAttribute('class', 'p_faktury')
                
                const liczbaFakturPoTerminie = document.createElement('p')
                liczbaFakturPoTerminie.textContent = 'Liczba faktur po terminie płatności: '+liczba_faktur_po_terminie_platnosci
                liczbaFakturPoTerminie.setAttribute('class', 'p_faktury')

                const uregulowaneNaleznosci= document.createElement('p')
                uregulowaneNaleznosci.textContent = 'Uregulowane należności: '+uregulowane_naleznosci+' PLN'
                uregulowaneNaleznosci.setAttribute('class', 'p_faktury')

                const SumeNaleznosci= document.createElement('p')
                SumeNaleznosci.textContent = 'Nieuregulowane należności: '+suma_naleznosci_z_wystawionych_faktur+' PLN'
                SumeNaleznosci.setAttribute('class', 'p_faktury')

                const SumeNaleznosciPoTerminie= document.createElement('p')
                SumeNaleznosciPoTerminie.textContent = 'Należności z faktur po terminie płatności: '+suma_naleznosci_z_faktur_po_terminie_platnosci +' PLN'
                SumeNaleznosciPoTerminie.setAttribute('class', 'p_faktury')

                const SumeNaleznosciPrzedTerminem = document.createElement('p')
                SumeNaleznosciPrzedTerminem.textContent = 'Należności z faktur przed terminem płatności: '+suma_naleznosci_z_faktur_przed_terminem_platnosci+' PLN'
                SumeNaleznosciPrzedTerminem.setAttribute('class', 'p_faktury')

                daneFakturowe.appendChild(liczbaFaktur)
                daneFakturowe.appendChild(liczbaFakturOplaconych)
                daneFakturowe.appendChild(liczbaFakturNieoplaconych)
                daneFakturowe.appendChild(liczbaFakturPoTerminie)
                daneFakturowe.appendChild(uregulowaneNaleznosci)
                daneFakturowe.appendChild(SumeNaleznosci)
                daneFakturowe.appendChild(SumeNaleznosciPoTerminie)
                daneFakturowe.appendChild(SumeNaleznosciPrzedTerminem)

          //    console.log("Liczba faktur: "+liczba_faktur);
           //   console.log("Liczba faktur opłaconych: "+liczba_faktur_oplaconych);
           //   console.log("Liczba faktur nie opłaconych: "+liczba_faktur_nieoplaconych);
           //   console.log("Liczba faktur po terminie płatności: "+liczba_faktur_po_terminie_platnosci);
           //   console.log("Uregulowane należności: "+uregulowane_naleznosci);
           //   console.log("Nieuregulowane należności: "+suma_naleznosci_z_wystawionych_faktur);
           //   console.log("Suma należności z faktur po terminie płatnopści: "+suma_naleznosci_z_faktur_po_terminie_platnosci);
           //   console.log("Suma należności z faktur przed terminem płatności: "+suma_naleznosci_z_faktur_przed_terminem_platnosci);

                        
                    
          
        });

   
  }));


  //Utworzenie przykładowego objektu json
 /* var dane = '[' +
  '{  "ID": "1", "Numer_faktury": "123321", "NIP": "11111111111", "Status": "oplacona",  "Termin_platnosci": "2019-07-13","Wartosc_faktury_brutto": "1309.89" },' +
  '{  "ID": "13", "Numer_faktury": "232312", "NIP": "11111111111", "Status": "nie_oplacona", "Termin_platnosci": "2020-09-16", "Wartosc_faktury_brutto": "1109.50"},' +
  '{  "ID": "7", "Numer_faktury": "666566", "NIP": "11111111111","Status": "nie_oplacona", "Termin_platnosci": "2020-07-06", "Wartosc_faktury_brutto": "675.00" },'+
  '{  "ID": "34", "Numer_faktury": "909090", "NIP": "11111111111","Status": "nie_oplacona", "Termin_platnosci": "2021-01-25", "Wartosc_faktury_brutto": "10000.00" },'+
  '{  "ID": "3","Numer_faktury": "131412",  "NIP": "11111111111",  "Status": "oplacona",  "Termin_platnosci": "2020-03-24", "Wartosc_faktury_brutto": "231.99"}]';
*/
  





 //  console.log(obj);

  //Przykladowy json:
/*
  [
    {
    "ID": "1",
    "Numer_faktury": "123321",
    "NIP": "11111111111",
    "Status": "oplacona",
    "Termin_platnosci": "2019-07-13",
    "Wartosc_faktury_brutto": "1309.89"
    }

    {
    "ID": "13",
    "Numer_faktury": "232312",
    "NIP": "11111111111",
    "Status": "nie_oplacona",
    "Termin_platnosci": "2020-09-16",
    "Wartosc_faktury_brutto": "1109.50"
    }

    {
    "ID": "7",
    "Numer_faktury": "666566",
    "NIP": "11111111111",
    "Status": "nie_oplacona",
    "Termin_platnosci": "2020-07-06",
    "Wartosc_faktury_brutto": "675.00"
    }

    {
    "ID": "3",
    "Numer_faktury": "131412",
    "NIP": "11111111111",
    "Status": "oplacona",
    "Termin_platnosci": "2020-03-24",
    "Wartosc_faktury_brutto": "231.99"
    }
  ]

*/



  
}

  /*fetch('http://slimapp/api/kontrahent')
  .then(response => response.json())
 // .then(data => console.log(data[0]["Nazwa"]));
  .then(data => console.log(JSON.stringify(data)));*/

  //Getting single Kontrahent
 /* fetch('http://slimapp/api/kontrahent')
  .then(response => response.json())
  .then(data => console.log(data));

    //Getting all Adresy
    fetch('http://slimapp/api/adres')
    .then(response => response.json())
    .then(data => console.log(data));
 
 //Getting all Adresy for selected kontrahent
 fetch('http://slimapp/api/adres/kontrahent/'+x)
 .then(response => response.json())
 .then(data => console.log(data));
*/
   // api/adres/kontrahent/{Id_kontrahenta}

  //Adding new Adres
  /*const data = { 
     Id_kontrahenta: "25",
     Rodzaj: "Oddzial",
     Ulica: "Najlepsza",
     Miejscowosc: "rr",
     Nr_budynku: "22",
     Nr_lokalu: "",
     Kod_pocztowy: "12123",
     Gmina: "rr",
     Powiat: "rr",
     Wojewodztwo: "rr",
     Kraj: "rr",
     Nr_telefonu: "11111111",
     Email: "22222222"
     };

     fetch('http://slimapp/api/adres/add', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
      .then(data => console.log(data));
*/
/*
 //Adding new Kontrahent
  const data = { 
    Nazwa: "ddd",
    NIP: "1231231231",
    Typ_kontrahenta: "Odbiorca"
     };

fetch('http://slimapp/api/kontrahent/add', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(response => response.json())
.then(data => console.log(data));

*/
/*
//Updating kontrahent
const data = { 
    Nazwa: "SuperFajnieDziala",
     };

fetch('http://slimapp/api/kontrahent/update/21', {
  method: 'PUT', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(response => response.json())
.then(data => console.log(data));
*/

/*
//Delete kontrahent
fetch('http://slimapp/api/kontrahent/delete/25', {
  method: 'DELETE', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
}).then(response => response.json())
.then(data => console.log(data));
*/



/*npm run json:server */