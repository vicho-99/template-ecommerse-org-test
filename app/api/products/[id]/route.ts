import { getProduct } from "@/src/integrations/smarty-venta/products";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {

    try {
        
        const { data } = await getProduct({ key: params.id })

        return Response.json(data)

    } catch (error) {

        return Response.json({ message: 'Error de comunicación con smartyventa' }, {
            status: 400
        })

    }



}