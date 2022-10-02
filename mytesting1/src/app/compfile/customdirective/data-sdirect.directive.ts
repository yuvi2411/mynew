import { Directive, ElementRef, HostListener, } from '@angular/core';

@Directive({
  selector: '[appDataSdirect]'
})
export class DataSdirectDirective {

  constructor(private element:ElementRef) { }
 
 private thelement:boolean=false
  @HostListener('click')
  private mffunc(){
    this.thelement=!this.thelement
    if(this.thelement){
      this.element.nativeElement.classList.add('toogle')
    }else {
      this.element.nativeElement.classList.remove('toggle')
    }


    }
  }
  


  


