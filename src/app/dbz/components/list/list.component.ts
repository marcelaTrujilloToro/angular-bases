import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 10, id: uuid() },
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   this.onDeleteId.emit(index);
  // }

  deleteCharacterById(id: string): void {
    this.onDeleteId.emit(id);
  }
}
