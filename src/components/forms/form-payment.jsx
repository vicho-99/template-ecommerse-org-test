import TextInput from "@/src/components/inputs/text-input";
import useCommune from "@/src/hooks/useCommune";
import useRegion from "@/src/hooks/useRegion";
import useOrder from "@/src/hooks/useOrder";
export default function FormPayment() {

    const { communes } = useCommune();
    const { regions } = useRegion();

    const { onChangeInputText, order, submitFormOrder } = useOrder();

    return (

        <div className="flex flex-col gap-6 pt-12 lg:pt-1 lg:py-4 bg-white  " >

            <form onSubmit={submitFormOrder} >

                <div className="grid gap-6 mb-6 md:grid-cols-2">

                    <TextInput
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={order.firstName}
                        placeholder="Nombre"
                        label="Nombre"
                        required={true}
                        onChange={onChangeInputText}
                    />

                    <TextInput
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={order.lastName}
                        placeholder="Apellido"
                        label="Apellido"
                        required={true}
                        onChange={onChangeInputText}
                    />

                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2">

                    <TextInput
                        type="email"
                        id="email"
                        value={order.email}
                        name="email"
                        placeholder="Email"
                        label="Correo electronico"
                        required={true}
                        onChange={onChangeInputText}
                    />

                    <TextInput
                        type="number"
                        id="phone"
                        value={order.phone}
                        name="phone"
                        placeholder="Telefono"
                        label="Telefono"
                        required={true}
                        onChange={onChangeInputText}
                    />

                </div>

                <div className="mb-6">

                    <TextInput
                        type="text"
                        value={order.rut}
                        id="rut"
                        name="rut"
                        placeholder="Rut"
                        label="Rut"
                        onChange={onChangeInputText}
                        required={true}
                    />

                </div>

                <div className="mb-6">

                    <label
                        htmlFor="regionId"
                        className="block mb-2 text-sm font-medium text-gray-900 ">Región</label>

                    <select
                        id="regionId"
                        name="regionId"

                        value={order.regionId}
                        onChange={onChangeInputText}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 ">

                        {regions?.map(region => (
                            <option key={region.regionId} value={region.regionId} >{region.name2}</option>
                        ))}


                    </select>

                </div>

                <div className="mb-6">

                    <label
                        htmlFor="communeId"
                        className="block mb-2 text-sm font-medium text-gray-900 ">Communa</label>

                    <select
                        id="communeId"
                        name="communeId"
                        onChange={onChangeInputText}
                        value={order.communeId}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 ">

                        {communes?.filter(e => e.regionId == order.regionId).map(commune => (
                            <option key={commune.communeId} value={commune.communeId} >{commune.name}</option>
                        ))}

                    </select>

                </div>

                <div className="mb-6">
                    <TextInput
                        onChange={onChangeInputText}
                        value={order.address}
                        id="address"
                        name="address"
                        placeholder="Dirección"
                        label="Dirección"
                        required={true}
                    />
                </div>

            </form>

        </div>

    )

}