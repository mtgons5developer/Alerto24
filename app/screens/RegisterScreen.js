import React,{useState} from "react";
import { StyleSheet,Text,TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { Sign_up } from "../api";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";




const RegisterScreen=()=> {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

 const SignUpSubmit = () => {
		fetch(Sign_up.BASE_URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				Name: Name,
				Email: Email,
				Password: Password,
				
			})
		})
			.then((response) => response.json())
			.then((json) => {
				if (json.status == true) {
					this.props.navigation.navigate('Login');

					// const data = performTimeConsumingTask();
				} else {
					alert('SignUp Failed');
					console.log(json.errors.Name);
					console.log(json.errors.Email);
					console.log(json.errors.Password);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};


  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
          handleChange={(name)=>{setName(name)}}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          handleChange={(email)=>{setEmail(email)}}
  
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          handleChange={(pass)=>{setPassword(pass)}}
        />
       <SubmitButton title={'Submit'} handleSubmit={()=>{SignUpSubmit()}}/>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button:{
    borderRadius:20,
    borderWidth:1,
    alignContent:'center',
    justifyContent:'center'
  }
});

export default RegisterScreen;
