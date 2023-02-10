import * as React from 'react';
import { Button, DataTable, Text } from 'react-native-paper';


const ListBday = () => {
  

  return (
    <DataTable>
      <Text style={{textAlign:"center", color:"#E83A59"}}  variant='bodyLarge'>{"\n"}Upcoming Birthdays{"\n"}</Text>
      {/* <DataTable.Header>
        <DataTable.Title >Name</DataTable.Title>
        <DataTable.Title numeric>Date</DataTable.Title>
        <DataTable.Title numeric>Edit</DataTable.Title>
        <DataTable.Title numeric>Delete</DataTable.Title>
      </DataTable.Header> */}
      


      <DataTable.Row >
        <DataTable.Cell textStyle={{color:"white"}}>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell textStyle={{color:"white"}} numeric>Feb 15</DataTable.Cell>
        <DataTable.Cell textStyle={{color:"white"}} numeric><Button textColor='#EDC126' icon='lead-pencil' ></Button></DataTable.Cell>
        <DataTable.Cell textStyle={{color:"white"}} numeric><Button textColor='#B4161B' icon='delete' ></Button></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell textStyle={{color:"white"}} >Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell textStyle={{color:"white"}} numeric>Feb 20</DataTable.Cell>
        <DataTable.Cell textStyle={{color:"white"}} numeric><Button textColor='#EDC126' icon='lead-pencil' ></Button></DataTable.Cell>
        <DataTable.Cell textStyle={{color:"white"}} numeric><Button textColor='#B4161B' icon='delete' ></Button></DataTable.Cell>
      </DataTable.Row>

      
    </DataTable>
  );
}

export default ListBday;