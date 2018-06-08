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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

var dgiarDepID = '01,02,03,04,05,06,08,09,10,11,12,13,14,15,18,20,21,22,23';

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

function getRegion() {
  $(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="page-header"><h3>Por regiones</h3></div>\n      <canvas class="chartShow" id="chartDep" style="height:300px"></canvas>\n      </div>\n  ').css('margin-top', '15px');

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
      //console.log(resultado);

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

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function repeatedArr(arr) {
  var a = [],
      b = [],
      prev;

  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }

  return [a, b];
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

function showDepartamentos(deno, tipo) {
  initialState();

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

      // let chartHeight= $('.chart').height();

      // console.log($('#map').height());

      // $('#map').height( chartHeight );

      // console.log($('#map').height());
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

showDepartamentos('', '');

capaDepartamentos.addListener('click', function (event) {
  //console.log(event);
  $(".chart__image").html('').css('margin-top', '0px');;
  depID = event.feature.getProperty('ID_DEP');
  dep = event.feature.getProperty('NOMBDEP');
  hect = numberWithCommas(event.feature.getProperty('Nro_pdt'));
  fam = numberWithCommas(event.feature.getProperty('Inversion_pdnc'));
  exp = numberWithCommas(event.feature.getProperty('Nro_pdnc'));

  //let proj = 0;

  /* capaDepartamentos.forEach(function (feature) {
    capaDepartamentos.remove(feature);
    capaDepartamentos.add(feature);
  }); */

  /*     capaDepartamentos.revertStyle();
   */ /*     capaDepartamentos.overrideStyle(event.feature, {fillOpacity: 1}); */

  // event.feature.setProperty('isColorful', true);
  /*   event.feature.setProperty('color', 'white');
    capaDepartamentos.revertStyle(); */
  // capaProvincias.loadGeoJson('/provincias?deps=' + depID + '&provs=');
  // capaProvincias.setMap(map);
  // let bounds = new google.maps.LatLngBounds();
  // processPoints(event.feature.getGeometry(), bounds.extend, bounds);
  // map.fitBounds(bounds);


  //console.log(event);


  $.ajax({
    url: 'http://intranet.agrorural.gob.pe/WEBAPI_GEOVICE/api/geo/ProyectosPorDepartamento',
    data: "{'ID_DEP':'" + depID + "'}",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    contentType: "application/json;",
    type: "post",
    success: function success(resultado) {
      var proj = void 0;
      var types = [];

      //console.log(resultado);      

      $.each(resultado, function (index, value) {
        proj = value.iProyectos;
        types.push(value.TIPOLOGIA);
        //console.log(proj);
      });

      console.log(types);

      var allTypes = {};

      for (var i = 0; i < types.length; ++i) {
        if (!allTypes[types[i]]) allTypes[types[i]] = 0;
        ++allTypes[types[i]];
      }

      console.log(allTypes["INFRAESTRUCTURA DE RIEGO"]);

      var IR = allTypes["INFRAESTRUCTURA DE RIEGO"] != null ? allTypes["INFRAESTRUCTURA DE RIEGO"] : 0;
      var IRR = allTypes["IRRIGACION"] != null ? allTypes["IRRIGACION"] : 0;
      var RT = allTypes["RIEGO TECNIFICADO"] != null ? allTypes["RIEGO TECNIFICADO"] : 0;

      var card = '';

      card += '<div class="chart__table-container">';
      card += '<div class="card">';

      card += '<div class="card-image">';
      card += '<div class="card-header"><h1>' + dep + '</h1></div>';
      card += '</div>';

      card += '<div class="card-body">';

      card += '<div class="row">';

      card += '<div class="col-sm-6">';

      card += '<div class="media proj">';
      card += '<div class="media-left"><i class="fas fa-briefcase"></i></div>';
      card += '<div class="media-body">';
      card += '<h4 class="media-heading">' + proj + '</h4>';
      card += '<p>proyectos</p><br>';

      if (IR > 0) {
        card += '<p><strong>' + IR + '</strong> en infraestructura de riego<br />';
      }

      if (IRR > 0) {
        card += '<strong>' + IRR + '</strong> en irrigación<br />';
      }

      if (RT > 0) {
        card += '<strong>' + RT + '</strong> en riego tecnificado</p>';
      }

      card += '</div>';
      card += '</div>';

      card += '<div class="media fam">';
      card += '<div class="media-left"><i class="fas fa-people-carry"></i></div>';
      card += '<div class="media-body">';
      card += '<h4 class="media-heading">' + fam + '</h4>';
      card += '<p>familias beneficiarias</p>';
      card += '</div>';
      card += '</div>';

      card += '<div class="media hect">';
      card += '<div class="media-left"><i class="fas fa-map"></i></div>';
      card += '<div class="media-body">';
      card += '<h4 class="media-heading">' + hect + '</h4>';
      card += '<p>hectareas</p>';
      card += '</div>';
      card += '</div>';

      card += '<div class="media exp">';
      card += '<div class="media-left"><i class="fas fa-money-bill-alt"></i></div>';
      card += '<div class="media-body">';
      card += '<h4 class="media-heading">S/ ' + exp + '</h4>';
      card += '<p>en expediente tecnicos</p>';
      card += '</div>';
      card += '</div>';

      card += '</div>'; // .col-sm-6

      // card += '<div class="col-sm-6">';

      // card += '<picture class="depImage">';

      // card += 'Imagen aqui';

      // card += '</picture>'; // .depImage

      // card += '</div>'; // .col-sm-6

      card += '</div>'; // .row

      card += '</div>';

      card += '<div class="card-footer">';
      card += '<a id="general" href="/resumen" class="btn btn-link"><i class="fas fa-arrow-left"></i> Volver</a>';
      card += '<a id="full" href="/" class="btn btn-link" target="_blank">Reporte Completo</a>';
      card += '</div>';

      card += '</div>';
      card += '</div>';

      $(".chart__table").html(card);
    }
  });
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
});

$(document).ajaxStop(function () {
  var chartHeight = $('.chart').height();

  console.log($('#map').height());

  $('#map').height(chartHeight);

  console.log($('#map').height());
});

/***/ })

/******/ });