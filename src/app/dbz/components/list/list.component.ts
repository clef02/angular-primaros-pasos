import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid } from 'uuid'

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{



  @Input() 

  public characterList:Character[] = [{
    id: uuid(),
    name: 'trunk',
    power: 10,
  }]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
 

  onDeleteid( id?: string){
    if ( !id ) return;
    console.log(id)
    this.onDelete.emit(id)
  }



}
