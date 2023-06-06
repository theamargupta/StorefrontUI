'use client';

import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart, SfIconFavorite,SfIconSell,SfIconRemove,SfIconAdd,SfIconDelete } from '@storefront-ui/react';
import { useCounter } from 'react-use';

const products = [
  {
    id: 1,
    name: 'Sofa',
    price: 19.99,
    image: "https://i.ibb.co/vjSxKxT/chair4.png",
  },
  {
    id: 2,
    name: 'Chair',
    price: 29.99,
    image: "https://i.ibb.co/SvQhwd8/chair2.png",
  },
  {
    id: 3,
    name: 'Sofa',
    price: 29.99,
    image: "https://i.ibb.co/vjSxKxT/chair4.png",
  
  },
  {
    id: 4,
    name: 'Chair',
    price: 29.99,
    image: "https://i.ibb.co/SvQhwd8/chair2.png",
  },
  {
    id: 5,
    name: 'Chair',
    price: 29.99,
    image: "https://i.ibb.co/7WQ4mJH/chair5.png",
  },
  {
    id: 6,
    name: 'Chair',
    price: 29.99,
    image: "https://i.ibb.co/vjSxKxT/chair4.png",
  },
  // Add more products as needed
];

export default function ProductsSection() {
  return (
    <div className="m-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCardVertical key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductCardHorizontal key={product.id} product={product} />
        ))} </div>
    </div>
  );
}

function ProductCardVertical({ product }) {
  return (
    <div className="border bg-[#F0F0F0] border-neutral-200 rounded-md hover:shadow-lg">
      <div className="relative">
        <SfLink href="#">
          <img
            src={product.image}
            alt="Great product"
            className="object-cover h-auto rounded-md aspect-square m-auto"
            width={300}
            height={300}
          />
        </SfLink>
        <SfButton
          type="button"
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <SfLink href="#" variant="secondary" className="no-underline">
          {product.name}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={5} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{123}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          Lightweight • Non slip • Flexible outsole • Easy to wear on and off
        </p>
        <span className="block pb-2 font-bold typography-text-lg">
          ${product.price}
        </span>
        <SfButton
          type="button"
          size="sm"
          slotPrefix={<SfIconShoppingCart size="sm" />}
        >
          Add to cart
        </SfButton>
      </div>
    </div>
  );
}
function ProductCardHorizontal({ product }) {
    const inputId = 1;
    const min = 1;
    const max = 10;
    const [value, { inc, dec, set }] = useCounter(min);
  
    function handleOnChange(event) {
      const { value: currentValue } = event.target;
      const nextValue = parseFloat(currentValue);
      set(Number(clamp(nextValue, min, max)));
    }
  
    return (
      <div className="bg-[#F0F0F0] relative flex border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] max-w-[640px] p-4">
        <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
          <SfLink href="#">
            <img
              className="w-full h-auto border rounded-md border-neutral-200"
              src={product.image}
              alt="alt"
              width={300}
              height={300}
            />
          </SfLink>
          <div className="absolute top-0 left-0 text-white bg-secondary-600 py-1 pl-1.5 pr-2 text-xs font-medium">
            <SfIconSell size="xs" className="mr-1" />
            Sale
          </div>
        </div>
        <div className="flex flex-col pl-4 min-w-[180px] flex-1">
          <SfLink href="#" variant="secondary" className="no-underline typography-text-sm sm:typography-text-lg">
            {product.name}
          </SfLink>
          <div className="my-2 sm:mb-0">
            <ul className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700">
              <li>
                <span className="mr-1">Size:</span>
                <span className="font-medium">6.5</span>
              </li>
              <li>
                <span className="mr-1">Color:</span>
                <span className="font-medium">Red</span>
              </li>
            </ul>
          </div>
          <div className="items-center sm:mt-auto sm:flex">
            <span className="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">
              ${product.price}
            </span>
            <div className="flex items-center justify-between mt-4 sm:mt-0">
              <div className="flex border border-neutral-300 rounded-md">
                <SfButton
                  type="button"
                  variant="tertiary"
                  square
                  className="rounded-r-none"
                  disabled={value <= min}
                  aria-controls={inputId}
                  aria-label="Decrease value"
                  onClick={() => dec()}
                >
                  <SfIconRemove />
                </SfButton>
                <input
                  id={inputId}
                  type="number"
                  role="spinbutton"
                  className="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                  min={min}
                  max={max}
                  value={value}
                  onChange={handleOnChange}
                />
                <SfButton
                  type="button"
                  variant="tertiary"
                  square
                  className="rounded-l-none"
                  disabled={value >= max}
                  aria-controls={inputId}
                  aria-label="Increase value"
                  onClick={() => inc()}
                >
                  <SfIconAdd />
                </SfButton>
              </div>
              <button
                aria-label="Remove"
                type="button"
                className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
              >
                <SfIconDelete />
                <span className="hidden ml-1.5 sm:block"> Remove </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }