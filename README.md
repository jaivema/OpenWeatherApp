# WeatherApp con OpenWather

    Esta es una práctica para concer los conceptos clave de *Material UI*, incluyendo **CSSBaseline, Container, Typography, Grid, ThemeProvider** y poner en práctica el uso de componentes como **Navbar, Drawer, Button, Card** y explorar componentes avanzados como **AppBar, Alert y Snackbar**.

    **Material UI** es una biblioteca de componentes de interfaz de usuario para **React** que sigue los diseños de **Material Design de Google**. Material Design utiliza elementos visuales sólidos y sombras para proporcionar una sensación de profundidad en la interfaz de usuario, y se basa en una escala de grises y en una paleta de colores limitada para proporcionar una apariencia uniforme y coherente.

[Material UI](https://mui.com/)

**Instalación de react + vite**

*React+Vite / JS+SWC*

```
npm create vite@latest .
npm i
```

**Instalar las dependencias de MUI**

- Instalación de Material por defecto:

```
npm install @mui/material
```

- Se recomienda encarecidamente utilizar @emotion para proyectos SSR. Ademásm es el motor de estilos predeterminado de Material UI

```
npm install @emotion/react @emotion/styled
```

- Material UI utiliza la fuente [Roboto](https://fonts.google.com/specimen/Roboto) de forma predeterminada.

```
npm install @fontsource/roboto
```

Una vez instalada la dependencia de la fuente roboto se debe importar al proyecto, se utilizan las siguientes importaciones:

```javascript
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

>     Fontsource se puede configurar para cargar subconjuntos, pesos y estilos específicos. La configuración de tipografía predeterminada de Material UI se basa únicamente en los pesos de fuente 300, 400, 500 y 700.
> 
> Disponible en CDN a través de la etiqueta <link />
> 
> ```html
> <link rel="preconnect" href="https://fonts.googleapis.com" />
> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
> <link
>   rel="stylesheet"
>   href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
> />
> ```

- La instalación de iconos de material SVG prediseñados:

```
npm install @mui/icons-material
```

> Disponible en CDN a través de la etiqueta <link />
> 
> ```html
> <link
>   rel="stylesheet"
>   href="https://fonts.googleapis.com/icon?family=Material+Icons"
> />
> ```

- *Notistack* es una biblioteca de React que hace que sea muy fácil mostrar notificaciones en sus aplicaciones web. *Snackbar, Toast y Alert*.

```
npm install @mui/lab notistack
```

    Borrar los archivos que no se usarán:

- 