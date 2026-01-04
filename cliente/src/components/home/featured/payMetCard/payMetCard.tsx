import MercadoPagoIcon from "/MercadoPago.png"
import { Button, Card } from "flowbite-react";

export default function PayMetCard() {
  return (
    <section className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white text-center">
          Conocé nuestro catalogo
        </h5>
        <Button color='blue' size="sm" href="#" className="w-fit">
          Ver más
        </Button>
      </div>

      <Card className="max-w-sm">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Compra desde la comodidad de tu casa
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Con Mercado Pago podes realizar compras al instante y de manera segura.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <img src={MercadoPagoIcon} alt="mercado pago icon" />
        </div>
      </Card>
    </section>
  );
}
