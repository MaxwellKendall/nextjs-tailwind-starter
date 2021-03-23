import { format } from 'date-fns';

const LOCAL_STORAGE_KEY = 'nextjs-ecommerce';

export const parseDataFromRemoteCart = (remoteCart, productDetails) => {
    // TODO: Parse remote cart and annotate it with relevant productDetails
    return remoteCart;
};

export const persistCartInLocalStorage = (cart) => {
    const timeStamp = format(new Date(), 'yyyy-MM-dd:hh:mm:ssX');
    // eslint-disable-next-line no-undef
    window.localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ id: cart.id, timeStamp })
    );
}