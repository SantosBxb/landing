import { Typography } from "@mui/material";
import BannerWithBox from "./banner";

const listItems = [
  {
    id: '0',
    content: (
      <>
        Recopilación de{': '}
        <Typography variant="inherit" fontWeight={700} component="span">
          Opiniones de servicios, productos y sucursales.
        </Typography>
      </>
    ),
  },
  {
    id: '1',
    content: (
      <>
        Sistema de{' '}
        <Typography variant="inherit" fontWeight={700} component="span">
          puntuación de rendimiento.
        </Typography>{' '}
      </>
    ),
  },
  {
    id: '2',
    content: (
      <>
        Invitaciones a{' '}
        <Typography variant="inherit" fontWeight={700} component="span">
          opinar por correo.
        </Typography>{' '}
      </>
    ),
  },
  {
    id: '3',
    content: (
      <>
        <Typography variant="inherit" fontWeight={700} component="span">
          Opiniones verificadas.
        </Typography>
      </>
    ),
  },
  {
    id: '4',
    content: (
      <>
        <Typography variant="inherit" fontWeight={700} component="span">
          Contestar al feedback
        </Typography>
          del cliente{' '}
      </>
    ),
  },
  {
    id: '5',
    content: (
      <>
        <Typography variant="inherit" fontWeight={700} component="span">
          Estadísticas{' '}
        </Typography>
          de rendimiento.
      </>
    ),
  },
  {
    id: '6',
    content: (
      <>
        Integración de{' '}
        <Typography variant="inherit" fontWeight={700} component="span">
          RRSS.
        </Typography>
      </>
    ),
  }
];



const hero = () => {
  return (
    <BannerWithBox
      title={
        <div>
          <Typography color="text.dark" component="h1" variant="h1" align="justify">
            Que todo sea más simple para ti, esa es nuestra misión
          </Typography>
          <Typography
            component="p"
            variant="body2"
            color="text.white"
            marginY={1}
            fontWeight={500}
            align="justify"
          >
            Entregar un canal de comunicación imparcial y genuino 
            entre consumidores y proveedores que enriquezca su relación 
            en base a los valores de honestidad, integridad y buen servicio.{' '}
            <Typography component="span" variant="body2" fontWeight={800}>
              ¡Conoce más sobre yo-opino!{' '}
            </Typography>
          </Typography>
        </div>
      }
      listItems={listItems}
    />
  );
}
 
export default hero;