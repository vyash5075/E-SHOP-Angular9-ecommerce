interface Summary {
    result: Result;
  }
  
  interface Result {
    last30DaysSummary: Last30DaysSummary;
    overAll: OverAll;
  }
  
  interface OverAll {
    products: number;
    orders: number;
    users: number;
  }
  
  interface Last30DaysSummary {
    userRegistered: number;
    sale: number;
    orders: number;
    productWise30DaysSummary: ProductWise30DaysSummary[];
  }
  
  interface ProductWise30DaysSummary {
    _id: string;
    quantity: number;
    totalSale: number;
    product: Product;
  }
  
  interface Product {
    _id: string;
    name: string;
    price: number;
    category: string;
    productImage: string;
    __v: number;
  }

  export {Product , ProductWise30DaysSummary , Last30DaysSummary , OverAll , Result  , Summary}