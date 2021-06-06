/* eslint-disable react/no-unescaped-entities */
import { Typography } from 'antd';
import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '0px 16px' }}>
      <Typography.Title
        level={2}
        style={{ marginTop: '32px', textAlign: 'center' }}
      >
        Sobre mim
      </Typography.Title>
      <Typography>
        Amante de programação, decidi a 2 anos atrás iniciar um projeto de
        estudar todos os dias, e atualmente tenho feito isso acordando às 5 da
        manhã. Atualmente me especializando na stack Nodejs + React + React
        Native, mas com a mente aberta para buscar novos ares no futuro se
        necessário.
      </Typography>
      <Typography style={{ marginTop: '16px' }}>
        Amante da teoria sobre hábitos, decidi que minha vida seria toda pautada
        ao redor de 3 hábitos: Programar, ler e praticar jiu jitsu. Tenho ido
        com calma em busca desses objetivos, mas com a certeza de que alcançarei
        a maestria em cada um deles.
      </Typography>
      <Typography style={{ marginTop: '16px' }}>
        Durante o percurso, me apaixonei pela filosofia do estoicismo e decidi
        que a seguiria. Hoje em dia, grande parte do meu caráter, das minhas
        ações, são baseadas em valores estoicos que eu tenho trazido comigo,
        tendo como maior admiração o trabalho do imperador Marco Aurélio, também
        conhecido como o "ultimo bom imperador de Roma".
      </Typography>
    </div>
  );
};

export default About;
