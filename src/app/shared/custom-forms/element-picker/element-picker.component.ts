import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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

  selectedForm: FormGroup;
  selectedElements: any[]; // Form input
  quantityExternal: number;

  _availableElements$: BehaviorSubject<any[]> = new BehaviorSubject([]); // Hangars from input that have not been selected yet
  public readonly availableElements$: Observable<any[]> = this._availableElements$.asObservable();
  filter$: Observable<string>; // text to filter list
  filteredAvailable$: Observable<any[]>; // filtered availables

  onChange: any = (selectedElements: any[]) => {};
  onTouch: any = () => {};

  onSelectElement(element: any) {
    this.availableElements =
      this.availableElements.filter(e => e.id !== element.id);
    this._availableElements$.next(this.availableElements);
    this.addElementForm();
    this.selectedElements.push(element);
    this.onChange(this.selectedElements);
  }

  onUnselectElement(element: any, index: number) {
    this.availableElements.push(element);
    this._availableElements$.next(this.availableElements);
    this.removeElementForm(index);
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


  constructor(private fb: FormBuilder) {
    this.selectorForm = this.fb.group({
      searchControl: new FormControl()
    });
    this.selectedForm = this.fb.group({
      elementsControl: this.fb.array([])
    });
  }

  ngOnInit() {
    this._availableElements$.next(this.availableElements); // Emitimos el primer valor

    this.filter$ = this.selectorForm.controls.searchControl.valueChanges.pipe(startWith(''));
    this.filteredAvailable$ = combineLatest(this.availableElements$, this.filter$).pipe(
      map(([availables, filterVal]) => availables.filter(av => av.name.includes(filterVal)))
      );
  }


  createElementForm(): FormGroup {
    return this.fb.group({
      name: ['testname'],
      quantityControl: [10]
    });
  }

  addElementForm() {
    const elementsControl = this.selectedForm.controls.elementsControl as FormArray;
    elementsControl.push(this.createElementForm());
  }

  removeElementForm(index: number) {
    const elementsControl = this.selectedForm.controls.elementsControl as FormArray;
    console.log(elementsControl);
    elementsControl.removeAt(index);
  }

}
