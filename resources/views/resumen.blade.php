@extends ('master-resumen')
@section('head')
    <title>Resumen</title>
@stop
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
@stop
