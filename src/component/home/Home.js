import HomeCategory from "./HomeCategory";
import ProductDisplay from "./ProductDisplay";
import CollectionDisplay from "./CollectionDisplay";
import HomeAdvert from "./HomeAdvert";

const Home = () => {
    return (
        <>
         <HomeCategory/>   
         <ProductDisplay title="Top Selling Items"  sliceStart={0} sliceEnd={6}  mediumsliceStart={0} mediumsliceEnd={4}/>
         <ProductDisplay title="every day deals" seeall='see all' styleName = 'red'  sliceStart={7} sliceEnd={13} mediumsliceStart={5} mediumsliceEnd={9}/>
         <CollectionDisplay title="shopping festival collections" seeall='see all'  sliceStart={2} sliceEnd={14}/>
         <HomeAdvert/>
         <ProductDisplay title="sneakers" seeall='see all' sliceStart={0} sliceEnd={6}  mediumsliceStart={0} mediumsliceEnd={4}/>
         <ProductDisplay title="dresses" seeall='see all' sliceStart={6} sliceEnd={12}  mediumsliceStart={4} mediumsliceEnd={8}/>
         <CollectionDisplay title="top fashion categories" seeall='see all'  sliceStart={8} sliceEnd={20}/>
         <HomeAdvert/>
         <CollectionDisplay title="top phone categories" seeall='see all'  sliceStart={2} sliceEnd={14}/>
         <ProductDisplay title="android phones" seeall='see all' sliceStart={4} sliceEnd={10}  mediumsliceStart={3} mediumsliceEnd={7}/>
         <ProductDisplay title="iphones" seeall='see all' sliceStart={12} sliceEnd={18}  mediumsliceStart={16} mediumsliceEnd={20}/>
        </>
    )
}

export default Home
