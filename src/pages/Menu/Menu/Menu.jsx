// @ts-nocheck
import React from 'react';
import { Helmet } from "react-helmet-async";
import Cover from '../../Shared/Cover/Cover';
import img from '../../../../src/assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={img} title={'our menu'} subTitle={'would you like to try a dish!'}/>
            {/* Main Cover  */}
            <SectionTitle
            subHeading={"Don't Miss"}
            heading={"today's offer"}
            ></SectionTitle>
            {/* Offered Menu Items  */}
            <MenuCategory items={offered}/>
            {/* Dessert Menu Items  */}
            <MenuCategory 
            items={dessert} 
            title="Dessert"
            img={desertImg}
            />
            {/* Pizza Menu Items  */}
            <MenuCategory 
            items={pizza} 
            title="Pizza"
            img={pizzaImg}
            />
            {/* salad Menu Items  */}
            <MenuCategory 
            items={salad} 
            title="Salad"
            img={saladImg}
            />
            {/* soup Menu Items  */}
            <MenuCategory 
            items={soup} 
            title="Soups"
            img={soupImg}
            />
        </div>
    );
};

export default Menu;