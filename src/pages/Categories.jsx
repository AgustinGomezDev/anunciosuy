import React from 'react'
import categoryData from "../data/category.json"
import { Link } from 'react-router-dom'
import { PlusCircle, Users01, TrendUp01, Home03, BriefCase01, Monitor05, Announcement01 } from "untitledui-js-base"
import { Car, Motorbike, Van, Truck, Tool, Bike, Electronic, ElectronicRepleacement, Appliance, Furniture, Garden, Game, Fashion, FashioAccesories, ImageAndSound, Phone, Sport, Pet, Dots, Book } from "@/components/icons/CategoriesIcons"

const externalIcons = {
    PlusCircle,
    Users01,
    TrendUp01,
    Home03,
    BriefCase01,
    Monitor05,
    Announcement01,
};

const localIcons = {
    Car,
    Motorbike,
    Van,
    Truck,
    Tool,
    Bike,
    Electronic,
    ElectronicRepleacement,
    Appliance,
    Furniture,
    Garden,
    Game,
    Fashion,
    FashioAccesories,
    ImageAndSound,
    Phone,
    Sport,
    Pet,
    Dots,
    Book,
};

const sortedCategories = categoryData.sort((a, b) => a.name.localeCompare(b.name))

const Categories = () => {
    return (
        <div className='py-10 container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-10 place-items-center'>
            {
                sortedCategories.map((category, index) => {
                    const IconComponent = category.icon.from === 'local'
                        ? localIcons[category.icon.name]
                        : externalIcons[category.icon.name]


                    return (
                        <div key={index} className="flex flex-col items-center space-y-2 group" >
                            <Link to={`/anuncios?category=${category.name}`} className="p-4 bg-[#3b82f6]/10 rounded-full transition-colors hover:bg-[#3b82f6]/20">
                                {IconComponent ? (
                                    <IconComponent className="h-8 w-8 text-[#3b82f6]" fill={category.icon.from === 'local' ? "#3b82f6" : undefined}  />
                                ) : (
                                    <span>No Icon</span>
                                )}
                            </Link>
                            <span className="text-sm font-medium text-center">{category.name}</span>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Categories