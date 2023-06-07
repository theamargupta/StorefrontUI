"use client";
import { useState } from "react";
import {
  SfInput,
  SfIconSearch,
  SfIconCancel,
  useDisclosure,
} from "@storefront-ui/react";
import { ProductCardHorizontal, products } from "./ProductSection";

// eslint-disable-next-line no-promise-executor-return
export default function SearchBasic() {
  const [searchValue, setSearchValue] = useState("");

  const [snippets, setSnippets] = useState(products);
  const { isOpen, close, open } = useDisclosure();

  const isResetButton = Boolean(searchValue);

  const handleFocusInput = () => {
    // inputRef.current?.focus();
  };

  const handleReset = () => {
    setSearchValue("");
    setSnippets(products);
    handleFocusInput();
  };

  const handleChange = (event) => {
    const phrase = event.target.value;
    if (phrase) {
      setSearchValue(phrase);
      const output = products.filter((data) =>
        data.name.toLowerCase().includes(phrase.toLowerCase())
      );
      setSnippets(output);
    } else {
      handleReset();
    }
  };

  return (
    <div role="search" className="relative py-22 m-10">
      <SfInput
        value={searchValue}
        onChange={handleChange}
        onFocus={open}
        aria-label="Search"
        placeholder="Search 'MacBook' or 'iPhone'..."
        slotPrefix={<SfIconSearch />}
        slotSuffix={
          isResetButton && (
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset search"
              className="flex rounded-md focus-visible:outline focus-visible:outline-offset"
            >
              <SfIconCancel />
            </button>
          )
        }
      />
      {
        <div className="right-0 left-0">
          {snippets.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
              {snippets.map((product) => (
                <ProductCardHorizontal key={product.id} product={product} />
              ))}{" "}
            </div>
          )}
        </div>
      }
    </div>
  );
}
