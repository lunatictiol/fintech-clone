import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import RoundBtn from '@/components/RoundButton';
import Dropdown from '@/components/DropDown';

const Page = () => {
    const balace = 1420;
    const onAddMoney=()=>{}

  return (
    <ScrollView style={{backgroundColor:Colors.background}}>
    <View style={styles.account}>
     <View style={styles.row}>
           
       <Text style={styles.balance}>{balace}</Text>
       <Text style={styles.currency}>€</Text>
     
     </View>
    </View>
    <View style={styles.actionRow}>
        <RoundBtn text='Add money' icon={"add"} onPress={onAddMoney}/>
        <RoundBtn text='Exchange' icon={"refresh"} onPress={onAddMoney}/>
        <RoundBtn text='Details' icon={"list"} onPress={onAddMoney}/>
        <Dropdown/>
    </View>
    </ScrollView>
  )
}

export default Page

const styles = StyleSheet.create({
    account: {
        margin: 80,
        alignItems: 'center',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 10,
      },
      balance: {
        fontSize: 50,
        fontWeight: 'bold',
      },
      currency: {
        fontSize: 20,
        fontWeight: '500',
      },
      actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
      },
      transactions: {
        marginHorizontal: 20,
        padding: 14,
        backgroundColor: '#fff',
        borderRadius: 16,
        gap: 20,
      },
      circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
      },
})