<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Styles -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.green.min.css" />
        @yield('head')
    </head>
    <body>
      <header>
        <h1>Cartera de Proyectos de Inversión para Financiamiento Fondo Sierra Azul</h1>
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
            <script src="{{ mix('js/bundle.js') }}"></script>
    </body>
</html>
