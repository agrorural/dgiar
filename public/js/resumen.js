!function(e){var t={};function a(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=45)}({45:function(e,t,a){e.exports=a(46)},46:function(e,t){var a="01,02,03,04,05,06,08,09,10,11,12,13,14,15,18,20,21,22,23";function r(){$(".spinner-wrapper").show(),$(".chart__table").html(""),$(".chart__image").html(""),$("#map").css("visibility","hidden"),$("#map_chart").css("height","600px")}function o(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}r(),map=new google.maps.Map(document.getElementById("map"),{zoom:6,center:{lat:-12.079652,lng:-77.042575},styles:[{elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#656366"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#eaebed"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eaebed"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#cbdaaf"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#cbdaaf"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#b3c8aa"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#b3c8aa"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#d7d8dc"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#d7d8dc"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#ccdfe6"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}]});var s,l,n=new google.maps.Data;s="",l="",r(),n.forEach(function(e){n.remove(e)}),n.loadGeoJson("/departamentos?deps="+a+"&provs=&deno="+s+"&tipo="+l,null,function(e){$(".chart__table").html('\n      <div class="chart__table-container">\n      <table id="tblDep" class="dt-responsive" cellspacing="0" width="100%">\n        <thead class="thead-dark">\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n    '),$(function(){$(".spinner-wrapper").hide(),$("#map").css("visibility","visible"),$("#map_chart").css("height","100%"),$(".chart__image").html('\n      <div class="chart__image-container">\n      <div class="page-header"><h3>Por regiones</h3></div>\n      <canvas class="chartShow" id="chartDep" style="height:300px"></canvas>\n      </div>\n  ').css("margin-top","15px"),$.ajax({url:"http://qa.agrorural.gob.pe/WEBAPI_GEOVICE/api/geo/ReportePorRegion",data:"{}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){var t=[];$.each(e,function(e,a){t.push([a.Region_Natural])});var a=document.getElementById("chartDep");new Chart(a,{type:"bar",data:{labels:t,datasets:[{label:"Gráfica",data:[74585758,563387425,79308772],backgroundColor:"rgba(215, 58, 36, 0.2)",borderColor:"rgba(215, 58, 36, 1)",borderWidth:2}]},options:{tooltips:{callbacks:{label:function(e,t){var a=t.datasets[0].data[e.index];return"S/ "+(a=(a=(a=a.toString()).split(/(?=(?:...)*$)/)).join(","))}}},scales:{yAxes:[{ticks:{beginAtZero:!0,userCallback:function(e,t,a){return"S/ "+(e=(e=(e=e.toString()).split(/(?=(?:...)*$)/)).join(","))}}}],xAxes:[{ticks:{}}]}}})}}),$(".chart__table").find("table thead").append("\n         <tr>\n           <th>ID</th>\n           <th>Departamento</th>\n           <th>Duración (m)</th>\n           <th>Exp. Téc.</th>\n           <th>Familias Benef.</th>\n           <th>Hectáreas</th>\n         </tr>\n       ");var t=$("#tblDep").DataTable({paging:!1,searching:!1,ordering:!1,bInfo:!1,fnCreatedRow:function(e,t,a){$(e).attr("id",t[0])},columnDefs:[{targets:0,visible:!1},{className:"dt-body-right text-right",targets:[2,3,4,5]},{width:"10%",targets:[2,4,5]}]}),a=0,r=0,s=0,l=0;e.forEach(function(e){a+=parseInt(e.f.Nro_pdn),r+=parseInt(e.f.Nro_pdnc),s+=parseInt(e.f.Inversion_pdnc),l+=parseInt(e.f.Nro_pdt),t.row.add([e.f.ID_DEP,e.f.NOMBDEP,e.f.Nro_pdn,"S/. "+o(e.f.Nro_pdnc),o(e.f.Inversion_pdnc),o(e.f.Nro_pdt)]).draw(!1)});var n=t.row.add(["","TOTAL",a,"S/ "+o(r),s,l]).draw(!1).node();$(n).addClass("table-success")})}),n.setStyle(function(e){return{fillColor:e.getProperty("color"),strokeOpacity:.5,fillOpacity:.7,strokeWeight:1}}),n.addListener("mouseover",function(e){n.revertStyle(),n.overrideStyle(e.feature,{fillOpacity:1}),$(".chart__table").find("table tbody tr#"+e.feature.getProperty("ID_DEP")).addClass("success")}),n.addListener("mouseout",function(e){n.revertStyle(),$(".chart__table").find("table tbody tr").removeClass("success")}),n.setMap(map),map.setZoom(6),n.addListener("click",function(e){$(".chart__image").html("").css("margin-top","0px"),depID=e.feature.getProperty("ID_DEP"),dep=e.feature.getProperty("NOMBDEP"),hect=o(e.feature.getProperty("Nro_pdt")),fam=o(e.feature.getProperty("Inversion_pdnc")),exp=o(e.feature.getProperty("Nro_pdnc")),$.ajax({url:"http://intranet.agrorural.gob.pe/WEBAPI_GEOVICE/api/geo/ProyectosPorDepartamento",data:"{'ID_DEP':'"+depID+"'}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){var t=void 0,a=[];$.each(e,function(e,r){t=r.iProyectos,a.push(r.TIPOLOGIA)}),console.log(a);for(var r={},o=0;o<a.length;++o)r[a[o]]||(r[a[o]]=0),++r[a[o]];console.log(r["INFRAESTRUCTURA DE RIEGO"]);var s=null!=r["INFRAESTRUCTURA DE RIEGO"]?r["INFRAESTRUCTURA DE RIEGO"]:0,l=null!=r.IRRIGACION?r.IRRIGACION:0,n=null!=r["RIEGO TECNIFICADO"]?r["RIEGO TECNIFICADO"]:0,i="";i+='<div class="chart__table-container">',i+='<div class="card">',i+='<div class="card-image">',i+='<div class="card-header"><h1>'+dep+"</h1></div>",i+="</div>",i+='<div class="card-body">',i+='<div class="row">',i+='<div class="col-sm-6">',i+='<div class="media proj">',i+='<div class="media-left"><i class="fas fa-briefcase"></i></div>',i+='<div class="media-body">',i+='<h4 class="media-heading">'+t+"</h4>",i+="<p>proyectos</p><br>",s>0&&(i+="<p><strong>"+s+"</strong> en infraestructura de riego<br />"),l>0&&(i+="<strong>"+l+"</strong> en irrigación<br />"),n>0&&(i+="<strong>"+n+"</strong> en riego tecnificado</p>"),i+="</div>",i+="</div>",i+='<div class="media fam">',i+='<div class="media-left"><i class="fas fa-people-carry"></i></div>',i+='<div class="media-body">',i+='<h4 class="media-heading">'+fam+"</h4>",i+="<p>familias beneficiarias</p>",i+="</div>",i+="</div>",i+='<div class="media hect">',i+='<div class="media-left"><i class="fas fa-map"></i></div>',i+='<div class="media-body">',i+='<h4 class="media-heading">'+hect+"</h4>",i+="<p>hectareas</p>",i+="</div>",i+="</div>",i+='<div class="media exp">',i+='<div class="media-left"><i class="fas fa-money-bill-alt"></i></div>',i+='<div class="media-body">',i+='<h4 class="media-heading">S/ '+exp+"</h4>",i+="<p>en expediente tecnicos</p>",i+="</div>",i+="</div>",i+="</div>",i+="</div>",i+="</div>",i+='<div class="card-footer">',i+='<a id="general" href="/resumen" class="btn btn-link"><i class="fas fa-arrow-left"></i> Volver</a>',i+='<a id="full" href="/" class="btn btn-link" target="_blank">Reporte Completo</a>',i+="</div>",i+="</div>",i+="</div>",$(".chart__table").html(i)}})}),$(document).ready(function(){$.ajax({url:"http://qa.agrorural.gob.pe/WebAPI_GeoAgro/api/geo/ListarDepartamentoscombo",data:"{}",headers:{Accept:"application/json","Content-Type":"application/json"},contentType:"application/json;",type:"post",success:function(e){$("#ddlDepartamento").empty(),$("#ddlDepartamento").append("<option value='00' disabled selected>Seleccione</option>"),$.each(e,function(e,t){"01"!==t.ID_DEP&&"02"!==t.ID_DEP&&"03"!==t.ID_DEP&&"04"!==t.ID_DEP&&"05"!==t.ID_DEP&&"06"!==t.ID_DEP&&"08"!==t.ID_DEP&&"09"!==t.ID_DEP&&"10"!==t.ID_DEP&&"11"!==t.ID_DEP&&"12"!==t.ID_DEP&&"13"!==t.ID_DEP&&"14"!==t.ID_DEP&&"15"!==t.ID_DEP&&"18"!==t.ID_DEP&&"20"!==t.ID_DEP&&"21"!==t.ID_DEP&&"22"!==t.ID_DEP&&"23"!==t.ID_DEP||$("#ddlDepartamento").append("<option value="+t.ID_DEP+">"+t.NOM_DEP+"</option>")})},error:function(e,t,a){}})}),$(document).ajaxStop(function(){var e=$(".chart").height();console.log($("#map").height()),$("#map").height(e),console.log($("#map").height())})}});