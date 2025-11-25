import './App.css';
import Button from "./components/Button.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Tile from "./components/Tile.jsx";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    title="to the collection"
                    onClick={() => console.log("to the collection")}
                />
                <Button
                    title="shop all bags"
                    onClick={() => console.log("shop all bags")}
                />
                <Button
                    title="pre-orders"
                    onClick={() => console.log("pre-orders")}
                    disabled={true}
                />
            </nav>
            <main>
                <ProductCard
                    span="Best seller"
                    productimage={bag1}
                    productTitle="The handy bag"
                    productPrice="€ 400,-"
                />
                <ProductCard
                    span="Best seller"
                    productimage={bag2}
                    productTitle="The stylish bag"
                    productPrice="€ 250,-"
                />
                <ProductCard
                    span="New collection"
                    productimage={bag3}
                    productTitle="The simple bag"
                    productPrice="€ 300,-"
                />
                <ProductCard
                    span="New collection"
                    productimage={bag4}
                    productTitle="The trendy bag"
                    productPrice="€ 150,-"
                />
            </main>
            <footer>
            <Tile
                title="the brand"
                paragraph1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis distinctio eos maiores modi, mollitia necessitatibus nisi numquam saepe. Maiores, molestias?"
                paragraph2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis distinctio eos maiores modi, mollitia necessitatibus nisi numquam saepe. Maiores, molestias?"
            />
                <Tile
                    image={brand}
                />
                <Tile
                    image={story}
                />
                <Tile
                    title="our story"
                    paragraph1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis distinctio eos maiores modi, mollitia necessitatibus nisi numquam saepe. Maiores, molestias?"
                />
            </footer>
        </>
    );
}

export default App;
