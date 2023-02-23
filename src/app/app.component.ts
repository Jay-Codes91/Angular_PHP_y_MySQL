import { Component, OnInit } from '@angular/core';
import { DatosService } from './Service/datos.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BDMysql';
  form: FormGroup;
  personas: any[] = [];
  msj: string = "";
  constructor(private ser: DatosService, private fb: FormBuilder){
    this.msj = this.ser.msj;
    this.form = this.fb.group({
      cedula: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],
      edad: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(3)
      ])],
    })
  }
  ngOnInit(): void {
    this.obtenerPersonas();
  }

  obtenerPersonas(){
    this.ser.getUsuarios().subscribe(data=>{
      this.personas = data;
    })
  }

  agregarPersona(){

    const persona ={
      cedula: this.form.get('cedula')?.value,
      nombre: this.form.get('nombre')?.value,
      edad: this.form.get('edad')?.value
    }

    this.ser.addUser(persona).subscribe(data=>{
      this.obtenerPersonas();
      this.form.reset();
      alert("Usuario añadido exitosamente");
      
    })
  }

  eliminarPersona(id: number){
    this.ser.deleteUser(id).subscribe(data=>{

      alert("Empleado eliminado");
      this.obtenerPersonas();
    })
  }
}
