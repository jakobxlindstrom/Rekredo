import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { products } from '../reducers/products';
import { cart } from '../../reducers/cart';

import { showProduct } from '../../reducers/products';
// import styled from 'styled-components';
import { ProductCard, HeaderSection } from '../../styledElements/Card';
import { H1, H2, H3, P, ProductText } from '../../styledElements/Texts';
import { Button, SmallButton } from '../../styledElements/Buttons';
import { MiddleContainer } from '../../styledElements/Container';

const Products = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.productList);
    const loading = useSelector((state) => state.ui.loading);
    const myCart = useSelector((state) => state.cart.cartList);
    // const accessToken = useSelector((state) => state.user.accessToken)

    useEffect(() => {
        dispatch(showProduct());
    }, [dispatch]);

    const onAddToCart = (product) => {
        dispatch(cart.actions.setCart(product));
    };

    const itemIsInCart = (item) => {
        return myCart.filter((prop) => prop._id === item._id).length > 0;
    };

    return (
        <MiddleContainer>
            <HeaderSection>
                <H1>Props collection</H1>
                <H3>Choose unique assortment uploaded from people all over Europe</H3>
            </HeaderSection>
            <MiddleContainer>
                {!loading ? (
                    allProducts?.map((item) => (
                        <ProductCard key={item._id}>
                            <ProductText>
                                <H2>{item.name}</H2>
                                {/* <P>{item.description}</P>
                <P>{item.category}</P>
                <P>{item.tags}</P> */}
                            </ProductText>
                            <img
                                src={item.image?.imageUrl}
                                className="product-image"
                                alt="website"
                            />
                            <SmallButton onClick={() => navigate(`/products/${item._id}`)}>
                                Prop details
                            </SmallButton>
                            {itemIsInCart(item) ? (
                                <P>Item in cart</P>
                            ) : (
                                <Button
                                    onClick={() => onAddToCart(item)}
                                    disabled={itemIsInCart(item)}
                                >
                                    Add to cart
                                </Button>
                            )}
                        </ProductCard>
                    ))
                ) : (
                    <h1>loading</h1>
                )}
            </MiddleContainer>
        </MiddleContainer>
    );
};

export default Products;