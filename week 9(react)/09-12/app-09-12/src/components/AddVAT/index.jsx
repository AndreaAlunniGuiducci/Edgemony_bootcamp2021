

const AddVAT = (props) => {

    const price = props.price;
    const vat = props.vat;
    return (
        <div className="AddVAT">
            <p>Il prezzo compreso I.V.A. è {parseInt(((price * vat) / 100) + price)}€</p>
        </div>
    )
}

export default AddVAT;