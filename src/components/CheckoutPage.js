import React from "react";
import styled from "styled-components";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import Input from "../styles/Input";
import Button from "../styles/Button";
import '../css/Checkout.css'

function CheckoutPage (){
    return (
        <CheckoutPageWrapper>
            <h1 id="checkout-pagetitle">Checkout Page</h1>
            <h2>Billing Information</h2>

            <form>
                <NameField>
                    <FormField className="name-input">
                    <Label htmlFor="first-name">First name</Label>
                    <Input  type="text" 
                        id="first-name"
                        autoComplete="off"
                        placeholder=""/>
                    </FormField>
                    <FormField className="name-input">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input  type="text" 
                        id="last-name"
                        autoComplete="off"
                        placeholder=""/>
                    </FormField>
                </NameField>
                <FormField>
                <Label htmlFor="email">Email</Label>
                <Input
                type="text"
                id="email"
                autoComplete="current-email"
                />
                </FormField>

                <FormField>
                <Label htmlFor="email">Card Information</Label>
                <Input
                type="text"
                id="card-information"
                placeholder="4242 42424 4242 4242"
                />
                <Inline>
                <Input
                type="text"
                id="card-information"
                placeholder="12/24"
                />
                <Input
                type="text"
                id="card-information"
                placeholder="123"
                />
                </Inline>
                </FormField>

                <Ordersummary>
                    <h1>Order Summary</h1>
                    <div className="ordersummary-item"><h3>1 x General Admission</h3><span>$22.00</span></div>
                    <div className="ordersummary-item"><h3>Fees</h3><span>$2.97</span></div>
                    <div className="ordersummary-item"><h3>Total</h3><span>$24.97</span></div>
                </Ordersummary>

                <ButtonBase>
                    <Button>Place Order</Button>
                </ButtonBase>
                    
            </form>
        </CheckoutPageWrapper>
    )
}


const  CheckoutPageWrapper = styled.div`
margin: 25px 200px;
padding: 20px;
`

const NameField = styled.div`
display: flex;
gap: 5em;
`

const Inline = styled.div`
display: flex;
margin: 20px auto;
gap: 4em;
`
const Ordersummary = styled.div`
align-items: center;
justify-content: space-between;
margin: 50px 0px;
`
const ButtonBase = styled.div`
align-items: center;
`
export default CheckoutPage;