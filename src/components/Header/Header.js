import { useState } from "react";
import {Link}from "react-router-dom";
import logo from '../../logo.svg'
import Search from "../Search/Search";
import { useDispatch, useSelector } from 'react-redux';
import { getSearchQuery } from '../../redux/filterSlice';
import { getCartItems } from "../../redux/cartSlice";
import {cartItemQuantity} from "../../redux/cartSlice";




function Header(){
const dispatch = useDispatch();
const searchQuery = useSelector(getSearchQuery);
const [search, setSearch] = useState(false);
const [burger, setBurger] = useState(false);
const cartItemCount = useSelector(getCartItems);
console.log('Cart Item Count:', cartItemCount);

    return(
        <div className="header_main">

            <div className="header_container">
                <div className='logo-container'>
                    <Link to='/'>
                        <img src={logo} alt='logo'/>
                    </Link>
                    <div className='logo-title'>
                        <h1> Crunchy Dreams </h1>
                        <p> ONLINE SHOP </p>
                    </div>
                </div>
                <div className='header_icons_container'>
                    <div  className={`burger-box ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger)}>
                        <span ></span>
                        <span></span>
                        <span></span>
                    </div>

                    {burger && (
                        <div className="mobile-links">
                               <Link to='/'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"><path fill="#ab9873" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>                        
                        </span>
                        </Link>
                        <Link to='/login'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#ab9873" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                        </span>
                        </Link>

                        <div className="cart-icon-quantity">
                        <Link to='/cart'>
                        <span data-count={cartItemCount.cartItemQuantity}> 
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512">
                            <path fill="#ab9873" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                            </svg>
                        </span>
                        </Link>
                        </div>
                        
                        <span onClick={() => setSearch(!search)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ab9873" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </span>

                        {search ? <Search className="active" />: null}
                        </div>
                    )}
                    
                    <div className='header_icons'>
                        <Link to='/'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"><path fill="#ab9873" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>                        
                        </span>
                        </Link>
                        <Link to='/login'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#ab9873" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                        </span>
                        </Link>
                        <span onClick={() => setSearch(!search)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ab9873" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </span>

                        {search ? <Search className="active" />: null}

                        <div className="cart-icon-quantity">
                        <Link to='/cart'>
                        <span data-count={cartItemCount.cartItemQuantity}> 
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512">
                            <path fill="#ab9873" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                            </svg>
                        </span>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;