// app/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div id="principal" >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Image
          src="/images/miranha.jpg"
          alt="Foto de perfil"
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
        />
        <div>
          <h1>Peter Parker/Miranha</h1>
          <h2>Jovem da paz/héroi da vizinhança</h2>
          <p>Email: peterspiderman@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/spider-parker</p>
        </div>
      </div>

      <div id="detalhes">
        <p>Clique no botão abaixo para ver mais sobre minhas habilidades!</p>
        <Link href="/detalhes">
          <button className="button">Clique Aqui</button>
        </Link>

      </div>
    </div>
  );
}
