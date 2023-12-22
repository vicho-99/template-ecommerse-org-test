import { getProducts } from "@/src/integrations/smarty-venta/products";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    try {

        const { data } = await getProducts({
            page: request.nextUrl.searchParams.get("page"),
            limit: request.nextUrl.searchParams.get("limit"),
            categoryId: request.nextUrl.searchParams.get("categoryId"),
        });

        return Response.json(data)

    } catch (error) {

        return Response.json({ message: 'Error de comunicación con smartyventa' }, {
            status: 400
        })

    }



}