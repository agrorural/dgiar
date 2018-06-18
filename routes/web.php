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

Route::get('/resumen', function () {
  return view('resumen');
});

Route::get('/sierra-azul', function () {
  return view('sierra-azul');
});

Route::get('/sierra-azul-resumen', function () {
  return view('sierra-azul-resumen');
});

Route::get('/departamentos/{carga}', ['uses' => 'GeoController@getDepartamentos']);

Route::get('/provincias/{carga}', ['uses' => 'GeoController@getProvincias']);

Route::get('/distritos/{carga}', ['uses' => 'GeoController@getDistritos']);

Route::get('/cp/{carga}', ['uses' => 'GeoController@getCP']);