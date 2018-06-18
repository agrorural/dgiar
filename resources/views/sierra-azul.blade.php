@extends ('master')
@section('head')
    <title>Resumen Sierra Azul</title>
@stop

@section('body_class', 'sierraAzul')
@section('subpage', 'Resumen Ejecutivo')
@section('page', 'Proyectos Aprobados - Fondo Sierra Azul')


@section('content')
    <div id="app">
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
                <div class="chart__table">
                </div>
                <div class="chart__image" style="">
                </div>
            </div>
        </div>

    </div>
@stop
@section('footer')
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxwYkZXk1iIQaP7W2VB8IKeRjtgpsGqS4"></script>
<script src="{{ mix('js/sierra-azul.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="{{ mix('js/carousel.js') }}"></script>
@stop