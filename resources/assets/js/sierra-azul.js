let tipoMapa = 1;
let map;

let dgiarDepID = '01,02,03,04,05,06,08,09,10,11,12,13,14,15,18,20,21,22,23';
let deno = '';
let tipo = '';
let depID = '';
let proID = '';
let disID = '';

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

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
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
let capaProvincias = new google.maps.Data();
let capaDistritos = new google.maps.Data();
let capaCP = new google.maps.Data();

function showDepartamentos(deno, tipo){
  $("#ddlDistrito").empty();
  $("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>");
  $("#ddlProvincia").empty();
  $("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>");
  initialState();

  depID = '00';

  $("#ddlDepartamento option").each(function(){
    if($(this).val() === depID){
      $(this).attr('selected', true);    
    }else{
      $(this).attr('selected', false);
    }
  });

  removeAllFeatures();
 
  capaDepartamentos.loadGeoJson('/departamentos/2?deps=' + dgiarDepID + '&provs=&deno=' + deno + '&tipo=' + tipo, null, function(event){
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

      $(".chart__table").find("table thead").append(`
         <tr>
           <th>ID</th>
           <th>Departamento</th>
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
          { className: "dt-body-right text-right", "targets": [ 2, 3, 4 ] },
          // { "width": "10%", "targets": [3, 4, 5] }
        ]
      });

      let meses = 0;
      let exp = 0;
      let fam = 0;
      let hect = 0;

      event.forEach(function(feature){
        
        meses = meses + parseInt(feature.f.Nro_pdn);
        exp = exp + parseInt(feature.f.Nro_pdnc);
        fam = fam + parseInt(feature.f.Inversion_pdnc);
        hect = hect + parseInt(feature.f.Nro_pdt);

        t.row.add( [
          feature.f.ID_DEP, 
          feature.f.NOMBDEP, 
          'S/. ' + numberWithCommas(feature.f.Nro_pdnc), 
          numberWithCommas(feature.f.Inversion_pdnc), 
          numberWithCommas(feature.f.Nro_pdt) 
        ]).draw( false );


      });

      var trDOM = t.row.add( [
        '', 
        'TOTAL', 
        'S/ ' + numberWithCommas(exp), 
        fam, 
        hect
      ]).draw( false ).node();

      $( trDOM ).addClass('table-success');

      equalHeight();
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

function showProvincias(id, deno, tipo){
  $("#ddlDistrito").empty();
  $("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>");

  $("#ddlDepartamento option").each(function(){
    if($(this).val() === id){
      $(this).attr('selected', true);
      //console.log(id);    
    }else{
      $(this).attr('selected', false);
    }
  });

  removeAllFeatures();

  capaProvincias.loadGeoJson('/provincias/2?deps=' + id + '&provs=&deno=' + deno + '&tipo=' + tipo, null, function(event){
    $(".chart__table").html(`
      <div class="chart__table-container">
      <table id="tblProv" class="dt-responsive" cellspacing="0" width="100%">
        <thead class="thead-dark">
        </thead>
        <tbody>
        </tbody>
      </table>
      </div>
    `);

    $(".chart__image").html(`
      <div class="chart__image-container">
      <div class="chartShow" id="chartProv" style="height:300px"></div>
      </div>
    `);

    let tableData = [];
    let chartData = [];
    let chartMultiData = [];

    $(function() {
      loadState();

      $(".chart__table").find("table thead").append(`
         <tr>
           <th>ID</th>
           <th>Provincia</th>
           <th>Exp. Téc.</th>
           <th>Familias Benef.</th>
           <th>Hectáreas</th>
         </tr>
       `);

      let tblProv = $('#tblProv').DataTable({
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
          { className: "dt-body-right text-right", "targets": [ 2, 3, 4 ] },
          // { "width": "10%", "targets": [2, 4, 5] }
        ]
      });

      let tblProvmeses = 0;
      let tblProvexp = 0;
      let tblProvfam = 0;
      let tblProvhect = 0;

      event.forEach(function(feature){
        
        tblProvmeses = tblProvmeses + parseInt(feature.f.Nro_pdn);
        tblProvexp = tblProvexp + parseInt(feature.f.Nro_pdnc);
        tblProvfam = tblProvfam + parseInt(feature.f.Inversion_pdnc);
        tblProvhect = tblProvhect + parseInt(feature.f.Nro_pdt);

        tblProv.row.add( [
          feature.f.ID_PROV, 
          feature.f.NOM_PROV, 
          'S/. ' + numberWithCommas(feature.f.Nro_pdnc), 
          numberWithCommas(feature.f.Inversion_pdnc), 
          numberWithCommas(feature.f.Nro_pdt) 
        ]).draw( false );

        chartMultiData.push({name: feature.f.NOM_PROV, data: {"Familias": parseInt(feature.f.Inversion_pdnc), "Hectáreas": parseInt(feature.f.Nro_pdt)}});
      });

      var tblProvtrDOM = tblProv.row.add( [
        '', 
        'TOTAL', 
        'S/ ' + numberWithCommas(tblProvexp), 
        tblProvfam, 
        tblProvhect
      ]).draw( false ).node();

      $( tblProvtrDOM ).addClass('table-success');

      new Chartkick.ColumnChart("chartProv", chartMultiData, {legend: "bottom"});

      equalHeight();
    });

  });

  capaProvincias.setStyle(function(feature) {
    return ({
        // strokeColor: feature.getProperty('color'),
        fillColor: feature.getProperty('color'),
        strokeOpacity: 0.5,
        fillOpacity: 0.7,
        strokeWeight: 1
      });
  });

  capaProvincias.addListener('addfeature', function(event) { 
    capaProvincias.setMap(map);
    let bounds = new google.maps.LatLngBounds();
    processPoints(event.feature.getGeometry(), bounds.extend, bounds);
    map.fitBounds(bounds);
    map.setZoom(7);
  });

  capaProvincias.addListener('mouseover', function(event) {
    capaProvincias.revertStyle();
    capaProvincias.overrideStyle(event.feature, {fillOpacity: 1});
    $(".chart__table").find("table tbody tr#" + event.feature.getProperty('ID_PROV') ).addClass('success');
  });

  capaProvincias.addListener('mouseout', function(event) {
    capaProvincias.revertStyle();
    $(".chart__table").find("table tbody tr").removeClass('success');
  });

}

function showDistritos(id, deno, tipo){
  removeAllFeatures();

  provID = id;

  $("#ddlProvincia option").each(function(){
    if($(this).val() === provID){
      $(this).attr('selected', true);    
    }else{
      $(this).attr('selected', false);
    }
  });

  capaDistritos.loadGeoJson('/distritos/2?deps=&provs=' + provID + '&dis=&deno=' + deno + '&tipo=' + tipo, null, function(event){    
    //console.log(event);
    $(".chart__table").html(`
      <div class="chart__table-container">
      <table id="tblDis" class="dt-responsive" cellspacing="0" width="100%">
        <thead class="thead-dark">
        </thead>
        <tbody>
        </tbody>
      </table>
      </div>
    `);

    $(".chart__image").html(`
      <div class="chart__image-container">
      <div class="chartShow" id="chartDis" style="height:300px"></div>
      </div>
    `);

    let tableData = [];
    let chartMultiData = [];
    let chartData = [];

    $(function() {
      loadState();
      

    $(".chart__table").find("table thead").append(`
        <tr>
          <th>ID</th>
          <th>Distrito</th>
          <th>Exp. Téc.</th>
          <th>Familias Benef.</th>
          <th>Hectáreas</th>
        </tr>
      `);

      let tblDis = $('#tblDis').DataTable({
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
          { className: "dt-body-right text-right", "targets": [ 2, 3, 4] },
          // { "width": "10%", "targets": [2, 4, 5] }
        ]
      });

      let tblDismeses = 0;
      let tblDisexp = 0;
      let tblDisfam = 0;
      let tblDishect = 0;

      event.forEach(function(feature){
        
        tblDismeses = tblDismeses + parseInt(feature.f.Nro_pdn);
        tblDisexp = tblDisexp + parseInt(feature.f.Nro_pdnc);
        tblDisfam = tblDisfam + parseInt(feature.f.Inversion_pdnc);
        tblDishect = tblDishect + parseInt(feature.f.Nro_pdt);

        tblDis.row.add( [
          feature.f.ID_DIS, 
          feature.f.NOM_DIS, 
          'S/. ' + numberWithCommas(feature.f.Nro_pdnc), 
          numberWithCommas(feature.f.Inversion_pdnc), 
          numberWithCommas(feature.f.Nro_pdt) 
        ]).draw( false );

        chartMultiData.push({name: feature.f.NOM_DIS, data: {"Familias": parseInt(feature.f.Inversion_pdnc), "Hectáreas": parseInt(feature.f.Nro_pdt)}});
      });

      var tblDistrDOM = tblDis.row.add( [
        '', 
        'TOTAL', 
        'S/ ' + numberWithCommas(tblDisexp), 
        tblDisfam, 
        tblDishect
      ]).draw( false ).node();

      $( tblDistrDOM ).addClass('table-success');

      new Chartkick.ColumnChart("chartDis", chartMultiData, {legend: "bottom"});

      equalHeight();
    });

    //console.log(tableData);
  });

  capaDistritos.setStyle(function(feature) {
  //console.log(feature);
    return /** @type {google.maps.Data.StyleOptions} */({
      // strokeColor: feature.getProperty('color'),
      fillColor: feature.getProperty('color'),
      strokeOpacity: 0.5,
      fillOpacity: 0.7,
      strokeWeight: 1
    });
  });

  capaDistritos.addListener('mouseover', function(event) {
    capaDistritos.revertStyle();
    capaDistritos.overrideStyle(event.feature, {fillOpacity: 1});
    $(".chart__table").find("table tbody tr#" + event.feature.getProperty('ID_DIS') ).addClass('success');
  });

  capaDistritos.addListener('mouseout', function(event) {
    capaDistritos.revertStyle();
    $(".chart__table").find("table tbody tr").removeClass('success');
  });

  capaDistritos.addListener('addfeature', function(event) {
    capaDistritos.setMap(map);
    let bounds = new google.maps.LatLngBounds();
    processPoints(event.feature.getGeometry(), bounds.extend, bounds);
    map.fitBounds(bounds);
    map.setZoom(9);
  });
}

function showCP(id, deno, tipo){
  disID = id;

  removeAllFeatures();

  $("#ddlDistrito option").each(function(){
    if($(this).val() === disID){
      $(this).attr('selected', true);    
    }else{
      $(this).attr('selected', false);
    }
  });

  capaCP.loadGeoJson('/cp/2?deps=&provs=&dis=' + disID + '&ccpps=&deno=' + deno + '&tipo=' + tipo, null, function(event){    
    //console.log(event);
    $(".chart__table").html(`
      <div class="chart__table-container">
      <table id="tblCP" class="dt-responsive" cellspacing="0" width="100%">
        <thead class="thead-dark">
        </thead>
        <tbody>
        </tbody>
      </table>
      </div>
    `);

    $(".chart__image").html(`
      <div class="chart__image-container">
      <div class="chartShow" id="chartCP" style="height:300px"></div>
      </div>
    `);

    let tableData = [];
    let chartMultiData = [];


    $(".chart__table").find("table thead").append(`
    <tr>
    <th>ID</th>
    <th>Proyecto</th>
    <th>Presupuesto</th>
    <th>Tipología</th>
    <th>Unid. Ejecutora</th>
    <th>Ind. Formulad.</th>
    </tr>
    `);
    
    event.forEach(function(feature){
      //console.log(feature.f);

      tableData.push([feature.f.CODCP, feature.f.NOMBRE_PROYECTO, 'S/. ' + numberWithCommas(feature.f.MONTO_EXPEDIENTE_TECNICO), feature.f.TIPOLOGIA, feature.f.ORGANIZACION, feature.f.UNIDAD_FORMULADORA]);
      chartMultiData.push({name: feature.f.NOMCP, data: {"Familias": parseInt(feature.f.Inversion_pdnc), "Hectáreas": parseInt(feature.f.Nro_pdt)}});
    });

    new Chartkick.ColumnChart("chartCP", chartMultiData, {legend: "bottom"});

    $(function() {
      loadState();
      
      $('#tblCP').DataTable( {
        "paging": false,
        "searching": false,
        "language": {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        data: tableData,
        "fnCreatedRow": function( nRow, aData, iDataIndex ) {
            $(nRow).attr('class', aData[0]);
        },
        "columnDefs": [ {
          "targets": 0,
          "visible": false
        },
        { className: "dt-body-right text-right", "targets": [ 2] }]

      } );

      equalHeight();

    });

    //console.log(tableData);
  });

  capaCP.addListener('mouseover', function(event) {
    $(".chart__table").find("table tbody tr." + event.feature.getProperty('CODCP')).addClass('success');
  });

  capaCP.addListener('mouseout', function(event) {
     $(".chart__table").find("table tbody tr").removeClass("success");
  });

  capaCP.addListener('addfeature', function(event) {
    capaCP.setMap(map);
    let bounds = new google.maps.LatLngBounds();
    processPoints(event.feature.getGeometry(), bounds.extend, bounds);
    map.fitBounds(bounds);
    map.setZoom(10);
  });

}

function cleanForm(){
  
}

function search(){
    let denoInput = $('#txtDenom').val();
    let ddlTipo = $('#ddlTipo').val();

    if ( $('#ddlDepartamento').val() != null && $('#ddlProvincia').val() != null && $('#ddlDistrito').val() != null ) { //Todos seleccionados
      let disID = $("#ddlDistrito").val();
      showCP(disID, denoInput, ddlTipo);
      console.log('Mostrando ' + denoInput + ' en el distrito ' + disID);
    } else if ($('#ddlDepartamento').val() != null && $('#ddlProvincia').val() != null && $('#ddlDistrito').val() === null) { //Departamento => Provincia
      let provID = $("#ddlProvincia").val();
      showDistritos(provID, denoInput, ddlTipo);
      console.log('Mostrando ' + denoInput + ' en la provincia ' + provID);
    } else if ($('#ddlDepartamento').val() != null && $('#ddlProvincia').val() === null && $('#ddlDistrito').val() === null) { //Departamento
      cleanForm('dep');
      let depID = $("#ddlDepartamento").val();
      showProvincias(depID, denoInput, ddlTipo);
      console.log('Mostrando ' + denoInput + ' en el departamento ' + depID);
    }else{
      showDepartamentos(denoInput, ddlTipo);
      console.log('Mostrando ' + denoInput + ' en todos los departamentos');
    }
}

$('#btnBuscar').click(function(e){
  e.preventDefault();
  //initialState();
  search();
});

$('#btnLimpiar').click(function(){
  //debugger;
  //initialState();
  $('#txtDenom').val('');
  $('#ddlTipo').val('');
  showDepartamentos('','');
});

showDepartamentos('','');


capaDepartamentos.addListener('click', function(event) {
  //console.log(event);
  depID = event.feature.getProperty('ID_DEP');
  // capaDepartamentos.forEach(function (feature) {
  //   capaDepartamentos.remove(feature);
  // });

  // event.feature.setProperty('isColorful', true);
  // event.feature.setProperty('color', 'white');
  // capaProvincias.loadGeoJson('/provincias/2?deps=' + depID + '&provs=');
  // capaProvincias.setMap(map);
  // let bounds = new google.maps.LatLngBounds();
  // processPoints(event.feature.getGeometry(), bounds.extend, bounds);
  // map.fitBounds(bounds);
  // map.setZoom(8);

  $("#ddlDepartamento").val(depID).change();

});

capaProvincias.addListener('click', function(event) {
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

capaDistritos.addListener('click', function(event) {
  disID = event.feature.getProperty('ID_DIS');
  let bounds = new google.maps.LatLngBounds();
  processPoints(event.feature.getGeometry(), bounds.extend, bounds);
  map.fitBounds(bounds);
  map.setZoom(8);

  $("#ddlDistrito").val(disID).change();
  //console.log(event.feature);
});

$(document).ready(function() {
    $.ajax({
      url: 'http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDepartamentoscombo',
      data: "{}",
      headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
      },
      contentType: "application/json;",
      type: "post",
      success: function (resultado) {
        //console.log(resultado);
        $("#ddlDepartamento").empty();
        $("#ddlDepartamento").append("<option value='00' disabled selected>Seleccione</option>");
        $.each(resultado, function (index, value) {
          if( value.ID_DEP === '01' || value.ID_DEP === '02' || value.ID_DEP === '03' || value.ID_DEP === '04' || value.ID_DEP === '05' || value.ID_DEP === '06' || value.ID_DEP === '08' || value.ID_DEP === '09' || value.ID_DEP === '10' || value.ID_DEP === '11' || value.ID_DEP === '12' || value.ID_DEP === '13' || value.ID_DEP === '14' || value.ID_DEP === '15' || value.ID_DEP === '18' || value.ID_DEP === '20' || value.ID_DEP === '21' || value.ID_DEP === '22' || value.ID_DEP === '23' ){
            $("#ddlDepartamento").append("<option value=" + value.ID_DEP + ">" + value.NOM_DEP + "</option>");
          }
        });
      },
      error: function (xhr, status, error) {

      }
    });

    $("#ddlDepartamento").change(function(event){
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
        success: function (resultado) {
          //console.log(resultado);
          $("#ddlProvincia").empty();
          $("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>");
          $.each(resultado, function (index, value) {
              $("#ddlProvincia").append("<option value=" + value.ID_PROV + ">" + value.NOM_PROV + "</option>");
          });
        },
        error: function (xhr, status, error) {

        }
      });
    });

    $("#ddlProvincia").change(function(){
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
        success: function (resultado) {
          //console.log(resultado);
          $("#ddlDistrito").empty();
          $("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>");
          $.each(resultado, function (index, value) {
              $("#ddlDistrito").append("<option value=" + value.ID_DIS + ">" + value.NOM_DIS + "</option>");
          });
        },
        error: function (xhr, status, error) {

        }
      });
    });

    $("#ddlDistrito").change(function(){
      initialState();    
      showCP($(this).val(), $('#txtDenom').val(), $('#ddlTipo').val())
    });

    $("#ddlTipo").change(function(){
      initialState();

      let denoInput = $('#txtDenom').val();
      let ddlTipo = $(this).val();

      search();
    });
});

function getRegion() {
  $(".chart__image").html(`
      <div class="chart__image-container">
      <div class="page-header"><h3>Por regiones</h3></div>
      <canvas class="chartShow" id="chartDep" style="height:300px"></canvas>
      </div>
  `);

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


function equalHeight() {
    let chartHeight = $('.chart').height();
      
    console.log('Mapa antes: '+  $('#map').height());
  
    $('#map').height( chartHeight );
  
    console.log('Mapa despues: '+  $('#map').height());
    console.log('chart: '+  chartHeight);
}