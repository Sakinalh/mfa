import React from 'react'
import { useStore } from "store/StoreApp";
import { Book } from 'models/Models';

export default function useCartComputer(cartItems: typeof Book[]) {
    const { useGetOffersQuery } = useStore();

    let isbns: string[] = cartItems.map((item: typeof Book) => item.isbn);
    const total: number = cartItems.map((item: typeof Book) => item.price * item.qty).reduce((sum, item) => sum + item);
    
    const {
        data,
        isLoading,
      } = useGetOffersQuery(isbns.toString(), { refetchOnMountOrArgChange: true });

      if(isLoading){
          return <p>'Loading....'</p>
      }
    const {offers} = data;

    const calculatePercent = (item: any) => {
       
        return total - (total * item.value / 100)
    }

    const calculateMinus = (item: any) => {
      
        return total - item.value
    }

    const calculateSlice = (item: any): number => {
        if(total < 100){
            return total;
        }
       
        const slice = item.sliceValue;
        const value = item.value;
     
        const parts = Math.trunc(total  / slice);
        
        return total - (parts * value) ;
    }

    const computeBestOffer = (total: number) => {

        const discounts = [total];

        offers.map((item: any) => {
            switch(item.type){
                case "percentage":
                    discounts.push(calculatePercent(item));
                    break;
                case "minus":
                    discounts.push(calculateMinus(item))
                    break;
                case "slice":
                    discounts.push(calculateSlice(item))
                    break;
            }
        })

        return Math.min(...discounts);
    }
    
    return {total: computeBestOffer(total)};
}
