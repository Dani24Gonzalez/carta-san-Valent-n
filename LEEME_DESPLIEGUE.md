# Guía para subir tu Carta a GitHub Pages 🚀

¡Tu carta está lista! Sigue estos pasos para ponerla en internet gratis.

## Paso 1: Subir archivos a GitHub

1.  Ve a [GitHub.com](https://github.com) y crea un **Nuevo Repositorio** (New Repository).
    *   Nombre: `carta-san-valentin` (o lo que quieras).
    *   Público.
    *   No marques "Add a README file" (ya tienes archivos).
2.  Sube tus archivos:
    *   Si usas la web de GitHub: Haz clic en "uploading an existing file". Arrastra **todos** los archivos de tu carpeta `carta` (incluyendo la carpeta `img`).
    *   Si usas Git en tu PC:
        ```bash
        git init
        git add .
        git commit -m "Carta lista"
        git branch -M main
        git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
        git push -u origin main
        ```

## Paso 2: Activar GitHub Pages

1.  En tu repositorio en GitHub, ve a **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
2.  En **Source**, selecciona `Deploy from a branch`.
3.  En **Branch**, selecciona `main` y la carpeta `/ (root)`.
4.  Haz clic en **Save**.

¡Listo! En unos minutos te dará un link (ej: `https://tu-usuario.github.io/carta-san-valentin/`) que podrás compartir.

## Notas Importantes

*   **Música**: El código busca `cancion1.mp3` y `cancion2.mp3` en la carpeta principal. Asegúrate de subir tus canciones con esos nombres exactos (o editando el HTML).
*   **Formulario**: Para que el formulario funcione, necesitas registrarte en [Formspree](https://formspree.io) y reemplazar `TU_ID_DE_FORMULARIO` en el archivo `index.html` (línea ~450) con tu ID real.
