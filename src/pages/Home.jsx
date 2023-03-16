import { useTheme } from '@emotion/react'
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded'
import { Button,Card, CardActions, CardContent, CardMedia, Grid, IconButton, Rating, Typography } from '@mui/material'
import { Container, height } from '@mui/system'
import React, { useState, useEffect } from 'react'

export default function home() {
    const [Products, setProducts] = useState([])
    const theme = useTheme();
    useEffect(() => {
        fetchAllProducts()
    }, [])
    async function fetchAllProducts() {
        const response = await fetch('http://fakestoreapi.com/products')
        const result = await response.json()
        setProducts(result)
    }

    return (
        <Container sx={{ py: 8 }} maxWidth='lg'>
            <Grid container spacing={4}>
                {Products.map(({ id, price, description, image, rating, title }) =>
                    <Grid item key={id} xs={12} sm={6} md={3}>
                        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" ,padding:'6px'}}>
                            <CardMedia component='img' sx={{ alignSelf: "center", width: theme.spacing(30), height: theme.spacing(30), objectFit: "contain", pt: theme.spacing() }} src={image} alt={title} />
                            <CardContent>
                                <Typography variant='h5' component='h2' gutterBottom sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', '-webkit-line-clamp': "1", '-webkit-box-orient': 'vertical' }}>{title}</Typography>
                                <br/>
                                <Typography color='text.secondary' paragraph sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', '-webkit-line-clamp': "3", '-webkit-box-orient': 'vertical' }}>{description}</Typography>
                                <Typography fontSize='large' paragraph>Price: ${price}</Typography>
                                <Rating readOnly precision={0.5} value={rating.rate}></Rating>
                            </CardContent>
                            <CardActions sx={{alignSelf:'center'}}>
                                <Button variant = 'outlined'>
                                    <ShoppingCartRounded/> Add to cart
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}
