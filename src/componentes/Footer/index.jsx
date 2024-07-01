import React from 'react';
import {Container} from '@mui/material';

const footer = () => {
    return (
      <footer className="py-8 bg-red-500" style={{ position: "relative" }}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            className="flex flex-col justify-center"
          >
            <img style={{maxWidth:"190px"}} src="static/images/goodmarket_white_text.png" alt="prueba"/>
          </div>

          <div
            className="flex flex-row justify-around w-1/2"
          >
            <ul className="list-unstyled text-white">
              <li>
                <a className="text-black font-semibold block pb-2 text-sm">Ubicación</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/AcercaDe">18 de Septiembre, Lo Miranda</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/Equipo">Sexta Región</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/">Libertador Bernardo O'Higgins</a>
              </li>
            </ul>
            <ul className="list-unstyled text-white">
              <li>
                <a className="text-black font-semibold block pb-2 text-sm" href="/">Supermercados Goodmarket SPA</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/Infraestructura">Cecinas</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/Noticias">Lácteos</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/Contact">Abarrotes y más</a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    );
};

export default footer;