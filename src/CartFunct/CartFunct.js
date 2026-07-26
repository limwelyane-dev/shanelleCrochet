export function addItem(cartItems, product) {
  const existing = cartItems.find((item) => item.id === product.id);

  if (existing) {
    return cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
}

export function incrementItem(cartItems, id) {
  return cartItems.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
}

export function decrementItem(cartItems, id) {
  return cartItems
    .map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);
}