
import { createOrder } from "@/src/integrations/smarty-venta/orders";

export async function POST(request) {

    try {



        const requestData = await request.json();

        const { data } = await createOrder({ order: requestData });


        return Response.json(data)

    } catch (error) {

        return Response.json({ message: 'Error de comunicación con smartyventa' }, {
            status: 400
        })

    }

}