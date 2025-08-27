🚀 PASHER: Viaje por las Estrellas

Es un juego realizado para fines de aprendizaje donde controlas un cohete azul para recolectar estrellas mientras evitas planetas rojos. El objetivo es acumular la mayor cantidad de puntos posible sin perder todas tus vidas.

🎮 Controles

Mover el cohete: El cohete sigue suavemente la posición del cursor.
Reinicio: Aparece un botón centrado cuando pierdes las 3 vidas, que permite reiniciar la partida.

🕹️ Mecánica del juego

Recolectar estrellas:
Cada estrella amarilla proporciona +10 puntos.
Las estrellas parpadean suavemente para simular brillo.
Evitar planetas rojos:
Cada colisión con un planeta reduce 1 vida.
Los planetas tienen cráteres y contorno para simular un pequeño planeta real.

Fin del juego:
Cuando pierdes las 3 vidas, el juego se detiene.
Se muestra un botón “Jugar Nuevamente” centrado en la pantalla.

Velocidad dinámica:
La velocidad del cohete aumenta gradualmente conforme se acumula puntaje, haciendo el juego más desafiante.

Récord persistente:
El puntaje más alto se guarda automáticamente en el navegador usando localStorage.

🛠️ Modificaciones y mejoras realizadas

Gráficos personalizados con Phaser:
Cohete triangular azul con llama animada en la parte inferior.
Estrellas amarillas proporcionadas y animadas con parpadeo.
Planetas rojos con cráteres y contorno negro, tamaño proporcional.

HUD y estadísticas:
Puntaje actual, vidas restantes y mejor puntaje guardado.
Actualización en tiempo real durante la partida.

Colisiones y físicas:
Implementación de colisiones mediante física Arcade de Phaser.
Estrellas y planetas generados en posiciones que no se superpongan.

Botón de reinicio visible y centrado:
Aparece únicamente al perder las 3 vidas.
Reinicia la escena y oculta el botón automáticamente.
Velocidad dinámica:
Cohete acelera gradualmente con el puntaje.
Hace el juego más desafiante a medida que progresas.

📁 Archivos incluidos
index.html – Contenedor del juego y HUD.
style.css – Estilos del juego, HUD y botón de reinicio.
game.js – Lógica completa del juego:
Generación de gráficos de cohete, estrellas y planetas.
Movimiento, colisiones y puntaje.
Reinicio del juego y almacenamiento del récord.

🖼️ Muestra
![pruebajuegosvpe (1)](https://github.com/user-attachments/assets/b8e31291-8e19-42a8-930e-26df3d7051c4)
