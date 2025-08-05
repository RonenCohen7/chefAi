
import "./Layout.css";
import { Menu } from "../Menu/Menu";
import { Routing } from "../Routing/Routing";


import chefcock3 from "../../../assets/Images/chefcock3.jpg"
import chefcock2 from "../../../assets/Images/chefcokc2.jpg"
import chefBack from "../../../assets/Images/chefBack.jpg"
import chefcock4 from "../../../assets/Images/chefcock4.jpg"
import chefcock5 from "../../../assets/Images/chefcock5.jpg"
import { JSX } from "react";



export function Layout(): JSX.Element {

    return (
        <div className="Layout">
            <nav>
                <Menu />
                <hr />
                <header>
                    <div>
                        <img src={chefcock5} />
                    </div>
                    <div>
                        <img src={chefcock3} />
                    </div>
                    <div>
                        <img src={chefcock2} />
                    </div>
                    <div>
                        <img src={chefBack} />
                    </div>
                    <div>
                        <img src={chefcock4} />
                    </div>

                </header>

            </nav>
            <main>
                <Routing />
               
            </main>
            <footer>

            </footer>
        </div>
    );


}


