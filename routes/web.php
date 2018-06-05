<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/departamentos', 'GeoController@getDepartamentos');

Route::get('/provincias', 'GeoController@getProvincias');

Route::get('/distritos', 'GeoController@getDistritos');

Route::get('/cp', 'GeoController@getCP');


Route::get('/ejemplo', function () {
  return '{"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"NOMCP":"Challas","CODCP":"131632","Nro_pdn":"5","Inversion_pdn":"4478793","Nro_pdnc":"4996511","Inversion_pdnc":"750","Nro_pdt":"150","Inversion_pdt":"0","DENOMINACION":"","RUBRO":"","LINEA_ESPECIFICA":"","NRO_FAMILIAS":"0","ORGANIZACION":" UEIMDSCHALL - UEI DE LA MUNICIPALIDAD DISTRITAL DE SANTIAGO DE CHALLAS - UEI PROGRAMA DE DESARROLLO PRODUCTIVO (AGRO RURAL) ","NRO_FAMILIAS_M":"0","NRO_FAMILIAS_F":"0"},"geometry":{"type": "Point","coordinates":[-77.320550390265439,-8.4390799002187489]}},{"type":"Feature","properties":{"NOMCP":"Challas","CODCP":"131632","Nro_pdn":"5","Inversion_pdn":"6966986","Nro_pdnc":"7353556","Inversion_pdnc":"600","Nro_pdt":"163","Inversion_pdt":"0","DENOMINACION":"","RUBRO":"","LINEA_ESPECIFICA":"","NRO_FAMILIAS":"0","ORGANIZACION":"MUNICIPALIDAD DISTRITAL DE SANTIAGO DE CHALLAS ","NRO_FAMILIAS_M":"0","NRO_FAMILIAS_F":"0"},"geometry":{"type": "Point","coordinates":[-77.320550390265439,-8.4390799002187489]}}]}';
});