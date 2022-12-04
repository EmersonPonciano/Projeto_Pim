import React from "react";
import Table from 'react-bootstrap/Table';

export class Carros extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            alunos: []
        }
    }

    render(){
        return (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Modelo</th>
                  <th>Ano</th>
                  <th>Proprietário</th>
                  <th>Status</th>
                  <th>Horário</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ford Focus</td>
                  <td>2020</td>
                  <td>Marcelo</td>
                  <td>Em manutenção</td>
                  <td>19:10</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mercedes</td>
                  <td>2020</td>
                  <td>Luzia</td>
                  <td>Em manutenção</td>
                  <td>19:30</td>
                </tr>
                <tr>
                <td>3</td>
                  <td>MB 1719</td>
                  <td>2020</td>
                  <td>Soraya</td>
                  <td>Em manutenção</td>
                  <td>19:30</td>
                </tr>
              </tbody>
            </Table>
          );
        }
}