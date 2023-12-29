
import { getRegions } from "@/src/integrations/smarty-venta/regions";

export async function GET(request) {

    try {

        const { data } = await getRegions();

        return Response.json(data)

    } catch (error) {

        return Response.json({ message: 'Error de comunicación con smartyventa' }, {
            status: 400
        })

    }

}