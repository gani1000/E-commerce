import React from 'react';
import { SelectionProducts } from '../../util/typesObj';

declare type IProductsSelection = {
    product: SelectionProducts;
};

export default function SelectTap(selection: IProductsSelection): React.JSX.Element {

    return (
        <React.Fragment>
            <label htmlFor={selection.product.label}>{selection.product.label}</label>
            <select name={selection.product.name}>
                <option defaultValue={selection.product.name}>{selection.product.name}</option>
                <option value={selection.product.value_one}>{selection.product.value_one}</option>
                <option value={selection.product.value_two}>{selection.product.value_two}</option>
                <option value={selection.product.value_three}>{selection.product.value_three}</option>
            </select>
        </React.Fragment>
    )
}