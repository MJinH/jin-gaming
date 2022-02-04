import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Allproducts from './AllProducts';
import Keyboard from './Keyboard';
import Monitor from './Monitor';
import Mouse from './Mouse';

export default function Items() {
  const [currentProduct,setCurrentProduct] = useState('All')
  const [searchText,setSearchText] = useState('')
  const [productList] = useState(["All","Keyboard","Monitor","Mouse"])
  const showProducts = () => {
      switch(currentProduct) {
          case "Keyboard":
              return <Keyboard 
                        searchText={searchText} 
                    />
          case "Monitor":
              return <Monitor
                        searchText={searchText} 
                    />
          case "Mouse":
              return <Mouse 
                        searchText={searchText}
                    />
          default:
              return <Allproducts 
                        searchText={searchText}
                    />
      }
  }  

  return (
      <>
        <div className="items-top d-flex align-items-center justify-content-center">
            <div className="items-wrapper d-flex align-items-center">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="dropdwon-list">{currentProduct}</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {productList.map(product => (
                            <Dropdown 
                                name={product} 
                                setCurrentProduct={setCurrentProduct} 
                            />
                        ))}
                    </ul>
                </div>
                <div className="search d-flex justify-content-center">
                    <input type="text" className="searchItem" onChange={(e) => setSearchText(e.target.value.toLocaleLowerCase())} />
                </div>
            </div>
        </div>
        {showProducts()}
      </>
  )
}

