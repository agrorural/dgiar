<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Styles -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
        <link href="https://cdn.datatables.net/1.10.16/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css">
        <link href="https://cdn.datatables.net/responsive/2.2.0/css/responsive.bootstrap4.min.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.green.min.css" />
        <!--Load the AJAX API-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/chartkick/2.3.0/chartkick.js"></script>
        <script src="{{ mix('js/fontawesome-all.js') }}"></script>
        
        @yield('head')
    </head>
    <body id="resumen">
      <header>
        <h1>Demandas de Intervención al Minagri (Resumen Ejecutivo)</h1>
          <div class="owl-carousel owl-theme">
              <div class="item"><img src="{{ asset('images/01.jpg') }}" class="img-fluid" alt=""></div>
              <div class="item"><img src="{{ asset('images/02.jpg') }}" class="img-fluid" alt=""></div>
              <div class="item"><img src="{{ asset('images/03.jpg') }}" class="img-fluid" alt=""></div>
              <div class="item"><img src="{{ asset('images/04.jpg') }}" class="img-fluid" alt=""></div>
              <div class="item"><img src="{{ asset('images/05.jpg') }}" class="img-fluid" alt=""></div>
              <div class="item"><img src="{{ asset('images/06.jpg') }}" class="img-fluid" alt=""></div>
          </div>
      </header>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 main">
              @yield('content')
            </div>
          </div>
        </div>

        @yield('footer')
          <footer class="">
              <div class="container-fluid">
                  <nav class="nav">
                    <a class="nav-link" href="http://www.minagri.gob.pe" target="blank"><img src="{{ asset('images/minagri__logo.svg') }}" height="40px" alt="Minagri"></a>
                    <a class="nav-link" href="http://www.gob.pe" target="blank"><img src="{{ asset('images/el_peru_primero__logo.svg') }}" height="40px" alt="El Perú Primero"></a>
                  </nav>
              </div>
            </footer>
            <script src="{{ mix('js/app.js') }}"></script>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxwYkZXk1iIQaP7W2VB8IKeRjtgpsGqS4"></script>
            <script src="https://use.fontawesome.com/00e9311fd7.js"></script>
            <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
            <script src="https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap4.min.js"></script>
            <script src="https://cdn.datatables.net/responsive/2.2.0/js/dataTables.responsive.min.js"></script>
            <script src="https://cdn.datatables.net/responsive/2.2.0/js/responsive.bootstrap4.min.js"></script>
            <script src="https://cdn.datatables.net/plug-ins/1.10.16/api/sum().js"></script>
            <script src="{{ mix('js/resumen.js') }}"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
            <script src="{{ mix('js/carousel.js') }}"></script>
    </body>
</html>
