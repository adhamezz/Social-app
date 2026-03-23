PAGES :
- Login page
- Signup page
- Home page
- Profile page
- Post Details page
- Notfound page

PACKAGES :
- For Routing : react-router
- For Design : tailwindcss
- For icons: font-awesome
- For cairo font: font-source
- For Notifications : react-toastify

=====================================================================

<!--! For Notifications : react-toastify -->
<!--! dont forget to go to the website
https://fkhadra.github.io/react-toastify/introduction/

to get this toast after adjustments use this

<<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/> -->

===================================================================

<!--! For Design : tailwindcss -->
<!--! use this to install tailwindcss ==>
 npm install tailwindcss @tailwindcss/vite

Then Configure the Vite plugin by adding this to
the vite.config.js file

import { defineConfig } from 'vite' -->
<!--? import tailwindcss from '@tailwindcss/vite' -->

<!--export default defineConfig({
plugins: [ -->
<!--? tailwindcss(), -->
<!-- ],
})
-->
<!-- _____________________________________________________________ -->

<!--! Add an @import to your CSS file that imports Tailwind CSS. -->
<!--? @import "tailwindcss"; -->

======================================================================

<!-- go to www.font-awsome.com -->
<!--! 1. Add the React Component -->
<!-- First things first. Let’s install the react-fontawesome component into your project -->
<!-- npm i --save @fortawesome/react-fontawesome@latest -->

<!--! 2. Add SVG Core -->
<!-- Next you’ll need to use npm or yarn to install the core package which is a dependency that includes all the utilities to make the icons work. -->
<!-- npm i --save @fortawesome/fontawesome-svg-core -->

<!-- ! 3. Add Icon Packages -->
<!-- Lastly, you’ll need to install the icons you want to use. -->
<!-- If you’re just using Free icons, skip ahead to the Free package instructions. -->

<!-- ! Free Icon Packages -->
<!-- Free icons can be installed without any additional configuration and include the following styles. -->
<!-- npm i --save @fortawesome/free-solid-svg-icons
 npm i --save @fortawesome/free-regular-svg-icons
 npm i --save @fortawesome/free-brands-svg-icons -->

=======================================================================

<!-- go to https://fontsource.org/ -->

<!-- search for the font you want to use say cairo
and then choose variable font (the first one)  -->

<!-- ! 1. Install the font -->
<!-- npm install @fontsource/cairo -->

<!--!2. Import
Include the following line in the main.jsx of your project to import the font: -->
<!-- copy this and place it before index.css -->
<!-- import '@fontsource-variable/cairo'; -->

<!--! 3. CSS
Include the CSS in your project by adding the following line to your index.css file:
    body {
  font-family: 'Cairo Variable', sans-serif;
}

<!-- ? ========================================================================== -->
<!-- 

<!-- !formik -->
<!-- You can install Formik with NPM
npm install formik --save


we will use the hook

useFormik({
  initialvalues,
   validationSchema,
   onSubmit
}) --> 


<!-- const formik = useFormik({
  initialvalues,
  validationSchema,
  onSubmit
})  -->


<!-- 
{
initialValues: {},
values : {},
errors: {},
touched: {},
dirty,
isValid,
isSubmitting,
validateOnChange,
validateOnBlur,
handleChange,
handleSubmit,
.....
....
...
.. 
}

 -->
 ==================================================================

 npm i yup

=====================================================================


 npm i axios 
