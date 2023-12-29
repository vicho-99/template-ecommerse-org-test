import FavoritiesButton from "@/src/components/buttons/favorities-button";
import ShoppingBagButton from "@/src/components/buttons/shopping-bag-button";
import SearchProductsForm from "@/src/components/forms/search-products-form";

export default function HeaderOptions() {

    return (

        <div className="flex flex-row gap-6  " >

            <SearchProductsForm />

            <FavoritiesButton />

            <ShoppingBagButton />

        </div>

    )

}


{/*     <ButtonAccountUser /> */ }