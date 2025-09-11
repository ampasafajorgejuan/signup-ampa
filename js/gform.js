// Check the FORM ID
var Google_Form_Link="https://docs.google.com/forms/d/e/1FAIpQLSeOu6TqsBxklYOL0UE3rxCj3K1sc-UPTN0XKP3kbu1IlcXXGA/formResponse?"

let gFields = {
  gNif: 'entry.960287312',
  gIsAMPA: 'entry.938509647',
  gInscripcion: 'entry.741987017',
  gIban: 'entry.1915016763',
  gBIC: 'entry.395867292',
  gFechaAlta: 'entry.1158143922',
  gCurso: 'entry.1537899985',
  gEmail1: 'entry.1135996967',
  gEmail2: 'entry.1503895539',
  gNombreApellido: 'entry.81299887',
  gTitular: 'entry.1329594193'
};




function addForm(myForm) {

  var hIframe = document.createElement('iframe');
  hIframe.name=myForm+"_target";
  hIframe.id=myForm+"_target";
  hIframe.style="display:none;";
  document.body.appendChild(hIframe);

  var form = document.createElement('form');
  form.action = Google_Form_Link ;
  form.id = myForm ;
  form.target=myForm+"_target";

  for (let clave in gFields) {
    if (gFields.hasOwnProperty(clave)) {
  	addInput(form, myForm+clave, gFields[clave]);
    }
  }

  document.body.appendChild(form);

}

function addInput(myForm, alias, myInput) {
const input = document.createElement('input');
input.id = alias;
input.name = myInput;
input.type = "hidden";
myForm.appendChild(input);
}
