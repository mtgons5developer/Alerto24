import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "My Videos",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
  {
    title: "Log Out",
    icon: {
      name: "logout",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.LOGIN,
  },

];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Jeh Herbosa Almeda"
          subTitle="DataXPhilippines.com"
          image={require("../assets/Jeh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      {/* <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}        
      /> */}
    </Screen >
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
