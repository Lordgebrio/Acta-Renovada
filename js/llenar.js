const { PDFDocument } = window.PDFLib;

async function llenarPDFConDatosPersonales() {
  const url = "template.pdf";
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();

  // Obtener valores del formulario HTML
  const nombre = document.getElementById("name").value;
  const cedula = document.getElementById("ID").value;
  const nombreti = document.getElementById("nameTi").value;
  const IDTI = document.getElementById("IDTI").value;

  // Validar que los campos no estén vacíos
  const tipoEquipo = document.getElementById("tipoEquipo").value;
  const marcaEquipo = document.getElementById("marcaEquipo").value;
  const modeloEquipo = document.getElementById("modeloEquipo").value;
  const serial = document.getElementById("serial").value;
  const placa = document.getElementById("placa").value;
  const observaciones = document.getElementById("observaciones").value;

  //Constante para marcar si es asignacion o devolucion
  const estadoSeleccionado = document.getElementById("estado").value;

  if (estadoSeleccionado === "Asignación") {
    form.getCheckBox("asignacion").check();
    form.getCheckBox("devolucion").uncheck();
  } else if (estadoSeleccionado === "Devolución") {
    form.getCheckBox("devolucion").check();
    form.getCheckBox("asignacion").uncheck();
  }

  // Verifica si el checkbox "cargador" está marcado en el formulario
  const cargadorChecked = document.getElementById("cargador").checked;

  if (cargadorChecked) {
    form.getCheckBox("cargadorsi").check();
    form.getCheckBox("cargadorno").uncheck();
  } else {
    form.getCheckBox("cargadorno").check();
    form.getCheckBox("cargadorsi").uncheck();
  }

  // Verifica si el checkbox "mouse" está marcado en el formulario
  const mouseChecked = document.getElementById("mouse").checked;

  if (mouseChecked) {
    form.getCheckBox("mousesi").check();
    form.getCheckBox("mouseno").uncheck();
  } else {
    form.getCheckBox("mouseno").check();
    form.getCheckBox("mousesi").uncheck();
  }

  // Verifica si el checkbox "teclado" está marcado en el formulario
  const tecladoChecked = document.getElementById("teclado").checked;

  if (tecladoChecked) {
    form.getCheckBox("tecladosi").check();
    form.getCheckBox("tecladono").uncheck();
  } else {
    form.getCheckBox("tecladono").check();
    form.getCheckBox("tecladosi").uncheck();
  }

  // Verifica si el checkbox "morral" está marcado en el formulario
  const morralChecked = document.getElementById("morral").checked;

  if (morralChecked) {
    form.getCheckBox("morralsi").check();
    form.getCheckBox("morralno").uncheck();
  } else {
    form.getCheckBox("morralno").check();
    form.getCheckBox("morralsi").uncheck();
  }

  // Verifica si el checkbox "forro" está marcado en el formulario
  const forroChecked = document.getElementById("forro").checked;

  if (forroChecked) {
    form.getCheckBox("forrosi").check();
    form.getCheckBox("forrono").uncheck();
  } else {
    form.getCheckBox("forrono").check();
    form.getCheckBox("forrosi").uncheck();
  }

  // Verifica si el checkbox "base" está marcado en el formulario
  const baseChecked = document.getElementById("base").checked;

  if (baseChecked) {
    form.getCheckBox("basesi").check();
    form.getCheckBox("baseno").uncheck();
  } else {
    form.getCheckBox("baseno").check();
    form.getCheckBox("basesi").uncheck();
  }

  // Verifica si el checkbox "soporte" está marcado en el formulario
  const soporteChecked = document.getElementById("soporte").checked;

  if (soporteChecked) {
    form.getCheckBox("soportesi").check();
    form.getCheckBox("soporteno").uncheck();
  } else {
    form.getCheckBox("soporteno").check();
    form.getCheckBox("soportesi").uncheck();
  }

  // Verifica si el checkbox "office" está marcado en el formulario
  const officeChecked = document.getElementById("office").checked;

  if (officeChecked) {
    form.getCheckBox("officesi").check();
    form.getCheckBox("officeno").uncheck();
  } else {
    form.getCheckBox("officeno").check();
    form.getCheckBox("officesi").uncheck();
  }

  // Verifica si el checkbox "antivirus" está marcado en el formulario
  const antivirusChecked = document.getElementById("antivirus").checked;

  if (antivirusChecked) {
    form.getCheckBox("antivirussi").check();
    form.getCheckBox("antivirusno").uncheck();
  } else {
    form.getCheckBox("antivirusno").check();
    form.getCheckBox("antivirussi").uncheck();
  }

  // Verifica si el checkbox "impresora" está marcado en el formulario
  const impresoraChecked = document.getElementById("impresora").checked;

  if (impresoraChecked) {
    form.getCheckBox("impresorasi").check();
    form.getCheckBox("impresorano").uncheck();
  } else {
    form.getCheckBox("impresorano").check();
    form.getCheckBox("impresorasi").uncheck();
  }

  // Verifica si el checkbox "softphone" está marcado en el formulario
  const softphoneChecked = document.getElementById("softphone").checked;

  if (softphoneChecked) {
    form.getCheckBox("softphonesi").check();
    form.getCheckBox("softphoneno").uncheck();
  } else {
    form.getCheckBox("softphoneno").check();
    form.getCheckBox("softphonesi").uncheck();
  }

  // Verifica si el checkbox "google" está marcado en el formulario
  const googleChecked = document.getElementById("google").checked;

  if (googleChecked) {
    form.getCheckBox("googlesi").check();
    form.getCheckBox("googleno").uncheck();
  } else {
    form.getCheckBox("googleno").check();
    form.getCheckBox("googlesi").uncheck();
  }

  // Verifica si el checkbox "winrar" está marcado en el formulario
  const winrarChecked = document.getElementById("winrar").checked;

  if (winrarChecked) {
    form.getCheckBox("winrarsi").check();
    form.getCheckBox("winrarno").uncheck();
  } else {
    form.getCheckBox("winrarno").check();
    form.getCheckBox("winrarsi").uncheck();
  }

  // Verifica si el checkbox "adobe" está marcado en el formulario
  const adobeChecked = document.getElementById("winrar").checked;

  if (adobeChecked) {
    form.getCheckBox("adobesi").check();
    form.getCheckBox("adobeno").uncheck();
  } else {
    form.getCheckBox("adobeno").check();
    form.getCheckBox("adobesi").uncheck();
  }

  // Verifica si el checkbox "foxitreader" está marcado en el formulario
  const foxitreaderChecked = document.getElementById("foxitreader").checked;

  if (foxitreaderChecked) {
    form.getCheckBox("foxitreadersi").check();
    form.getCheckBox("foxitreaderno").uncheck();
  } else {
    form.getCheckBox("foxitreaderno").check();
    form.getCheckBox("foxitreadersi").uncheck();
  }

  // Verifica si el checkbox "sapgui" está marcado en el formulario
  const sapguiChecked = document.getElementById("sapgui").checked;

  if (sapguiChecked) {
    form.getCheckBox("sapguisi").check();
    form.getCheckBox("sapguino").uncheck();
  } else {
    form.getCheckBox("sapguino").check();
    form.getCheckBox("sapguisi").uncheck();
  }

  // Verifica si el checkbox "adobeCloud" está marcado en el formulario
  const adobeCloudChecked = document.getElementById("adobeCloud").checked;

  if (adobeCloudChecked) {
    form.getCheckBox("adobeCloudsi").check();
    form.getCheckBox("adobeCloudno").uncheck();
  } else {
    form.getCheckBox("adobeCloudno").check();
    form.getCheckBox("adobeCloudsi").uncheck();
  }

  // Verifica si el checkbox "7zip" está marcado en el formulario
  const zipChecked = document.getElementById("zip").checked;

  if (zipChecked) {
    form.getCheckBox("zipsi").check();
    form.getCheckBox("zipno").uncheck();
  } else {
    form.getCheckBox("zipno").check();
    form.getCheckBox("zipsi").uncheck();
  }

  // Verifica si el checkbox "forticlient" está marcado en el formulario
  const forticlientChecked = document.getElementById("forticlient").checked;

  if (forticlientChecked) {
    form.getCheckBox("forticlientsi").check();
    form.getCheckBox("forticlientno").uncheck();
  } else {
    form.getCheckBox("forticlientno").check();
    form.getCheckBox("forticlientsi").uncheck();
  }

  // Verifica si el checkbox "teamviewer" está marcado en el formulario
  const teamviewerChecked = document.getElementById("teamviewer").checked;

  if (teamviewerChecked) {
    form.getCheckBox("teamviewersi").check();
    form.getCheckBox("teamviewerno").uncheck();
  } else {
    form.getCheckBox("teamviewerno").check();
    form.getCheckBox("teamviewersi").uncheck();
  }

  // Verifica si el checkbox "sofsin" está marcado en el formulario
  const sofsinChecked = document.getElementById("sofsin").checked;

  if (sofsinChecked) {
    form.getCheckBox("sofsinsi").check();
    form.getCheckBox("sofsinno").uncheck();
  } else {
    form.getCheckBox("sofsinno").check();
    form.getCheckBox("sofsinsi").uncheck();
  }

  // Verifica si el checkbox "usb" está marcado en el formulario
  const usbChecked = document.getElementById("usb").checked;

  if (usbChecked) {
    form.getCheckBox("usbsi").check();
    form.getCheckBox("usbno").uncheck();
  } else {
    form.getCheckBox("usbno").check();
    form.getCheckBox("usbsi").uncheck();
  }

  // Asumiendo que los campos del PDF se llaman 'nombre' y 'ID'
  form.getTextField("name").setText(nombre);
  form.getTextField("ID").setText(cedula);
  form.getTextField("nameTi").setText(nombreti);
  form.getTextField("IDTI").setText(IDTI);

  form.getTextField("tipoEquipo").setText(tipoEquipo);
  form.getTextField("marcaEquipo").setText(marcaEquipo);
  form.getTextField("modeloEquipo").setText(modeloEquipo);
  form.getTextField("serial").setText(serial);
  form.getTextField("placa").setText(placa);
  form.getTextField("observaciones").setText(observaciones);

  const ciudad = document.getElementById("ciudad").value;
  const fechaInput = document.getElementById("fecha").value;
  let fechaFormateada = "";
  if (fechaInput) {
    const [anio, mes, dia] = fechaInput.split("-");
    fechaFormateada = `${dia}/${mes}/${anio}`;
  }
  form.getTextField("ciudad").setText(ciudad);
  form.getTextField("fecha").setText(fechaFormateada);

  // Función auxiliar para insertar imagen en el PDF
  async function setImageFromInput(inputId, buttonName) {
    const input = document.getElementById(inputId);
    if (input && input.files.length > 0) {
      const file = input.files[0];
      const fotoBytes = await file.arrayBuffer();
      let image;
      if (file.type === "image/png") {
        image = await pdfDoc.embedPng(fotoBytes);
      } else if (file.type === "image/jpeg" || file.type === "image/jpg") {
        image = await pdfDoc.embedJpg(fotoBytes);
      } else {
        alert("Formato de imagen no soportado. Usa JPG o PNG.");
        return;
      }
      const formImage = form.getButton(buttonName);
      formImage.setImage(image);
    }
  }

  // Llama la función para cada campo de imagen
  await setImageFromInput("signature", "signature");
  await setImageFromInput("signature2", "signature2");
  await setImageFromInput("signature3", "signature3");

  // Función auxiliar para insertar imagen de un canvas en el PDF
  async function setImageFromCanvas(canvasId, buttonName) {
    const canvas = document.getElementById(canvasId);
    if (canvas) {
      // Obtén la imagen del canvas en formato PNG base64
      const dataUrl = canvas.toDataURL("image/png");
      // Convierte base64 a arrayBuffer
      const response = await fetch(dataUrl);
      const imageBytes = await response.arrayBuffer();
      // Embebe la imagen en el PDF
      const image = await pdfDoc.embedPng(imageBytes);
      // Inserta la imagen en el campo botón del PDF
      const formImage = form.getButton(buttonName);
      formImage.setImage(image);
    }
  }

  // Llama la función para cada firma/canvas
  await setImageFromCanvas("firmaUsuario", "firmaUsuario");
  await setImageFromCanvas("firmaTecnico", "firmaTecnico");

  const pdfBytes = await pdfDoc.save();

  // Descargar el PDF modificado con nombre personalizado
  const serialValue = document.getElementById("serial").value.trim().replace(/\s+/g, "_");
  const nameValue = document.getElementById("name").value.trim().replace(/\s+/g, "_");
  const estadoValue = document.getElementById("estado").value.trim().replace(/\s+/g, "_").toLowerCase();

  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${serialValue}_${nameValue}_${estadoValue}.pdf`;
  link.click();
}

// Puedes llamar a esta función al hacer clic en el botón "Enviar"
document.getElementById("btnEnviar").addEventListener("click", llenarPDFConDatosPersonales);
