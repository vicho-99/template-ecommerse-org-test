import { getConfigs } from "@/src/integrations/smarty-venta/configs";

export async function GET(request) {

    try {

        const { data } = await getConfigs();

        return Response.json(data)

    } catch (error) {

        return Response.json({ message: 'Error de comunicación con smartyventa' }, {
            status: 400
        })

    }



}