<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería | Investel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Raleway:wght@700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/main_style.css">
</head>

<body>
    <nav class="navigation hide">
        <a href="https://www.investel.mx/" target="_blank">Pagina principal</a>
        <a href="https://www.investel.mx/sobre-nosotros" target="_blank">Sobre nosotros</a>
        <a href="https://www.investel.mx/servicios" target="_blank">Productos y servicios</a>
        <a href="https://www.investel.mx/eventos" target="_blank">Eventos</a>
        <a href="https://www.investel.mx/contactanos" target="_blank">Contacto</a>
        <a href="https://antoniovalled.github.io/login/" target="_blank">Agregar imagenes</a>
    </nav>

    <header class="head">
        <div class="head-container container">
            <div class="logo">
                <img src="./media/logo.webp" alt="logo">
            </div>
            <div class="page-name">
                <h1>Galería</h1>
            </div>
            <div class="lat-menu">
                <span></span><span></span><span></span>
            </div>
        </div>
        </div>
    </header>

    <div class="content">
        <div class="filters">
            <div class="filters-container">
                <h2>Ordenar por:</h2>
                <div class="filter">
                    <label for="date">Fecha de carga</label>
                    <select name="date" id="dte'select">
                        <option value="all">Todas</option>
                        <option value="month">Este mes</option>
                        <option value="year">Este año</option>
                        <option value="two-year">Hace 2 años</option>
                        <option value="three-year">Hace 3 años</option>
                        <option value="four-year">Hace 4 años</option>
                    </select>
                </div>
                <div class="filter">
                    <label for="date">Eventos</label>
                    <select name="date" id="dte'select">
                        <option value="all">Todos</option>
                        <option value="month">Evento 1</option>
                        <option value="year">Evento 2</option>
                        <option value="two-year">Evento 3</option>
                        <option value="three-year">Evento 4</option>
                        <option value="four-year">Evento 5</option>
                    </select>
                </div>
                <div class="filter">
                    <label for="date">Tecnologías</label>
                    <select name="date" id="dte'select">
                        <option value="all">Todas</option>
                        <option value="month">Internet</option>
                        <option value="year">Software</option>
                        <option value="two-year">Energía</option>
                        <option value="three-year">Domótica</option>
                        <option value="four-year">Seguridad</option>
                    </select>
                </div>
                <div class="filter">
                    <label for="date">Proyectos</label>
                    <select name="date" id="dte'select">
                        <option value="all">Todos</option>
                        <option value="month">Proyecto 1</option>
                        <option value="year">Proyecto 2</option>
                        <option value="two-year">Proyecto 3</option>
                        <option value="three-year">Proyecto 4</option>
                        <option value="four-year">Proyecto 5</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="full-img hide">
            <img src="#" alt="img" class="selected-img">
            <span class="close-img">X</span>
        </div>
        <div class="gallery">
            <div class="img-container">
                <img src="./media/prueba 3.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba 4.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba 5.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba 6.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba.bmp" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba 3.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba 4.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba 5.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba 6.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba.bmp" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba 3.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
            <div class="img-container">
                <img src="./media/prueba 4.jpg" alt="image" onclick="openFullImg(this.src)">
                <p>Description</p>
            </div>
        </div>
    </div>

    <script src="./js/app.js"></script>
</body>

</html>
