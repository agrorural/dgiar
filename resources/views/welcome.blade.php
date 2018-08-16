@extends ('master')
@section('head')
    <title>DGIAR</title>
@stop

@section('page', 'Cartera de Proyectos de Inversión para Financiamiento - Obras por impuestos')

@section('content')
    <div id="app">
        <div class="app-container">
            <div class="search">
                <form>
                  <div class="form-group">
                    <label for="ddlDepartamento">Departamento</label>
                    <select id="ddlDepartamento" class="form-control input-sm">
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="ddlProvincia">Provincia</label>
                    <select id="ddlProvincia" class="form-control input-sm">
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="ddlDistrito">Distrito</label>
                    <select id="ddlDistrito" class="form-control input-sm">
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="ddlTipo">Tipología</label>
                    <select id="ddlTipo" class="form-control input-sm">
                      <option selected value="">Todos</option>
                      <option value="IDR">INFRAESTRUCTURA DE RIEGO</option>
                      <option value="IDD">IRRIGACION</option>
                      <option value="TEC">RIEGO TECNIFICADO</option>
                    </select>
                  </div>
                  <div class="form-group txtDenom input-group" style="display:none">
                    <label for="txtDenom">Denominación</label>
                    <input id="txtDenom" type="text" class="form-control input-sm" placeholder="">
                    <span class="input-group-btn input-group-btn-with-label">
                      <button id="btnBuscar" type="submit" class="btn btn-default btn-sm">Buscar</button>
                    </span>
                  </div>
                  <div class="form-group">
                    <label>&nbsp;</label>
                      <button id="btnLimpiar" type="button" class="btn btn-primary btn-sm"><span class="fas fa-sync-alt" aria-hidden="true"></span> Limpiar</button>
                  </div>
                  <div class="form-group text-right">
                    <label>&nbsp;</label>
                      <a href="resumen" id="resumen" class="btn btn-danger btn-sm"><i class="fas fa-briefcase" aria-hidden="true"></i> Resumen Ejecutivo</a>
                  </div>
                </form>
            </div>
        </div>
        <div id="map_chart" class="row">
          <div class="spinner-wrapper">
              <div class="spinner">
                <p><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></p>
                <p><strong>Cargando mapa...</strong></p>
              </div>
            </div>
          <div class="map col-sm-6">
            <div id="map"></div>
          </div>
          <div class="chart col-sm-6">
              <div class="chart__table" style="margin-bottom: 15px;">
              </div>
              <div class="chart__image" style="">
              </div>
          </div>
        </div>
    </div>
@stop
@section('footer')
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxwYkZXk1iIQaP7W2VB8IKeRjtgpsGqS4"></script>
<script src="{{ asset('js/map.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="{{ asset('js/carousel.js') }}"></script>
@stop
