!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=58)}({58:function(e,t,a){e.exports=a(59)},59:function(e,t){var a=void 0,n="01,02,03,04,05,06,08,09,10,11,12,13,14,15,18,20,21,22,23",o="",r="";function s(){$(".spinner-wrapper").show(),$(".chart__table").html(""),$(".chart__image").html(""),$("#map").css("visibility","hidden"),$("#map_chart").css("height","600px")}function l(){p.forEach(function(e){p.remove(e)}),f.forEach(function(e){f.remove(e)}),h.forEach(function(e){h.remove(e)}),u.forEach(function(e){u.remove(e)})}function i(e,t,a){e instanceof google.maps.LatLng?t.call(a,e):e instanceof google.maps.Data.Point?t.call(a,e.get()):e.getArray().forEach(function(e){i(e,t,a)})}function d(){$(".spinner-wrapper").hide(),$("#map").css("visibility","visible"),$("#map_chart").css("height","100%")}function c(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}s(),a=new google.maps.Map(document.getElementById("map"),{zoom:6,center:{lat:-12.079652,lng:-77.042575},styles:[{elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#656366"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#eaebed"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eaebed"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#cbdaaf"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#cbdaaf"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#b3c8aa"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#b3c8aa"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#d7d8dc"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#d7d8dc"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#ccdfe6"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}]});var p=new google.maps.Data,f=new google.maps.Data,h=new google.maps.Data,u=new google.maps.Data;function g(e,t){$("#ddlDistrito").empty(),$("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>"),$("#ddlProvincia").empty(),$("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>"),s(),o="00",$("#ddlDepartamento option").each(function(){$(this).val()===o?$(this).attr("selected",!0):$(this).attr("selected",!1)}),l(),p.loadGeoJson("departamentos/2?deps="+n+"&provs=&deno="+e+"&tipo="+t,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblDep" class="dt-responsive" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(function(){d(),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="page-header"><h3>Por regiones</h3></div>\n      <canvas class="chartShow" id="chartDep" style="height:300px"></canvas>\n      </div>\n  '),$.ajax({url:"http://intranet.agrorural.gob.pe/WEBAPI_GEOVICE/api/geo/ReportePorRegion",data:"{'carga': 2}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){console.log(e);var t=[];$.each(e,function(e,a){t.push([a.Region_Natural])});var a=document.getElementById("chartDep");new Chart(a,{type:"bar",data:{labels:t,datasets:[{label:"Gráfica",data:[37323875,165342315,43703749],backgroundColor:"rgba(215, 58, 36, 0.2)",borderColor:"rgba(215, 58, 36, 1)",borderWidth:2}]},options:{tooltips:{callbacks:{label:function(e,t){var a=t.datasets[0].data[e.index];return"S/ "+(a=(a=(a=a.toString()).split(/(?=(?:...)*$)/)).join(","))}}},scales:{yAxes:[{ticks:{beginAtZero:!0,userCallback:function(e,t,a){return"S/ "+(e=(e=(e=e.toString()).split(/(?=(?:...)*$)/)).join(","))}}}],xAxes:[{ticks:{}}]}}})}}),$(".chart__table").find("table thead").append("\n         <tr>\n           <th>ID</th>\n           <th>Departamento</th>\n           <th>Exp. Téc.</th>\n           <th>Familias Benef.</th>\n           <th>Hectáreas</th>\n         </tr>\n       ");var t=$("#tblDep").DataTable({paging:!1,searching:!1,ordering:!1,bInfo:!1,fnCreatedRow:function(e,t,a){$(e).attr("id",t[0])},columnDefs:[{targets:0,visible:!1},{className:"dt-body-right text-right",targets:[2,3,4]}]}),a=0,n=0,o=0;e.forEach(function(e){parseInt(e.f.Nro_pdn),a+=parseInt(e.f.Nro_pdnc),n+=parseInt(e.f.Inversion_pdnc),o+=parseInt(e.f.Nro_pdt),t.row.add([e.f.ID_DEP,e.f.NOMBDEP,"S/. "+c(e.f.Nro_pdnc),c(e.f.Inversion_pdnc),c(e.f.Nro_pdt)]).draw(!1)});var r,s=t.row.add(["","TOTAL","S/ "+c(a),n,o]).draw(!1).node();$(s).addClass("table-success"),r=$(".chart").height(),console.log("Mapa antes: "+$("#map").height()),$("#map").height(r),console.log("Mapa despues: "+$("#map").height()),console.log("chart: "+r)})}),p.setStyle(function(e){return{fillColor:e.getProperty("color"),strokeOpacity:.5,fillOpacity:.7,strokeWeight:1}}),p.addListener("mouseover",function(e){p.revertStyle(),p.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_DEP")).addClass("success")}),p.addListener("mouseout",function(e){p.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")}),p.setMap(a),a.setZoom(6)}function y(e,t,n){$("#ddlDistrito").empty(),$("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>"),$("#ddlDepartamento option").each(function(){$(this).val()===e?$(this).attr("selected",!0):$(this).attr("selected",!1)}),l(),f.loadGeoJson("provincias/2?deps="+e+"&provs=&deno="+t+"&tipo="+n,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblProv" class="dt-responsive" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartProv" style="height:300px"></div>\n      </div>\n    ');var t=[];$(function(){d(),$(".chart__table").find("table thead").append("\n         <tr>\n           <th>ID</th>\n           <th>Provincia</th>\n           <th>Exp. Téc.</th>\n           <th>Familias Benef.</th>\n           <th>Hectáreas</th>\n         </tr>\n       ");var a=$("#tblProv").DataTable({paging:!1,searching:!1,ordering:!1,bInfo:!1,fnCreatedRow:function(e,t,a){$(e).attr("id",t[0])},columnDefs:[{targets:0,visible:!1},{className:"dt-body-right text-right",targets:[2,3,4]}]}),n=0,o=0,r=0;e.forEach(function(e){parseInt(e.f.Nro_pdn),n+=parseInt(e.f.Nro_pdnc),o+=parseInt(e.f.Inversion_pdnc),r+=parseInt(e.f.Nro_pdt),a.row.add([e.f.ID_PROV,e.f.NOM_PROV,"S/. "+c(e.f.Nro_pdnc),c(e.f.Inversion_pdnc),c(e.f.Nro_pdt)]).draw(!1),t.push({name:e.f.NOM_PROV,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})});var s=a.row.add(["","TOTAL","S/ "+c(n),o,r]).draw(!1).node();$(s).addClass("table-success"),new Chartkick.ColumnChart("chartProv",t,{legend:"bottom"})})}),f.setStyle(function(e){return{fillColor:e.getProperty("color"),strokeOpacity:.5,fillOpacity:.7,strokeWeight:1}}),f.addListener("addfeature",function(e){f.setMap(a);var t=new google.maps.LatLngBounds;i(e.feature.getGeometry(),t.extend,t),a.fitBounds(t),a.setZoom(7)}),f.addListener("mouseover",function(e){f.revertStyle(),f.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_PROV")).addClass("success")}),f.addListener("mouseout",function(e){f.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")})}function m(e,t,n){l(),provID=e,$("#ddlProvincia option").each(function(){$(this).val()===provID?$(this).attr("selected",!0):$(this).attr("selected",!1)}),h.loadGeoJson("distritos/2?deps=&provs="+provID+"&dis=&deno="+t+"&tipo="+n,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblDis" class="dt-responsive" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartDis" style="height:300px"></div>\n      </div>\n    ');var t=[];$(function(){d(),$(".chart__table").find("table thead").append("\n        <tr>\n          <th>ID</th>\n          <th>Distrito</th>\n          <th>Exp. Téc.</th>\n          <th>Familias Benef.</th>\n          <th>Hectáreas</th>\n        </tr>\n      ");var a=$("#tblDis").DataTable({paging:!1,searching:!1,ordering:!1,bInfo:!1,fnCreatedRow:function(e,t,a){$(e).attr("id",t[0])},columnDefs:[{targets:0,visible:!1},{className:"dt-body-right text-right",targets:[2,3,4]}]}),n=0,o=0,r=0;e.forEach(function(e){parseInt(e.f.Nro_pdn),n+=parseInt(e.f.Nro_pdnc),o+=parseInt(e.f.Inversion_pdnc),r+=parseInt(e.f.Nro_pdt),a.row.add([e.f.ID_DIS,e.f.NOM_DIS,"S/. "+c(e.f.Nro_pdnc),c(e.f.Inversion_pdnc),c(e.f.Nro_pdt)]).draw(!1),t.push({name:e.f.NOM_DIS,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})});var s=a.row.add(["","TOTAL","S/ "+c(n),o,r]).draw(!1).node();$(s).addClass("table-success"),new Chartkick.ColumnChart("chartDis",t,{legend:"bottom"})})}),h.setStyle(function(e){return{fillColor:e.getProperty("color"),strokeOpacity:.5,fillOpacity:.7,strokeWeight:1}}),h.addListener("mouseover",function(e){h.revertStyle(),h.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_DIS")).addClass("success")}),h.addListener("mouseout",function(e){h.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")}),h.addListener("addfeature",function(e){h.setMap(a);var t=new google.maps.LatLngBounds;i(e.feature.getGeometry(),t.extend,t),a.fitBounds(t),a.setZoom(9)})}function v(e,t,n){r=e,l(),$("#ddlDistrito option").each(function(){$(this).val()===r?$(this).attr("selected",!0):$(this).attr("selected",!1)}),u.loadGeoJson("cp/2?deps=&provs=&dis="+r+"&ccpps=&deno="+t+"&tipo="+n,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblCP" class="dt-responsive" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="chartShow" id="chartCP" style="height:300px"></div>\n      </div>\n    ');var t=[],a=[];$(".chart__table").find("table thead").append("\n    <tr>\n    <th>ID</th>\n    <th>Proyecto</th>\n    <th>Presupuesto</th>\n    <th>Tipología</th>\n    <th>Unid. Ejecutora</th>\n    <th>Ind. Formulad.</th>\n    </tr>\n    "),e.forEach(function(e){t.push([e.f.CODCP,e.f.NOMBRE_PROYECTO,"S/. "+c(e.f.MONTO_EXPEDIENTE_TECNICO),e.f.TIPOLOGIA,e.f.ORGANIZACION,e.f.UNIDAD_FORMULADORA]),a.push({name:e.f.NOMCP,data:{Familias:parseInt(e.f.Inversion_pdnc),"Hectáreas":parseInt(e.f.Nro_pdt)}})}),new Chartkick.ColumnChart("chartCP",a,{legend:"bottom"}),$(function(){d(),$("#tblCP").DataTable({paging:!1,searching:!1,language:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},data:t,fnCreatedRow:function(e,t,a){$(e).attr("class",t[0])},columnDefs:[{targets:0,visible:!1},{className:"dt-body-right text-right",targets:[2]}]})})}),u.addListener("mouseover",function(e){$(".chart__table").find("table tbody tr."+e.feature.getProperty("CODCP")).addClass("success")}),u.addListener("mouseout",function(e){$(".chart__table").find("table tbody tr").removeClass("success")}),u.addListener("addfeature",function(e){u.setMap(a);var t=new google.maps.LatLngBounds;i(e.feature.getGeometry(),t.extend,t),a.fitBounds(t),a.setZoom(10)})}function _(){var e=$("#txtDenom").val(),t=$("#ddlTipo").val();if(null!=$("#ddlDepartamento").val()&&null!=$("#ddlProvincia").val()&&null!=$("#ddlDistrito").val()){var a=$("#ddlDistrito").val();v(a,e,t),console.log("Mostrando "+e+" en el distrito "+a)}else if(null!=$("#ddlDepartamento").val()&&null!=$("#ddlProvincia").val()&&null===$("#ddlDistrito").val()){var n=$("#ddlProvincia").val();m(n,e,t),console.log("Mostrando "+e+" en la provincia "+n)}else if(null!=$("#ddlDepartamento").val()&&null===$("#ddlProvincia").val()&&null===$("#ddlDistrito").val()){var o=$("#ddlDepartamento").val();y(o,e,t),console.log("Mostrando "+e+" en el departamento "+o)}else g(e,t),console.log("Mostrando "+e+" en todos los departamentos")}$("#btnBuscar").click(function(e){e.preventDefault(),_()}),$("#btnLimpiar").click(function(){$("#txtDenom").val(""),$("#ddlTipo").val(""),g("","")}),g("",""),p.addListener("click",function(e){o=e.feature.getProperty("ID_DEP"),$("#ddlDepartamento").val(o).change()}),f.addListener("click",function(e){provID=e.feature.getProperty("ID_PROV"),$("#ddlProvincia").val(provID).change()}),h.addListener("click",function(e){r=e.feature.getProperty("ID_DIS");var t=new google.maps.LatLngBounds;i(e.feature.getGeometry(),t.extend,t),a.fitBounds(t),a.setZoom(8),$("#ddlDistrito").val(r).change()}),$(document).ready(function(){$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDepartamentoscombo",data:"{}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlDepartamento").empty(),$("#ddlDepartamento").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){"01"!==t.ID_DEP&&"02"!==t.ID_DEP&&"03"!==t.ID_DEP&&"04"!==t.ID_DEP&&"05"!==t.ID_DEP&&"06"!==t.ID_DEP&&"08"!==t.ID_DEP&&"09"!==t.ID_DEP&&"10"!==t.ID_DEP&&"11"!==t.ID_DEP&&"12"!==t.ID_DEP&&"13"!==t.ID_DEP&&"14"!==t.ID_DEP&&"15"!==t.ID_DEP&&"18"!==t.ID_DEP&&"20"!==t.ID_DEP&&"21"!==t.ID_DEP&&"22"!==t.ID_DEP&&"23"!==t.ID_DEP||$("#ddlDepartamento").append("<option value="+t.ID_DEP+">"+t.NOM_DEP+"</option>")})},error:function(e,t,a){}}),$("#ddlDepartamento").change(function(e){s(),y($(this).val(),$("#txtDenom").val(),$("#ddlTipo").val()),$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarProvinciascombo",data:"{ ID_DEP: '"+$(this).val()+"'}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlProvincia").empty(),$("#ddlProvincia").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){$("#ddlProvincia").append("<option value="+t.ID_PROV+">"+t.NOM_PROV+"</option>")})},error:function(e,t,a){}})}),$("#ddlProvincia").change(function(){s(),m($(this).val(),$("#txtDenom").val(),$("#ddlTipo").val()),$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDistritoscombo",data:"{ ID_PROV: '"+$(this).val()+"'}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlDistrito").empty(),$("#ddlDistrito").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){$("#ddlDistrito").append("<option value="+t.ID_DIS+">"+t.NOM_DIS+"</option>")})},error:function(e,t,a){}})}),$("#ddlDistrito").change(function(){s(),v($(this).val(),$("#txtDenom").val(),$("#ddlTipo").val())}),$("#ddlTipo").change(function(){s();$("#txtDenom").val(),$(this).val();_()})})}});