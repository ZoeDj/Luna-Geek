import React, { useEffect } from "react";
import Axios from "axios";

function PaypalButton(props) {

    const [sdkReady, setSdkReady]= useState(false);

    const addPaypalSdk = () => {
        const result = await Axios.get("/api/config/paypal");
        const clientID = result.data;
        const script = document.createElement("script");
        script.type= "text/javascript";
        script.src = "http://www.paypal.com/sdk/js?client-id=" + clientID;
        script.async = true;
        script.onload = () =>{
            setSdkReady(true);
        }
        document.body.appendChild(script);
    }

    const createOrder = (data, actions) => actions.order.create({
        purchase_units: [
            {
                amount:{
                    currency_code: "USD",
                    vaule: props.amount
                }
            }
        ]
    });

    const onApprove = (data, actions)=> actions.order
    .capture()
    .then(details => props.onCuccess(data, details))
    .catch(err => console.log(err));

  useEffect(() => {
    if (!window.paypal) {
        addPaypalSdk();
    }
    return () => {
      //
    };
  }, []);

  if(!sdkReady) {
      return <div>Loading...</div>
  }
}

const Button = window.paypal.Buttons.driver("react", {React, ReactDOM});

return <Button {...props} createOrder ={(data, actions) => createOrder(data, actions)} 
onApprove={(data, actions)=> onApprove(data, actions)}/>

export default PaypalButton;
