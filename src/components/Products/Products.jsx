import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";

import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles();

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<h1 className={classes.title}>Available Products</h1>
			<Grid container justify="center" spacing={4}>
				{products.map((product) => (
					<Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
						<Product
							product={product}
							onAddToCart={() => onAddToCart(product.id, 1)}
						/>
					</Grid>
				))}
			</Grid>
			<br />
			<br />
		</main>
	);
};

export default Products;
