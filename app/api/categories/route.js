import { getCategorys } from "@/src/integrations/smarty-venta/categorys";

export async function GET(request) {

    try {

        const { data } = await getCategorys();

        return Response.json(data)

    } catch (error) {

        return Response.json({ message: 'Error de comunicación con smartyventa' }, {
            status: 400
        })

    }

}