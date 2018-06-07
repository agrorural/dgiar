@extends ('master-resumen')
@section('head')
    <title>Resumen</title>
@stop
@section('content')
    <div id="app">
        <div class="app-container">
            <div class="map">
                <div id="map" style="height: 900px"></div>
            </div>
            <div class="chart">
              <div class="spinner-wrapper">
                <div class="spinner">
                  <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
                <div class="chart__table" style="margin-bottom: 15px;">
                </div>
                <div class="chart__image" style="">
                </div>
            </div>
        </div>

    </div>
@stop
@section('footer')
@stop
