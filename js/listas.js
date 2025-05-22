// Opciones para técnicos
  const tecnicos = [
    "Michel Salazar",
    "Harold Hurtado",
    "Wilson Pérez"
  ];
  const selectTi = document.getElementById("nameTi");
  selectTi.innerHTML = '<option value="">Seleccione el Técnico</option>';
  tecnicos.forEach(nombre => {
    const option = document.createElement("option");
    option.value = nombre;
    option.textContent = nombre;
    selectTi.appendChild(option);
  });

  // Opciones para tipo de equipo
  const tiposEquipo = [
    "CPU",
    "Handheld",
    "Impresora",
    "Impresora portátil",
    "Jabra",
    "Monitor",
    "Portátil",
    "Proyector",
    "Tablet"
  ];
  const selectTipoEquipo = document.getElementById("tipoEquipo");
  selectTipoEquipo.innerHTML = '<option value="">Seleccione el Tipo</option>';
  tiposEquipo.forEach(tipo => {
    const option = document.createElement("option");
    option.value = tipo;
    option.textContent = tipo;
    selectTipoEquipo.appendChild(option);
  });

  // Relación tipoEquipo -> marcas
  const marcasPorTipo = {
    "CPU": ["Dell", "HP", "Lenovo", "Acer", "Asus"],
    "Handheld": ["Zebra", "Honeywell", "Datalogic"],
    "Impresora": ["HP", "Epson", "Brother", "Canon", "Samsung"],
    "Impresora portátil": ["Zebra", "Brother"],
    "Jabra": ["Jabra"],
    "Monitor": ["Dell", "HP", "Lenovo", "LG", "Samsung", "Acer", "Asus"],
    "Portátil": ["Dell", "HP", "Lenovo", "Acer", "Asus", "Apple"],
    "Proyector": ["Epson", "BenQ", "Sony", "ViewSonic"],
    "Tablet": ["Apple", "Samsung", "Lenovo", "Huawei"]
  };

  const selectMarcaEquipo = document.getElementById("marcaEquipo");

  // Función para actualizar las marcas según el tipo seleccionado
  selectTipoEquipo.addEventListener("change", function() {
    const tipoSeleccionado = selectTipoEquipo.value;
    let marcas = marcasPorTipo[tipoSeleccionado] || [];
    selectMarcaEquipo.innerHTML = '<option value="">Seleccione la Marca</option>';
    marcas.forEach(marca => {
      const option = document.createElement("option");
      option.value = marca;
      option.textContent = marca;
      selectMarcaEquipo.appendChild(option);
    });
  });

  // Relación marcaEquipo -> modelos
  const modelosPorMarca = {
    "Dell": ["Inspiron", "Latitude", "OptiPlex", "XPS", "Vostro"],
    "HP": ["Pavilion", "EliteBook", "ProBook", "LaserJet", "DeskJet"],
    "Lenovo": ["ThinkPad", "IdeaPad", "Yoga", "Legion"],
    "Acer": ["Aspire", "Predator", "Nitro", "TravelMate"],
    "Asus": ["ZenBook", "VivoBook", "ROG", "TUF"],
    "Apple": ["MacBook Air", "MacBook Pro", "iPad", "iPad Pro"],
    "LG": ["UltraWide", "Gram"],
    "Samsung": ["Galaxy Tab", "SyncMaster", "ML-2165"],
    "Epson": ["EcoTank", "WorkForce", "PowerLite"],
    "Brother": ["HL-L2350DW", "DCP-L2550DW"],
    "Canon": ["PIXMA", "imageCLASS"],
    "Zebra": ["TC52", "ZQ520", "GK420d"],
    "Honeywell": ["Dolphin", "ScanPal"],
    "Datalogic": ["Memor", "Skorpio"],
    "BenQ": ["MW535A", "TH671ST"],
    "Sony": ["VPL-EX575", "VPL-DX221"],
    "ViewSonic": ["PA503S", "PX701HD"],
    "Jabra": ["Evolve 65", "Speak 510"],
    "Huawei": ["MatePad", "MediaPad"]
  };

  const selectModeloEquipo = document.getElementById("modeloEquipo");

  // Función para actualizar los modelos según la marca seleccionada
  selectMarcaEquipo.addEventListener("change", function() {
    const marcaSeleccionada = selectMarcaEquipo.value;
    let modelos = modelosPorMarca[marcaSeleccionada] || [];
    selectModeloEquipo.innerHTML = '<option value="">Seleccione el Modelo</option>';
    modelos.forEach(modelo => {
      const option = document.createElement("option");
      option.value = modelo;
      option.textContent = modelo;
      selectModeloEquipo.appendChild(option);
    });
  });

  // Opciones para estado
  const estados = [
    "Asignación",
    "Devolución"
  ];
  const selectEstado = document.getElementById("estado");
  selectEstado.innerHTML = '<option value="">Seleccione el Estado</option>';
  estados.forEach(estado => {
    const option = document.createElement("option");
    option.value = estado;
    option.textContent = estado;
    selectEstado.appendChild(option);
  });

  // Opciones para ciudad
  const ciudades = [
    "Cali",
    "Medellín",
    "Barranquilla",
    "Cartagena",
    "Bogotá",
    "Bucaramanga",
    "Pereira",
    "Manizales",
    "Santa Marta"
  ];
  const selectCiudad = document.getElementById("ciudad");
  selectCiudad.innerHTML = '<option value="">Seleccione la Ciudad</option>';
  ciudades.forEach(ciudad => {
    const option = document.createElement("option");
    option.value = ciudad;
    option.textContent = ciudad;
    selectCiudad.appendChild(option);
  });