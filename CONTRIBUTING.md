# :hear_no_evil: GIT WORKFLOW :hear_no_evil:!

Cuando vas a trabajar en un proyecto en Git, siempre van a existir issues o pequeñas tareas que deberán ser asignadas a diferentes participantes de dicho proyecto; Git workflow es una herramienta para realizar dichas tareas de manera óptima y con buenas prácticas (además de ser utilizado en la industria :wink:)  y esta guía vamos a aprender como trabajar con el. 


# Ramas Magistrales :crown:

En el Git Flow existen dos ramas super importantes que deben ser tratadas como la realeza :crown::  el rey **Master** y la reina  **Develop**. Ellos son los encargados de que todo nuestro proyecto funcione, funcionando de la siguiente manera: Develop se encarga de manejar todos esos cambios, nuevas funcionalidades y demás checheres que le quieras añadir al proyecto :stuck_out_tongue_winking_eye: ; a esto se le conoce como **el entorno de desarrollo** :computer:. Por otro lado tenemos a  Master, este señor se encarga de mostrar la versión final esta si ahora si por chuchito que si de nuestro proyecto y es conocido como **el entorno de producción** :dollar:. 

## Crear Ramas :deciduous_tree:

Cuando creas una rama en tu proyecto, estas creando todo un nuevo ecosistema en el cual puedes plasmar todas tus ideas sin interferir con el progreso de tus compañeros, genial, ¿no? :grin:. Estos cambios no afectan la rama **Master**  y mucho menos **Develop** y eres libre  para hacer cuantos commits y cambios quieras :metal: hasta estos puedan ser añadidos (hacer merge) y revisados por otro colaborador.

## ¿Qué ramas podemos sacar de Master y cuáles de Develop? :raising_hand:

Al empezar ahora si a echarle candela a la cosa, debemos tener muy presentes que **no debemos trabajar directamente en Develop ni en Master**, ellos estan grandecitos para funcionar por si solos, pero si podemos trabajar en ramas que provengan de ellos, pero, ¿cuáles? :dizzy_face:. Easy ma friend, al trabajar en nuevas funcionalidades (features) para nuestro proyecto, debes crear una rama que nazca de **Develop**, ejemplo: *mejorandoDevelop-issue* y así, al final todo los cambios hechos en *mejorandoDevelop-issue* ( y esta funcionando :unamused:)  pueden ser actualizados en **Develop** haciendo un *merge*. Ahora, las ramas que vamos a crear a partir de **Master** a parte de **Develop** (*pero no se lo digan*), son los *hotfix*; en estos vamos a hacer aquellos cambios que mejor dicho tienen que ser hechos ya mismo, pero ciudadito Wazowski, son cambios pequeños, nada funcional, nada que pueda afectar el orden de nuestro pequeño universo!. :eyes:

## Pull Request

O bien conocidos como **"pr"**, son esos pequeños heores  que impiden que hagamos push directamente a **Master**, que dañemos todo y nos echen :smile:. ¿Cómo funcionan?, cuando todo esta *melo* en **Develop**, osea funcionando perfectamente y listo para ser lanzado a producción, ya no hacemos aquel pequeño compañero conocido como merge, no, ahora viene su papá, **pr** para que le diga a alguno de los colaboradores de nuestro proyecto: *"Este men quiere hacer push a master, ¿esta todo bien, todo correcto?"* y si tu compañero lo aprueba, este se actualiza con **Master**.

## ¿Cómo hacer un PR y un merge? :scream_cat:

Digamos que estamos haciendo un ERP para manejar una tienda y esta tiene clientes, stock, productos y demás. Actualmente tenemos lista la rama *feature/product*, como lo mencionamos anteriormente, debemos primero hacer *merge* con Develop de la siguiente manera:

Nos posicionamos en *feature/product* y damos click en el botón *New Pull Request* (¿Sencillo, verdad? :wink: )

![](https://lh3.google.com/u/0/d/1so-w9smdx5d2Z9YGHi9WlbZQMWMMGiHh=w1366-h657-iv1)

Luego seleccionamos a que base (rama base), vamos a dirigir nuestro *merge* que en este caso sería **Develop** y al heroe de nuestro equipo que va a revisar nuestro avance!

![](https://lh3.google.com/u/0/d/1AFSczYScayhNNi9jCOO7pSMvdMj6YN6r=w1366-h657-iv1)

Una vez este revise, puede añadir comentarios a partes específicas de nuestras modificaciones y si al final aprueba, todos nuestros cambios serán actualizados en :sparkles: **Develop** :sparkles:

Bueno, ahora que **Develop** funciona de maravilla, ¿por qué no lo llevamos a **Master**? ¿cómo?, es el mismo procedimiento que hicimos para hacer un *merge*  :nail_care: solo que esta vez nuestra base cambia, dado que esta actualización la haremos de **Develop** a **Master**  #ElMacho :information_desk_person:.

Ahora si! manos a la obra y si no entendiste algo, take it easy, estamos para ayudarnos :heart: