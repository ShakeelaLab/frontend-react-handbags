import React from "react";
import './App.css';
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
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
                <Product
                    span="Best seller"
                    image={bag1}
                    description="The handy bag"
                    price="€ 400,-"
                />
                <Product
                    span="Best seller"
                    image={bag2}
                    description="The stylish bag"
                    price="€ 250,-"
                />
                <Product
                    span="New collection"
                    image={bag3}
                    description="The simple bag"
                    price="€ 300,-"
                />
                <Product
                    span="New collection"
                    image={bag4}
                    description="The trendy bag"
                    price="€ 150,-"
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
