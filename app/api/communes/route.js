
import { getCommunes } from "@/src/integrations/smarty-venta/communes";


export async function GET(request) {

    try {

        const { data } = await getCommunes();

        return Response.json(data)

    } catch (error) {
   
        return Response.json({ message: 'Error de comunicación con smartyventa' }, {
            status: 400
        })

    }

}