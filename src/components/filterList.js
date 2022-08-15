import products from '../products.json'

export default function filterList(arr, method) {

    if(method == null) return products;

    else {
          // eslint-disable-next-line array-callback-return
          return products.filter(product => {
          const sizeArray = product.size.split(" ");
          if(arr.length > 0) {
                if(sizeArray.some(r => arr.indexOf(r) >= 0)) {
                    return product;
            }
          }
          else {
              return products;
          }
      })  
    }
}

