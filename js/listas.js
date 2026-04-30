// Opciones para técnicos
const tecnicos = ["Michel Salazar", "Harold Hurtado", "Wilson Pérez"];
const selectTi = document.getElementById("nameTi");
selectTi.innerHTML = '<option value="">Seleccione el Técnico</option>';
tecnicos.forEach((nombre) => {
  const option = document.createElement("option");
  option.value = nombre;
  option.textContent = nombre;
  selectTi.appendChild(option);
});

// Relación tipoEquipo -> marcas y modelos específicos
const equiposPorTipo = {
  CPU: {
    marcas: ["Dell", "HP", "Lenovo", "Acer"],
    modelosPorMarca: {
      Dell: ["OptiPlex 3070", "OptiPlex 3080", "OptiPlex 5070", "OptiPlex 7070", "Vostro 3670"],
      HP: ["EliteDesk 800 G4", "EliteDesk 800 G5", "ProDesk 400 G5", "ProDesk 600 G4"],
      Lenovo: ["ThinkCentre M720", "ThinkCentre M90", "ThinkCentre M710", "IdeaCentre 520"],
      Acer: ["Aspire TC", "Veriton M4620G", "Veriton M480G"],
    },
  },
  Handheld: {
    marcas: ["Zebra", "Honeywell"],
    modelosPorMarca: {
      Zebra: ["TC52", "TC57", "MC3300", "MC9300"],
      Honeywell: ["Dolphin 75e", "Dolphin 99EX", "ScanPal EDA50K"],
    },
  },
  Impresora: {
    marcas: ["HP", "Epson", "Brother", "Canon"],
    modelosPorMarca: {
      HP: ["LaserJet Pro M404n", "LaserJet Enterprise M406", "Color LaserJet Pro M454dn"],
      Epson: ["WorkForce Pro WF-4830", "WorkForce Enterprise WF-M5799"],
      Brother: ["HL-L8360CDW", "MFC-L8610CDW", "HL-L2350DW"],
      Canon: ["imageRUNNER 2425i", "imageCLASS MF445dw"],
    },
  },
  "Impresora portátil": {
    marcas: ["Zebra", "Brother"],
    modelosPorMarca: {
      Zebra: ["ZQ520", "ZQ620", "MC705"],
      Brother: ["RL-700S", "RL-900"],
    },
  },
  Jabra: {
    marcas: ["Jabra"],
    modelosPorMarca: {
      Jabra: ["Evolve 65", "Evolve 85", "Evolve2 85", "Speak 750", "Speak 810"],
    },
  },
  Monitor: {
    marcas: ["Dell", "HP", "LG", "Samsung"],
    modelosPorMarca: {
      Dell: ["U2422H", "U2720Q", "P2423D", "S2722DC"],
      HP: ["E24 G4", "E27 G4", "Z27", "Z32"],
      LG: ["24UP550-W", "27UP550-W", "34UP550-W"],
      Samsung: ["M5 S27BM50", "M7 S32BM70", "ViewFinity S6"],
    },
  },
  Portátil: {
    marcas: ["Dell", "HP", "Lenovo", "Acer", "Asus", "Apple"],
    modelosPorMarca: {
      Dell: ["Latitude 3410", "Latitude 5420", "Latitude 7420", "Inspiron 15 5000"],
      HP: ["ProBook 440 G8", "ProBook 440 G9", "ProBook 440 G10", "ProBook 440 G11", "ProBook 4 G1i 14"],
      Lenovo: ["ThinkPad E14", "ThinkPad E15", "ThinkPad L15", "ThinkPad T14s", "ThinkPad P16v Gen 2"],
      Acer: ["Aspire 5", "TravelMate P4 14", "TravelMate P6 15"],
      Asus: ["VivoBook 15", "ZenBook 14", "ExpertBook B1"],
      Apple: ["MacBook Air M1", "MacBook Air M2", "MacBook Pro 13"],
    },
  },
  Proyector: {
    marcas: ["Epson", "BenQ"],
    modelosPorMarca: {
      Epson: ["PowerLite E20", "PowerLite E30", "PowerLite 2250U", "EB-2250U"],
      BenQ: ["MW535A", "MX535A", "TH671ST", "LH630"],
    },
  },
  Tablet: {
    marcas: ["Apple", "Samsung", "Lenovo"],
    modelosPorMarca: {
      Apple: ["iPad Air 4", "iPad Air 5", "iPad Pro 11", "iPad Pro 12.9"],
      Samsung: ["Galaxy Tab S6", "Galaxy Tab S7", "Galaxy Tab A7", "Galaxy Tab A"],
      Lenovo: ["Tab P11 Pro", "Tab M10", "Tab P12"],
    },
  },
};

const selectTipoEquipo = document.getElementById("tipoEquipo");
const selectMarcaEquipo = document.getElementById("marcaEquipo");
const selectModeloEquipo = document.getElementById("modeloEquipo");

// Llenar opciones para tipo de equipo
selectTipoEquipo.innerHTML = '<option value="">Seleccione el Tipo</option>';
Object.keys(equiposPorTipo).forEach((tipo) => {
  const option = document.createElement("option");
  option.value = tipo;
  option.textContent = tipo;
  selectTipoEquipo.appendChild(option);
});

// Función para actualizar las marcas según el tipo seleccionado
selectTipoEquipo.addEventListener("change", function () {
  const tipoSeleccionado = selectTipoEquipo.value;
  const equipoInfo = equiposPorTipo[tipoSeleccionado];

  selectMarcaEquipo.innerHTML = '<option value="">Seleccione la Marca</option>';
  selectModeloEquipo.innerHTML = '<option value="">Seleccione el Modelo</option>';

  if (equipoInfo) {
    equipoInfo.marcas.forEach((marca) => {
      const option = document.createElement("option");
      option.value = marca;
      option.textContent = marca;
      selectMarcaEquipo.appendChild(option);
    });
  }
});

// Función para actualizar los modelos según la marca seleccionada
selectMarcaEquipo.addEventListener("change", function () {
  const tipoSeleccionado = selectTipoEquipo.value;
  const marcaSeleccionada = selectMarcaEquipo.value;
  const equipoInfo = equiposPorTipo[tipoSeleccionado];

  selectModeloEquipo.innerHTML = '<option value="">Seleccione el Modelo</option>';

  if (equipoInfo && equipoInfo.modelosPorMarca[marcaSeleccionada]) {
    equipoInfo.modelosPorMarca[marcaSeleccionada].forEach((modelo) => {
      const option = document.createElement("option");
      option.value = modelo;
      option.textContent = modelo;
      selectModeloEquipo.appendChild(option);
    });
  }
});

// Opciones para estado
const estados = ["Asignación", "Devolución"];
const selectEstado = document.getElementById("estado");
selectEstado.innerHTML = '<option value="">Seleccione el Estado</option>';
estados.forEach((estado) => {
  const option = document.createElement("option");
  option.value = estado;
  option.textContent = estado;
  selectEstado.appendChild(option);
});

// Opciones para ciudad
const ciudades = ["Cali", "Medellín", "Barranquilla", "Cartagena", "Bogotá", "Bucaramanga", "Pereira", "Manizales", "Santa Marta"];
const selectCiudad = document.getElementById("ciudad");
selectCiudad.innerHTML = '<option value="">Seleccione la Ciudad</option>';
ciudades.forEach((ciudad) => {
  const option = document.createElement("option");
  option.value = ciudad;
  option.textContent = ciudad;
  selectCiudad.appendChild(option);
});
