let dgiarDepID = '01,02,03,04,05,06,08,09,10,11,12,13,14,15,18,20,21,22,23';

function initialState(){
  $('.spinner-wrapper').show();
  $(".chart__table").html('');
  $(".chart__image").html('');
  $("#map").css('visibility', 'hidden');
  $("#map_chart").css('height', '600px');
}

function removeAllFeatures(){
  capaDepartamentos.forEach(function (feature) {
    capaDepartamentos.remove(feature);
  });
}

function equalHeight() {
  let chartHeight = $('.chart').height();
    
  console.log('Mapa antes: '+  $('#map').height());

  $('#map').height( chartHeight );

  console.log('Mapa despues: '+  $('#map').height());
  console.log('chart: '+  chartHeight);
}

function processPoints(geometry, callback, thisArg) {
  if (geometry instanceof google.maps.LatLng) {
    callback.call(thisArg, geometry);
  } else if (geometry instanceof google.maps.Data.Point) {
    callback.call(thisArg, geometry.get());
  } else {
    geometry.getArray().forEach(function(g) {
      processPoints(g, callback, thisArg);
    });
  }
}

initialState();

function loadState(){
    $('.spinner-wrapper').hide();
    $("#map").css('visibility', 'visible');
    $("#map_chart").css('height', '100%');
}

function getRegion() {
  $(".chart__image").html(`
      <div class="chart__image-container">
      <div class="page-header"><h3>Por regiones</h3></div>
      <canvas class="chartShow" id="chartDep" style="height:300px"></canvas>
      </div>
  `).css('margin-top', '15px');

  $.ajax({
    url: 'http://intranet.agrorural.gob.pe/WEBAPI_GEOVICE/api/geo/ReportePorRegion',
    data: "{'carga': 2}",
    headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
    },
    contentType: "application/json;",
    type: "post",
    success: function (resultado) {
      console.log(resultado);

        //let chartData = [];
        let chartLabels = [];
        
        $.each(resultado, function (index, value) {
          chartLabels.push([value.Region_Natural]);
          //chartData.push([value.MONTO_EXPEDIENTE_TECNICO]);
        });

        //console.log(chartLabels);

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
              data: [37323875, 165342315, 43703749],
              //data: chartData,
              backgroundColor: 'rgba(215, 58, 36, 0.2)',
              borderColor: 'rgba(215, 58, 36, 1)',
              borderWidth: 2
            }],
          },
          options: {
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  var value = data.datasets[0].data[tooltipItem.index];
                  value = value.toString();
                  value = value.split(/(?=(?:...)*$)/);
                  value = value.join(',');
                  return 'S/ ' + value;
                }
              } // end callbacks:
            }, //end tooltips
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true,
                  userCallback: function(value, index, values) {
                    // Convert the number to a string and splite the string every 3 charaters from the end
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(',');
                    return 'S/ ' + value;
                  }
                }
              }],
              xAxes: [{
                ticks: {
                }
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
  var a = [], b = [], prev;
  
  arr.sort();
  for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] !== prev ) {
          a.push(arr[i]);
          b.push(1);
      } else {
          b[b.length-1]++;
      }
      prev = arr[i];
  }
  
  return [a, b];
}


map = new google.maps.Map(document.getElementById('map'), {
  zoom: 6,
  center: {lat: -12.079652, lng: -77.042575},
  styles: [
        {elementType: 'geometry', stylers: [{color: '#f5f1e6'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{color: '#656366'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{color: '#f5f1e6'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ae9e90'}]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{color: '#eaebed'}]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#eaebed'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#93817c'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{color: '#cbdaaf'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#447530'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#f5f1e6'}]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#cbdaaf'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#b3c8aa'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{color: '#f5f1e6'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{color: '#b3c8aa'}]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{color: '#806b63'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{color: '#d7d8dc'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{color: '#8f7d77'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#ebe3cd'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{color: '#d7d8dc'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{color: '#ccdfe6'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#92998d'}]
        }
      ]
});

let capaDepartamentos = new google.maps.Data();

function showDepartamentos(deno, tipo){
  initialState();

  removeAllFeatures();
 
  capaDepartamentos.loadGeoJson('departamentos/2?deps=' + dgiarDepID + '&provs=&deno=' + deno + '&tipo=' + tipo, null, function(event){
    $(".chart__table").html(`
      <div class="chart__table-container">
      <table id="tblDep" class="dt-responsive" cellspacing="0" width="100%">
        <thead class="thead-dark">
        </thead>
        <tbody>
        </tbody>
      </table>
      </div>
    `);

    $(function() {
      loadState();
      
      getRegion();

      $.ajax({
        url: 'http://intranet.agrorural.gob.pe/WEBAPI_GEOVICE/api/geo/ProyectosPorDepartamento',
        data: "{'ID_DEP':'','carga': 2}",
        headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
        },
        contentType: "application/json;",
        type: "post",
        success: function (resultado) {
          let types = [];
          let proj;
          
          //console.log(resultado);      
          
          $.each(resultado, function (index, value) {
            proj = value.iProyectos;
            // console.log(proj);
          });
        }
      });

      $(".chart__table").find("table thead").append(`
         <tr>
           <th>ID</th>
           <th>Departamento</th>
           <th>Proyectos</th>
           <th>Exp. Téc.</th>
           <th>Familias Benef.</th>
           <th>Hectáreas</th>
         </tr>
       `);

      let t = $('#tblDep').DataTable({
        "paging": false,
        "searching": false,
        "ordering": false,
        "bInfo" : false,
        "fnCreatedRow": function( nRow, aData, iDataIndex ) {
          $(nRow).attr('id', aData[0]);
        }, 
          "columnDefs": [ {
            "targets": 0,
            "visible": false
          },
          { className: "dt-body-right text-right", "targets": [ 2, 3, 4, 5 ] },
          { "width": "10%", "targets": [2, 4, 5] }
        ]
      });

      let projs = 0;
      let exp = 0;
      let fam = 0;
      let hect = 0;

      event.forEach(function(feature){
        
        projs = projs + parseInt(feature.f.iProyectos);
        exp = exp + parseInt(feature.f.Nro_pdnc);
        fam = fam + parseInt(feature.f.Inversion_pdnc);
        hect = hect + parseInt(feature.f.Nro_pdt);

        t.row.add( [
          feature.f.ID_DEP, 
          feature.f.NOMBDEP, 
          feature.f.iProyectos, 
          'S/. ' + numberWithCommas(feature.f.Nro_pdnc), 
          numberWithCommas(feature.f.Inversion_pdnc), 
          numberWithCommas(feature.f.Nro_pdt) 
        ]).draw( false );


      });

      var trDOM = t.row.add( [
        '', 
        'TOTAL', 
        projs, 
        'S/ ' + numberWithCommas(exp), 
        fam, 
        hect
      ]).draw( false ).node();

      $( trDOM ).addClass('table-success');
      
      // let chartHeight= $('.chart').height();
    
      // console.log($('#map').height());
    
      // $('#map').height( chartHeight );
    
      // console.log($('#map').height());
    });
  });

  capaDepartamentos.setStyle(function(feature) {
    return ({
      // strokeColor: feature.getProperty('color'),
      fillColor: feature.getProperty('color'),
      strokeOpacity: 0.5,
      fillOpacity: 0.7,
      strokeWeight: 1
    });
  });

  capaDepartamentos.addListener('mouseover', function(event) {
    capaDepartamentos.revertStyle();
    capaDepartamentos.overrideStyle(event.feature, {fillOpacity: 1});
    $(".chart__table").find("table tbody tr#" + event.feature.getProperty('ID_DEP') ).addClass('success');
  });

  capaDepartamentos.addListener('mouseout', function(event) {
    capaDepartamentos.revertStyle();
    $(".chart__table").find("table tbody tr").removeClass('success');
  });

  capaDepartamentos.setMap(map);
  map.setZoom(6);

}

showDepartamentos('','');

capaDepartamentos.addListener('click', function(event) {
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
 *//*     capaDepartamentos.overrideStyle(event.feature, {fillOpacity: 1}); */

  // event.feature.setProperty('isColorful', true);
/*   event.feature.setProperty('color', 'white');
  capaDepartamentos.revertStyle(); */
  // capaProvincias.loadGeoJson('/provincias/2?deps=' + depID + '&provs=');
  // capaProvincias.setMap(map);
  // let bounds = new google.maps.LatLngBounds();
  // processPoints(event.feature.getGeometry(), bounds.extend, bounds);
  // map.fitBounds(bounds);
  

  //console.log(event);


  $.ajax({
    url: 'http://intranet.agrorural.gob.pe/WEBAPI_GEOVICE/api/geo/ProyectosPorDepartamento',
    data: "{'ID_DEP':'" + depID + "', 'carga': 2}",
    headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
    },
    contentType: "application/json;",
    type: "post",
    success: function (resultado) {
      let types = [];
      let proj;
      
        //console.log(resultado);      
        
        $.each(resultado, function (index, value) {
          proj = value.iProyectos;
          types.push(value.TIPOLOGIA);
          //console.log(proj);
        });

        //console.log(types);


          let allTypes = {};

          for(var i = 0; i < types.length; ++i) {
              if(!allTypes[types[i]])
                  allTypes[types[i]] = 0;
              ++allTypes[types[i]];
          }

          //console.log(allTypes["INFRAESTRUCTURA DE RIEGO"]);


        let IR = ( allTypes["INFRAESTRUCTURA DE RIEGO"] != null ) ? allTypes["INFRAESTRUCTURA DE RIEGO"] : 0; 
        let IRR = ( allTypes["IRRIGACION"] != null ) ? allTypes["IRRIGACION"] : 0; 
        let RT = ( allTypes["RIEGO TECNIFICADO"] != null ) ? allTypes["RIEGO TECNIFICADO"] : 0; 
        
        let card = '';

        card += '<div class="chart__table-container">';
        card += '<div class="card">';
        
        card += '<div class="card-image">';
        card += '<div class="card-header"><h1>' + dep + '</h1></div>';
        card += '</div>';

        card += '<div class="card-body">';
        
        //card += '<div class="row">';

        //card += '<div class="col-sm-6">';

        card += '<div class="media proj">';
        card += '<div class="media-left"><i class="fas fa-briefcase"></i></div>';
        card += '<div class="media-body">';
        card += '<h4 class="media-heading">' + proj + '</h4>';
        card += '<p>proyectos</p><br>';
        
        if( IR > 0 ){
          card += '<p><strong>' + IR + '</strong> en infraestructura de riego<br />';
        }

        if( IRR > 0 ){
          card += '<strong>' + IRR + '</strong> en irrigación<br />';
        }

        if( RT > 0 ){
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
        card += '<p>hectáreas</p>';
        card += '</div>';
        card += '</div>';
        
        card += '<div class="media exp">';
        card += '<div class="media-left"><i class="fas fa-money-bill-alt"></i></div>';
        card += '<div class="media-body">';
        card += '<h4 class="media-heading">S/ ' + exp + '</h4>';
        card += '<p>en expedientes técnicos</p>';
        card += '</div>';
        card += '</div>';

        //card += '</div>'; // .col-sm-6

        // card += '<div class="col-sm-6">';
        
        // card += '<picture class="depImage">';
        
        // card += 'Imagen aqui';

        // card += '</picture>'; // .depImage

        // card += '</div>'; // .col-sm-6
        
        //card += '</div>'; // .row

        card += '</div>';
        
        card += '<div class="card-footer">';
        card += '<a id="general" href="sierra-azul-resumen" class="btn btn-link"><i class="fas fa-arrow-left"></i> Volver</a>';
        card += '<a id="full" href="sierra-azul" class="btn btn-link" target="_blank">Reporte Completo</a>';
        card += '</div>';

        card += '</div>';
        card += '</div>';

        $(".chart__table").html(card);
    }
  });

});

// $(document).ready(function() {
//   $.ajax({
//     url: 'http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDepartamentoscombo',
//     data: "{}",
//     headers: { 
//     'Accept': 'application/json',
//     'Content-Type': 'application/json' 
//     },
//     contentType: "application/json;",
//     type: "post",
//     success: function (resultado) {
//       //console.log(resultado);
//       $("#ddlDepartamento").empty();
//       $("#ddlDepartamento").append("<option value='00' disabled selected>Seleccione</option>");
//       $.each(resultado, function (index, value) {
//         if( value.ID_DEP === '01' || value.ID_DEP === '02' || value.ID_DEP === '03' || value.ID_DEP === '04' || value.ID_DEP === '05' || value.ID_DEP === '06' || value.ID_DEP === '08' || value.ID_DEP === '09' || value.ID_DEP === '10' || value.ID_DEP === '11' || value.ID_DEP === '12' || value.ID_DEP === '13' || value.ID_DEP === '14' || value.ID_DEP === '15' || value.ID_DEP === '18' || value.ID_DEP === '20' || value.ID_DEP === '21' || value.ID_DEP === '22' || value.ID_DEP === '23' ){
//           $("#ddlDepartamento").append("<option value=" + value.ID_DEP + ">" + value.NOM_DEP + "</option>");
//         }
//       });
//     },
//     error: function (xhr, status, error) {

//     }
//   });
// });

$(document).ajaxStop(function(){
  let chartHeight= $('.chart').height();
    
  //console.log($('#map').height());

  $('#map').height( chartHeight );

  //console.log($('#map').height());
});