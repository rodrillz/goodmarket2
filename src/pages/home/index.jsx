import React from 'react';
import Carrrusel from '../../componentes/Carrusel';
import CarrruselChico from '../../componentes/CarruselChico';
import Cards from '../../componentes/Cards';
import { Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Home() {
    const slides = [
        "static/images/fachada3.JPG",
        "static/images/fachada1.JPG",
        "static/images/letrero.JPG",
        "static/images/higiene1.png",
        "static/images/dulces1.JPG",
        "static/images/verduras.JPG",
        "static/images/desayuno.JPG",
        "static/images/cecinas.JPG",
        "static/images/pasillo3.JPG",
        "static/images/dulces3.JPG",
        "static/images/helados1.JPG",
        "static/images/congelados1.JPG",
        "static/images/congelados2.JPG",
        
      ];
    const marcas = [
        "static/images/marcas1.png",
        "static/images/marcas2.png",
        "static/images/marcas3.png",
        "static/images/marcas4.png",
        "static/images/marcas5.png",
        "static/images/marcas6.png",
        "static/images/marcas7.png",
    ];
    return (
        <>
        <div style={{ backgroundColor: "#FDF5E6" }}> {/* Cambia este color por el que desees */}

        <Carrrusel slides={slides} />
        <Container>
        <section id='MetodosDePago'>
        <div className='text-center text-4xl my-10'> <MonetizationOnOutlinedIcon style={{fontSize: 40, marginBottom: 8}}/> Métodos de pago</div>
        
        <div className="justify-between items-center flex my-16 flex-col sm:flex-row">
          
          <Cards
            imagen="/static/images/debito.png"
            titulo="Débito"
            texto="Usa cualquiera de tus tarjetas de débito para comprar en nuestro supermercado! Recuerda que para la compra de cigarros con este medio de pago, se suma un cargo adicional de $300."
          />
          
          <Cards
            imagen="/static/images/efectivo.png"
            titulo="Efectivo"
            texto="Si no tienes tarjeta, no te preocupes! puedes usar la cantidad de efectivo que desees para pagar el total de tu compra."
          />

          
          <Cards

            imagen="/static/images/transferencia.png"
            titulo="Transferencia"
            texto="Se te quedó la tarjeta en la casa y andas pato? No hay drama! solicita la cuenta bancaria de Goodmarket en la caja para realizar una transferencia."
          />
          
        </div>
        </section>
        
        </Container>
        <section id='Ubicacion'>
        
        
        <p className='text-center text-4xl mb-10'> <LocationOnIcon style={{fontSize: 40, marginBottom: 10}}/> Estamos ubicados en calle 18 de Septiembre, Lo Miranda</p>
        
        <div className="flex flex-col w-full h-screen">
            <iframe style={{height:"70%" , position:"sticky"}} src="https://www.google.com/maps/embed/v1/place?q=place_id:EiwxOCBkZSBTZXB0aWVtYnJlLCBEb8OxaWh1ZSwgTydIaWdnaW5zLCBDaGlsZSIuKiwKFAoSCbXx8NGZaGOWEeos-DgNgd2GEhQKEgn3UiH7RW9jlhHWaV6LRV8BjQ&key=AIzaSyAGOJjAzSf8WVt9j6OGGtQ1FBoLefAMawk"></iframe> 
        </div>
        </section>
        <section id="Marcas">
            <p className='text-center text-4xl mb-10'> <ShoppingCartOutlinedIcon style={{fontSize: 40, marginBottom: 10}}/> Algunas de nuestras marcas y proveedores</p>

            <CarrruselChico slides={marcas} />
        </section>
        </div>
        </>
    )
}