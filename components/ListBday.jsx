import * as React from 'react';
import { Button, DataTable, Text } from 'react-native-paper';


const ListBday = () => {
  

  return (
    <DataTable>
      {/* <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Edit</DataTable.Title>
        <DataTable.Title>Delete</DataTable.Title>
      </DataTable.Header> */}
      

      <Text style={{textAlign:"center", color:"#E83A59"}}  variant='displaySmall'>{"\n"}Upcoming Birthdays{"\n"}</Text>

      <DataTable.Row >
        <DataTable.Cell >Frozen yogurt</DataTable.Cell>
        <DataTable.Cell >Feb 15</DataTable.Cell>
        <DataTable.Cell ><Button icon='lead-pencil' ></Button></DataTable.Cell>
        <DataTable.Cell ><Button icon='delete' ></Button></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>Feb 20</DataTable.Cell>
        <DataTable.Cell numeric><Button icon='lead-pencil' ></Button></DataTable.Cell>
        <DataTable.Cell numeric><Button icon='delete' ></Button></DataTable.Cell>
      </DataTable.Row>

      
    </DataTable>
  );
}

export default ListBday;