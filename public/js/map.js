!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=43)}({43:function(e,t,n){e.exports=n(44)},44:function(e,t){function n(){$(".spinner-wrapper").show(),$(".chart__table").html(""),$(".chart__image").html("")}function a(){D.forEach(function(e){D.remove(e)}),g.forEach(function(e){g.remove(e)}),m.forEach(function(e){m.remove(e)}),y.forEach(function(e){y.remove(e)})}function o(e,t,n){e instanceof google.maps.LatLng?t.call(n,e):e instanceof google.maps.Data.Point?t.call(n,e.get()):e.getArray().forEach(function(e){o(e,t,n)})}function r(){$(".spinner-wrapper").hide()}function s(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}function i(e,t){$("#ddlDistrito").empty(),$("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>"),$("#ddlProvincia").empty(),$("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>"),n(),_="00",$("#ddlDepartamento option").each(function(){$(this).val()===_?$(this).attr("selected",!0):$(this).attr("selected",!1)}),a(),D.loadGeoJson("/departamentos?deps="+u+"&provs=&deno="+e+"&tipo="+t,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <div class="page-header"><h3>Departamentos</h3></div>\n      <table id="tblDep" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="page-header"><h3>Planes</h3></div>\n      <div class="chartShow" id="chartDep" style="height:300px"></div>\n      </div>\n    ');var n=[],a=[],o=[];switch(t){case"PDN":$(".chart__table").find("table thead").append('\n              <tr>\n                <th rowspan="2">ID</th>\n                <th rowspan="2">Departamento</th>\n                <th colspan="2">PDN</th>\n              </tr>\n              <tr>\n                <th scope="col">Nº</th>\n                <th scope="col">Inversión</th>\n              </tr>\n            '),e.forEach(function(e){n.push([e.f.ID_DEP,e.f.NOMBDEP,e.f.Nro_pdn,"S/. "+s(e.f.Inversion_pdn)]),o.push([e.f.NOMBDEP,parseInt(e.f.Nro_pdn)])}),new Chartkick.PieChart("chartDep",o);break;case"PDNC":$(".chart__table").find("table thead").append('\n              <tr>\n                <th rowspan="2">ID</th>\n                <th rowspan="2">Departamento</th>\n                <th colspan="2">PDNC</th>\n              </tr>\n              <tr>\n                <th scope="col">Nº</th>\n                <th scope="col">Inversión</th>\n              </tr>\n            '),e.forEach(function(e){n.push([e.f.ID_DEP,e.f.NOMBDEP,e.f.Nro_pdnc,"S/. "+s(e.f.Inversion_pdnc)]),o.push([e.f.NOMBDEP,parseInt(e.f.Nro_pdnc)])}),new Chartkick.PieChart("chartDep",o);break;case"PDT":$(".chart__table").find("table thead").append('\n              <tr>\n                <th rowspan="2">ID</th>\n                <th rowspan="2">Departamento</th>\n                <th colspan="2">PDT</th>\n              </tr>\n              <tr>\n                <th scope="col">Nº</th>\n                <th scope="col">Inversión</th>\n              </tr>\n            '),e.forEach(function(e){n.push([e.f.ID_DEP,e.f.NOMBDEP,e.f.Nro_pdt,"S/. "+s(e.f.Inversion_pdt)]),o.push([e.f.NOMBDEP,parseInt(e.f.Nro_pdt)])}),new Chartkick.PieChart("chartDep",o);break;default:$(".chart__table").find("table thead").append('\n          <tr>\n            <th rowspan="2">ID</th>\n            <th rowspan="2">Departamento</th>\n            <th colspan="2">PDN</th>\n            <th colspan="2">PDNC</th>\n            <th colspan="2">PDT</th>\n          </tr>\n          <tr>\n            <th scope="col">Nº</th>\n            <th scope="col">Inversión</th>\n            <th scope="col">Nº</th>\n            <th scope="col">Inversión</th>\n            <th scope="col">Nº</th>\n            <th scope="col">Inversión</th>\n          </tr>\n        '),e.forEach(function(e){n.push([e.f.ID_DEP,e.f.NOMBDEP,e.f.Nro_pdn,"S/. "+s(e.f.Inversion_pdn),e.f.Nro_pdnc,"S/. "+s(e.f.Inversion_pdnc),e.f.Nro_pdt,"S/. "+s(e.f.Inversion_pdt)]),a.push({name:e.f.NOMBDEP,data:{PDN:parseInt(e.f.Nro_pdn),PDNC:parseInt(e.f.Nro_pdnc),PDT:parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartDep",a,{legend:"bottom"})}$(function(){r(),$("#tblDep").DataTable({order:[[2,"desc"]],language:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},fnCreatedRow:function(e,t,n){$(e).attr("id",t[0])},data:n,columnDefs:[{targets:0,visible:!1}]});var e=$(".chart").height();$("#map").height(e)})}),D.setStyle(function(e){return{strokeColor:e.getProperty("color"),fillColor:e.getProperty("color"),fillOpacity:.7,strokeWeight:1}}),D.addListener("mouseover",function(e){D.revertStyle(),D.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_DEP")).addClass("success")}),D.addListener("mouseout",function(e){D.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")}),D.setMap(f),f.setZoom(6)}function l(e,t,n){$("#ddlDistrito").empty(),$("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>"),$("#ddlDepartamento option").each(function(){$(this).val()===e?$(this).attr("selected",!0):$(this).attr("selected",!1)}),a(),g.loadGeoJson("/provincias?deps="+e+"&provs=&deno="+t+"&tipo="+n,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <div class="page-header"><h3>Provincias</h3></div>\n      <table id="tblProv" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="page-header"><h3>Planes</h3></div>\n      <div class="chartShow" id="chartProv" style="height:300px"></div>\n      </div>\n    ');var t=[],a=[],o=[];switch(n){case"PDN":$(".chart__table").find("table thead").append('\n              <tr>\n                <th rowspan="2">ID</th>\n                <th rowspan="2">Provincia</th>\n                <th colspan="2">PDN</th>\n              </tr>\n              <tr>\n                <th scope="col">Nº</th>\n                <th scope="col">Inversión</th>\n              </tr>\n            '),e.forEach(function(e){t.push([e.f.ID_PROV,e.f.NOM_PROV,e.f.Nro_pdn,"S/. "+s(e.f.Inversion_pdn)]),a.push([e.f.NOM_PROV,parseInt(e.f.Nro_pdn)])}),new Chartkick.PieChart("chartProv",a);break;case"PDNC":$(".chart__table").find("table thead").append('\n              <tr>\n                <th rowspan="2">ID</th>\n                <th rowspan="2">Provincia</th>\n                <th colspan="2">PDNC</th>\n              </tr>\n              <tr>\n                <th scope="col">Nº</th>\n                <th scope="col">Inversión</th>\n              </tr>\n            '),e.forEach(function(e){t.push([e.f.ID_PROV,e.f.NOM_PROV,e.f.Nro_pdnc,"S/. "+s(e.f.Inversion_pdnc)]),a.push([e.f.NOM_PROV,parseInt(e.f.Nro_pdnc)])}),new Chartkick.PieChart("chartProv",a);break;case"PDT":$(".chart__table").find("table thead").append('\n              <tr>\n                <th rowspan="2">ID</th>\n                <th rowspan="2">Provincia</th>\n                <th colspan="2">PDT</th>\n              </tr>\n              <tr>\n                <th scope="col">Nº</th>\n                <th scope="col">Inversión</th>\n              </tr>\n            '),e.forEach(function(e){t.push([e.f.ID_PROV,e.f.NOM_PROV,e.f.Nro_pdt,"S/. "+s(e.f.Inversion_pdt)]),a.push([e.f.NOM_PROV,parseInt(e.f.Nro_pdt)])}),new Chartkick.PieChart("chartProv",a);break;default:$(".chart__table").find("table thead").append('\n                <tr>\n                  <th rowspan="2">ID</th>\n                  <th rowspan="2">Provincia</th>\n                  <th colspan="2">PDN</th>\n                  <th colspan="2">PDNC</th>\n                  <th colspan="2">PDT</th>\n                </tr>\n                <tr>\n                  <th scope="col">Nº</th>\n                  <th scope="col">Inversión</th>\n                  <th scope="col">Nº</th>\n                  <th scope="col">Inversión</th>\n                  <th scope="col">Nº</th>\n                  <th scope="col">Inversión</th>\n                </tr>\n              '),e.forEach(function(e){t.push([e.f.ID_PROV,e.f.NOM_PROV,e.f.Nro_pdn,"S/. "+s(e.f.Inversion_pdn),e.f.Nro_pdnc,"S/. "+s(e.f.Inversion_pdnc),e.f.Nro_pdt,"S/. "+s(e.f.Inversion_pdt)]),o.push({name:e.f.NOM_PROV,data:{PDN:parseInt(e.f.Nro_pdn),PDNC:parseInt(e.f.Nro_pdnc),PDT:parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartProv",o,{legend:"bottom"})}$(function(){r(),$("#tblProv").DataTable({order:[[2,"desc"]],language:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},fnCreatedRow:function(e,t,n){$(e).attr("id",t[0])},data:t,columnDefs:[{targets:0,visible:!1}]});var e=$(".chart").height();$("#map").height(e)})}),g.setStyle(function(e){return{strokeColor:e.getProperty("color"),fillColor:e.getProperty("color"),fillOpacity:.7,strokeWeight:1}}),g.addListener("addfeature",function(e){g.setMap(f);var t=new google.maps.LatLngBounds;o(e.feature.getGeometry(),t.extend,t),f.fitBounds(t),f.setZoom(7)}),g.addListener("mouseover",function(e){g.revertStyle(),g.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_PROV")).addClass("success")}),g.addListener("mouseout",function(e){g.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")})}function c(e,t,n){a(),provID=e,$("#ddlProvincia option").each(function(){$(this).val()===provID?$(this).attr("selected",!0):$(this).attr("selected",!1)}),m.loadGeoJson("/distritos?deps=&provs="+provID+"&dis=&deno="+t+"&tipo="+n,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <div class="page-header"><h3>Distritos</h3></div>\n      <table id="tblDis" class="table table-striped table-bordered dt-responsive nowrap table-hover table-condensed" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="page-header"><h3>Planes</h3></div>\n      <div class="chartShow" id="chartDis" style="height:300px"></div>\n      </div>\n    ');var t=[],a=[],o=[];switch(n){case"PDN":$(".chart__table").find("table thead").append('\n              <tr>\n                <th rowspan="2">ID</th>\n                <th rowspan="2">Distrito</th>\n                <th colspan="2">PDN</th>\n              </tr>\n              <tr>\n                <th scope="col">Nº</th>\n                <th scope="col">Inversión</th>\n              </tr>\n            '),e.forEach(function(e){t.push([e.f.ID_DIS,e.f.NOM_DIS,e.f.Nro_pdn,"S/. "+s(e.f.Inversion_pdn)]),o.push([e.f.NOM_DIS,parseInt(e.f.Nro_pdn)])}),new Chartkick.PieChart("chartDis",o);break;case"PDNC":$(".chart__table").find("table thead").append('\n              <tr>\n                <th rowspan="2">ID</th>\n                <th rowspan="2">Distrito</th>\n                <th colspan="2">PDNC</th>\n              </tr>\n              <tr>\n                <th scope="col">Nº</th>\n                <th scope="col">Inversión</th>\n              </tr>\n            '),e.forEach(function(e){t.push([e.f.ID_DIS,e.f.NOM_DIS,e.f.Nro_pdnc,"S/. "+s(e.f.Inversion_pdnc)]),o.push([e.f.NOM_DIS,parseInt(e.f.Nro_pdnc)])}),new Chartkick.PieChart("chartDis",o);break;case"PDT":$(".chart__table").find("table thead").append('\n              <tr>\n                <th rowspan="2">ID</th>\n                <th rowspan="2">Distrito</th>\n                <th colspan="2">PDT</th>\n              </tr>\n              <tr>\n                <th scope="col">Nº</th>\n                <th scope="col">Inversión</th>\n              </tr>\n            '),e.forEach(function(e){t.push([e.f.ID_DIS,e.f.NOM_DIS,e.f.Nro_pdt,"S/. "+s(e.f.Inversion_pdt)]),o.push([e.f.NOM_DIS,parseInt(e.f.Nro_pdt)])}),new Chartkick.PieChart("chartDis",o);break;default:$(".chart__table").find("table thead").append('\n            <tr>\n              <th rowspan="2">ID</th>\n              <th rowspan="2">Distrito</th>\n              <th colspan="2">PDN</th>\n              <th colspan="2">PDNC</th>\n              <th colspan="2">PDT</th>\n            </tr>\n            <tr>\n              <th scope="col">Nº</th>\n              <th scope="col">Inversión</th>\n              <th scope="col">Nº</th>\n              <th scope="col">Inversión</th>\n              <th scope="col">Nº</th>\n              <th scope="col">Inversión</th>\n            </tr>\n          '),e.forEach(function(e){t.push([e.f.ID_DIS,e.f.NOM_DIS,e.f.Nro_pdn,"S/. "+s(e.f.Inversion_pdn),e.f.Nro_pdnc,"S/. "+s(e.f.Inversion_pdnc),e.f.Nro_pdt,"S/. "+s(e.f.Inversion_pdt)]),a.push({name:e.f.NOM_DIS,data:{PDN:parseInt(e.f.Nro_pdn),PDNC:parseInt(e.f.Nro_pdnc),PDT:parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartDis",a,{legend:"bottom"})}$(function(){r(),$("#tblDis").DataTable({order:[[2,"desc"]],language:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},fnCreatedRow:function(e,t,n){$(e).attr("id",t[0])},data:t,columnDefs:[{targets:0,visible:!1}]});var e=$(".chart").height();$("#map").height(e)})}),m.setStyle(function(e){return{strokeColor:e.getProperty("color"),fillColor:e.getProperty("color"),fillOpacity:.7,strokeWeight:1}}),m.addListener("mouseover",function(e){m.revertStyle(),m.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_DIS")).addClass("success")}),m.addListener("mouseout",function(e){m.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")}),m.addListener("addfeature",function(e){m.setMap(f);var t=new google.maps.LatLngBounds;o(e.feature.getGeometry(),t.extend,t),f.fitBounds(t),f.setZoom(9)})}function d(e,t,n){v=e,a(),$("#ddlDistrito option").each(function(){$(this).val()===v?$(this).attr("selected",!0):$(this).attr("selected",!1)}),y.loadGeoJson("/cp?deps=&provs=&dis="+v+"&ccpps=&deno="+t+"&tipo="+n,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <div class="page-header"><h3>Centro Poblado</h3></div>\n      <table id="tblCP" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="page-header"><h3>Familias</h3></div>\n      <div class="chartShow" id="chartCP" style="height:300px"></div>\n      </div>\n    ');var t=[];$(".chart__table").find("table thead").append("\n      <tr>\n        <th>ID</th>\n        <th>Rubro</th>\n        <th>Linea</th>\n        <th>Familias</th>\n        <th>Demonimación</th>\n        <th>Organización</th>\n      </tr>\n    ");var n=0,a=0,o=0;e.forEach(function(e){n+=parseInt(e.f.NRO_FAMILIAS_M),a+=parseInt(e.f.NRO_FAMILIAS_F),o+=parseInt(e.f.NRO_FAMILIAS),t.push([e.f.CODCP,e.f.RUBRO,e.f.LINEA_ESPECIFICA,parseInt(e.f.NRO_FAMILIAS),e.f.DENOMINACION,e.f.ORGANIZACION])}),$(function(){r(),$("#tblCP").DataTable({language:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},data:t,fnCreatedRow:function(e,t,n){$(e).attr("class",t[0])},columnDefs:[{targets:0,visible:!1}]}),new Chartkick.PieChart("chartCP",[["Hombres",n],["Mujeres",a]],{donut:!0});var e=$(".chart").height();$("#map").height(e)})}),y.addListener("mouseover",function(e){$(".chart__table").find("table tbody tr."+e.feature.getProperty("CODCP")).addClass("success")}),y.addListener("mouseout",function(e){$(".chart__table").find("table tbody tr").removeClass("success")}),y.addListener("addfeature",function(e){y.setMap(f);var t=new google.maps.LatLngBounds;o(e.feature.getGeometry(),t.extend,t),f.fitBounds(t),f.setZoom(10)})}function p(){}function h(){var e=$("#txtDenom").val(),t=$("#ddlTipo").val();if(null!=$("#ddlDepartamento").val()&&null!=$("#ddlProvincia").val()&&null!=$("#ddlDistrito").val()){var n=$("#ddlDistrito").val();d(n,e,t)}else if(null!=$("#ddlDepartamento").val()&&null!=$("#ddlProvincia").val()&&null===$("#ddlDistrito").val()){var a=$("#ddlProvincia").val();c(a,e,t)}else if(null!=$("#ddlDepartamento").val()&&null===$("#ddlProvincia").val()&&null===$("#ddlDistrito").val()){p("dep");var o=$("#ddlDepartamento").val();l(o,e,t)}else i(e,t)}var f=void 0,u="03,05,09,10,12,19",_="",v="";n(),f=new google.maps.Map(document.getElementById("map"),{zoom:6,center:{lat:-12.079652,lng:-77.042575},styles:[{elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#656366"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#eaebed"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eaebed"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#cbdaaf"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#cbdaaf"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#b3c8aa"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#b3c8aa"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#d7d8dc"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#d7d8dc"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#ccdfe6"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}]});var D=new google.maps.Data,g=new google.maps.Data,m=new google.maps.Data,y=new google.maps.Data;$("#btnBuscar").click(function(e){e.preventDefault(),h()}),$("#btnLimpiar").click(function(){$("#txtDenom").val(""),$("#ddlTipo").val(""),i("","")}),i("",""),D.addListener("click",function(e){_=e.feature.getProperty("ID_DEP"),$("#ddlDepartamento").val(_).change()}),g.addListener("click",function(e){provID=e.feature.getProperty("ID_PROV"),$("#ddlProvincia").val(provID).change()}),m.addListener("click",function(e){v=e.feature.getProperty("ID_DIS");var t=new google.maps.LatLngBounds;o(e.feature.getGeometry(),t.extend,t),f.fitBounds(t),f.setZoom(8),$("#ddlDistrito").val(v).change()}),y.addListener("click",function(e){}),$(document).ready(function(){$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDepartamentoscombo",data:"{}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlDepartamento").empty(),$("#ddlDepartamento").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){"03"!==t.ID_DEP&&"05"!==t.ID_DEP&&"09"!==t.ID_DEP&&"10"!==t.ID_DEP&&"12"!==t.ID_DEP&&"19"!==t.ID_DEP||$("#ddlDepartamento").append("<option value="+t.ID_DEP+">"+t.NOM_DEP+"</option>")})},error:function(e,t,n){}}),$("#ddlDepartamento").change(function(e){n(),l($(this).val(),$("#txtDenom").val(),$("#ddlTipo").val()),$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarProvinciascombo",data:"{ ID_DEP: '"+$(this).val()+"'}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlProvincia").empty(),$("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){$("#ddlProvincia").append("<option value="+t.ID_PROV+">"+t.NOM_PROV+"</option>")})},error:function(e,t,n){}})}),$("#ddlProvincia").change(function(){n(),c($(this).val(),$("#txtDenom").val(),$("#ddlTipo").val()),$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDistritoscombo",data:"{ ID_PROV: '"+$(this).val()+"'}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlDistrito").empty(),$("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){$("#ddlDistrito").append("<option value="+t.ID_DIS+">"+t.NOM_DIS+"</option>")})},error:function(e,t,n){}})}),$("#ddlDistrito").change(function(){n(),d($(this).val(),$("#txtDenom").val(),$("#ddlTipo").val())}),$("#ddlTipo").change(function(){n();$("#txtDenom").val(),$(this).val();h()})})}});