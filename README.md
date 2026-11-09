# CRUD Clientes con Supabase

Aplicación web CRUD (Create, Read, Update, Delete) desarrollada con HTML, CSS y JavaScript Vanilla utilizando Supabase como backend.

## Características

- Crear clientes
- Listar clientes
- Editar clientes
- Eliminar clientes
- Base de datos PostgreSQL gestionada por Supabase
- Uso de módulos ES6
- Arquitectura separada por servicios y componentes UI

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- Supabase
- PostgreSQL

## Estructura del proyecto

```text
crud-supabase/
│
├── index.html
├── README.md
│
├── css/
│   └── styles.css
│
└── js/
    ├── app.js
    │
    ├── config/
    │   └── supabase.js
    │
    ├── services/
    │   ├── createCliente.js
    │   ├── readClientes.js
    │   ├── updateCliente.js
    │   ├── deleteCliente.js
    │   └── getClienteById.js
    │
    └── ui/
        ├── formHandler.js
        └── renderTabla.js
```

## Requisitos

- Navegador moderno
- Proyecto creado en Supabase
- Tabla `clientes`
- Python o cualquier servidor web local

## Crear la tabla en Supabase

```sql
CREATE TABLE clientes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150)
);
```

## Configuración de Supabase

Editar:

```javascript
js/config/supabase.js
```

Configurar:

```javascript
import { createClient }
from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl =
"https://TU_PROYECTO.supabase.co";

const supabaseKey =
"TU_PUBLISHABLE_KEY";

export const supabase =
createClient(
    supabaseUrl,
    supabaseKey
);
```

## Configuración de permisos

Habilitar RLS:

```sql
ALTER TABLE clientes
ENABLE ROW LEVEL SECURITY;
```

Crear políticas:

```sql
CREATE POLICY "Permitir lectura"
ON public.clientes
FOR SELECT
TO anon
USING (true);

CREATE POLICY "Permitir insercion"
ON public.clientes
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Permitir actualizacion"
ON public.clientes
FOR UPDATE
TO anon
USING (true);

CREATE POLICY "Permitir eliminacion"
ON public.clientes
FOR DELETE
TO anon
USING (true);
```

Otorgar privilegios:

```sql
GRANT SELECT, INSERT, UPDATE, DELETE
ON public.clientes
TO anon;
```

## Ejecutar localmente

Desde la raíz del proyecto:

```bash
python -m http.server 8000
```

Abrir:

```text
http://localhost:8000
```

## Funcionalidades implementadas

### CREATE

Permite registrar nuevos clientes.

### READ

Lista todos los clientes almacenados.

### UPDATE

Permite editar un cliente existente.

### DELETE

Permite eliminar un cliente seleccionado.

## Posibles mejoras

- Validación avanzada de formularios
- Supabase Auth
- Paginación
- Buscador de clientes
- Confirmaciones visuales (Toast)
- Diseño responsive
- Despliegue en Vercel

## Autor

Richard dpr

Proyecto de aprendizaje para integración de Supabase con JavaScript Vanilla y Vercel.