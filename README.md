# WeatherApp con OpenWather

    Esta es una práctica para concer los conceptos clave de *Material UI*, incluyendo **CSSBaseline, Container, Typography, Grid, ThemeProvider** y poner en práctica el uso de componentes como **Navbar, Drawer, Button, Card** y explorar componentes avanzados como **AppBar, Alert y Snackbar**.

    **Material UI** es una biblioteca de componentes de interfaz de usuario para **React** que sigue los diseños de **Material Design de Google**. Material Design utiliza elementos visuales sólidos y sombras para proporcionar una sensación de profundidad en la interfaz de usuario, y se basa en una escala de grises y en una paleta de colores limitada para proporcionar una apariencia uniforme y coherente.

[Material UI](https://mui.com/)

## Instalación de react + vite

*React+Vite / JS+SWC*

```
npm create vite@latest .
npm i
```

## Instalar las dependencias de MUI

### MaterialUI por defecto

```
npm install @mui/material
```

- Se recomienda encarecidamente utilizar **@emotion** para proyectos SSR. Ademásm es el motor de estilos predeterminado de Material UI

```
npm install @emotion/react @emotion/styled
```

### Fuente Roboto

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

### Iconos SVG prediseñados

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

### Notificaciones y alertas notistack

- *Notistack* es una biblioteca de React que hace que sea muy fácil mostrar notificaciones en sus aplicaciones web. *Snackbar, Toast y Alert*.

```
npm install @mui/lab notistack
```

---

## Version v0.0.2

*A modo de práctica y entendendimiento.* Fecth o Axios. Utilizar variables de entorno para esconder las url en el lado del cliente.

1. ocultar las url con variables de entorno.

2. Implementar con axios.

3. Una tarea de estética. El texto de la condición meteorológica llega todo en minúsculas.
- He pasado de utilizar las url's de la api harcodeadas a **variables de entorno** para ocultarlas en el lado cliente.

```javascript
const apiUrl  = import.meta.env.VITE_API_URL;
const apiKey  = import.meta.env.VITE_API_KEY;
const flagUrl = import.meta.env.VITE_FLAG_URL;
const iconUrl = import.meta.env.VITE_ICON_URL;
```

### Dependencia Axios

- **Axios** ofrece una compatibilidad con navegadores mas antíguos, por lo que creo que merece la pena que esté actualizado. Un inconveniente a diferencia de promesas nativas con fetch, es instalar una librería de terceros.

> He reemplazado `fetch` por `axios.get`, y en lugar de obtener `data` directamente de la respuesta, lo extraigo de `response.data`.

```
npm install axios
```

    Importación de axios al archivo

```javascript
import axios from 'axios';
```

    El tipo de llamada ahora cambia a promesa de **axios**. El resto del código no sufre  cambios.

```javascript
const response = await axios.get(apiUrl + city + '&appid=' + apiKey);
const data = await response.data;
```

### Texto de condición meteorológica.

    Establecer el texto de condición meteorológica a letra *Capital*. 

> Ejemplo: de 'scattered clouds' a 'Scattered clouds'

```javascript
{/*Primera letra capital*/}
{weather.conditionText.charAt(0).toUpperCase()}
{/*Resto del texto*/}
{weather.conditionText.slice(1)}
```

---

## Version v0.0.3

### Desacoplar por componentes

    Mantengo la lógica de negocio en App.jsx y desacoplado el render por componentes.

1. **WeatherForm**.jsx
   
   - Contiene el formulario de búsqueda de la ciudad y el botón de búsqueda.

2. **WeatherInfo**.jsx
   
   - Muestra la información del clima cuando esté disponible la petición.

3. **PoweredBy**.jsx
   
   - Muestra la atribución del proveedor del servicio meteorológico.

---