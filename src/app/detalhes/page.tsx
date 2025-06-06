// app/detalhes/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { JsonHabilidadeRepositorio } from '../../../repositories/json-habilidade-repositorio';
import { Habilidade } from '../../../model/habilidade-model';
import Link from 'next/link';

export default function DetalhesPage() {
   const [habilidades, setHabilidades] = useState<Habilidade[]>([]);

   useEffect(() => {
      const repo = new JsonHabilidadeRepositorio();
      repo.findAll().then(setHabilidades);
   }, []);

   return (
      <div style={styles.page}>
         <div style={styles.container}>
            <h1 style={styles.title}>💼 Minhas Habilidades</h1>

            <div style={styles.grid}>
               {habilidades.map((hab) => (
                  <div key={hab.id} style={styles.card}>
                     <h2 style={styles.cardTitle}>{hab.titulo}</h2>
                     <p style={styles.cardText}>{hab.descricao}</p>
                  </div>
               ))}
            </div>

            <Link href="/">
               <button style={styles.button}>← Voltar para o Cartão</button>
            </Link>
         </div>
      </div>
   );
}

const styles = {
   page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #dbeafe, #fef9c3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
   },
   container: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '16px',
      maxWidth: '900px',
      width: '100%',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
   },
   title: {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '2rem',
      textAlign: 'center',
      color: '#2c3e50',
   },
   grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.5rem',
   },
   card: {
      backgroundColor: '#f4f4f4',
      padding: '1rem',
      borderRadius: '12px',
      borderLeft: '5px solid #6c5ce7',
      transition: 'transform 0.2s ease',
   },
   cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: '#34495e',
   },
   cardText: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.4',
   },
   button: {
      marginTop: '2rem',
      backgroundColor: '#6c5ce7',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1.4rem',
      fontSize: '1rem',
      fontWeight: 600,
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.25s ease',
   },
};
