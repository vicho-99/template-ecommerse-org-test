import { getCategories } from "@/src/services/categories";
import Link from "next/link";

export default async function CategoriesList() {

    const { categories } = await getCategories();

    return (

        <ul className="w-full font-medium  bg-white border border-gray-200 ">

            {categories?.map(category => (

                <li key={category.categoryId} className="w-full text-xs text-gray-600 px-4 py-2 border-b border-gray-200 ">

                    <Link href={""} > {category.name}</Link>

                </li>

            ))}

        </ul>

    )
}