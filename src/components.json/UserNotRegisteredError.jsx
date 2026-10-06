import React from 'react';

export default function UserNotRegisteredError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-heading font-bold">Acceso no autorizado</h1>
      <p className="text-muted-foreground max-w-sm">
        Tu cuenta no está registrada en esta aplicación. Contacta al administrador para obtener acceso.
      </p>
    </div>
  );
}
