import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";

const ProductList = ({ products, onAddToCart }) => {
    // 🛑 Logic Layer to test injection robustness
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>

            {/* 🛑 Nested JSX Conditional logic */}
            {item.inStock ? (
                <View style={styles.badgeContainer}>
                    <Text style={styles.inStock}>In Stock</Text>
                </View>
            ) : (
                <Text style={styles.outOfStock}>Sold Out</Text>
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={() => onAddToCart(item)}
            >
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Store Inventory</Text>

            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#002b36", // Solarized Dark
    },
    card: {
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#586e75",
    },
    title: {
        fontSize: 18,
        color: "#839496",
    },
    button: {
        marginTop: 10,
        backgroundColor: "#268bd2",
    },
});

export default ProductList;
