import ChileanRutify from 'chilean-rutify'

export async function mappedOrder({ cart, order }) {

    let details = [];

    cart.forEach(el => {
        details.push({
            ecProductId: el.ecProductId.trim(),
            qty: parseInt(el.qty)
        })
    });

    return {
        businessPartner: {
            firstName: order.firstName.trim(),
            lastName: order.lastName.trim(),
            rut: ChileanRutify.normalizeRut(order.rut),
            phone: order.phone.trim(),
            email: order.email.trim(),
            turnId: null
        },
        address: {
            communeId: parseInt(order.communeId),
            address: order.address.trim()
        },
        details
    }

}