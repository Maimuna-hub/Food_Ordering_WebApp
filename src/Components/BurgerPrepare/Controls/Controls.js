import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="me-auto ml-5" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{props.label}</div>
            <button className="btn btn-dark btn-sm m-1" onClick={props.remove}>-</button>
            <button className="btn btn-sm m-1" style={{ backgroundColor: "#FBB03B" }} onClick={props.added}>+</button>
        </div>
    )
}

const Controls = props => {
    return (
        <div className="container ml-md-5" style={{ textAlign: "center" }}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{
                    backgroundColor: "#1B1A1A",
                }}>
                    <h4 style={{
                        color: "#FFBA00",
                    }}>Add Ingredients</h4>
                </CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl
                                label={item.label}
                                type={item.type}
                                key={Math.random()}
                                added={() => props.ingredientAdded(item.type)}
                                remove={() => props.ingredientRemoved(item.type)}
                            />
                        })
                    }
                </CardBody>
                <CardFooter><h5>Price:<strong>{props.price}</strong> BDT</h5></CardFooter>
                <Button style={{ backgroundColor: "#1B1A1A", color: "#FFBA00" }} disabled={!props.purchasable} onClick={props.toggleModal}>Order Now</Button>
            </Card>
        </div >
    )
}

export default Controls;