import React, { useState, useEffect } from 'react';
import { Button, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import DocumentPicker from 'react-native-document-picker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];
var accessToken = "AIzaSyCMPTu8js8rBafR3FDWlEBdPOIciDlrhmA";
var metadata = {
  snippet: {
    "title": 'Test video upload',
    "description": 'Description of uploaded video',
    "categoryId": 22
  },
  status: {
    "privacyStatus": 'private',
    "embeddable": true,
    "license": "youtube"
  }
}; function ListingEditScreen() {
  // const location = useLocation();
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    console.log(selectedVideo)
  }, [selectedVideo]);

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => handleFormSubmit(values)}
        validationSchema={validationSchema}
      >
        <Button onPress={pickVideo} title="Choose Video" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );

  function handleFormSubmit(values) {
    console.log('submit', values)
    if (selectedVideo == null) return;
    var uploader = new MediaUploader({
      baseUrl: 'https://www.googleapis.com/upload/youtube/v3/videos',
      file: selectedVideo.uri,
      token: accessToken,
      metadata: metadata,
      params: {
        part: Object.keys(metadata).join(',')
      },
      onError: function (data) {
        // onError code
        console.log(data)
      }.bind(this),
      onProgress: function (data) {
        // onProgress code
        console.log(data)

      }.bind(this),
      onComplete: function (data) {
        // onComplete code
        console.log(data)

      }.bind(this)
    });
    uploader.upload()


  }

  function pickVideo() {
    DocumentPicker.getDocumentAsync().then((res) => {
      if (res.type == "success") {
        setSelectedVideo(res);
        handleFormSubmit(res)
      } else {
        setSelectedVideo(null);
      }
    }).catch((res) => {
      setSelectedVideo(null);

    })
  }



}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
