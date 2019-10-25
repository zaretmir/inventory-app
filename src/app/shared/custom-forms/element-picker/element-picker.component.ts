import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup } from '@angular/forms';
import { Observable, of, from, combineLatest, Subject, PartialObserver, BehaviorSubject } from 'rxjs';
import { map, filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-element-picker',
  templateUrl: './element-picker.component.html',
  styleUrls: ['./element-picker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ElementPickerComponent),
    multi: true
  }]
})
export class ElementPickerComponent implements ControlValueAccessor, OnInit {

  @Input() label: string;
  @Input() availableElements: any[]; // TODO: would be an observer

  selectorForm: FormGroup;

  _availableElements$: BehaviorSubject<any[]> = new BehaviorSubject([]); // Hangars from input that have not been selected yet
  public readonly availableElements$: Observable<any[]> = this._availableElements$.asObservable();
  filter$: Observable<string>; // text to filter list
  filteredAvailable$: Observable<any[]>; // filtered availables

  selectedElements: any[]; // Form input

  onChange: any = (selectedElements: any[]) => {};
  onTouch: any = () => {};

  onSelectElement(element: any) {
    this.availableElements =
      this.availableElements.filter(e => e.id !== element.id);
    this._availableElements$.next(this.availableElements);
    this.selectedElements.push(element);
    this.onChange(this.selectedElements);
  }

  onUnselectElement(element: any) {
    this.availableElements.push(element);
    this._availableElements$.next(this.availableElements);
    this.selectedElements =
      this.selectedElements.filter(e => e.id !== element.id);
    this.onChange(this.selectedElements);
  }

  writeValue(value: any[]): void {
    this.selectedElements = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }


  constructor() {
    this.selectorForm = new FormGroup({
      searchControl: new FormControl()
    });
  }

  ngOnInit() {
    this._availableElements$.next(this.availableElements); // Emitimos el primer valor

    this.filter$ = this.selectorForm.controls.searchControl.valueChanges.pipe(startWith(''));
    this.filteredAvailable$ = combineLatest(this.availableElements$, this.filter$).pipe(
      map(([availables, filterVal]) => availables.filter(av => av.name.includes(filterVal)))
      );
  }

}
