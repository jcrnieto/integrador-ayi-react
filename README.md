La idea de este proyecto es obtener informacion de recetas saludable para distintintas dietas como por ejemplo vegana o sin glutem. Cuenta con una Landing de presentacion con un boton para ingresar. Una vez que clickeamos nos lleva al home. En esta página nos trae todas las dietas por medio de un paginado, un buscador por nombre de la receta, un filtrado por dieta. por ejemplo para una persona vegana si elegimos la palabra vegana apareceran todas las recetas con esa dieta. Tambien tiene un boton para que despues de filtrar, me traiga nuevamente todas las recetas. Por ultimo tenemos un botón para crear recetas nuevas. La idea de este proyecto no solo es obtener información de recetas saludables, si no tambien poder crear recetas nuevas para su uso posterior. La creacion de recetas tiene dos campos para completar y un campo para seleccionar el tipo de dieta que es.

_El formulario está controlado tanto desde el front como desde el back. Desde el back solo con el @NotNull
_El filtrado por dietas está echo desde el front por cuestiones de tiempo. Por performance se que se debe hacer desde el back. No obstante a las dietas si me las traigo del backend, y desde el front me las traigo por medio de un estado de redux
_Hay dos rutas con excepciones, una por id y la otra por busqueda de nombre de receta. Esta ultima si colocamos un nombre que no coincide con ninguna receta en la consola nos aparece un axiosError. Dentro de ese axios error hay un data el cual nos aparece el mensaje que proviene del backend.
-La pagina es responsive. Por favor probar en pc y en celular




### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`





