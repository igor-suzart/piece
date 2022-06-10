import { IonModal } from "@ionic/react";
import React from "react";

class FullNot extends React.Component<{not:any,open:boolean,close:any}>{
    componentDidMount(){
        console.log(this.props.not)
    }
    render(){
        return(
            <IonModal>
            </IonModal>
        )
    }
}
export default FullNot