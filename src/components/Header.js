import React from "react"
import { View, Text} from "react-native";



 class Header extends React.Component{
    render(){
       const {viewStyle, textStyle} = styles
       const {headerText} = this.props
        return(
            <View style={viewStyle}>
                <Text style={textStyle}>{headerText}</Text>
            </View>            
        )
    }
}

const styles=({
    viewStyle:{
        backgroundColor:"#f8f8f8",
        justifyContent: "center",
        alignItems:"center",
        height:70,
        paddingTop: 20,
        shadowColor:"#000",
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        elevation:4,
        position:'relative'
    },
    textStyle:{
        fontSize:20
    }
})

export default  Header ;