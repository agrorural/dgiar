!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=43)}({43:function(e,t,a){e.exports=a(44)},44:function(e,t){function a(){$(".spinner-wrapper").show(),$(".chart__table").html(""),$(".chart__image").html("")}function n(){_.forEach(function(e){_.remove(e)}),v.forEach(function(e){v.remove(e)}),y.forEach(function(e){y.remove(e)}),D.forEach(function(e){D.remove(e)})}function r(e,t,a){e instanceof google.maps.LatLng?t.call(a,e):e instanceof google.maps.Data.Point?t.call(a,e.get()):e.getArray().forEach(function(e){r(e,t,a)})}function o(){$(".spinner-wrapper").hide()}function s(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}function i(e,t){$("#ddlDistrito").empty(),$("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>"),$("#ddlProvincia").empty(),$("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>"),a(),g="00",$("#ddlDepartamento option").each(function(){$(this).val()===g?$(this).attr("selected",!0):$(this).attr("selected",!1)}),n(),_.loadGeoJson("/departamentos?deps="+u+"&provs=&deno="+e+"&tipo="+t,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblDep" cellspacing="0" class="dt-responsive nowrap" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartDep" style="height:300px"></div>\n      </div>\n    ');var a=[],n=[];switch(t){case"IDR":case"IRR":case"TEC":$(".chart__table").find("table thead").append("\n            <tr>\n              <th>ID</th>\n              <th>Departamento</th>\n              <th>Duración (m)</th>\n              <th>Exp. Téc.</th>\n              <th>Familias Benef.</th>\n              <th>Hectáreas</th>\n            </tr>\n          "),e.forEach(function(e){a.push([e.f.ID_DEP,e.f.NOMBDEP,e.f.Nro_pdn,"S/. "+s(e.f.Nro_pdnc),s(e.f.Inversion_pdnc),s(e.f.Nro_pdt)]),n.push({name:e.f.NOMBDEP,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartDep",n,{legend:"bottom"});break;default:$(".chart__table").find("table thead").append("\n          <tr>\n            <th>ID</th>\n            <th>Departamento</th>\n            <th>Duración (m)</th>\n            <th>Exp. Téc.</th>\n            <th>Familias Benef.</th>\n            <th>Hectáreas</th>\n          </tr>\n        "),e.forEach(function(e){a.push([e.f.ID_DEP,e.f.NOMBDEP,e.f.Nro_pdn,"S/. "+s(e.f.Nro_pdnc),s(e.f.Inversion_pdnc),s(e.f.Nro_pdt)]),n.push({name:e.f.NOMBDEP,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartDep",n,{legend:"bottom"})}$(function(){o(),$("#tblDep").DataTable({order:[[3,"desc"]],paging:!1,searching:!1,language:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},fnCreatedRow:function(e,t,a){$(e).attr("id",t[0])},data:a,columnDefs:[{targets:0,visible:!1},{className:"dt-body-right text-right",targets:[2,3,4,5]},{width:"10%",targets:[2,4,5]}]});var e=$(".chart").height();$("#map").height(e)})}),_.setStyle(function(e){return{strokeColor:e.getProperty("color"),fillColor:e.getProperty("color"),fillOpacity:.7,strokeWeight:1}}),_.addListener("mouseover",function(e){_.revertStyle(),_.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_DEP")).addClass("success")}),_.addListener("mouseout",function(e){_.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")}),_.setMap(f),f.setZoom(6)}function l(e,t,a){$("#ddlDistrito").empty(),$("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>"),$("#ddlDepartamento option").each(function(){$(this).val()===e?$(this).attr("selected",!0):$(this).attr("selected",!1)}),n(),v.loadGeoJson("/provincias?deps="+e+"&provs=&deno="+t+"&tipo="+a,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblProv" class="dt-responsive nowrap" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartProv" style="height:300px"></div>\n      </div>\n    ');var t=[],n=[];switch(a){case"IDR":case"IRR":case"TEC":$(".chart__table").find("table thead").append("\n              <tr>\n                <th>ID</th>\n                <th>Provincia</th>\n                <th>Duración (m)</th>\n                <th>Exp. Téc.</th>\n                <th>Familias Benef.</th>\n                <th>Hectáreas</th>\n              </tr>\n            "),e.forEach(function(e){t.push([e.f.ID_PROV,e.f.NOM_PROV,e.f.Nro_pdn,"S/. "+s(e.f.Nro_pdnc),s(e.f.Inversion_pdnc),s(e.f.Nro_pdt)]),n.push({name:e.f.NOM_PROV,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartProv",n,{legend:"bottom"});break;default:$(".chart__table").find("table thead").append("\n                <tr>\n                  <th>ID</th>\n                  <th>Provincia</th>\n                  <th>Duración (m)</th>\n                  <th>Exp. Téc.</th>\n                  <th>Familias Benef.</th>\n                  <th>Hectáreas</th>\n                </tr>\n              "),e.forEach(function(e){t.push([e.f.ID_PROV,e.f.NOM_PROV,e.f.Nro_pdn,"S/. "+s(e.f.Nro_pdnc),s(e.f.Inversion_pdnc),s(e.f.Nro_pdt)]),n.push({name:e.f.NOM_PROV,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartProv",n,{legend:"bottom"})}$(function(){o(),$("#tblProv").DataTable({order:[[3,"desc"]],paging:!1,searching:!1,language:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},fnCreatedRow:function(e,t,a){$(e).attr("id",t[0])},data:t,columnDefs:[{targets:0,visible:!1},{className:"dt-body-right text-right",targets:[2,3,4,5]}]});var e=$(".chart").height();$("#map").height(e)})}),v.setStyle(function(e){return{strokeColor:e.getProperty("color"),fillColor:e.getProperty("color"),fillOpacity:.7,strokeWeight:1}}),v.addListener("addfeature",function(e){v.setMap(f);var t=new google.maps.LatLngBounds;r(e.feature.getGeometry(),t.extend,t),f.fitBounds(t),f.setZoom(7)}),v.addListener("mouseover",function(e){v.revertStyle(),v.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_PROV")).addClass("success")}),v.addListener("mouseout",function(e){v.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")})}function d(e,t,a){n(),provID=e,$("#ddlProvincia option").each(function(){$(this).val()===provID?$(this).attr("selected",!0):$(this).attr("selected",!1)}),y.loadGeoJson("/distritos?deps=&provs="+provID+"&dis=&deno="+t+"&tipo="+a,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblDis"  class="dt-responsive nowrap" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartDis" style="height:300px"></div>\n      </div>\n    ');var t=[],n=[];switch(a){case"IDR":case"IRR":case"TEC":$(".chart__table").find("table thead").append("\n              <tr>\n                <th>ID</th>\n                <th>Distrito</th>\n                <th>Duración (m)</th>\n                <th>Exp. Téc.</th>\n                <th>Familias Benef.</th>\n                <th>Hectáreas</th>\n            "),e.forEach(function(e){t.push([e.f.ID_DIS,e.f.NOM_DIS,e.f.Nro_pdn,"S/. "+s(e.f.Nro_pdnc),s(e.f.Inversion_pdnc),s(e.f.Nro_pdt)]),n.push({name:e.f.NOM_PROV,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartDis",n,{legend:"bottom"});break;default:$(".chart__table").find("table thead").append("\n            <tr>\n              <th>ID</th>\n              <th>Distrito</th>\n              <th>Duración (m)</th>\n              <th>Exp. Téc.</th>\n              <th>Familias Benef.</th>\n              <th>Hectáreas</th>\n          "),e.forEach(function(e){t.push([e.f.ID_DIS,e.f.NOM_DIS,e.f.Nro_pdn,"S/. "+s(e.f.Nro_pdnc),s(e.f.Inversion_pdnc),s(e.f.Nro_pdt)]),n.push({name:e.f.NOM_PROV,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartDis",n,{legend:"bottom"})}$(function(){o(),$("#tblDis").DataTable({order:[[3,"desc"]],paging:!1,searching:!1,language:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},fnCreatedRow:function(e,t,a){$(e).attr("id",t[0])},data:t,columnDefs:[{targets:0,visible:!1},{className:"dt-body-right text-right",targets:[2,3,4,5]}]});var e=$(".chart").height();$("#map").height(e)})}),y.setStyle(function(e){return{strokeColor:e.getProperty("color"),fillColor:e.getProperty("color"),fillOpacity:.7,strokeWeight:1}}),y.addListener("mouseover",function(e){y.revertStyle(),y.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_DIS")).addClass("success")}),y.addListener("mouseout",function(e){y.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")}),y.addListener("addfeature",function(e){y.setMap(f);var t=new google.maps.LatLngBounds;r(e.feature.getGeometry(),t.extend,t),f.fitBounds(t),f.setZoom(9)})}function c(e,t,a){m=e,n(),$("#ddlDistrito option").each(function(){$(this).val()===m?$(this).attr("selected",!0):$(this).attr("selected",!1)}),D.loadGeoJson("/cp?deps=&provs=&dis="+m+"&ccpps=&deno="+t+"&tipo="+a,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblCP" class="dt-responsive nowrap" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartCP" style="height:300px"></div>\n      </div>\n    ');var t=[],n=[];switch(a){case"IDR":case"IRR":case"TEC":$(".chart__table").find("table thead").append("\n          <tr>\n          <th>ID</th>\n          <th>Proyecto</th>\n          <th>Presupuesto</th>\n          <th>Tipología</th>\n          <th>Organización</th>\n          <th>Ind. Formulad.</th>\n          </tr>\n          "),e.forEach(function(e){t.push([e.f.CODCP,e.f.NOMBRE_PROYECTO,"S/. "+s(e.f.MONTO_EXPEDIENTE_TECNICO),e.f.TIPOLOGIA,e.f.ORGANIZACION,e.f.UNIDAD_FORMULADORA]),n.push({name:e.f.NOM_PROV,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartCP",n,{legend:"bottom"});break;default:$(".chart__table").find("table thead").append("\n        <tr>\n        <th>ID</th>\n        <th>Proyecto</th>\n        <th>Presupuesto</th>\n        <th>Tipología</th>\n        <th>Organización</th>\n        <th>Ind. Formulad.</th>\n        </tr>\n        "),e.forEach(function(e){t.push([e.f.CODCP,e.f.NOMBRE_PROYECTO,"S/. "+s(e.f.MONTO_EXPEDIENTE_TECNICO),e.f.TIPOLOGIA,e.f.ORGANIZACION,e.f.UNIDAD_FORMULADORA]),n.push({name:e.f.NOM_PROV,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartCP",n,{legend:"bottom"})}$(function(){o(),$("#tblCP").DataTable({paging:!1,searching:!1,language:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},data:t,fnCreatedRow:function(e,t,a){$(e).attr("class",t[0])},columnDefs:[{targets:0,visible:!1},{className:"dt-body-right text-right",targets:[2]}]});var e=$(".chart").height();$("#map").height(e)})}),D.addListener("mouseover",function(e){$(".chart__table").find("table tbody tr."+e.feature.getProperty("CODCP")).addClass("success")}),D.addListener("mouseout",function(e){$(".chart__table").find("table tbody tr").removeClass("success")}),D.addListener("addfeature",function(e){D.setMap(f);var t=new google.maps.LatLngBounds;r(e.feature.getGeometry(),t.extend,t),f.fitBounds(t),f.setZoom(10)})}function p(){}function h(){var e=$("#txtDenom").val(),t=$("#ddlTipo").val();if(null!=$("#ddlDepartamento").val()&&null!=$("#ddlProvincia").val()&&null!=$("#ddlDistrito").val()){var a=$("#ddlDistrito").val();c(a,e,t)}else if(null!=$("#ddlDepartamento").val()&&null!=$("#ddlProvincia").val()&&null===$("#ddlDistrito").val()){var n=$("#ddlProvincia").val();d(n,e,t)}else if(null!=$("#ddlDepartamento").val()&&null===$("#ddlProvincia").val()&&null===$("#ddlDistrito").val()){p("dep");var r=$("#ddlDepartamento").val();l(r,e,t)}else i(e,t)}var f=void 0,u="01,02,03,04,05,06,08,09,10,11,12,13,14,15,18,20,21,22,23",g="",m="";a(),f=new google.maps.Map(document.getElementById("map"),{zoom:6,center:{lat:-12.079652,lng:-77.042575},styles:[{elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#656366"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#eaebed"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eaebed"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#cbdaaf"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#cbdaaf"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#b3c8aa"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#b3c8aa"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#d7d8dc"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#d7d8dc"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#ccdfe6"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}]});var _=new google.maps.Data,v=new google.maps.Data,y=new google.maps.Data,D=new google.maps.Data;$("#btnBuscar").click(function(e){e.preventDefault(),h()}),$("#btnLimpiar").click(function(){$("#txtDenom").val(""),$("#ddlTipo").val(""),i("","")}),i("",""),_.addListener("click",function(e){g=e.feature.getProperty("ID_DEP"),$("#ddlDepartamento").val(g).change()}),v.addListener("click",function(e){provID=e.feature.getProperty("ID_PROV"),$("#ddlProvincia").val(provID).change()}),y.addListener("click",function(e){m=e.feature.getProperty("ID_DIS");var t=new google.maps.LatLngBounds;r(e.feature.getGeometry(),t.extend,t),f.fitBounds(t),f.setZoom(8),$("#ddlDistrito").val(m).change()}),$(document).ready(function(){$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDepartamentoscombo",data:"{}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlDepartamento").empty(),$("#ddlDepartamento").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){"01"!==t.ID_DEP&&"02"!==t.ID_DEP&&"03"!==t.ID_DEP&&"04"!==t.ID_DEP&&"05"!==t.ID_DEP&&"06"!==t.ID_DEP&&"08"!==t.ID_DEP&&"09"!==t.ID_DEP&&"10"!==t.ID_DEP&&"11"!==t.ID_DEP&&"12"!==t.ID_DEP&&"13"!==t.ID_DEP&&"14"!==t.ID_DEP&&"15"!==t.ID_DEP&&"18"!==t.ID_DEP&&"20"!==t.ID_DEP&&"21"!==t.ID_DEP&&"22"!==t.ID_DEP&&"23"!==t.ID_DEP||$("#ddlDepartamento").append("<option value="+t.ID_DEP+">"+t.NOM_DEP+"</option>")})},error:function(e,t,a){}}),$("#ddlDepartamento").change(function(e){a(),l($(this).val(),$("#txtDenom").val(),$("#ddlTipo").val()),$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarProvinciascombo",data:"{ ID_DEP: '"+$(this).val()+"'}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlProvincia").empty(),$("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){$("#ddlProvincia").append("<option value="+t.ID_PROV+">"+t.NOM_PROV+"</option>")})},error:function(e,t,a){}})}),$("#ddlProvincia").change(function(){a(),d($(this).val(),$("#txtDenom").val(),$("#ddlTipo").val()),$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDistritoscombo",data:"{ ID_PROV: '"+$(this).val()+"'}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlDistrito").empty(),$("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){$("#ddlDistrito").append("<option value="+t.ID_DIS+">"+t.NOM_DIS+"</option>")})},error:function(e,t,a){}})}),$("#ddlDistrito").change(function(){a(),c($(this).val(),$("#txtDenom").val(),$("#ddlTipo").val())}),$("#ddlTipo").change(function(){a();$("#txtDenom").val(),$(this).val();h()})})}});