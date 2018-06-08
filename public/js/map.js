/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ({

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

var tipoMapa = 1;
var map = void 0;

var dgiarDepID = '01,02,03,04,05,06,08,09,10,11,12,13,14,15,18,20,21,22,23';
var deno = '';
var tipo = '';
var depID = '';
var proID = '';
var disID = '';

function initialState() {
  $('.spinner-wrapper').show();
  $(".chart__table").html('');
  $(".chart__image").html('');
  $("#map").css('visibility', 'hidden');
  $("#map_chart").css('height', '600px');
}

function removeAllFeatures() {
  capaDepartamentos.forEach(function (feature) {
    capaDepartamentos.remove(feature);
  });

  capaProvincias.forEach(function (feature) {
    capaProvincias.remove(feature);
  });

  capaDistritos.forEach(function (feature) {
    capaDistritos.remove(feature);
  });

  capaCP.forEach(function (feature) {
    capaCP.remove(feature);
  });
}

function processPoints(geometry, callback, thisArg) {
  if (geometry instanceof google.maps.LatLng) {
    callback.call(thisArg, geometry);
  } else if (geometry instanceof google.maps.Data.Point) {
    callback.call(thisArg, geometry.get());
  } else {
    geometry.getArray().forEach(function (g) {
      processPoints(g, callback, thisArg);
    });
  }
}

initialState();

function loadState() {
  $('.spinner-wrapper').hide();
  $("#map").css('visibility', 'visible');
  $("#map_chart").css('height', '100%');
}

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

map = new google.maps.Map(document.getElementById('map'), {
  zoom: 6,
  center: { lat: -12.079652, lng: -77.042575 },
  styles: [{ elementType: 'geometry', stylers: [{ color: '#f5f1e6' }] }, { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] }, { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] }, {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#656366' }]
  }, {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#f5f1e6' }]
  }, {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ae9e90' }]
  }, {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{ color: '#eaebed' }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#eaebed' }]
  }, {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#93817c' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#cbdaaf' }]
  }, {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#447530' }]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#f5f1e6' }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#fdfcf8' }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#cbdaaf' }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#b3c8aa' }]
  }, {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [{ color: '#f5f1e6' }]
  }, {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#b3c8aa' }]
  }, {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#806b63' }]
  }, {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{ color: '#d7d8dc' }]
  }, {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#8f7d77' }]
  }, {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#ebe3cd' }]
  }, {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{ color: '#d7d8dc' }]
  }, {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ccdfe6' }]
  }, {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#92998d' }]
  }]
});

var capaDepartamentos = new google.maps.Data();
var capaProvincias = new google.maps.Data();
var capaDistritos = new google.maps.Data();
var capaCP = new google.maps.Data();

function showDepartamentos(deno, tipo) {
  $("#ddlDistrito").empty();
  $("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>");
  $("#ddlProvincia").empty();
  $("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>");
  initialState();

  depID = '00';

  $("#ddlDepartamento option").each(function () {
    if ($(this).val() === depID) {
      $(this).attr('selected', true);
    } else {
      $(this).attr('selected', false);
    }
  });

  removeAllFeatures();

  capaDepartamentos.loadGeoJson('/departamentos?deps=' + dgiarDepID + '&provs=&deno=' + deno + '&tipo=' + tipo, null, function (event) {
    $(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblDep" class="dt-responsive" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    ');

    $(function () {
      loadState();

      getRegion();

      $(".chart__table").find("table thead").append('\n         <tr>\n           <th>ID</th>\n           <th>Departamento</th>\n           <th>Duraci\xF3n (m)</th>\n           <th>Exp. T\xE9c.</th>\n           <th>Familias Benef.</th>\n           <th>Hect\xE1reas</th>\n         </tr>\n       ');

      var t = $('#tblDep').DataTable({
        "paging": false,
        "searching": false,
        "ordering": false,
        "bInfo": false,
        "fnCreatedRow": function fnCreatedRow(nRow, aData, iDataIndex) {
          $(nRow).attr('id', aData[0]);
        },
        "columnDefs": [{
          "targets": 0,
          "visible": false
        }, { className: "dt-body-right text-right", "targets": [2, 3, 4, 5] }, { "width": "10%", "targets": [2, 4, 5] }]
      });

      var meses = 0;
      var exp = 0;
      var fam = 0;
      var hect = 0;

      event.forEach(function (feature) {

        meses = meses + parseInt(feature.f.Nro_pdn);
        exp = exp + parseInt(feature.f.Nro_pdnc);
        fam = fam + parseInt(feature.f.Inversion_pdnc);
        hect = hect + parseInt(feature.f.Nro_pdt);

        t.row.add([feature.f.ID_DEP, feature.f.NOMBDEP, feature.f.Nro_pdn, 'S/. ' + numberWithCommas(feature.f.Nro_pdnc), numberWithCommas(feature.f.Inversion_pdnc), numberWithCommas(feature.f.Nro_pdt)]).draw(false);
      });

      var trDOM = t.row.add(['', 'TOTAL', meses, 'S/ ' + numberWithCommas(exp), fam, hect]).draw(false).node();

      $(trDOM).addClass('table-success');

      equalHeight();
    });
  });

  capaDepartamentos.setStyle(function (feature) {
    return {
      // strokeColor: feature.getProperty('color'),
      fillColor: feature.getProperty('color'),
      strokeOpacity: 0.5,
      fillOpacity: 0.7,
      strokeWeight: 1
    };
  });

  capaDepartamentos.addListener('mouseover', function (event) {
    capaDepartamentos.revertStyle();
    capaDepartamentos.overrideStyle(event.feature, { fillOpacity: 1 });
    $(".chart__table").find("table tbody tr#" + event.feature.getProperty('ID_DEP')).addClass('success');
  });

  capaDepartamentos.addListener('mouseout', function (event) {
    capaDepartamentos.revertStyle();
    $(".chart__table").find("table tbody tr").removeClass('success');
  });

  capaDepartamentos.setMap(map);
  map.setZoom(6);
}

function showProvincias(id, deno, tipo) {
  $("#ddlDistrito").empty();
  $("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>");

  $("#ddlDepartamento option").each(function () {
    if ($(this).val() === id) {
      $(this).attr('selected', true);
      //console.log(id);    
    } else {
      $(this).attr('selected', false);
    }
  });

  removeAllFeatures();

  capaProvincias.loadGeoJson('/provincias?deps=' + id + '&provs=&deno=' + deno + '&tipo=' + tipo, null, function (event) {
    $(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblProv" class="dt-responsive" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    ');

    $(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartProv" style="height:300px"></div>\n      </div>\n    ');

    var tableData = [];
    var chartData = [];
    var chartMultiData = [];

    $(function () {
      loadState();

      $(".chart__table").find("table thead").append('\n         <tr>\n           <th>ID</th>\n           <th>Provincia</th>\n           <th>Duraci\xF3n (m)</th>\n           <th>Exp. T\xE9c.</th>\n           <th>Familias Benef.</th>\n           <th>Hect\xE1reas</th>\n         </tr>\n       ');

      var tblProv = $('#tblProv').DataTable({
        "paging": false,
        "searching": false,
        "ordering": false,
        "bInfo": false,
        "fnCreatedRow": function fnCreatedRow(nRow, aData, iDataIndex) {
          $(nRow).attr('id', aData[0]);
        },
        "columnDefs": [{
          "targets": 0,
          "visible": false
        }, { className: "dt-body-right text-right", "targets": [2, 3, 4, 5] }, { "width": "10%", "targets": [2, 4, 5] }]
      });

      var tblProvmeses = 0;
      var tblProvexp = 0;
      var tblProvfam = 0;
      var tblProvhect = 0;

      event.forEach(function (feature) {

        tblProvmeses = tblProvmeses + parseInt(feature.f.Nro_pdn);
        tblProvexp = tblProvexp + parseInt(feature.f.Nro_pdnc);
        tblProvfam = tblProvfam + parseInt(feature.f.Inversion_pdnc);
        tblProvhect = tblProvhect + parseInt(feature.f.Nro_pdt);

        tblProv.row.add([feature.f.ID_PROV, feature.f.NOM_PROV, feature.f.Nro_pdn, 'S/. ' + numberWithCommas(feature.f.Nro_pdnc), numberWithCommas(feature.f.Inversion_pdnc), numberWithCommas(feature.f.Nro_pdt)]).draw(false);

        chartMultiData.push({ name: feature.f.NOM_PROV, data: { "Familias": parseInt(feature.f.Inversion_pdnc), "Hectáreas": parseInt(feature.f.Nro_pdt) } });
      });

      var tblProvtrDOM = tblProv.row.add(['', 'TOTAL', tblProvmeses, 'S/ ' + numberWithCommas(tblProvexp), tblProvfam, tblProvhect]).draw(false).node();

      $(tblProvtrDOM).addClass('table-success');

      new Chartkick.ColumnChart("chartProv", chartMultiData, { legend: "bottom" });

      equalHeight();
    });
  });

  capaProvincias.setStyle(function (feature) {
    return {
      // strokeColor: feature.getProperty('color'),
      fillColor: feature.getProperty('color'),
      strokeOpacity: 0.5,
      fillOpacity: 0.7,
      strokeWeight: 1
    };
  });

  capaProvincias.addListener('addfeature', function (event) {
    capaProvincias.setMap(map);
    var bounds = new google.maps.LatLngBounds();
    processPoints(event.feature.getGeometry(), bounds.extend, bounds);
    map.fitBounds(bounds);
    map.setZoom(7);
  });

  capaProvincias.addListener('mouseover', function (event) {
    capaProvincias.revertStyle();
    capaProvincias.overrideStyle(event.feature, { fillOpacity: 1 });
    $(".chart__table").find("table tbody tr#" + event.feature.getProperty('ID_PROV')).addClass('success');
  });

  capaProvincias.addListener('mouseout', function (event) {
    capaProvincias.revertStyle();
    $(".chart__table").find("table tbody tr").removeClass('success');
  });
}

function showDistritos(id, deno, tipo) {
  removeAllFeatures();

  provID = id;

  $("#ddlProvincia option").each(function () {
    if ($(this).val() === provID) {
      $(this).attr('selected', true);
    } else {
      $(this).attr('selected', false);
    }
  });

  capaDistritos.loadGeoJson('/distritos?deps=&provs=' + provID + '&dis=&deno=' + deno + '&tipo=' + tipo, null, function (event) {
    //console.log(event);
    $(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblDis" class="dt-responsive" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    ');

    $(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartDis" style="height:300px"></div>\n      </div>\n    ');

    var tableData = [];
    var chartMultiData = [];
    var chartData = [];

    $(function () {
      loadState();

      $(".chart__table").find("table thead").append('\n        <tr>\n          <th>ID</th>\n          <th>Distrito</th>\n          <th>Duraci\xF3n (m)</th>\n          <th>Exp. T\xE9c.</th>\n          <th>Familias Benef.</th>\n          <th>Hect\xE1reas</th>\n        </tr>\n      ');

      var tblDis = $('#tblDis').DataTable({
        "paging": false,
        "searching": false,
        "ordering": false,
        "bInfo": false,
        "fnCreatedRow": function fnCreatedRow(nRow, aData, iDataIndex) {
          $(nRow).attr('id', aData[0]);
        },
        "columnDefs": [{
          "targets": 0,
          "visible": false
        }, { className: "dt-body-right text-right", "targets": [2, 3, 4, 5] }, { "width": "10%", "targets": [2, 4, 5] }]
      });

      var tblDismeses = 0;
      var tblDisexp = 0;
      var tblDisfam = 0;
      var tblDishect = 0;

      event.forEach(function (feature) {

        tblDismeses = tblDismeses + parseInt(feature.f.Nro_pdn);
        tblDisexp = tblDisexp + parseInt(feature.f.Nro_pdnc);
        tblDisfam = tblDisfam + parseInt(feature.f.Inversion_pdnc);
        tblDishect = tblDishect + parseInt(feature.f.Nro_pdt);

        tblDis.row.add([feature.f.ID_DIS, feature.f.NOM_DIS, feature.f.Nro_pdn, 'S/. ' + numberWithCommas(feature.f.Nro_pdnc), numberWithCommas(feature.f.Inversion_pdnc), numberWithCommas(feature.f.Nro_pdt)]).draw(false);

        chartMultiData.push({ name: feature.f.NOM_DIS, data: { "Familias": parseInt(feature.f.Inversion_pdnc), "Hectáreas": parseInt(feature.f.Nro_pdt) } });
      });

      var tblDistrDOM = tblDis.row.add(['', 'TOTAL', tblDismeses, 'S/ ' + numberWithCommas(tblDisexp), tblDisfam, tblDishect]).draw(false).node();

      $(tblDistrDOM).addClass('table-success');

      new Chartkick.ColumnChart("chartDis", chartMultiData, { legend: "bottom" });

      equalHeight();
    });

    //console.log(tableData);
  });

  capaDistritos.setStyle(function (feature) {
    //console.log(feature);
    return (/** @type {google.maps.Data.StyleOptions} */{
        // strokeColor: feature.getProperty('color'),
        fillColor: feature.getProperty('color'),
        strokeOpacity: 0.5,
        fillOpacity: 0.7,
        strokeWeight: 1
      }
    );
  });

  capaDistritos.addListener('mouseover', function (event) {
    capaDistritos.revertStyle();
    capaDistritos.overrideStyle(event.feature, { fillOpacity: 1 });
    $(".chart__table").find("table tbody tr#" + event.feature.getProperty('ID_DIS')).addClass('success');
  });

  capaDistritos.addListener('mouseout', function (event) {
    capaDistritos.revertStyle();
    $(".chart__table").find("table tbody tr").removeClass('success');
  });

  capaDistritos.addListener('addfeature', function (event) {
    capaDistritos.setMap(map);
    var bounds = new google.maps.LatLngBounds();
    processPoints(event.feature.getGeometry(), bounds.extend, bounds);
    map.fitBounds(bounds);
    map.setZoom(9);
  });
}

function showCP(id, deno, tipo) {
  disID = id;

  removeAllFeatures();

  $("#ddlDistrito option").each(function () {
    if ($(this).val() === disID) {
      $(this).attr('selected', true);
    } else {
      $(this).attr('selected', false);
    }
  });

  capaCP.loadGeoJson('/cp?deps=&provs=&dis=' + disID + '&ccpps=&deno=' + deno + '&tipo=' + tipo, null, function (event) {
    //console.log(event);
    $(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblCP" class="dt-responsive" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    ');

    $(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartCP" style="height:300px"></div>\n      </div>\n    ');

    var tableData = [];
    var chartMultiData = [];

    $(".chart__table").find("table thead").append('\n    <tr>\n    <th>ID</th>\n    <th>Proyecto</th>\n    <th>Presupuesto</th>\n    <th>Tipolog\xEDa</th>\n    <th>Organizaci\xF3n</th>\n    <th>Ind. Formulad.</th>\n    </tr>\n    ');

    event.forEach(function (feature) {
      //console.log(feature.f);

      tableData.push([feature.f.CODCP, feature.f.NOMBRE_PROYECTO, 'S/. ' + numberWithCommas(feature.f.MONTO_EXPEDIENTE_TECNICO), feature.f.TIPOLOGIA, feature.f.ORGANIZACION, feature.f.UNIDAD_FORMULADORA]);
      chartMultiData.push({ name: feature.f.NOMCP, data: { "Familias": parseInt(feature.f.Inversion_pdnc), "Hectáreas": parseInt(feature.f.Nro_pdt) } });
    });

    new Chartkick.ColumnChart("chartCP", chartMultiData, { legend: "bottom" });

    $(function () {
      loadState();

      $('#tblCP').DataTable({
        "paging": false,
        "searching": false,
        "language": {
          "sProcessing": "Procesando...",
          "sLengthMenu": "Mostrar _MENU_ registros",
          "sZeroRecords": "No se encontraron resultados",
          "sEmptyTable": "Ningún dato disponible en esta tabla",
          "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
          "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
          "sInfoPostFix": "",
          "sSearch": "Buscar:",
          "sUrl": "",
          "sInfoThousands": ",",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
          },
          "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
        },
        data: tableData,
        "fnCreatedRow": function fnCreatedRow(nRow, aData, iDataIndex) {
          $(nRow).attr('class', aData[0]);
        },
        "columnDefs": [{
          "targets": 0,
          "visible": false
        }, { className: "dt-body-right text-right", "targets": [2] }]

      });

      equalHeight();
    });

    //console.log(tableData);
  });

  capaCP.addListener('mouseover', function (event) {
    $(".chart__table").find("table tbody tr." + event.feature.getProperty('CODCP')).addClass('success');
  });

  capaCP.addListener('mouseout', function (event) {
    $(".chart__table").find("table tbody tr").removeClass("success");
  });

  capaCP.addListener('addfeature', function (event) {
    capaCP.setMap(map);
    var bounds = new google.maps.LatLngBounds();
    processPoints(event.feature.getGeometry(), bounds.extend, bounds);
    map.fitBounds(bounds);
    map.setZoom(10);
  });
}

function cleanForm() {}

function search() {
  var denoInput = $('#txtDenom').val();
  var ddlTipo = $('#ddlTipo').val();

  if ($('#ddlDepartamento').val() != null && $('#ddlProvincia').val() != null && $('#ddlDistrito').val() != null) {
    //Todos seleccionados
    var _disID = $("#ddlDistrito").val();
    showCP(_disID, denoInput, ddlTipo);
    console.log('Mostrando ' + denoInput + ' en el distrito ' + _disID);
  } else if ($('#ddlDepartamento').val() != null && $('#ddlProvincia').val() != null && $('#ddlDistrito').val() === null) {
    //Departamento => Provincia
    var _provID = $("#ddlProvincia").val();
    showDistritos(_provID, denoInput, ddlTipo);
    console.log('Mostrando ' + denoInput + ' en la provincia ' + _provID);
  } else if ($('#ddlDepartamento').val() != null && $('#ddlProvincia').val() === null && $('#ddlDistrito').val() === null) {
    //Departamento
    cleanForm('dep');
    var _depID = $("#ddlDepartamento").val();
    showProvincias(_depID, denoInput, ddlTipo);
    console.log('Mostrando ' + denoInput + ' en el departamento ' + _depID);
  } else {
    showDepartamentos(denoInput, ddlTipo);
    console.log('Mostrando ' + denoInput + ' en todos los departamentos');
  }
}

$('#btnBuscar').click(function (e) {
  e.preventDefault();
  //initialState();
  search();
});

$('#btnLimpiar').click(function () {
  //debugger;
  //initialState();
  $('#txtDenom').val('');
  $('#ddlTipo').val('');
  showDepartamentos('', '');
});

showDepartamentos('', '');

capaDepartamentos.addListener('click', function (event) {
  //console.log(event);
  depID = event.feature.getProperty('ID_DEP');
  // capaDepartamentos.forEach(function (feature) {
  //   capaDepartamentos.remove(feature);
  // });

  // event.feature.setProperty('isColorful', true);
  // event.feature.setProperty('color', 'white');
  // capaProvincias.loadGeoJson('/provincias?deps=' + depID + '&provs=');
  // capaProvincias.setMap(map);
  // let bounds = new google.maps.LatLngBounds();
  // processPoints(event.feature.getGeometry(), bounds.extend, bounds);
  // map.fitBounds(bounds);
  // map.setZoom(8);

  $("#ddlDepartamento").val(depID).change();
});

capaProvincias.addListener('click', function (event) {
  // capaProvincias.forEach(function (feature) {
  //       capaProvincias.remove(feature);
  // });
  // alert(event.feature.getProperty('NOM_PROV'));
  // capaDistritos.setMap(map);
  // let bounds = new google.maps.LatLngBounds();
  // processPoints(event.feature.getGeometry(), bounds.extend, bounds);
  // map.fitBounds(bounds);
  // map.setZoom(8);

  provID = event.feature.getProperty('ID_PROV');
  $("#ddlProvincia").val(provID).change();
  //console.log(event.feature.getProperty('ID_PROV'));
});

capaDistritos.addListener('click', function (event) {
  disID = event.feature.getProperty('ID_DIS');
  var bounds = new google.maps.LatLngBounds();
  processPoints(event.feature.getGeometry(), bounds.extend, bounds);
  map.fitBounds(bounds);
  map.setZoom(8);

  $("#ddlDistrito").val(disID).change();
  //console.log(event.feature);
});

$(document).ready(function () {
  $.ajax({
    url: 'http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDepartamentoscombo',
    data: "{}",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    contentType: "application/json;",
    type: "post",
    success: function success(resultado) {
      //console.log(resultado);
      $("#ddlDepartamento").empty();
      $("#ddlDepartamento").append("<option value='00' disabled selected>Seleccione</option>");
      $.each(resultado, function (index, value) {
        if (value.ID_DEP === '01' || value.ID_DEP === '02' || value.ID_DEP === '03' || value.ID_DEP === '04' || value.ID_DEP === '05' || value.ID_DEP === '06' || value.ID_DEP === '08' || value.ID_DEP === '09' || value.ID_DEP === '10' || value.ID_DEP === '11' || value.ID_DEP === '12' || value.ID_DEP === '13' || value.ID_DEP === '14' || value.ID_DEP === '15' || value.ID_DEP === '18' || value.ID_DEP === '20' || value.ID_DEP === '21' || value.ID_DEP === '22' || value.ID_DEP === '23') {
          $("#ddlDepartamento").append("<option value=" + value.ID_DEP + ">" + value.NOM_DEP + "</option>");
        }
      });
    },
    error: function error(xhr, status, _error) {}
  });

  $("#ddlDepartamento").change(function (event) {
    initialState();
    showProvincias($(this).val(), $('#txtDenom').val(), $('#ddlTipo').val());

    $.ajax({
      url: 'http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarProvinciascombo',
      data: "{ ID_DEP: '" + $(this).val() + "'}",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      contentType: "application/json;",
      type: "post",
      success: function success(resultado) {
        //console.log(resultado);
        $("#ddlProvincia").empty();
        $("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>");
        $.each(resultado, function (index, value) {
          $("#ddlProvincia").append("<option value=" + value.ID_PROV + ">" + value.NOM_PROV + "</option>");
        });
      },
      error: function error(xhr, status, _error2) {}
    });
  });

  $("#ddlProvincia").change(function () {
    initialState();
    showDistritos($(this).val(), $('#txtDenom').val(), $('#ddlTipo').val());

    $.ajax({
      url: 'http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDistritoscombo',
      data: "{ ID_PROV: '" + $(this).val() + "'}",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      contentType: "application/json;",
      type: "post",
      success: function success(resultado) {
        //console.log(resultado);
        $("#ddlDistrito").empty();
        $("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>");
        $.each(resultado, function (index, value) {
          $("#ddlDistrito").append("<option value=" + value.ID_DIS + ">" + value.NOM_DIS + "</option>");
        });
      },
      error: function error(xhr, status, _error3) {}
    });
  });

  $("#ddlDistrito").change(function () {
    initialState();
    showCP($(this).val(), $('#txtDenom').val(), $('#ddlTipo').val());
  });

  $("#ddlTipo").change(function () {
    initialState();

    var denoInput = $('#txtDenom').val();
    var ddlTipo = $(this).val();

    search();
  });
});

function getRegion() {
  $(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="page-header"><h3>Por regiones</h3></div>\n      <canvas class="chartShow" id="chartDep" style="height:300px"></canvas>\n      </div>\n  ');

  $.ajax({
    url: 'http://qa.agrorural.gob.pe/WEBAPI_GEOVICE/api/geo/ReportePorRegion',
    data: "{}",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    contentType: "application/json;",
    type: "post",
    success: function success(resultado) {
      console.log(resultado);

      //let chartData = [];
      var chartLabels = [];

      $.each(resultado, function (index, value) {
        chartLabels.push([value.Region_Natural]);
        //chartData.push([value.MONTO_EXPEDIENTE_TECNICO]);
      });

      //new Chartkick.PieChart("chartDep", chartData, {donut: true, prefix: "S/ ", legend: "bottom"})
      //new Chartkick.PieChart("chartDep", [["Costa", 74585758.7], ["Sierra", 563387425.37]], {donut: true, prefix: "S/ ", legend: "bottom"})

      var ctx = document.getElementById("chartDep");
      var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          // labels: ["Costa", "Sierra", "Selva"],
          labels: chartLabels,
          datasets: [{
            label: 'Gráfica',
            data: [74585758, 563387425, 79308772],
            //data: chartData,
            backgroundColor: 'rgba(215, 58, 36, 0.2)',
            borderColor: 'rgba(215, 58, 36, 1)',
            borderWidth: 2
          }]
        },
        options: {
          tooltips: {
            callbacks: {
              label: function label(tooltipItem, data) {
                var value = data.datasets[0].data[tooltipItem.index];
                value = value.toString();
                value = value.split(/(?=(?:...)*$)/);
                value = value.join(',');
                return 'S/ ' + value;
              } // end callbacks:
            } }, //end tooltips
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                userCallback: function userCallback(value, index, values) {
                  // Convert the number to a string and splite the string every 3 charaters from the end
                  value = value.toString();
                  value = value.split(/(?=(?:...)*$)/);
                  value = value.join(',');
                  return 'S/ ' + value;
                }
              }
            }],
            xAxes: [{
              ticks: {}
            }]
          }
        }
      });
    }
  });
}

function equalHeight() {
  var chartHeight = $('.chart').height();

  console.log('Mapa antes: ' + $('#map').height());

  $('#map').height(chartHeight);

  console.log('Mapa despues: ' + $('#map').height());
  console.log('chart: ' + chartHeight);
}

/***/ })

/******/ });