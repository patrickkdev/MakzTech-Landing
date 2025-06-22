import React from 'react'
import { Container, Grid } from '@mui/material'
import { Build, FlashOn, SyncAlt } from '@mui/icons-material'

const bulletPoints = [
  {
    icon: <Build />,
    title: "Soluções Sob Medida",
    subtitle: "Cada projeto é feito de forma personalizada, sem fórmulas prontas ou pacotes genéricos."
  },
  {
    icon: <FlashOn />,
    title: "Agilidade e Foco",
    subtitle: "O objetivo é entregar rápido, mas com qualidade. Sem burocracia, sem processos desnecessários."
  },
  {
    icon: <SyncAlt />,
    title: "Integração e Automação",
    subtitle: "A ideia é sempre eliminar o trabalho manual e fazer as ferramentas do cliente trabalharem juntas de forma inteligente."
  }
]

const About = () => {
  return (
    <div className="about fill-on-scroll">
      <Container className="container" maxWidth="lg">
        <h1 className="title">Sobre a MakzTech</h1>
        <p>
          A MakzTech surgiu da vontade de aplicar tecnologia de um jeito simples, direto e funcional. 
          Não é sobre criar grandes sistemas que ninguém usa. É sobre resolver problemas reais com soluções práticas, 
          feitas na medida para o que o cliente realmente precisa.
        </p>

        <p>
          O foco aqui é entregar valor. Seja um site rápido, uma API bem feita ou uma automação que economize horas de trabalho.
          Cada projeto é tratado com atenção aos detalhes, com escolhas técnicas que fazem sentido para o contexto de cada cliente.
        </p>

        <Grid container spacing={4} style={{ marginTop: '2rem' }}>
          {bulletPoints.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                {item.icon}
                <h3 style={{ marginLeft: '0.5rem' }}>{item.title}</h3>
              </div>
              <p>{item.subtitle}</p>
            </Grid>
          ))}
        </Grid>

        <p style={{ marginTop: '2rem' }}>
          A ideia é simples: usar a tecnologia como um facilitador. Menos complicação, mais resultado.
        </p>
      </Container>
    </div>
  )
}

export default About