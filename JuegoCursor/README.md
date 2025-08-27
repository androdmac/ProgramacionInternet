# Juego: 🚀 PASHER Viaje por las Estrellas

> **Un juego arcade desarrollado para fines de aprendizaje**  
> Controla un cohete azul, recolecta estrellas y esquiva planetas.  
> ¡Pon a prueba tus reflejos y alcanza el puntaje más alto! 🌌

---

## 🎮 **Controles**

- **Mover el cohete:** Sigue suavemente la posición del cursor.  
- **Reiniciar:** Cuando pierdes las 3 vidas, aparece un **botón centrado** para reiniciar la partida.  

---

## 🕹️ **Mecánica del juego**

### **Recolectar estrellas**
- Cada **estrella amarilla** otorga **+10 puntos**.  
- Las estrellas **parpadean suavemente** para simular brillo.  

### **Evitar planetas rojos**
- Cada colisión con un planeta **resta 1 vida**.  
- Los planetas tienen **cráteres y contorno**, simulando un planeta real.  

### **Fin del juego**
- Cuando pierdes las 3 vidas, el juego se detiene.  
- Aparece el botón **“Jugar Nuevamente”**.  

### **Velocidad dinámica**
- La velocidad del cohete **aumenta gradualmente** con el puntaje.  

### **Récord persistente**
- Se guarda el **mejor puntaje** en el navegador usando `localStorage`.  

---

## 🛠️ **Modificaciones y mejoras realizadas**

- **Gráficos personalizados con Phaser**:
  - Cohete triangular azul con **llama animada**.
  - Estrellas amarillas **parpadeantes**.
  - Planetas rojos con **cráteres y contorno negro**.
- **HUD y estadísticas**:
  - Puntaje actual, vidas restantes y **mejor puntaje** guardado.
- **Colisiones y físicas**:
  - Implementación de colisiones con **Arcade Physics**.
  - Objetos generados sin superposición.
- **Botón de reinicio**:
  - Visible solo al perder todas las vidas.
  - Reinicia la escena y oculta el botón automáticamente.
- **Velocidad dinámica**:
  - El cohete acelera con el puntaje, aumentando la dificultad.  

---

## 📁 **Archivos incluidos**

- `index.html` – Contenedor del juego y HUD.  
- `style.css` – Estilos del juego, HUD y botón de reinicio.  
- `game.js` – Lógica principal:
  - Generación de gráficos (cohete, estrellas, planetas).
  - Movimiento, colisiones y puntaje.
  - Reinicio del juego y almacenamiento del récord.  

---

## 📸 **Vista previa**
![pruebajuegosvpe1](https://github.com/user-attachments/assets/5b7fc575-91e1-4c15-9379-a85f1f248745)

