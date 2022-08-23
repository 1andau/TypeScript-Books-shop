
export type CartItem = {
    imageLink: string;
    title: string;
    author: string;
  id: string;
  count: number;
  price: number;

  };
  
  export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  }
  
  
