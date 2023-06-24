import React from 'react';

import { View, Text, StyleSheet, SectionList } from 'react-native';

const Items = [
  { title: 'Cakes', data: 
  ['Chocolate Cake','Marble Cake' , 'Cold cake' , 'Cup cakes']  
  },
  { title: 'Brownies', data:['Chocolate Brownie','Walnut Brownie' , 'Diet Brownies'] },
    { title: 'Cookies', data:['Chocolate cookies','Choco-Chipies' ] },
    { title: 'Breads', data:['Banana Bread'] },
    { title: 'Delights', data:['Oreo Delight','Mango Delight' , 'Strawberry Delight'] },
    { title: 'Doughnuts', data:['Chocolate Doughnuts' , 'Plain Doughnuts'] },
];
const Item = ({ name}) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    
  </View>
);

const Section = ({section}) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.sectionHeader}>{section.title}</Text>
    </View>
);

const Separator = () => <View style={menuStyles.separator} />;


const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item} />;



const renderSectionHeader = ({section}) => <Section section={section} />;

  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(item ) => item }
        sections={Items}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
       
        ItemSeparatorComponent={Separator}></SectionList>
    </View>
  );
};

// Add styles to the component
const menuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
  },
  sectionHeader: {
    backgroundColor: '#ffdead',
    color: '#495E57',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default MenuItems;
